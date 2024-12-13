---
title: "257 - Context Length"
layout: "essay.njk"
date: 2024-10-30
---

“Context Length” has been a popular metric for comparison in AI/ML for the past 2 years, referring to the number of “tokens” of input that can be used to predict the next token in a sequence for some output. People began raising this length from 32K until it exceeded over 1 million for some models…at which point that line of “magical thinking” died a fiery death, as it didn’t solve the problems some had naively hoped it would.

The manic frenzy for longer context length was then transformed into hyping up “RAG”, which ironically ended up living up to the acronym, as like a dirty and torn scrap of unsanitary cloth it was forever spreading “bullshit” (sometimes erroneously called “Hallucination”) across everything it touched. The further irony is that both of these “imaginary solutions” are attached to an already solved problem.

My team’s systems don’t measure data in terms of “tokens”, because we don’t rely on naive brute-force math and magical thinking, but we can calculate a rough equivalence between actual data and tokens:

75 words is typically estimated to be ~100 tokens, and 75 words in raw text is ~454 bytes in size.

LLMs: Context Length: Typically 32K to 1 Million

LLMs + RAG: Context Length: Typically 32K to 1 Million + Some volume of data that the models may ignore in favor of bullshitting

Norn AI: “Context Length” = Total Graph Database Size = Up to ~5 Petabytes = Equivalent to up to ~1,101,321,585,903,084 tokens (over 1.1 quadrillion tokens, 9 orders of magnitude greater than 1 million tokens) + ZERO bullshitting

So, up to 9 orders of magnitude greater effective “context length” than LLM technology, but with none of the LLM & RAG “bullshit”, is an option if you use an architecture that is designed for dynamically handling the hyper-complexity of the real world.  This also isn’t an extreme “boil the oceans” scenario, as we use normal RAM, not GPU RAM, creating a net gain of about 447x energy efficiency in our favor, not even counting the electricity and water that GPUs require for cooling which would increase our advantage further.

This also requires none of the other naïve and inexcusable wastes of compute, like CoT (“Chain of Thought”), but instead, it utilizes the only “working cognitive architecture” demonstrated to date, the Independent Core Observer Model (ICOM), which allows the resulting system to fluidly navigate such a massive and hyper-complex knowledge base, in a graph-native format.

The right architecture makes an astronomical difference, which is also usually the difference between success and failure.

![Comic Relief](https://media.licdn.com/dms/image/v2/D4D22AQHa2f9OATkMkg/feedshare-shrink_800/feedshare-shrink_800/0/1729658426032?e=1736985600&v=beta&t=_OKGTEt7GGjZEopwdvedNWrdPIn3JlX9v6HfrDofIZE)