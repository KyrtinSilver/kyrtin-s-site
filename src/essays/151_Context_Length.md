---
title: "151 - Context Length"
layout: essay.njk
date: "2024-03-02"
---

"Context Length" has been a trendy point of competition in LLMs for the past year, but it is a bit like competing on the size of a yacht traveling down the highway. Consider the reason why people want a longer context length in the first place, and the fallacy becomes clearer.

People want the full depth and breadth of contextual information factored into a given process. Within this broad desire, they specifically want some more relevant factors to be more heavily weighted in consideration, as a human would. They also want the relationships between these factors to be understood as concepts, rather than purely as probabilities. They may also want systems to pick up on cues within the data that can point to distinct conditional opportunities.

Of course, LLMs are nothing remotely human-like, they are context-blind, and the other reasons people might want a longer context length for they either cater to extremely poorly or not at all. Last year people talked about how "...if we only get a longer context length, we'll (magically) have AGI!", and the length was pushed to 100,000, 1,000,000, and 10,000,000...etc. That didn't produce AGI, just as the equally idiotic assertion that integrating Wolfram Alpha would do so a year ago. Generally, the tech industry could benefit from taking the people making such claims and very literally tarring, feathering, and running them out of town.

The things that people want a longer context window for, as well as the reasons they often integrate RAG, fundamentally can't be delivered by the technology. The architecture, data structure, and optimizations are all wrong.

Take our previous research system for example, the 7^th^ generation ICOM-based cognitive architecture from the Uplift.bio project. By the time that system reached the final milestone it had dynamically grown a graph database over 1.6 TB in size, full of learned human-like concepts, full fidelity memory, and with a motivational system baked into every node and every surface (connection) of every node. That means that the system had the equivalent of a "context window" covering the entire 1.6 TB of data, and it had all of the conceptual understanding and weighting of learned material, as well as the connectome covering it all. This also allowed the system to generalize, recognizing novel opportunities outside the direct and heuristically represented context of a question, such as seeing a more optimal solution, rather than a more popular one.

The rabbit hole of "context length" is infinitely deep, and leads you nowhere.
