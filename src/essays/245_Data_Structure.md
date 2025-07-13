---
title: "245 - Data Structure"
layout: "essay.njk"
date: 2024-11-07
---

“Data Structure” and the “Dynamics” of how that data is processed are most often completely overlooked in AI/ML, forgotten fundamental concepts, replaced with the “magical thinking” of assuming that neural networks can do anything and everything. People pay attention to specific variables like the dimensions of images and token counts, but ignore the dynamics of processing and the actual data structures, both used and needed, more broadly.

Like other instances of cognitive bias, sometimes this gross oversimplification poses no significant problems, but when it does then it is systematically wrong. This systematic failure can then be compounded by people building on those same failed assumptions by adding complexity while ignoring the cause of failure.

Two popular methods illustrate this concept of building on failed assumptions additively, rather than rebuilding to correct fundamental flaws:

“Retrieval Augmented Generation” (RAG) is a “solution” popularly duct-taped to LLMs that attempts to introduce a fundamentally incompatible capacity. The LLM remains an “auto-complete function that ate the internet” no matter what is duct-taped to it, so it will continue to serve that function in all cases, never turning into a retrieval system merely because it was connected to one. This systematic failure attempts to overcome a difference in data structure by adding further layers of complexity, but when one of those layers remains the blender of a neural network then the sausage never comes out of the other end intact.

“Chain of Thought” (CoT) is another “solution” popular with LLMs with gives the most shallow and lazy imitation of “thought” possible, by making the same narrow system eat its own excrement, over and over again. This approach completely ignores the dynamics of cognition, as seen and increasingly understood in humans, as well as ignoring the obvious bottleneck that a narrow optimizer loses additional value with each subsequent link in that “chain”. This is why even the latest CoT model from OpenAI failed so miserably on ARC-AGI despite having vastly more hardware, millions of dollars in compute for “training”, and over 18x the runtime per problem, while scoring about ¼ the accuracy of a single fragment of a human-like system spending about $10 in compute.

My team works with a completely different technology stack, to the point where my co-founder jokes that Python is “against his religion”, and getting his code running on Python-centric platforms like Kaggle is a pain. However, what those differences grant us is building systems with a completely different set, scope, and breadth of fundamental capacities. 

Much like you can’t push an elephant through the head of a pin, you can’t push graph structure data through a neural network and expect it to remain intact beyond the scale of toy problems. 

In my next post, I’ll focus on what a graph-native system looks like, and how such systems are rendered human-like in cognition.

![Data Structure](https://media.licdn.com/dms/image/v2/D5622AQH-VZ6qPACEGQ/feedshare-shrink_800/feedshare-shrink_800/0/1729897518485?e=1736985600&v=beta&t=lGhoLpDD_YzWKxKiE2Ms6ZKQF69zZQWIjjUVhi81yRA)
