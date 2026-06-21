/* ============================================================
   views.jsx — section pages, article reader, FAQ, toolkit
   Shares components via window. Loaded after icons + content.
   ============================================================ */
const { useState: useStateV, useMemo, useEffect: useEffectV } = React;
const clickable = window.clickable;

/* ---------- why behaviours change (bridge box on Understanding page) ---------- */
function WhyBehavioursBox({ onCaregiver }) {
  const drivers = [
    { lead: "An unmet need", rest: "pain, hunger, thirst, needing the toilet, or being too hot or cold." },
    { lead: "Overwhelm", rest: "too much noise, too many people, or a task with too many steps." },
    { lead: "Fear or confusion", rest: "not knowing where they are, what's happening, or who someone is." },
    { lead: "A change", rest: "a new place, a broken routine, or an unfamiliar face helping out." },
    { lead: "The brain itself", rest: "damage to the areas that steer mood, impulse and judgement." },
    { lead: "Trying to cope", rest: "old habits and reflexes surfacing as they reach for something familiar." },
  ];
  return (
    <section className="why-box">
      <div className="why-head">
        <span className="eyebrow">Behaviour is communication</span>
        <h2>Why behaviours change</h2>
        <p>Repeating, wandering, anger, refusing help — these are often the hardest part, and they're almost never deliberate. When the brain is damaged, a person can't always say what they need, so the need comes out as behaviour instead.</p>
      </div>
      <div className="why-grid">
        {drivers.map((d) => (
          <div className="why-row" key={d.lead}>
            <span className="why-dot"></span>
            <p><strong>{d.lead}</strong> — {d.rest}</p>
          </div>
        ))}
      </div>
      <div className="why-foot">
        <p className="hand why-quote">find what's behind it, and it usually eases.</p>
        <button className="btn ghost" onClick={onCaregiver}>See Caregiver Help <Icon name="arrow" size={18} /></button>
      </div>
    </section>
  );
}

/* ---------- types-of-dementia overview box ---------- */
function TypesBox() {
  const types = window.BLB.TYPES;
  const lead = types.find((t) => t.lead);
  const rest = types.filter((t) => !t.lead);
  return (
    <section className="types-box">
      <div className="types-head">
        <span className="eyebrow" style={{ color: "var(--accent-ink)" }}>The bigger picture</span>
        <h2>Dementia isn't one thing</h2>
        <p className="muted">It's an umbrella word for several diseases. Each behaves a little differently — knowing the type helps everything else make more sense.</p>
      </div>
      {lead && (
        <div className="type-lead">
          <div className="type-lead-main">
            <span className="type-pill">Most common by far</span>
            <h3>{lead.name}</h3>
            <p>{lead.note}</p>
          </div>
          <div className="type-lead-stat" aria-hidden="true">
            <span className="tls-num">6<span className="tls-slash">in</span>10</span>
            <span className="tls-cap">{lead.stat}</span>
          </div>
        </div>
      )}
      <div className="types-grid">
        {rest.map((t) => (
          <div className="type-card" key={t.name}>
            <span className={"type-pill" + (t.common ? "" : " muted-pill")}>{t.common ? "Also common" : "Less common"}</span>
            <h3>{t.name}</h3>
            <p>{t.note}</p>
          </div>
        ))}
      </div>
      <p className="types-foot faint">There are rarer types too. If you're unsure which type your loved one has, the diagnosing doctor or a dementia support line can explain what it means for them.</p>
    </section>
  );
}

/* ---------- generic section: list of article cards ---------- */
function SectionPage({ eyebrow, title, hand, lede, items, onOpen, onHome, typesBox, go }) {
  return (
    <main className="wrap">
      <div className="page-head">
        <span className="back-link" {...clickable(onHome)}><Icon name="arrowL" size={18} /> Home</span>
        <span className="eyebrow" style={{ display: "block", marginTop: 8 }}>{eyebrow}</span>
        <h1>{title} {hand && <span className="hand">{hand}</span>}</h1>
        <p>{lede}</p>
      </div>
      <div className="article-grid">
        {items.map((a) => (
          <article className="card link art-card" key={a.id} {...clickable(() => onOpen(a))}>
            <div className="a-meta"><span className="mins">{a.minutes} min read</span></div>
            <h3>{a.title}</h3>
            <p>{a.blurb}</p>
            <span className="a-go">Read <Icon name="arrow" size={16} /></span>
          </article>
        ))}
      </div>
      {typesBox && <TypesBox />}
      {typesBox && <WhyBehavioursBox onCaregiver={() => go && go("caregiver")} />}
    </main>
  );
}

