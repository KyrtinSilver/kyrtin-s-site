---
title: "023 - Data Privacy"
layout: essay.njk
date: "2023-08-05"
---

Data Privacy and the "Right to be Forgotten" have become an increasingly hot topic with the recent rise of #chatbots.

Chatbots, such as those built on the #GPT architecture, fundamentally can neither remember nor forget anything. They can "learn" heuristics, but they aren't data retrieval or compression systems, so data can't be truly learned or ever completely removed. Attempting to remove or modify anything can also degrade the model's overall performance since the architecture isn't designed to cleanly separate data.

Chatbots are also often trained on "internet-scale data", with companies like #Google clearly stating that they'll take everything their bots can access on the internet and feed it into training their systems.

This decision will likely cause severe legal consequences for Google and others like them in the long term since systems already exist that can outperform GPTs while still offering data privacy and accommodating the right to be forgotten.

ICOM-based systems are able to outperform the leading GPTs by using models over 100 times smaller as tools and needing more than 10,000 times less data. Their data is stored in a graph database format. This means that it can be selectively deleted, the data remains human-comprehensible, and everything derived from it remains both fully explainable and transparent.

This architectural difference also means that the data is cleanly separated, so when some data is deleted the system's overall capacities don't suffer.

With the option to use models over 100 times smaller as tools while still maintaining top performance, both training and overhead operational costs may be massively reduced.

Reducing the required data by such a massive amount strongly discourages the invasion of privacy, as the risks of that activity abruptly come to outweigh the gains.

GPT-based systems, and anything else that can be "prompt engineered" are also permanently vulnerable to both direct and indirect "prompt injection" by design, as the two things are effectively identical.

In GPT-based systems, any private data is permanently at risk, and with the entire internet being fed into such systems that is quite a lot of private data.

ICOM-based systems can not only selectively remove such data, but they can also intentionally guard against any models they use leaking data that those models didn't or couldn't delete. This offers companies who made exceedingly unwise architectural choices a near-term strategy where their models are still usable, but abuse of the private data they were trained on is prevented.

Any major tech company could easily invest a fraction of the funds being wasted on the average chatbot's training today to accelerate the deployment of the commercial ICOM-based systems. In doing so they could also prevent a competitor from ever gaining this insurmountable advantage.

It doesn't take internet-scale data to see who will come out on top.

One of the best metaphors describing LLMs / chatbots as they relate to the compression of information is quoted as follows:

"NNs (Neural Networks) do less than lossy compression because in lossy compression you at least get guarantees of what properties are preserved, and only those are the ones you can assume to be recoverable. NNs do not give you that guarantee since NNs are not compression systems just like you eating a loaf of bread and producing a literal pile of sh\*t is not the same as "compressing the bread"."

Don't make the mistake of thinking that what you've got your hands on, posting on social media, and emailing to people is "compressed bread".