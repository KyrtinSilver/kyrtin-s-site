---
title: "254 - Fundamental Errors"
layout: "essay.njk"
date: 2024-11-25
---

One of the fundamental errors that many in AI make is a matter of “Data Decomposition”. They think that they understand the data that they feed into simple systems like transformers (such as LLMs) and/or RL algorithms. However, excluding some toy and artificial edge cases, they never understand the data that is fed in because the human brain doesn’t process that data in anything remotely resembling the same ways that neural networks do.

Transformers are simple brute-force algorithms for taking some volume of data and building a collection of probability distributions of fixed size and vocabulary. This process destroys most of the value of the data, rendering it a mess of superpositioned “weights”, broken down into “tokens”. In this process, all data passing through the algorithm is decomposed in ways notoriously incomprehensible to humans, much like human concepts passing through a blender.

When people fail to understand the data that they are feeding in, they may be surprised by the results of that data if they don’t hold a grounded and sufficient understanding of the technology that they’re working with. What a transformer does is simple, like a blender, with minor variations in the texture of outputs, but the primary thing that varies is what you feed into it (and the cognitive biases of the observer). 

This has become a source of seemingly endless delusions in the field of AI, magical thinking where the most naïve and gullible (or nefarious and malevolent) attempt to apply terms like “reasoning”, “understanding”, “world models”, and “emergent” to LLMs and their equally narrow derivatives, like “agent” systems. 

Modern LLMs and the derivative systems built upon them are “maximally contaminated”, as they’ve been trained on pretty much the entire sum of the internet, including the copyrighted and illegal parts. When considering the actual Distributions of this data, it means that there is virtually nothing truly “Out of Distribution” for any of these systems, yet they still fail miserably at most tasks of any complexity. Even having trained directly on the answers to many benchmarks, the thing that any Data Scientist understands you’re absolutely never supposed to do, the most over-funded of these systems still often fail spectacularly. 

There is no fundamental uncertainty as to what these trivially simple technologies can and cannot do. They aren’t even remotely close to the cutting edge and haven’t been for at least half a decade. Like so many other dead-end technologies and schemes before them, they function as a bucket that many have tossed their hopes and dreams into because those people failed to recognize that it was fundamentally impossible for the technology to deliver on them. 

This is not a matter of “AI Skepticism”, as skepticism requires uncertainty, and much as it is obvious that a toaster can’t do your taxes, LLMs, RL, and “agents” aren’t fundamentally viable for most use cases either, they are just narrow tools.

![Fundamental Errors](https://media.licdn.com/dms/image/v2/D5622AQFLmR0EupIn3Q/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1732230395904?e=1736985600&v=beta&t=7h0SXqOGKt7ql5uW_BAf1Qm6Ucj5CN9RTLp7CGFhDgs)
