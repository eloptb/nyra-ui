# Select — Nyra UI

## Installation

```bash
npx shadcn@latest add https://nyra-ui.vercel.app/r/select.json
```

## Import

```tsx
import { Select } from "@/components/ui/select"
```

## Utilisation

```tsx
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
  error="Sélection requise."
  options={[...]}
/>
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `options` | `{ value: string; label: string; disabled?: boolean }[]` | **requis** | Liste des options |
| `placeholder` | `string` | — | Option vide affichée en premier |
| `label` | `string` | — | Label au-dessus |
| `hint` | `string` | — | Texte d'aide |
| `error` | `string` | — | Message d'erreur |
| `size` | `sm` \| `md` \| `lg` | `md` | Taille |
