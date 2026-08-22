---
title: "502 - Sampling the Distribution"
layout: essay.njk
date: "2026-04-19"
description: "An example of the limits of a tool's usefulness"
---

About once per year I find a use case where Language-Model-based AI can actually add value, if used correctly. I’ll walk through this year’s example.

The method below is to outline a task that samples a subset of the token distribution linked to the target term:

“I need you to perform an associative exercise. I’ll name a concept, person, domain, or term, and you list out 20 concepts, people, domains, or terms that you associate with it. Let us begin.

The first term is: Expectation”

Result (Gemini):

Here are 20 concepts, terms, and domains closely associated with Expectation:

1\. Anticipation

2\. Probability

3\. Standard

4\. Psychology

5\. Disappointment

6\. Predictive Modeling

7\. Social Norms

8\. Hope

9\. Baseline

10\. Confirmation Bias

11\. Accountability

12\. Forecasting

13\. Contract

14\. Optimism

15\. Perception

16\. Performance Review

17\. Assumption

18\. Pessimism

19\. Behavioral Economics

20\. Self-Fulfilling Prophecy

A critical next step in this process is for a human to validate the results. It is far less cognitively intensive of a task to validate such a list than it is to create it, and so both time and cognitive effort may be saved without significant losses to quality (although diversity does suffer if used in isolation). This process doesn’t tap into many opportunities that a purely human result could, but it can cater to a subset of the common and statistically represented associations.

However, people who don’t understand how such systems work and the limits beyond which they cease to add any real value can very easily mess even this simple process up. For example, each time this task is performed a new chat window must be opened, cleaning the slate. Otherwise, the previous content is also factored into the new output, causing sharp deviations that conflate them. The exact wording of the task also factors into this, so two or more variations of specific task wording may be required, with results combined in a separate step thereafter, in order to tap into a wider sample of the target distribution.

In summary, extracting the contents of a probability distribution naming potentially related concepts, then vetting that list with humans, performed in such a way as to reduce or remove cross-contamination, can potentially add value. That plays into the dynamics that such popular AI models are built for, with human oversight to cover the primary failure mode, vetting results. It isn’t very “exciting”, you likely won’t see press releases from companies bragging about it, but unlike those press releases, it is valid. There are also 1,000 possible ways to extend this, over 990 of which would be wrong.

\*Also note: this method skews toward “WEIRD” (Western, Educated, Industrialized, Rich and Democratic) results, unless explicitly corrected, due to the training data distribution’s skew.

\*\*Even within the method, top models still make some stupid mistakes, like exact repeats among the 20 terms.

\*\*\*You can also observe some telling patterns, like “benchmarking” and “coding” appearing as an answer for a disproportionate number of queries.

\*\*\*\*As a further example of viable vs non-viable usage, this approach can also be used for individual names, but the dynamics take a short trip off of a tall cliff if you attempt to extract the same value from a page of text. The target to be sampled has to be singular (at least at the target token level) in order to provide focus. A combinatorial mess of unfocused tokens in sequence just gets your probability distribution soup, with no practical way of separating what was thrown into it. Much as you can’t “un-bake a cake”, there is no converting such a mess back into viable component parts.

\*\*\*\*\*A further note of interest, this approach for individual names is WILDLY variable in how much or how little it may adhere to reality. Doing this for “Donald Trump” is highly accurate, even citing sources (which none of the others did), but attempting the same for “Sam Altman” or “Dario Amodei” exclusively produces complete trash, while also ignoring instructions.
