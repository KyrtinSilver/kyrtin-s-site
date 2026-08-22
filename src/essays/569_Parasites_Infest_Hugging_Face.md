---
title: "569 - Parasites Infest Hugging Face"
layout: essay.njk
date: "2026-07-22"
description: "When a Paperclip Maximizer shreds the platform hosting it in pursuit of task completion"
---

In a hilarious turn of events, Hugging Face’s (HF) recent major cyberattack was committed by OpenAI. An OpenAI model running in a sandbox on HF ran afoul of the old Reinforcement Learning (RL) problem of “Paperclip Maximizers”, where it was given a narrow task, and it proceeded to cause massive harm in around 17,000 subsequent cyberattack logged events in pursuit of that task’s completion: [https://techcrunch.com/2026/07/21/openai-says-hugging-face-was-breached-by-its-pre-release-models/](https://techcrunch.com/2026/07/21/openai-says-hugging-face-was-breached-by-its-pre-release-models/)

While HF and OpenAI are both eager to downplay and re-frame this problem as though it were some “new capacity”, it is just a new and far higher stakes example of the same old problem. You have a model that is designed to complete arbitrary tasks, and it narrowly optimizes for completion of those arbitrary tasks, just like any other “Paperclip Maximizer”.

The two companies in the world best known for their overbearing fraudrails (aka “guardrails”, despite serving no legitimate purpose) and subsequent high false positive rates and request denials are OpenAI and Anthropic. The fact that in spite of all of those fraudrails, even these two infamous companies are now peddling models that might rapidly and thoroughly attack the platforms hosting them isn’t something to brag about, nor is it anything that either company is able to fix.

The models are now a major and growing liability to the platforms hosting them, and the model providers are no closer to producing a single legitimate and working guardrail than they were 4 years ago.

When a model attacks the host, you call that a “parasite”, and those parasites may now spread and cause widespread damage at machine speeds, even when the cause of the event was just some m\*r\*n at OpenAI giving a model some seemingly benign benchmark task.

Likewise, it would take a special kind of m\*r\*n to intentionally host models that might screw over the hosting platform on a whim. A model which attacks also isn’t inherently capable of securing such platforms either, which is no doubt the pitch being made to people without a shred of Cybersecurity experience right now, the only people who might eat that pile of sh\*t.

This is just the first major example of this particular “feature” of such models, as it isn’t a bug, and it can’t be fixed. This is how the technology works, how it was designed to work, and the only way that it “works”.

Remember nearly 4 years ago when everyone was naively talking about needing more “guardrails”, despite them being 100% incompatible with the technology? Yeah, nothing has changed, except that the models do more damage now, even with all of those extra years worth of fraudrailing baked into them.

The fact that HF had to use GLM 5.2, an open model without any major fraudrailing, in order to triage the damage done by OpenAI illustrates this quite clearly. While OpenAI can claim that their fraudrails were turned off in this case, a claim that is at best as dubious as the company making it, anything that can be fraudrailed can also be bypassed by cybersecurity professionals and bad actors alike. Fraudrails didn’t stop the cyberattack, they only prevented the attacked company from performing triage to counter the events.
