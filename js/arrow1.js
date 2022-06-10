var tl = new TimelineLite();

tl.from(".line1", 1, {
    drawSVG: 0
  })
  .from(".line2", 1, {
    drawSVG: 0
  })
  .from(".line3", 1, {
    drawSVG: 0
  })
  .from(".line4", 1, {
    drawSVG: 0
  })


tl.timeScale(1);
