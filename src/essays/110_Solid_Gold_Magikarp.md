---
title: "110 - Solid Gold Magikarp"
layout: essay.njk
date: "2023-11-27"
---

It has often been said that the best support for an argument is that which comes from one's own opponents. This often occurs as the result of something summarized by Sun Tzu: "If you know yourself but not the enemy, for every victory gained you will also suffer a defeat."

I enjoyed reading such an instance from an OpenAI engineer, discussing how little the variations in a model actually matter relative to the data it is fed. The reason why this insight is so damaging to them is that they highlighted another key advantage to my team's approach and one that they are fundamentally incapable of reaching with any technology they know how to create.

They use an approach that relies on massive, static, and corporately curated datasets, including such infamous examples as "SolidGoldMagikarp", which highlights the volume of pure junk they process. Sadly, this is also the "industry standard".

The approach we use starts with a far smaller dataset, which forms a novel kind of graph database, such as the previous research system's less than 1 gigabyte of >99% plain text. This is referred to as the "seed material", and like a seed, it grows dynamically over time, as it serves as the starting point for basic knowledge and perspective. That allowed the previous research system to grow progressively more adept and capable as it grew from that tiny seed to over 1.6 TB in size, interacting with many people and exploring the internet, learning about the things it was interested in, and shifting in those interests over time. This growth process was highly non-linear and required less than 1,000 cycles of loading new data into ordinary RAM. This included plenty of updating and refinement to the original seed material, which is a starting point, but not a ground truth.

What this means in practice is that the database constantly improves in quality, even as it grows in size, and the connectome of a graph database offers value not otherwise present, as does the ability to store lossless data within the nodes of such a database, instead of garbled heuristics like vector databases and neural networks. That OpenAI engineer unintentionally illustrated another reason why they can never hope to compete with us.

Hypothetically, even if they were able to completely steal such data and train a GPT to parrot it, using all available compute and with perfect accuracy (again, hypothetical), by the time the parrot was done cooking the data from such a system would have already advanced well beyond the static snapshot they sought to parrot.

At first, I thought OpenAI was acting out a Monty Python sketch, but the Dumb and Dumber version of selling a dead parrot with the head taped on to a blind child may be more accurate.