---
title: "Research"
layout: "base.njk"
description: "Research papers, preprints, and publications"
---

<div class="page-header">
  <h1>Research</h1>
  <span class="research-sort-control" onclick="toggleSortResearch()">
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

{% if collections.research and collections.research|length > 0 %}
<ul class="papers-list">
  {% for post in collections.research %}
    <li class="paper-item" data-title="{{ post.data.title|default('untitled')|lower }}">
      <div class="paper-title-row">
        <a href="{{ post.data.externalUrl|default(post.url) }}" target="_blank" rel="noopener noreferrer">
          {{ post.data.title|default("Untitled") }}
        </a>
        <time datetime="{{ post.date | date('yyyy-MM-dd') }}">{{ post.date | date('MMMM d, yyyy') }}</time>
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
  {% endfor %}
</ul>
{% endif %}

<script>
let researchAscending = false;

function toggleSortResearch() {
  researchAscending = !researchAscending;
  
  const chevronDown = document.querySelector('.research-sort-control .chevron-down');
  const chevronUp = document.querySelector('.research-sort-control .chevron-up');
  
  chevronDown.classList.toggle('active', !researchAscending);
  chevronUp.classList.toggle('active', researchAscending);

  const list = document.querySelector('.papers-list');
  if (!list) return;
  
  const items = [...list.children].filter(item => 
    item.classList.contains('paper-item')
  );
  
  // Clear the list
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  
  // Sort by the datetime attribute directly
  items.sort((a, b) => {
    const aTime = new Date(a.querySelector('time').getAttribute('datetime')).getTime();
    const bTime = new Date(b.querySelector('time').getAttribute('datetime')).getTime();
    return researchAscending ? aTime - bTime : bTime - aTime;
  }).forEach(item => list.appendChild(item));
}

// Initialize sort on page load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.research-sort-control .chevron-down').classList.add('active');
  toggleSortResearch(); // Sort immediately so we start with a known order
});
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

.research-sort-control {
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

.research-sort-control .icon-container .chevron-down,
.research-sort-control .icon-container .chevron-up {
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
  margin:0;
  padding:0;
}

.paper-item .paper-title-row a {
  text-decoration: none;
  margin-right: 2em;
  flex: 1;
}

.tag {
  display: inline-flex;
  align-items: center;
  padding: 0 0.8em; 
  height: 1.8em;
  border-radius: 15px;
  font-size: 0.73em;
  border: 0.5px solid var(--text-tertiary);
  background: transparent;
  margin:0 0.6em 0 0;
  box-sizing:border-box;
}

.paper-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0em; 
  margin: 0;
  padding: 0; 
  line-height: 0; 
  width: 100%;
}

.paper-tags p, .paper-item p {
  margin: 0.6em 0;
  padding: 0;
}

.papers-list li, .paper-item li {
  margin: 0.5em 0;
  padding: 0.3em 0;
}

.paper-title-row time {
  font-size: 0.9em;
  white-space: nowrap;
}

.dark-mode .tag {
  background-color: rgba(102, 102, 102, 0.15);
}

@media screen and (max-width: 480px) {
  .papers-list .paper-tags {
    margin-bottom: 0.25em !important;
    max-width: calc(100vw - 2em);
    width: 100%;
  }
  
  .papers-list .paper-item {
    margin-bottom: 1em !important;
  }
  
  .paper-title-row {
    flex-wrap: wrap;
  }
}
</style>
