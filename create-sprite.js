const feather = require('feather-icons');
const fs = require('fs');
const path = require('path');

// Create the sprites SVG
const spritePath = path.join(__dirname, 'src/_includes/assets/feather-sprite.svg');

// Ensure the directory exists
fs.mkdirSync(path.dirname(spritePath), { recursive: true });

// Generate the sprite sheet
const spriteContent = `
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  ${Object.values(feather.icons).map(icon => `
    <symbol id="${icon.name}" viewBox="0 0 24 24">
      ${icon.contents}
    </symbol>
  `).join('')}
</svg>`;

fs.writeFileSync(spritePath, spriteContent);
console.log('Sprite sheet created at:', spritePath); 