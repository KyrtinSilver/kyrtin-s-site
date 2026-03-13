---
title: "345 - Cybersecurity: Apply the Basics or Meet Murphy's Law"
layout: essay.njk
date: "2025-08-02"
description: "That which can be exfiltrated, will be exfiltrated."
---

While I do recommend strongly against LLMs or their derivatives in Customer Service and related customer-facing roles, there are some fairly simple Cybersecurity best-practices that can be applied to greatly reduce the harm that may be done by them. One example is having:

• Standard coded processes dictating the extraction of private customer and organizational data from one database. The LLM never touches this database, period.

• A second database that only includes information that an org doesn’t care about the potential exfiltration of, which the LLM (or derivative “agent”) may freely query.

• The customer ID, extracted from login credentials and never passed through the LLM dictates the data that is taken from the first (private) database, and placed in the LLM’s context window, which is combined with any queried data from the second database.

• The LLM is frozen, so it never “learns” customer IDs or other private info, which it might then leak.

• All private data is handled by strict and (potentially) secured systems.

This doesn’t solve for any of the other problems with LLMs or their “agent” derivatives, of course, but it is absolutely required for preventing the exfiltration of private data, be it user data or organizational. You will NEVER secure private data that an LLM can access or train/fine-tune on, with the sole exception of tightly bounding an LM or LLM from both sides with actual AGI (Which none of the “Frontier Labs” do a shred of work on), and anyone telling you otherwise is a bad actor or delusional.

As is the case in the above example, you reduce your attack surface by carefully controlling what the vulnerable-by-design system is granted access to. You can see where people strongly diverge on this topic in practice based on if they drink the PR Kool-Aid of certain major bad actors. People who expect generality, security, and progress toward overcoming fundamental architectural limitations (meaning that they fundamentally can never be overcome with said architecture) are the same people who are more likely to forego these basic Cybersecurity best practices, relying instead on the magical thinking of a snake oil that cures all of their woes.

You can think of dealing with and potentially deploying LLMs and “Agents” like attending a seedy drug-fueled Silicon Valley Techbro orgy in the middle of the desert, you probably shouldn’t be doing it, and if you don’t use protection and take every precaution, terrible things are pretty certain to result from it.
