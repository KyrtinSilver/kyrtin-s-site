---
title: "Home"
layout: "base.njk"
description: "Building scalable intelligence"
---

<div class="page-header">
  <h1>Kyrtin Atreides</h1>
  <span></span>
</div>

<p>Building scalable intelligence.</p>
<p class="social-links">
  <a href="https://www.researchgate.net/profile/Kyrtin-Atreides" target="_blank" rel="noopener noreferrer">ResearchGate</a>
  <svg class="circle-icon">
    <use href="#circle" />
  </svg>
  <a href="https://scholar.google.com/citations?user=1njzkrQAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer">Scholar</a>
  <svg class="circle-icon">
    <use href="#circle" />
  </svg>
  <a href="https://www.linkedin.com/in/kyrtin-atreides/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  <svg class="circle-icon">
    <use href="#circle" />
  </svg>
  <a href="https://kyrtin.substack.com/" target="_blank" rel="noopener noreferrer">Substack</a>
</p>

<style>
.social-links {
  color: var(--text-secondary);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5em;
}

.social-links a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: var(--text-primary);
}

.social-links .circle-icon {
  width: 4px;
  height: 4px;
  fill: currentColor;
  stroke: none;
}
</style>