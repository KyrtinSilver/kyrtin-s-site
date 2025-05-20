---
title: "322 - No Safe Haven"
layout: essay.njk
date: "2025-05-01"
---

Cognitive bias and noise (statistical, inconsistency) are two core concepts that people who talk out of their depth on AI frequently run afoul of. The difference between the two is critical to understanding what simple AI like LLMs and RL fundamentally can and can't do.

Cognitive bias is a heuristic and irrational process for reaching some conclusion/output. Like a broken clock, this process might be right twice per day, but it will be wrong for the rest. Common examples of cognitive bias are stereotypes, confirmation bias, and various aspects of narcissism.

Noise is inconsistency in that process, frequently based on irrational responses to some input data. Common examples of noise famously include the rulings of US judges (with skewing factors like the weather and lunch time) in virtually identical court cases, but can also include things like customer service and quality assurance.

LLMs and RL provide neither a safe haven from cognitive bias nor do they truly avoid noise. LLMs are data curve-fitting systems, context-blind and driven by narrow optimizers, making them a weaker, shallow, and context-blind version of human cognitive bias. They are reliably more biased than the average human, as well as being biased in even more nonsensical ways than humans. RLHF further blindly skews the models so that they no longer even curve-fit to the data, making actual alignment even worse.

As anyone operating at the intersection of AI and Cybersecurity can tell you, LLMs are also wildly inconsistent, both by adjustable design with any temperature not set to zero, as well as by holding a network of weights in a trained superposition, causing countless unrelated forms of input to have significant and human-unlike impacts on any process. A simple algorithm can indeed be used to reduce statistical noise to virtually zero, but that is far from the case with neural networks.

If someone tells you that an LLM, RL, or "agentic" derivate thereof can be used to reduce cognitive bias or noise, they are usually full of BS. Those systems can push the problem around the table, but every problem remains on the table, unmitigated, with the added complexity, overhead costs, and subsequent complications and points of failure they bring with them.

If anyone intends to pitch you AI related to cognitive bias, meet them on the roof of your building. If they run afoul of this, just give them a little push in the right direction, off of the edge.

![No Safe Haven](https://media.licdn.com/dms/image/v2/D5622AQGHmOkNOEB2sA/feedshare-shrink_800/B56ZaJwW70G4Ak-/0/1746067878184?e=1750896000&v=beta&t=jhMpcU3WBnYzW-OinKY-2l9jEN_w9r0KhjPRkhBgGFo)