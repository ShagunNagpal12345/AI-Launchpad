export default function CardGrid({ items, columns = 3 }) {
  const grid = columns === 6 ? 'md:grid-cols-3 xl:grid-cols-6' : 'md:grid-cols-2 xl:grid-cols-3';
  return (
    <div className={`mt-10 grid gap-4 ${grid}`}>
      {items.map(({ icon: Icon, title, text }) => (
        <article key={title} className="group rounded-2xl border border-line/10 bg-panel p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-panel2">
          <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-line/10 bg-panel2/70 text-accent2"><Icon className="h-5 w-5" /></div>
          <h3 className="font-bold text-ink">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
        </article>
      ))}
    </div>
  );
}
