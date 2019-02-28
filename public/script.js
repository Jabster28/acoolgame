// rythm
var rythm = new Rythm()
rythm.setMusic('res/cyc.mp3')
rythm.addRythm('bassjump', 'jump', 500, 100)
rythm.addRythm('trebleshake', 'twist', 0, 10, {
  radius: -100
})

rythm.start()
// orchestra
console.log("hello")
const orchestra = new Orchestre(155);
orchestra.addPlayer('1', './1.ogg', 98).then(() => { /* Called once the player is loaded */
  orchestra.start()
  orchestra.play('1');
  orchestra.toggle("1")
  $("button").click(function() {
    orchestra.toggle("1")
  })
});
