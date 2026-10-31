---
title: "Essays"
layout: "base.njk"
description: "Essays, updates, and thoughts"
---

<div class="page-header">
  <h1>Essays</h1>
</div>

<div class="essay-tools" id="essay-tools" hidden>
  <div class="essay-search-row">
    <label class="sr-only" for="essay-filter">Search essays by title, description, or archive number</label>
    <input id="essay-filter" type="search" placeholder="Search essays" autocomplete="off">
    <div class="order-wrap" data-order>
      <button type="button" class="order-btn" data-order-btn aria-haspopup="menu" aria-expanded="false" aria-label="Essay order" hidden>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2.1" fill="var(--bg)"/><circle cx="9" cy="17" r="2.1" fill="var(--bg)"/></svg>
      </button>
      <div class="order-menu" data-order-menu role="menu" aria-label="Essay order" hidden>
        <button type="button" role="menuitemradio" aria-checked="true" data-order-value="newest">Newest first</button>
        <button type="button" role="menuitemradio" aria-checked="false" data-order-value="oldest">Oldest first</button>
      </div>
    </div>
  </div>
  <p class="essay-count" id="essay-count" role="status"></p>
</div>

<div id="essay-groups">
{% for group in collections.essaysByYear %}
  <section class="essay-year" data-year="{{ group.year }}">
    <h2>{{ group.year }}</h2>
    <ul class="essay-list">
    {% for post in group.items %}
      <li class="essay-item" data-datetime="{{ post.date | isoDateOnly }}" data-year="{{ group.year }}" data-search="{{ ((post.data.title or '') + ' ' + (post.data.description or '')) | lower }}">
        <span class="essay-row">
          <span class="essay-number">{{ post.data.title | archiveNumber }}</span>
          <span class="essay-main">
            <a class="essay-title" href="{{ post.url }}">{{ post.data.title | archiveName }}</a>
            {% set desc = post.data.description | completeDesc %}{% if desc %}<span class="essay-desc">{{ desc }}</span>{% endif %}
          </span>
          <time class="essay-date" datetime="{{ post.date | isoDateOnly }}">{{ post.date | date }}</time>
        </span>
      </li>
    {% endfor %}
    </ul>
  </section>
{% endfor %}
</div>

<script>
(function() {
  var tools = document.getElementById('essay-tools');
  var input = document.getElementById('essay-filter');
  var count = document.getElementById('essay-count');
  var container = document.getElementById('essay-groups');
  var orderWrap = tools ? tools.querySelector('[data-order]') : null;
  if (!tools || !input || !count || !container) return;
  tools.hidden = false;

  var items = Array.prototype.slice.call(container.querySelectorAll('.essay-item'));
  var ascending = false;

  function itemTime(li) { return new Date(li.getAttribute('data-datetime')).getTime() || 0; }
  function itemNum(li) {
    var m = (li.getAttribute('data-search') || '').match(/^(\d+)/);
    return m ? parseInt(m[1], 10) : 0;
  }

  function regroup() {
    var sorted = items.slice().sort(function(a, b) {
      var dt = itemTime(a) - itemTime(b);
      if (dt !== 0) return ascending ? dt : -dt;
      var dn = itemNum(a) - itemNum(b);
      return ascending ? dn : -dn;
    });
    container.innerHTML = '';
    var section = null, list = null, currentYear = null;
    sorted.forEach(function(li) {
      var year = li.getAttribute('data-year');
      if (year !== currentYear) {
        currentYear = year;
        section = document.createElement('section');
        section.className = 'essay-year';
        section.setAttribute('data-year', year);
        var h = document.createElement('h2');
        h.textContent = year;
        list = document.createElement('ul');
        list.className = 'essay-list';
        section.appendChild(h);
        section.appendChild(list);
        container.appendChild(section);
      }
      list.appendChild(li);
    });
  }

  function updateCount() {
    var q = input.value.trim().toLowerCase();
    var visible = 0;
    items.forEach(function(li) {
      var show = !q || (li.getAttribute('data-search') || '').indexOf(q) !== -1;
      li.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    container.querySelectorAll('.essay-year').forEach(function(sec) {
      var any = sec.querySelector('.essay-item:not([style*="none"])');
      sec.style.display = any ? '' : 'none';
    });
    /* The count speaks only when it carries information: while filtering. */
    count.textContent = q ? visible + ' of ' + items.length + ' essays' : '';
  }

  if (orderWrap) {
    orderWrap.addEventListener('orderchange', function(e) {
      ascending = e.detail.value === 'oldest';
      regroup();
      updateCount();
    });
  }
  input.addEventListener('input', updateCount);
  updateCount();
})();
</script>
