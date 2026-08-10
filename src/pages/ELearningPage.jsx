import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Suspense } from "react";
import { elearningBySlug } from "../data/elearnings";

export default function ELearningPage({ theme = "light" }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const item = elearningBySlug[slug];
  if (!item) return <Navigate to="/elearning" replace />;
  const Course = item.component;
  function handleCourseNavigation(event) {
    const legacyBackLink = event.target.closest("main header a[href='/']");
    if (!legacyBackLink) return;
    event.preventDefault();
    navigate("/elearning");
  }

  return <div onClickCapture={handleCourseNavigation} className="elearning-course-shell"><Suspense fallback={<div className="flex min-h-[70vh] items-center justify-center"><div className="h-10 w-10 animate-spin rounded-full border-4 border-cyan-500/20 border-t-cyan-500" /></div>}><Course theme={theme} /></Suspense></div>;
}
