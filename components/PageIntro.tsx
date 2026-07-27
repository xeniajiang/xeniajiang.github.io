export function PageIntro({
  kicker,
  title,
  introduction,
}: {
  kicker: string;
  title: string;
  introduction: string;
}) {
  return (
    <header className="site-shell editorial-page-header">
      <p className="section-kicker">{kicker}</p>
      <h1>{title}</h1>
      <p>{introduction}</p>
    </header>
  );
}
