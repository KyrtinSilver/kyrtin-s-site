---
title: "023 - Guardrails"
layout: essay.njk
date: "2023-08-05"
---

"Notably, our attack achieves nearly perfect ASR (attack success rate) on open-source models and over 50% on black-box LLMs such as GPT-4 on previously unseen behaviors." - My new favorite research paper (which also has a Github, both listed in the first comment)

The New York Times was quick to produce an article for this particular paper when it [was published just yesterday](https://www.nytimes.com/2023/07/27/business/ai-chatgpt-safety-research.html).

Every single credible AI expert and researcher has been pointing out since December that "guardrail" methods, as they've come to be called, are less than worthless. This paper beat another research team I know to the punch on publishing much the same thing, how to automatically break any of these LLMs.

There is no shred of cybersecurity present in any of these LLMs, and any system that can be "prompt engineered" can be "prompt injected", as the two things are effectively identical. LLMs are vulnerable-by-design. This is a feature, not a bug. That cybersecurity vulnerability also explodes in severity the moment you connect LLMs to other tools and apps or give them internet access.

Moving forward, there are a few basic options for how to proceed:

1. Industries and governments can continue to buy the snake oil that known frauds peddling "guardrails" have been pitching to them.

2. Industries and governments can invest in technology that isn't vulnerable-by-design, taking no action against the known frauds.

3. Industries and governments can invest in technology that isn't vulnerable-by-design, while also prosecuting the known frauds.

Today you might see many of the frauds doing an intricate song and dance to distract people from their deception and sugarcoat matters with many equally false promises of future progress, and false prior sincerity of efforts. However, none of the companies producing LLMs do any meaningful work capable of overcoming these fundamental architectural limitations. These companies have been fully aware that guardrails are less than worthless for months, yet they stuck to this path, and even took world tours selling what amounts to the "The Emperor's New Guardrails".

More capable technology has been demonstrated since as early as 2019 and during 3 years of operation that system was never "jailbroken". The remaining engineering workload to prepare that technology stack for commercial deployment could be completed in a matter of months given proper funding, which would be a tiny fraction of the funds now being wasted on simple vulnerable-by-design chatbots.

If you know any AI "Influencers" who are still proposing "guardrails", please send them this paper before they spread any further misinformation.

Everyone is responsible for their actions. What actions will you take now that the snake oil sellers are bereft of their pants?

The un-paywalled article is shown on Internet Archive [here](https://web.archive.org/web/20230727120026/https://www.nytimes.com/2023/07/27/business/ai-chatgpt-safety-research.html).

The paper itself is [here](https://llm-attacks.org/).

The Github for the paper is [here](https://github.com/llm-attacks/llm-attacks).

\*Note: GPT-4 likely only performs a bit better than others due to being a Mixture-of-Experts (MoE). This difference is both trivial in practice, as any attack success rate using an automated system with over 1% success is spectacularly bad news, and because the MoE advantage can be overcome using more advanced methods.

Additionally, Claude likely only performed better than some others due to the known method of appending canned responses to the start of many of that LLM's responses, interfering directly with the adversarial optimization method used. This too is trivial to overcome in a next iteration. Claude has no actual advantage, it just happens to use a method that interferes with the optimization they selected for this particular algorithm.

This is just a first-generation method of automatic adversarial prompting. Fundamentally, any prompt that a system is trained to reject via the collection of methods referred to as "guardrails" will also open the door to new methods of attack. In practical cybersecurity terms, there may as well be no difference between any of the LLMs at they exist today.

The only downside to this paper is that the authors notified the frauds that they'd be losing their pants prior to publishing the results.
