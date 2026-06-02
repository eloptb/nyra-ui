"use client";
import { useState } from "react";

const tokens = {
  primary: "#1C5EFE",
  primary20: "#E8EFFF",
  primary30: "#CFDDFF",
  primary70: "#1545BB",
  secondary: "#EF476F",
  secondary20: "#FDE3E9",
  secondary70: "#A93450",
  dark: "#07050A",
  light: "#FDFDFD",
  grey40: "#474761",
  grey60: "#737394",
  grey80: "#C8C8D5",
  grey90: "#D8D8E1",
  grey100: "#EFEFF3",
  grey110: "#F7F7F9",
};

type Theme = "light" | "dark";

export default function Preview() {
  const [theme, setTheme] = useState<Theme>("light");
  const dark = theme === "dark";

  const bg = dark ? "#0D0D10" : "#ffffff";
  const bgSurface = dark ? "#191921" : tokens.grey110;
  const bgCard = dark ? "#191921" : "#ffffff";
  const text = dark ? tokens.light : tokens.dark;
  const textMuted = dark ? "#737394" : "#636388";
  const border = dark ? "#303041" : tokens.grey90;

  const btnBase: React.CSSProperties = {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    height: 36, padding: "0 16px", borderRadius: 8, fontSize: 14, fontWeight: 500,
    cursor: "pointer", border: "none", fontFamily: "Noto Sans, system-ui, sans-serif",
    transition: "all 150ms ease", whiteSpace: "nowrap",
  };

  const inputBase: React.CSSProperties = {
    height: 36, borderRadius: 8, border: `1px solid ${border}`,
    padding: "0 12px", fontSize: 14, fontFamily: "Noto Sans, system-ui, sans-serif",
    background: bgCard, color: text, outline: "none", width: "100%", boxSizing: "border-box",
  };

  const label: React.CSSProperties = {
    fontSize: 13, fontWeight: 500, color: text, marginBottom: 6, display: "block",
  };

  const hint: React.CSSProperties = { fontSize: 12, color: textMuted, marginTop: 4 };
  const error: React.CSSProperties = { fontSize: 12, color: tokens.secondary, marginTop: 4 };

  const card: React.CSSProperties = {
    background: bgCard, borderRadius: 12, border: `1px solid ${border}`,
    padding: "24px", marginBottom: 12,
  };

  const sectionHead: React.CSSProperties = {
    fontFamily: "Michroma, sans-serif", fontSize: 11, letterSpacing: "0.1em",
    textTransform: "uppercase", color: textMuted, marginBottom: 20,
    paddingBottom: 12, borderBottom: `1px solid ${border}`,
  };

  const row: React.CSSProperties = {
    display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center",
  };

  const sublabel: React.CSSProperties = {
    fontSize: 11, color: textMuted, marginBottom: 10, marginTop: 16,
    textTransform: "uppercase", letterSpacing: "0.06em",
  };

  return (
    <div style={{ background: bg, minHeight: "100vh", fontFamily: "Noto Sans, system-ui, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600&family=Michroma&display=swap" rel="stylesheet" />

      {/* Navbar */}
      <nav style={{ borderBottom: `1px solid ${border}`, padding: "0 32px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, background: bg, zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 6, background: `linear-gradient(135deg, ${tokens.primary}, ${tokens.secondary})` }} />
          <span style={{ fontFamily: "Michroma, sans-serif", fontSize: 14, color: text }}>Nyra UI</span>
          <span style={{ fontSize: 11, background: bgSurface, color: textMuted, padding: "2px 8px", borderRadius: 99, border: `1px solid ${border}` }}>v1.0</span>
        </div>
        <button
          onClick={() => setTheme(dark ? "light" : "dark")}
          style={{ ...btnBase, background: bgSurface, color: text, border: `1px solid ${border}`, height: 32, padding: "0 12px", fontSize: 12 }}
        >
          {dark ? "☀ Light" : "☾ Dark"}
        </button>
      </nav>

      <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", minHeight: "calc(100vh - 56px)" }}>

        {/* Sidebar */}
        <aside style={{ borderRight: `1px solid ${border}`, padding: "24px 16px", position: "sticky", top: 56, height: "calc(100vh - 56px)", overflowY: "auto" }}>
          <p style={{ fontSize: 11, color: textMuted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Composants</p>
          {["Button", "Input", "Select", "Checkbox", "Couleurs", "Typographie"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ display: "block", padding: "6px 10px", borderRadius: 6, fontSize: 14, color: textMuted, textDecoration: "none", marginBottom: 2 }}>
              {item}
            </a>
          ))}
        </aside>

        {/* Main */}
        <main style={{ padding: "32px 40px", maxWidth: 860 }}>

          {/* Button */}
          <section id="button" style={{ marginBottom: 48 }}>
            <p style={sectionHead}>Button</p>
            <div style={card}>
              <p style={sublabel}>Variantes</p>
              <div style={row}>
                <button style={{ ...btnBase, background: tokens.primary, color: tokens.light, boxShadow: `0 4px 12px rgba(28,94,254,0.25)` }}>Primary</button>
                <button style={{ ...btnBase, background: tokens.secondary, color: tokens.light, boxShadow: `0 4px 12px rgba(239,71,111,0.25)` }}>Secondary</button>
                <button style={{ ...btnBase, background: "transparent", color: tokens.primary, border: `1px solid ${tokens.primary}` }}>Ghost</button>
                <button style={{ ...btnBase, background: "transparent", color: tokens.secondary, border: `1px solid ${tokens.secondary}` }}>Danger</button>
              </div>

              <p style={sublabel}>Tailles</p>
              <div style={row}>
                <button style={{ ...btnBase, height: 30, padding: "0 10px", fontSize: 12, background: tokens.primary, color: tokens.light }}>Small</button>
                <button style={{ ...btnBase, background: tokens.primary, color: tokens.light }}>Medium</button>
                <button style={{ ...btnBase, height: 44, padding: "0 22px", fontSize: 15, background: tokens.primary, color: tokens.light }}>Large</button>
              </div>

              <p style={sublabel}>États</p>
              <div style={row}>
                <button style={{ ...btnBase, background: tokens.primary, color: tokens.light, opacity: 0.75 }}>⟳ Chargement</button>
                <button style={{ ...btnBase, background: tokens.primary, color: tokens.light, opacity: 0.35, cursor: "not-allowed" }} disabled>Désactivé</button>
              </div>
            </div>
          </section>

          {/* Input */}
          <section id="input" style={{ marginBottom: 48 }}>
            <p style={sectionHead}>Input</p>
            <div style={card}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div>
                  <span style={label}>Champ normal</span>
                  <input style={inputBase} placeholder="Tapez quelque chose..." />
                </div>
                <div>
                  <span style={label}>Avec hint</span>
                  <input style={inputBase} placeholder="exemple@email.com" />
                  <p style={hint}>On ne partagera jamais votre email.</p>
                </div>
                <div>
                  <span style={label}>Avec erreur</span>
                  <input style={{ ...inputBase, borderColor: tokens.secondary }} placeholder="Votre nom" />
                  <p style={error}>Ce champ est requis.</p>
                </div>
                <div>
                  <span style={{ ...label, opacity: 0.4 }}>Désactivé</span>
                  <input style={{ ...inputBase, opacity: 0.4, cursor: "not-allowed" }} placeholder="Non modifiable" disabled />
                </div>
              </div>
            </div>
          </section>

          {/* Select */}
          <section id="select" style={{ marginBottom: 48 }}>
            <p style={sectionHead}>Select</p>
            <div style={card}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div>
                  <span style={label}>Pays</span>
                  <select style={inputBase}>
                    <option>Choisir...</option>
                    <option>France</option>
                    <option>Belgique</option>
                    <option>Suisse</option>
                  </select>
                </div>
                <div>
                  <span style={label}>Avec erreur</span>
                  <select style={{ ...inputBase, borderColor: tokens.secondary }}>
                    <option>Choisir...</option>
                    <option>Option A</option>
                    <option>Option B</option>
                  </select>
                  <p style={error}>Sélection requise.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Checkbox */}
          <section id="checkbox" style={{ marginBottom: 48 }}>
            <p style={sectionHead}>Checkbox</p>
            <div style={card}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { label: "Option par défaut", checked: false },
                  { label: "Option cochée", checked: true },
                ].map(({ label: l, checked }) => (
                  <label key={l} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontSize: 14, color: text }}>
                    <div style={{ width: 16, height: 16, borderRadius: 4, border: checked ? `2px solid ${tokens.primary}` : `2px solid ${border}`, background: checked ? tokens.primary : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {checked && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                    </div>
                    {l}
                  </label>
                ))}
                <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "not-allowed", fontSize: 14, color: text, opacity: 0.4 }}>
                  <div style={{ width: 16, height: 16, borderRadius: 4, border: `2px solid ${border}`, flexShrink: 0 }} />
                  Option désactivée
                </label>
                <div>
                  <label style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: text }}>
                    <div style={{ width: 16, height: 16, borderRadius: 4, border: `2px solid ${tokens.secondary}`, flexShrink: 0 }} />
                    Avec erreur
                  </label>
                  <p style={{ ...error, marginLeft: 26 }}>Ce champ est requis.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Couleurs */}
          <section id="couleurs" style={{ marginBottom: 48 }}>
            <p style={sectionHead}>Couleurs</p>
            <div style={card}>
              {[
                { name: "Primary", colors: [["#F4F7FF","10"],["#E8EFFF","20"],["#CFDDFF","30"],["#A4BFFF","40"],["#82A6FE","50"],["#1C5EFE","60"],["#1545BB","70"],["#10358F","80"],["#0D2C79","90"],["#081C4C","100"],["#051130","110"]] },
                { name: "Secondary", colors: [["#FDEDF1","10"],["#FDE3E9","20"],["#FBD1DB","30"],["#F7A3B7","40"],["#F37593","50"],["#EF476F","60"],["#A93450","70"],["#7B273B","80"],["#642131","90"],["#35141C","100"],["#170B0E","110"]] },
                { name: "Grey", colors: [["#F7F7F9","110"],["#EFEFF3","100"],["#D8D8E1","90"],["#C8C8D5","80"],["#A9A9BD","70"],["#737394","60"],["#636388","50"],["#474761","40"],["#303041","30"],["#191921","20"],["#0D0D10","10"]] },
              ].map(({ name, colors }) => (
                <div key={name} style={{ marginBottom: 24 }}>
                  <p style={{ fontSize: 12, color: textMuted, marginBottom: 10 }}>{name}</p>
                  <div style={{ display: "flex", gap: 4 }}>
                    {colors.map(([color, lbl]) => (
                      <div key={lbl} style={{ flex: 1, textAlign: "center" }}>
                        <div style={{ height: 36, borderRadius: 6, background: color, border: `1px solid ${border}` }} />
                        <p style={{ fontSize: 10, color: textMuted, margin: "4px 0 0" }}>{lbl}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Typo */}
          <section id="typographie" style={{ marginBottom: 48 }}>
            <p style={sectionHead}>Typographie</p>
            <div style={card}>
              <div style={{ marginBottom: 24 }}>
                <p style={{ fontSize: 11, color: textMuted, marginBottom: 8 }}>Michroma — titres uniquement</p>
                <p style={{ fontFamily: "Michroma, sans-serif", fontSize: 26, color: text, margin: 0 }}>The future is modular.</p>
              </div>
              <div style={{ borderTop: `1px solid ${border}`, paddingTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                <p style={{ fontSize: 11, color: textMuted, marginBottom: 4 }}>Noto Sans — UI & texte</p>
                {[
                  { size: 24, weight: 300, label: "Light 24" },
                  { size: 20, weight: 400, label: "Regular 20" },
                  { size: 16, weight: 500, label: "Medium 16" },
                  { size: 14, weight: 600, label: "Semi Bold 14" },
                  { size: 12, weight: 400, label: "Caption 12" },
                ].map(({ size, weight, label: l }) => (
                  <div key={l} style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                    <span style={{ fontSize: 11, color: textMuted, width: 90, flexShrink: 0 }}>{l}</span>
                    <p style={{ fontSize: size, fontWeight: weight, color: text, margin: 0 }}>Genero Enterprise</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
