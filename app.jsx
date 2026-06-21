/* ============================================================
   app.jsx — shell: nav, home, routing, color tweaks
   ============================================================ */
const { useState: useS, useEffect: useE } = React;
const clickable = window.clickable;

const ACCENTS = {
  mono:       { accent: "#3A3A37", tint: "#EEEDE8", ink: "#2A2A27", label: "mono" },
  sage:       { accent: "#5E7C6B", tint: "#EAEFEA", ink: "#2F4438", label: "sage" },
  terracotta: { accent: "#C06A45", tint: "#F6E9E2", ink: "#7A3B22", label: "terracotta" },
  periwinkle: { accent: "#5E6FA8", tint: "#E9ECF6", ink: "#34406E", label: "periwinkle" },
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "sage",
  "handwriting": true,
  "calmMotion": false
}/*EDITMODE-END*/;

/* hand-drawn brain logo mark */
function BrainMark() {
  return (
    <svg className="mark" viewBox="0 0 40 40" fill="none" stroke="var(--ink)"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <g filter="url(#roughen)">
        <path d="M14 9c-4 0-6 3-5.5 6C6 16 5 19 7 21c-1.5 2 0 5 3 5 0 2.5 2.5 4 5 3" />
        <path d="M20 6c4-1.5 8 1 8 5 2.5.5 3.5 4 1.5 6 2 2 0 6-3 6 .5 2.5-2 5-5 4" />
        <path d="M20 6c-2 0-5 1-6 3M20 6v25M14 13c2 .5 3 2 6 2M26 16c-2 .5-4 0-6 2M15 21c2-.5 3 .5 5 .5M25 23c-2 0-3 1-5 1" />
      </g>
    </svg>
  );
}

function NavBar({ view, go, onSearch, textSize, setTextSize }) {
  const [open, setOpen] = useS(false);
  const items = [
    ["understanding", "Understanding"],
    ["caregiver", "Caregiver"],
    ["faq", "Questions"],
    ["toolkit", "Toolkit"],
    ["library", "Library"],
    ["about", "About"],
  ];
  const nav = (v) => { go(v); setOpen(false); };
  const sizes = [["m", "Normal text size"], ["l", "Large text size"], ["xl", "Largest text size"]];
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <div className="brand" {...clickable(() => nav("home"))}>
          <BrainMark />
          <span className="word">big little brain<small>dementia, explained simply</small></span>
        </div>
        <div className={"nav-links" + (open ? " open" : "")}>
          {items.map(([v, l]) => (
            <span key={v} className={"nav-link" + (view === v ? " active" : "")} {...clickable(() => nav(v))} aria-current={view === v ? "page" : undefined}>{l}</span>
          ))}
        </div>
        <div className="nav-tools">
          <div className="textsize" role="group" aria-label="Text size">
            {sizes.map(([k, label], i) => (
              <button key={k} className={"ts-btn" + (textSize === k ? " on" : "")} onClick={() => setTextSize(k)}
                      aria-label={label} aria-pressed={textSize === k} style={{ fontSize: 12 + i * 3 }}>A</button>
            ))}
          </div>
          <button className="nav-icon-btn" onClick={onSearch} aria-label="Search the site"><Icon name="search" size={22} /></button>
          <button className="nav-toggle" onClick={() => setOpen((o) => !o)} aria-label="Menu" aria-expanded={open}>
            <Icon name={open ? "close" : "menu"} size={26} />
          </button>
        </div>
      </div>
    </nav>
  );
}

