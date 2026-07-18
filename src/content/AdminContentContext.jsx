import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_ADMIN_CONTENT } from "./defaultAdminContent";

const SAVED_STORAGE_KEY = "ai-launchpad-admin-content-saved";
const DRAFT_STORAGE_KEY = "ai-launchpad-admin-content-draft";
const PREVIEW_STORAGE_KEY = "ai-launchpad-admin-content-preview";

const AdminContentContext = createContext(null);

function cloneContent(value) {
  return JSON.parse(JSON.stringify(value));
}

function readStorage(key) {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const stored = window.localStorage.getItem(key);
    if (!stored) return null;
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function AdminContentProvider({ children }) {
  const location = useLocation();
  const [savedContent, setSavedContent] = useState(() => {
    const stored = readStorage(SAVED_STORAGE_KEY);
    return stored
      ? { ...cloneContent(DEFAULT_ADMIN_CONTENT), ...stored }
      : cloneContent(DEFAULT_ADMIN_CONTENT);
  });
  const [draftContent, setDraftContent] = useState(() => {
    const stored = readStorage(DRAFT_STORAGE_KEY);
    return stored
      ? { ...cloneContent(DEFAULT_ADMIN_CONTENT), ...stored }
      : cloneContent(DEFAULT_ADMIN_CONTENT);
  });

  const isAdminRoute = location.pathname.startsWith("/admin");
  const isPreviewMode = !isAdminRoute && new URLSearchParams(location.search).get("preview") === "1";

  const previewContent = useMemo(() => {
    const stored = readStorage(PREVIEW_STORAGE_KEY);
    return stored
      ? { ...cloneContent(DEFAULT_ADMIN_CONTENT), ...stored }
      : null;
  }, [location.search]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(SAVED_STORAGE_KEY, JSON.stringify(savedContent));
  }, [savedContent]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draftContent));
  }, [draftContent]);

  const content = isAdminRoute
    ? draftContent
    : isPreviewMode && previewContent
      ? previewContent
      : savedContent;

  const hasUnsavedChanges =
    JSON.stringify(draftContent) !== JSON.stringify(savedContent);

  const value = useMemo(
    () => ({
      content,
      savedContent,
      draftContent,
      hasUnsavedChanges,
      updateSection(sectionKey, nextValue) {
        setDraftContent((current) => ({
          ...current,
          [sectionKey]:
            typeof nextValue === "function"
              ? nextValue(current[sectionKey])
              : nextValue,
        }));
      },
      resetSection(sectionKey) {
        setDraftContent((current) => ({
          ...current,
          [sectionKey]: cloneContent(DEFAULT_ADMIN_CONTENT[sectionKey]),
        }));
      },
      resetAll() {
        setDraftContent(cloneContent(DEFAULT_ADMIN_CONTENT));
      },
      saveChanges() {
        setSavedContent(cloneContent(draftContent));
        if (typeof window !== "undefined") {
          window.localStorage.setItem(
            SAVED_STORAGE_KEY,
            JSON.stringify(draftContent),
          );
        }
      },
      previewChanges() {
        if (typeof window === "undefined") return;
        window.localStorage.setItem(
          PREVIEW_STORAGE_KEY,
          JSON.stringify(draftContent),
        );
      },
      clearPreview() {
        if (typeof window === "undefined") return;
        window.localStorage.removeItem(PREVIEW_STORAGE_KEY);
      },
      discardDraft() {
        setDraftContent(cloneContent(savedContent));
      },
    }),
    [content, savedContent, draftContent, hasUnsavedChanges]
  );

  return (
    <AdminContentContext.Provider value={value}>
      {children}
    </AdminContentContext.Provider>
  );
}

export function useAdminContent() {
  const context = useContext(AdminContentContext);

  if (!context) {
    throw new Error("useAdminContent must be used within AdminContentProvider");
  }

  return context;
}
