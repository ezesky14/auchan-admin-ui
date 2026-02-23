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

**Composants de base** (dans `src/stories/`) :

| Composant         | Story                                           |
| ----------------- | ----------------------------------------------- |
| `Button`          | `Composants/Composants de base/Button`          |
| `Input`           | `Composants/Composants de base/Input`           |
| `InputSearch`     | `Composants/Composants de base/InputSearch`     |
| `InputOTP`        | `Composants/Composants de base/InputOTP`        |
| `Dropdown`        | `Composants/Composants de base/Dropdown`        |
| `Popover`         | `Composants/Composants de base/Popover`         |
| `DateRangePicker` | `Composants/Composants de base/DateRangePicker` |
| `Breadcrumb`      | `Composants/Composants de base/Breadcrumb`      |
| `AuthCard`        | `Composants/Composants de base/AuthCard`        |
| `HeaderMenu`      | `Composants/Composants de base/HeaderMenu`      |

**Composants composites** (dans `src/stories/`) :

| Composant          | Story                                               |
| ------------------ | --------------------------------------------------- |
| `DonutChart`       | `Composants/Composants composites/DonutChart`       |
| `StatOverview`     | `Composants/Composants composites/StatOverview`     |
| `BalanceOverview`  | `Composants/Composants composites/BalanceOverview`  |
| `DataTable`        | `Composants/Composants composites/DataTable`        |
| `StoreItem`        | `Composants/Composants composites/StoreItem`        |
| `StoreList`        | `Composants/Composants composites/StoreList`        |
| `TransactionTable` | `Composants/Composants composites/TransactionTable` |

**Pages** (dans `src/stories/pages/`) :

| Page                | Story                                        |
| ------------------- | -------------------------------------------- |
| Connexion           | `Pages/Authentification/CONNEXION`           |
| Mot de passe oublie | `Pages/Authentification/MOT DE PASSE OUBLIÉ` |
| Liste des magasins  | `Pages/Magasins/LISTE DES MAGASINS`          |
| Details magasin     | `Pages/Magasins/DÉTAILS MAGASIN`             |
| 404                 | `Pages/404`                                  |

### Organisation

- **`src/app/components/`** : composants UI generiques et reutilisables dans toute l'application.
- **`src/app/ui/`** : composants specifiques a une page ou un contexte (ex. formulaires d'authentification).
- **`src/stories/`** : stories Storybook, organisees par type (composants UI, pages).
- **`src/lib/`** : fonctions utilitaires partagees.

## Scripts disponibles

| Script            | Commande               | Description                                    |
| ----------------- | ---------------------- | ---------------------------------------------- |
| `dev`             | `pnpm dev`             | Lance le serveur de developpement              |
| `build`           | `pnpm build`           | Build de production                            |
| `start`           | `pnpm start`           | Lance le serveur de production                 |
| `lint`            | `pnpm lint`            | Analyse du code avec ESLint                    |
| `typecheck`       | `pnpm typecheck`       | Verification des types TypeScript              |
| `format`          | `pnpm format`          | Formate le code avec Prettier                  |
| `format:check`    | `pnpm format:check`    | Verifie le formatage du code                   |
| `commit`          | `pnpm commit`          | Commit interactif via Commitizen               |
| `commit:no-test`  | `pnpm commit:no-test`  | Commit interactif sans lancer les tests        |
| `retry-commit`    | `pnpm retry-commit`    | Relance le dernier commit echoue               |
| `release`         | `pnpm release`         | Genere une nouvelle version (standard-version) |
| `prepare`         | `pnpm prepare`         | Installe les hooks Husky                       |
| `test`            | `pnpm test`            | Lance les tests unitaires (Vitest)             |
| `test:watch`      | `pnpm test:watch`      | Lance les tests en mode watch                  |
| `test:ui`         | `pnpm test:ui`         | Lance les tests avec l'interface Vitest UI     |
| `test:storybook`  | `pnpm test:storybook`  | Lance les tests Storybook                      |
| `storybook`       | `pnpm storybook`       | Lance Storybook sur le port 6006               |
| `build-storybook` | `pnpm build-storybook` | Genere un build statique de Storybook          |
