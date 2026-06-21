/* ============================================================
   icons.jsx — minimal line-art icons (single stroke, round caps)
   ============================================================ */

function Icon({ name, size = 22, sw = 1.8 }) {
  const common = {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: sw, strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  const P = {
    play:    <path d="M7 5l12 7-12 7z" />,
    pause:   <g><path d="M8 5v14" /><path d="M16 5v14" /></g>,
    search:  <g><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.6-3.6" /></g>,
    menu:    <g><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></g>,
    close:   <g><path d="M6 6l12 12" /><path d="M18 6L6 18" /></g>,
    arrow:   <g><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></g>,
    arrowL:  <g><path d="M19 12H5" /><path d="M11 6l-6 6 6 6" /></g>,
    print:   <g><path d="M7 9V4h10v5" /><path d="M7 18H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2" /><rect x="7" y="14" width="10" height="6" rx="1" /></g>,
    pill:    <g><rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(45 12 12)" /><path d="M8.5 8.5l7 7" /></g>,
    calendar:<g><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M4 9h16" /><path d="M8 3v4" /><path d="M16 3v4" /></g>,
    phone:   <path d="M5 4h3l1.6 4-2 1.4a11 11 0 0 0 5 5l1.4-2 4 1.6V19a2 2 0 0 1-2.2 2A16 16 0 0 1 4 6.2 2 2 0 0 1 5 4z" />,
    sun:     <g><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" /></g>,
    book:    <g><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" /><path d="M19 17H6a2 2 0 0 0-2 2" /></g>,
    heart:   <path d="M12 20s-7-4.6-9.3-9C1.2 8.3 2.6 5 6 5c2 0 3.2 1.3 4 2.6C10.8 6.3 12 5 14 5c3.4 0 4.8 3.3 3.3 6-2.3 4.4-9.3 9-5.3 9z" transform="translate(-1 0)" />,
    question:<g><circle cx="12" cy="12" r="9" /><path d="M9.2 9.3a2.8 2.8 0 0 1 5.4 1c0 1.8-2.6 2.2-2.6 4" /><path d="M12 17.5v.01" /></g>,
    toolbox: <g><rect x="3" y="8" width="18" height="11" rx="2" /><path d="M3 13h18" /><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></g>,
    download:<g><path d="M12 4v11" /><path d="M8 11l4 4 4-4" /><path d="M5 20h14" /></g>,
    check:   <path d="M5 12l4.5 4.5L19 7" />,
    spark:   <path d="M12 3l1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8z" />,
    user:    <g><circle cx="12" cy="8" r="4" /><path d="M5 20c0-3.9 3.1-6 7-6s7 2.1 7 6" /></g>,
    cross:   <g><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M12 8v8" /><path d="M8 12h8" /></g>,
    chart:   <g><path d="M4 4v16h16" /><path d="M8 14l3-3 3 2 4-5" /></g>,
    clipboard:<g><rect x="5" y="5" width="14" height="16" rx="2" /><path d="M9 5V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" /><path d="M9 11h6M9 15h4" /></g>,
    notes:   <g><path d="M5 4h14v16l-3-2-2 2-2-2-2 2-2-2-3 2z" /><path d="M9 9h6M9 13h4" /></g>,
    leaf:    <g><path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z" /><path d="M5 19c4-4 7-7 10-9" /></g>,
    walk:    <g><circle cx="13" cy="4" r="2" /><path d="M13 7l-2 5 3 3 1 5" /><path d="M11 12l-4 2-1 4" /><path d="M16 10l3 1" /></g>,
    bag:     <g><path d="M5 8h14l-1 12H6z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></g>,
    scroll:  <g><path d="M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7" /><path d="M7 4a2 2 0 0 0-2 2v1h4" /><path d="M9 9h7M9 13h7M9 17h4" /></g>,
    flask:   <g><path d="M9 3h6M10 3v6l-5.5 9.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-2.5L14 9V3" /><path d="M7.5 14h9" /></g>,
    megaphone:<g><path d="M4 10v4a1 1 0 0 0 1 1h2l8 4V5L7 9H5a1 1 0 0 0-1 1z" /><path d="M18 9a4 4 0 0 1 0 6" /></g>,
    external:<g><path d="M14 5h5v5" /><path d="M19 5l-8 8" /><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" /></g>,
    globe:   <g><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></g>,
    info:    <g><circle cx="12" cy="12" r="9" /><path d="M12 11v5" /><path d="M12 8v.01" /></g>,
    flag:    <g><path d="M6 21V4" /><path d="M6 5h11l-2 3 2 3H6" /></g>,
    mail:    <g><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M4 7l8 6 8-6" /></g>,
  };
  return <svg {...common}>{P[name] || null}</svg>;
}

window.Icon = Icon;

/* keyboard-accessible click helper: spread onto any non-button clickable
   element to make it focusable and operable with Enter / Space. */
function clickable(handler) {
  return {
    onClick: handler,
    onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") { e.preventDefault(); handler(e); }
    },
    role: "button",
    tabIndex: 0,
  };
}
window.clickable = clickable;
