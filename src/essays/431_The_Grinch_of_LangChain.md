---
title: "431 - The Grinch of LangChain"
layout: essay.njk
date: "2025-12-27"
description: "An Xmas themed Cybersecurity vulnerability in the LangChain Core"
---

Easily the best part of Xmas was the appearance of “LangGrinch”, a severe Cybersecurity vulnerability within the core of LangChain, with a blast radius spanning the ~847 million downloads, 98 million of them within the past month. Yes, the Grinch knows how naughty the people using LangChain have been, as their data was never secure in the first place: https://cyata.ai/blog/langgrinch-langchain-core-cve-2025-68664/

“Your application is potentially exposed if it uses vulnerable langchain-core versions.”

Let that be a reminder for the start of 2026, that the people in your org integrating such “agents” are also responsible for exfiltrating all of your data. Cybercrime remains the third largest market in the world, and they’re certainly doing their part to keep it that way.

This is of course by no means an isolated occurrence, as vulnerabilities from LLM-based systems and their integrations run like a fire hose, but who could resist sharing an Xmas themed vulnerability? Not I, evidently.

For all of the MCP users (or those hitting them), refer to the “MCPLIB Attack Framework” for a laundry list of ways to break, exfiltrate, and persistently compromise those systems. If you absolutely have to deploy something vulnerable (like if you have a Dilbert-type boss), at least apply the “Principle of Least Capability”, where you apply the most narrowly capable and structurally confined system that can do the job. See **[Brian Chamberlain](https://www.linkedin.com/feed/#)** of CrowdStrike’s presentations for more on this.

Progress in AI research has ground to a halt these past 3 years as well as reversing in some cases, where Anthropomorphism replaced scientific methods in the literature, becoming normalized malpractice. Meanwhile, Cybercrime has boomed, and the tech bubble inflated, so here is to hoping that 2026 sees a few long overdue changes deployed.
