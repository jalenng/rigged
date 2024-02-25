const riggedMusic = new Howl({
  src: ["./sounds/rigged.mp3"],
  volume: 0.5,
  loop: true,
  autoplay: true,
});

console.log(riggedMusic);

// setInterval(() => {
  // riggedMusic.play();
  // riggedMusic.rate(Math.sin(Date.now()) * 0.5 + 1);
// }, 100);
