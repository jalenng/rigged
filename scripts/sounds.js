const riggedMusic = new Howl({
  src: ["./sounds/rigged.mp3"],
  volume: 0.2,
  loop: true,
  autoplay: true,
});

console.log(riggedMusic);

const ripSound = new Howl({
  src: ["./sounds/rip.mp3"],
  volume: 0.5,
});

// setInterval(() => {
// riggedMusic.play();
// riggedMusic.rate(Math.sin(Date.now()) * 0.5 + 1);
// }, 100);
