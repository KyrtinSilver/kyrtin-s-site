---
title: "227 - Taken The Stage"
layout: "essay.njk"
date: 2024-10-04
---

Now that our CEO Frits has taken the stage at the conference & startup competition where we were selected as a finalist, I can share our numbers for the ARC-AGI Challenge. Some data pipeline errors are still being cleaned up due to inconsistencies in the datasets, but here are the numbers:
 
Training set:
 
“ARC Tests Complete
total tests: 390
Success %: 91.2820518016815
Total Successes: 356
Total Failure: 44”

Only 10 tasks errored out in the data pipeline on this run of the training dataset before we moved on to the evaluation dataset due to time constraints. Counting all such pipeline errors as misses this would be 89%.

Evaluation set (1st run):

“ARC Tests Complete
total tests: 334
Success %: 88.9221549034119
Total Successes: 297
Total Failure: 103”

The evaluation set caused a lot more data pipeline errors, causing 66 to be dropped instead of 10. However, success rates on the remainder remained consistent, and counting all such data pipeline errors as misses would be a score of 74.25%. Cleaning of the pipeline is still in progress now, with a subsequent run in that process up to 76.75% accuracy on the ARC-AGI Evaluation set. 

The next nearest ARC-AGI Prize and Public leaderboard scores are 46% and 43% respectively. I’ve already had to correct 1 person who began to call these results “groundbreaking” because this ground was broken more than 5 years ago when the testing of our previous research system began and it aced the UCMRT IQ test immediately after being brought online in the summer of 2019. ARC-AGI was only first released in November of 2019.

What has changed in the past 5 years has been the research that we’ve conducted and infrastructure work, but even the most major component upgrade we’ve made for our 8th generation systems slated for commercial deployment is IP that we’ve had the entire time. It would have been otherworldly tedious to put ARC-AGI to our 7th generation system due to the infrastructure and framework limitations, and in years previous the incentive to do so was only marginal at best.

I have another post scheduled to go over these results in more detail, and compare them to the nearest other scores on both leaderboards (Prize and Public ARC-AGI) and verification of our results with the ARC-AGI Challenge team should take place following the conference.

