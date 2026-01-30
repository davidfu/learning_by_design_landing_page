(function () {
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (!navToggle || !nav) return;

  navToggle.addEventListener('click', function () {
    var expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !expanded);
    nav.classList.toggle('is-open');
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

(function () {
  var canvas = document.getElementById('persona-strip-canvas');
  var section = document.querySelector('.persona-strip');
  if (!canvas || !section) return;

  var ctx = canvas.getContext('2d');
  var phase = 0;
  /* Stripe-style: soft flowing diagonal gradient (your palette) */
  var colors = [
    { r: 20, g: 59, b: 34 },   /* British racing green #143b22 */
    { r: 27, g: 190, b: 144 }, /* mint #1bbe90 */
    { r: 184, g: 115, b: 51 }, /* copper #b87333 */
    { r: 59, g: 34, b: 20 },   /* bistro brown #3b2214 */
    { r: 255, g: 255, b: 240 },/* ivory #fffff0 */
    { r: 0, g: 0, b: 0 },      /* black #000000 */
    { r: 255, g: 255, b: 255 },/* white #ffffff */
    { r: 20, g: 59, b: 34 }
  ];

  function setSize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var rect = section.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    draw();
  }

  function draw() {
    var rw = canvas.width;
    var rh = canvas.height;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, rw, rh);

    /* Flowing diagonal gradient: top-right to bottom-left (Stripe-style, soft blends) */
    var x0 = rw * 0.9 + phase * 0.25;
    var y0 = -rh * 0.1;
    var x1 = rw * 0.1 - phase * 0.25;
    var y1 = rh * 1.1;
    var g = ctx.createLinearGradient(x0, y0, x1, y1);

    /* Many soft color stops so bands overlap and blend (no hard edges) */
    var stops = [
      [0, 20, 59, 34, 0.95],
      [0.15, 27, 190, 144, 0.7],
      [0.3, 184, 115, 51, 0.6],
      [0.45, 59, 34, 20, 0.75],
      [0.6, 255, 255, 240, 0.5],
      [0.75, 0, 0, 0, 0.85],
      [0.9, 20, 59, 34, 0.8],
      [1, 27, 190, 144, 0.65]
    ];
    for (var i = 0; i < stops.length; i++) {
      var s = stops[i];
      g.addColorStop(s[0], 'rgba(' + s[1] + ',' + s[2] + ',' + s[3] + ',' + s[4] + ')');
    }
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, rw, rh);

    /* Second layer: translucent diagonal sweep for depth (like curved ribbon) */
    var x0b = rw * 0.75 - phase * 0.15;
    var y0b = rh * 0.15;
    var x1b = rw * 0.25 + phase * 0.15;
    var y1b = rh * 0.85;
    var g2 = ctx.createLinearGradient(x0b, y0b, x1b, y1b);
    g2.addColorStop(0, 'rgba(27,190,144,0.28)');
    g2.addColorStop(0.35, 'rgba(184,115,51,0.2)');
    g2.addColorStop(0.65, 'rgba(59,34,20,0.22)');
    g2.addColorStop(1, 'rgba(20,59,34,0.3)');
    ctx.fillStyle = g2;
    ctx.fillRect(0, 0, rw, rh);
  }

  function tick() {
    phase += 0.15;
    if (phase > 200) phase = 0;
    draw();
    requestAnimationFrame(tick);
  }

  setSize();
  window.addEventListener('resize', setSize);
  requestAnimationFrame(tick);
})();
