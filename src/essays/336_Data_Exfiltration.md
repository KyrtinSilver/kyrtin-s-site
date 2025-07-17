---
title: "336 - Data Exfiltration"
layout: essay.njk
date: "2025-07-17"
---

How would you like for that “Agent” that you’ve integrated into your company systems to exfiltrate all of your data? With Cursor (Claude) and Supabase MCP, [you too can leak your entire SQL database](https://www.pomerium.com/blog/when-ai-has-root-lessons-from-the-supabase-mcp-data-leak) the moment someone files a support ticket (or similar input) with instructions for your agent.

“This Supabase/Cursor incident is a cautionary tale: when AI has root access, you have a new class of confused deputy problems. The model doesn't inherently know the difference between a text comment and an actionable command.”

These are the reasons why top cybersecurity specialists and white-hat hackers get up on conference stages and tell you not to give your stupid little “agent” ROOT ACCESS to your systems. If you think that the wildly anthropomorphized trash that Anthropic peddles has the faintest hint of security, think again.

This is also why some customer support systems are getting bombarded, like Microsoft’s, since besides the objectively terrible service that they offer to begin with, many of these companies are leaking their data to anyone with the right prompt to drop their pants. In the AI + Cybersecurity field, right now you see at least as many pants fully down as you do half-up or above.

As I’ve consistently said for the past several years, the LLM (with or without RL) architecture is vulnerable-by-design, and it very plainly isn’t viable for any use case that requires Factual Grounding, Transparency, Security, or Privacy. There are a handful of use cases where none of those burdens are expected of the architecture, such as Cybersecurity penetration testing (or actual cyberattacks), but for examples like Customer Service, your pants are resting firmly on the floor.

There are considerably worse near-future possibilities, of course. Various bad actors have been actively trying to get their “agents” integrated into military systems, with both OpenAI and Anthropic signing several hundred million dollar military contracts already, as well as Microsoft’s numerous existing military contracts, and Palantir’s orchestration system integrations into military systems.

Yes, we may be reaching the highest peak of “Mount Stupid” (Dunning-Kruger), where a prompt injection, literally just a string of carefully chosen words sent to an overgrown trashbot, can trigger World War 3.