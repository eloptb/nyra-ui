# Button — Nyra UI

## Prérequis

- React 18+
- TypeScript
- Les tokens Nyra UI installés et importés (installés automatiquement avec ce composant)

## Installation

```bash
npx shadcn@latest add https://nyra-ui.vercel.app/r/button.json
```

Les tokens CSS sont installés automatiquement dans `app/nyra/`.

## Import dans ton projet

```tsx
import { Button } from "@/components/ui/button"
```

## Activer un thème

Dans ton fichier CSS global, importe les tokens du thème voulu :

```css
/* Choisir UN seul thème */
@import "./nyra/tokens-base.css";
@import "./nyra/tokens-light.css";               /* GeneroEnterprise Light */
/* @import "./nyra/tokens-dark.css";             /* GeneroEnterprise Dark */
/* @import "./nyra/tokens-genero-intelligence-light.css"; */
/* @import "./nyra/tokens-genero-intelligence-dark.css";  */
/* @import "./nyra/tokens-report-writer.css";    */
/* @import "./nyra/tokens-four-js.css";          */
```

Puis sur ton `<body>` ou le conteneur racine :

```html
<body data-theme="light">        <!-- GeneroEnterprise Light -->
<body data-theme="dark">         <!-- GeneroEnterprise Dark -->
<body data-theme="genero-intelligence-light">
<body data-theme="genero-intelligence-dark">
<body data-theme="report-writer">
<body data-theme="four-js">
```

## Utilisation

```tsx
<Button variant="primary">Enregistrer</Button>
<Button variant="secondary">Annuler</Button>
<Button variant="ghost">En savoir plus</Button>
<Button variant="danger">Supprimer</Button>
<Button loading>Chargement...</Button>
<Button disabled>Désactivé</Button>
<Button size="sm">Petit</Button>
<Button size="lg">Grand</Button>
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `variant` | `primary` \| `secondary` \| `ghost` \| `danger` | `primary` | Style visuel |
| `size` | `sm` \| `md` \| `lg` | `md` | Taille |
| `loading` | `boolean` | `false` | Affiche un spinner, désactive le bouton |
| `leftIcon` | `ReactNode` | — | Icône à gauche du texte |
| `rightIcon` | `ReactNode` | — | Icône à droite du texte |
| `disabled` | `boolean` | `false` | Désactive le bouton |
