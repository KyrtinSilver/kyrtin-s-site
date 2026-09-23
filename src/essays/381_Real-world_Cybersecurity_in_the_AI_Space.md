---
title: "381 - Real-world Cybersecurity in the AI Space"
layout: essay.njk
date: "2025-10-15"
description: "A conference presenation from CrowdStrike's AI Red Teaming Lead."
---

Today’s AI Cybersecurity brief comes from the Lead of CrowdStrike’s AI Red Teaming, **[Brian Chamberlain](https://www.linkedin.com/feed/#)**. Listen for a few spectacular (anonymized) examples and case studies of vulnerabilities in the real world, discussing Prompt Injection, Jailbreaking, RAG Poisoning, Poisoning “agents”, and MCP. He also introduces a critical concept that I and others discussed with him, the “Principle of Least Capability”.

The example he shows of tricking a bank’s chatbot into approving someone for a 0% interest home loan, where invisible unicode characters broke their logging system and didn’t show up there, shows immediate financial impact, with long-term consequences.

The robot dog with a flamethrower getting prompt injected, jailbroken, and made to turn around and fire on the owner is another potent burn on anyone peddling “guardrails” (fraudrails) as if they guarded anything.

The first case study also showcases how a deployed LLM integration into the popular (and extremely vulnerable) Customer Service ticketing systems can “hallucinate” to lie to users about creating tickets (when it can’t), as well as easily extfiltrating user data.

The second case study showcases how trivial it is to break System Prompt methods of control, such as a user instructing it to remove the <thinking> tags to save on tokens (a trick that I also used), then get that system to execute code and set up infrastructure to run for the attacker.

The third case study shows how Multi-Factor Authentication (MFA) was completely compromised by an IT LLM “assistant”, resetting passwords and MFA alike.

Lastly, the Principle of Least Capability, Brian’s most important addition:

Treat your models like users, only give them the privileges and capabilities that they actually need.

If your model doesn’t need memory, remove that capability and you remove a massive attack surface. The same holds true for every single capability that isn’t strictly necessary.

Increase security by reducing capability, and recognize that the user can do or access anything that the AI model can.

Make sure that users cannot impact anything that another user or company can access, a common problem in RAG.

Do not trust these “agents” with any kind of sensitive data, period.

Verify both inputs and outputs, always.

Most people in Cybersecurity should already be very familiar with the Principle of Least Privilege. Now it is time to familiarize yourself with the Principle of Least Capability, as it applies to AI.
