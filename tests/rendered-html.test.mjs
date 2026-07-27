import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the academic homepage structure", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Xenia Jiang — Academic Homepage — Xenia Jiang<\/title>/i);
  assert.match(html, /<header class="site-header">/);
  assert.match(html, /<main(?:\s|>)/);
  assert.match(html, /<h1 class="hero-title"[^>]*>Xenia Jiang<\/h1>/);
  assert.match(html, /姜浸月/);
  assert.match(html, /Peking University/i);
  assert.match(html, /id="research"/);
  assert.match(html, /Research Agendas/);
  assert.match(html, /aria-controls="research-projects"/);
  assert.match(html, /aria-controls="research-agenda-items"/);
  assert.match(html, /content-section is-compact/);
  assert.match(html, /agendas-section is-compact/);
  assert.match(html, />Show details<\/button>/);
  assert.match(html, /Research Keywords/);
  assert.ok(
    html.indexOf("Research Keywords") < html.indexOf('id="research"'),
  );
  assert.doesNotMatch(html, />Collapse<\/button>/);
  assert.match(html, />All<\/button>/);
  assert.doesNotMatch(html, /class="current-band"/);
  assert.match(
    html,
    /Accepted for presentation at the WPATH Scientific Symposium, 2026/,
  );
  assert.match(
    html,
    /Accepted for presentation at the American Anthropological Association Annual Meeting, 2026/,
  );
  const agendaStatement =
    "Her research agenda places body sizing, queer shame, queer identity adoption";
  assert.ok(html.indexOf(agendaStatement) > html.indexOf('id="research"'));
  assert.ok(html.indexOf(agendaStatement) < html.indexOf("Research Agendas"));
  assert.match(html, /Classification &amp; Gender Reading/);
  assert.match(html, /Computational Methods/);
  assert.match(html, /Trans Health &amp; Minority Stress/);
  assert.match(html, /Queer Affect/);
  assert.match(html, /Communities &amp; Institutions/);
  assert.match(html, /Identity &amp; \(Non-\)Recognition/);
  assert.match(html, /aria-pressed="true"/);
  assert.match(html, /id="writing"/);
  assert.match(html, /Selected Writing/);
  assert.match(html, /Why We Should Be Wary of/);
  assert.match(html, /writing-row is-linked themed-item is-featured/);
  assert.match(html, /id="biography"/);
  const desktopNavigation = html.match(
    /<nav class="desktop-nav"[\s\S]*?<\/nav>/,
  )?.[0];
  assert.ok(desktopNavigation);
  assert.doesNotMatch(desktopNavigation, />Biography</);
  assert.doesNotMatch(desktopNavigation, />CV</);
  assert.match(desktopNavigation, /Education [^<]+ Contact/);
  assert.doesNotMatch(desktopNavigation, />中文</);
  assert.match(html, /2026-02-23/);
  assert.doesNotMatch(html, /Dialogues &amp; Translations/);
  assert.match(html, /id="background"/);
  assert.doesNotMatch(html, /<footer\b/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
  assert.doesNotMatch(html, />Methods</i);
});

test("redirects retired editorial routes to homepage anchors", async () => {
  const redirects = {
    "/research": "/#research",
    "/writing": "/#writing",
    "/about": "/#background",
  };

  for (const [pathname, destination] of Object.entries(redirects)) {
    const response = await render(pathname);
    assert.equal(response.status, 307, pathname);
    assert.equal(new URL(response.headers.get("location")).pathname + new URL(response.headers.get("location")).hash, destination);
  }
});

test("server-renders the CV utility route", async () => {
  const response = await render("/cv");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<header class="site-header">/);
  assert.match(html, /<main(?:\s|>)/);
  assert.doesNotMatch(html, /<footer\b/);
});

test("keeps editable content centralized and imagery local", async () => {
  const [
    page,
    writingList,
    backgroundSection,
    content,
    css,
    packageJson,
  ] =
    await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/WritingList.tsx", import.meta.url), "utf8"),
    readFile(
      new URL("../components/BackgroundSection.tsx", import.meta.url),
      "utf8",
    ),
    readFile(new URL("../src/data/siteContent.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    ]);

  assert.match(page, /siteContent/);
  assert.match(
    content,
    /Xenia Jiang is a researcher in sociology and gender studies at Peking University\./,
  );
  assert.doesNotMatch(content, /\[INTRODUCTION TO BE PROVIDED BY XENIA\]/);
  assert.match(content, /Contained Gender Transgression/);
  assert.match(content, /The Imagined “Bad Money”/);
  assert.match(content, /Trans Health & Minority Stress/);
  assert.match(content, /label: "Queer Affect"/);
  assert.match(content, /communities-institutions/);
  assert.doesNotMatch(
    content,
    /community-boundaries|institutions-social-organization/,
  );
  assert.match(content, /classification-gender-reading/);
  assert.match(content, /computational-methods/);
  assert.match(content, /trans-health/);
  assert.doesNotMatch(content, /minority-stress-queer-affect/);
  assert.doesNotMatch(content, /"classification"|"gender-reading"/);
  assert.match(content, /想象中的“劣币”/);
  assert.match(content, /xxa\.xenia@gmail\.com/);
  assert.match(content, /0009-0002-0618-451X/);
  assert.match(content, /https:\/\/www\.linkedin\.com\/in\/xenia-jiang\//);
  assert.match(content, /primary: "Peking University"/);
  assert.match(
    content,
    /"Graduate Student · Trained in Sociology and Gender Studies"/,
  );
  assert.match(content, /primary: "Fudan University"/);
  assert.match(content, /"B\.S\. in Statistics"/);
  assert.match(content, /primary: "University of California, Berkeley"/);
  assert.match(content, /"Exchange Student"/);
  assert.match(content, /label: "WeChat Platform"/);
  assert.match(content, /value: "WitchTide"/);
  assert.doesNotMatch(content, /typeZh|typeEn/);
  assert.doesNotMatch(writingList, /titleZh|subtitleZh/);
  assert.match(writingList, /const isFeatured = item\.order <= 3/);
  assert.match(writingList, /writing-star/);
  assert.doesNotMatch(backgroundSection, /background-label/);
  assert.doesNotMatch(content, /Controlled Gender Transgression/);
  assert.match(content, /\/images\/portrait\.png/);
  assert.doesNotMatch(content, /WRITING TITLE TO BE PROVIDED/);
  assert.match(css, /@media \(max-width: 1024px\)/);
  assert.match(css, /@media \(max-width: 700px\)/);
  assert.match(css, /prefers-reduced-motion/);
  assert.doesNotMatch(css, /@view-transition/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
