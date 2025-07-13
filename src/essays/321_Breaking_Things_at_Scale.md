---
title: "321 - Breaking Things at Scale"
layout: essay.njk
date: "2025-06-29"
---

As happens about once per year, a company has demonstrated a viable use for the currently popular LLM / RL / etc.-based AI (with a little GOFAI mixed in). Anyone familiar with tech industry practices or the world’s largest markets shouldn’t be surprised by the use case itself. Remember the phrase “Move fast and break things”? XBOW, a Cybersecurity company, handles the “breaking things” part autonomously now.

Cybersecurity penetration testing, where a company figures out how to break your systems so that you can fix those vulnerabilities, [has now been dominated by a new number 1 performer](https://xbow.com/blog/top-1-how-xbow-did-it/), doubling the reputation score of the next highest hacker on the HackerOne charts.

This shouldn’t come as much of a surprise, since Cybercrime, the 3rd largest market in the world, does almost the same thing with the same technology. The primary difference is that Cybercrime also targets the human vulnerabilities, whereas pen testing typically focuses on only software vulnerabilities. Even so, it is encouraging to see any rare shred of competence in the AI space today, and XBOW appears to have that in ample supply.

Note, this use case is explicitly limited to the “breaking things” and “validating that they were broken” subset of the space, not actually fixing the vulnerabilities. This means a potential shift for Cybersecurity workloads, far from human obsolescence.

One of the reasons why this particular use case is viable, both for Cybercrime and Cybersecurity, is that “Breaking things” is indifferent to the presence or absence of complete BS, so long as a (frequently GOFAI) validator is used to verify which attacks actually broke something. As LLMs are fundamentally “bullshitting machines” by design, that total (or near-total) indifference is a hard requirement for viable use cases.

The other key reason for viability is that they are “breaking”, not “defending” or “securing”, so the vulnerable-by-design nature of LLMs doesn’t factor in either. The attacker has nothing to defend, they need only kick your sand castle from any vulnerable angle that presents itself. The plausibility-based dynamics of such technology paired with a validator are sufficient to bombard such an attack surface, given some high quality data, fine-tuning, and other similar tricks in the common toolbox.

Given the rate at which Cybercrime has been steamrolling over companies globally, this does offer some small glimmer of hope, if only to buy some much-needed time for more powerful systems to be deployed for securing the world’s cyberspace. I sincerely hope that this company thrives in the coming months, because most companies have their pants at half-mast right now, and someone needs to show them how to change that.