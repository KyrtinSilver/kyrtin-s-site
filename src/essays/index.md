---
title: "Essays"
layout: "base.njk"
description: "Collection of essays on various topics"
---

# Essays

<ul class="essay-list">
{% for post in collections.essays | sort(attribute="date") | reverse %}
{%- if post.url != "/essays/" -%}
  <li>
    <span class="essay-row">
      <a class="essay-title" href="{{ post.url }}">{{ post.data.title }}</a>
      <time class="essay-date" datetime="{{ post.date | date }}">{{ post.date | date }}</time>
    </span>
  </li>
{%- endif -%}
{% endfor %}
</ul>

<style>
.essay-list {
  list-style: disc;
  padding-left: 1.5em;
}

.essay-list li {
  margin-bottom: 0.5em;
}

.essay-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.essay-title {
  padding-right: 2em;
}

.essay-date {
  color: #666666;
  font-size: 0.9em;
  white-space: nowrap;
}

@media (prefers-color-scheme: dark) {
  .essay-date {
    color: #999;
  }
}
</style>