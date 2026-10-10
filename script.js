/* ============================================================
   EDIT ME — everything personal lives in CONFIG.
   ============================================================ */
const CONFIG = {
  recipient: "Shravani",
  nickname: "Biceppps",
  sender: "",            // OPTIONAL: your name, e.g. "Your name". Leave "" to hide.
  birthday: "",          // OPTIONAL: "MM-DD" (e.g. "03-14") or "YYYY-MM-DD". Leave "" for no countdown.
  music: "assets/music/birthday-music.mp3", // OPTIONAL: your own MP3. If missing, a built-in music-box Happy Birthday plays.

  hero: { src: "assets/images/01-hero-smiling-purple-saree.jpg", alt: "Shravani smiling with her eyes closed in warm sunlight" },

  // Order = order in the gallery. Captions are PLACEHOLDERS — replace with real memories.
  gallery: [
    { src: "assets/images/green-saree-mehndi.jpg",        alt: "Shravani in a green saree with mehndi on her hand", caption: "Green, gold and that effortless glow." },
    { src: "assets/images/purple-saree-wall-selfie.jpg",  alt: "Shravani in a purple saree with gold jewellery", caption: "Grace in every little detail." },
    { src: "assets/images/teal-saree-window-portrait.jpg",alt: "Shravani in a teal and gold saree", caption: "Colours always look better on you." },
    { src: "assets/images/red-kurta-pink-room-smile.jpg", alt: "Shravani smiling brightly in a red kurta", caption: "That smile lights up the whole room." },
    { src: "assets/images/pink-sweater-smile.jpg",        alt: "Shravani smiling in a pink fuzzy sweater", caption: "Cosy, calm and completely you." },
    { src: "assets/images/pink-tilted-selfie.jpg",        alt: "Shravani tilting her head in a soft pink-lit selfie", caption: "That little side glance, so you." },
    { src: "assets/images/window-grill-big-smile.jpg",    alt: "Shravani laughing in front of a window grill", caption: "Laughing like nobody is watching." },
    { src: "assets/images/window-grill-soft-smile.jpg",   alt: "Shravani with a soft smile in front of a window grill", caption: "A soft smile, a quiet kind of beautiful." },
    { src: "assets/images/one-of-a-kind-tee.jpg",         alt: "Shravani resting her chin on her hand in a One of a Kind t-shirt", caption: "Her t-shirt says it best: one of a kind." },
    { src: "assets/images/hands-ring-laugh.jpg",          alt: "Shravani laughing behind her hands", caption: "Hiding a laugh, and not quite succeeding." },
    { src: "assets/images/playful-face-mask.jpg",         alt: "Shravani playfully wearing a black face mask", caption: "Always up for something playful." },
    { src: "assets/images/together-pink-building.jpg",    alt: "Shravani and a friend in front of a pink carved building", caption: "Side by side." },
    { src: "assets/images/together-dog-filter-flowers.jpg",alt: "Shravani and a friend laughing near pink flowers", caption: "Laughing together." },
    { src: "assets/images/together-blue-polos.jpg",       alt: "Shravani and a friend in blue polo shirts", caption: "Matching blues, matching smiles." },
    { src: "assets/images/together-mirror-selfie.jpg",    alt: "Two people taking a mirror selfie in a cafe", caption: "One mirror, two of us." },
    { src: "assets/images/together-selfie.jpg",           alt: "Shravani and a friend leaning close in a selfie", caption: "Close, calm and happy." }
  ],
  // Short lines shown between gallery groups (every 4 photos). Edit freely.
  interludes: ["Every picture is a little story.", "Smiles like these are worth keeping.", "Still more to see…", "And a few more for the road."],

  letter: `Dear Shravani, my Biceppps,

Happy Birthday! ❤️

Today is all about you, your smile, your dreams, and all the beautiful things that make you who you are.

I hope this new chapter brings you peaceful days, exciting adventures, unexpected happiness, and countless reasons to smile.

Never forget that you deserve kindness, love, beautiful opportunities, and all the little things that make life special.

May you always find the courage to chase your dreams and the happiness to enjoy every little moment along the way.

Keep being your wonderful self. The world is a little more beautiful with people like you in it.

Here is to new memories, beautiful surprises, endless laughter, and a birthday that feels as special as you are.

With lots of love and the warmest birthday wishes,

Happy Birthday, Biceppps! ❤️✨`,

  openWhen: [
    { title: "Open when you feel sad.", icon: "☂", accent: "#7fa8d8",
      text: "It's okay to feel this way. Sad days are allowed, and they don't last forever.\n\nBe as gentle with yourself as you would be with someone you care about. Take a slow breath, drink some water, rest if you need to.\n\nThis feeling will soften, and brighter moments are waiting ahead. ❤️" },
    { title: "Open when you need a smile.", icon: "☀", accent: "#f2c14e",
      text: "Here is your official reminder to smile. 😄\n\nThink of your favourite song, your silliest laugh, the last thing that made you giggle. Now smile bigger.\n\nSmall joys count. Go find one today. ✨" },
    { title: "Open when you doubt yourself.", icon: "✦", accent: "#c79bff",
      text: "Doubt shows up even for capable people. It doesn't mean you can't.\n\nYou have gotten through hard things before, and you are still growing. Take one small step, then another.\n\nBelieve in yourself a little more than you did yesterday. 💪" },
    { title: "Open when you need a little love.", icon: "❤", accent: "#ff6b8b",
      text: "You deserve warmth, kindness and care, today and always.\n\nYou matter. Your smile matters. The way you show up matters.\n\nHere is a big, warm hug, sent your way. 🤍" }
  ],

  finale: `May your days be softer, your dreams be bigger, your smile be brighter, and your heart always find reasons to feel happy.

Happy Birthday, Shravani.

Stay magical, Biceppps. ❤️`,
  finalPhoto: { src: "assets/images/together-pink-building.jpg", alt: "Shravani and a friend smiling in front of a pink carved building", caption: "Here is to you, Biceppps." }
};

