// const text = document.querySelector('.wrapper');

// text.style.display = "flex";
// text.style.alignItems = "center";
// text.style.justifyContent = "center";
// text.style.width = "100%";
// text.style.height = "100vh";

var tl = gsap.timeline({ repeat: 2, repeatDelay: 1 })

tl.to('.box:first-child', 3, { x: 300, ease: 'power1.inOut' })
tl.to('.box:nth-child(2)', 1.5, { y: 500 })
tl.from('.box:last-child', 3, { x: 0, rotation: 360 })
