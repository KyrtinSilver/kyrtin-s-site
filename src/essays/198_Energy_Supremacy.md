---
title: "198 - Energy Supremacy"
layout: essay.njk
date: "2024-06-05"
---

While I'm not a fan of holidays, "Christmas came early" for me the other day when Nvidia attempted to brag about the electrical consumption for training and operating OpenAI's GPT-4 sized models. They've spent years carefully hiding all sustainability data that they legally could, so I hadn't been able to update comparative figures since digging through server hardware specs for their Megatron model back in 2021.

I've spent the past two days digging up more numbers and crunching them, with the usual emphasis on drawing a conservative comparison between the data they list and my own company's worst-case scenario for our technology.

The worst-case factors are specifically:

- Assuming 100% hardware utilization (virtually impossible for typical types of AI)

- Including API call energy usage and using nascent tool usage performance (Norn systems improve in this performance over time)

- Using a 24 TB AWS high-memory server as the base (a scale sufficient to potentially handle hyper-complex problems over 100x better than humans)

Remember that if any of these are not the case, then the numbers improve further in our favor.

While the numbers were already quite damning back in 2021, they favor our technology far more heavily in 2024. If OpenAI proves dumb enough to deploy another model that is 10x the previous scale (GPT-5), the difference between GPT-3 and GPT-4, then our advantage skyrockets even further.

The comparative chart is labeled using a logarithmic scale, that is orders of magnitude, where each bar is 10x the previous. Even including API call energy usage in Norn's totals, Norn is ~447x more energy efficient than OpenAI running on Nvidia's best hardware. Being so vastly more energy efficient also means it is relatively easy to deploy servers in areas with far lower electricity costs, and far less detrimental impact on the environment, resulting in a ~822x energy cost savings. If Nvidia conveniently neglected to mention the electrical cost of cooling in their figures the Norn advantage may be greater still.

Even deploying 3 Norn systems at the current theoretical limit of the N-scale database architecture for real-time operation, each individually capable of solving hyper-complex problems much further beyond human comprehension than 100x complexity, and having them operate as a collective intelligence, would cost less than running trash like GPT-4 today.

The future of AI doesn't involve training $10bn models or nuclear reactors dedicated to powering trashbot technology. However, the bankruptcy of Nvidia and OpenAI is a very real possibility.
