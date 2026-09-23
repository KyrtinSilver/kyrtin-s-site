---
title: "512 - Dependency Collapse (A Domino Effect)"
layout: essay.njk
date: "2026-04-29"
description: "Where Duration Neglect, the Peak-End Rule, and the Planning Fallacy party hard"
---

Dependency Collapse is the risk of a process failing due to one or more critical dependencies failing and consequently cascading that failure across all downstream processes reliant upon them.

When I have a weekly call with someone working on their production systems, I systematically remind them of point where a single dependency can domino effect them into downtime. The psychological effect that downtime has on customers and clients is also far from linear, thanks to Cognitive Biases like Duration Neglect and the Peak-End Rule. These cause people to acutely remember the most potent point of an event, and how it ended, more so than how long it actually lasted. A 1% downtime means significantly more than a 1% loss, and it also occurs intangible losses, to matters such as reputation.

I’ve faced this particular problems many times, as all people tend to. A co-worker fails to meet a deadline that you depend upon, a software vendor fails to fix a bug, a client fails to pay their bill on time, or a friend simply fails to join you for some activity. The downstream processes may slow, stall, or even collapse.

When this happens, those who suffered the failures of others tend to adapt, relying on them that much less, proportionate to the damage or losses caused by the failure. This change allows us to pick ourselves back up, avoiding the repetition of such mistakes.

“Why do we fall, Bruce? So we can learn to pick ourselves up.” -- Thomas Wayne

The Planning Fallacy is often a downstream product of dependency failures, and over the years some observations have indicated a steady decline in the quantity and quality of dependable people. A timeline can only be as accurate as the weakest link in a dependency chain, and giving a weak link too much rope is a recipe to hang oneself on a deadline.

This in turn also creates a reactionary extreme, where some subset of people attempt to do everything themselves, but like any such extreme it tends to be every bit as absurd as its opposite in practice.

Both moderation and iteration, along many dimensions of opportunity and risk, are required to mitigate this problem in practice. My own pivot toward an OSS project based on our prior published research is an example of this, bypassing the sources of several of such dependency failures.

Even so, internally and consistently motivated people are few and far between. Cherish those who you find, but expect to find clay, rather than gold, upon scratching any new surfaces that one may explore.
