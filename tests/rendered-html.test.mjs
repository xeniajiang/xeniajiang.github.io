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
  assert.match(
    html,
    /<title>Xenia Jiang 姜浸月 \| Sociology and Gender Research \| 巫语潮信<\/title>/i,
  );
  assert.equal((html.match(/<title>/gi) ?? []).length, 1);
  assert.match(
    html,
    /<meta name="description" content="Xenia Jiang \(姜浸月\) is a sociology and gender researcher at Peking University and the independent writer behind WitchTide \(巫语潮信\)\."\/>/,
  );
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/xeniajiang\.github\.io\/"\/>/,
  );
  assert.match(html, /<meta property="og:type" content="profile"\/>/);
  assert.match(
    html,
    /<meta property="og:site_name" content="Xenia Jiang"\/>/,
  );
  assert.match(
    html,
    /<meta property="og:image" content="https:\/\/xeniajiang\.github\.io\/images\/portrait\.png"\/>/,
  );
  assert.match(
    html,
    /<meta name="twitter:card" content="summary_large_image"\/>/,
  );
  assert.match(html, /<header class="site-header">/);
  assert.match(html, /<main(?:\s|>)/);
  assert.equal(
    (html.match(/type="application\/ld\+json"/g) ?? []).length,
    2,
  );
  assert.match(html, /"@type":"WebSite"/);
  assert.match(html, /"alternateName":\["Xenia Jiang Academic Homepage","WitchTide","巫语潮信"\]/);
  assert.match(html, /"@type":"ProfilePage"/);
  assert.match(html, /"mainEntity":\{"@type":"Person"/);
  assert.match(html, /"alternateName":\["姜浸月"\]/);
  assert.match(
    html,
    /"description":"Xenia Jiang \(姜浸月\) is a sociology and gender researcher at Peking University and the independent writer behind WitchTide \(巫语潮信\)\."/,
  );
  assert.match(
    html,
    /"sameAs":\["https:\/\/orcid\.org\/0009-0002-0618-451X","https:\/\/www\.linkedin\.com\/in\/xenia-jiang\/"\]/,
  );
  assert.match(
    html,
    /<h1 class="hero-title"[^>]*><a class="hero-title-link" href="\/writing\/xenia-jiang\/">Xenia Jiang<\/a><\/h1>/,
  );
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
  assert.equal((html.match(/class="writing-primary-link"/g) ?? []).length, 11);
  assert.equal(
    (html.match(/class="writing-primary-link is-disabled"/g) ?? []).length,
    0,
  );
  assert.doesNotMatch(html, /writing-translation-link/);
  assert.doesNotMatch(html, /writing-original-link|>Original</);
  assert.match(html, /aria-label="Writing language"/);
  assert.match(html, /aria-pressed="true">EN</);
  assert.match(
    html,
    /href="\/writing\/masculine-feminism\/" class="writing-primary-link"/,
  );
  assert.doesNotMatch(html, /writing-primary-link is-disabled/);
  assert.ok(
    html.indexOf("A Work of “Pure Fiction”") <
      html.indexOf("Between Silence and Silence"),
  );
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

test("server-renders the writing translation pages", async () => {
  const translated = await render("/writing/masculine-feminism");
  assert.equal(translated.status, 200);
  const translatedHtml = await translated.text();
  assert.match(
    translatedHtml,
    /Why We Should Be Wary of [^<]*Masculine Feminism/,
  );
  assert.match(translatedHtml, /Masculine Feminism and/);
  assert.match(translatedHtml, /Serano explicitly issues/);
  assert.match(
    translatedHtml,
    /href="\/#writing-masculinist-feminism"[^>]*>[^<]*Selected Writing/,
  );
  assert.match(translatedHtml, /"@type":"Article"/);
  assert.match(
    translatedHtml,
    /"author":\{"@type":"Person","@id":"https:\/\/xeniajiang\.github\.io\/#person","name":"Xenia Jiang","url":"https:\/\/xeniajiang\.github\.io\/writing\/xenia-jiang\/"\}/,
  );
  assert.equal(
    (
      translatedHtml.match(
        /href="\/#writing-masculinist-feminism"[^>]*>[^<]*Selected Writing/g,
      ) ?? []
    ).length,
    2,
  );
  assert.doesNotMatch(translatedHtml, /class="translation-status"/);

  const xingzhi = await render("/writing/xingzhi-translation");
  assert.equal(xingzhi.status, 200);
  const xingzhiHtml = await xingzhi.text();
  assert.match(xingzhiHtml, /A Finger Points, a Life Assigned/);
  assert.match(xingzhiHtml, /性指 contains the idea of assignment/);
  assert.doesNotMatch(xingzhiHtml, /class="translation-status"/);
  assert.doesNotMatch(xingzhiHtml, /freely reposted|\[\[IMAGE\]\]/);

  const layers = await render("/writing/layers-of-gender");
  assert.equal(layers.status, 200);
  const layersHtml = await layers.text();
  assert.match(layersHtml, /How Many Layers Does/);
  assert.match(layersHtml, /class="article-figure"/);
  assert.match(layersHtml, /Gendered Appearance &amp; Readability/);
  assert.doesNotMatch(layersHtml, /class="translation-status"/);

  const bodyTheory = await render("/writing/body-theory-toolbox");
  assert.equal(bodyTheory.status, 200);
  const bodyTheoryHtml = await bodyTheory.text();
  assert.match(bodyTheoryHtml, /Remapping the Felt Topography of Trans Embodiment/);
  assert.match(bodyTheoryHtml, /I propose nine exploratory criteria/);
  assert.match(bodyTheoryHtml, /Gender Identity, the Sexed Body/);
  assert.doesNotMatch(bodyTheoryHtml, /class="translation-status"/);
  assert.doesNotMatch(bodyTheoryHtml, /representative popular illustration|classic essay on feminine bodily phenomenology/);

  const nanniang = await render("/writing/nanniang-no-future");
  assert.equal(nanniang.status, 200);
  const nanniangHtml = await nanniang.text();
  assert.match(nanniangHtml, /Nanniang, No Future, and Anthropology/);
  assert.match(nanniangHtml, /<h3>Nanniang<\/h3>/);
  assert.match(nanniangHtml, /Institutions are rigid; human lives can be remarkably supple/);
  assert.doesNotMatch(nanniangHtml, /class="translation-status"/);

  const dress = await render("/writing/dress-gender-reading");
  assert.equal(dress.status, 200);
  const dressHtml = await dress.text();
  assert.match(dressHtml, /Using Machine Learning to Open the Black Box of Gender Reading/);
  assert.match(dressHtml, /Whether a body is read consistently/);
  assert.match(dressHtml, /binary classificatory gaze/);
  assert.match(dressHtml, /Chinese ergonomic standards published in 2023/);
  assert.equal(
    (dressHtml.match(/class="article-figure/g) ?? []).length,
    5,
  );
  assert.match(dressHtml, /01-model-flow\.png/);
  assert.match(dressHtml, /05-model-boundary-pca\.png/);
  assert.doesNotMatch(dressHtml, /class="translation-status"/);

  const makeup = await render("/writing/makeup-and-norms");
  assert.equal(makeup.status, 200);
  const makeupHtml = await makeup.text();
  assert.match(
    makeupHtml,
    /I Want to Wear Makeup, but Wanting It Is Not “Progressive”/,
  );
  assert.match(makeupHtml, /Why Desire Turns Toward Norms/);
  assert.match(makeupHtml, /norm-oriented desire/);
  assert.match(makeupHtml, /Andrea Long Chu/);
  assert.doesNotMatch(makeupHtml, /class="translation-status"/);
  assert.doesNotMatch(makeupHtml, />Image</);

  const tefu = await render("/writing/tefu-temple");
  assert.equal(tefu.status, 200);
  const tefuHtml = await tefu.text();
  assert.match(tefuHtml, /A Work of “Pure Fiction”/);
  assert.match(tefuHtml, /A Trans Woman at the Gates of the Temple of TERF/);
  assert.match(tefuHtml, /affective commons/);
  assert.doesNotMatch(tefuHtml, /class="translation-status"/);
  assert.doesNotMatch(tefuHtml, />Image</);

  const silence = await render("/writing/between-silence-and-silence");
  assert.equal(silence.status, 200);
  const silenceHtml = await silence.text();
  assert.match(silenceHtml, /Between Silence and Silence/);
  assert.match(
    silenceHtml,
    /Lesbian Subjectivity and Micro-Resistance in <em>Shanghai Lalas<\/em>/,
  );
  assert.match(silenceHtml, /Since marriage is not a simple matter of love/);
  assert.match(silenceHtml, /A single woman usually gives others the impression/);
  assert.match(
    silenceHtml,
    /IV\. The Micro-Level Mechanisms of the Private Sphere/,
  );
  assert.match(
    silenceHtml,
    /VII\. Collective Agency: The Formation and Activities of Shanghai Lala Communities/,
  );
  assert.doesNotMatch(silenceHtml, /还有什么必须要改的吗/);

  const transDisqualified = await render("/writing/trans-disqualified");
  assert.equal(transDisqualified.status, 200);
  const transDisqualifiedHtml = await transDisqualified.text();
  assert.match(transDisqualifiedHtml, /No Longer Hu\(Wo\)man/);
  assert.match(transDisqualifiedHtml, /I’m Sorry for Being Trans/);
  assert.match(transDisqualifiedHtml, /Experience is not up for debate/);
  assert.doesNotMatch(transDisqualifiedHtml, /\[Image:|Stage production/);
  assert.doesNotMatch(transDisqualifiedHtml, /class="translation-status"/);

  const sourLemon = await render("/writing/imagined-bad-money");
  assert.equal(sourLemon.status, 200);
  const sourLemonHtml = await sourLemon.text();
  assert.match(sourLemonHtml, /The Imagined Sour Lemon/);
  assert.match(sourLemonHtml, /Accusations of “Hyper-Femininity,”/);
  assert.match(sourLemonHtml, /fallback performance/);
  assert.doesNotMatch(sourLemonHtml, /\[Image\]|class="article-figure"/);
  assert.doesNotMatch(sourLemonHtml, /class="translation-status"/);

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
  assert.match(content, /The Imagined Sour Lemon/);
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
  assert.match(writingList, /item\.titleEn : item\.titleZh/);
  assert.match(writingList, /item\.subtitleEn : item\.subtitleZh/);
  assert.match(writingList, /item\.translationUrl/);
  assert.match(writingList, /item\.originalUrl/);
  assert.doesNotMatch(content, /translationUrl: ""/);
  assert.match(writingList, /const isFeatured = item\.order <= 3/);
  assert.match(writingList, /writing-star/);
  assert.doesNotMatch(backgroundSection, /background-label/);
  assert.doesNotMatch(content, /Controlled Gender Transgression/);
  assert.match(content, /\/images\/portrait\.png/);
  assert.doesNotMatch(content, /WRITING TITLE TO BE PROVIDED/);
  assert.match(css, /@media \(max-width: 1024px\)/);
  assert.match(css, /@media \(max-width: 700px\)/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /@view-transition/);
  assert.match(css, /page-slide-in-right/);
  assert.match(css, /page-slide-in-left/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

test("server-renders the linear indexable profile page", async () => {
  const response = await render("/writing/xenia-jiang");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(
    html,
    /<title>Xenia Jiang \(姜浸月\) — Sociology &amp; Gender Research<\/title>/,
  );
  assert.match(
    html,
    /<meta name="description" content="Xenia Jiang \(姜浸月\) is a sociology and gender researcher at Peking University and the writer behind WitchTide \(巫语潮信\), working on gender classification, embodiment, queer identity, minority stress, and trans health\."\/>/,
  );
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/xeniajiang\.github\.io\/writing\/xenia-jiang\/"\/>/,
  );
  assert.match(html, /<meta name="robots" content="index, follow"\/>/);
  assert.match(html, />Research Profile<\/p>/);
  assert.match(
    html,
    /<h1>Xenia Jiang<!-- --> <span aria-hidden="true">\/<\/span> <span lang="zh-CN">姜浸月<\/span><\/h1>/,
  );
  assert.match(html, /Sociology and Gender Researcher/);
  assert.match(html, /Peking University/);
  assert.match(html, /Xenia Jiang is a researcher in sociology and gender studies/);
  assert.match(
    html,
    /Trained in statistics at Fudan University, she often uses large-scale social surveys/,
  );
  assert.match(
    html,
    /<a class="article-back profile-home-link" href="\/">← Home<\/a>/,
  );
  assert.doesNotMatch(html, /class="profile-portrait"/);
  assert.match(html, /Her research agenda places body sizing, queer shame/);
  assert.match(html, /As a Chinese-language public writer, Xenia publishes independently/);
  assert.equal(
    (html.match(/class="profile-research-entry"/g) ?? []).length,
    6,
  );
  assert.equal(
    (html.match(/class="profile-writing-entry"/g) ?? []).length,
    6,
  );
  assert.match(html, /Accepted for presentation at the WPATH Scientific Symposium, 2026/);
  assert.match(html, /Accepted for presentation at the American Anthropological Association Annual Meeting, 2026/);
  assert.match(html, /<h2 id="profile-writing">Selected Writing<\/h2>/);
  assert.match(
    html,
    /<span class="profile-writing-number"[^>]*>01<\/span><span class="profile-writing-copy"><span class="profile-writing-title">Why We Should Be Wary of “Masculine Feminism”<\/span><span class="profile-writing-subtitle">On Bottom Shame and Transmisogyny<\/span>/,
  );
  assert.match(
    html,
    /<span class="profile-writing-number"[^>]*>02<\/span><span class="profile-writing-copy"><span class="profile-writing-title">How Many Layers Does “Gender” Have\?<\/span><span class="profile-writing-subtitle">A Conceptual Map of How We Understand Our Own Gender<\/span>/,
  );
  assert.match(
    html,
    /<span class="profile-writing-number"[^>]*>03<\/span><span class="profile-writing-copy"><span class="profile-writing-title">A Finger Points, a Life Assigned<\/span><span class="profile-writing-subtitle">A Proposal to Translate Sex as 性指 \(xingzhi\)<\/span>/,
  );
  assert.doesNotMatch(
    html,
    /class="profile-writing-entry"[\s\S]*?href="\/writing\//,
  );
  assert.match(
    html,
    /This page provides a concise overview of current research\.(?:<!-- -->)?\s*<a href="\/#research">explore the full research section →<\/a>/,
  );
  assert.match(
    html,
    /This page highlights selected essays\.(?:<!-- -->)?\s*<a href="\/#writing">Browse the complete writing archive →<\/a>/,
  );
  assert.match(html, /"@type":"ProfilePage"/);
  assert.match(html, /"@id":"https:\/\/xeniajiang\.github\.io\/#person"/);
  assert.match(
    html,
    /"sameAs":\["https:\/\/orcid\.org\/0009-0002-0618-451X","https:\/\/www\.linkedin\.com\/in\/xenia-jiang\/"\]/,
  );
  assert.doesNotMatch(
    html,
    /Show details|Writing language|theme-filter|id="background"|background-columns/,
  );
});

test("publishes a canonical production sitemap and robots declaration", async () => {
  const sitemap = await readFile(
    new URL("../public/sitemap.xml", import.meta.url),
    "utf8",
  );
  const robots = await readFile(
    new URL("../public/robots.txt", import.meta.url),
    "utf8",
  );
  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (match) => match[1],
  );

  assert.equal(locations.length, 13);
  assert.equal(new Set(locations).size, locations.length);
  assert.equal(locations[0], "https://xeniajiang.github.io/");
  assert.ok(
    locations.includes(
      "https://xeniajiang.github.io/writing/xenia-jiang/",
    ),
  );
  assert.ok(
    locations.every(
      (location) =>
        location.startsWith("https://xeniajiang.github.io/") &&
        !location.includes("#"),
    ),
  );
  assert.doesNotMatch(sitemap, /<lastmod>|mp\.weixin\.qq\.com/);
  assert.doesNotMatch(
    sitemap,
    /\/(?:about|cv|research|writing|zh)\/<\/loc>/,
  );
  assert.match(
    robots,
    /^Sitemap: https:\/\/xeniajiang\.github\.io\/sitemap\.xml$/m,
  );
});
