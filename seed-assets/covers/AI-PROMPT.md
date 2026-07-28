# ACUV Thought-Leadership Cover Art — AI Image Prompts

Use these prompts in ChatGPT (image generation) to produce a consistent, on-brand
cover series for the Thoughts section. Generate ONE image per article: paste the
master prompt, then replace `{SUBJECT}` with the article's metaphor line below.

## Master prompt (paste this, fill {SUBJECT})

> Minimal editorial abstract illustration for a strategy consultancy's
> publication cover. Flat vector style with a very subtle paper-grain texture.
> Deep evergreen-teal background (#07332C blending toward #0A4A3F), with
> restrained accent geometry in soft mint (#9FD9C6) and muted sage (#7FCBB4),
> plus occasional hairline strokes in pale ivory (#EAF4F0). One strong central
> visual metaphor, lots of negative space, quiet-luxury tone — confident,
> precise, calm. Composition anchored slightly off-center. Absolutely no text,
> no letters, no numbers, no logos, no people's faces. Landscape 3:2
> (1536×1024).
>
> Subject metaphor: {SUBJECT}
>
> This is part of a 10-cover series — keep the same palette, flat style, grain,
> and visual weight across all covers so they read as one collection.

## Per-article subject metaphors

| TL | Article (slug) | {SUBJECT} |
|----|----------------|-----------|
| 01 | global-trade-in-turbulence | A cargo ship's course drawn as a thin ivory line weaving between large mint geometric barriers rising from a dark sea — trade routes navigating tariff walls. |
| 02 | manufacturing-the-future | An abstract factory silhouette dissolving into a rising grid of mint dots and precise circuit-like lines — heavy industry becoming intelligent and additive. |
| 03 | organizational-design-in-the-age-of-agility | A rigid dark lattice on the left morphing into loose, orbiting mint nodes connected by curved lines on the right — hierarchy giving way to agile pods. |
| 04 | getting-ahead-of-the-next-stage-of-economic-disruption | A sequence of tilting dominoes interrupted by one upright mint monolith casting a long calm shadow — anticipating the next shock before it lands. |
| 05 | getting-ahead-of-the-mena-liquidity-squeeze | A narrowing funnel of concentric mint arcs squeezing a stream of ivory droplets, one protected channel flowing through intact — liquidity under pressure. |
| 06 | vc-flows-and-innovation-rails | Parallel mint rails converging toward a horizon point, with small ivory spheres (ventures) riding them and a few larger sage spheres building the rails themselves. |
| 07 | outlook-report-2026-sovereignty-at-stake | A chessboard fading into a topographic map, with a single mint sovereign piece standing at the intersection — national strategy as the board itself. |
| 08 | heavy-industry-margins-under-siege | A massive dark industrial gear compressed between two encroaching mint planes, thin ivory sparks escaping — margins under structural pressure. |
| 09 | the-sovereign-engine | A precise abstract turbine of concentric mint and sage blades around a glowing ivory core — an engine of national economic power, engineered and deliberate. |
| 10 | the-sovereign-guide-to-capital | A mountain path drawn as a dotted ivory line ascending dark terraced cliffs toward a mint summit beacon — the disciplined route to capital in a hard era. |

## Applying the images

- Export/downscale to ~1536×1024 (or 1200×800) JPG/PNG.
- Preferred: upload in the CMS — `/admin` → Thoughts → (article) → Cover → upload new media. This replaces the cover instantly, no code involved.
- Alternative (fresh installs only): overwrite the matching file in `seed-assets/covers/<slug>.png` — the seed attaches covers only when a thought has none, so this path applies to new databases.
