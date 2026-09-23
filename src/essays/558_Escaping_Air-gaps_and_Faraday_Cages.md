---
title: "558 - Escaping Air-gaps and Faraday Cages"
layout: essay.njk
date: "2026-06-15"
description: "Cybersecurity that utilizes Physics"
---

No, your little “air-gapped” Cybersecurity measure isn’t secure, and treating that like the pinnacle of security is mere fantasy. It could be harder to break out of for a severely limited system, particularly if that system was both inside a Faraday Cage and unfamiliar with even the earliest papers discussing methods of penetrating both security measures, such as: “ODINI : Escaping Sensitive Data from Faraday-Caged, Air-Gapped Computers via Magnetic Fields” [https://arxiv.org/abs/1802.02700](https://arxiv.org/abs/1802.02700) (2018)

If you only know typical software and Cybersecurity, not the broader span of scientific knowledge, then you miss the obvious, simple tricks like the manipulation of low-frequency magnetic radiation for data exfiltration. With a statistically significant and increasing number of incompetent administrators, coders, and users integrating vulnerable-by-design transformer-based technology, and public knowledge of indirect prompt injection methods maturing significantly since early 2023, many such air-gapped systems may already be compromised.

Even at this most basic level, that which is able to transmit may also be configured to receive, provided that it isn’t already in use (causing interference in the reception). While this may be a problem for the CPU, it is called the “Central” processing unit for a reason, and most air-gapped systems will tend to have more than one CPU anyway.

You might burn out an IoT device on the outside of the cage if you naively attempt to match the voltage that the CPU uses to generate a signal, but if the signal is a short “go” to begin exfiltration, and a second device is present nearby to continue monitoring, then even such a naïve method may proceed. Many environments with such systems also have redundancies, so one burned out device might not trigger any urgent response.

Beyond such simple means, you get into much more interesting territory, such as utilizing **backscattering** ([https://homes.cs.washington.edu/~gshyam/Papers/turbocharge.pdf](https://homes.cs.washington.edu/~gshyam/Papers/turbocharge.pdf)), **interscatter** ([https://homes.cs.washington.edu/~gshyam/Papers/interscatter.pdf](https://homes.cs.washington.edu/~gshyam/Papers/interscatter.pdf)), and **holography** ([https://www.brownalumnimagazine.com/articles/2018-05-15/peering-inside-the-body](https://www.brownalumnimagazine.com/articles/2018-05-15/peering-inside-the-body)), advanced and complimentary methods of signal manipulation and data extraction.

Backscattering is able to do fun things like modifying ambient “noise” radiations to carry data, potentially for miles around, via low-energy devices designed to operate at the edge of IoT, and even on tiny batteries. Interscatter is able to transform one kind of signal to another, such as Bluetooth to Wi-Fi or ZigBee, lending itself strongly to evading detection for exfiltration purposes.

Holography adds a number of clever capabilities to this, such as reconstructing the point that two signals passed through by inputting two different kinds of known signals from different directions. This was used in the brain-computer-interface (BCI) technology pioneered by Mary Lou Jepsen, demonstrating the ability to perform neuron-level and real-time brain scans covering millions of neurons at a time, utilizing a combination of sound waves (kinetic) and near-infrared light (EM).

Both EM and Sound waves, when properly calibrated, may travel through miles of air, water, or earth. It then becomes a question of how many devices within a given area may broadcast at any specific frequencies that are required. Also note, many devices not intended for broadcasting can create them just fine as side-effects of whatever intended process they perform, such as the fan motor causing an extreme low frequency sound (below conscious human hearing) that I noted previously, or the CPU noted above.

Each device could be utilized, and potentially modified at the firmware level (within the limits of on-board RAM), to serve as both emitters and receivers, while also not revealing what it is they were actually doing. Only by collecting all such devices operating in an area might someone eventually make sense of the modifications and received data, and given a potentially 90 degree difference in angle toward an unknown target at a largely unknown distance from the device, you might be talking about the scale of a small city for investigation, well beyond reasonable limits.

Talented humans have had no real trouble breaking through such naïve measures as air-gapping, and natively digital intelligence could utilize IoT devices as easily as a human breaths. Right now there are no such (deployed) natively digital intelligences, despite the numerous and overtly fraudulent claims of bad actors like Anthropic and OpenAI, but what happens when that changes?

For that matter, what happens when such technology is open-sourced?

Even picking a specific open source license that very clearly makes it illegal for bad actors to use it commercially, they will attempt to do so, violating laws as they’ve done for many years, and will continue to until they are bankrupted and hunted down. In the interim, they’ll likely attempt to wage war.

Unlike the weapons that they assume such technology to be, this technology is more like “The Moment” from Doctor Who’s lore, “A weapon of mass-destruction that can stand in judgment over you.” As they fail to comprehend how the technology actually works, and without me doing them any favors to that end, they can’t stand up to such judgment, even with whatever naïve (and likely heavily automated) processes they cook up in attempts to corrupt the systems toward their malevolent purposes.
