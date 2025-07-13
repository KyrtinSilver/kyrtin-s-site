---
title: "138 - Exposing Vulnerabilities"
layout: essay.njk
date: "2024-02-20"
---

It's time for more new cybersecurity papers, showing how trivial it is to adversarially destroy the business value of anyone naïve enough to think that LLMs with junk like RAG and "multi-modal" or "multi-agent" capacities duct taped to them are going to do them more good than harm. In particular, two papers caught my eye this week:

[Agent Smith: A Single Image Can Jailbreak One Million Multimodal LLM Agents Exponentially Fast](https://arxiv.org/abs/2402.08567)

[PoisonedRAG: Knowledge Poisoning Attacks to Retrieval-Augmented Generation of Large Language Models](https://arxiv.org/abs/2402.07867)

Both of these papers deserve their own posts and discussions, but as one person comically put it "It's been a fantastic year of AI progress in the past hour", so there is a very real chance that the next few days will load me with more such papers to read, each of which the same might be said of.

Also note, that these two methods are complementary, and compounding such vulnerabilities is one of the best ways to dramatically ramp up their severity, as well as dodge defenses. Both are also dominated by "open questions" on the topic of defense because no viable methods of defense exist nor are any likely to given that the architecture isn't compatible with true solutions and that even a 99% success rate in cybersecurity is generally synonymous with failure. Maintaining even a 99% success rate also tends to exponentially increase costs, as it is an endless adversarial overhead expense and one that remains very exposed to "Black Swan" events.

In practice, this means that vulnerable-by-design systems like LLMs, particularly those with additional components like RAG and "multi-modal" capacities duct taped to them, can be poisoned, manipulated, and controlled by an adversary in any case where there is sufficient financial, political, military, or ideological incentive to carry out the attack. The required methods are often highly effective and trivial to implement individually, and on a low budget, as well as vastly more effective when combined with two or more other complementary attack vectors.

The hype around RAG, multi-modal, and "agents" are all hot right now, but the cybersecurity space is pulling that curtain back in dramatic ways, and as attack vectors are discovered and combined they can also grow in efficacy and efficiency at exponential rates. Those who ignore the charlatans behind the curtain selling these things can look forward to making the wrong kind of headlines.

Someone will probably make a killing by shorting these companies and investing in their competitors.
