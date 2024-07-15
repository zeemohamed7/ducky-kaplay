// game.js
import kaplay from "kaplay";

// Initialize Kaboom
kaplay();

// Load sprites, create entities, etc.
loadSprite("duckIdle", "src/kaplay/sprites/Duck/Sprites/Idle/Idle 001.png");
loadSprite("start-button", "src/kaplay/sprites/start-btn.png");
loadSprite("play-button", "src/kaplay/sprites/play-btn.png");
loadSprite("feed-button", "src/kaplay/sprites/feed-btn.png");


const centerX = camPos().x / 2;
const centerY = camPos().y / 2;


const player = add([
  sprite("duckIdle"),
  vec2(centerX, centerY),
  scale(3),
  area(),
  "player"
]);

add([
  sprite("start-button"),
  scale(3),
  pos(centerX*1.5, centerY*3),
  area(),
  "start-button"

]);

add([
  sprite("play-button"),
  scale(3),
  pos(centerX/2.5, centerY*3),
  area(),
  "play-button"

]);
add([
  sprite("feed-button"),
  scale(3),
  pos(centerX*2.5, centerY*3),
  area(),
  "feed-button"

]);



onClick("start-button", () => {
  console.log("start game")
});
onClick("play-button", () => {
  console.log("play with ducky")
});
onClick("feed-button", () => {
  console.log("feed ducky")
});