/* ============================ ENGINE ============================ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const S = $$(".screen");
let cur = 0, busy = false;

/* ---- text setup ---- */
$("#nick0").textContent = CONFIG.nickname + " ❤️";
$("#hero").src = CONFIG.hero.src; $("#hero").alt = CONFIG.hero.alt;
$("#hero").onerror = () => $("#heroWrap").remove();
(function greet() {
  const g = $("#greet"), words = `Happy Birthday, ${CONFIG.nickname}!`.split(" ");
  words.forEach((w, i) => { const s = document.createElement("span"); s.textContent = w; s.style.animationDelay = (reduced ? 0 : 0.5 + i * 0.35) + "s"; g.append(s, " "); });
})();

function toast(t) { const el = $("#toast"); el.textContent = t; el.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove("on"), 3200); }

/* ---- birthday countdown ---- */
(function countdown() {
  const m = (CONFIG.birthday || new URLSearchParams(location.search).get("bday") || "").match(/(\d{2})-(\d{2})$/); if (!m) return;
  const now = new Date(), today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let n = new Date(now.getFullYear(), +m[1] - 1, +m[2]);
  if (n < today) n = new Date(now.getFullYear() + 1, +m[1] - 1, +m[2]);
  const d = Math.round((n - today) / 864e5), el = $("#count");
  el.textContent = d === 0 ? "🎉 Today is your day! 🎉" : d === 1 ? "Just 1 more sleep until your birthday ✨" : `${d} days until your birthday ✨`;
  el.hidden = false;
})();

