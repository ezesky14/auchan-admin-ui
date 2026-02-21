# Auchan Admin UI

Interface d'administration Auchan construite avec Next.js.

## Stack technique

- **Framework** : Next.js 16 (App Router)
- **UI** : React 19, Tailwind CSS v4
- **Langage** : TypeScript
- **Documentation composants** : Storybook 10
- **Tests** : Vitest + Playwright
- **Gestionnaire de paquets** : pnpm

## Prerequis

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/)

## Installation

```bash
pnpm install
```

## Lancer le serveur de developpement

```bash
pnpm dev
```

L'application est accessible sur [http://localhost:3000](http://localhost:3000).

## Storybook

Storybook permet de visualiser et tester les composants de maniere isolee.

### Lancer Storybook

```bash
pnpm storybook
```

L'interface Storybook est accessible sur [http://localhost:6006](http://localhost:6006).

### Construire une version statique

```bash
pnpm build-storybook
```

Le build statique est genere dans le dossier `storybook-static/`.

### Stories disponibles

**Composants UI** (dans `src/stories/`) :

| Composant  | Story         |
| ---------- | ------------- |
| `Input`    | `ui/Input`    |
| `InputOTP` | `ui/InputOTP` |

**Pages** (dans `src/stories/pages/auth/`) :

| Page                | Story                                        |
| ------------------- | -------------------------------------------- |
| Connexion           | `Pages/Authentification/CONNEXION`           |
| Mot de passe oublie | `Pages/Authentification/MOT DE PASSE OUBLIÉ` |

### Organisation

- **`src/app/components/`** : composants UI generiques et reutilisables dans toute l'application.
- **`src/app/ui/`** : composants specifiques a une page ou un contexte (ex. formulaires d'authentification).
- **`src/stories/`** : stories Storybook, organisees par type (composants UI, pages).
- **`src/lib/`** : fonctions utilitaires partagees.

## Scripts disponibles

| Script            | Commande               | Description                           |
| ----------------- | ---------------------- | ------------------------------------- |
| `dev`             | `pnpm dev`             | Lance le serveur de developpement     |
| `build`           | `pnpm build`           | Build de production                   |
| `start`           | `pnpm start`           | Lance le serveur de production        |
| `lint`            | `pnpm lint`            | Analyse du code avec ESLint           |
| `format`          | `pnpm format`          | Formate le code avec Prettier         |
| `format:check`    | `pnpm format:check`    | Verifie le formatage du code          |
| `storybook`       | `pnpm storybook`       | Lance Storybook sur le port 6006      |
| `build-storybook` | `pnpm build-storybook` | Genere un build statique de Storybook |
