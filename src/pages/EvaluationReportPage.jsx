import { ArrowLeft, Download, ExternalLink, FileText } from "lucide-react";
import { Link } from "react-router-dom";

import evaluationReport from "../assets/Assignments/Evaluation_Report.pdf";

export default function EvaluationReportPage({ theme = "light" }) {
  const isLight = theme === "light";

  return (
    <main className={`min-h-screen px-4 py-8 sm:px-8 lg:px-10 ${isLight ? "bg-[#f7f9fc] text-[#111a3b]" : "bg-[#020b18] text-white"}`}>
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link to="/#career-roadmap" className={`inline-flex min-h-11 items-center gap-2 rounded-xl border px-4 text-sm font-bold ${isLight ? "border-slate-200 bg-white text-[#0b2d61] hover:border-blue-300" : "border-white/10 bg-white/[0.04] text-white hover:border-cyan-400/30"}`}>
              <ArrowLeft className="h-4 w-4" /> Back to Career Roadmap
            </Link>
            <div className="mt-6 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange-500/10 text-orange-500"><FileText className="h-5 w-5" /></span>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-orange-500">Personalized assessment</p>
                <h1 className="mt-1 text-2xl font-black tracking-[-0.035em] sm:text-3xl">Evaluation Report</h1>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={evaluationReport} target="_blank" rel="noreferrer" className={`inline-flex min-h-11 items-center gap-2 rounded-xl border px-4 text-sm font-bold ${isLight ? "border-slate-200 bg-white text-[#0b2d61]" : "border-white/10 bg-white/[0.04] text-white"}`}>
              Open PDF <ExternalLink className="h-4 w-4" />
            </a>
            <a href={evaluationReport} download="DataSense_Evaluation_Report.pdf" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#ef6c28] px-4 text-sm font-bold text-white">
              Download <Download className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className={`mt-7 overflow-hidden rounded-[20px] border ${isLight ? "border-slate-200 bg-white shadow-[0_24px_70px_-48px_rgba(15,23,42,0.4)]" : "border-white/10 bg-[#0c1a2d]"}`}>
          <object
            data={evaluationReport}
            type="application/pdf"
            aria-label="DataSense Evaluation Report"
            className="h-[calc(100vh-180px)] min-h-[680px] w-full"
          >
            <embed
              src={evaluationReport}
              type="application/pdf"
              className="h-[calc(100vh-180px)] min-h-[680px] w-full"
            />
            <div className="grid min-h-[680px] place-items-center px-6 py-16 text-center">
              <div>
                <FileText className="mx-auto h-12 w-12 text-orange-500" />
                <h2 className="mt-4 text-xl font-black">PDF preview is unavailable in this browser</h2>
                <p className={`mt-2 text-sm ${isLight ? "text-slate-600" : "text-slate-300"}`}>Open the evaluation report in a new tab to view it.</p>
                <a href={evaluationReport} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#ef6c28] px-5 text-sm font-bold text-white">
                  Open Evaluation Report <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </object>
        </div>
      </div>
    </main>
  );
}
