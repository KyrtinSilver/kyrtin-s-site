---
title: "341 - Illusory Benchmarks"
layout: essay.njk
date: "2025-07-01"
---

[R.I.P. SWE-Bench] (https://arxiv.org/abs/2506.12286), your illusion lasted a year, which is about 350 days longer than the illusion of “FrontierMath”, but not so long as the 5-year illusion of ARC-AGI. The smoke and mirrors of illusory benchmarks eventually get blown away with a change in the wind.

The reason that they note for the failure of this benchmark comes back to a predictable problem that I’ve discussed before, [the matter of “Data Decomposition”](https://kyrtinatreides.com/essays/272_Fundamental_Errors/), where many in the AI space fundamentally fail to understand how LLMs and neural networks in general break down and process information in ways that are completely different from human processes.

The authors designed their approach to skip over some of the cues/triggers used for cheating by isolating a subtask. This includes withholding critical information necessary for task performance, were no data contamination present.

The “other learned artifacts” as the current paper’s team from Purdue and Microsoft termed them, are the patterns that the LLM (or similar derivative) actually memorizes a fuzzy distribution of for recombination.
 
The testing they did was also designed such that only EXTREME contamination should be visible in portions of the test, like doubling the complexity and cutting the contextual information by a factor of 30x (net 60x negative difference). This included checking for 5-gram accuracy when critical data was withheld, very explicitly demonstrating heavy data contamination, up to 35%, for Anthropic and OpenAI.

LLMs have precisely zero “generalization”, but many AI researchers have distinctly non-zero Cognitive Bias over the interpretation of results, prone to endorsing emotionally invested fantasies of “generalization” and “learning”.

The models aren’t getting better at these tasks in the ways that the benchmarks suggest, but rather the humans behind the models are getting better at cheating via various methods of data contamination, including "synthetic data". This also explicitly means that the top performers built on the same fundamental technology (such as various LLMs) will reliably remain frauds.

The authors of this paper note two types of issues that can compromise such a benchmark, but they miss many more. A model doesn’t need a carbon copy of a problem memorized, they can memorize subsets of a problem which are automatically recombined by their own inherent probability distributions curve-fitting to the training data. The data isn’t processed like a human or a search engine, it is distinctly different, which allows for this subset memorization and automatic recombination via statistics over data.