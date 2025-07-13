---
title: "243 - New ARC-AGI-PUB Score"
layout: "essay.njk"
date: 2024-10-06
---

Our new ARC-AGI-PUB score (pending verification) continues to rise as the data pipeline is cleaned up, now at 82% counting all pipeline errors as misses, with human performance being 85%. The next nearest scores are 46% and 43% respectively, so we’re blowing the competition out of the water by a wide margin, but we can also boost our score further in a variety of ways. 

This is only the start of the performance curve for ICOM-based systems.
 
Things that we didn’t do:

- Zero “synthetic data” was used. I prepared a collection of such data just in case, but the nascent performance of our systems was already quite sufficient.
 
- Zero “training” and/or “fine-tuning” of neural networks for ARC-AGI was performed. Our only API calls were more generic and cheap systems, coming to between $8 and $11 in total compute per run of 400 ARC-AGI Challenge tasks. These APIs are actually a hindrance right now, as the main remaining data pipeline issue appears to be in API threading, so we may switch to a locally run model ahead of schedule.
 
- We haven’t implemented an opportunity for our systems to use the 3 guesses per puzzle allowed for the challenge, these numbers are from giving them only one chance per puzzle.
 
- We’re nowhere remotely close to maxing out the allowed compute time for an ARC-AGI Challenge run, coming in at ~1.5 hours for 400 problems, where the verification is only 100 problems and allows up to 12 hours. This means that we could allow our systems an order of magnitude more compute per each of the 3 guesses allowed per problem if we wanted to maximize our score, and it would still run in less than even the strict time limit imposed on the Prize Board.

To my knowledge, we’re also the only ones to put a system to the ARC-AGI Challenge that wasn’t designed, trained, and built specifically for ARC-AGI. Baseline scores for trash like GPT-4o and Claude 3.5 are 5% and 14% respectively.

The ARC-AGI Challenge Prize leaderboard on Kaggle also paints this picture very clearly from another important angle, as it shows the number of entries made by each team. As I type this, the top team there, with a score of 46%, has made 281 entries since June of this year when the large cash prize was introduced, maxing out their daily allowed entries. All but 1 of the top 5 teams have over 100 entries for the same time frame.

The top team for the Prize leaderboard has also been specifically working on the challenge for a long time, whereas I was only recently able to persuade my co-founder to take a brief detour from our core infrastructure engineering workload to run our systems against this challenge. This is nascent performance, not serious or sustained effort aimed at the challenge. I was able to persuade my co-founder to do this specifically because it required virtually nothing that we didn’t already have on our agenda, except the data pipeline work specific to this challenge.

“The best is yet to come.” -Sinatra

![New ARC-AGI-PUB Score](https://media.licdn.com/dms/image/v2/D5622AQFIeLSy4wD-RA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1726177862978?e=1736985600&v=beta&t=QAGbJmWygPw-HkqAkUyUNhcDHFk2upY3DF1GVVFqK9o)