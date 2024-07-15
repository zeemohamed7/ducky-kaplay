// game.js
import kaplay from "kaplay";

// Initialize Kaboom
kaplay();

// Load sprites, create entities, etc.
loadSprite("duckIdle", "src/kaplay/sprites/Duck/Sprites/Idle/Idle 001.png");
loadSprite("button", "src/kaplay/sprites/start-btn.png");


const centerX = camPos().x / 2;
const centerY = camPos().y / 2;


const player = add([
  sprite("duckIdle"),
  vec2(centerX, centerY),
  scale(3),
  area(),
  "player"
]);

const button = add([
  sprite("button"),
  scale(3),
  pos(vec2(200, 100)),
  area(),
  "button"

]);



onClick("button", () => {
  console.log("hi")
})