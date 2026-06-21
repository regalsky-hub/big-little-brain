/* ============================================================
   brain.jsx — explorable line-art brain
   Auto-plays a gentle loop (hippocampus -> temporal -> parietal
   -> frontal -> occipital) mirroring how Alzheimer's spreads.
   Hover / tap any region to explore it. Pauses on interaction.
   ============================================================ */
const { useState, useEffect, useRef, useCallback } = React;

/* region blob geometry, viewBox 0 0 500 430, brain faces LEFT */
const REGION_SHAPE = {
  frontal:   { cx: 158, cy: 150, rx: 52, ry: 46, rot: -18, lx: 120, ly: 92 },
  temporal:  { cx: 188, cy: 252, rx: 48, ry: 30, rot: -8,  lx: 150, ly: 312 },
  hippo:     { cx: 258, cy: 232, rx: 30, ry: 17, rot: 12,  lx: 262, ly: 296 },
  parietal:  { cx: 322, cy: 138, rx: 50, ry: 38, rot: 14,  lx: 350, ly: 86 },
  occipital: { cx: 408, cy: 192, rx: 38, ry: 36, rot: 0,   lx: 452, ly: 150 },
};

function BrainFigure({ regions, calm }) {
  const prefersReduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [active, setActive] = useState("hippo");
  const [playing, setPlaying] = useState(!calm && !prefersReduced);
  const [userTouched, setUserTouched] = useState(false);
  const timer = useRef(null);
  const idleResume = useRef(null);

  const order = regions.map((r) => r.id);
  const activeRegion = regions.find((r) => r.id === active) || regions[0];

  // honour the "reduce motion" tweak live
  useEffect(() => { setPlaying(!calm && !prefersReduced); }, [calm]);

  // autoplay loop
  useEffect(() => {
    if (!playing) return;
    timer.current = setInterval(() => {
      setActive((cur) => {
        const i = order.indexOf(cur);
        return order[(i + 1) % order.length];
      });
    }, 3000);
    return () => clearInterval(timer.current);
  }, [playing]); // eslint-disable-line

  const pauseForInteraction = useCallback((id) => {
    setActive(id);
    setPlaying(false);
    setUserTouched(true);
    clearTimeout(idleResume.current);
    idleResume.current = setTimeout(() => setPlaying(true), 9000);
  }, []);

  return (
    <div className="brain-block">
      <div className="brain-stage">
        <svg className="brain-svg" viewBox="0 0 500 430" role="img"
             aria-label="Diagram of a brain. Select a region to learn what it does.">
          <defs>
            <filter id="roughen2">
              <feTurbulence type="fractalNoise" baseFrequency="0.014" numOctaves="2" seed="7" result="n" />
              <feDisplacementMap in="SourceGraphic" in2="n" scale="3.4" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>

          {/* ---- region fills (under the outline strokes) ---- */}
          <g>
            {regions.map((r) => {
              const s = REGION_SHAPE[r.id];
              const on = r.id === active;
              return (
                <g key={r.id}
                   className={"region" + (on ? " on" : "")}
                   onMouseEnter={() => pauseForInteraction(r.id)}
                   onClick={() => pauseForInteraction(r.id)}
                   style={{ cursor: "pointer" }}>
                  <ellipse cx={s.cx} cy={s.cy} rx={s.rx} ry={s.ry}
                           transform={`rotate(${s.rot} ${s.cx} ${s.cy})`}
                           fill={r.color}
                           style={{ opacity: on ? 0.9 : 0.16,
                                    transition: "opacity .6s ease, transform .6s ease",
                                    transformOrigin: `${s.cx}px ${s.cy}px`,
                                    transform: on ? "scale(1)" : "scale(.92)" }} />
                  {/* invisible bigger hit target */}
                  <ellipse cx={s.cx} cy={s.cy} rx={s.rx + 10} ry={s.ry + 10}
                           transform={`rotate(${s.rot} ${s.cx} ${s.cy})`} fill="transparent" />
                </g>
              );
            })}
          </g>

          {/* ---- hand-drawn brain line art (lateral view) ---- */}
          <g filter="url(#roughen2)" fill="none" stroke="var(--ink)"
             strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* cerebrum outline with gyri bumps along the top */}
            <path d="M120,178
                     C107,146 126,112 156,121
                     C170,101 192,111 206,125
                     C222,107 246,113 260,127
                     C278,109 302,113 320,127
                     C342,111 368,115 390,129
                     C417,121 446,139 441,173
                     C439,197 429,213 413,221
                     C431,231 441,251 433,269
                     C425,287 405,293 387,287
                     C367,299 333,301 300,301
                     C251,303 196,305 156,293
                     C133,286 119,277 119,261
                     C109,251 107,210 109,196
                     C110,188 114,184 120,178 Z" />
            {/* lateral (Sylvian) sulcus — the signature deep groove */}
            <path d="M138,226 C180,215 212,224 250,215 C274,210 288,216 302,227" strokeWidth="2.6" />
            {/* gyri / sulci folds */}
            <path d="M188,130 C182,150 196,158 190,177" strokeWidth="2.1" />
            <path d="M236,128 C228,150 244,160 236,183" strokeWidth="2.1" />
            <path d="M292,130 C286,150 300,158 294,181" strokeWidth="2.1" />
            <path d="M348,132 C342,151 356,161 350,183" strokeWidth="2.1" />
            <path d="M150,158 C168,151 178,167 198,160" strokeWidth="2.1" />
            <path d="M388,152 C401,169 384,180 399,197" strokeWidth="2.1" />
            <path d="M152,258 C192,248 212,264 252,254" strokeWidth="2.1" />
            <path d="M300,250 C322,244 332,260 352,253" strokeWidth="2.1" />
            {/* hippocampus curl */}
            <path d="M244,237 C252,225 270,225 274,239 C276,249 264,253 258,245" strokeWidth="2.1" />

            {/* cerebellum with fine striations */}
            <path d="M405,251 C441,251 467,277 457,307 C449,333 415,343 389,331
                     C369,322 361,299 369,279 C375,263 389,253 405,251 Z" />
            <path d="M411,265 C437,269 447,295 431,315" strokeWidth="1.9" />
            <path d="M401,277 C425,281 433,303 417,319" strokeWidth="1.9" />
            <path d="M395,291 C415,295 421,309 411,323" strokeWidth="1.9" />

            {/* brain stem */}
            <path d="M338,297 C340,323 346,347 356,367 C362,379 376,379 382,367
                     C374,347 372,323 372,301" />
          </g>
        </svg>

        {/* floating labels positioned over the stage */}
        {regions.map((r) => {
          const s = REGION_SHAPE[r.id];
          const on = r.id === active;
          return (
            <button key={r.id}
              className={"region-tag" + (on ? " on" : "")}
              onMouseEnter={() => pauseForInteraction(r.id)}
              onFocus={() => pauseForInteraction(r.id)}
              onClick={() => pauseForInteraction(r.id)}
              style={{ left: (s.lx / 500 * 100) + "%", top: (s.ly / 430 * 100) + "%",
                       "--dot": r.color }}>
              <span className="dot"></span>{r.name}
            </button>
          );
        })}
      </div>

      {/* ---- detail panel ---- */}
      <div className="brain-detail">
        <div className="brain-controls no-print">
          <button className={"playbtn" + (playing ? " on" : "")}
                  onClick={() => { setPlaying((p) => !p); setUserTouched(true); }}>
            {playing
              ? <span><Icon name="pause" /> touring the brain</span>
              : <span><Icon name="play" /> resume tour</span>}
          </button>
          <span className="brain-hint faint">{userTouched ? "" : "tap any region to explore"}</span>
        </div>

        <div className="detail-card">
          <div className="detail-fade" key={activeRegion.id}>
          <div className="detail-head">
            <span className="region-swatch" style={{ background: activeRegion.color }}></span>
            <div>
              <h3>{activeRegion.name}</h3>
              <span className="hand detail-plain">{activeRegion.plain}</span>
            </div>
            <span className="stage-pill">{activeRegion.stage}</span>
          </div>
          <p className="muted detail-what">{activeRegion.what}</p>
          <div className="detail-see">
            <span className="eyebrow">You may notice</span>
            <ul>
              {activeRegion.youMaySee.map((x, i) => <li key={i}>{x}</li>)}
            </ul>
          </div>
          </div>
        </div>

        <div className="brain-progress no-print">
          {regions.map((r) => (
            <button key={r.id}
              className={"prog" + (r.id === active ? " on" : "")}
              style={{ "--dot": r.color }}
              onClick={() => pauseForInteraction(r.id)}
              aria-label={r.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

window.BrainFigure = BrainFigure;
