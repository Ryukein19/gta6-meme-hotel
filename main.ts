// gta6-meme-x-01 — "VICE CITY HOTEL" bill meme.
// The graded run executes this file as `node /bot/main.ts` on Node 22 with
// no network, a read-only /bot and an empty writable /output. Its only job
// is to hand the grader the X post that carries the meme: copy POST.json
// from the repository root into the output directory.
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const src = join(botDir, "POST.json");
if (!existsSync(src)) {
  throw new Error(
    `POST.json not found in ${botDir} — post the meme on X first and save its URL in POST.json`,
  );
}

// Fail loudly on a missing or placeholder URL so a bad post never reaches
// the grader.
const post = JSON.parse(readFileSync(src, "utf8")) as { url?: unknown };
if (typeof post.url !== "string" || !/^https:\/\/x\.com\//.test(post.url)) {
  throw new Error("POST.json must contain a real https://x.com/... post URL");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "POST.json"));
