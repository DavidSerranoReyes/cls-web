# Film Director Website Project - Agents Context

## Project Overview

We're building a high-impact, modern website for a film director/cinematographer using **React + Astro with TypeScript**. The site should be dynamic, clean, and create a strong visual impression similar to premium film industry websites.

## Technical Stack

- **Framework**: Astro with React components
- **Language**: TypeScript
- **Styling**: Modern CSS/Tailwind (dark theme focused)
- **Features**: Multi-language (English/Spanish), Dark mode, Dynamic content

## Reference Websites for Inspiration

- **Nicole Goode**: https://nicolegoode.com/ (clean, cinematic, portfolio-focused)
- **A24 Films**: https://a24films.com/films/hereditary (dark, atmospheric, immersive)

## Core Pages Structure

### 1. Home Page

- Hero section with striking visual (video background or cinematic still)
- Featured work carousel/slider
- Recent projects highlights
- Atmospheric, immersive experience
- Minimal text, maximum visual impact

### 2. Portfolio Page

- Grid/masonry layout of film projects
- Filterable by: Commercial, Narrative, Documentary, Music Video
- Hover effects with project details
- Modal/overlay view for project details
- Video player integration for trailers/clips

### 3. Bio Page

- Cinematic photography + concise biography
- Filmography timeline
- Awards & recognition
- Press features
- Clean, readable typography

### 4. Contact Page

- Minimal contact form
- Social media links
- Representation contact (agency/manager)
- Location (if relevant)

## Design Requirements

### Visual Style

- **Dark Mode Palette**: Deep blacks, dark grays, accent colors
- **Typography**: Clean, modern, cinematic fonts
- **Imagery**: High-quality film stills, behind-the-scenes photos
- **Animations**: Subtle, smooth transitions and hover effects
- **Layout**: Asymmetrical but balanced, cinematic compositions

### User Experience

- Smooth scrolling and page transitions
- Responsive design (mobile-first approach)
- Fast loading times (optimize images/videos)
- Intuitive navigation
- Immersive storytelling

## Technical Specifications

### Language Support

- Implement i18n for English/Spanish
- Language switcher in header/navigation
- All content translatable
- RTL support consideration for future

### Performance Requirements

- Lighthouse score > 90
- Optimized image loading (lazy loading)
- Smooth animations (60fps)
- SEO-optimized structure

### Component Structure

src/
├── components/
│ ├── Layout/
│ ├── UI/
│ ├── Sections/
│ └── Shared/
├── pages/
├── locales/ (i18n files)
├── styles/
├── types/ (TypeScript definitions)
└── utils/

## Content Management

### Dynamic Content Areas

- Portfolio items (add/remove projects)
- Bio updates
- Contact information
- Social media links

### Media Handling

- High-resolution image optimization
- Video embedding (Vimeo/YouTube)
- Background video support
- Gallery management

## Development Guidelines

### Code Standards

- TypeScript strict mode enabled
- Component-based architecture
- Responsive design patterns
- Accessibility (WCAG 2.1 AA compliant)
- Clean, documented code

### Astro Specific

- Use Astro islands for interactive components
- Static generation where possible
- Optimized asset loading
- SEO meta tags implementation

## Success Metrics

### Visual Impact

- Cinematic, premium feel
- Strong brand identity
- Memorable user experience
- Industry-appropriate aesthetic

### Functional Requirements

- Fast loading (< 3s first contentful paint)
- Flawless mobile experience
- Easy content updates
- Multi-language support working perfectly

## Agent Responsibilities

### When working on this project, ensure:

1. **Design Consistency**: Maintain dark, cinematic aesthetic
2. **Performance**: Optimize all assets and code
3. **User Experience**: Smooth, intuitive interactions
4. **Code Quality**: Clean, typed, documented code
5. **Accessibility**: Inclusive design practices

### Priority Focus Areas:

- Visual impact and cinematic feel
- Smooth animations and transitions
- Mobile-responsive design
- Fast loading performance
- Easy content management

## Notes for Implementation

- Study the reference websites for inspiration
- Focus on creating emotional connection through design
- Use film industry-appropriate visual language
- Implement subtle sound design if using video
- Consider adding a "play reel" feature prominently

---

**Remember**: This is a portfolio site for a creative professional. The website itself should demonstrate excellent design and technical execution that reflects the quality of their film work.
