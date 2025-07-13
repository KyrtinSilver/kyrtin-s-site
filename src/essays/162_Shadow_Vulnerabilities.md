---
title: "162 - Shadow Vulnerabilities"
layout: essay.njk
date: "2024-03-29"
---

Before the intentional humor of April Fools' Day begins, here is a strong example of naturally occurring fools being actively [exploited "in the wild"](https://www.oligo.security/blog/shadowray-attack-ai-workloads-actively-exploited-in-the-wild) from Cybersecurity:

> "TL;DR
> 
> The Oligo research team has recently discovered an active attack campaign targeting a vulnerability in Ray, a widely used open-source AI framework. Thousands of companies and servers running AI infrastructure are exposed to the attack through a critical vulnerability that is under dispute and thus has no patch. This vulnerability allows attackers to take over the companies' computing power and leak sensitive data. This flaw has been under active exploitation for the last 7 months, affecting sectors like education, cryptocurrency, biopharma and more. All organizations using Ray are advised to review their environments to ensure they are not exposed and to analyze any suspicious activity."

As a server full of cybersecurity professionals and researchers quickly pointed out in response, "why the hell is this on the internet?", "It's not supposed to run externally. It doesn't even have a notion of user accounts or authentication.

So the lack of a patch is less concerning than why anyone would ever put it on the Internet"

So, this massive flaw has been actively exploited in the wild for more than half a year when there was no reason for a system lacking any notion of user accounts and authentication to even be left accessible to bad actors in the first place.

> "Who Uses Ray and How?
>
> Today, Ray has 30K stars on GitHub \[5\]. According to Anyscale, some of the world's largest organizations use Ray in production, including Uber, Amazon, and OpenAI. \[6\]
>
> Ray does not include any kind of authorization in its Jobs API. The result: anyone with dashboard network access (HTTP port 8265) could potentially invoke arbitrary jobs on the remote host, without authorization."

So yes, the world's largest tech companies still have their pants all of the way down, exposing both themselves and their customers to anyone keeping an eye on "shadow vulnerabilities" that scans don't pick up.

Remember all of those RAG systems you plugged into vulnerable-by-design LLMs to utilize your proprietary data? Well, even the framework used in AI workloads has stayed vulnerable.
