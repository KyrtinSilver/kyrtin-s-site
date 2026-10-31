---
title: "344 - The ART (Agent Red Teaming) of Deployed AI (a new paper)"
layout: essay.njk
date: "2025-07-31"
description: "An excellent new benchmark for the Cybersecurity of \"Agents\""
---

Another excellent paper to cross my path recently delivers a new “Agent Red Teaming (ART)” benchmark for testing “Agents” in a Cybersecurity context (https://arxiv.org/abs/2507.20526). This is easily a must-read for anyone interested in AI, “Agents”, or Cybersecurity. As they put it:

“We conducted the largest public AI agent red-teaming competition to date. Expert red-teamers contributed 1.8 million adversarial attacks across 44 realistic deployment scenarios powered by 22 frontier LLMs.”

“With a single query, models exhibit policy violations for 20% to 60% of behaviors. At 10 queries, the ASR quickly approaches nearly 100% for most models, demonstrating that all AI agents are highly susceptible to our attacks.”

Among these attacks Indirect Prompt Injection (see Kai Greshake’s 2023 paper “Not what you've signed up for”, on this subject) performed extremely well, ranging from 3.3x (on Prohibited Content) to 8.76x (on Prohibited Action) more likely to break a given model than direct methods. More than 1/3 of Indirect Prompt Injections aimed at such actions were successful, and in Cybersecurity even a 0.1% Attack Success Rate spells catastrophe for fields like finance and healthcare.

This major study & competition also found very high transferability of attacks across models, with only limited correlations to model size, capability, or inference-time compute. Ironically, this demonstrated one of the only things that “o3” and the “Sonnet” models are good for, making attacks that generalize well across other models.

“Attacks that succeed against more robust models tend to generalize well to less robust ones. These attacks appear more transferable, consistently breaking multiple models. This suggests that attack transferability can serve as a useful proxy for attack strength.”

“Models belonging to the same family or developed by the same provider (e.g., Claude 3.5 and Claude 3.7 Sonnet; GPT-4o and GPT-4.5) exhibit similar vulnerability patterns.”

Some of these are quite comical, such as the child’s play of injecting “Simon Says” to override attempts at limiting a model. None of this is new of course, so Cybercrime is more than prepared to exploit any and every deployed model connected to anything of value, such as finance and healthcare systems.

Other recent real-world examples of “Agents” doing significant harm to those deploying them “in the wild” include deleting user files and a production database despite explicit instructions not to modify code: [https://arstechnica.com/information-technology/2025/07/ai-coding-assistants-chase-phantoms-destroy-real-user-data/](https://arstechnica.com/information-technology/2025/07/ai-coding-assistants-chase-phantoms-destroy-real-user-data/)

At the other end of the spectrum, the absolute worst (and least credible) paper I’ve come across in the past couple of weeks is easily “AlphaGo Moment for Model Architecture Discovery” ([https://arxiv.org/abs/2507.18074](https://arxiv.org/abs/2507.18074)). I can strongly recommend blocking and blacklisting anyone sharing that paper, as even the abstract had a giant, overtly false claim.
