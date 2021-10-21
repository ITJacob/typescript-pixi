import * as PIXI from 'pixi.js';
// Import stylesheets
import './style.css';

// Create the application helper and add its render target to the page
let app = new PIXI.Application({ width: 640, height: 360 });
document.body.appendChild(app.view);

const graphics = new PIXI.Graphics();
graphics.beginFill(0xff3300);

graphics.drawRect(0, 0, 100, 200);
graphics.endFill();
app.stage.addChild(graphics);

// Add a ticker callback to move the sprite back and forth
let elapsed = 0.0;
app.ticker.add((delta) => {
  elapsed += delta;
  graphics.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
});
