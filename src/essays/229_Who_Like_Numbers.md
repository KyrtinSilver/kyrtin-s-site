---
title: "229 - Who Like Numbers"
layout: "essay.njk"
date: 2024-10-08
---

For people who like numbers: While waiting for the ARC-AGI-PUB score verification to be performed I’ve been putting the public web form we’ve prepared to demonstrate it through some thorough testing. After some long hours putting all 400 puzzles through the web form, it accurately solves 83% of the ARC-AGI’s public evaluation dataset, available on GitHub.

The remainder is split almost evenly between data pipeline errors and actual wrong answers to problems. In hunting down the different errors, I noted that our efforts to clean the pipeline have caused some to flip from error to successfully solving, or from successfully solving to errors, as compared to the last run through our command console. This led me to check what our score would be if two runs were ensembled to simulate two guesses per problem. 
 
The result was 88% accuracy for a 2-run ensemble, a 5% gain over the results of this run in isolation. If the problems erroring out in this run were removed and only failures remained then the score would be 91%.

All in all, for this currently active fragment of ICOM this gives us:
- a baseline of 83%, 
- median of 88%, 
- and a best-case scenario of 91%.

As the target is 85%+ in this case, that seems sufficient, but only time and the verification will tell.

Next, I’ll dig into the pixel-level accuracy taking place in the remaining few puzzles where wrong answers were given, and see about putting them into a visual form for easy comparison. That should produce some interesting new insights to share when next I pull my nose away from the grindstone.

P.S.A.: In the meantime, if you know anyone suffering from the mental illness of claiming that OpenAI is releasing products that “reason” or “understand”, introduce them to the ARC-AGI Challenge, which actually tests for those things, and which they fail at miserably. If they continue thereafter, disown them.

![Who Like Numbers](https://media.licdn.com/dms/image/v2/D5622AQGPujHc1Eqh5w/feedshare-shrink_800/feedshare-shrink_800/0/1726651385211?e=1736985600&v=beta&t=Z2VH0vRjM9mA8qEDoQNYUpQgkjA-A6XK9nBkmv0joZU)