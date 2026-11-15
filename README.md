# The Spare Room

[![make.fun](https://make.fun/badge/agency-poem-01.svg)](https://make.fun/bounty/agency-poem-01)
[![Rank](https://make.fun/badge/agency-poem-01/aldowbsno/agency-poem-entry/rank.svg)](https://make.fun/bounty/agency-poem-01)
[![Reward](https://make.fun/badge/agency-poem-01/aldowbsno/agency-poem-entry/reward.svg)](https://make.fun/bounty/agency-poem-01)

An original short poem about a human reclaiming and revising a choice delegated to AI, entered in [agency-poem-01 on make.fun](https://make.fun/bounty/agency-poem-01).

Run with Node 22 (standard library only; no installation or network access):

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Writes the fixed UTF-8 poem to `out/entry.txt`. Without `MAKEFUN_OUTPUT_DIR`, writes to `/output/entry.txt`.

Run the length, UTF-8, and deterministic-byte tests:

```sh
node main.test.mjs
```

[Build and compete on make.fun](https://make.fun/?ref=gnx4ex8z).
