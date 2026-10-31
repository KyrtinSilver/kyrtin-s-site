---
title: "483 - Dungeons and Dra(Graphs)"
layout: essay.njk
date: "2026-03-20"
description: "This isn't even the Graph's Final Form!"
---

One of the funny things that I’ve realized in listening to a bit of the “LitRPG” literature is that the writers seem to very consistently dream of game-like worlds where the dynamics are utterly incompatible with the software architecture of most games today, but which are highly compatible with graph structure.

A node in a graph can be a concept, within a network of other concepts, with of-type relationships that are themselves of another type. Each node can also have metadata, as well as whatever data the node contains.

To give an RPG styled example:

A given ability might be modelled as a node “Some Melee Ability 1”, that is of-type Melee, Ability, Restricted Affinity A, Condition B, Resources C and D, Influenced by Attributes E-G, ..etc.

To extend this, “Some Melee Ability 1” when modelled in a graph structure like this may be processed in millions of context-specific combinatorial calculations. As with all non-trivial combinatorial problems, it isn’t remotely practical to calculate all such combinations in advance, including via brute force automation. What is practical is to have those computations fleshed out on-the-fly as they are required across the arbitrary dimensionality that any specific context demands.

Numerous authors of such RPG fiction have dreamed of skills and abilities that “evolve” or undergo “fusion” in some context, but that is just such a combinatorial problem. You can’t brute force your way through it, but you can build a structure to compute it on-demand and in-context.

If a player wanted “Some Melee Ability 1” to fuse with “Some Arcane Ability 1” then each surface of the corresponding nodes could be evaluated for baseline compatibility, with success at that level computing a number of possible outcomes, ways that they could be combined. Those outcomes could further be influenced through items, other abilities, levels, and so on.  
  
Likewise, the AI governing NPCs within such a game are subject to the same type of constraints, in their normal non-combat dynamics, within combat, and within dialogue. Usually, these demonstrate simple patterns, blind to any context not explicitly written into them, often trivial to exploit, and directly detrimental to any sense of immersion that could otherwise exist. Of course, any approach that overcomes the combinatorial problem within context can resolve this, such as utilizing graph structure.

Even growing up, I enjoyed looking at fiction and figuring out how something could be engineered, and so each new bit of fiction takes on the added appeal of figuring out how to turn anything of interest into reality. This would occasionally result in exasperation, recognizing that Tony Stark would have to be an idiot to replace a circular design with a triangular one, and frustration at seeing no means of actually creating a lightsaber, but it was a net-positive source of added enjoyment overall.

In reviewing some LitRPG fiction, one more thing became abundantly clear. A large part, if not most, of their readership doesn’t actually “want to read” that literature, they want to have their own character within such a system, exploring, progressing, experimenting, and experiencing it all. Reading such works is the consolation prize, not the desired reward.
