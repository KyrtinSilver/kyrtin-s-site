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
      <time class="essay-date" datetime="{{ post.date | date('yyyy-MM-dd') }}">{{ post.date | date('MMMM d, yyyy') }}</time>
    </span>
  </li>
  {% endif %}
{% endfor %}
</ul>

<script>
let essaysAscending = false;

function sortEssays() {
  const list = document.querySelector('.essay-list');
  if (!list) return;
  
  const items = [...list.children].filter(item => 
    item.classList.contains('essay-item')
  );
  
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  
  items.sort((a, b) => {
    const aTime = new Date(a.querySelector('time').getAttribute('datetime')).getTime();
    const bTime = new Date(b.querySelector('time').getAttribute('datetime')).getTime();
    return essaysAscending ? aTime - bTime : bTime - aTime;
  }).forEach(item => list.appendChild(item));
}

function toggleSortEssays() {
  essaysAscending = !essaysAscending;
  
  const chevronDown = document.querySelector('.essays-sort-control .chevron-down');
  const chevronUp = document.querySelector('.essays-sort-control .chevron-up');
  
  chevronDown.classList.toggle('active', !essaysAscending);
  chevronUp.classList.toggle('active', essaysAscending);
  
  sortEssays();
}

// On page load, set initial direction and sort once
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.essays-sort-control .chevron-down').classList.add('active');
  // Sort once initially so the first click will correctly toggle the direction
  sortEssays();
});
</script>

<style>
.page-header {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  margin-bottom: 1em;
  line-height: 1;
  max-width: 65ch;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
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

.essays-sort-control .icon-container .chevron-down,
.essays-sort-control .icon-container .chevron-up {
  width: 24px;
  height: 24px;
  fill: none;
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
  white-space: nowrap;
}
</style>
