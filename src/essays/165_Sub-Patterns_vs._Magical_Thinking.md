---
title: "165 - Sub-Patterns vs. Magical Thinking"
layout: essay.njk
date: "2024-04-02"
---

One of the biggest divides between those claiming "AI Expertise" and the people living up to it that I've observed over the past 18 months is rooted in a very basic understanding (or lack thereof) of data and how it is processed by a given system.

An LLM, and "neural networks" in general, processes data from the perspective of brute-force mathematics (BFM). This process is nothing remotely like human logical, emotional, or observational processes of constructing and refining "concepts", as the human brain is fundamentally architected for hyper-efficiency, many orders of magnitude beyond the "learning" efficiency of BFM.

Any piece of data a BFM-based system is fed will be broken down into human-incomprehensible sub-patterns, which will form distributions of many such examples. Narrow optimizers will run across these distributions, fitting outputs to an expected curve, according to some naïve criteria. The criteria are naïve because the one creating it can't perceive the data in the ways that the BFM system does.

What this means in practice is that humans creating such narrow AI systems as LLMs and RL have no idea what sub-patterns are represented in any of the data they use to train a system. They see the high-level perspective where that data is often human-comprehensible, but that perspective on the data doesn't matter in the slightest, it is how the data looks when broken down by BFM that is of actual consequence.

When AI practitioners have precisely zero ability to ensure that the capacities they test for aren't also included in the training data, then all testing of capacities is potentially contaminated. When the models are fed "internet-scale data", then contamination is virtually 100%, since virtually all sub-patterns that may be expressed are likely to be found in data at that scale and global distribution. They'll bottleneck on parameter counts and heuristic representations, but this is the core reason why scaling up such systems can ever be useful.

The fairy tale of "emergent capacities" in LLMs (or "Mirage" as one good paper put it), is built on both a failure to recognize the lack of understanding of what sub-patterns are being fed to systems in training, as well as a failure to measure capacities in appropriate ways specific to each task. Other related forms of "magical thinking" and fraud, such as "World Models", "Reasoning", and "Understanding" (in reference to LLMs), are built on top of that basic failure to understand the BFM perspective on data, combined with the debunked and/or fraudulent theories that were built on top of that failure across the past few years.

LLMs haven't surprised me once in the past 4 years, since the models first became "large", primarily because I've stayed grounded in that basic understanding of what they are and how they operate. Recognizing what you don't see, in this case the BFM perspective on data, is one of the best ways to avoid cognitive biases filling your head with magical thinking.
