---
title: "382 - On Data Poisoning of Malevolent Platforms"
layout: essay.njk
date: "2025-10-19"
description: "Cutting the strings of manipulation."
---

On Data Poisoning these platforms, since someone asked me in messages:

For all methods described below, plan on inserting at least 3 sources of randomness into a given process, such as the probability of an action, short delays (imitating a pause to read), and long delays (imitating a bathroom break or meal).

Browser-based Scripts can be used to poison:

Keystroke/Keylogger data: These need only find a field to type in, start typing, but periodically roll for a random number to either 1) Delete all that was typed or 2) Refresh the page, thus wiping it another way.

Advertising (visit) data: Most links to advertising can be found running through predictable code blocks or 3rd party services for any given platform, which can be exploited. Run a script that 1) Rolls a random number, where above a given result it visits that link in a new tab, such as rolling 1-20 and visiting on a 19 or 20 roll. 2) Have uMatrix installed and running, set to block or severely cripple any new web pages by default. 3) Have the script close that web page after a random amount of time, divided into 3 categories of time, short (~3 seconds), medium (~20-30 seconds), and longer (~2 minutes) periods.

A Macro-capable Mouse can be used to poison:

Scrolling and mouse-tracking data: Scroll buttons may be found on both mice and some keyboards, and macro-enabled ones may be used as an extension of scripts, but with hardware-level mimicry to fool more advanced trackers. Many platforms have adopted a particular Dark Pattern (Malevolent Manipulation tactics) known as the “Infinite Scroll”, making it trivially easy to run this on such “newsfeeds”.

Note, as some of them aren’t optimized for memory handling (LinkedIn), make sure that a periodic browser refresh is paired with this scrolling activity. This can be quite simple, as anyone who has watched zombies scrolling these platforms endlessly should recognize, but it can also be combined with more advanced scripts and macros for controlling mouse movement.

A variety of 3rd party software built for such scripted control of a mouse is offered by developers who cater to gamers, who generally want them to perform some highly repetitive set of actions without being caught by simple “anti-cheat” pattern recognition systems. With regard to these platforms, the goal is generally to mimic the natural human mouse movements, such as slowly following text vertically as lines are being read, or sweeping motions following eyes that are searching for something. Systems that look for and track both of these cues may be poisoned.

Since many of these companies are dumb enough to now use some form of LLMs or “semantic analysis”, this can also be used against them. A target personality disposition and collection of interests may be fed into an LLM to generate a list of statistically likely tokens. Those may be used as a small library of inputs to the keystroke poisoning scripts with a 20-50% probability of occurrence.
