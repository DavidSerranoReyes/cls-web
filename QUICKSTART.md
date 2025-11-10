# 🚀 Quick Start Guide - CLS Films Web

## Get Running in 2 Minutes

### 1. Navigate to Project
```bash
cd /home/david/repos/CLS/cls-web
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Open in Browser
Navigate to `http://localhost:3000`

---

## 📂 Where to Find Things

### Add New Content
- **Translations**: `src/locales/en.ts` and `src/locales/es.ts`
- **Pages**: `src/pages/[lang]/`
- **Components**: `src/components/`

### Edit Styling
- **Colors**: `tailwind.config.mjs` and `src/styles/global.css`
- **Tailwind Classes**: Use inline in `.astro` and `.tsx` files

### Update Content
- **Text**: Update translation files
- **Images**: Add to `public/` folder
- **Links**: Update in components and pages

---

## 🎨 Color Palette

```
Primary Background:  #0f0f0f (deep black)
Secondary:          #1a1a1a (dark gray)
Accent:             #ff6b35 (cinematic orange)
Text Primary:       #ffffff (white)
Text Secondary:     #b0b0b0 (light gray)
```

## 📱 Pages Available

- `/` - Redirects to `/en` or `/es`
- `/en` - Home (English)
- `/es` - Home (Spanish)
- `/en/portfolio` - Portfolio
- `/es/portfolio` - Portafolio
- `/en/bio` - Biography
- `/es/bio` - Biografía
- `/en/contact` - Contact
- `/es/contact` - Contacto

---

## 🔧 Common Tasks

### Add Translation
1. Open `src/locales/en.ts`
2. Add new key: `'page.key': 'English text'`
3. Open `src/locales/es.ts`
4. Add same key: `'page.key': 'Texto español'`
5. Use in component: `{t(lang, 'page.key')}`

### Create New Component
```astro
---
// src/components/MyComponent.astro
interface Props {
  title: string;
}
const { title } = Astro.props;
---

<div class="bg-[#1a1a1a] p-4">
  <h2>{title}</h2>
  <slot />
</div>
```

### Create React Component
```tsx
// src/components/MyComponent.tsx
import React from 'react';

export default function MyComponent() {
  const [count, setCount] = React.useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

Then use in Astro with `client:load`:
```astro
<MyComponent client:load />
```

### Deploy
```bash
npm run build        # Build production
npm run preview      # Preview locally
git push             # Push to GitHub (auto-deploys if configured)
```

---

## 🐛 Troubleshooting

### Styles not applying?
- Check Tailwind class is in `tailwind.config.mjs`
- Restart dev server: `Ctrl+C` then `npm run dev`
- Clear cache: `rm -rf node_modules/.vite`

### Component not showing?
- Check file path is correct
- Make sure component is imported
- Check TypeScript types
- Look at browser console for errors

### Translation not working?
- Make sure key exists in both `en.ts` and `es.ts`
- Check for typos
- Verify import: `import { t } from '../locales'`

### Language switcher not working?
- Check URL format: `/en/page` or `/es/page`
- Make sure `[lang]` routes exist
- Check LanguageSwitcher component

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Project overview |
| `DEVELOPMENT.md` | Development guide |
| `PROJECT_SUMMARY.md` | What's been created |
| `CHECKLIST.md` | Development tasks |
| `agents.md` | Project context |
| `QUICKSTART.md` | This file |

---

## 🔑 Environment Variables

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Edit with your values if needed.

---

## 💾 Git Workflow

```bash
# Check status
git status

# Add changes
git add .

# Commit
git commit -m "feat: add new feature"

# Push to GitHub
git push origin master

# Pull latest
git pull origin master
```

---

## 📊 Project Info

- **Framework**: Astro 5 + React 18 + TypeScript
- **Styling**: Tailwind CSS 3
- **Languages**: English & Spanish
- **Status**: ✅ Ready for development
- **GitHub**: https://github.com/DavidSerranoReyes/cls-web

---

## 🎯 Next Steps

1. ✅ Start dev server
2. 📸 Add portfolio projects
3. 📝 Update bio section
4. 📧 Setup form submission
5. 🚀 Deploy to production

---

**Happy coding! 🎬**

For more details, see `DEVELOPMENT.md` and `PROJECT_SUMMARY.md`
