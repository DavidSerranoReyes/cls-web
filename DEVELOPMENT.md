# CLS Films Development Guide

## 🚀 Development Environment Setup

### Prerequisites
- Node.js 18.20.8+ or 20+ (recommended 20 or higher)
- npm 9.6.5+ or yarn 7.1.0+
- Git

### Initial Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/DavidSerranoReyes/cls-web.git
   cd cls-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:3000`

4. **Open in editor**
   ```bash
   code .
   ```

## 📁 Project Structure Explained

```
cls-web/
├── src/
│   ├── components/
│   │   ├── Layout.astro              # Main layout wrapper
│   │   ├── Layout/
│   │   │   ├── Header.astro         # Navigation (with language switcher)
│   │   │   └── Footer.astro         # Footer with links
│   │   ├── UI/
│   │   │   ├── Button.astro         # Reusable button component
│   │   │   └── LanguageSwitcher.tsx # Language selector (React island)
│   │   ├── Sections/
│   │   │   ├── HeroSection.astro    # Home hero section
│   │   │   └── ContactForm.tsx      # Contact form (React island)
│   │   └── Shared/
│   │       └── Card.astro          # Reusable card component
│   │
│   ├── pages/
│   │   ├── index.astro             # Root page (redirects to /en)
│   │   ├── 404.astro               # 404 error page
│   │   └── [lang]/
│   │       ├── index.astro         # Home page
│   │       ├── portfolio.astro     # Portfolio/Projects page
│   │       ├── bio.astro           # Bio/About page
│   │       └── contact.astro       # Contact page
│   │
│   ├── locales/                    # i18n translations
│   │   ├── en.ts                   # English strings
│   │   ├── es.ts                   # Spanish strings
│   │   └── index.ts                # Translation utilities
│   │
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces
│   │
│   ├── styles/
│   │   └── global.css              # Global styles + Tailwind
│   │
│   ├── utils/
│   │   ├── helpers.ts              # Utility functions
│   │   └── constants.ts            # Project constants
│   │
│   └── layouts/
│
├── public/                         # Static assets
│   └── favicon.svg
│
├── astro.config.mjs               # Astro configuration
├── tailwind.config.mjs            # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Dependencies
└── README.md                      # Project documentation
```

## 🎨 Styling Guidelines

### Colors
- **Primary Background**: `#0f0f0f`
- **Secondary Background**: `#1a1a1a`
- **Accent**: `#ff6b35` (Orange)
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#b0b0b0`

Use these CSS custom properties:
```css
bg-[#0f0f0f]
text-white
text-[#b0b0b0]
border-[#2a2a2a]
hover:text-[#ff6b35]
```

### Typography
- **Display Font**: Playfair Display (serif) - Headings
- **Body Font**: Inter (sans-serif) - Body text

### Tailwind Usage
The project uses Tailwind CSS with inline classes. Prefer:
```astro
<!-- Good -->
<div class="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#ff6b35]">

<!-- Avoid -->
<div class="custom-class">
```

## 🌐 Working with i18n

### Adding new translations

1. Add to `src/locales/en.ts`:
```typescript
'new.key': 'English text',
```

2. Add to `src/locales/es.ts`:
```typescript
'new.key': 'Texto en español',
```

3. Use in components:
```astro
---
import { t } from '../locales';
---

<h1>{t(lang, 'new.key')}</h1>
```

## 🔧 Component Development

### Creating an Astro Component

```astro
---
// src/components/MyComponent.astro
interface Props {
  title: string;
  lang: Language;
}

const { title, lang } = Astro.props;
---

<div class="...">
  <h2>{title}</h2>
  <slot />
</div>
```

### Creating a React Component (Island)

```tsx
// src/components/MyReactComponent.tsx
import React from 'react';
import type { Language } from '../types';

interface Props {
  lang: Language;
}

export default function MyComponent({ lang }: Props) {
  return (
    <div className="...">
      {/* Component */}
    </div>
  );
}
```

Use in Astro with `client:load`:
```astro
<MyReactComponent client:load lang={lang} />
```

## 📝 Adding Content

### Portfolio Projects
Content will be managed through a CMS or JSON data file. Projects include:
- Title (en/es)
- Description (en/es)
- Category: commercial | narrative | documentary | music-video
- Thumbnail image
- Video/Vimeo link
- Year
- Tags

### Bio Content
- Biography (en/es)
- Profile image
- Awards (title, festival, year)
- Press features (title, publication, link, date)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

Output files will be in `dist/` directory.

### Deploy to Vercel
```bash
vercel
```

### Deploy to Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 🧪 Performance & Testing

### Lighthouse Checklist
- [ ] Performance > 90
- [ ] Accessibility > 90
- [ ] Best Practices > 90
- [ ] SEO > 90

Check with: DevTools → Lighthouse

### Image Optimization
- Use WebP format where possible
- Compress images before uploading
- Use appropriate dimensions (lazy load)
- Consider video for hero sections

## 🐛 Debugging

### Development Tips
- Use `npm run dev` for hot reloading
- Check browser console for errors
- Use Chrome DevTools for debugging React components
- Check Astro build output with `npm run build`

### Common Issues
1. **Images not loading**: Check public/ folder or use external CDN
2. **Styles not applying**: Check Tailwind config and class names
3. **Translations missing**: Verify keys in both en.ts and es.ts
4. **React component not interactive**: Add `client:load` directive

## 📚 Resources

- [Astro Docs](https://docs.astro.build)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

## 🔐 Environment Variables

Create `.env.local` for development (optional):
```
# .env.local
VITE_API_URL=http://localhost:3000
```

## 📋 Git Workflow

### Commits
Use conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code restructuring
- `test:` Testing

Example:
```bash
git commit -m "feat: add portfolio filter functionality"
```

## 🎯 Next Steps

1. Add portfolio projects
2. Connect to CMS or backend
3. Implement form submission
4. Optimize images
5. Test on mobile devices
6. Deploy to production