/* ---- navigation ---- */
const dots = $("#dots");
S.forEach((_, i) => { const b = document.createElement("button"); b.setAttribute("aria-label", "Go to chapter " + (i + 1)); b.onclick = () => go(i); dots.append(b); });
function go(n) {
  if (busy || n === cur || n < 0 || n >= S.length) return;
  busy = true;
  const prev = cur; cur = n;
  S[prev].classList.remove("active"); S[prev].inert = true;
  S[n].inert = false; S[n].classList.add("active"); S[n].scrollTop = 0;
  $("#hud").hidden = false; $("#navbar").hidden = n === 0;
  $$("#dots button").forEach((b, i) => b.classList.toggle("on", i === n));
  $("#back").disabled = n <= 1; $("#next").disabled = n === S.length - 1;
  if (prev === 3) stopType();
  if (prev === 5) stopHearts();
  if (n === 2) setTimeout(observeGallery, 300);
  if (n === 3) setTimeout(() => typeLetter(), 700);
  if (n === 5) { resetCake(); startHearts(); }
  setTimeout(() => (busy = false), reduced ? 50 : 800);
  const h = $("h1,h2", S[n]); if (h) { h.tabIndex = -1; setTimeout(() => h.focus({ preventScroll: true }), 850); }
}
$$("[data-go]").forEach(b => b.onclick = () => go(+b.dataset.go));
$("#back").onclick = () => go(cur - 1);
$("#next").onclick = () => go(cur + 1);
addEventListener("keydown", e => {
  if (!$("#lb").hidden) { if (e.key === "Escape") closeLB(); if (e.key === "ArrowLeft") stepLB(-1); if (e.key === "ArrowRight") stepLB(1); return; }
  if (!$("#ow").hidden) { if (e.key === "Escape") closeOW(); return; }
  if (cur > 0 && /^(ArrowRight|ArrowLeft)$/.test(e.key) && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) go(cur + (e.key === "ArrowRight" ? 1 : -1));
});

/* ---- music: your MP3 if present, otherwise a built-in music-box "Happy Birthday" (no file needed) ---- */
const au = new Audio(); au.loop = true; au.preload = "metadata"; au.src = CONFIG.music;
let useSynth = false, playing = false, muted = false, actx = null, master = null, loopT = null;
au.addEventListener("error", () => { useSynth = true; });
const SONG = [[7,.75],[7,.25],[9,1],[7,1],[12,1],[11,2],[7,.75],[7,.25],[9,1],[7,1],[14,1],[12,2],[7,.75],[7,.25],[19,1],[16,1],[12,1],[11,1],[9,1],[17,.75],[17,.25],[16,1],[12,1],[14,1],[12,2]];
function schedule() {
  const beat = .6; let t = actx.currentTime + .1;
  for (const [semi, d] of SONG) {
    const f = 261.63 * Math.pow(2, semi / 12);
    [[1, .22, "triangle"], [2, .07, "sine"]].forEach(([m, g, type]) => {
      const o = actx.createOscillator(), e = actx.createGain(); o.type = type; o.frequency.value = f * m;
      e.gain.setValueAtTime(0, t); e.gain.linearRampToValueAtTime(g, t + .02); e.gain.exponentialRampToValueAtTime(.0001, t + d * beat + .9);
      o.connect(e); e.connect(master); o.start(t); o.stop(t + d * beat + 1);
    });
    t += d * beat;
  }
  loopT = setTimeout(() => { loopT = null; if (playing) schedule(); }, (t - actx.currentTime + 1.5) * 1000);
}
function synthPlay() {
  if (!actx) { const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return false; actx = new AC(); master = actx.createGain(); master.gain.value = muted ? 0 : .5; master.connect(actx.destination); }
  actx.resume(); if (!loopT) schedule(); return true;
}
function setPlayUI(on) { $("#play").textContent = on ? "❚❚" : "♪"; $("#play").setAttribute("aria-pressed", on); $("#play").setAttribute("aria-label", on ? "Pause music" : "Play music"); $("#bars").classList.toggle("on", on); }
function startMusic() {
  if (playing) return;
  const synth = () => { if (synthPlay()) { playing = true; setPlayUI(true); } };
  if (useSynth) return synth();
  au.play().then(() => { playing = true; setPlayUI(true); }).catch(() => { useSynth = true; synth(); });
}
function stopMusic() { playing = false; au.pause(); if (actx) actx.suspend(); setPlayUI(false); }
$("#play").onclick = () => playing ? stopMusic() : startMusic();
$("#mute").onclick = () => {
  muted = !muted; au.muted = muted; if (master) master.gain.value = muted ? 0 : .5;
  $("#mute").textContent = muted ? "🔇" : "🔈"; $("#mute").setAttribute("aria-pressed", muted);
};

