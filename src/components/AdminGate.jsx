import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ADMIN_PASSWORD = "Exl@112021";
const SESSION_KEY = "ai-launchpad-admin-auth";

export default function AdminGate({ children }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setIsAuthenticated(
      window.sessionStorage.getItem(SESSION_KEY) === "true",
    );
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === ADMIN_PASSWORD) {
      window.sessionStorage.setItem(SESSION_KEY, "true");
      setIsAuthenticated(true);
      setError("");
      return;
    }

    setError("Incorrect password. Please try again.");
  };

  if (isAuthenticated) {
    return children;
  }

  return (
    <main className="min-h-screen bg-[#f4f7fb] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_48px_-38px_rgba(15,23,42,0.25)] sm:p-8">
        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-orange-500">
          Admin Console
        </p>
        <h1 className="mt-2 text-[28px] font-black tracking-[-0.04em] text-slate-950">
          Enter password
        </h1>
        <p className="mt-3 text-[14px] leading-6 text-slate-600">
          This area is protected. Enter the admin password to continue.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="flex flex-col gap-2">
            <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-slate-500">
              Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                if (error) setError("");
              }}
              className="h-11 rounded-[12px] border border-slate-200 bg-white px-4 text-[14px] text-slate-900 outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
              placeholder="Enter admin password"
            />
          </label>

          {error ? (
            <p className="text-[13px] font-semibold text-red-600">{error}</p>
          ) : null}

          <button
            type="submit"
            className="inline-flex h-11 w-full items-center justify-center rounded-[12px] bg-[#f97316] px-4 text-[14px] font-bold text-white transition hover:bg-[#ea6b12]"
          >
            Unlock Admin Console
          </button>
        </form>
      </div>
    </main>
  );
}
