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
  <li class="essay-item"
      data-title="{{ post.data.title|default('untitled')|lower }}"
      data-datetime="{{ post.date | date('yyyy-MM-dd') }}">
    <span class="essay-row">
      <a class="essay-title" href="{{ post.url }}">{{ post.data.title }}</a>
      <time class="essay-date" datetime="{{ post.date | date('yyyy-MM-dd') }}">
        {{ post.date | date('MMMM d, yyyy') }}
      </time>
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
  
  const items = Array.from(list.children).filter(item => 
    item.classList.contains('essay-item')
  );
  
  // Clear the list
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  
  // Sort with date plus numeric fallback
  items.sort((a, b) => {
    // Compare date first
    const aTime = new Date(a.dataset.datetime).getTime();
    const bTime = new Date(b.dataset.datetime).getTime();
    
    if (aTime !== bTime) {
      // Ascending = smaller times first (older first), else bigger times first (newer first)
      return essaysAscending ? aTime - bTime : bTime - aTime;
    } else {
      // Same date? Fallback: parse leading number from the data-title
      const aTitle = a.dataset.title || '';
      const bTitle = b.dataset.title || '';
      const aMatch = aTitle.match(/^(\d+)/);
      const bMatch = bTitle.match(/^(\d+)/);
      const aNum = aMatch ? parseInt(aMatch[1]) : 0;
      const bNum = bMatch ? parseInt(bMatch[1]) : 0;
      
      // If ascending = old first, then smaller numbers first => aNum - bNum
      // Otherwise descending => bNum - aNum
      return essaysAscending ? aNum - bNum : bNum - aNum;
    }
  });

  // Re-inject
  items.forEach(item => list.appendChild(item));
}

function toggleSortEssays() {
  essaysAscending = !essaysAscending;

  const chevronDown = document.querySelector('.essays-sort-control .chevron-down');
  const chevronUp = document.querySelector('.essays-sort-control .chevron-up');
  
  chevronDown.classList.toggle('active', !essaysAscending);
  chevronUp.classList.toggle('active', essaysAscending);
  
  sortEssays();
}

// On page load, set initial direction (newest->oldest) and sort once
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.essays-sort-control .chevron-down').classList.add('active');
  // Perform the initial sort to ensure the displayed order matches server-side
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
