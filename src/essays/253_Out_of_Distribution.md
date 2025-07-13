---
title: "253 - Out of Distribution"
layout: "essay.njk"
date: 2024-11-23
---

“Out of Distribution” (OOD) in the AI/ML research literature often doesn’t actually mean Out of Distribution in the literal sense. We’ve frequently encountered this problem in daily paper discussions on AI, where the authors repeatedly make this critical and fundamental mistake.

That mistake is to confuse the portions of a distribution that aren’t directly memorizable with the parts of a distribution that introduce nothing not seen in the directly memorizable parts, just in unseen combinations. For example:

- Red and Green apples are contained in training data (Directly in Distribution)
- Purple apples aren’t contained in training data, but both the color purple and apples are, and nothing unseen is called for (Combinations of content found within training data, but unseen in a specific combination, Indirectly in Distribution)

Another popular example of the latter is “a picture of a horse riding an astronaut”. The problem with this is that it isn’t actually “generalization”, “reasoning”, “understanding”, “emergence”, or a “world model”, it is simply filling in the virtually infinite combinatorial space of unseen combinations that are present within the distribution of internet-scale datasets. 

The concept of filling in those blank spaces within distributions of training data was popularly used in the training of AI/ML computer vision systems even a decade ago. Simple tricks like rotating and flipping images within the training data to synthetically fill in those blank spaces proved effective for some problems, but just as a rotated or flipped image isn’t OOD, neither is a purple apple.

Something genuinely OOD is more like asking a vocal cloning algorithm to do your taxes, it is a task where you can safely confirm that the training data doesn’t include all of the necessary distributions to complete it. In these cases, generalization, reasoning, and understanding are required for reasonable results, absent substantial hand-engineering.

When people talk about “prompt engineering”, they’re frequently forgetting that “prompt engineering” is simply the act of forgetting that it is your hand up the Muppet’s ass, making it move as you wish. It ceases to be about AI/ML capacities and becomes a matter of User Experience (UX) research.

UX researchers should never be confused with experts on technology, as they deal with how people use technology and the expectations that people hold about it. While that can be real social science research, it isn’t technology research, and nobody can afford to confuse the two. 

There is a real and urgent need for UX improvements among many major companies, with Microsoft being the long-running champion of “The World’s Worst UX”, but if a UX Researcher starts talking about the “generalization” or “reasoning” of LLMs, it is time to give them the “Ole Yeller” treatment and take them out back.

![Out of Distribution](https://media.licdn.com/dms/image/v2/D5622AQErKHCCHJdADA/feedshare-shrink_800/feedshare-shrink_800/0/1732073989715?e=1736985600&v=beta&t=cZufpb4VwrOfSfdgPdv_4jYAvYelKDC7IrXDoThqBAw)
