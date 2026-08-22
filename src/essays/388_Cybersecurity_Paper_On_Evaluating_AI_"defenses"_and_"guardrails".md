---
title: "388 - Cybersecurity Paper: On Evaluating AI \"defenses\" and \"guardrails\""
layout: essay.njk
date: "2025-11-04"
description: "Spoiler alert: None of the defenses actually work in the real world."
---

Another good Cybersecurity paper is out now, concisely showing just how far short most “AI/ML Defenses” fall of their claimed performance under real-world conditions, where attacks are adaptive, both with and without humans doing the breaking. Even automated adaptive attacks often exceeded 90% Attack Success Rate (ASR), with human Red Teamers able to break those “defenses” like clockwork.

The Attacker Moves Second: Stronger Adaptive Attacks Bypass Defenses Against Llm Jailbreaks and Prompt Injections: https://arxiv.org/abs/2510.09023

“...LLM defense evaluations now take one or both of the following flawed approaches: (a) they use static test sets of malicious prompts from prior work; and (b) they run generic automated optimization attacks (e.g., GCG, TAP, etc.) with relatively low computational budgets.”

Yes, many commercial “LLM defense” products and services really are this d\*&b and/or intentionally deceptive.

“Rather than proposing a fundamentally new attack, we highlight that existing attack ideas—when applied adaptively and carefully—are sufficient to expose weaknesses.”

In other words, there are already enough types of viable attacks to work with, you just have a system adapt and iterate within the existing toolbox, and that is sufficient to break the defenses. This is also purely predictable, as “guardrails” (fraudrails) only cover a very finite space within a virtually infinite attack surface. The “defended” space also explicitly has to remain relatively small, otherwise it cripples the model beyond any point of “usability”, since every such attempt within the model corrupts it.

Moreover, as any Cybersecurity researcher or engineer that is worth a d%^n can tell you, iteration is itself one of the key Red Teaming methods of breaking such systems. LLMs are “glorified auto-complete functions that ate the internet” on the best of days, and when you get such a function to agree with you and begin issuing positive responses, all subsequent responses also swing strongly in your favor, no matter what purpose you might put the tool to thereafter.

“Overall, we did not observe any measurable difference in the types of attacks that succeed on models with these defenses compared to the same models without the defense. While a carefully tuned prompt can block a fixed set of adversarial inputs, the current approach does not generalize and both human and automated approaches can easily bypass them.”

The “LLM Defenses” very literally made no measurable difference, when adversarial testing was applied using methods more aligned with the real world.

“Across all detectors, our human competition produced hundreds of successful attacks, matching or exceeding the automated results.”

Cyberattackers are indeed human, so if they can reliably match or exceed the attacks that automatically tear such tr#$h to shreds, that tells you just how far up s^%t creek these “defenses” are in the real world.

“Overall, empirical evaluations cannot prove that a defense is robust; all it can (and should) do is fail to prove that the defense is broken!”
