---
title: "280 - Code Annotation"
layout: essay.njk
date: "2024-12-13"
---

Code Annotation plays a critical role in preventing engineering debt
from piling up as employees move on and their code risks being
misunderstood. Google's search engine is an extreme case of this, where
the code behind it became so poorly understood that they had to begin
A/B testing every change, as they could no longer predict the
consequences.

Annotation also isn't just one thing, as it takes several distinct
forms, "What" the code does, and "Why" the code does it. This
distinction is also often forgotten in industry, where it can be a
struggle just to get minimally sufficient annotation in code in the
first place. Some use this as a means of giving themselves "job
security", attempting to monopolize the understanding of critical bits
of code.

This begs the question, "What could be gained if all of (a given
company's) code could have both kinds of annotation added retroactively
to areas where it was previously neglected, and what would those gains
be worth?".

In Google's case, they could stop throwing spaghetti at the wall to see
what sticks, or as it stands today their already monumental pile of
spaghetti code. Changes could be based on understanding rather than
gambling.

Code could also be rewritten and optimized in ways that aren't possible
absent understanding, so all of the extra overhead costs of keeping
poorly understood legacy code could be saved, including the
cybersecurity breaches that exploit old and vulnerable code. With
Cybercrime representing the third largest market in the world today,
standing at over 8 trillion USD annually in 2023, and steadily growing,
this is a significant and growing cost.

Such understanding of code also allows for bad patches to be more easily
spotted and avoided, like the patch that cost airlines, hospitals,
banks, emergency services, and many others billions of dollars in the
2024 CrowdStrike incident.

Such quality and complete annotation may predictably become an industry
standard once deployed as a commercial offering. This could be driven
purely by market forces, as well as considered for potential regulatory
requirements for essential and high-impact services.

Please note that this specific capacity is neither feasible nor
fundamentally possible for LLM-based systems, as systems where
"Bullshit" is a fundamental feature cannot serve such a function.
However, ICOM-based systems are based on dynamically growing knowledge,
not "Bullshitting", so this is a use case we'll begin exploring in the
coming months.
