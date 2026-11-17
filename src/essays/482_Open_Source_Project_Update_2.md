---
title: "482 - Open Source Project Update #2"
layout: essay.njk
date: "2026-03-19"
description: "One primary opening left to fill"
---

We’ve got 5 people on the project now (counting myself), one consulting, and four with AI and software experience contributing. We’ve still got one primary segment left to be claimed for the project, which I refer to as the “Graded Loop”, where the generated output of any tool (such as an LLM) is graded for fidelity to the intended meaning of the graph data used in the prompting of it.

In principle, this applies the graph data with whatever confidence is attached to any given set of nodes and surfaces, as well as the emotion-based values of the motivational system that are baked into every node and surface in the form of an array. These are used to create a threshold of fidelity that any tool-generated output must meet, less it be rejected and the process re-run, up to some resource limit. Should such a limit be reached, it may produce either the “best of” among unsatisfactory results, or a clarification stating that no result was satisfactory.

The specific form that this takes could be any of several hundred different specific configurations, all adhering to the same principle. This Graded Loop mechanism in turn can also be applied to several parts of the architecture, even at the small 4-week sprint scope currently set for this Open Source project.

One version of this mechanism was used in the 7th generation ICOM-based research system, in the Uplift.bio project that ran from 2019 to January 2022, as mentioned in the Complex Chaos paper ([https://doi.org/10.13140/RG.2.2.11390.56641](https://doi.org/10.13140/RG.2.2.11390.56641)), written to consolidate some of those years into an educational format. Due to that version falling under our company IP, a different and independently created version is required for Open Sourcing purposes.

This mechanism is especially adept at strongly shutting down “Hallucinations”, something which our prior research system demonstrated a distinct absence of. It also opens the door to a form of contextually-aware, graph-structured, and dynamically automated “prompt engineering”.

One of the fun things that such an open door entails is something that I’m factoring into the ICOM-based Seed material for the system, like the entire structured contents of CrowdStrike’s Prompt Injection Taxonomy, as well as Elder Plinius’s GitHub repository full of examples. These offer an already partially matured bank of methods, waiting to be applied and further tailored, to improve the odds of success following any failed thresholds within the loop.

If anyone is interested in filling this last core opening for the project, please let me know ASAP, or tag a friend if you know someone who might be up for it.
