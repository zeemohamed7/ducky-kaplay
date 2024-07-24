// game.js
import kaplay from "kaplay";

// Initialize Kaboom
kaplay();

// why should i care 🦢
// Load sprites, create entities, etc.
loadSprite("duckIdle", "src/kaplay/sprites/Duck/Sprites/Idle/Idle 001.png");
loadSprite("start-button", "src/kaplay/sprites/start-btn.png");
loadSprite("play-button", "src/kaplay/sprites/play-btn.png");
loadSprite("feed-button", "src/kaplay/sprites/feed-btn.png");

const centerX = camPos().x / 2;
const centerY = camPos().y / 2;

function startGame() {
  // Create a duck
  const duck = add([
    sprite("duckIdle"),
    pos(centerX, centerY),
    scale(3),
    area(),
    { hunger: 11 },
    { happiness: 0 },
    { health: 0 },
    "duck",
  ]);
  // this is a comment from noor sharaf please remember me

  // Create buttons
  add([
    sprite("start-button"),
    scale(3),
    pos(centerX * 1.5, centerY * 3),
    area(),
    "start-button",
  ]);

  add([
    sprite("play-button"),
    scale(3),
    pos(centerX / 2.5, centerY * 3),
    area(),
    "play-button",
  ]);
  add([
    sprite("feed-button"),
    scale(3),
    pos(centerX * 2.5, centerY * 3),
    area(),
    "feed-button",
  ]);

  // Set scene
  setBackground("#232323");

  // Set status bars
  let hungerText = add([
    text(`Hunger: ${duck.hunger}`, {
      size: 22,
    }),
    pos(24, 24),
  ]);

  let healthText = add([
    text(`Health: ${duck.health}`, {
      size: 22,
    }),
    pos(24, 48),
  ]);

  let happinessText = add([
    text(`Happiness: ${duck.happiness}`, {
      size: 22,
    }),
    pos(24, 72),
  ]);

  const updateStatus = () => {
    // Destroy the previous hungerText
    if (hungerText) {
      hungerText.destroy();
    }

    hungerText = add([
      text(`Hunger: ${duck.hunger}`, {
        size: 22,
      }),
      pos(24, 24),
    ]);


    if (healthText) {
      healthText.destroy();
    }


healthText = add([
    text(`Health: ${duck.health}`, {
      size: 22,
    }),
    pos(24, 48),
  ]);

    if (happinessText) {
      happinessText.destroy();
    }

    happinessText = add([
      text(`Happiness: ${duck.happiness}`, {
        size: 22,
      }),
      pos(24, 72),
    ]);



  };

  // Feed ducky
  onClick("feed-button", () => {
    console.log("feed ducky");
    duck.happiness += 5;
    duck.hunger += 10;
    duck.health += 10;
    updateStatus();
  });

  // Check
  const check = () => {
    // Check for hunger and happiness levels
    if (hunger > 100) {
      // health -= 10;
    } else if (happiness < 0) {
      health -= 10;
    }
  };

  // Event Listeners
  onClick("start-button", () => {
    console.log("start game");
  });
  onClick("play-button", () => {
    console.log("play with ducky");
  });
}
startGame();

// use this feature for bars later 🦢
// hungerBar.width = duck.hunger;
