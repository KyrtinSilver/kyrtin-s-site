---
title: "Research"
layout: "base.njk"
description: "Academic research papers and publications"
papers:
  - title: "Cognitive biases in natural language: Automatically detecting, differentiating, and measuring bias in text"
    url: "https://www.researchgate.net/publication/385395195_Cognitive_biases_in_natural_language_Automatically_detecting_differentiating_and_measuring_bias_in_text"
    date: "2024-03-11"
  - title: "The Case for Human-like Scalable Intelligence in the Medical Field"
    url: "https://www.researchgate.net/publication/378213123_The_Case_for_Human-like_Scalable_Intelligence_in_the_Medical_Field"
    date: "2023-01-31"
---

# Research

<ul class="papers-list">
{% for paper in papers | sort(true, false, "date") %}
  <li class="paper-item">
    <a href="{{ paper.url }}">{{ paper.title }}</a>
    <time datetime="{{ paper.date | date }}">{{ paper.date | date }}</time>
  </li>
{% endfor %}
</ul>

<style>
.papers-list {
  list-style: none;
  padding: 0;
}

.paper-item {
  margin-bottom: 2em;
}

.paper-item time {
  display: block;
  color: #666666;
  font-size: 0.9em;
  margin-top: 0.5em;
}

@media (prefers-color-scheme: dark) {
  .paper-item time {
    color: #999;
  }
}
</style>