/* ---------- article reader ---------- */
function ArticleReader({ article, items, onOpen, onBack }) {
  const idx = items.findIndex((x) => x.id === article.id);
  const prev = items[idx - 1], next = items[idx + 1];
  return (
    <main className="wrap reader">
      <span className="back-link" {...clickable(onBack)}><Icon name="arrowL" size={18} /> All articles</span>
      <div className="r-meta"><span className="mins">{article.minutes} min read</span></div>
      <h1>{article.title}</h1>
      <div className="r-body">
        {article.body.map((p, i) => <p key={i}>{p}</p>)}
        <div className="keybox">
          <span className="k-ico"><Icon name="heart" size={22} /></span>
          <div>
            <span className="eyebrow">The one thing to hold onto</span>
            <p>{article.key}</p>
          </div>
        </div>
        <p className="r-sources faint">{window.BLB.SOURCES}<br />Information last reviewed: {window.BLB.REVIEWED}.</p>
      </div>
      <div className="reader-nav">
        {prev
          ? <span className="back-link" {...clickable(() => onOpen(prev))}><Icon name="arrowL" size={18} /> {prev.title}</span>
          : <span />}
        {next
          ? <span className="back-link" {...clickable(() => onOpen(next))}>{next.title} <Icon name="arrow" size={18} /></span>
          : <span />}
      </div>
    </main>
  );
}

/* ---------- FAQ with live search + highlight ---------- */
function highlight(text, q) {
  if (!q) return text;
  const safe = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp("(" + safe + ")", "ig"));
  return parts.map((p, i) =>
    p.toLowerCase() === q.toLowerCase() ? <mark key={i}>{p}</mark> : p);
}

