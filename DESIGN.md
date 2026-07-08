# Design

## Overview

A high-energy, creative developer portfolio with a **rich vibrant pink, energy yellow, and confident red** color palette against a clean white background. The site uses playful modernism, smooth interactions, and quality-of-life details to convey a "Developer who gets it" personality without being too childish or too corporate.

---

## Colors

| Role | HEX | Usage |
|------|-----|-------|
| **Rich Pink** | `#FF7EB9` | Primary accent, hover effectsicher, kicker badges, links |
| **Energy Yellow** | `#FFD15C` | Secondary accent, background glows, complementary details, cta |
| **Confident Red** | `#FF3E3E` | CTA highlights, notification pings, tags |
| **Growth Green** | `#0A2F1F` | Primary text, secondary buttons, borders, main content color |
| **Clean White** | `#ffffff` | Page background |
| **Core Solids** | `rgba(10, 47, 31, 0.05)`, `rgba(255,255,255,0.7)`, etc. | Glassmorphism blur backgrounds hover tints card backgrounds |

---

## Typography

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| **Display / Headings** | `Playfair Display (Serif)` | 700 | Hero titles, large section headings |
| **Body / UI** | `Outfit (Sans-serif)` | 300, 400, 700 | Paragraphs, buttons, navigation, small text |
| **Technical / Monospace** | `JetBrains Mono` | 400 | Optional: Tech tags, CLI-style text |

---

## Spacing & Shape

- **Border Radius**: Large rounded corners (`2rem`), some full pill shapes (`100px`), some smaller for cards (`1rem`)
- **Page Padding**: `1.5rem` (mobile), `2rem` (desktop)
- **Max Width**: `1280px` for content container

---

## Elevation

- **Glass Effect**: Frosted glass cards using `backdrop-filter: blur()` and semi-transparent background (`rgba(255, 255, 255, 0.7)`)
- **Shadows:** Very soft, large-spread shadows with low opacity, like `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.03)`

---

## Core Components

- **Glass Card**: `bg-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.05)]`
- **Pill Badge**: `py-1 px-3 border border-dark-green rounded-full text-[10px] uppercase font-bold tracking-widest`
- **CTA Button**: `bg-dark-green text-white py-4 px-8 rounded-full font-bold tracking-wide hover:bg-red transition`
- **Section Heading**: `font-serif text-5xl md:text-6xl`

---

## Navigation

- Transparent sticky navigation, transitioning to a translucent backdrop on scroll.

---

## Button interactions
- **Hover States**: Buttons scale slightly (`scale-105`), and shadows expand.
