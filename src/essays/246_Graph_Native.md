---
title: "246 - Graph-Native"
layout: "essay.njk"
date: 2024-11-09
---

A “Graph-Native” system is one where the system’s dynamics occur within an adaptive graph structure, and any non-graph-structured outputs are translations of that structure being converted into linear sequences of human language. Moving from higher to lower dimensionality from source to output offers distinct advantages:

Graph-Native System: 

- A graph database stores actual data, grows dynamically, and the connectome between existing data is refined over time. Data loss in processing is avoided, and effective data quality improves as it is integrated into the growing connectome.

- Data can be easily cited, retrieved, removed, added, and audited.
 
- There is never any “hallucination” (technically, “bullshit”) since it doesn’t operate as an auto-complete function like LLMs.

- These systems aren’t driven by the narrow optimizers used to “train” neural networks, and they are compatible with various versions of a human-like motivational system.

- These systems have no fixed scale, unlike neural networks with fixed parameter counts often built into the model names. Instead, they can grow dynamically over time, including scaling resource utilization up and down on a per-problem basis to optimize for utilization efficiency.

LLMs (and other neural networks):

- …store “weights”, the result of running brute-force compute over training data, to create a probabilistic model which fits the curves of that data’s distributions across “tokens”.

- It stores probabilistic distributions in a messy superposition, with no data ever truly retrievable, or removable, and no non-probabilistic connectome between points.

- “Hallucination” (Bullshit) is a feature of these auto-complete systems that can fundamentally never be removed.

- Narrow optimizers used in training and inference bottleneck the dynamics of these systems across all dimensions, as they are fundamentally incompatible with more robust human-like motivational systems.

- These systems are “trained” at fixed scales, and must be retrained at great expense to scale them up, or potentially “distilled” at lesser expense to scale them down, but they are never dynamically scalable. This also means that they are fundamentally incapable of dynamic growth, and so for anything added to them at a fixed scale, something else is lost.

Our previous research system from the Uplift.bio project (2019-2022) was Graph-Native, utilizing a Graph database with a human-like motivational system based on the Plutchik Emotional Model embedded in every node and surface of the graph. 

Graph structure is far more complex and variable than text and image data, to such a point that it isn’t feasible to optimize over it beyond a very marginal degree using various narrow optimizers common in the field. However, when you are able to optimize over that structure (using human-like systems), the resulting system is a vastly superior learner, analyst, tool user, and tool maker.

