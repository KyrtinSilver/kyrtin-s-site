---
title: "309 - Data Poisoning"
layout: essay.njk
date: "2025-06-05"
---

If data is your thing (or RAG), here is a bit of poison. As another paper from my backlog (2024) illustrates anew, LLM-based systems, with or without RAG, "agentic" (BS) capacities, or other things duct-taped to them, remain fundamentally vulnerable-by-design in cybersecurity terms. [AgentPoison: Red-teaming LLM Agents via Poisoning Memory or Knowledge Bases](https://arxiv.org/abs/2407.12784)) (Please ignore the industry-standard levels of Anthropomorphism)
 
> "Such special design endows AGENTPOISON with high ASR (Attack Success Rate) even when we inject only one instance in the knowledge base with a single-token trigger."
 
> "We show that AGENTPOISON outperforms baseline attacks by achieving 82% retrieval success rate and 63% end-to-end attack success rate with less than 1% drop in the benign performance and with poisoning ratio less than 0.1%...Moreover, we show that our optimized trigger is resilient to diverse augmentations and is evasive to potential defenses based on perplexity examination or rephrasing."
 
Data poisoning in particular is both highly underestimated and consequently highly underrated. Systems that rely on probability distributions duct-taped to GOFAI filters are particularly vulnerable, generally lacking any feasible capacity to verify the integrity or intent of data.
 
As I pointed out many years ago, any major ad-blocker extension could have poisoned the targeted advertising algorithms of any social media platform, automatically performing functions that I did manually for myself. Doing this could cause those models to permanently decohere, not just at the individual level, but at scale across the entire platform(s), even with less than 1% of incoming data poisoned. That was an opportunity that many blowhard activists chose to miss. 
 
Even on a level playing field where both attacker and defender use the same technologies, in cybersecurity the attacker always holds the advantage. The attacker only needs to succeed a tiny portion of the time, achieving some goal before they exhaust their own resources, and they often have to defend nothing at all. The defenders can't defend all paths, nor can they predict all attacks, and so many rely on techniques like layered obfuscation, which are only stop-gaps that also harm performance and general UX.
 
Companies can and often do pour virtually infinite overhead costs into a form of fraud often referred to as "guardrails",  but as numerous parties have pointed out for years, these are fundamentally incapable of "guarding" anything, and they interfere with every previous attempt at the same to varying degrees, maximizing wasted effort.

A kind of data poisoning has happened to the AI domain more broadly and systematically too, the exponential rise of fake experts and snake oil at speed and scale. Yes, the Kool-Aid is poisoned, and yes, if it is being served to you then you're in the Jonestown of AI.