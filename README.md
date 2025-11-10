# CLS Films - Film Director Portfolio Website

A modern, cinematic portfolio website for a film director/cinematographer built with **Astro**, **React**, and **TypeScript**. Featuring a dark theme, smooth animations, and multi-language support (English/Spanish).

## 🎬 Features

- **Modern Stack**: Astro + React + TypeScript
- **Dark Cinematic Theme**: Premium visual aesthetic inspired by top film industry websites
- **Multi-Language Support**: English and Spanish with i18n implementation
- **Responsive Design**: Mobile-first approach with full responsiveness
- **Performance Optimized**: Lighthouse score > 90 target
- **Dynamic Content**: Easy to manage portfolio, bio, and contact information
- **Smooth Animations**: Subtle transitions and hover effects
- **SEO Optimized**: Meta tags and structured data

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout.astro           # Main layout wrapper
│   ├── Layout/
│   │   ├── Header.astro       # Navigation header
│   │   └── Footer.astro       # Footer component
│   ├── UI/
│   │   └── LanguageSwitcher.tsx  # Language selector (React)
│   └── Sections/
│       ├── HeroSection.astro  # Hero section
│       └── ContactForm.tsx    # Contact form (React)
├── locales/
│   ├── en.ts                  # English translations
│   ├── es.ts                  # Spanish translations
│   └── index.ts               # i18n utilities
├── pages/
│   ├── index.astro            # Home page (default language)
│   └── [lang]/
│       ├── index.astro        # Home page (dynamic)
│       ├── portfolio.astro    # Portfolio page
│       ├── bio.astro          # Bio/About page
│       └── contact.astro      # Contact page
├── styles/
│   └── global.css             # Global styles with Tailwind
├── types/
│   └── index.ts               # TypeScript definitions
└── utils/
    └── (utility functions)
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (ideally 20+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/DavidSerranoReyes/cls-web.git
cd cls-web

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

## 🎨 Design System

### Color Palette
- **Primary Background**: `#0f0f0f` (Deep Black)
- **Secondary Background**: `#1a1a1a` (Dark Gray)
- **Accent Color**: `#ff6b35` (Cinematic Orange)
- **Accent Light**: `#ffa500` (Light Orange)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#b0b0b0` (Light Gray)

### Typography
- **Display Font**: Playfair Display (serif)
- **Body Font**: Inter (sans-serif)

## 🌐 Internationalization

The site supports English and Spanish with automatic language detection and URL-based routing:
- `/en` - English version
- `/es` - Spanish version

Language switcher is available in the header for easy switching.

## 📱 Pages

### Home (`/`)
- Hero section with striking visuals
- Featured work showcase
- Call-to-action buttons

### Portfolio (`/[lang]/portfolio`)
- Grid/masonry layout of projects
- Filter by category (Commercial, Narrative, Documentary, Music Video)
- Project preview cards with hover effects
- Modal project details

### Bio (`/[lang]/bio`)
- Director biography
- Profile image
- Awards and recognition
- Press features
- Timeline

### Contact (`/[lang]/contact`)
- Contact form with validation
- Social media links
- Representation information
- Location details

## 🔧 Configuration

### Tailwind CSS
Dark mode is enabled by default. Configuration available in `tailwind.config.mjs`

### Astro Config
- Output: Static (SSG)
- i18n: Configured for `en` and `es` locales
- React: Islands architecture enabled
- Tailwind: Processing enabled

## 📦 Dependencies

- **astro**: ^5.15.4
- **react**: ^18.2.0
- **react-dom**: ^18.2.0
- **@astrojs/react**: ^3.0.11
- **@astrojs/tailwind**: ^5.1.0
- **tailwindcss**: ^3.4.1
- **typescript**: ^5.3.3

## � Deployment

The project is optimized for static deployment on:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting provider

Build command: `npm run build`
Output directory: `dist/`

## 📚 References

Design inspiration from:
- [Nicole Goode](https://nicolegoode.com/)
- [A24 Films](https://a24films.com/)

## 📄 License

This project is part of the CLS Films brand. All rights reserved.

## 👨‍💼 Author

**CLS Films** - Film Director & Cinematographer

---

**Last Updated**: November 9, 2025

For more information and documentation, see [agents.md](./agents.md)

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
