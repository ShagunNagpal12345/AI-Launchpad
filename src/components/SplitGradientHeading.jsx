export default function SplitGradientHeading({
  as: Tag = 'h2',
  theme = 'light',
  className = '',
  plain = '',
  accent = '',
  suffix = '',
}) {
  const normalizedTheme = String(theme).toLowerCase();
  const isLight = ['light', 'day', 'white'].includes(normalizedTheme);
  const accentClassName = isLight
    ? 'bg-[linear-gradient(90deg,#268df2_0%,#1fc7d4_24%,#35c97d_45%,#d3d94e_65%,#ff9a2f_82%,#ef5a6f_100%)] [text-shadow:0_10px_22px_rgba(38,141,242,0.10)]'
    : 'bg-[linear-gradient(90deg,#58a9f5_0%,#53d5df_22%,#67d39a_42%,#ffd45c_62%,#ff9b54_80%,#f2556f_100%)]';

  return (
    <Tag className={className}>
      {plain ? <span>{plain}</span> : null}
      {plain && accent ? ' ' : null}
      {accent ? (
        <span className={`bg-clip-text text-transparent ${accentClassName}`}>
          {accent}
        </span>
      ) : null}
      {suffix ? ` ${suffix}` : null}
    </Tag>
  );
}
