---
title: "Research"
layout: "base.njk"
description: "Research papers, preprints, and publications"
---

<div class="page-header">
  <h1>Research</h1>
</div>

{% if collections.research and collections.research|length > 0 %}
<ul class="papers-list">
  {% for post in collections.research %}
    <li class="paper-item" id="paper-{{ post.fileSlug }}">
      <a class="paper-title" href="{{ post.data.externalUrl|default(post.url) }}"{% if post.data.externalUrl %} target="_blank" rel="noopener noreferrer"{% endif %}>{{ post.data.title | default("Untitled") | smartText }}{% if post.data.externalUrl %}<span class="external-mark" aria-hidden="true">&#160;↗</span><span class="sr-only">(external, opens in a new tab)</span>{% endif %}</a>
      {% set venue = post.data.tags | venueOf %}
      {% set source = (post.data.externalUrl | sourceName) if post.data.externalUrl else "" %}
      {% set place = venue or (source if source and source != "ResearchGate" else "") %}
      <p class="paper-meta">{% if place %}{{ place }} · {% endif %}{% if post.data.version %}{{ post.data.version }} · {% endif %}<time datetime="{{ post.date | isoDateOnly }}">{{ post.date | yearOf }}</time></p>
    </li>
  {% endfor %}
</ul>
{% else %}
<p>No papers are listed yet.</p>
{% endif %}
