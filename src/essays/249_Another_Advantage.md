---
title: "249 - Another Advantage"
layout: "essay.njk"
date: 2024-11-15
---

Another advantage of “graph-native” systems is that data flowing through them and the operations being performed are discrete, making it possible to trace, log, audit, and precisely adjust them at any depth or granularity. This stands in stark contrast to end-to-end processes like you’ll find in neural networks, where what happens between the two ends is a “black box”, with or without post-hoc attempts to approximate the interior of that box, or wiring the box in loops with "CoT".

For example, take a common task where someone attempts to use a system to help in some decision-making process, even something as simple as “what to eat for lunch”:

Graph-native: The system can take its entire accumulated sum of knowledge about you into consideration. This could be as superficial as things that a typical acquaintance may know about you, a couple of foods or restaurants you may like, or as deep as knowing your latest blood screening test results, dietary concerns, health conditions, and exhaustive preferences.

It can also take into account the restaurants nearby, if they deliver, the cost of food and delivery, the safety of the neighborhood, crowdedness, any prior health code violations they may have on record, reviews (including vetting reviewers), or any other available information resources.

This process can be broken down and out into fully explainable and transparent steps flowing through a deterministic system, as that system continues to learn and grow. This means that you could log every single step of this process and the factors directing steps A to B, B to C, and so on, with full context, to the point where you could write a 40-page research paper on how a system went about figuring out your ideal lunchtime destination in a few seconds.

Note, the system would also keep thinking after this, as it isn’t an input-output system but rather a continuously operating one, so you could also write a paper on where the system’s thoughts turn to after assisting you.

Since a graph stores actual data of any kind desired, not “weights”, the contents of a node in the graph will often be human-readable, as will the connections, such as an “of-type” connection between a number of local pizza places, or perhaps vegetarian-friendly locations. 

The graph-native system isn’t attempting to predict tokens but rather is performing discrete steps over deterministic data held within a graph structure, exploring additional resources to perform additional steps and improve that knowledge base both as needed and opportunistically. 

You don’t get “hallucination” (technically termed “bullshit”) from these dynamics. While the “tokens” a neural network uses to train the weights for probability distributions are discrete, the processing isn’t, and the resulting weights operate in a lossy superposition, making them explicitly and inherently not discrete.

![Another Advantage](https://media.licdn.com/dms/image/v2/D5622AQHABQSMae39xA/feedshare-shrink_800/feedshare-shrink_800/0/1731124809553?e=1736985600&v=beta&t=OBOoz1vEhHOcOp0a7GCycgTQYRtiQFFbBszXZstTGJ8)
