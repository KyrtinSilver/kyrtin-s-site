---
title: "Essays"
layout: "base.njk"
description: "Essays, updates, and thoughts"
---

<div class="page-header">
  <h1>Essays</h1>
  <span class="essays-sort-control" onclick="toggleSortEssays()">
    Sort
    <span class="icon-container">
      <svg class="chevron-down">
        <use href="#chevron-down" />
      </svg>
      <svg class="chevron-up">
        <use href="#chevron-up" />
      </svg>
    </span>
  </span>
</div>

<ul class="essay-list">
{% for post in collections.essays %}
  {% if post.url != "/essays/" and post.url != "/essays/index.html" %}
  <li class="essay-item" data-title="{{ post.data.title|default('untitled')|lower }}">
    <span class="essay-row">
      <a class="essay-title" href="{{ post.url }}">{{ post.data.title }}</a>
      <time class="essay-date" datetime="{{ post.date }}">{{ post.date | date }}</time>
    </span>
  </li>
  {% endif %}
{% endfor %}
</ul>

<script>
let essaysAscending = false;

function toggleSortEssays() {
  essaysAscending = !essaysAscending;
  
  const chevronDown = document.querySelector('.essays-sort-control .chevron-down');
  const chevronUp = document.querySelector('.essays-sort-control .chevron-up');
  
  chevronDown.classList.toggle('active', !essaysAscending);
  chevronUp.classList.toggle('active', essaysAscending);

  const list = document.querySelector('.essay-list');
  if (!list) return;
  const items = [...list.children];
  
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  
  items.sort((a, b) => {
    const aTitle = a.dataset.title || '';
    const bTitle = b.dataset.title || '';
    return essaysAscending ? aTitle.localeCompare(bTitle) : bTitle.localeCompare(aTitle);
  }).forEach(item => list.appendChild(item));
}

// Initialize the sort direction
document.querySelector('.essays-sort-control .chevron-down').classList.add('active');
</script>

<style>
.page-header {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  margin-bottom: 1em;
  line-height: 1;
}

.page-header h1 {
  margin: 0;
  line-height: 1;
}

.essays-sort-control {
  display: inline-flex;
  align-items: center;
  gap: 0.3em;
  cursor: pointer;
  white-space: nowrap;
  line-height: 1;
  font-size: 1em;
}

.icon-container {
  display: inline-flex;
  align-items: center;
  width: 24px;
  height: 24px;
}

.icon-container svg {
  width: 24px;
  height: 24px;
  fill: currentColor;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.icon-container .chevron-up {
  display: none;
}

.icon-container .chevron-up.active {
  display: block;
}

.icon-container .chevron-down {
  display: none;
}

.icon-container .chevron-down.active {
  display: block;
}

/* Essay list styling as before */
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
  line-height:1.2;
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