---
title: "424 - Understanding LLM-based AI in 12 seconds"
layout: essay.njk
date: "2025-12-16"
description: "The constant and cumulative distortions of LLM-based \"agents\"."
---

This 12-second video can probably change your perspective on AI, as it makes the point visually, concisely, and quite strikingly for what LLM-based AI actually does. Many people are aware of problems with the technology in a very abstract and fuzzy sense, but this video makes it a bit easier to grasp. Watch closely, and you’ll see what I mean.

You start out with a so-called “flagship” model from one of the most heavily funded companies, handing it a meme and instructing it to reproduce that exact same image, not changing a thing. For any intelligent system this task would be utterly trivial, a small child could easily do it. As the video quickly illustrates, even that utterly trivial task rapidly devolves in ways that would be deeply psychotic for a human.

Not only does the video warp quickly and in fairly extreme ways, it continues to warp until it has changed all 3 people pictured in it into the same severely distorted person, totally unrelated to the original image.

That trivial task is also an example that mirrors the simplest implementation of the same underlying mechanisms shared by virtually all “agents” that people are being marketed today. Any time when an “agent” takes multiple steps, such as “thinking” modes from “reasoning” models, this same basic process is what happens under the hood (often a version of “Chain-of-Thought”, CoT).

This process of constant distortions being introduced at every step is more easily masked in systems where the goal isn’t to maintain a data point as it originally existed, particularly when various forms of structure bias that system in one direction or another. However, the distortion is still constant, still warping everything it touches along an arbitrary, unchecked, and usually unmonitored number of dimensions.

Every time that you integrate an “agent” into your business processes, this is what you’re getting under the hood. The more steps such systems are allowed to take, the more severe the distortion you can expect from them, as it is cumulative.

Each different brand of “agent” also introduces different kinds of distortion, and tool-using “agents” in things like MCP will gain different kinds of distortion depending on the tools that they call upon at any given step. This effectively means that no amount of compute or human labor could ever mitigate the distortions of tool-using “agents”, as that problems slams into a major combinatorial explosion, with the variety of distortions in that combination exceeding any margin that could hope for mitigation.

This video also adeptly illustrates “AI-brainrot”, as it takes place within the brains of anyone spending substantial amounts of daily time talking to such chatbots. These highly sycophantic systems of mirroring feed back a constantly warping image of life events, tailored to the manipulation of that individual. The resulting “AI Psychosis” of this process is entirely unsurprising.

  
\*\*An update (17-12-25) on the rate of distortions, following feedback on this post in comments (on LinkedIn):  
  
The original source (earlier this year, apparently) used a slightly different prompt to accelerate the distortion process. This still demonstrates the same principle in a different way, but explains why the model hit full-blown convergence to statistical mush within 200 steps, rather than 2,000 or 20,000. Updated source:

[https://x.com/genekogan/status/1916167820276371666?s=46](https://x.com/genekogan/status/1916167820276371666?s=46)  

Credit (falsely) claimed by: https://fixvx.com/ChatgptLunatics/status/2000314982194622894

  
Thanks to **[Iliya Kovachki](https://www.linkedin.com/in/iliya-kovachki-29b4825a/)** and **[Matt Abrams](https://www.linkedin.com/in/mattabrams/)** for linking the original source (above).  
  
That said, other strong examples of even single-step distortion are being reported, such as **[Peter Corless](https://www.linkedin.com/in/petercorless/)**‘s test of Grok following this post. His example explicitly used “Recreate this image exactly” (**[https://www.linkedin.com/posts/petercorless\_reproduce-this-image-exactly-check-out-activity-7406802318320553984-NWtm?utm\_source=share&utm\_medium=member\_desktop&rcm=ACoAADawx60BAW7zCI1eZcZKSq6icSOUuDWuAls](https://www.linkedin.com/posts/petercorless_reproduce-this-image-exactly-check-out-activity-7406802318320553984-NWtm?utm_source=share&utm_medium=member_desktop&rcm=ACoAADawx60BAW7zCI1eZcZKSq6icSOUuDWuAls)**). Other examples are also being reported, pending links to them.
