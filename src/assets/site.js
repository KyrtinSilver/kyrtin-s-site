    /* The site follows the system appearance. There is no switcher;
       this only keeps the favicon in step if the system changes. */
    (function() {
      var root = document.documentElement;
      var mq = window.matchMedia('(prefers-color-scheme: dark)');
      function applySystem() {
        root.classList.toggle('dark-mode', mq.matches);
        var icon = document.querySelector('link[rel="icon"]');
        if (icon) icon.href = mq.matches ? '/assets/favicon-dark.svg' : '/assets/favicon.svg';
      }
      mq.addEventListener('change', applySystem);
    })();

    document.getElementById('copyright').textContent = '\u00A9 ' + new Date().getFullYear() + ' Kyrtin Atreides';

    /* Order menus: one glyph, two orders. Selecting dispatches
       `orderchange` (detail.value: "newest" | "oldest") on the wrapper;
       each page's own script performs the reordering. */
    (function() {
      document.querySelectorAll('[data-order]').forEach(function(wrap) {
        var btn = wrap.querySelector('[data-order-btn]');
        var menu = wrap.querySelector('[data-order-menu]');
        if (!btn || !menu) return;
        btn.hidden = false;
        var options = Array.prototype.slice.call(menu.querySelectorAll('[role="menuitemradio"]'));

        function open() {
          menu.hidden = false;
          btn.setAttribute('aria-expanded', 'true');
          var checked = menu.querySelector('[aria-checked="true"]');
          (checked || options[0]).focus();
        }
        function close(restoreFocus) {
          menu.hidden = true;
          btn.setAttribute('aria-expanded', 'false');
          if (restoreFocus) btn.focus();
        }
        function choose(opt) {
          options.forEach(function(o) { o.setAttribute('aria-checked', String(o === opt)); });
          wrap.dispatchEvent(new CustomEvent('orderchange', {
            bubbles: true,
            detail: { value: opt.getAttribute('data-order-value') }
          }));
          close(true);
        }

        btn.addEventListener('click', function() {
          if (menu.hidden) open(); else close(false);
        });
        options.forEach(function(opt) {
          opt.addEventListener('click', function() { choose(opt); });
        });
        wrap.addEventListener('keydown', function(e) {
          if (e.key === 'Escape') { close(true); return; }
          if (menu.hidden) return;
          var i = options.indexOf(document.activeElement);
          if (e.key === 'ArrowDown' && i > -1) { e.preventDefault(); options[(i + 1) % options.length].focus(); }
          if (e.key === 'ArrowUp' && i > -1) { e.preventDefault(); options[(i - 1 + options.length) % options.length].focus(); }
        });
        document.addEventListener('click', function(e) {
          if (!menu.hidden && !wrap.contains(e.target)) close(false);
        });
      });
    })();

    (function() {
      var content = document.querySelector('article .content');
      if (!content) return;
      var links = content.querySelectorAll('a[href^="http"]');
      var minLength = 55;
      links.forEach(function(a) {
        var text = (a.textContent || '').trim();
        var href = (a.getAttribute('href') || '').trim();
        if (text.length < minLength) return;
        var isRawUrl = text === href || (text.indexOf('http') === 0 && text.length > minLength);
        if (isRawUrl) {
          a.setAttribute('title', href);
          a.classList.add('long-url');
        }
      });
    })();
