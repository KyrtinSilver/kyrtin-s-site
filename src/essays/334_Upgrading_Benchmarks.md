---
title: "334 - Upgrading Benchmarks"
layout: essay.njk
date: "2025-06-18"
---

There is a way to fix benchmarks for the AI domain, and thus far (to my knowledge) precisely nobody is doing it. Here is what it takes (minimum):

- The companies designing and training these models must have precisely zero knowledge about what the contents of the benchmark are beyond the categorical performance disclosed to the public. This means no research papers giving examples for them to "cook the books" with, and no subsequent "synthetic data".
 
- The models being tested must run on isolated systems, and either be permanently deleted the moment the test is completed, or stored in isolation for further benchmarking. Only if a majority of such tests score above a given threshold may further consideration be given.
 
- The benchmark must be entirely funded and operated by a third-party team with no ties to major tech companies and no significant failures in integrity. They must be "trusted", and worthy of that trust, which is beyond rare in the AI domain today.
 
- The contents of the benchmark must be reasonably original, preferably combining tasks that are practical as well as challenging. 
 
- Some portion of these benchmarks must take place in loosely or fully unbounded environments, not the trivial-complexity toy environments of an Atari game or below. This could take the form of an isolated network with many books, like a library for the system to utilize, or not.
 
- The research team who runs these benchmarks can't blab about how they work on Twitter, unlike many of the tech-bro-bbleheads in AI today. This is basic confidentiality.
 
- The researchers handling these benchmarks must use transparent, practical, and consistent means of dealing with anyone seeking to get a system benchmarked. "FrontierMath" and "ARC-AGI" are both examples of absolute failures in this regard, as both were guilty of opaque exclusivity, leaked data, and dramatic inconsistency.

Virtually every major tech company and startup has invested so much time, effort, and compute on cheating and/or contaminated data for benchmarks today that the top scores will usually be fraudulent in no uncertain terms. This, combined with extreme levels of hype and absurd amounts of investment, has cultivated a polarized environment where distrust is maximized for multiple groups, and hype is maximized within the gullible subset. This must change.

When companies run systems with "internet-scale data" in the training set they achieve the maximum data contamination possible short of directly training on the exact problems. From there all it takes is a little fine-tuning or other "optimization" to focus a model on a target subset of data that it already trained on.

Delivering on this list of requirements for new benchmarks is a tall order, and it means that >95% of prior benchmarks must not only be disregarded, but explicitly and widely considered disreputable. Benchmarks are used as a proxy for performance, and they are inversely correlated with that today.