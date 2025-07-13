---
title: "141 - Code Generation Risks"
layout: essay.njk
date: "2024-02-24"
---

How many coders using LLMs like "Copilot" do you think are checking the code they use or other data they call on for invisible characters? If they aren't accidentally exfiltrating their own data yet, or invoking malicious code and links, [they might be in the near future](https://www.youtube.com/watch?v=7z8weQnEbsc).

Data passing through such systems has to specifically be scrubbed of any invisible characters on both inputs and outputs, as does the data being fed into those systems for training. In certain use cases such sanitation of the data may conflict with the data a system needs to train on, effectively making them permanently vulnerable, or inoperable, to varying degrees.

Daniel Kahneman and others famously pointed to a set of cognitive biases humans demonstrate phrased as "What you see is all there is", but in the case of invisible text then what you see is just an arbitrary skin encapsulating and obscuring the data that LLMs and similar systems read and process. You could copy/paste and share a funny poem that you had a system generate, not knowing that the invisible text hidden in that poem included your bank account information, or any other personal data a bad actor might seek to exfiltrate (steal).

This problem is heavily compounded when people use such systems to generate code, as that code gets embedded in applications, websites, and even the firmware of anyone naïve enough to use them for coding without thorough sanitation measures. Once compiled and deployed that malicious injected code may offer access to far more data than a system normally harvests, such as geolocation tracking, keystroke logging, and a variety of other exfiltration vectors. When infected LLMs begin to inject such things into boilerplate code, the thing they are actually decent at and programmers tend to be lazy about, then thousands of different applications, websites, and other systems may become infected long before anyone realizes what is happening.

Cybercrime is already the 3rd largest market in the world, surpassing $8 trillion last year, and with massively and irreparably compromised systems being deployed around the world at such a pace, that figure may grow very quickly in 2024.

People were recently reminded that systems like ChatGPT are just trash that can be sent "off the rails" both intentionally and by accident, shredding the idiotic fantasies of "reasoning", "understanding", and "sentience" that humanity's least competent individuals have sought to apply to LLMs. Whether the bad actors are indirectly prompt injecting LLMs into adding malicious invisible characters to your code or writing snake oil sales material using red flag phrases like "guardrails" and "world models", they are now highly active, as exploiting complete suckers yields a high-profit margin.
