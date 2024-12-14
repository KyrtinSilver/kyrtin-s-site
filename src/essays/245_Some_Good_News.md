---
title: "245 - Some Good News"
layout: "essay.njk"
date: 2024-10-10
---

I have some good news and some bad news. The bad news is that ARC-AGI’s team followed up on my team’s score of over 80% by deciding that they weren’t going to run the test to verify it.

This probably seems like a “WTF?” moment, because to the best of my knowledge no other benchmark picks and chooses who they’ll actually verify based on an internal system where you have to be “advocated” for. The only way I could find to describe this property of asymmetric exclusion is that they’ve chosen to be the Gary Marcus of benchmarks, happy to debunk, but never to positively confirm anything. This still serves a valuable purpose, just an incomplete one.

In their own words: “The purpose of the public leaderboard is to measure approaches utilizing production-grade state-of-the-art LLMs like those available from OpenAI, Anthropic, and Google that would be restricted in the official ARC Prize competition. The public leaderboard is not intended to measure and verify proprietary AI systems.”

I imagine the irony of this for those familiar with the ARC-AGI Challenge and/or my team’s work is sufficiently obvious that I won’t dig into it. 

The good news is that once another update is complete we’ll deploy the web form for people to test one of our systems (a fragment of ICOM) with ARC-AGI and ARC-like JSON puzzles, for demonstration purposes. We had already completed 90% of the work by the time they confirmed that they wouldn’t run the verification, so we’ll deploy it soon anyway.

I’ve capped the API, so please don’t abuse it, as that would shut it down and prevent others from getting the chance to test it out. We’re still paying for these expenses out-of-pocket, but fortunately, our systems are also quite cheap to run, averaging about $0.03 per puzzle right now. This will also become even cheaper as we move forward through the next steps on our agenda, including running more of it locally.

Even with their decision to exclude us because we don’t build LLMs and won’t torch more than a decade of our IP just to get a gold star from them while they give AI’s two most obvious frauds, OpenAI and Anthropic, a free pass, we’ve got numbers to compare. Both OpenAI and Anthropic score an abysmal 21% on the evaluation dataset, where we’re sitting at 83% even with some data pipeline errors remaining.

Now, back to our core engineering work. This little detour is over, and after the web form is updated we’ll be back to working toward the complete systems slated for commercial deployment.

![Comic Relief](https://media.licdn.com/dms/image/v2/D5622AQFM50m6F9VUlw/feedshare-shrink_800/feedshare-shrink_800/0/1726963450313?e=1736985600&v=beta&t=tc7nN2-jrV63mMJo-gX4-7Vl4uKm_VODCXVk8q49Cko)