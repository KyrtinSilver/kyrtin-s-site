---
title: "165 - Simultaneous Discovery"
layout: essay.njk
date: "2024-03-20"
---

A mere 3 days after the ["Stealing Part of a Production Language Model"](https://arxiv.org/abs/2403.06634) paper was published another group of researchers doing parallel research published their own findings in ["Logits of API-Protected LLMs Leak Proprietary Information",](https://arxiv.org/abs/2403.09539) confirming logit-based API attacks to reveal parts of closed-source LLMs. Unlike the first group, however, this crew was ethical, choosing to reveal the embedding size of GPT3.5-Turbo to be roughly 4,096. They go even further, estimating the model size to be around 7 billion parameters, which is likely a 7b-MoE to be precise.

Not only is this new group observably baseline ethical, but they propose a viable use case for the layer in question, as a fingerprint for detecting which underlying LLM is being called upon given any one output. This is particularly useful for determining which LLMs cybercriminals are currently utilizing, and tracing that activity back to each source.

"Fortunately, our method can be used to monitor these updates over time, alerting end-users when LLM providers make architectural changes to their model, specifically updates to the embedding size and/or parameter count."

They also note that this method could be used to detect when the hidden prefixes of an LLM are changed, even if the LLM "image" is not. Additionally:

"This technique allows API customers to find quirks in LLM behavior such as tokens that the model is unable to output (at least under greedy decoding)."

"Considering several proposals to mitigate this vulnerability, we find no obvious fix to prevent obtaining LLM images without dramatically altering the LLM architecture. While providers may choose to alter the API to hide this information, the relevant API features have valuable and safe use cases for the LLM clients, who may rely on access to features like logit bias."

In other words, the models will be crippled to varying degrees if any viable methods to prevent this attack vector are applied.

The icing on this cake is that this team mentions the paper published 3 days earlier under mitigations and Section 9 "Simultaneous Discovery", pointing out how they just smashed the prior team's defense method:

"Regardless of the theoretical result, providers may rely on the extreme inefficiency of the algorithm to protect the LLM. This appears to be the approach OpenAI took after learning about this vulnerability from Carlini et al. \[2024\], by always returning the top-k unbiased logprobs. Our new proposed algorithm, however, brings the number of queries down to a more feasible d log ϵ API calls once the initial work of finding the LLM image has finished, weakening the argument that the expensiveness of the algorithm is sufficient to disregard our technique."

LLM-smashing isn't just moving at high speed now, we're starting to see simultaneous attack vector discoveries.
