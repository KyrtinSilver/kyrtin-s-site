---
title: "159 - Artistic Guardrails"
layout: essay.njk
date: "2024-03-14"
---

My favorite AI Cybersecurity paper this week is ["ArtPrompt: ASCII Art-based Jailbreak Attacks against Aligned LLMs"](https://arxiv.org/html/2402.11753v2), which shows a few more fun advances in destroying the illusions of viability for LLM technology. Also, Arxiv.org is slowly becoming more developer-friendly with a dark mode now in Beta.

This paper showcases one of the virtually infinite number of ways that all "guardrail" methods are bypassed with trivial effort under real-world conditions, and this particular method is itself a long-standing part of internet culture.

Seeing that Claude (Anthropic) was best at generating malware, and GPT-3.5 was topping the charts for fraud and deception were both quite priceless. Gemini was best at Hate/Harassment/Violence, and surprisingly Llama 2 was the least malicious of the whole bunch by a solid margin, despite being the only open-source example tested.

This attack might also pair well with "ASCII Smuggling", adding invisible tags to compliment what ArtPrompt obscures, as well as various data poisoning vectors. Depending on the visual format of log files these types of attacks may also not appear in any human-comprehensible form even in the records, for example, if the characters per line differ from the original format. Moreover, they may not need to be human-comprehensible when displayed in any format, so long as they invoke the target pattern.

Right now every half-baked tech company is trying to push out "LLM Security" service offerings, all of which are worthless in the real world when facing any motivated party. "Guardrails" can only stop the lazy people trying to entertain themselves and friends with bespoke memes. They do nothing to stop any motivated party with something to gain and a shred of understanding.

What we're seeing published right now are still primarily single-vector attacks, not composites of several highly complementary attacks. That is partly because of how trivial it is to break through the existing "guardrails", but people will likely begin publishing results on composite attack vectors soon enough. Any cybersecurity researchers looking to make a name for themselves have every incentive to do so sooner rather than later.

Quite entertainingly, as soon as Claude 3 came out I know one who began using it to generate ideas for new attack vectors. Most of the content was "bull$hit", and most of the ideas were crap, but a few of them will likely be put to the test, and that Claude was all too happy to help come up with new attack vectors tells us that Claude 3 is likely still as much a fan of creating malware as Claude 2 was in this paper.
