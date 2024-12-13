---
title: "Research"
layout: "base.njk"
description: "Academic research papers and publications"
---

# Research

<ul class="papers-list">
{% for post in collections.research | sort(attribute="date") | reverse %}
{%- if post.url != "/research/" -%}
  <li class="paper-item">
    <div class="paper-title-row">
      <a href="{{ post.data.externalUrl }}" target="_blank" rel="noopener noreferrer">
        {{ post.data.title }}
      </a>
      <time datetime="{{ post.date | date }}">{{ post.date | date }}</time>
    </div>
    {% if post.data.tags %}
    <div class="paper-tags">
      {% for tag in post.data.tags %}
        {% if tag != "research" %}
        <span class="tag">{{ tag }}</span>
        {% endif %}
      {% endfor %}
    </div>
    {% endif %}
  </li>
{%- endif -%}
{% endfor %}
</ul>

<style>
.papers-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.paper-item {
  margin-bottom: 2em;
}

.paper-title-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.3em;
  line-height: 1.2;
}

.paper-item .paper-title-row a {
  text-decoration: none;
  color: #333;
  margin-right: 2em;
  flex: 1;
}

.paper-title-row time,
.tag {
  color: var(--text-tertiary, #666666);
}

.paper-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3em;
  row-gap: 0.3em;
  margin-left: -0.8em;
  margin-bottom: 0.5em;
}

.tag {
  display: inline-flex;
  align-items: center;
  padding: 0 0.8em;
  height: 1.8em;
  border-radius: 15px;
  font-size: 0.85em;
  border: 0.5px solid var(--text-tertiary, #666666);
  background: transparent;
}

.paper-title-row time {
  font-size: 0.85em;
  white-space: nowrap;
  flex-shrink: 0;
}

.dark-mode .papers-list .paper-item .paper-title-row a {
  color: #e5e5e5 !important;
}

.dark-mode .paper-title-row time,
.dark-mode .tag {
  color: #666666 !important;
  border-color: #666666 !important;
}

@media screen and (max-width: 480px) {
  .papers-list .paper-item {
    margin-bottom: 1em !important;
  }
  
  .papers-list .paper-tags {
    margin-bottom: 0.25em !important;
  }
}
</style>