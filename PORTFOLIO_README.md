# Premium Portfolio Website

A modern, dark-themed personal portfolio built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Calm, Engineered Design**: Ultra-dark theme with violet/indigo accents
- **Smooth Animations**: Framer Motion-powered interactions throughout
- **Responsive Layout**: Fully responsive across all devices
- **Glassmorphism UI**: Modern glass-effect cards and components
- **Scroll Animations**: Elements reveal elegantly on scroll
- **Interactive Hero**: 3D parallax effect on mouse movement

## 🎨 Design System

### Colors
- **Base**: Near-black (`#0a0a0f`)
- **Accents**: Violet (`#8b5cf6`) & Indigo (`#6366f1`)
- **Typography**: Inter & Poppins fonts

### Sections
1. **Hero** - Full-screen introduction with animated text and CTAs
2. **About** - Personal introduction with learning focus
3. **Education** - Academic background with timeline
4. **Experience** - Professional experience with animated timeline
5. **Projects** - Portfolio projects with glassmorphism cards
6. **Skills** - Technical skills organized by category
7. **Achievements** - Notable accomplishments and awards
8. **Certifications** - Professional certifications
9. **Footer** - Social links and contact information

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── AnimatedBackground.jsx  # Ambient background effects
│   └── Footer.jsx              # Footer component
├── sections/
│   ├── Hero.jsx                # Hero section
│   ├── About.jsx               # About section
│   ├── Education.jsx           # Education timeline
│   ├── Experience.jsx          # Work experience
│   ├── Projects.jsx            # Project showcase
│   ├── Skills.jsx              # Skills grid
│   └── AchievementsCertifications.jsx
├── utils/
│   └── animations.js           # Reusable Framer Motion variants
├── App.jsx                     # Main app component
└── index.css                   # Global styles
```

## 🛠 Built With

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Google Fonts** - Inter & Poppins

## 🎯 Design Principles

- **Intentional Motion**: Every animation serves a purpose
- **Calm Aesthetics**: Dark, uncluttered, professional
- **Engineered Feel**: Product-quality, not resume-like
- **Visual Hierarchy**: Clear content organization
- **Smooth Interactions**: Deliberate, never flashy

## 📝 Customization

Update personal information in each section component:
- Name, roles, and tagline in `Hero.jsx`
- Professional details in `Experience.jsx`
- Projects in `Projects.jsx`
- Skills in `Skills.jsx`
- And so on...

## 📄 License

This project is open source and available for personal use.

---

Built with 💜 by Akshita Singh
