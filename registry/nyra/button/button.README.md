# Button — Nyra UI · Type: Default

Source Figma : [node 133:4518](https://www.figma.com/design/7THVM7NP1y1rli5iEB9bc5/Nyra---Genero-Design-system?node-id=133-4518)

## Installation

```bash
npx shadcn@latest add https://nyra-ui.vercel.app/r/button.json
```

## Import

```tsx
import { Button } from "@/components/ui/button"
```

## Utilisation

```tsx
{/* Texte + icône */}
<Button>Call to action</Button>
<Button leftIcon={<PlusIcon />}>Ajouter</Button>
<Button size="l">Large</Button>
<Button loading>Chargement...</Button>
<Button disabled>Désactivé</Button>

{/* Icône seule */}
<Button variant="icon-primary" icon={<PlusIcon />} aria-label="Ajouter" />
<Button variant="icon-primary" icon={<PlusIcon />} size="s" aria-label="Ajouter" />
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `variant` | `"default"` \| `"icon-primary"` | `"default"` | Texte+icône ou icône seule |
| `size` | `"xs"` \| `"s"` \| `"m"` \| `"l"` | `"m"` | Taille |
| `loading` | `boolean` | `false` | Spinner + désactivé |
| `leftIcon` | `ReactNode` | — | Icône avant le texte |
| `rightIcon` | `ReactNode` | — | Icône après le texte |
| `icon` | `ReactNode` | — | Icône pour `variant="icon-primary"` |
| `htmlType` | `"button"` \| `"submit"` \| `"reset"` | `"button"` | Attribut `type` natif |
| `disabled` | `boolean` | `false` | Désactivé |
