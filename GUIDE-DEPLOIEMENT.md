# Guide de déploiement — Nyra UI Registry

## Ce que tu vas faire
1. Installer les dépendances en local
2. Générer les fichiers JSON du registry
3. Pousser sur GitHub
4. Déployer sur Vercel (gratuit)
5. Partager l'URL aux devs

---

## Étape 1 — Prérequis

Tu as besoin de :
- [Node.js 18+](https://nodejs.org) installé sur ton Mac
- Un compte [GitHub](https://github.com)
- Un compte [Vercel](https://vercel.com) (gratuit, connecte-toi avec GitHub)

---

## Étape 2 — Installer les dépendances

Ouvre le Terminal, va dans ce dossier et lance :

```bash
cd "chemin/vers/nyra-ui-registry"
npm install
```

---

## Étape 3 — Générer les fichiers JSON du registry

```bash
npm run registry:build
```

Cette commande lit `registry.json` et génère un fichier JSON par composant dans `public/r/` :
- `public/r/button.json`
- `public/r/input.json`
- `public/r/select.json`
- `public/r/checkbox.json`
- `public/r/label.json`
- `public/r/tokens.json`

> Si tu ajoutes un composant plus tard, relance cette commande avant de pousser.

---

## Étape 4 — Créer le repo GitHub

1. Va sur [github.com/new](https://github.com/new)
2. Nom du repo : `nyra-ui`
3. Visibilité : **Public** (nécessaire pour que les devs puissent y accéder) ou Private si tu préfères
4. Ne coche rien d'autre → clique **Create repository**

---

## Étape 5 — Pousser le code sur GitHub

Dans le Terminal (depuis le dossier `nyra-ui-registry`) :

```bash
git init
git add .
git commit -m "feat: initial nyra-ui registry"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/nyra-ui.git
git push -u origin main
```

> Remplace `TON_USERNAME` par ton nom d'utilisateur GitHub.

---

## Étape 6 — Déployer sur Vercel

1. Va sur [vercel.com/new](https://vercel.com/new)
2. Clique **Import Git Repository**
3. Sélectionne ton repo `nyra-ui`
4. Laisse tous les paramètres par défaut → clique **Deploy**

Vercel détecte automatiquement que c'est un projet Next.js.

En ~2 minutes, ton registry est en ligne à une URL du type :
```
https://nyra-ui-ton-username.vercel.app
```

> Tu peux configurer un domaine custom dans les settings Vercel si tu veux une URL plus propre.

---

## Étape 7 — Partager aux devs

Envoie-leur ces commandes selon le composant dont ils ont besoin :

```bash
# Button
npx shadcn@latest add https://nyra-ui-ton-username.vercel.app/r/button.json

# Input
npx shadcn@latest add https://nyra-ui-ton-username.vercel.app/r/input.json

# Select
npx shadcn@latest add https://nyra-ui-ton-username.vercel.app/r/select.json

# Checkbox
npx shadcn@latest add https://nyra-ui-ton-username.vercel.app/r/checkbox.json

# Design tokens CSS
npx shadcn@latest add https://nyra-ui-ton-username.vercel.app/r/tokens.json
```

Le composant sera copié directement dans leur projet, dans `components/ui/`.

---

## Mettre à jour le registry

Quand tu modifies ou ajoutes un composant :

```bash
# 1. Modifier les fichiers dans registry/nyra/
# 2. Régénérer les JSON
npm run registry:build

# 3. Pousser sur GitHub
git add .
git commit -m "feat: mise à jour du composant X"
git push

# Vercel redéploie automatiquement
```

---

## Structure du projet

```
nyra-ui-registry/
├── registry/
│   └── nyra/
│       ├── button/button.tsx
│       ├── input/input.tsx
│       ├── select/select.tsx
│       ├── checkbox/checkbox.tsx
│       ├── label/label.tsx
│       └── tokens/tokens.css
├── registry.json          ← liste tous les composants
├── public/r/              ← généré par registry:build (ne pas modifier à la main)
├── app/                   ← page d'accueil avec les commandes d'install
└── package.json
```
