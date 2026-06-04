# Ruhan | Personal Portfolio

A production-ready, highly interactive personal portfolio website designed for Ruhan (CS Student, AI Developer, and Full-Stack Engineer at Satbayev University). Built with premium aesthetics, fluid animations, and strict technical precision.

## 🚀 Live Demo & Deployment
- The app is ready to deploy to **Netlify** with a pre-configured `netlify.toml` file.
- Single-page application utilizing hash-based routing.

## 🛠️ Tech Stack
- **Framework**: React + Vite (TypeScript)
- **Styling**: Tailwind CSS v4 with custom design tokens matching the Stitch color palette (dark background `#0a0a0f`, neon cyan `#46f1c5` primary, violet `#d2bbff` secondary).
- **Animations**: Framer Motion (staggered hero entrances, scroll reveals, card scaling and glows).
- **Icons**: Lucide React.
- **Routing**: React Router v7.

## ✨ Premium Features
1. **Adaptive Navigation**: Sticky navbar that automatically transitions from transparent to a frosted glass blur on scroll. Highlights the active section based on your viewport location.
2. **Neo-Noir Theme**: Custom radial light gradients (halos), global noise overlay, and deep dark theme palette.
3. **Scroll Reveal Hook**: IntersectionObserver-powered reveals that trigger beautiful translate-up and fade-in states as you explore.
4. **Staggered Hero Entrance**: Interactive page loading animations that slide and fade in elements sequentially (Init Tag → Title → Roles → Pitch → CTA).
5. **Custom Trailing Cursor**: Smooth customized dual-cursor (dot + outline) with interactive scaling when hovering over links/buttons.
6. **Bento Grid Projects**: Neon border and inner shadows that glow dynamically on hover.

---

## 📁 File Structure
```
src/
  ├── components/
  │    ├── About.tsx        # Bio & Technical Arsenal / code mockup
  │    ├── Contact.tsx      # Say Hello mail button & socials
  │    ├── Footer.tsx       # Quick navigation links & copyright
  │    ├── Hero.tsx         # Welcome title & CTAs
  │    ├── Icons.tsx        # Custom SVG brand icon definitions (Github, Linkedin)
  │    ├── Navbar.tsx       # Sticky translucent header & mobile slide-out menu
  │    └── Timeline.tsx     # Education timeline (Satbayev University)
  ├── data/
  │    ├── projects.ts      # Typed project data models
  │    └── skills.ts        # Skills list
  ├── hooks/
  │    └── useScrollReveal.ts # IntersectionObserver scroll reveal hook
  ├── App.tsx               # App routing, cursor positioning, and state integration
  ├── index.css             # Tailwind v4 configuration, themes, and base classes
  └── main.tsx              # React bootstrap entry point
```

---

## 💻 Getting Started Locally

### Prerequisites
- **Node.js**: >= 18.x (native bindings for `@tailwindcss/oxide` require Node >= 20.0.0 or manual target installing).

### Installation
1. Clone the project or navigate to the directory:
   ```bash
   cd Portfolio
   ```
2. Install all dependencies:
   ```bash
   npm install
   ```
   *Note: If NPM fails to resolve Tailwind's native Rust bindings due to Node versioning, run `npm install @tailwindcss/oxide-linux-x64-gnu` manually.*

### Running Dev Server
To start the hot-reloading development server locally:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production
To generate a production-ready optimized build bundle under `/dist`:
```bash
npm run build
```
