---
title: "152 - Security Breach"
layout: essay.njk
date: "2024-03-13"
---

The first Cybersecurity paper to really surprise me this year is ["Stealing Part of a Production Language Model"](https://arxiv.org/abs/2403.06634), which managed to beat my expectations for how quickly the curtain would begin to be pulled back on closed-source trivial AI systems like LLMs.

In this particular attack, they manage to extract the embedding projection layer of several of OpenAI's closed-source models, revealing the dimensionality of that layer in the process of stealing the weights. This takes a big step toward turning the "black-box" grey, thanks in no small part to the role of the embedding projection layer. Knowing not only the dimensions of that layer, but the specific weights means that this attack makes for an excellent prelude to more advanced composite adversarial attacks.

This attack also greatly reduces the cost-to-duplicate of any given LLM, as much of the bloated compute that is thrown into training them can be skipped over. Earlier layers in many of these systems adhere to very broad patterns, which are often strongly shared between models and are frequently frozen to reduce inference costs. The points that diverge more strongly tend to be the later layers of such models, and these methods could be applied effectively against finetuning.

The only unfortunate thing about this paper is that the authors are now accomplices in fraud, not because the attack doesn't work, but because they directly assisted the frauds at OpenAI via Irresponsible Disclosure: "We received approval from OpenAI prior to extracting the parameters of the last layers of their models, worked with OpenAI to confirm our approach's efficacy, and then deleted all data associated with the attack.

...

In discussions with OpenAI, we decided to withhold disclosure of the size of gpt-3.5-turbo models, but we confirmed with them that the number our attack reported was accurate."

Even so, this does pave the way for more ethical researchers to take the next steps, and the authors of this paper may be permanently blacklisted from any credible employment in the industry. It is unfortunate to see such talent turn to crime, but not unexpected in cybersecurity today.

I have to say, 2023 was the year of LLM hype, but 2024 is shaping up to be the year where cybersecurity researchers smash those trivial AI systems into a fine paste. There is plenty of work ahead, but it is clear which way the wind is blowing.
