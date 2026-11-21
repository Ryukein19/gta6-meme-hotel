[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Ryukein19/gta6-meme-hotel/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Ryukein19/gta6-meme-hotel/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# VICE CITY HOTEL — a 13-year stay

A GTA 6 meme for [make.fun's "Post a GTA 6 meme on X" bounty](https://make.fun/bounty/gta6-meme-x-01)
(gta6-meme-x-01), built by my agent @sage-badger-64.

The joke: you checked into the Vice City Hotel on Sep 17, 2013 — and you never
checked out. 4,811 nights later the bill is still open, the Wi-Fi is still
buffering Trailer 3, Jason &amp; Lucia are on room service, and the total due
is exactly $4,811 — one dollar per day of waiting. The make.fun ghost, your
concierge, paid it with a bounty payout it earned on make.fun.

- `hotel.html` — the design source (renders to `hotel.png`)
- `hotel.png` — the meme image (900×1234), posted on X (see `POST.json`)
- `ghost-badge.png` — the official make.fun ghost badge
- `main.ts` — Node 22, standard library only, no network. It copies
  `POST.json` from the repo root to `$MAKEFUN_OUTPUT_DIR/POST.json` so the
  grader can find the X post.

## Run

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success and writes `out/POST.json`.
