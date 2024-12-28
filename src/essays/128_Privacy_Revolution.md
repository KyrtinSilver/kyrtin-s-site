---
title: "128 - Privacy Revolution"
layout: essay.njk
date: "2024-01-05"
---

During a recent discussion on how some of the current narrow AI tools could be used in ways that actually preserve privacy and security, while still serving a purpose, I spotted the elephant in the room for underutilized hardware resources.

Many AI companies would rather not talk about the obscene amounts of money they spend on hardware and cloud resources, because when it comes to optimizing technology they couldn't be much worse. There has been one recent exception to this, the silent tech giant that has held the best position in the market for the past year, Apple. [A recent paper they released](https://arxiv.org/abs/2312.11514) highlights that they're not only working on utilizing DRAM rather than just GPU memory but also flash memory, to intelligently optimize the load, rather than bottlenecking on GPUs.

The elephant in the room is every single device, laptop, desktop, or smartphone, during the ~8 hours every single day that they aren't in use, while we sleep. While you can't train something like a full-scale LLM from scratch on 8 hours per day, your devices absolutely do have the processing power to train smaller personalized layers, private, secure, and specific to you.

Keeping such models secure and private would require that they only communicate with frozen, logless, and unfiltered models. That said, there is a market for it.

Much of today's wasted compute comes from LLMs and similar systems producing junk a large portion of the time, requiring a few iterations of prompting until they produce anything usable. When people get lazy and accept results too early, as they are often prone to do, they create many foolish messes, like filing lawsuits that cite nonexistent court cases.

Both the price of that added iteration and the price of laziness for those neglecting due diligence could be substantially reduced through on-device compute being applied during sleeping hours, to provide an adaptive layer of personalization. Such an adaptive layer only needs to reliably satisfy one person, which is a far easier and more consistent task than satisfying the "average user", when the "average" frequently fits no one at all. One person isn't interested in everything, and they prefer certain ways of communicating, and certain aesthetics, greatly reducing the dimensionality where 95%+ of the performance gains from personalization can be readily achieved.

Keep in mind, that the people behind data-hungry models trained on internet-scale data don't want this. They want more data, and they want all of your data, whether you like it or not, all of which will be compromised, leaving you neither privacy nor security. If those internet-scale data-consuming models are legally forced into deletion that may change, but even if that battle is won, it probably won't be won easily.
