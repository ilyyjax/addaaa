// script.js
// This script angles the 8 bill elements so they are spaced evenly in the orbit.
// It also adds a subtle spin to each bill so they face slightly different directions.

(function(){
  const bills = Array.from(document.querySelectorAll('.bill'));
  const total = bills.length;

  // angle offset so first starts at top center (270deg = -90)
  const startAngle = -90;

  bills.forEach((el, i) => {
    const angle = startAngle + (360 / total) * i;
    // We position them by rotating the element around the orbit center.
    // Because the #orbit element is itself rotating (orbitSlow), bills will circle.
    el.style.transform = `rotate(${angle}deg) translateY(-0px)`;
    // add a small individual rotation so bills look slightly rotated while orbiting
    const selfRotate = (Math.random() * 20) - 10; // -10deg..+10deg
    el.style.transition = 'transform 0.3s linear';
    // We'll apply a combined transform that keeps the float animation working:
    // note: billFloat animation modifies translateY and rotation 0deg; we include selfRotate with rotate()
    el.style.setProperty('--self-rotate', `${selfRotate}deg`);
    // use inline animation of rotation via a small CSS animation frame if you want; for now this keeps them oriented with small offset
    el.style.transform = `rotate(${angle}deg) translateY(-0px) rotate(${selfRotate}deg)`;
  });

  // Optional: make center text clickable to toggle animation (handy in dev)
  const center = document.getElementById('centerText');
  center.addEventListener('click', () => {
    const orbit = document.getElementById('orbit');
    if (orbit.style.animationPlayState === 'paused') {
      orbit.style.animationPlayState = 'running';
    } else {
      orbit.style.animationPlayState = 'paused';
    }
  });
})();
