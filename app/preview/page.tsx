export default function Preview() {
  const primary = "#1C5EFE";
  const secondary = "#EF476F";
  const dark = "#07050A";
  const grey60 = "#737394";
  const grey90 = "#D8D8E1";
  const grey100 = "#EFEFF3";
  const grey110 = "#F7F7F9";
  const light = "#FDFDFD";

  const btn = (bg: string, color: string, border?: string): React.CSSProperties => ({
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    height: 40, padding: "0 16px", borderRadius: 8, fontSize: 14, fontWeight: 500,
    cursor: "pointer", border: border ? `1px solid ${border}` : "none",
    background: bg, color, fontFamily: "Noto Sans, system-ui, sans-serif",
    transition: "all 150ms ease",
  });

  const inputStyle: React.CSSProperties = {
    width: "100%", height: 40, borderRadius: 8, border: `1px solid ${grey90}`,
    padding: "0 12px", fontSize: 14, fontFamily: "Noto Sans, system-ui, sans-serif",
    background: light, color: dark, outline: "none", boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 14, fontWeight: 500, color: dark,
    fontFamily: "Noto Sans, system-ui, sans-serif", marginBottom: 6, display: "block",
  };

  const hintStyle: React.CSSProperties = { fontSize: 12, color: grey60, marginTop: 4 };
  const errorStyle: React.CSSProperties = { fontSize: 12, color: secondary, marginTop: 4 };

  const sectionTitle: React.CSSProperties = {
    fontFamily: "Michroma, sans-serif", fontSize: 11, letterSpacing: "0.1em",
    textTransform: "uppercase" as const, color: grey60, marginBottom: 24,
    paddingBottom: 12, borderBottom: `1px solid ${grey100}`,
  };

  const section: React.CSSProperties = { marginBottom: 56 };
  const row: React.CSSProperties = { display: "flex", flexWrap: "wrap" as const, gap: 12, alignItems: "center", marginBottom: 16 };
  const subLabel: React.CSSProperties = { fontSize: 12, color: grey60, marginBottom: 12, marginTop: 8 };

  return (
    <main style={{ fontFamily: "Noto Sans, system-ui, sans-serif", maxWidth: 820, margin: "0 auto", padding: "60px 32px", background: "#fff", minHeight: "100vh" }}>

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600&family=Michroma&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ marginBottom: 56 }}>
        <h1 style={{ fontFamily: "Michroma, sans-serif", fontSize: 28, color: dark, margin: "0 0 8px" }}>Nyra UI</h1>
        <p style={{ color: grey60, fontSize: 15, margin: 0 }}>Design system Genero Enterprise — aperçu des composants</p>
      </div>

      {/* BUTTON */}
      <div style={section}>
        <p style={sectionTitle}>Button</p>

        <p style={subLabel}>Variantes</p>
        <div style={row}>
          <button style={btn(primary, light)}>Primary</button>
          <button style={btn(secondary, light)}>Secondary</button>
          <button style={btn("transparent", primary, primary)}>Ghost</button>
          <button style={btn("transparent", secondary, secondary)}>Danger</button>
        </div>

        <p style={subLabel}>Tailles</p>
        <div style={row}>
          <button style={{ ...btn(primary, light), height: 32, padding: "0 12px", fontSize: 13 }}>Small</button>
          <button style={btn(primary, light)}>Medium</button>
          <button style={{ ...btn(primary, light), height: 48, padding: "0 24px", fontSize: 15 }}>Large</button>
        </div>

        <p style={subLabel}>États</p>
        <div style={row}>
          <button style={{ ...btn(primary, light), opacity: 0.7 }}>⟳ Chargement</button>
          <button style={{ ...btn(primary, light), opacity: 0.4, cursor: "not-allowed" }} disabled>Désactivé</button>
        </div>
      </div>

      {/* INPUT */}
      <div style={section}>
        <p style={sectionTitle}>Input</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div>
            <span style={labelStyle}>Champ normal</span>
            <input style={inputStyle} placeholder="Tapez quelque chose..." />
          </div>
          <div>
            <span style={labelStyle}>Avec hint</span>
            <input style={inputStyle} placeholder="exemple@email.com" />
            <p style={hintStyle}>On ne partagera jamais votre email.</p>
          </div>
          <div>
            <span style={labelStyle}>Avec erreur</span>
            <input style={{ ...inputStyle, borderColor: secondary }} placeholder="Votre nom" />
            <p style={errorStyle}>Ce champ est requis.</p>
          </div>
          <div>
            <span style={{ ...labelStyle, opacity: 0.4 }}>Désactivé</span>
            <input style={{ ...inputStyle, opacity: 0.4, cursor: "not-allowed" }} placeholder="Non modifiable" disabled />
          </div>
        </div>
      </div>

      {/* SELECT */}
      <div style={section}>
        <p style={sectionTitle}>Select</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div>
            <span style={labelStyle}>Pays</span>
            <select style={{ ...inputStyle, paddingRight: 32 }}>
              <option>Choisir...</option>
              <option>France</option>
              <option>Belgique</option>
              <option>Suisse</option>
            </select>
          </div>
          <div>
            <span style={labelStyle}>Avec erreur</span>
            <select style={{ ...inputStyle, borderColor: secondary }}>
              <option>Choisir...</option>
              <option>Option A</option>
              <option>Option B</option>
            </select>
            <p style={errorStyle}>Sélection requise.</p>
          </div>
        </div>
      </div>

      {/* CHECKBOX */}
      <div style={section}>
        <p style={sectionTitle}>Checkbox</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { label: "Option par défaut", checked: false },
            { label: "Option cochée par défaut", checked: true },
          ].map(({ label, checked }) => (
            <label key={label} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontSize: 14, color: dark }}>
              <div style={{ width: 16, height: 16, borderRadius: 4, border: checked ? `2px solid ${primary}` : `2px solid ${grey90}`, background: checked ? primary : light, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {checked && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
              </div>
              {label}
            </label>
          ))}
          <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "not-allowed", fontSize: 14, color: dark, opacity: 0.4 }}>
            <div style={{ width: 16, height: 16, borderRadius: 4, border: `2px solid ${grey90}`, background: light, flexShrink: 0 }} />
            Option désactivée
          </label>
          <div>
            <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontSize: 14, color: dark }}>
              <div style={{ width: 16, height: 16, borderRadius: 4, border: `2px solid ${secondary}`, background: light, flexShrink: 0 }} />
              Avec erreur
            </label>
            <p style={{ ...errorStyle, marginLeft: 26 }}>Ce champ est requis.</p>
          </div>
        </div>
      </div>

      {/* COULEURS */}
      <div style={section}>
        <p style={sectionTitle}>Couleurs</p>

        {[
          { name: "Primary", colors: [["#F4F7FF","10"],["#E8EFFF","20"],["#CFDDFF","30"],["#A4BFFF","40"],["#82A6FE","50"],["#1C5EFE","60"],["#1545BB","70"],["#10358F","80"],["#0D2C79","90"],["#081C4C","100"],["#051130","110"]] },
          { name: "Secondary", colors: [["#FDEDF1","10"],["#FDE3E9","20"],["#FBD1DB","30"],["#F7A3B7","40"],["#F37593","50"],["#EF476F","60"],["#A93450","70"],["#7B273B","80"],["#642131","90"],["#35141C","100"],["#170B0E","110"]] },
          { name: "Grey", colors: [["#F7F7F9","110"],["#EFEFF3","100"],["#D8D8E1","90"],["#C8C8D5","80"],["#A9A9BD","70"],["#737394","60"],["#636388","50"],["#474761","40"],["#303041","30"],["#191921","20"],["#0D0D10","10"]] },
        ].map(({ name, colors }) => (
          <div key={name} style={{ marginBottom: 24 }}>
            <p style={{ fontSize: 12, color: grey60, marginBottom: 10 }}>{name}</p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const }}>
              {colors.map(([color, label]) => (
                <div key={label} style={{ textAlign: "center" as const }}>
                  <div style={{ width: 44, height: 44, borderRadius: 8, background: color, border: "1px solid rgba(0,0,0,0.06)" }} />
                  <p style={{ fontSize: 10, color: grey60, margin: "4px 0 0" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* TYPO */}
      <div style={section}>
        <p style={sectionTitle}>Typographie</p>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 20 }}>
          <div>
            <p style={{ fontSize: 11, color: grey60, marginBottom: 6 }}>Michroma — titres uniquement</p>
            <p style={{ fontFamily: "Michroma, sans-serif", fontSize: 28, color: dark, margin: 0 }}>The future is modular</p>
          </div>
          <div style={{ borderTop: `1px solid ${grey100}`, paddingTop: 20 }}>
            <p style={{ fontSize: 11, color: grey60, marginBottom: 12 }}>Noto Sans — UI & texte</p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
              <p style={{ fontSize: 24, fontWeight: 300, margin: 0, color: dark }}>Light — Heading XL</p>
              <p style={{ fontSize: 20, fontWeight: 400, margin: 0, color: dark }}>Regular — Heading L</p>
              <p style={{ fontSize: 16, fontWeight: 500, margin: 0, color: dark }}>Medium — Body</p>
              <p style={{ fontSize: 14, fontWeight: 600, margin: 0, color: dark }}>Semi Bold — Label</p>
              <p style={{ fontSize: 12, fontWeight: 400, margin: 0, color: grey60 }}>Regular — Caption / Hint</p>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
