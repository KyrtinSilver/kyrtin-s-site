---
title: "135 - Technical Debt"
layout: essay.njk
date: "2024-01-22"
---

One of the least "sexy" but most important coding-related tasks is the maintenance of a codebase. Neglecting this critical task results in code that either stops working, throws increasing numbers of errors, or exposes those running it to a growing number of vulnerabilities.

During my recent experiment with RVC v2, I was reminded of just how many dead, poorly annotated, and error-prone bits of code there are floating around on the internet, and showing up at the top of search results. It is fair to say that dead code has already grown to outnumber the living.

This leaves us with the least Hollywood-worthy Zombie movie plotline, hoards of broken codebases, which may have been "alive" at some point, but certainly aren't now. Of course, this poses a growing hazard for any systems that use that code as training data.

Take this a step further, adding in today's "Generative AI", and a developer can potentially produce several times more code than they did before, but how much of that code do you think they'll actually maintain?

Now, consider that those who generate the most new code using such AI are also going to be the least likely to maintain said code. That means that the most frequent users of those tools are also at the top of any bad actor's list for potential targets, or the clients of those frequent users as the case may be.

"Generating" is only the first step, and not necessarily the most important. The internet isn't your Git-terbox, and nobody is going to scoop your old code, except perhaps to feed it to you via the next LLM.

"...and whomsoever shall be found, without the code for getting down, must stand and face the pull requests of hell, and rot inside of Powershell..."
