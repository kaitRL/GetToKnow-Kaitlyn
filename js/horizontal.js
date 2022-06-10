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

  // img reveal
  let revealContainers = document.querySelectorAll(".reveal");

  revealContainers.forEach((container, i) => {
    let image = container.querySelector("img");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        containerAnimation: scrollTween,
        start: "center center",
        toggleActions: "restart none none reset"
      }
    });

    tl.set(container, { autoAlpha: 1 });
    tl.from(container, 1.5, {
      xPercent: -100,
      ease: "power2"
    });
    tl.from(image, 1.5, {
      xPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: "power2"
    });
  });


};

initGsap = init();
window.onload = initGsap;
