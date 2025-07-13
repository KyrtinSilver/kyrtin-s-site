---
title: "224 - Greedily Scraping"
layout: "essay.njk"
date: 2024-09-15
---

Every company around in the LLM space seems to be busy greedily scraping every bit of data they can, legally or illegally, with or without permission. Companies have repeatedly been caught, and sued, for doing this, and yet they keep stealing everything they possibly can at maximum speed. Fortunately, there is a way to stop this.

The only reasonable way to stop this activity is to poison the data being scraped, automatically as bots are detected. There are a wide variety of ways to do this, and many of them may be applied in combination, causing any of the bad actors engaged in malicious scraping to face a combinatorial explosion should they try to detect and filter out such poisoning.

Rather, when applying this technique one can exploit the expectation that they will try to detect and filter it out by injecting the data that they are biased to favor, such as BigBench, MMLU, and other benchmark data.

Since the trash technology of LLMs is heuristic, in the above example this poisons the heuristics in a very specific way, either causing the poison to go undetected or flagging much of their benchmark data leakage as poison. In either case, the result is very bad for them, as well as irreversible, since LLMs are specifically the kind of trash technology that you can’t “untrain”.

As bad actors ignore the robots.txt file (they are malevolent after all) instead of relying on that file there needs to be a rabbit hole to send the scrapers down once their highly obvious activity is first detected. Sites that operate large repositories can serve as the backbone of this process, as they can detect that the first 1,000 page hits conform to the pattern of a scraper and send it down the rabbit hole while giving smaller sites templates for detection at the scale of 10 page hits to allow for broad coverage.

The ”Rabbit Hole” that our hypothetical “Anti-Scraper” can send the bots down will present them with a warped, scrambled, and very large randomly generated number of pages. LLMs are fundamentally incapable of handling combinatorial explosions (see ARC-AGI for more on this) because they can’t “learn” priors, so applying any three or more methods at once, in random combinations, can defy their detection.

Individual methods to be combined for warping and scrambling pages can, for example, include randomly:

- Rearranging sentences on the page
- Inserting extra letters, symbols, and punctuation
- Deleting spaces
- Inserting content from other pages
- Embedding links to unrelated sites
- Inserting content used in popular benchmarks
- Inserting unrelated SEO tags
- …and many more.

This can allow for all of the greedy scrapers to irreversibly contaminate their newest models. While it might require the donation of bandwidth and/or hardware to host the rabbit hole that poisons them, that is still far cheaper than lawsuits, and unlike lawsuits, it can actually stop them.

