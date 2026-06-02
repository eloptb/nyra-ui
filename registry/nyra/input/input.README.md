# Input — Nyra UI

## Installation

```bash
npx shadcn@latest add https://nyra-ui.vercel.app/r/input.json
```

Les tokens CSS sont installés automatiquement.

## Import

```tsx
import { Input } from "@/components/ui/input"
```

## Utilisation

```tsx
<Input label="Adresse e-mail" placeholder="vous@exemple.com" />
<Input label="Avec hint" hint="On ne partagera jamais votre email." />
<Input label="Avec erreur" error="Ce champ est requis." />
<Input label="Désactivé" disabled />
<Input size="sm" placeholder="Petit" />
<Input size="lg" placeholder="Grand" />
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `label` | `string` | — | Label affiché au-dessus du champ |
| `hint` | `string` | — | Texte d'aide sous le champ |
| `error` | `string` | — | Message d'erreur (remplace le hint, bordure rouge) |
| `size` | `sm` \| `md` \| `lg` | `md` | Taille |
| `leftIcon` | `ReactNode` | — | Icône à gauche |
| `rightIcon` | `ReactNode` | — | Icône à droite |

Toutes les props HTML natives de `<input>` sont aussi supportées (`placeholder`, `disabled`, `type`, etc.).
