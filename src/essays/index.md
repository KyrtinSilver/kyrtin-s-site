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
      <!-- Chevron Down Icon -->
      <svg class="icon-down" viewBox="0 0 24 24">
        <path d="M6 9l6 6 6-6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <!-- Chevron Up Icon -->
      <svg class="icon-up" viewBox="0 0 24 24" style="visibility:hidden;">
        <path d="M18 15l-6-6-6 6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
  
  const iconDown = document.querySelector('.essays-sort-control .icon-down');
  const iconUp = document.querySelector('.essays-sort-control .icon-up');
  
  if (essaysAscending) {
    iconDown.style.visibility = 'hidden';
    iconUp.style.visibility = 'visible';
  } else {
    iconUp.style.visibility = 'hidden';
    iconDown.style.visibility = 'visible';
  }

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
  line-height:1;
}

.essays-sort-control {
  display: inline-flex;
  align-items: center;
  gap: 0.3em;
  cursor: pointer;
  white-space: nowrap;
  line-height:1;
  font-size:1em; 
  vertical-align: middle;
}

/* Container for icons to ensure no shift:
   position:relative; same width/height for stable layout
*/
.icon-container {
  display:inline-block;
  position:relative;
  width:1em;
  height:1em;
  vertical-align:middle;
}

/* Icons occupy the same space */
.icon-container svg {
  width:1em;
  height:1em;
  position:absolute;
  top:0; left:0;
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