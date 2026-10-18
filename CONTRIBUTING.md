# Contributing Guidelines - Banda Livert

Thank you for your interest in contributing to the **Banda Livert** official web platform. To ensure high code quality, consistency, and a professional git history, please follow these guidelines.

---

## 🌳 Branching Strategy (Git Flow)

We adhere to a standard **Git Flow / GitHub Flow** branching model:

```
main (Production / Stable Releases)
  │
  ├── develop (Active Development / Integration)
  │     │
  │     ├── feat/repertoire-audio-filter
  │     ├── feat/shows-countdown-timer
  │     └── fix/mobile-nav-backdrop
  │
  └── hotfix/critical-booking-link
```

### Branch Roles:
* **`main`**: The single source of truth for production. Code in this branch must always be stable, tested, and deployable. Every release to `main` is tagged with Semantic Versioning (e.g. `v1.0.0`).
* **`develop`**: The primary integration branch. All features, enhancements, and non-critical bug fixes are merged here first before being promoted to `main`.
* **`feat/<short-name>`**: Feature branches branched off `develop`. Used for new features or UX improvements.
* **`fix/<short-name>`**: Bug fix branches branched off `develop`.
* **`hotfix/<short-name>`**: Critical production fixes branched directly off `main` and merged back into both `main` and `develop`.
* **`gh-pages`**: Production artifact deployment branch for static GitHub Pages hosting.

---

## 📝 Commit Conventions (Conventional Commits)

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <short description>
```

### Supported Types:
* `feat`: A new feature or user-facing functionality.
* `fix`: A bug fix.
* `docs`: Documentation only changes (`README.md`, `CONTRIBUTING.md`, etc.).
* `style`: Changes that do not affect the meaning of the code (formatting, CSS spacing, etc.).
* `refactor`: A code change that neither fixes a bug nor adds a feature.
* `perf`: A code change that improves performance.
* `test`: Adding missing tests or correcting existing tests.
* `chore`: Maintenance tasks, dependency updates, build config changes.

**Examples:**
* `feat(navbar): add smooth scroll offset and mobile blur effect`
* `fix(contact): sanitize phone parameter in WhatsApp URL generator`
* `docs(readme): add technical architecture diagram and badges`

---

## 🔄 Pull Request (PR) Workflow

1. Fork or branch off `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feat/your-feature-name
   ```
2. Make your changes and test locally:
   ```bash
   npm run build
   npm run preview
   ```
3. Commit using conventional commit messages:
   ```bash
   git commit -m "feat(section): add interactive lightbox for show gallery"
   ```
4. Push to origin and open a Pull Request targeting `develop`:
   ```bash
   git push origin feat/your-feature-name
   ```
5. Fill out the **Pull Request Template** provided by GitHub.
6. Once reviewed and approved, merge via **Squash & Merge** or **Rebase** to keep a clean, linear git history.

---

## 🛠️ Code Standards & Tech Stack

* **Framework:** React 18 (Functional components + Hooks)
* **Styling:** Tailwind CSS with utility-first approach and custom rock theme tokens
* **Bundler:** Vite (fast ESM development and optimized Rollup production builds)
* **Icons:** Lucide React (feather-style clean SVG icons)
* **Responsive Breakpoints:** Mobile-first (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`)