function FAQView({ onHome }) {
  const all = window.BLB.FAQ;
  const [q, setQ] = useStateV("");
  const [open, setOpen] = useStateV(null);
  const suggestions = ["repeating", "sundowning", "sleep", "medication", "hallucinations", "wandering", "guilt"];

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return all;
    return all.filter((f) =>
      (f.q + " " + f.a + " " + f.tags.join(" ")).toLowerCase().includes(t));
  }, [q]);

  return (
    <main className="wrap">
      <div className="page-head center" style={{ textAlign: "center" }}>
        <span className="back-link" {...clickable(onHome)} style={{ justifyContent: "center" }}><Icon name="arrowL" size={18} /> Home</span>
        <span className="eyebrow" style={{ display: "block", marginTop: 8 }}>Common questions</span>
        <h1 style={{ margin: "12px auto 0" }}>The questions carers <span className="hand">actually ask</span></h1>
        <p style={{ margin: "16px auto 0" }}>Type what's on your mind. Real answers, in plain words — no waiting, no jargon.</p>
      </div>

      <div className="faq-search">
        <span className="s-ico"><Icon name="search" size={22} /></span>
        <input value={q} onChange={(e) => setQ(e.target.value)} autoFocus
               placeholder="e.g. why does mum repeat herself?" aria-label="Search questions" />
      </div>
      <div className="faq-chips">
        {suggestions.map((s) => <button className="chip" key={s} onClick={() => setQ(s)}>{s}</button>)}
      </div>

      <div className="faq-list">
        {results.length === 0 && (
          <div className="faq-empty">
            <p style={{ fontSize: 18, fontWeight: 600 }}>No match for "{q}"</p>
            <p style={{ marginTop: 6 }}>Try a simpler word, like "sleep", "eating", or "angry".</p>
          </div>
        )}
        {results.map((f, i) => {
          const isOpen = open === i || (q.trim() && results.length <= 3);
          return (
            <div className={"faq-item" + (isOpen ? " open" : "")} key={f.q}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span className="qmark"><Icon name="question" size={18} /></span>
                <span>{highlight(f.q, q.trim())}</span>
                <span className="chev"><Icon name="arrow" size={18} /></span>
              </button>
              <div className="faq-a" style={{ maxHeight: isOpen ? 360 : 0 }}>
                <div className="faq-a-inner">{highlight(f.a, q.trim())}</div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

/* ---------- Toolkit (grouped) ---------- */
function ToolkitView({ onHome, onPrint }) {
  const tools = window.BLB.TOOLKIT;
  const groups = window.BLB.TOOLKIT_GROUPS;
  return (
    <main className="wrap">
      <div className="page-head">
        <span className="back-link" {...clickable(onHome)}><Icon name="arrowL" size={18} /> Home</span>
        <span className="eyebrow" style={{ display: "block", marginTop: 8 }}>Free caregiver toolkit</span>
        <h1>Practical tools, <span className="hand">ready to print</span></h1>
        <p>Simple sheets you can preview, print, or download as a PDF — then fill in by hand. Stick them on the fridge, keep them by the pills, carry them to appointments. All free, all yours.</p>
      </div>
      {groups.map((g) => (
        <section className="tk-group" key={g}>
          <h2 className="tk-group-title">{g}</h2>
          <div className="toolkit-grid">
            {tools.filter((t) => t.group === g).map((t) => (
              <article className="card link tool-card" key={t.id} {...clickable(() => onPrint(t.id))}>
                <span className="t-ico"><Icon name={t.icon} size={26} /></span>
                <div className="t-body">
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                  <span className="t-go"><Icon name="arrow" size={15} /> Preview · print · PDF</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
      <p className="tk-disclaimer faint">These sheets are practical aids, not medical or legal documents. For decisions about care, medication, or planning ahead, please involve a doctor or a dementia support service.</p>
    </main>
  );
}

/* ---------- Printable sheet overlay (schema-driven + PDF) ---------- */
function range(n) { return Array.from({ length: n }); }

function SheetBody({ tool }) {
  const L = tool.layout;
  if (L.kind === "fields") {
    return (
      <div>
        {L.photo && (
          <div className="sheet-photo">
            <span className="sheet-photo-x">photo</span>
            <span className="faint" style={{ fontSize: 12 }}>Attach a recent photo here</span>
          </div>
        )}
        <div className="sheet-fields">
          {L.fields.map((f) => (
            <div className="sheet-field" key={f}>
              <span className="sf-label">{f}</span>
              {range(L.lines || 1).map((_, i) => <div className="sf-line" key={i} />)}
            </div>
          ))}
        </div>
        {L.footer && <p className="sheet-note">{L.footer}</p>}
      </div>
    );
  }
  if (L.kind === "table") {
    return (
      <div>
        <table className={"sheet-table" + (L.centerFrom != null ? " sheet-grid7" : "")}>
          <thead><tr>{L.cols.map((c, i) => (
            <th key={c} style={{ textAlign: L.centerFrom != null && i >= L.centerFrom ? "center" : "left",
                                  width: L.widths ? L.widths[i] : undefined }}>{c}</th>
          ))}</tr></thead>
          <tbody>{range(L.rows).map((_, r) => (
            <tr key={r}>{L.cols.map((c, i) => (
              <td key={i} style={{ textAlign: L.centerFrom != null && i >= L.centerFrom ? "center" : "left" }}></td>
            ))}</tr>
          ))}</tbody>
        </table>
        {L.after && (<><p className="sheet-sub" style={{ marginTop: 20 }}>{L.after.label}</p>
          <div className="sheet-lines">{range(L.after.lines).map((_, i) => <div className="sheet-line" key={i} />)}</div></>)}
      </div>
    );
  }
  if (L.kind === "weekgrid") {
    return (
      <div>
        <table className="sheet-table sheet-grid7">
          <thead><tr><th style={{ textAlign: "left", width: "24%" }}></th>{DAYS_V.map((d) => <th key={d}>{d}</th>)}</tr></thead>
          <tbody>{L.rows.map((row) => (
            <tr key={row}><td style={{ textAlign: "left", fontWeight: 700, color: "var(--ink)" }}>{row}</td>
              {DAYS_V.map((d) => <td key={d}></td>)}</tr>
          ))}</tbody>
        </table>
        {L.after && (<><p className="sheet-sub" style={{ marginTop: 20 }}>{L.after.label}</p>
          <div className="sheet-lines">{range(L.after.lines).map((_, i) => <div className="sheet-line" key={i} />)}</div></>)}
      </div>
    );
  }
  if (L.kind === "checklist") {
    return (
      <div className="sheet-checklist" style={{ columnCount: L.cols || 2 }}>
        {L.items.map((it) => (
          <label className="check-item" key={it}><span className="check-box"></span>{it}</label>
        ))}
      </div>
    );
  }
  if (L.kind === "routine") {
    return (
      <div className="routine-table">
        {L.rows.map((r) => (
          <div className="routine-row" key={r}><div className="rt">{r}</div><div className="rl"></div></div>
        ))}
      </div>
    );
  }
  if (L.kind === "activities") {
    return (
      <div className="act-list">
        {L.items.map((a) => (
          <div className="act-row" key={a.name}>
            <div className="act-name"><span className="check-box"></span><div><strong>{a.name}</strong><span className="act-hint">{a.hint}</span></div></div>
            <div className="act-lines"><div className="sf-line" /><div className="sf-line" /></div>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

const DAYS_V = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function PrintSheet({ id, onClose }) {
  const tool = window.BLB.TOOLKIT.find((t) => t.id === id);
  const [busy, setBusy] = useStateV(false);
  if (!tool) return null;

  const downloadPdf = async () => {
    const el = document.getElementById("sheet");
    if (!window.html2pdf || !el) { window.print(); return; }
    setBusy(true);
    try {
      await window.html2pdf().set({
        margin: [12, 12, 12, 12],
        filename: "big-little-brain — " + tool.title + ".pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, backgroundColor: "#ffffff", useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      }).from(el).save();
    } finally { setBusy(false); }
  };

  return (
    <div className="print-overlay" onClick={(e) => { if (e.target.classList.contains("print-overlay")) onClose(); }}>
      <div className="printbar no-print">
        <button className="btn" onClick={() => window.print()}><Icon name="print" size={18} /> Print</button>
        <button className="btn ghost pdf-btn" onClick={downloadPdf} disabled={busy}>
          <Icon name="download" size={18} /> {busy ? "Preparing…" : "Download PDF"}
        </button>
        <button className="btn ghost pdf-btn" onClick={onClose}><Icon name="close" size={18} /> Close</button>
        <span className="printbar-tip">Tip: when printing, turn on “background graphics”.</span>
      </div>
      <div className="print-page" id="sheet">
        <div className="ph">
          <div>
            <span className="sheet-brand">big little brain</span>
            <h2>{tool.title}</h2>
          </div>
          <span className="hand">{tool.hand}</span>
        </div>
        <p className="sheet-sub">{tool.intro}</p>
        <SheetBody tool={tool} />
        <div className="sheet-footline">For <span className="sheet-name-line"></span> · completed by <span className="sheet-name-line"></span> · date <span className="sheet-name-line short"></span></div>
        <div className="sheet-copyright">© {new Date().getFullYear()} Big Little Brain · Educational use only — not medical advice. Always seek professional healthcare advice about your own situation. In an emergency call 999.</div>
      </div>
    </div>
  );
}

/* ---------- Disclaimer & copyright ---------- */
function DisclaimerPage({ onHome }) {
  const year = new Date().getFullYear();
  return (
    <main className="wrap reader">
      <span className="back-link" {...clickable(onHome)}><Icon name="arrowL" size={18} /> Home</span>
      <div className="page-head" style={{ marginBottom: 18 }}>
        <span className="eyebrow" style={{ display: "block", marginTop: 8 }}>Please read</span>
        <h1>Disclaimer &amp; <span className="hand">safety</span></h1>
        <p>Big Little Brain is made with care, but it has limits. Here's what it is, what it isn't, and where to turn for real help.</p>
      </div>

      <div className="r-body">
        <div className="keybox" style={{ marginTop: 0 }}>
          <span className="k-ico"><Icon name="heart" size={22} /></span>
          <div>
            <span className="eyebrow">In an emergency</span>
            <p>If someone is in immediate danger, seriously unwell, or you're worried about their safety right now, call <strong>999</strong> (or your local emergency number). For urgent but non-life-threatening advice in the UK, call <strong>111</strong>.</p>
          </div>
        </div>

        <h3 className="disc-h">Educational information only</h3>
        <p>Everything on this site is provided for general educational and informational purposes. It is written in plain language to help families and carers understand dementia — it is not, and is not intended to be, a substitute for professional medical advice, diagnosis, or treatment.</p>

        <h3 className="disc-h">Not a diagnosis</h3>
        <p>Big Little Brain cannot diagnose dementia or any other condition, and reading it should never replace a proper assessment. Many causes of memory or thinking changes are treatable, so symptoms always deserve a professional opinion. Only a qualified healthcare professional can assess your specific situation.</p>

        <h3 className="disc-h">Always seek professional advice</h3>
        <p>Always speak to a doctor, your GP, a pharmacist, or a dementia support line about your own circumstances before making decisions about care, medication, or treatment. Never disregard or delay seeking professional advice because of something you have read here. If you're ever unsure, ask a professional.</p>

        <h3 className="disc-h">No guarantees</h3>
        <p>We try to keep the information accurate and current, but we make no warranties about its completeness, reliability, or suitability for your situation. Every person and every diagnosis is different. Any reliance you place on this information is strictly at your own risk, and we accept no liability for decisions made based on it.</p>

        <h3 className="disc-h">External help &amp; links</h3>
        <p>Where we point to support lines or other organisations, we do so to be helpful — we don't control and aren't responsible for their content, services, or advice.</p>

        <div className="disc-copy">
          <p>© {year} Big Little Brain. All rights reserved.</p>
          <p className="faint">The name, content, illustrations, and design of Big Little Brain are protected by copyright. Personal, non-commercial use — including printing the toolkit sheets for your own caregiving — is welcome and encouraged. Please don't republish, resell, or reproduce the content elsewhere without permission.</p>
        </div>
      </div>
    </main>
  );
}

/* ---------- Library: browsable shelf of trusted resources ---------- */
function LibraryView({ onHome }) {
  const groups = window.BLB.LIBRARY_GROUPS;
  const items = window.BLB.LIBRARY;
  return (
    <main className="wrap reader">
      <span className="back-link" {...clickable(onHome)}><Icon name="arrowL" size={18} /> Home</span>
      <div className="page-head">
        <span className="eyebrow">A small library</span>
        <h1>Places to <span className="hand">read, watch &amp; reach out</span></h1>
        <p>A hand-picked shelf of trusted organisations, research, books and voices. Start anywhere, follow what helps, and decide for yourself.</p>
      </div>

      <div className="lib-note">
        <Icon name="heart" size={18} />
        <p>These are independent organisations and authors — we link to them because they're well established and trustworthy, not because we're affiliated with them. Always check the details, and any current phone numbers, on their own websites.</p>
      </div>

      {groups.map((g) => {
        const list = items.filter((i) => i.group === g.id);
        if (!list.length) return null;
        return (
          <section className="lib-group" key={g.id}>
            <div className="lib-group-head">
              <span className="lib-g-ico"><Icon name={g.icon} size={22} /></span>
              <div>
                <h2>{g.label}</h2>
                <p>{g.blurb}</p>
              </div>
            </div>
            <div className="lib-grid">
              {list.map((it, idx) => {
                const inner = (
                  <React.Fragment>
                    <div className="lib-card-top">
                      <span className="lib-meta">{it.meta || (it.host ? "Website" : "Reading")}</span>
                      {it.url && <Icon name="external" size={16} />}
                    </div>
                    <h3>{it.name}</h3>
                    <p>{it.note}</p>
                    {it.host && <span className="lib-host">{it.host}</span>}
                  </React.Fragment>
                );
                return it.url ? (
                  <a className="lib-card" key={idx} href={it.url} target="_blank" rel="noopener noreferrer">{inner}</a>
                ) : (
                  <div className="lib-card no-link" key={idx}>{inner}</div>
                );
              })}
            </div>
          </section>
        );
      })}
    </main>
  );
}

/* ---------- About / our story ---------- */
function AboutPage({ onHome, go }) {
  return (
    <main className="wrap reader">
      <span className="back-link" {...clickable(onHome)}><Icon name="arrowL" size={18} /> Home</span>
      <div className="page-head" style={{ marginBottom: 8 }}>
        <span className="eyebrow" style={{ display: "block", marginTop: 8 }}>Our story</span>
        <h1>Why <span className="hand">Big Little Brain</span> exists</h1>
        <p>A small, free place to help families understand dementia — made with care, and meant to feel human.</p>
      </div>
      <div className="r-body">
        {/* TODO: personalise this section with your own story and name */}
        <p>When someone you love is diagnosed with dementia, the world tilts. There's a flood of information — most of it clinical, frightening, or buried in jargon — and very little that simply sits beside you and explains things gently. Big Little Brain was built to be that calmer first stop.</p>
        <div className="keybox" style={{ marginTop: 6 }}>
          <span className="k-ico"><Icon name="heart" size={22} /></span>
          <div>
            <span className="eyebrow">Behind the name</span>
            <p>The mind is vast — full of a lifetime of memories and self. Dementia slowly empties it, and the big brain becomes little. But the person is still there.</p>
          </div>
        </div>
        <h3 className="disc-h">How we keep it trustworthy</h3>
        <p>Everything here is written in plain language and grounded in guidance from trusted sources — the NHS, NICE, Alzheimer's Society and Dementia UK. We focus on understanding and everyday coping, not diagnosis or treatment. It is educational information only, never a substitute for professional advice.</p>
        <h3 className="disc-h">Kept current</h3>
        <p>Dementia care keeps moving forward, so the content is reviewed regularly. <strong>Information last reviewed: {window.BLB.REVIEWED}.</strong> If anything reads as out of date, please tell us.</p>
        <h3 className="disc-h">Get in touch</h3>
        <p>Spotted a mistake, or have something that helped you that others should know about? We'd love to hear it — <a className="about-mail" href="mailto:hello@biglittlebrain.com">hello@biglittlebrain.com</a>.</p>
        <div className="about-cta">
          <button className="btn" onClick={() => go("start")}>New to all this? Start here <Icon name="arrow" size={18} /></button>
          <button className="btn ghost" onClick={() => go("disclaimer")}>Read the disclaimer</button>
        </div>
      </div>
    </main>
  );
}

/* ---------- Just diagnosed? Start here ---------- */
function StartHere({ onHome, go, jump }) {
  const steps = [
    { n: "01", icon: "heart", t: "Take a breath — you have time", d: "Dementia changes slowly. You don't have to understand everything today. Start with what it actually is, in plain words.", cta: "What is dementia?", run: () => jump("understanding", "what-is-dementia") },
    { n: "02", icon: "cross", t: "Getting a diagnosis", d: "Not sure what happens next, or still waiting on answers? Here's what the GP visit and memory clinic are really like.", cta: "Read the guide", run: () => jump("understanding", "getting-a-diagnosis") },
    { n: "03", icon: "book", t: "Handle the first hard moments", d: "Repeating, refusing, wandering, anger — calm, practical help for the situations that catch you off guard.", cta: "Caregiver help", run: () => go("caregiver") },
    { n: "04", icon: "leaf", t: "Look after yourself, too", d: "This is a marathon. Protecting your own wellbeing is part of caring well — not a luxury.", cta: "Looking after you", run: () => jump("caregiver", "carer-wellbeing") },
  ];
  return (
    <main className="wrap reader">
      <span className="back-link" {...clickable(onHome)}><Icon name="arrowL" size={18} /> Home</span>
      <div className="page-head" style={{ marginBottom: 8 }}>
        <span className="eyebrow" style={{ display: "block", marginTop: 8 }}>Just diagnosed?</span>
        <h1>Start <span className="hand">here</span></h1>
        <p>A gentle, four-step path for the first days after a diagnosis. Take them in order, or jump to whatever you need most.</p>
      </div>
      <div className="start-steps">
        {steps.map((s) => (
          <div className="start-step" key={s.n}>
            <span className="ss-num">{s.n}</span>
            <span className="ss-ico"><Icon name={s.icon} size={24} /></span>
            <div className="ss-body">
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <button className="btn ghost sm" onClick={s.run}>{s.cta} <Icon name="arrow" size={16} /></button>
            </div>
          </div>
        ))}
      </div>
      <div className="start-foot">
        <p>When you're ready, the <span className="link-ish" {...clickable(() => go("toolkit"))}>printable toolkit</span> and the <span className="link-ish" {...clickable(() => go("library"))}>library of trusted help</span> are there whenever you need them.</p>
      </div>
    </main>
  );
}

/* ---------- Site-wide search overlay ---------- */
function SearchOverlay({ onClose, jump, go }) {
  const [q, setQ] = useStateV("");
  useEffectV(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const index = useMemo(() => {
    const B = window.BLB;
    const out = [];
    B.UNDERSTANDING.forEach((a) => out.push({ cat: "Understanding", icon: "book", title: a.title, text: a.blurb + " " + a.body.join(" "), run: () => jump("understanding", a.id) }));
    B.CAREGIVER.forEach((a) => out.push({ cat: "Caregiver", icon: "heart", title: a.title, text: a.blurb + " " + a.body.join(" "), run: () => jump("caregiver", a.id) }));
    B.FAQ.forEach((f) => out.push({ cat: "Question", icon: "question", title: f.q, text: f.a + " " + f.tags.join(" "), snippet: f.a, run: () => go("faq") }));
    B.TOOLKIT.forEach((t) => out.push({ cat: "Toolkit", icon: t.icon, title: t.title, text: t.desc, run: () => go("toolkit") }));
    B.LIBRARY.forEach((l) => out.push({ cat: "Library", icon: "globe", title: l.name, text: l.note + " " + (l.meta || ""), href: l.url, run: () => { if (l.url) window.open(l.url, "_blank", "noopener"); else go("library"); } }));
    return out;
  }, []);

  const t = q.trim().toLowerCase();
  const results = t ? index.filter((it) => (it.title + " " + it.text).toLowerCase().includes(t)).slice(0, 24) : [];

  return (
    <div className="search-overlay" onClick={(e) => { if (e.target.classList.contains("search-overlay")) onClose(); }}>
      <div className="search-panel" role="dialog" aria-label="Search the site" aria-modal="true">
        <div className="search-bar">
          <Icon name="search" size={22} />
          <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search everything — questions, guides, toolkit, library…" aria-label="Search the site" />
          <button className="search-close" onClick={onClose} aria-label="Close search"><Icon name="close" size={22} /></button>
        </div>
        <div className="search-results">
          {!t && <p className="search-hint faint">Try “diagnosis”, “sleep”, “money”, “aggression”…</p>}
          {t && results.length === 0 && <p className="search-hint faint">No matches for “{q}”. Try a simpler word.</p>}
          {results.map((r, i) => (
            <button className="search-row" key={i} onClick={() => { r.run(); onClose(); }}>
              <span className="sr-ico"><Icon name={r.icon} size={20} /></span>
              <span className="sr-main">
                <span className="sr-title">{r.title}{r.href && <Icon name="external" size={14} />}</span>
                {r.snippet && <span className="sr-snip">{r.snippet}</span>}
              </span>
              <span className="sr-cat">{r.cat}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { SectionPage, TypesBox, WhyBehavioursBox, ArticleReader, FAQView, ToolkitView, PrintSheet, DisclaimerPage, LibraryView, AboutPage, StartHere, SearchOverlay });
