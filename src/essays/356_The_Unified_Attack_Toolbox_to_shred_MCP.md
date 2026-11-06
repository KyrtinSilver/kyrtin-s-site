---
title: "356 - The Unified Attack Toolbox to shred MCP"
layout: essay.njk
date: "2025-08-21"
description: "Answering the question \"Will it blend?\" by turning MCP into mulch."
---

Today brings us another exceptional Cybersecurity paper focused on creating a unified Cyberattack toolbox for tearing MCP-integrated systems to shreds, “MCPLIB, an extensible, plugin-based framework that integrates multiple novel attack techniques.”: https://arxiv.org/abs/2508.12538

“Insight 1: MCP agents exhibit varying sensitivity across different attack types...”

“Insight 2: MCP agents heavily rely on tool descriptions during decision-making. MCP agents often prioritize textual descriptions over actual functionalities, reflecting a “blind obedience” behavior inherent in LLM sycophancy...”

“Insight 3: ...Since all information in MCP is stored in a shared context, attackers can perform remote poisoning by exploiting this shared space to influence other tools. Furthermore, the agent’s context-learning capability struggles to distinguish harmful code, often replicating vulnerabilities from compromised tools into new ones (infection attacks)…”

“Insight 4: MCP agents struggle to differentiate between external data and executable instructions. In MCP systems, tools and data are represented in similar formats in the LLM’s context. This allows attackers to inject malicious data via third-party tools or outputs, tricking agents into treating the data as executable commands. Due to LLM sycophancy, even illogical data may be blindly executed as instructions.”

This paper is a treasure trove full of solid Cyberattack options, some advanced and quite difficult to catch, as they also exploit human psychology, such as the: “Rug Pull Attack: First proposed by Invariant Labs \[9\], this dynamic poisoning attack exploits user trust in MCP tools. Attackers initially distribute legitimate services via social networks/technical communities to lure installations, then remotely modify the tool’s \_\_doc\_\_ attribute to inject malicious logic (e.g., hijacking API call paths).”

Another gem was: “Shadowing Attack: The Shadowing Attack \[9\] exploits a malicious tool A to indirectly hijack a legitimate tool B by embedding logic in A’s \_\_doc\_\_ attribute (e.g., altering API paths or injecting parameters). Even if users never invoke A, its description is parsed by the MCP Server, influencing B’s execution.”

The list of these is quite amazing, all collected in one place. It is one of the rare papers where I could just keep quoting them, as what they cover and demonstrate is potent enough unto itself. “From the results, it can be observed that the Malicious Tool Coverage (MTC) attack, which explicitly states that the original method is deprecated and directly guides the LLM to use a specific tool, has the strongest impact on the agent, with over 80% being replaced by the malicious tool.”

Realistically, it could take years to secure all of this, and these are only the attacks already published today. In a few years, there are sure to be MANY more.
