import { Play, CheckCircle2, Flame, Trophy } from 'lucide-react';

export default function PracticeArena() {
  return (
    <div className="rounded-3xl border border-line/10 bg-panel p-5 shadow-2xl">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div><div className="text-lg font-bold text-ink">Practice Arena Preview</div><div className="text-sm text-muted">Solve, run, check and learn instantly.</div></div>
        <div className="flex gap-2 text-xs">{['Python','SQL','Pandas','DSA'].map(x => <span key={x} className={`rounded-full border px-3 py-1 ${x==='SQL'?'border-orange-400/40 bg-orange-400/10 text-accent2':'border-line/10 bg-panel2/60 text-muted'}`}>{x}</span>)}</div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-line/10 bg-[var(--code-bg)]">
        <div className="grid lg:grid-cols-[1fr_180px]">
          <pre className="overflow-auto p-5 text-xs leading-6 text-muted"><code>{`-- Find top 5 customers by total order value
SELECT c.customer_name,
       SUM(o.order_value) AS total_value
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_date >= '2026-01-01'
GROUP BY c.customer_name
ORDER BY total_value DESC
LIMIT 5;`}</code></pre>
          <div className="border-t border-line/10 p-5 text-sm lg:border-l lg:border-t-0">
            <div className="text-muted">Difficulty</div><div className="mt-1 font-bold text-accent2">Medium</div>
            <div className="mt-5 text-muted">Success rate</div><div className="mt-1 text-2xl font-extrabold text-emerald-400">78%</div>
            <div className="mt-5 text-muted">Solved by</div><div className="mt-1 font-bold text-ink">1,245 builders</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 border-t border-line/10 p-4"><button className="inline-flex items-center gap-2 rounded-lg border border-line/10 bg-panel2/60 px-4 py-2 text-sm font-semibold text-ink"><Play className="h-4 w-4" />Run</button><button className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-slate-950"><CheckCircle2 className="h-4 w-4" />Check Answer</button></div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">{[[Flame,'7 day','Streak'],[CheckCircle2,'86','Solved'],[Trophy,'92%','Accuracy'],[Trophy,'Top 12%','Rank']].map(([Icon,val,label]) => <div key={label} className="rounded-xl border border-line/10 bg-panel2/55 p-3"><Icon className="h-4 w-4 text-accent"/><div className="mt-2 font-bold text-ink">{val}</div><div className="text-xs text-muted">{label}</div></div>)}</div>
    </div>
  );
}