function Home({ go, calm }) {
  const cards = [
    { v: "understanding", n: "01", icon: "book", t: "Understanding Dementia", d: "What it is, the early signs, and when to see a doctor — in plain words." },
    { v: "caregiver", n: "02", icon: "heart", t: "Caregiver Help", d: "Calm, practical guidance for the hard moments, day to day." },
    { v: "faq", n: "03", icon: "question", t: "Common Questions", d: "Search the questions carers actually ask, and get answers instantly." },
    { v: "toolkit", n: "04", icon: "toolbox", t: "Free Toolkit", d: "Printable trackers and planners to keep everything in one place." },
    { v: "library", n: "05", icon: "globe", t: "Library", d: "Trusted places to read, watch and reach out — research, books and helplines." },
  ];
  return (
    <main>
      <section className="hero wrap">
        <div className="hero-grid">
          <div>
            <div className="hero-eyebrow"><span className="tag"><Icon name="heart" size={15} /> for families &amp; carers</span></div>
            <h1>Your loved one has dementia.<br /><span className="hand">Here's what to know</span> right now.</h1>
            <p className="hero-lede">Clear, gentle answers for the questions racing through your mind — no jargon, no overwhelm. Start with the brain, then find help for today.</p>
            <div className="hero-cta">
              <button className="btn" onClick={() => go("understanding")}>Start understanding <Icon name="arrow" size={18} /></button>
              <button className="btn ghost" onClick={() => go("faq")}><Icon name="search" size={18} /> I have a question</button>
            </div>
            <div className="hero-reassure"><Icon name="check" size={18} /> Free · plain language · take it one step at a time</div>
          </div>
          <div className="hero-art">
            <SketchPortrait />
          </div>
        </div>
      </section>

      <section className="wrap">
        <div className="start-banner" {...clickable(() => go("start"))}>
          <span className="sb-ico"><Icon name="flag" size={24} /></span>
          <div className="sb-text">
            <strong>Just had a diagnosis?</strong>
            <span>Start here — a gentle, four-step path for the first days.</span>
          </div>
          <span className="sb-go">Start here <Icon name="arrow" size={18} /></span>
        </div>
      </section>

      <section className="brain-section wrap">
        <div className="brain-head">
          <span className="eyebrow" style={{ color: "var(--accent-ink)" }}>See it on the brain</span>
          <h2 style={{ marginTop: 10 }}>Where dementia is happening</h2>
          <p>Dementia damages the brain in a pattern. Watch the gentle tour, or tap any region to understand what it does — and what you might be seeing at home.</p>
        </div>
        <BrainFigure regions={window.BLB.BRAIN_REGIONS} calm={calm} />
      </section>

      <section className="path-section wrap">
        <div className="brain-head" style={{ marginBottom: 0 }}>
          <span className="eyebrow" style={{ color: "var(--accent-ink)" }}>Where to begin</span>
          <h2 style={{ marginTop: 10 }}>Find what you need</h2>
        </div>
        <div className="path-grid">
          {cards.map((c) => (
            <article className="card link path-card" key={c.v} {...clickable(() => go(c.v))}>
              <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
                <span className="pc-ico"><Icon name={c.icon} size={24} /></span>
                <span className="num">{c.n}</span>
              </div>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
              <span className="pc-go">Open <Icon name="arrow" size={16} /></span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

/* a small hand-drawn portrait (carer + cup, HeyTea-ish) for the hero */
function SketchPortrait() {
  return (
    <svg className="sketch-portrait" viewBox="0 0 360 340" fill="none"
         stroke="var(--ink)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
         style={{ width: "100%", height: "auto" }}>
      <g filter="url(#roughen)">
        {/* big head/brain */}
        <path d="M120 70c-30 2-48 28-42 54-22 8-26 40-4 52-6 26 18 46 42 38" />
        <path d="M150 48c26-12 58 2 60 32 20 6 24 32 6 46 14 16-2 44-28 42" />
        <path d="M150 48c-14-2-28 6-32 18M150 48v150M118 96c14 4 20 14 36 14M196 110c-14 4-26 0-46 12M124 150c14-2 22 6 38 6M192 158c-14 0-24 8-42 8" />
        {/* small drinking figure (HeyTea motif) */}
        <g transform="translate(232 196) scale(1.1)">
          <circle cx="40" cy="14" r="13" fill="var(--ink)" stroke="none" />
          <path d="M40 27c-4 6-3 16 2 22" />
          <path d="M14 30l16 4 8-8" />
          <path d="M14 30l-2 12 8 2" fill="none" />
        </g>
        {/* warm cup */}
        <path d="M150 250l8 60c1 8 8 14 16 14h26c8 0 15-6 16-14l8-60z" />
        <path d="M150 250h74" />
        <path d="M168 232c0-8 4-14 0-22M188 232c0-10 6-14 2-24M206 232c0-8 4-12 1-19" strokeWidth="2" />
      </g>
    </svg>
  );
}

/* the doodle behind the name — hover / tap to read the idea */
function MeaningMark() {
  const [open, setOpen] = useS(false);
  return (
    <div className={"meaning" + (open ? " open" : "")}>
      <button className="meaning-btn" onClick={() => setOpen((o) => !o)}
              aria-expanded={open} aria-label="The idea behind the name">
        <svg className="meaning-doodle" viewBox="0 0 210 250" fill="none"
             stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <g filter="url(#roughen)">
            {/* brain cloud */}
            <path d="M74,40 C56,33 38,44 41,62 C27,64 23,82 37,91 C30,104 41,118 56,113 C61,127 81,129 90,117 C103,126 121,119 121,105 C139,108 152,92 141,79 C152,68 145,48 127,51 C124,35 102,31 91,44 C86,37 78,37 74,40 Z" />
            <path d="M90,44 C88,68 92,92 85,116" strokeWidth="2.4" />
            <path d="M90,64 C76,61 69,70 57,67 M90,86 C76,86 69,95 56,92 M92,75 C106,70 113,79 127,76" strokeWidth="2.2" />
            {/* rising steam */}
            <path d="M74,128 C69,137 78,142 73,151" strokeWidth="2.2" />
            <path d="M91,130 C86,139 95,144 90,153" strokeWidth="2.2" />
            <path d="M108,128 C103,137 112,142 107,151" strokeWidth="2.2" />
            {/* bucket */}
            <path d="M60,162 L69,222 C69,227 73,230 78,230 L104,230 C109,230 113,227 113,222 L122,162" />
            <path d="M57,162 C57,157 125,157 125,162" />
            {/* the little figure, walking away */}
            <g transform="translate(150 158)">
              <circle cx="16" cy="10" r="10" fill="var(--ink)" stroke="none" />
              <path d="M16,20 C9,26 9,38 16,46" />
              <path d="M16,28 L2,23 M5,15 L-2,18" />
            </g>
          </g>
        </svg>
        <span className="meaning-cap hand">why &ldquo;big little brain&rdquo;?</span>
      </button>
      <div className="meaning-pop" role="note">
        <strong>The idea behind the name.</strong> The mind is vast — full of a lifetime of memories and self. Dementia slowly empties it, and the big brain becomes little. But the person is still there.
      </div>
    </div>
  );
}

function Footer({ go }) {
  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <div>
          <div className="brand" style={{ cursor: "default", marginRight: 0 }}>
            <BrainMark />
            <span className="word">big little brain</span>
          </div>
          <p className="disc">A small, free resource to help families and carers understand dementia and find their footing — one step at a time.</p>
          <p className="disc faint">© {new Date().getFullYear()} Big Little Brain. All rights reserved. <span className="foot-disc-link" {...clickable(() => go("disclaimer"))}>Disclaimer &amp; safety</span></p>
        </div>
        <MeaningMark />
        <div className="foot-links">
          <span {...clickable(() => go("start"))}>Start here</span>
          <span {...clickable(() => go("understanding"))}>Understanding</span>
          <span {...clickable(() => go("caregiver"))}>Caregiver Help</span>
          <span {...clickable(() => go("faq"))}>Questions</span>
          <span {...clickable(() => go("toolkit"))}>Toolkit</span>
          <span {...clickable(() => go("library"))}>Library</span>
          <span {...clickable(() => go("about"))}>About</span>
          <span {...clickable(() => go("disclaimer"))}>Disclaimer</span>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [view, setView] = useS("home");
  const [article, setArticle] = useS(null);
  const [printId, setPrintId] = useS(null);
  const [searchOpen, setSearchOpen] = useS(false);
  const [textSize, setTextSize] = useS(() => { try { return localStorage.getItem("blb-textsize") || "m"; } catch (e) { return "m"; } });

  // apply accent theme
  useE(() => {
    const a = ACCENTS[t.accent] || ACCENTS.sage;
    const r = document.documentElement.style;
    r.setProperty("--accent", a.accent);
    r.setProperty("--accent-tint", a.tint);
    r.setProperty("--accent-ink", a.ink);
    document.body.classList.toggle("no-hand", !t.handwriting);
    document.body.classList.toggle("calm-motion", !!t.calmMotion);
  }, [t.accent, t.handwriting, t.calmMotion]);

  // text size: whole-page zoom (the design uses px units, so root font-size won't cascade)
  useE(() => {
    const z = textSize === "l" ? 1.12 : textSize === "xl" ? 1.26 : 1;
    const el = document.getElementById("appzoom");
    if (el) el.style.zoom = z;
    try { localStorage.setItem("blb-textsize", textSize); } catch (e) {}
  }, [textSize]);

  // press "/" to open search
  useE(() => {
    const onKey = (e) => {
      if (e.key === "/" && !/^(input|textarea)$/i.test(e.target.tagName)) { e.preventDefault(); setSearchOpen(true); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (v) => { setView(v); setArticle(null); setSearchOpen(false); window.scrollTo({ top: 0, behavior: "auto" }); };
  const open = (a) => { setArticle(a); window.scrollTo({ top: 0, behavior: "auto" }); };
  const jump = (section, id) => {
    const list = section === "caregiver" ? window.BLB.CAREGIVER : window.BLB.UNDERSTANDING;
    const a = list.find((x) => x.id === id);
    setView(section); setArticle(a || null); setSearchOpen(false); window.scrollTo({ top: 0, behavior: "auto" });
  };

  let body;
  if (article) {
    const items = view === "caregiver" ? window.BLB.CAREGIVER : window.BLB.UNDERSTANDING;
    body = <ArticleReader article={article} items={items} onOpen={open} onBack={() => setArticle(null)} />;
  } else if (view === "understanding") {
    body = <SectionPage eyebrow="Understanding dementia" title="Start with" hand="the basics"
              lede="Six short reads to find your bearings. Begin anywhere — they make sense in any order."
              items={window.BLB.UNDERSTANDING} onOpen={open} onHome={() => go("home")} typesBox go={go} />;
  } else if (view === "caregiver") {
    body = <SectionPage eyebrow="Caregiver help" title="Help for" hand="the hard moments"
              lede="Calm, practical guidance for the situations that catch carers off guard — and why they happen."
              items={window.BLB.CAREGIVER} onOpen={open} onHome={() => go("home")} />;
  } else if (view === "faq") {
    body = <FAQView onHome={() => go("home")} />;
  } else if (view === "toolkit") {
    body = <ToolkitView onHome={() => go("home")} onPrint={setPrintId} />;
  } else if (view === "library") {
    body = <LibraryView onHome={() => go("home")} />;
  } else if (view === "about") {
    body = <AboutPage onHome={() => go("home")} go={go} />;
  } else if (view === "start") {
    body = <StartHere onHome={() => go("home")} go={go} jump={jump} />;
  } else if (view === "disclaimer") {
    body = <DisclaimerPage onHome={() => go("home")} />;
  } else {
    body = <Home go={go} calm={t.calmMotion} />;
  }

  return (
    <div>
      <a className="skip-link" href="#appzoom">Skip to content</a>
      <div id="appzoom">
        <NavBar view={view} go={go} onSearch={() => setSearchOpen(true)} textSize={textSize} setTextSize={setTextSize} />
        {body}
        <Footer go={go} />
        {printId && <PrintSheet id={printId} onClose={() => setPrintId(null)} />}
      </div>
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} jump={jump} go={go} />}

      <TweaksPanel>
        <TweakSection label="Colour accent" />
        <TweakColor label="Accent" value={ACCENTS[t.accent].accent}
          options={Object.values(ACCENTS).map((a) => a.accent)}
          onChange={(hex) => {
            const key = Object.keys(ACCENTS).find((k) => ACCENTS[k].accent === hex) || "sage";
            setTweak("accent", key);
          }} />
        <TweakSection label="Style" />
        <TweakToggle label="Handwritten accents" value={t.handwriting} onChange={(v) => setTweak("handwriting", v)} />
        <TweakToggle label="Reduce brain motion" value={t.calmMotion} onChange={(v) => setTweak("calmMotion", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
