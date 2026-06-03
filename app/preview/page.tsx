"use client";
import { useState } from "react";
import { Button } from "@/registry/nyra/button/button";

type Page = "button" | "input" | "select" | "checkbox" | "couleurs" | "typographie";

type Theme = "light" | "dark" | "report-writer" | "four-js" | "genero-intelligence-light" | "genero-intelligence-dark";

const THEMES: { id: Theme; label: string; font: string; color: string }[] = [
  { id: "light",                      label: "GE Light",    font: "Noto Sans",  color: "#1C5EFE" },
  { id: "dark",                       label: "GE Dark",     font: "Noto Sans",  color: "#1C5EFE" },
  { id: "genero-intelligence-light",  label: "GI Light",    font: "Noto Sans",  color: "#21E0F4" },
  { id: "genero-intelligence-dark",   label: "GI Dark",     font: "Noto Sans",  color: "#21E0F4" },
  { id: "report-writer",              label: "Report Writer", font: "Raleway",  color: "#AA2B1D" },
  { id: "four-js",                    label: "Four Js",     font: "Open Sans",  color: "#08A4D3" },
];

const FONTS = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600&family=Michroma&family=Raleway:wght@300;400;500;600&family=Open+Sans:wght@300;400;500;600&display=swap');
`;

export default function Preview() {
  const [theme, setTheme] = useState<Theme>("light");
  const [page, setPage] = useState<Page>("button");

  return (
    <>
      <style>{FONTS}</style>
      <style>{`
        /* ---- TOKEN IMPORTS ---- */
        /* Shared base */
        :root, [data-theme] {
          --radius-sm: 4px; --radius-md: 8px; --radius-lg: 12px; --radius-full: 9999px;
          --text-xs: 0.75rem; --text-sm: 0.875rem; --text-base: 1rem;
          --transition-base: 150ms ease;
          --color-text-disabled: #A9A9BD;
        }

        /* ── GE Light ── */
        :root, [data-theme="light"] {
          --font-base: 'Noto Sans', system-ui, sans-serif;
          --color-bg-page: #FFFFFF; --color-bg-surface: #F7F7F9; --color-bg-raised: #FFFFFF;
          --color-text-primary: #07050A; --color-text-secondary: #474761; --color-text-muted: #737394; --color-text-on-primary: #FDFDFD;
          --color-interactive-default: #1C5EFE; --color-interactive-hover: #1545BB; --color-interactive-subtle: #E8EFFF; --color-interactive-muted: #CFDDFF;
          --color-accent-default: #EF476F; --color-border-default: #D8D8E1;
          --color-error: #FF3B2F;
          --shadow-sm: 0 1px 3px rgba(28,94,254,0.08); --shadow-md: 0 4px 12px rgba(28,94,254,0.14);
          --focus-ring-color: rgba(28,94,254,0.28); --focus-ring-width: 3px;
          --gradient-brand: linear-gradient(135deg, #1C5EFE, #EF476F);
          --primitive-primary-50: #82A6FE; --primitive-primary-70: #1545BB;
          /* Button tokens */
          --color-btn-bg: #1C5EFE; --color-btn-bg-hover: #123284; --color-btn-bg-pressed: #0B2165;
          --color-btn-bg-disabled: #D8D8E1; --color-btn-text: #FDFDFD;
          --color-btn-border-1: #82A6FE; --color-btn-border-2: #1545BB;
          --color-btn-shadow: rgba(28,94,254,0.24);
          --color-btn-outline-hover: rgba(28,94,254,0.08);
          --color-btn-outline-pressed: rgba(28,94,254,0.14);
          --color-text-disabled: #A9A9BD;
        }

        /* ── GE Dark ── */
        [data-theme="dark"] {
          --font-base: 'Noto Sans', system-ui, sans-serif;
          --color-bg-page: #07050A; --color-bg-surface: #0D0D10; --color-bg-raised: #191921;
          --color-text-primary: #FDFDFD; --color-text-secondary: #A9A9BD; --color-text-muted: #737394; --color-text-on-primary: #FDFDFD;
          --color-interactive-default: #1C5EFE; --color-interactive-hover: #82A6FE; --color-interactive-subtle: #081C4C; --color-interactive-muted: #0D2C79;
          --color-accent-default: #EF476F; --color-border-default: #303041;
          --color-error: #FF3B2F;
          --shadow-sm: 0 1px 3px rgba(0,0,0,0.3); --shadow-md: 0 4px 12px rgba(0,0,0,0.4);
          --focus-ring-color: rgba(28,94,254,0.40); --focus-ring-width: 3px;
          --gradient-brand: linear-gradient(135deg, #1C5EFE, #EF476F);
          --primitive-primary-50: #82A6FE; --primitive-primary-70: #A4BFFF;
          /* Button tokens */
          --color-btn-bg: #1C5EFE; --color-btn-bg-hover: #123284; --color-btn-bg-pressed: #0B2165;
          --color-btn-bg-disabled: #474761; --color-btn-text: #FDFDFD;
          --color-btn-border-1: #82A6FE; --color-btn-border-2: #A4BFFF;
          --color-btn-shadow: rgba(28,94,254,0.34);
          --color-btn-outline-hover: rgba(28,94,254,0.12);
          --color-btn-outline-pressed: rgba(28,94,254,0.20);
          --color-text-disabled: #474761;
        }

        /* ── Report Writer ── */
        [data-theme="report-writer"] {
          --font-base: 'Raleway', system-ui, sans-serif;
          --color-bg-page: #FFFFFF; --color-bg-surface: #FAFAFA; --color-bg-raised: #FFFFFF;
          --color-text-primary: #1B0806; --color-text-secondary: #55514D; --color-text-muted: #A39A93; --color-text-on-primary: #FFFFFF;
          --color-interactive-default: #AA2B1D; --color-interactive-hover: #792016; --color-interactive-subtle: #F6EAE9; --color-interactive-muted: #EDD2D0;
          --color-accent-default: #EC6A58; --color-border-default: #ECEAE8;
          --color-error: #FF3B2F;
          --shadow-sm: 0 1px 3px rgba(170,43,29,0.08); --shadow-md: 0 4px 12px rgba(170,43,29,0.14);
          --focus-ring-color: rgba(170,43,29,0.28); --focus-ring-width: 3px;
          --gradient-brand: linear-gradient(135deg, #AA2B1D, #EC6A58);
          --primitive-primary-50: #D08A83; --primitive-primary-70: #792016;
          /* Button tokens */
          --color-btn-bg: #AA2B1D; --color-btn-bg-hover: #5C1810; --color-btn-bg-pressed: #3D100A;
          --color-btn-bg-disabled: #D8D8E1; --color-btn-text: #FFFFFF;
          --color-btn-border-1: #D08A83; --color-btn-border-2: #792016;
          --color-btn-shadow: rgba(170,43,29,0.24);
          --color-btn-outline-hover: rgba(170,43,29,0.08);
          --color-btn-outline-pressed: rgba(170,43,29,0.14);
          --color-text-disabled: #CBC5C1;
        }

        /* ── Four Js ── */
        [data-theme="four-js"] {
          --font-base: 'Open Sans', system-ui, sans-serif;
          --color-bg-page: #FFFFFF; --color-bg-surface: #F4F4F4; --color-bg-raised: #FFFFFF;
          --color-text-primary: #001118; --color-text-secondary: #5A5B5B; --color-text-muted: #949696; --color-text-on-primary: #07050A;
          --color-interactive-default: #08A4D3; --color-interactive-hover: #0091BB; --color-interactive-subtle: #D3EFF8; --color-interactive-muted: #A7DDF1;
          --color-accent-default: #EC6A58; --color-border-default: #D3D4D4;
          --color-error: #FF3B2F;
          --shadow-sm: 0 1px 3px rgba(8,164,211,0.08); --shadow-md: 0 4px 12px rgba(8,164,211,0.14);
          --focus-ring-color: rgba(8,164,211,0.28); --focus-ring-width: 3px;
          --gradient-brand: linear-gradient(135deg, #08A4D3, #EC6A58);
          --primitive-primary-50: #25BAE1; --primitive-primary-70: #0091BB;
          /* Button tokens */
          --color-btn-bg: #08A4D3; --color-btn-bg-hover: #065E78; --color-btn-bg-pressed: #043E50;
          --color-btn-bg-disabled: #D3D4D4; --color-btn-text: #07050A;
          --color-btn-border-1: #25BAE1; --color-btn-border-2: #0091BB;
          --color-btn-shadow: rgba(8,164,211,0.24);
          --color-btn-outline-hover: rgba(8,164,211,0.08);
          --color-btn-outline-pressed: rgba(8,164,211,0.14);
          --color-text-disabled: #BEBFBF;
        }

        /* ── GI Light ── */
        [data-theme="genero-intelligence-light"] {
          --font-base: 'Noto Sans', system-ui, sans-serif;
          --color-bg-page: #FFFFFF; --color-bg-surface: #F7F7F9; --color-bg-raised: #FDFDFD;
          --color-text-primary: #07050A; --color-text-secondary: #474761; --color-text-muted: #737394; --color-text-on-primary: #FDFDFD;
          --color-interactive-default: #1C5EFE; --color-interactive-hover: #1545BB; --color-interactive-subtle: #E8EFFF; --color-interactive-muted: #CFDDFF;
          --color-accent-default: #21E0F4; --color-border-default: #D8D8E1;
          --color-error: #FF3B2F;
          --shadow-sm: 0 1px 3px rgba(28,94,254,0.08); --shadow-md: 0 4px 12px rgba(28,94,254,0.14);
          --focus-ring-color: rgba(28,94,254,0.28); --focus-ring-width: 3px;
          --gradient-brand: linear-gradient(135deg, #1C5EFE, #21E0F4);
          --primitive-primary-50: #82A6FE; --primitive-primary-70: #1545BB;
          /* Button tokens */
          --color-btn-bg: #1C5EFE; --color-btn-bg-hover: #123284; --color-btn-bg-pressed: #0B2165;
          --color-btn-bg-disabled: #D8D8E1; --color-btn-text: #FDFDFD;
          --color-btn-border-1: #82A6FE; --color-btn-border-2: #1545BB;
          --color-btn-shadow: rgba(28,94,254,0.24);
          --color-btn-outline-hover: rgba(28,94,254,0.08);
          --color-btn-outline-pressed: rgba(28,94,254,0.14);
          --color-text-disabled: #A9A9BD;
        }

        /* ── GI Dark ── */
        [data-theme="genero-intelligence-dark"] {
          --font-base: 'Noto Sans', system-ui, sans-serif;
          --color-bg-page: #07050A; --color-bg-surface: #0D0D10; --color-bg-raised: #191921;
          --color-text-primary: #FFFFFF; --color-text-secondary: #A9A9BD; --color-text-muted: #737394; --color-text-on-primary: #FDFDFD;
          --color-interactive-default: #1C5EFE; --color-interactive-hover: #82A6FE; --color-interactive-subtle: #081C4C; --color-interactive-muted: #0D2C79;
          --color-accent-default: #21E0F4; --color-border-default: #303041;
          --color-error: #FF3B2F;
          --shadow-sm: 0 1px 3px rgba(0,0,0,0.3); --shadow-md: 0 4px 12px rgba(0,0,0,0.4);
          --focus-ring-color: rgba(28,94,254,0.40); --focus-ring-width: 3px;
          --gradient-brand: linear-gradient(135deg, #1C5EFE, #21E0F4);
          --primitive-primary-50: #82A6FE; --primitive-primary-70: #A4BFFF;
          /* Button tokens */
          --color-btn-bg: #1C5EFE; --color-btn-bg-hover: #123284; --color-btn-bg-pressed: #0B2165;
          --color-btn-bg-disabled: #474761; --color-btn-text: #FDFDFD;
          --color-btn-border-1: #82A6FE; --color-btn-border-2: #A4BFFF;
          --color-btn-shadow: rgba(28,94,254,0.34);
          --color-btn-outline-hover: rgba(28,94,254,0.12);
          --color-btn-outline-pressed: rgba(28,94,254,0.20);
          --color-text-disabled: #474761;
        }
      `}</style>

      <div data-theme={theme} style={{ background: "var(--color-bg-page)", minHeight: "100vh", fontFamily: "var(--font-base)", transition: "background 200ms ease, color 200ms ease" }}>

        {/* NAVBAR */}
        <nav style={{ position: "sticky", top: 0, zIndex: 100, borderBottom: "1px solid var(--color-border-default)", background: "var(--color-bg-page)", padding: "0 32px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 28, height: 28, borderRadius: 6, background: "var(--gradient-brand)", flexShrink: 0 }} />
            <span style={{ fontFamily: "'Michroma', sans-serif", fontSize: 14, color: "var(--color-text-primary)" }}>Nyra UI</span>
            <span style={{ fontSize: 11, color: "var(--color-text-muted)", background: "var(--color-bg-surface)", padding: "2px 8px", borderRadius: 99, border: "1px solid var(--color-border-default)" }}>v1.0</span>
          </div>

          {/* THEME SWITCHER */}
          <div style={{ display: "flex", gap: 4, background: "var(--color-bg-surface)", padding: 4, borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border-default)" }}>
            {THEMES.map(t => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                style={{
                  padding: "5px 12px", borderRadius: "var(--radius-md)", border: "none",
                  fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "var(--font-base)",
                  background: theme === t.id ? "var(--color-bg-raised)" : "transparent",
                  color: theme === t.id ? "var(--color-text-primary)" : "var(--color-text-muted)",
                  boxShadow: theme === t.id ? "var(--shadow-sm)" : "none",
                  transition: "all var(--transition-base)",
                  display: "flex", alignItems: "center", gap: 6,
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: t.color, display: "inline-block", flexShrink: 0 }} />
                {t.label}
              </button>
            ))}
          </div>
        </nav>

        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr" }}>

          {/* SIDEBAR */}
          <aside style={{ borderRight: "1px solid var(--color-border-default)", padding: "28px 16px", position: "sticky", top: 56, height: "calc(100vh - 56px)", overflowY: "auto" }}>
            <p style={{ fontSize: 10, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px 8px" }}>Composants</p>
            {(["button", "input", "select", "checkbox", "couleurs", "typographie"] as Page[]).map(p => {
              const active = page === p;
              return (
                <button key={p} onClick={() => setPage(p)} style={{
                  display: "block", width: "100%", textAlign: "left",
                  padding: "7px 10px", borderRadius: "var(--radius-md)", fontSize: 14,
                  color: active ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                  background: active ? "var(--color-interactive-subtle, #E8EFFF)" : "transparent",
                  fontWeight: active ? 500 : 400,
                  border: "none", cursor: "pointer", marginBottom: 2,
                  fontFamily: "var(--font-base)",
                  textTransform: "capitalize",
                  transition: "all 120ms ease",
                }}>
                  {p === "couleurs" ? "Couleurs" : p === "typographie" ? "Typographie" : p.charAt(0).toUpperCase() + p.slice(1)}
                </button>
              );
            })}
          </aside>

          {/* CONTENT */}
          <main style={{ padding: "40px 48px", maxWidth: 880, overflowY: "auto", height: "calc(100vh - 56px)" }}>

            {/* ── BUTTON PAGE : Overview + détails ── */}
            {page === "button" && <section id="button" style={{ marginBottom: 56 }}>
              <h1 style={{ fontFamily: "'Michroma', sans-serif", fontSize: 18, color: "var(--color-text-primary)", margin: "0 0 4px" }}>Button</h1>
              <p style={{ fontSize: 13, color: "var(--color-text-muted)", margin: "0 0 32px" }}>Type: Default · Source Figma 133:4518</p>

              {/* ── OVERVIEW ── */}
            <section style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: "'Michroma', sans-serif", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid var(--color-border-default)" }}>Overview</h2>

              {/* Hero interactif */}
              <div style={{ background: "var(--color-bg-surface)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border-default)", padding: "48px 32px", display: "flex", flexDirection: "column", alignItems: "center", gap: 32, marginBottom: 24 }}>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontFamily: "'Michroma', sans-serif", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-muted)", margin: "0 0 8px" }}>Button · Default · M</p>
                  <p style={{ fontSize: 13, color: "var(--color-text-muted)", margin: 0 }}>Hover, click, focus avec Tab pour tester les états</p>
                </div>

                {/* Boutons interactifs — vrais composants avec CSS injection */}
                <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%", alignItems: "center" }}>

                  {/* Default */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 11, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Default</span>
                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                      <Button size="m" leftIcon={<span>+</span>}>Call to action</Button>
                      <Button variant="icon-primary" size="m" icon={<span>+</span>} aria-label="Ajouter" />
                    </div>
                  </div>

                  <div style={{ width: "100%", height: 1, background: "var(--color-border-default)" }} />

                  {/* Outline */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 11, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Outline</span>
                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                      <Button variant="outline" size="m" leftIcon={<span>+</span>}>Call to action</Button>
                      <Button variant="icon-outline" size="m" icon={<span>+</span>} aria-label="Ajouter" />
                    </div>
                  </div>
                </div>

                {/* Légende */}
                <div style={{ display: "flex", gap: 20, fontSize: 12, color: "var(--color-text-muted)", flexWrap: "wrap", justifyContent: "center" }}>
                  {["Default", "Hover", "Pressed", "Focus", "Disabled"].map(label => (
                    <span key={label}>{label}</span>
                  ))}
                </div>
              </div>

              {/* Disabled */}
              <div style={{ background: "var(--color-bg-raised)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border-default)", padding: "20px 28px", display: "flex", alignItems: "center", gap: 24 }}>
                <p style={{ fontSize: 11, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", margin: 0, flexShrink: 0 }}>Disabled</p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Button size="m" disabled leftIcon={<span>+</span>}>Call to action</Button>
                  <Button variant="icon-primary" size="m" disabled icon={<span>+</span>} aria-label="Ajouter" />
                  <Button variant="outline" size="m" disabled leftIcon={<span>+</span>}>Call to action</Button>
                  <Button variant="icon-outline" size="m" disabled icon={<span>+</span>} aria-label="Ajouter" />
                </div>
              </div>
            </section>

              {/* ── DÉTAILS ── */}
            <section style={{ marginBottom: 0 }}>
              <h2 style={{ fontFamily: "'Michroma', sans-serif", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid var(--color-border-default)" }}>Détails</h2>

              {(() => {
                const btn = (label: string, extraStyle: React.CSSProperties = {}) => (
                  <button style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                    padding: "0 16px", height: 40, borderRadius: 12, border: "1px solid transparent",
                    fontFamily: "var(--font-base)", fontWeight: 500, fontSize: 14, cursor: "pointer",
                    background: `linear-gradient(var(--color-btn-bg,#1C5EFE),var(--color-btn-bg,#1C5EFE)) padding-box, linear-gradient(135deg,var(--color-btn-border-1,#82A6FE) 0%,var(--color-btn-border-2,#1545BB) 50%,var(--color-btn-border-1,#82A6FE) 100%) border-box`,
                    color: "var(--color-btn-text,#FDFDFD)",
                    boxShadow: "0 7px 18px var(--color-btn-shadow,rgba(28,94,254,0.24)), inset 0 2px 4px rgba(255,255,255,0.27), 0 2px 4px rgba(0,0,0,0.25)",
                    ...extraStyle,
                  }}>
                    <span>+</span>{label}
                  </button>
                );

                return (
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

                    {/* Tailles */}
                    <div style={{ background: "var(--color-bg-raised)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border-default)", padding: 24 }}>
                      <p style={{ fontSize: 11, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 16px" }}>Tailles</p>
                      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                        {[
                          { label: "XS", h: 24, px: 8,  fs: 12, r: 8  },
                          { label: "S",  h: 32, px: 12, fs: 14, r: 8  },
                          { label: "M",  h: 40, px: 16, fs: 16, r: 12 },
                          { label: "L",  h: 54, px: 24, fs: 16, r: 12 },
                        ].map(({ label, h, px, fs, r }) => (
                          <button key={label} style={{
                            display: "inline-flex", alignItems: "center", gap: 6,
                            height: h, padding: `0 ${px}px`, borderRadius: r,
                            border: "1px solid transparent", fontFamily: "var(--font-base)", fontWeight: 500, fontSize: fs, cursor: "pointer",
                            background: `linear-gradient(var(--color-btn-bg,#1C5EFE),var(--color-btn-bg,#1C5EFE)) padding-box, linear-gradient(135deg,var(--color-btn-border-1,#82A6FE) 0%,var(--color-btn-border-2,#1545BB) 50%,var(--color-btn-border-1,#82A6FE) 100%) border-box`,
                            color: "var(--color-btn-text,#FDFDFD)",
                            boxShadow: "0 7px 18px var(--color-btn-shadow,rgba(28,94,254,0.24)), inset 0 2px 4px rgba(255,255,255,0.27), 0 2px 4px rgba(0,0,0,0.25)",
                          }}>
                            + {label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* États */}
                    <div style={{ background: "var(--color-bg-raised)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border-default)", padding: 24 }}>
                      <p style={{ fontSize: 11, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 16px" }}>États</p>
                      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                        {btn("Default")}
                        {btn("Hover",   { background: `linear-gradient(var(--color-btn-bg-hover,#123284),var(--color-btn-bg-hover,#123284)) padding-box, linear-gradient(135deg,var(--color-btn-border-1,#82A6FE) 0%,var(--color-btn-border-2,#1545BB) 50%,var(--color-btn-border-1,#82A6FE) 100%) border-box` })}
                        {btn("Pressed", { background: `linear-gradient(var(--color-btn-bg-pressed,#0B2165),var(--color-btn-bg-pressed,#0B2165)) padding-box, linear-gradient(135deg,var(--color-btn-border-1,#82A6FE) 0%,var(--color-btn-border-2,#1545BB) 50%,var(--color-btn-border-1,#82A6FE) 100%) border-box`, transform: "translateY(1px)" })}
                        {btn("Focus",   { outline: "3px solid var(--focus-ring-color,rgba(28,94,254,0.4))", outlineOffset: 2 } as any)}
                        <button disabled style={{
                          display: "inline-flex", alignItems: "center", gap: 8, padding: "0 16px", height: 40, borderRadius: 12, border: "1px solid transparent",
                          fontFamily: "var(--font-base)", fontWeight: 500, fontSize: 14, cursor: "not-allowed",
                          background: `linear-gradient(var(--color-btn-bg-disabled,#D8D8E1),var(--color-btn-bg-disabled,#D8D8E1)) padding-box, linear-gradient(var(--color-btn-bg-disabled,#D8D8E1),var(--color-btn-bg-disabled,#D8D8E1)) border-box`,
                          color: "var(--color-text-disabled,#A9A9BD)", opacity: 0.4, boxShadow: "none",
                        }}>+ Disabled</button>
                      </div>
                    </div>

                    {/* Icon only */}
                    <div style={{ background: "var(--color-bg-raised)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border-default)", padding: 24 }}>
                      <p style={{ fontSize: 11, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 16px" }}>Icon only</p>
                      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                        {[
                          { size: 24, fs: 14, r: 8,  label: "XS" },
                          { size: 32, fs: 16, r: 8,  label: "S"  },
                          { size: 40, fs: 18, r: 12, label: "M"  },
                          { size: 54, fs: 20, r: 12, label: "L"  },
                        ].map(({ size, fs, r, label }) => (
                          <button key={label} title={label} style={{
                            width: size, height: size, padding: 0, borderRadius: r,
                            border: "1px solid transparent", fontFamily: "var(--font-base)", fontSize: fs, cursor: "pointer",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            background: `linear-gradient(var(--color-btn-bg,#1C5EFE),var(--color-btn-bg,#1C5EFE)) padding-box, linear-gradient(135deg,var(--color-btn-border-1,#82A6FE) 0%,var(--color-btn-border-2,#1545BB) 50%,var(--color-btn-border-1,#82A6FE) 100%) border-box`,
                            color: "var(--color-btn-text,#FDFDFD)",
                            boxShadow: "0 7px 18px var(--color-btn-shadow,rgba(28,94,254,0.24)), inset 0 2px 4px rgba(255,255,255,0.27), 0 2px 4px rgba(0,0,0,0.25)",
                          }}>+</button>
                        ))}
                      </div>
                    </div>

                  </div>
                );
              })()}
            </section>
            </section>}

            {/* ── INPUT PAGE ── */}
            {page === "input" && <section style={{ marginBottom: 56 }}>
              <h1 style={{ fontFamily: "'Michroma', sans-serif", fontSize: 18, color: "var(--color-text-primary)", margin: "0 0 32px" }}>Input</h1>
              <h2 style={{ fontFamily: "'Michroma', sans-serif", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid var(--color-border-default)" }}>États & variantes</h2>
              <div style={{ background: "var(--color-bg-raised)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border-default)", padding: 24 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  {[
                    { label: "Champ normal",  placeholder: "Tapez quelque chose...", hint: null, error: null },
                    { label: "Avec hint",      placeholder: "exemple@email.com",     hint: "On ne partagera jamais votre email.", error: null },
                    { label: "Avec erreur",    placeholder: "Votre nom",             hint: null, error: "Ce champ est requis." },
                    { label: "Désactivé",      placeholder: "Non modifiable",        hint: null, error: null, disabled: true },
                  ].map((field, i) => (
                    <div key={i}>
                      <label style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-primary)", display: "block", marginBottom: 6, fontFamily: "var(--font-base)", opacity: (field as any).disabled ? 0.4 : 1 }}>{field.label}</label>
                      <input
                        placeholder={field.placeholder}
                        disabled={(field as any).disabled}
                        style={{ width: "100%", height: 36, borderRadius: "var(--radius-md)", border: `1px solid ${field.error ? "var(--color-border-error)" : "var(--color-border-default)"}`, padding: "0 12px", fontSize: 14, fontFamily: "var(--font-base)", background: "var(--color-bg-raised)", color: "var(--color-text-primary)", outline: "none", boxSizing: "border-box", opacity: (field as any).disabled ? 0.4 : 1 }}
                      />
                      {field.error && <p style={{ fontSize: 12, color: "var(--color-accent-default)", margin: "4px 0 0", fontFamily: "var(--font-base)" }}>{field.error}</p>}
                      {field.hint && <p style={{ fontSize: 12, color: "var(--color-text-muted)", margin: "4px 0 0", fontFamily: "var(--font-base)" }}>{field.hint}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </section>}

            {/* ── SELECT PAGE ── */}
            {page === "select" && <section style={{ marginBottom: 56 }}>
              <h1 style={{ fontFamily: "'Michroma', sans-serif", fontSize: 18, color: "var(--color-text-primary)", margin: "0 0 32px" }}>Select</h1>
              <h2 style={{ fontFamily: "'Michroma', sans-serif", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid var(--color-border-default)" }}>États & variantes</h2>
              <div style={{ background: "var(--color-bg-raised)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border-default)", padding: 24 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-primary)", display: "block", marginBottom: 6, fontFamily: "var(--font-base)" }}>Pays</label>
                    <div style={{ position: "relative" }}>
                      <select style={{ width: "100%", height: 36, appearance: "none", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border-default)", padding: "0 32px 0 12px", fontSize: 14, fontFamily: "var(--font-base)", background: "var(--color-bg-raised)", color: "var(--color-text-primary)", outline: "none" }}>
                        <option>Choisir...</option><option>France</option><option>Belgique</option><option>Suisse</option>
                      </select>
                      <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", color: "var(--color-text-muted)", pointerEvents: "none" }}>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-primary)", display: "block", marginBottom: 6, fontFamily: "var(--font-base)" }}>Avec erreur</label>
                    <div style={{ position: "relative" }}>
                      <select style={{ width: "100%", height: 36, appearance: "none", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border-error)", padding: "0 32px 0 12px", fontSize: 14, fontFamily: "var(--font-base)", background: "var(--color-bg-raised)", color: "var(--color-text-primary)", outline: "none" }}>
                        <option>Choisir...</option><option>Option A</option><option>Option B</option>
                      </select>
                      <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", color: "var(--color-text-muted)", pointerEvents: "none" }}>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                    </div>
                    <p style={{ fontSize: 12, color: "var(--color-accent-default)", margin: "4px 0 0", fontFamily: "var(--font-base)" }}>Sélection requise.</p>
                  </div>
                </div>
              </div>
            </section>}

            {/* ── CHECKBOX PAGE ── */}
            {page === "checkbox" && <section style={{ marginBottom: 56 }}>
              <h1 style={{ fontFamily: "'Michroma', sans-serif", fontSize: 18, color: "var(--color-text-primary)", margin: "0 0 32px" }}>Checkbox</h1>
              <h2 style={{ fontFamily: "'Michroma', sans-serif", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid var(--color-border-default)" }}>États & variantes</h2>
              <div style={{ background: "var(--color-bg-raised)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border-default)", padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { label: "Option par défaut",  checked: false, error: false, disabled: false },
                  { label: "Option cochée",       checked: true,  error: false, disabled: false },
                  { label: "Option désactivée",   checked: false, error: false, disabled: true },
                  { label: "Avec erreur",         checked: false, error: true,  disabled: false },
                ].map(({ label, checked, error, disabled }, i) => (
                  <div key={i}>
                    <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.4 : 1 }}>
                      <div style={{ width: 16, height: 16, borderRadius: 4, border: `2px solid ${error ? "var(--color-border-error)" : checked ? "var(--color-interactive-default)" : "var(--color-border-default)"}`, background: checked ? "var(--color-interactive-default)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {checked && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                      </div>
                      <span style={{ fontSize: 14, color: "var(--color-text-primary)", fontFamily: "var(--font-base)" }}>{label}</span>
                    </label>
                    {error && <p style={{ fontSize: 12, color: "var(--color-accent-default)", margin: "4px 0 0 26px", fontFamily: "var(--font-base)" }}>Ce champ est requis.</p>}
                  </div>
                ))}
              </div>
            </section>}

            {/* ── COULEURS PAGE ── */}
            {page === "couleurs" && <section style={{ marginBottom: 56 }}>
              <h1 style={{ fontFamily: "'Michroma', sans-serif", fontSize: 18, color: "var(--color-text-primary)", margin: "0 0 32px" }}>Couleurs</h1>
              <h2 style={{ fontFamily: "'Michroma', sans-serif", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid var(--color-border-default)" }}>Palette</h2>
              <div style={{ background: "var(--color-bg-raised)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border-default)", padding: 24 }}>
                {THEMES.find(t => t.id === theme) && (() => {
                  const palettes: Record<Theme, { primary: string[]; secondary: string[]; grey: string[] }> = {
                    "light":                     { primary: ["#F4F7FF","#E8EFFF","#CFDDFF","#A4BFFF","#82A6FE","#1C5EFE","#1545BB","#10358F","#0D2C79","#081C4C","#051130"], secondary: ["#FDEDF1","#FDE3E9","#FBD1DB","#F7A3B7","#F37593","#EF476F","#A93450","#7B273B","#642131","#35141C","#170B0E"], grey: ["#F7F7F9","#EFEFF3","#D8D8E1","#C8C8D5","#A9A9BD","#737394","#636388","#474761","#303041","#191921","#0D0D10"] },
                    "dark":                      { primary: ["#F4F7FF","#E8EFFF","#CFDDFF","#A4BFFF","#82A6FE","#1C5EFE","#1545BB","#10358F","#0D2C79","#081C4C","#051130"], secondary: ["#FFFFFF","#FDE3E9","#FBD1DB","#F7A3B7","#F37593","#EF476F","#A93450","#7B273B","#642131","#35141C","#170B0E"], grey: ["#F7F7F9","#EFEFF3","#D8D8E1","#C8C8D5","#A9A9BD","#737394","#636388","#474761","#303041","#191921","#0D0D10"] },
                    "genero-intelligence-light":  { primary: ["#F4F7FF","#E8EFFF","#CFDDFF","#A4BFFF","#82A6FE","#1C5EFE","#1545BB","#10358F","#0D2C79","#081C4C","#051130"], secondary: ["#F0FEFF","#DDFCFE","#B8F6FC","#7EEEF8","#4DE8F6","#21E0F4","#17A8B8","#0F7A87","#085663","#04333B","#021C22"], grey: ["#F7F7F9","#EFEFF3","#D8D8E1","#C8C8D5","#A9A9BD","#737394","#636388","#474761","#303041","#191921","#0D0D10"] },
                    "genero-intelligence-dark":   { primary: ["#F4F7FF","#E8EFFF","#CFDDFF","#A4BFFF","#82A6FE","#1C5EFE","#1545BB","#10358F","#0D2C79","#081C4C","#051130"], secondary: ["#F0FEFF","#DDFCFE","#B8F6FC","#7EEEF8","#4DE8F6","#21E0F4","#17A8B8","#0F7A87","#085663","#04333B","#021C22"], grey: ["#F7F7F9","#EFEFF3","#D8D8E1","#C8C8D5","#A9A9BD","#737394","#636388","#474761","#303041","#191921","#0D0D10"] },
                    "report-writer":              { primary: ["#FBF4F4","#F6EAE9","#EDD2D0","#DDAAA5","#D08A83","#AA2B1D","#792016","#591912","#481510","#280E0B","#1B0806"], secondary: ["#FEF9F7","#FDF2EE","#FBE4DC","#F7CABC","#FAB7A5","#EC6A58","#A74F40","#7A4030","#633227","#351A17","#351A17"], grey: ["#FAFAFA","#F6F5F4","#ECEAE8","#DAD7D4","#CBC5C1","#A39A93","#746E69","#55514D","#45423F","#232323","#0D0D10"] },
                    "four-js":                    { primary: ["#ECF6FB","#D3EFF8","#A7DDF1","#74CBE9","#25BAE1","#08A4D3","#0091BB","#006785","#003E53","#001B25","#001118"], secondary: ["#FEF9F7","#FDF2EE","#FBE4DC","#F7CABC","#FAB7A5","#EC6A58","#A74F40","#7A4030","#633227","#351A17","#351A17"], grey: ["#F4F4F4","#DDDEDE","#D3D4D4","#BEBFBF","#A9AAAA","#949696","#808282","#5A5B5B","#363737","#161616","#0D0D0D"] },
                  };
                  const p = palettes[theme];
                  const labels = ["10","20","30","40","50","60","70","80","90","100","110"];
                  return (
                    <>
                      {[{ name: "Primary", colors: p.primary }, { name: "Secondary", colors: p.secondary }, { name: "Grey", colors: p.grey }].map(({ name, colors }) => (
                        <div key={name} style={{ marginBottom: 20 }}>
                          <p style={{ fontSize: 12, color: "var(--color-text-muted)", marginBottom: 8, fontFamily: "var(--font-base)" }}>{name}</p>
                          <div style={{ display: "flex", gap: 4 }}>
                            {colors.map((c, i) => (
                              <div key={i} style={{ flex: 1, textAlign: "center" }}>
                                <div style={{ height: 32, borderRadius: 6, background: c, border: "1px solid rgba(0,0,0,0.06)" }} />
                                <p style={{ fontSize: 10, color: "var(--color-text-muted)", margin: "4px 0 0", fontFamily: "var(--font-base)" }}>{labels[i]}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </>
                  );
                })()}
              </div>
            </section>}

            {/* ── TYPOGRAPHIE PAGE ── */}
            {page === "typographie" && <section style={{ marginBottom: 56 }}>
              <h1 style={{ fontFamily: "'Michroma', sans-serif", fontSize: 18, color: "var(--color-text-primary)", margin: "0 0 32px" }}>Typographie</h1>
              <h2 style={{ fontFamily: "'Michroma', sans-serif", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid var(--color-border-default)" }}>Styles</h2>
              <div style={{ background: "var(--color-bg-raised)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border-default)", padding: 24 }}>
                <div style={{ marginBottom: 24 }}>
                  <p style={{ fontSize: 11, color: "var(--color-text-muted)", marginBottom: 8, fontFamily: "var(--font-base)" }}>Michroma — titres marketing uniquement</p>
                  <p style={{ fontFamily: "'Michroma', sans-serif", fontSize: 26, color: "var(--color-text-primary)", margin: 0 }}>The future is modular.</p>
                </div>
                <div style={{ borderTop: "1px solid var(--color-border-default)", paddingTop: 20 }}>
                  <p style={{ fontSize: 11, color: "var(--color-text-muted)", marginBottom: 16, fontFamily: "var(--font-base)" }}>
                    {THEMES.find(t => t.id === theme)?.font} — UI & texte
                  </p>
                  {[
                    { size: 34, weight: 300, token: "heading-03" },
                    { size: 28, weight: 300, token: "heading-02" },
                    { size: 20, weight: 300, token: "heading-01" },
                    { size: 16, weight: 600, token: "title-medium" },
                    { size: 16, weight: 300, token: "body-medium" },
                    { size: 14, weight: 300, token: "body-small" },
                    { size: 12, weight: 400, token: "caption" },
                  ].map(({ size, weight, token }) => (
                    <div key={token} style={{ display: "flex", alignItems: "baseline", gap: 20, marginBottom: 10 }}>
                      <span style={{ fontSize: 11, color: "var(--color-text-muted)", width: 100, flexShrink: 0, fontFamily: "var(--font-base)" }}>{token}</span>
                      <p style={{ fontSize: size, fontWeight: weight, color: "var(--color-text-primary)", margin: 0, fontFamily: "var(--font-base)" }}>Genero Enterprise</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>}

          </main>
        </div>
      </div>
    </>
  );
}
