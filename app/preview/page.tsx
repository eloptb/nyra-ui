import { Button } from "@/registry/nyra/button/button";
import { Input } from "@/registry/nyra/input/input";
import { Select } from "@/registry/nyra/select/select";
import { Checkbox } from "@/registry/nyra/checkbox/checkbox";
import { Label } from "@/registry/nyra/label/label";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "3rem" }}>
      <h2 style={{ fontFamily: "Michroma, sans-serif", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: "#737394", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid #EFEFF3" }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", marginBottom: "1rem" }}>
      {children}
    </div>
  );
}

export default function Preview() {
  return (
    <main style={{ fontFamily: "Noto Sans, system-ui, sans-serif", maxWidth: 800, margin: "0 auto", padding: "60px 32px" }}>

      {/* Header */}
      <div style={{ marginBottom: "4rem" }}>
        <h1 style={{ fontFamily: "Michroma, sans-serif", fontSize: 28, color: "#07050A", marginBottom: 8 }}>
          Nyra UI
        </h1>
        <p style={{ color: "#737394", fontSize: 15 }}>
          Design system Genero Enterprise — aperçu des composants
        </p>
      </div>

      {/* Button */}
      <Section title="Button">
        <p style={{ fontSize: 13, color: "#737394", marginBottom: "1rem" }}>Variantes</p>
        <Row>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </Row>

        <p style={{ fontSize: 13, color: "#737394", margin: "1.5rem 0 1rem" }}>Tailles</p>
        <Row>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </Row>

        <p style={{ fontSize: 13, color: "#737394", margin: "1.5rem 0 1rem" }}>États</p>
        <Row>
          <Button loading>Chargement</Button>
          <Button disabled>Désactivé</Button>
        </Row>
      </Section>

      {/* Input */}
      <Section title="Input">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          <Input label="Champ normal" placeholder="Tapez quelque chose..." />
          <Input label="Avec hint" placeholder="exemple@email.com" hint="On ne partagera jamais votre email." />
          <Input label="Avec erreur" placeholder="Votre nom" error="Ce champ est requis." />
          <Input label="Désactivé" placeholder="Non modifiable" disabled />
        </div>
      </Section>

      {/* Select */}
      <Section title="Select">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          <Select
            label="Pays"
            placeholder="Choisir..."
            options={[
              { value: "fr", label: "France" },
              { value: "be", label: "Belgique" },
              { value: "ch", label: "Suisse" },
            ]}
          />
          <Select
            label="Avec erreur"
            placeholder="Choisir..."
            error="Sélection requise."
            options={[
              { value: "a", label: "Option A" },
              { value: "b", label: "Option B" },
            ]}
          />
        </div>
      </Section>

      {/* Checkbox */}
      <Section title="Checkbox">
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Checkbox label="Option par défaut" />
          <Checkbox label="Option cochée par défaut" defaultChecked />
          <Checkbox label="Option désactivée" disabled />
          <Checkbox label="Avec erreur" error="Ce champ est requis." />
          <Checkbox label="Avec hint" hint="Information complémentaire." />
        </div>
      </Section>

      {/* Label */}
      <Section title="Label">
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Label>Label simple</Label>
          <Label required>Label requis</Label>
        </div>
      </Section>

      {/* Colors */}
      <Section title="Couleurs">
        <p style={{ fontSize: 13, color: "#737394", marginBottom: "1rem" }}>Primary</p>
        <div style={{ display: "flex", gap: 6, marginBottom: "1.5rem", flexWrap: "wrap" }}>
          {[["#F4F7FF","10"],["#E8EFFF","20"],["#CFDDFF","30"],["#A4BFFF","40"],["#82A6FE","50"],["#1C5EFE","60"],["#1545BB","70"],["#10358F","80"],["#0D2C79","90"],["#081C4C","100"],["#051130","110"]].map(([color, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ width: 44, height: 44, borderRadius: 8, background: color, border: "1px solid rgba(0,0,0,0.06)" }} />
              <p style={{ fontSize: 10, color: "#737394", marginTop: 4 }}>{label}</p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 13, color: "#737394", marginBottom: "1rem" }}>Secondary</p>
        <div style={{ display: "flex", gap: 6, marginBottom: "1.5rem", flexWrap: "wrap" }}>
          {[["#FDEDF1","10"],["#FDE3E9","20"],["#FBD1DB","30"],["#F7A3B7","40"],["#F37593","50"],["#EF476F","60"],["#A93450","70"],["#7B273B","80"],["#642131","90"],["#35141C","100"],["#170B0E","110"]].map(([color, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ width: 44, height: 44, borderRadius: 8, background: color, border: "1px solid rgba(0,0,0,0.06)" }} />
              <p style={{ fontSize: 10, color: "#737394", marginTop: 4 }}>{label}</p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 13, color: "#737394", marginBottom: "1rem" }}>Grey</p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {[["#F7F7F9","110"],["#EFEFF3","100"],["#D8D8E1","90"],["#C8C8D5","80"],["#A9A9BD","70"],["#737394","60"],["#636388","50"],["#474761","40"],["#303041","30"],["#191921","20"],["#0D0D10","10"]].map(([color, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ width: 44, height: 44, borderRadius: 8, background: color, border: "1px solid rgba(0,0,0,0.06)" }} />
              <p style={{ fontSize: 10, color: "#737394", marginTop: 4 }}>{label}</p>
            </div>
          ))}
        </div>
      </Section>

    </main>
  );
}
