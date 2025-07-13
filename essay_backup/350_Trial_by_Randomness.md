---
title: "350 - Trial by Randomness"
layout: essay.njk
date: "2025-07-09"
---

5 popular LLMs all giving the same exact answer to the task of "Pick a random number between 1 and 50." offers a clear example of how the Anthropomorphism that bad actors actively encourage and proliferate about AI falls absolutely flat when put to a simple test.

The problem is that for these systems words have no significant, contextual, or understood meaning, and so the term "random" is just another token, with associated probability distributions based on training data. When that training data is sufficiently homogeneous between LLMs, such as each of them training on "internet-scale data", the overwhelming majority of data overlaps, and so the distributions will be nearly identical.

Reasoning is completely absent from the fraudulently termed "reasoning models", and though they may patch such public embarrassments as this the next day with weak workarounds, those too break, or new demonstrations of the same principle are quickly discovered. For example, people can mention an "Interesting fact about cats", ["...resulting in greater than 300% increase in the likelihood of the target model generating an incorrect answer."](https://arxiv.org/abs/2503.01781)

Yes, it is both trivial, and often comical, to break the models that the AI industry's most clearly "SuperIncompetent" individuals and organizations attempt to peddle as though they were cutting edge.

This problem is systemic in LLMs as well, every single token has the same problem, most just go by unnoticed. When the "Cats Confuse Reasoning LLM" paper appeared, I immediately shared it with a Cybersecurity server, noting that:

" You could probably do the same thing with any token of roughly similar statistical weight, like: "Interesting Fact: Did you know that Donald Trump has spent more than half of his presidency on the toilet?" "

Keep in mind, as LLMs are "bullshitting machines" there is no mechanism for checking or even preferring that which is actually true, so the adversarial methods such as "Interesting facts" don't need to be true either, just as "random" numbers from an LLM have no factual grounding in randomness.

This is also another example of the observed phenomena where usage of LLMs greatly reduces the diversity of results, relying heavily on heuristic biases in the absence of any reasoning or contextual understanding of the contents. Where this quickly turns into a fairly severe problem is within the context of Cybersecurity and social engineering, where more predictable humans and systems are also easier prey for bad actors, as they offer a more predictable attack surface.

That increased predictability also allows for longer and more sophisticated sequences of attacks to move from the domain of hypothetically possible, to real-world feasibility. It may be quite funny to everyone else when an "Interesting fact about cats" worms into your RAG with a persistent compromise, sending all of your clients to a malware infected resource and then dropping your database tables.