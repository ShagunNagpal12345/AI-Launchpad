export default function SectionHeading({ eyebrow, title, text, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <div className="mb-3 font-mono text-xs uppercase tracking-[.22em] text-accent2">{eyebrow}</div>
      <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-muted md:text-lg">{text}</p>}
    </div>
  );
}
