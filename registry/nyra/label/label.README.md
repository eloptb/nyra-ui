# Label — Nyra UI

## Installation

```bash
npx shadcn@latest add https://nyra-ui.vercel.app/r/label.json
```

## Import

```tsx
import { Label } from "@/components/ui/label"
```

## Utilisation

```tsx
<Label htmlFor="email">Adresse e-mail</Label>
<Label htmlFor="nom" required>Nom complet</Label>
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `required` | `boolean` | `false` | Affiche une astérisque rouge `*` |
| `htmlFor` | `string` | — | ID du champ associé (accessibilité) |
