---
title: "133 - Invisible Threats"
layout: essay.njk
date: "2024-01-14"
---

My PSA for the week: The AI Cybersecurity space just got very spicy, with security researchers diving into a new method of compromising text-based AI systems like LLMs. [The method can be both invisible and unlikely to be robustly fixed](https://x.com/rez0__/status/1745545813512663203). 

Like most research, this is a newer version of an older concept, noted in previous papers such as [Bad Characters: Imperceptible NLP Attacks](https://arxiv.org/abs/2106.09898).

This also further compounds the problem of data-hungry companies blindly scraping everything they can access on the internet to train their models. For example, if the compromised login info of 1 million accounts on any given social media platform were sold on the Dark Web to state-sponsored bad actors, as is rather common, it would be trivial to execute a way of compromising all future LLMs trained on that data. Let's walk through this example:

- Buy 1 million compromised logins on the Dark Web, assuming some portion of them might be detected by login alerts.

- Edit old posts on social media to include invisible characters, each with an invisible GUID to easily invoke that specific type of command/attack.
  
Old posts and edits to posts are most likely to go unnoticed, even if a user is active on a platform, as most people rarely check their old posts, or notice the greyed-out "last edited..." text next to them.

- Edit new posts for active users adding the invisible text, either promptly after they are first posted, or roughly 5 days later, when they are unlikely to notice.

- With as little as 100,000 instances of any specific GUID and associated command/attack in the attached invisible characters, any LLM trained on that data will likely memorize them, effectively producing backdoors into any system trained by a company foolish enough to use scraped "internet-scale data".

- With your bank of attack vectors invisibly etched into the LLM during training, any invisible GUID can be injected into any text likely to be copy/pasted by users, invoking any form of manipulation or data exfiltration you cooked up.

- For the more creative bad actors, these attack vectors could be combined in parallel, as well as sequenced, or used as pointers to invoke new methods of compromising the LLM, subject to regular updates. This quickly renders the attack surface of any LLM compromised in the training stage impossible to defend to any meaningful degree.

All of the world's snake oil can't treat that one burn. 

 #AI #Cybersecurity #Research #LLMs
