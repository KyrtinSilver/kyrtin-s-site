---
title: "Research"
layout: "base.njk"
description: "Academic research papers and publications"
---

<div class="page-header">
  <h1>Research</h1>
  <span class="research-sort-control" onclick="toggleSortResearch()">
    Sort
    <span class="icon-container">
      <!-- Chevron Icon -->
      <svg class="icon-down" viewBox="0 0 24 24">
        <path d="M6 9l6 6 6-6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <!-- Up Icon -->
      <svg class="icon-up" viewBox="0 0 24 24" style="visibility:hidden;">
        <path d="M18 15l-6-6-6 6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
        <time datetime="{{ post.date }}">{{ post.date | date }}</time>
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
  
  const iconDown = document.querySelector('.research-sort-control .icon-down');
  const iconUp = document.querySelector('.research-sort-control .icon-up');
  
  if (researchAscending) {
    iconDown.style.visibility = 'hidden';
    iconUp.style.visibility = 'visible';
  } else {
    iconUp.style.visibility = 'hidden';
    iconDown.style.visibility = 'visible';
  }

  const list = document.querySelector('.papers-list');
  if (!list) return;
  const items = [...list.children];
  
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  
  items.sort((a, b) => {
    const aTitle = a.dataset.title || '';
    const bTitle = b.dataset.title || '';
    return researchAscending ? aTitle.localeCompare(bTitle) : bTitle.localeCompare(aTitle);
  }).forEach(item => list.appendChild(item));
}
</script>

<style>
.page-header {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  margin-bottom: 1em;
  line-height:1;
}

.page-header h1 {
  margin:0;
  line-height:1;
}

.research-sort-control {
  display: inline-flex;
  align-items: center;
  gap: 0.3em;
  cursor: pointer;
  white-space: nowrap;
  line-height:1;
  font-size:1em;
  vertical-align: middle;
}

.icon-container {
  display:inline-block;
  position:relative;
  width:1em;
  height:1em;
  vertical-align:middle;
}

.icon-container svg {
  width:1em;
  height:1em;
  position:absolute;
  top:0; left:0;
}

.papers-list {
  list-style: none;
  padding: 0;
  margin: 0; /* no extra margin */
  /* No max-width centering from base, so it starts flush left relative to body padding */
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
  color: #333;
  margin-right: 2em;
  flex: 1;
}

.paper-title-row time,
.tag {
  color: #595959;
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

.tag {
  display: inline-flex;
  align-items: center;
  padding: 0 0.8em; 
  height: 1.8em;
  border-radius: 15px;
  font-size: 0.725em;
  border: 0.5px solid #757575;
  background: transparent;
  margin:0 0.6em 0 0; /* no extra margin */
  box-sizing:border-box;
}

.paper-title-row time {
  font-size: 0.85em;
  white-space: nowrap;
  flex-shrink: 0;
  margin:0; padding:0;
}

.dark-mode .papers-list .paper-item .paper-title-row a {
  color: #e6e6e6 !important;
}

.dark-mode .paper-title-row time {
  color: #787878 !important;
}

.dark-mode .tag {
  color: #787878 !important;
  border-color: #787878 !important;
  background-color: rgba(102, 102, 102, 0.15) !important;
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