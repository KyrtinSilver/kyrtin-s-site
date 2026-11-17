---
title: "347 - (Barely) Hierarchical (but not) Reasoning Models, (HRMs)"
layout: essay.njk
date: "2025-08-08"
description: "Another interesting tweak for the same old slice of bread"
---

“Hierarchical Reasoning Models” (HRMs) have cultivated a bit of hype recently...but after a group paper discussion of the material (v3), I can safely say that it is far from revolutionary. They make HEAVY Anthropomorphism via gratuitous comparisons to the human brain, while completely neglecting the critical dynamics of how humans actually REASON, which makes even the name of the architecture promptly crash and burn under any degree of scrutiny. [https://arxiv.org/abs/2506.21734](https://arxiv.org/abs/2506.21734)

One of the easiest ways to spot this is where they describe their Loss Function, something that you DO NOT FIND in the human brain. For laymen of AI, a Loss Function (aka Narrow Optimizer) is whatever mathematical function describes the goal that a system optimizes to, how it fits to the curve of a given dataset or recursive task.  
  
As Antonio Damasio and numerous subsequent researchers covered over decades of research, the human motivational system is emotions, which themselves require a “Global Workspace” (Barrs, Global Workspace Theory). With a crippled emotional system (a rare condition) humans demonstrated deeply irrational and terrible decision-making, contributing to the burial of long-debunked rational human theories. Critically, emotions are also “experienced”, not optimizers, and experiencing them requires a Global Workspace where that subjective emotional experience and perspective can occur and iterate.

HRMs do make some potential improvements over baseline LLMs and their other derivatives, such as adding a secondary phase for further optimization following the convergence of the first. They could expand that to arbitrary and dynamic hierarchical depths, diverging and converging over time, in something more like a graph structure that you’d actually find in the brain, which might do interesting things in future work.

However, none of that ever results in cognition or reasoning like that of the human brain, the model architecture simply isn’t designed to satisfy the essential requirements for it. HRMs do bring interesting things to the table for companies that are already married to LLMs and their derivatives, as they remain highly similar, but that high similarity is also why HRMs don’t bring anything fundamentally new to the table, just more tweaks and optimizations, no changes to fundamental capacities.

I would expect them to expand this approach to make a Hierarchical MoE, and potentially dynamically variable hierarchy level counts, which when compared to naïve and compute-intensive approaches like CoT is likely to get the attention of various major tech companies and startups, as a potential means of reducing their current absurd compute costs.

To paraphrase another discussion participant, “a hierarchy of 2 only trivially qualifies as a hierarchy”, and this example is like putting a slice of cheese on the same old bread and calling it a sandwich. Just call it what it is, drop the anthropomorphism and buzzwords, and you’ll write better papers.
