import Image from "next/image";
import type { GameDesignItem } from "@/src/data/siteContent";

export function GameDesign({
  heading,
  games,
}: {
  heading: string;
  games: readonly GameDesignItem[];
}) {
  return (
    <section className="site-shell content-section game-design-section" id="game-design">
      <h2 className="section-heading">{heading}</h2>
      <div className="game-design-grid">
        {games.map((game, index) => (
          <article className="game-design-item" key={game.id}>
            <a
              className="game-design-link"
              href={game.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${game.title} prototype`}
            >
              <span className="game-design-image-wrap">
                <Image
                  className="game-design-image"
                  src={game.image}
                  alt={game.imageAlt}
                  width={1600}
                  height={900}
                  sizes="(max-width: 700px) 100vw, 46vw"
                />
              </span>
              <span className="game-design-meta">
                <span className="game-design-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{game.format}</span>
              </span>
              <span className="game-design-title-row">
                <span className="game-design-title">
                  {game.title} <span lang="zh-CN">《{game.titleZh}》</span>
                </span>
                <span className="game-design-arrow" aria-hidden="true">
                  ↗
                </span>
              </span>
              <span className="game-design-description">{game.description}</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
