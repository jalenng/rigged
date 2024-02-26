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

// setInterval(() => {
// riggedMusic.play();
// riggedMusic.rate(Math.sin(Date.now()) * 0.5 + 1);
// }, 100);