/* ---- screen 1: envelope ---- */
$("#open").onclick = function () {
  if (this.disabled) return; this.disabled = true;
  startMusic();
  $("#env").classList.add("open"); $("#s0").classList.add("leaving");
  setTimeout(() => go(1), reduced ? 100 : 2400);
};

/* ---- screen 2: parallax on pointer move (desktop) ---- */
if (!reduced) addEventListener("pointermove", e => {
  if (cur !== 1 || e.pointerType === "touch") return;
  const x = (e.clientX / innerWidth - .5) * 14, y = (e.clientY / innerHeight - .5) * 10;
  const h = $("#heroWrap"); if (h) h.style.transform = `translate(${x}px,${y}px)`;
});

/* ---- screen 3: gallery + lightbox ---- */
const items = CONFIG.gallery.map(g => ({ ...g, ok: true }));
(function buildGallery() {
  const root = $("#gallery");
  items.forEach((g, i) => {
    if (i > 0 && i % 4 === 0) { const p = document.createElement("p"); p.className = "inter"; p.textContent = CONFIG.interludes[(i / 4 - 1) % CONFIG.interludes.length]; root.append(p); }
    const b = document.createElement("button"); b.className = "pol"; b.style.setProperty("--r", ((i % 3) - 1) * 1.4 + "deg");
    b.setAttribute("aria-label", "Open photo: " + g.caption);
    b.innerHTML = '<div class="ph"><img loading="lazy" decoding="async"></div><span></span>';
    const im = $("img", b); im.src = g.src; im.alt = g.alt; $("span", b).textContent = g.caption;
    im.onerror = () => { g.ok = false; b.remove(); };
    b.onclick = () => openLB(i, b);
    root.append(b);
  });
})();
let io;
function observeGallery() {
  if (io) return;
  io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } }), { root: S[2], threshold: .12 });
  $$(".pol").forEach(p => reduced ? p.classList.add("show") : io.observe(p));
}
let lbI = 0, lbFrom = null;
function openLB(i, from) { lbI = i; lbFrom = from; showLB(); $("#lb").hidden = false; $("#lbX").focus(); }
function showLB() { const g = items[lbI]; $("#lbI").src = g.src; $("#lbI").alt = g.alt; $("#lbC").textContent = g.caption; }
function stepLB(d) { let n = lbI, t = 0; do { n = (n + d + items.length) % items.length; t++; } while (!items[n].ok && t < items.length); lbI = n; showLB(); }
function closeLB() { $("#lb").hidden = true; if (lbFrom) lbFrom.focus(); }
$("#lbX").onclick = closeLB; $("#lbP").onclick = () => stepLB(-1); $("#lbN").onclick = () => stepLB(1);
$("#lb").addEventListener("click", e => { if (e.target.id === "lb") closeLB(); });
let tx = 0;
$("#lb").addEventListener("touchstart", e => tx = e.touches[0].clientX, { passive: true });
$("#lb").addEventListener("touchend", e => { const d = e.changedTouches[0].clientX - tx; if (Math.abs(d) > 50) stepLB(d < 0 ? 1 : -1); });

