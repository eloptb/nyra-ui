export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", maxWidth: 640, margin: "80px auto", padding: "0 24px" }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>Nyra UI</h1>
      <p style={{ color: "#636388", marginBottom: 32 }}>
        Design system Genero Enterprise — composants React + Tailwind CSS.
      </p>

      <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Installation via CLI</h2>

      <p style={{ marginBottom: 8, color: "#303041" }}>Button</p>
      <pre style={{ background: "#F7F7F9", padding: "12px 16px", borderRadius: 8, fontSize: 13, overflowX: "auto" }}>
        npx shadcn@latest add {process.env.NEXT_PUBLIC_BASE_URL ?? "https://nyra-ui.vercel.app"}/r/button.json
      </pre>

      <p style={{ marginTop: 16, marginBottom: 8, color: "#303041" }}>Input</p>
      <pre style={{ background: "#F7F7F9", padding: "12px 16px", borderRadius: 8, fontSize: 13, overflowX: "auto" }}>
        npx shadcn@latest add {process.env.NEXT_PUBLIC_BASE_URL ?? "https://nyra-ui.vercel.app"}/r/input.json
      </pre>

      <p style={{ marginTop: 16, marginBottom: 8, color: "#303041" }}>Select</p>
      <pre style={{ background: "#F7F7F9", padding: "12px 16px", borderRadius: 8, fontSize: 13, overflowX: "auto" }}>
        npx shadcn@latest add {process.env.NEXT_PUBLIC_BASE_URL ?? "https://nyra-ui.vercel.app"}/r/select.json
      </pre>

      <p style={{ marginTop: 16, marginBottom: 8, color: "#303041" }}>Checkbox</p>
      <pre style={{ background: "#F7F7F9", padding: "12px 16px", borderRadius: 8, fontSize: 13, overflowX: "auto" }}>
        npx shadcn@latest add {process.env.NEXT_PUBLIC_BASE_URL ?? "https://nyra-ui.vercel.app"}/r/checkbox.json
      </pre>

      <p style={{ marginTop: 16, marginBottom: 8, color: "#303041" }}>Design Tokens (CSS)</p>
      <pre style={{ background: "#F7F7F9", padding: "12px 16px", borderRadius: 8, fontSize: 13, overflowX: "auto" }}>
        npx shadcn@latest add {process.env.NEXT_PUBLIC_BASE_URL ?? "https://nyra-ui.vercel.app"}/r/tokens.json
      </pre>
    </main>
  );
}
