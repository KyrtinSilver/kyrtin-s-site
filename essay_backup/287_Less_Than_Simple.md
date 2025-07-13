---
title: "287 - Less Than Simple"
layout: essay.njk
date: "2024-12-25"
---

I was recently recommended a very new benchmark, only 3 months old, to test our systems against in the coming weeks, which I’ve since added to our list. The benchmark is called “SimpleBench”, where LLMs score no higher than 41.7\%, compared to a human baseline of 83.7\%. That said, the more you actually dig into the details of it, the more absurd it becomes.

The paper they have going over this benchmark is sadly a testament to the extremely poor standards, or lack of standards, typically observed in AI today. A few examples of this rapidly become clear in quoting their paper going over it:

- "In an effort to enhance model performance on SimpleBench, we experimented with specially engineered prompts designed to mitigate common pitfalls observed in initial evaluations."
 
In other words, they invalidated their own results by specifically hand-engineering prompts for LLMs to make them suck less at this benchmark. They offered no valid baselines preceding this contamination.

- "Each participant attempted a random subsample of 25 questions, ensuring that all 200+ questions were answered at least once."

A sample size of roughly 1 person per problem is beyond just being less than statistically significant, it is downright terrible. Even when I got 1200 data points per person for the cognitive bias detection system study and suffered with getting participation on that much more difficult material, I still managed to get coverage of all content 5 times greater than they did for this benchmark.

That said, there is another important lesson to be learned from this benchmark. It is 204 multiple-choice questions, with only 6 possible answers each, and even with the benchmark’s own team contaminating their work and artificially improving model performance on it through prompt engineering, the models still perform this badly. Not only that, GPT 4o-mini performed WORSE THAN RANDOM (random is 16.67%), with 01-mini only barely exceeding random chance post-prompt-engineering-contamination at 18.1%. Those were also averages and “majority voting” from running each question 5 times, wasting 5 times the compute. The majority voting score for o1-mini was 16.7%.

The questions themselves are also extremely basic, such that anyone with a middle school student’s knowledge of math and the world can successfully answer the vast majority of them. For the top LLMs to score so poorly on a multiple-choice set of unspecialized questions is a striking testament to just how laughable LLM technology is, and how far removed claims of “reasoning” and “world models” are from any semblance of reality. 

So ends the state of LLM-based AI for 2024. It is "Less than Simple".