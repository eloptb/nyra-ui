# Button — Nyra UI

Source Figma : [node 133:4518](https://www.figma.com/design/7THVM7NP1y1rli5iEB9bc5/Nyra---Genero-Design-system?node-id=133-4518)

## Installation

```bash
npx shadcn@latest add https://nyra-ui.vercel.app/r/button.json
```

Les tokens CSS sont installés automatiquement dans `app/nyra/`.

## Import

```tsx
import { Button } from "@/components/ui/button"
```

## Activer un thème

```css
/* Dans ton CSS global — choisir UN thème */
@import "./nyra/tokens-base.css";
@import "./nyra/tokens-light.css";
```

```html
<body data-theme="light">
```

## Utilisation

### Boutons avec texte

```tsx
{/* Types */}
<Button variant="default">Call to action</Button>
<Button variant="white-fill">Call to action</Button>
<Button variant="outline">Call to action</Button>
<Button variant="outline-classic">Call to action</Button>
<Button variant="link">Call to action</Button>

{/* Avec icônes */}
<Button variant="default" leftIcon={<PlusIcon />}>Ajouter</Button>
<Button variant="outline" rightIcon={<ArrowIcon />}>Voir plus</Button>

{/* Tailles */}
<Button size="xs">XS</Button>
<Button size="s">Small</Button>
<Button size="m">Medium</Button>
<Button size="l">Large</Button>

{/* États */}
<Button loading>Chargement...</Button>
<Button disabled>Désactivé</Button>
```

### Boutons icône uniquement

```tsx
<Button variant="icon-primary"          icon={<PlusIcon />} aria-label="Ajouter" />
<Button variant="icon-outline"          icon={<PlusIcon />} aria-label="Ajouter" />
<Button variant="icon-outline-classic"  icon={<PlusIcon />} aria-label="Ajouter" />
<Button variant="icon-link"             icon={<PlusIcon />} aria-label="Ajouter" />
```

> ⚠️ Pour les variantes `icon-*`, toujours ajouter un `aria-label` pour l'accessibilité.

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `variant` | `ButtonType` | `"default"` | Style visuel (voir tableau ci-dessous) |
| `size` | `"xs"` \| `"s"` \| `"m"` \| `"l"` | `"m"` | Taille |
| `loading` | `boolean` | `false` | Spinner + désactivé |
| `leftIcon` | `ReactNode` | — | Icône avant le texte |
| `rightIcon` | `ReactNode` | — | Icône après le texte |
| `icon` | `ReactNode` | — | Icône pour les variantes `icon-*` |
| `htmlType` | `"button"` \| `"submit"` \| `"reset"` | `"button"` | Attribut `type` natif |
| `disabled` | `boolean` | `false` | Désactivé |

## Variantes

| `variant` | Description | Usage |
|-----------|-------------|-------|
| `default` | Fond plein couleur interactive | Action principale |
| `white-fill` | Fond blanc, bordure gradient | Sur fonds colorés |
| `outline` | Contour rectangulaire | Action secondaire |
| `outline-classic` | Contour pill (border-radius full) | Style arrondi |
| `link` | Texte seul, sans fond ni bordure | Action tertiaire / liens |
| `icon-primary` | Icône seule, fond plein | Action principale compacte |
| `icon-outline` | Icône seule, contour rectangulaire | Action secondaire compacte |
| `icon-outline-classic` | Icône seule, contour pill | Style arrondi compact |
| `icon-link` | Icône seule, texte | Action tertiaire compacte |
