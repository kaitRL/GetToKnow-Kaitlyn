gsap.registerPlugin(ScrollTrigger);

const init2 = () => {

  let sectionsLeft = gsap.utils.toArray(".left-panel");

  sectionsLeft.forEach(function(sectionsLeft) {
    gsap.fromTo(sectionsLeft, {
      scrollTrigger: {
        trigger: section,
        horizontal: true,
        start: 'left left',
        end: 'right center',
        scrub: true,
        markers: true,

      }

    })

  })

  var scroller = document.querySelector('html');

  window.addEventListener('wheel', function(e) {

    if (e.deltaY > 0) scroller.scrollLeft -= 100;
    else scroller.scrollLeft += 100;

  });

};

initGsap2 = init2();
window.onload = initGsap2;
