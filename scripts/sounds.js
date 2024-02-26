const riggedMusic = new Howl({
  src: ["./sounds/rigged.mp3"],
  volume: 0.2,
  loop: true,
  autoplay: true,
});

const riggedEndingMusic = new Howl({
  src: ["./sounds/rigged_ending.mp3"],
  volume: 0.2,
  loop: true,
  autoplay: false,
});

console.log(riggedMusic);

const ripSound = new Howl({
  src: ["./sounds/rip.mp3"],
  volume: 0.5,
});

const freezingBombSound = new Howl({
  src: ["./sounds/freezing_bomb.mp3"],
  volume: 0.5,
});

const ovenSound = new Howl({
  src: ["./sounds/oven.mp3"],
  volume: 0.5,
});

const toyboxSound = new Howl({
  src: ["./sounds/toybox.mp3"],
  volume: 0.5,
});

const nestSound = new Howl({
  src: ["./sounds/nest.mp3"],
  volume: 0.5,
});

const tubSound = new Howl({
  src: ["./sounds/tub.mp3"],
  volume: 0.5,
});

const cabbageSound = new Howl({
  src: ["./sounds/cabbage.mp3"],
  volume: 0.5,
});

const goatSound = new Howl({
  src: ["./sounds/goat_cut.mp3"],
  volume: 0.5,
});

const wolfSound = new Howl({
  src: ["./sounds/wolf_cut.mp3"],
  volume: 0.5,
});

const boatSound = new Howl({
  src: ["./sounds/boat.mp3"],
  volume: 0.5,
});

const crackSound = new Howl({
  src: ["./sounds/crack.mp3"],
  volume: 0.5,
});

const explosionSound = new Howl({
  src: ["./sounds/explosion.mp3"],
  volume: 0.9,
});

const bombSound = new Howl({
  src: ["./sounds/bomb.mp3"],
  volume: 0.5,
});

// setInterval(() => {
// riggedMusic.play();
// riggedMusic.rate(Math.sin(Date.now()) * 0.5 + 1);
// }, 100);
