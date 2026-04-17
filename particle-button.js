const ParticleButtonModule = (function () {
  // Styles are injected once so you don't even need a separate CSS file if you don't want one
  const shapes = [
    '<polygon points="21,0,28,11,40,14,32,24,33,37,21,33,8,37,9,24,1,14,13,11"></polygon>',
    '<polygon points="18,0,22,13,36,18,22,22,18,36,13,22,0,18,13,13"></polygon>',
    '<rect width="20" height="20"></rect>'
  ];

  function createButton(targetId, text, options = {}) {
    const { 
      colors = ['#ffb3f6', '#7aa0ff', '#333'], 
      count = 30, 
      onClick = null 
    } = options;

    const target = document.getElementById(targetId);
    if (!target) return console.error(`Target #${targetId} not found.`);

    // Create wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'particle-btn-wrapper';
    wrapper.style.position = 'relative';
    wrapper.style.display = 'inline-block';

    // Create button
    const btn = document.createElement('button');
    btn.className = 'particle-btn';
    btn.innerText = text;

    wrapper.appendChild(btn);
    target.appendChild(wrapper);

    // Click logic
    btn.addEventListener('click', (e) => {
      explode(wrapper, count, colors);
      if (typeof onClick === 'function') {
        onClick();
      }
    });
  }

  function explode(wrapper, count, colors) {
    for (let i = 0; i < count; i++) {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute('viewBox', '0 0 40 40');
      svg.style.position = 'absolute';
      svg.style.width = '20px';
      svg.style.height = '20px';
      svg.style.left = '50%';
      svg.style.top = '50%';
      svg.style.pointerEvents = 'none';
      svg.style.zIndex = '5';
      
      svg.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
      svg.style.fill = colors[Math.floor(Math.random() * colors.length)];

      wrapper.appendChild(svg);

      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 0.5) * 200;
      const duration = 1000 + Math.random() * 800;

      const animation = svg.animate([
        { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
        { transform: `translate(${x}px, ${y}px) scale(0) rotate(${x}deg)`, opacity: 0 }
      ], {
        duration: duration,
        easing: 'cubic-bezier(0, .9, .57, 1)'
      });

      animation.onfinish = () => svg.remove();
    }
  }

  return {
    create: createButton
  };
})();