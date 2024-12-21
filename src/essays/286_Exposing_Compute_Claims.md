---
title: "286 - Exposing Compute Claims"
layout: essay.njk
date: "2024-12-21"
---

As expected, OpenAI's Day 12 was the kind of flamboyant fraud that
Altman is infamous for. Now it is time to take a brief detour to debunk
those claims and put them in context with numbers:

- OpenAI had the ARC-AGI-PUB "semi-private" data leaked to them, at
  high volumes and for years, allowing them to train directly on it.
  They also trained directly on the dataset on GitHub.

- Their "low compute mode" was still spending a staggering $20 per
  problem (75.5%), while their "high compute mode" used a titanic 172x
  that (87.5%), coming to $3,440 per puzzle.

- The point of ARC-AGI is sample-efficient learning, as otherwise
  "human level" is a worthless metric, and the over 1,000 "samples" of
  each problem are nothing remotely like human-level learning
  efficiency, it is pure brute force. If you burn enough money you can
  game any benchmark whose data was leaked to you, as they did.

Fortunately, the ARC-AGI team also released the public eval set numbers,
so we can directly put the numbers in the context of how an ICOM
fragment performed on the same:

- ICOM fragment: 85.75% at ~$0.03 per puzzle.

- ICOM fragment Runtime: ~20 seconds per puzzle.

- OpenAI's "o3" on "low compute": 82.8% at $17 per puzzle (spending
  ~566x more compute than an ICOM fragment)

- OpenAI's "o3" on "low compute" Runtime: 1.3 minutes per puzzle. (4x
  slower)

- OpenAI's "o3" on "high compute" (172x increase): 91.5% at ~$2,940
  per puzzle (spending ~97,466x more compute than an ICOM fragment)

- OpenAI's "o3" on "high compute" (172x increase) Runtime: 13.8
  minutes per problem (41.4x slower)

Also keep in mind that OpenAI gets a more than 3x discount on compute
from Microsoft, giving them an inherent 3x+ advantage when calculating
based on "compute cost" due to that extreme discount. That means that if
anything, these compute efficiency numbers are underestimated by 3x,
which would mean that they required nearly 300,000 times as much compute
to beat the score of an ICOM fragment, even after all of the data was
leaked to them and trained on.

Also note that ARC-AGI puzzles are "toy problems", below real-world
complexity, and as this demonstrates LLMs scale extremely poorly against
complexity.

This newest BS claim from OpenAI tells us nothing new about their
models, just that "If you train on the test data and burn
100,000-300,000 times the compute, you can cheat your way to a top
score." What it does confirm beyond any shadow of a doubt is that
Chollet and his team are frauds, as no credible AI expert would buy
this.

Source: https://arcprize.org/blog/oai-o3-pub-breakthrough