/* ---- screen 4: letter ---- */
let tw = null;
const letterText = () => CONFIG.letter + (CONFIG.sender ? "\n\n— " + CONFIG.sender : "");
function stopType() { clearInterval(tw); tw = null; $("#letter").classList.remove("typing"); }
function showAll() { stopType(); $("#lt").textContent = letterText(); }
function typeLetter() {
  stopType(); const t = letterText(), el = $("#lt"); el.textContent = "";
  if (reduced) return showAll();
  let i = 0; $("#letter").classList.add("typing");
  tw = setInterval(() => {
    i += 2; el.textContent = t.slice(0, i);
    const L = $("#letter"), r = L.getBoundingClientRect();
    if (r.bottom > innerHeight - 100) S[3].scrollTop += 24;
    if (i >= t.length) stopType();
  }, 30);
}
$("#skipL").onclick = showAll; $("#replayL").onclick = () => { S[3].scrollTop = 0; typeLetter(); };

/* ---- screen 5: open when ---- */
let owFrom = null, owBusy = false;
CONFIG.openWhen.forEach((o, i) => {
  const b = document.createElement("button"); b.className = "mini"; b.style.setProperty("--a", o.accent);
  b.innerHTML = '<span class="ic" aria-hidden="true"></span><b></b>'; $(".ic", b).textContent = o.icon; $("b", b).textContent = o.title;
  b.setAttribute("aria-label", "Open letter: " + o.title);
  b.onclick = () => {
    if (owBusy) return; owBusy = true; owFrom = b; b.classList.add("op");
    setTimeout(() => {
      $("#owT").textContent = o.title; $("#owP").textContent = o.text;
      const c = $("#owCard"); c.dataset.a = i; c.style.setProperty("--a", o.accent);
      $("#ow").hidden = false; $("#owX").focus(); owBusy = false;
    }, reduced ? 0 : 650);
  };
  $("#owGrid").append(b);
});
function closeOW() { $("#ow").hidden = true; if (owFrom) { owFrom.classList.remove("op"); owFrom.focus(); } }
$("#owX").onclick = closeOW;
$("#ow").addEventListener("click", e => { if (e.target.id === "ow") closeOW(); });

