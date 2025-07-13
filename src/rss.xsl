<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="utf-8" indent="yes"/>
  
  <xsl:template match="/">
    <html>
      <head>
        <title><xsl:value-of select="rss/channel/title"/></title>
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500&amp;display=swap" rel="stylesheet"/>
        <style>
          :root {
            /* Base colors */
            --bg: #FFFFFF;
            --border: #e5e2dd;
            
            /* Text hierarchy */
            --text-primary: #1d1d1f;    /* Main content, headings */
            --text-secondary: #515154;  /* Sub-headings, important supporting text */
          }

          .dark-mode {
            /* Base colors */
            --bg: #000000;
            --border: #252321;
            
            /* Text hierarchy */
            --text-primary: #f5f5f7;    /* Main content, headings */
            --text-secondary: #86868b;  /* Sub-headings, important supporting text */
          }

          body {
            font-family: "Geist", system-ui, -apple-system, sans-serif;
            font-display: swap;
            font-optical-sizing: auto;
            font-weight: 400;
            font-style: normal;
            margin: 1rem auto;
            line-height: 1.6;
            padding: 0 1rem; 
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            background-color: var(--bg);
            color: var(--text-primary);
          }

          main {
            flex: 1;
            margin-top: 2em;
          }

          nav {
            margin-bottom: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .nav-links {
            display: flex;
            gap: 1rem;
          }

          .nav-links a {
            color: var(--text-secondary);
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .nav-links a:hover {
            color: var(--text-primary);
          }

          .theme-toggle {
            background: none;
            border: none;
            color: var(--text-secondary);
            cursor: pointer;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: color 0.3s ease;
          }

          .theme-toggle:hover {
            color: var(--text-primary);
          }

          .theme-toggle svg {
            width: 24px;
            height: 24px;
          }

          .theme-toggle .sun-icon,
          .theme-toggle .moon-icon {
            display: none;
          }

          .theme-toggle .sun-icon.active,
          .theme-toggle .moon-icon.active {
            display: block;
          }

          .theme-toggle .sun-icon use {
            fill: currentColor;
            stroke: currentColor;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
          }

          .theme-toggle .moon-icon use {
            fill: currentColor;
            stroke: currentColor;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
          }

          @media (min-width: 650px) {
            body {
              max-width: 650px;
              margin: 2rem auto;
            }
          }
          
          .header {
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--border);
          }
          
          .header h1 {
            margin: 0;
            font-size: 2rem;
            font-weight: 500;
            color: var(--text-primary);
          }
          
          .header p {
            margin: 0.5rem 0 0 0;
            color: var(--text-secondary);
            font-size: 1rem;
          }
          
          .rss-info {
            margin-bottom: 2rem;
            padding: 1rem 0;
            border-bottom: 1px solid var(--border);
          }
          
          .rss-info h2 {
            margin: 0 0 0.5rem 0;
            font-size: 1.25rem;
            font-weight: 500;
            color: var(--text-primary);
          }
          
          .rss-info p {
            margin: 0.5rem 0;
            color: var(--text-secondary);
          }
          
          .rss-url {
            font-family: "SF Mono", "Monaco", "Inconsolata", "Fira Code", monospace;
            color: var(--text-secondary);
            font-size: 0.9rem;
            word-break: break-all;
          }
          
          .essays-count {
            margin-bottom: 2rem;
            color: var(--text-secondary);
            font-size: 0.9rem;
          }
          
          .essay {
            margin-bottom: 2rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid var(--border);
          }
          
          .essay:last-child {
            border-bottom: none;
          }
          
          .essay h3 {
            margin: 0 0 0.5rem 0;
            font-size: 1.25rem;
            font-weight: 500;
            color: var(--text-primary);
          }
          
          .essay h3 a {
            color: inherit;
            text-decoration: none;
          }
          
          .essay h3 a:hover {
            color: var(--text-primary);
          }
          
          .essay-date {
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin-bottom: 1rem;
          }
          
          .essay-content {
            color: var(--text-primary);
            line-height: 1.6;
            margin-bottom: 1rem;
          }
          
          .essay-content p {
            margin-bottom: 1rem;
          }
          
          .essay-content a {
            color: var(--text-secondary);
            text-decoration: none;
            transition: color 0.3s ease;
          }
          
          .essay-content a:hover {
            color: var(--text-primary);
          }
          
          .read-more {
            margin-top: 1rem;
          }
          
          .read-more a {
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.3s ease;
          }
          
          .read-more a:hover {
            color: var(--text-primary);
          }

          footer {
            margin-top: 4rem;
            padding-top: 2rem;
            border-top: 1px solid var(--border);
            font-size: 0.9em;
            color: var(--text-secondary);
            text-align: center;
          }
        </style>
      </head>
      <body>
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
          <symbol id="sun" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42"/>
          </symbol>
          <symbol id="moon" viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </symbol>
        </svg>

        <nav>
          <div class="nav-links">
            <a href="/">Home</a>
            <a href="/essays/">Essays</a>
            <a href="/research/">Research</a>
          </div>
          <button class="theme-toggle" aria-label="Toggle dark mode">
            <svg class="sun-icon">
              <use href="#sun" />
            </svg>
            <svg class="moon-icon">
              <use href="#moon" />
            </svg>
          </button>
        </nav>

        <main>
          <div class="header">
            <h1><xsl:value-of select="rss/channel/title"/></h1>
            <p><xsl:value-of select="rss/channel/description"/></p>
          </div>
          
          <div class="rss-info">
            <h2>RSS Feed</h2>
            <p>Subscribe using any RSS reader app or service.</p>
            <p><strong>Feed URL:</strong></p>
            <div class="rss-url">https://kyrtinatreides.com/rss.xml</div>
          </div>
          
          <div class="essays-count">
            <xsl:value-of select="count(rss/channel/item)"/> essays
          </div>
          
          <xsl:for-each select="rss/channel/item">
            <div class="essay">
              <h3>
                <a href="{link}">
                  <xsl:value-of select="title"/>
                </a>
              </h3>
              <div class="essay-date">
                <xsl:value-of select="pubDate"/>
              </div>
              <div class="essay-content">
                <xsl:value-of select="description" disable-output-escaping="yes"/>
              </div>
              <div class="read-more">
                <a href="{link}">Read more</a>
              </div>
            </div>
          </xsl:for-each>
        </main>

        <footer>
          <p id="copyright"></p>
        </footer>

        <script>
          const toggleBtn = document.querySelector('.theme-toggle');
          const sunIcon = toggleBtn.querySelector('.sun-icon');
          const moonIcon = toggleBtn.querySelector('.moon-icon');
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

          function setDarkMode(isDark) {
            document.documentElement.classList.toggle('dark-mode', isDark);
            sunIcon.classList.toggle('active', !isDark);
            moonIcon.classList.toggle('active', isDark);
          }

          // Initialize theme
          const storedTheme = localStorage.getItem('theme');
          setDarkMode(storedTheme === 'dark' || (!storedTheme &amp;&amp; prefersDark.matches));

          // Listen for changes
          toggleBtn.addEventListener('click', () => {
            const isDark = document.documentElement.classList.contains('dark-mode');
            setDarkMode(!isDark);
            localStorage.setItem('theme', !isDark ? 'dark' : 'light');
          });

          const currentYear = new Date().getFullYear();
          document.getElementById('copyright').textContent = `© ${currentYear} Kyrtin Atreides`;
        </script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet> 