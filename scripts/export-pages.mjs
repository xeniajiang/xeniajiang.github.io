import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const outputDirectory = new URL("../out/", import.meta.url);
const clientDirectory = new URL("../dist/client/", import.meta.url);
const workerUrl = new URL("../dist/server/index.js", import.meta.url);

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(clientDirectory, outputDirectory, { recursive: true });

const { default: worker } = await import(workerUrl.href);
const routes = [
  { requestPath: "/", outputPath: "/" },
  {
    requestPath: "/writing/masculine-feminism",
    outputPath: "/writing/masculine-feminism/",
  },
  {
    requestPath: "/writing/layers-of-gender",
    outputPath: "/writing/layers-of-gender/",
  },
  {
    requestPath: "/writing/xingzhi-translation",
    outputPath: "/writing/xingzhi-translation/",
  },
  {
    requestPath: "/writing/body-theory-toolbox",
    outputPath: "/writing/body-theory-toolbox/",
  },
  {
    requestPath: "/writing/nanniang-no-future",
    outputPath: "/writing/nanniang-no-future/",
  },
  {
    requestPath: "/writing/dress-gender-reading",
    outputPath: "/writing/dress-gender-reading/",
  },
  {
    requestPath: "/writing/makeup-and-norms",
    outputPath: "/writing/makeup-and-norms/",
  },
  {
    requestPath: "/writing/tefu-temple",
    outputPath: "/writing/tefu-temple/",
  },
  {
    requestPath: "/writing/between-silence-and-silence",
    outputPath: "/writing/between-silence-and-silence/",
  },
  {
    requestPath: "/writing/trans-disqualified",
    outputPath: "/writing/trans-disqualified/",
  },
  {
    requestPath: "/writing/imagined-bad-money",
    outputPath: "/writing/imagined-bad-money/",
  },
];

for (const route of routes) {
  const response = await worker.fetch(
    new Request(new URL(route.requestPath, "https://xeniajiang.github.io"), {
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

  if (!response.ok) {
    throw new Error(
      `Static render failed for ${route.requestPath} with status ${response.status}`,
    );
  }

  const routeDirectory =
    route.outputPath === "/"
      ? outputDirectory
      : new URL(`.${route.outputPath}`, outputDirectory);
  await mkdir(routeDirectory, { recursive: true });
  await writeFile(
    new URL("index.html", routeDirectory),
    await response.text(),
    "utf8",
  );
}

await writeFile(new URL(".nojekyll", outputDirectory), "", "utf8");