/* ---- screen 6: finale ---- */
const candles = $$(".candle");
$("#finalImg").src = CONFIG.finalPhoto.src; $("#finalImg").alt = CONFIG.finalPhoto.alt; $("#finalCap").textContent = CONFIG.finalPhoto.caption;
$("#finalImg").onerror = () => $("#finalImg").closest(".frame").remove();
$("#finalMsg").textContent = CONFIG.finale;
let celebrated = false;
function checkAllOut() {
  if (celebrated || candles.some(c => !c.classList.contains("out"))) return;
  celebrated = true; $("#wish").hidden = true; $("#wishHint").textContent = "Your wish is on its way… ✨";
  confettiBurst(); setTimeout(confettiBurst, 700);
  setTimeout(() => { $("#final").hidden = false; $("#final").scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" }); }, reduced ? 0 : 900);
}
candles.forEach(c => c.onclick = () => { if (c.classList.contains("out")) return; c.classList.add("out"); checkAllOut(); });
$("#wish").onclick = function () {
  this.disabled = true; $("#wishHint").textContent = "Close your eyes and make a wish… 🕯️";
  candles.forEach((c, i) => setTimeout(() => { c.classList.add("out"); checkAllOut(); }, reduced ? 0 : 1500 + i * 450));
};
function resetCake() {
  celebrated = false; candles.forEach(c => c.classList.remove("out"));
  $("#wish").hidden = false; $("#wish").disabled = false; $("#final").hidden = true;
  $("#wishHint").textContent = "Tap the candles, or make a wish.";
}
$("#replayF").onclick = () => { S[5].scrollTop = 0; resetCake(); };

/* hearts (finale only) */
let hv = null;
function startHearts() {
  if (reduced) return; stopHearts();
  hv = setInterval(() => {
    const h = document.createElement("span"); h.textContent = Math.random() < .6 ? "❤" : "✦";
    h.style.left = Math.random() * 100 + "vw"; h.style.fontSize = 12 + Math.random() * 18 + "px";
    h.style.setProperty("--dx", (Math.random() * 60 - 30) + "px"); h.style.animationDuration = 6 + Math.random() * 5 + "s";
    $("#hearts").append(h); h.onanimationend = () => h.remove();
  }, 600);
}
function stopHearts() { clearInterval(hv); hv = null; $("#hearts").innerHTML = ""; }

/* ---- ambient petals & gold dust (lightweight canvas) ---- */
const fx = $("#fx"), c = fx.getContext("2d"); let W, H, ps = [], run = true;
function size() { const r = Math.min(devicePixelRatio || 1, 1.5); W = innerWidth; H = innerHeight; for (const cv of [fx, cf]) { cv.width = W * r; cv.height = H * r; cv.getContext("2d").setTransform(r, 0, 0, r, 0, 0); } }
const cf = $("#confetti"), cx = cf.getContext("2d");
function mk() { const petal = Math.random() < .4; return { x: Math.random() * W, y: Math.random() * H, r: petal ? 5 + Math.random() * 5 : 1 + Math.random() * 1.6, v: petal ? .5 + Math.random() * .6 : .15 + Math.random() * .35, s: Math.random() * 6, a: Math.random() * 6, p: petal }; }
function init() { size(); ps = Array.from({ length: innerWidth < 600 ? 24 : 46 }, mk); }
function draw() {
  if (!run) return; c.clearRect(0, 0, W, H);
  for (const p of ps) {
    p.y += p.v; p.s += .012; p.a += .015; p.x += Math.sin(p.s) * .45;
    if (p.y > H + 14) { p.y = -14; p.x = Math.random() * W; }
    if (p.p) { c.save(); c.translate(p.x, p.y); c.rotate(p.a); c.fillStyle = "rgba(140,16,45,.6)"; c.beginPath(); c.ellipse(0, 0, p.r, p.r * .55, 0, 0, 7); c.fill(); c.restore(); }
    else { c.fillStyle = "rgba(216,181,109,.75)"; c.beginPath(); c.arc(p.x, p.y, p.r, 0, 7); c.fill(); }
  }
  requestAnimationFrame(draw);
}
addEventListener("resize", init);
document.addEventListener("visibilitychange", () => { run = !document.hidden; if (run && !reduced) draw(); });
init();
if (reduced) { for (const p of ps) { c.fillStyle = "rgba(216,181,109,.6)"; c.beginPath(); c.arc(p.x, p.y, p.r, 0, 7); c.fill(); } } else draw();

/* ---- confetti ---- */
let cp = [], cfRun = false;
function confettiBurst() {
  const cols = ["#D8B56D", "#FFF4E8", "#6B102B", "#ff6b8b", "#f2c14e"], n = reduced ? 30 : innerWidth < 600 ? 90 : 150;
  for (let i = 0; i < n; i++) cp.push({ x: W / 2, y: H * .45, vx: (Math.random() - .5) * 14, vy: -Math.random() * 14 - 4, w: 5 + Math.random() * 5, h: 3 + Math.random() * 4, a: Math.random() * 6, va: (Math.random() - .5) * .3, col: cols[i % cols.length], life: 140 + Math.random() * 60 });
  if (!cfRun) { cfRun = true; stepConfetti(); }
}
function stepConfetti() {
  cx.clearRect(0, 0, W, H);
  cp = cp.filter(p => p.life-- > 0 && p.y < H + 20);
  for (const p of cp) { p.vy += .28; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.a += p.va; cx.save(); cx.translate(p.x, p.y); cx.rotate(p.a); cx.globalAlpha = Math.min(1, p.life / 40); cx.fillStyle = p.col; cx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); cx.restore(); }
  if (cp.length) requestAnimationFrame(stepConfetti); else { cfRun = false; cx.clearRect(0, 0, W, H); }
}
