# Checkbox — Nyra UI

## Installation

```bash
npx shadcn@latest add https://nyra-ui.vercel.app/r/checkbox.json
```

## Import

```tsx
import { Checkbox } from "@/components/ui/checkbox"
```

## Utilisation

```tsx
<Checkbox label="J'accepte les conditions" />
<Checkbox label="Coché par défaut" defaultChecked />
<Checkbox label="Désactivé" disabled />
<Checkbox label="Avec erreur" error="Ce champ est requis." />
<Checkbox label="Avec hint" hint="Information complémentaire." />
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `label` | `string` | — | Texte à côté de la case |
| `hint` | `string` | — | Texte d'aide sous la case |
| `error` | `string` | — | Message d'erreur (bordure rouge) |

Toutes les props HTML natives de `<input type="checkbox">` sont supportées.
