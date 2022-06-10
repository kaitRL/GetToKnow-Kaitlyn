gsap.registerPlugin(ScrollTrigger);

const init = () => {
  let sections = gsap.utils.toArray(".panel");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+=3500",
    }
  });

  let sectionsLeft = gsap.utils.toArray(".left-panel");

  gsap.to(sectionsLeft, {
    xPercent: -100 * (sectionsLeft.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".left-container",
      pin: true,
      scrub: 1,
      snap: 1 / (sectionsLeft.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+=3500",
    }
  });
};

initGsap = init();
window.onload = initGsap;
