---
title: "136 - Cybersecurity"
layout: essay.njk
date: "2024-02-12"
---

To my surprise, Google Deepmind has recently released [a viable cybersecurity paper](https://arxiv.org/abs/2402.05526). I've grown accustomed to seeing fluff and "emergence" delusions attached to Google, but it would appear that they're still capable of doing actual research.

This paper came to my attention through a cybersecurity research server recently, and the residents of that server are already looking at potential ways to take that several steps further. MoE has grown more popular, but just like every other method of duct-taping things to the transformer architecture it also introduces new cybersecurity vulnerabilities.

Before trying to slap something on an LM or LLM just because it has higher benchmark scores, remember that your attack surface changes every time you duct tape something else to it, and try to attach whatever happens to be trending at the moment, like RAG, is going to open you up to new kinds of attacks. The more popular the trend, the faster new attacks are likely to be discovered for it.

If you aren't looking for some of these attacks, you might not even notice that they're happening until you're suddenly making the wrong kind of headlines. Even shifts that seem small under ordinary circumstances, like the 1.8% shift they noted in the paper, can be enough to sway distributions and produce the wrong answers.

If the profound idiocy of investing billions in the trash technology of LLMs continues at the current pace, one predictable outcome could be the leading companies investing in cybersecurity research to sabotage their competitors. The ROI incentive could certainly be found there. So long as they don't publish such work, they may freely deploy such methods of sabotage themselves, or via third-party contractors. OpenAI already made headlines by bribing Google's least ethical employees to switch teams at up to $10 million per head, so engaging in direct sabotage would only be a small step further down the same road.

As always, if people want secure and capable systems then someone is going to have to invest in the architecture that demonstrated those capacities as early as 2019. Until then, this Idiocracy marches steadily forward.
