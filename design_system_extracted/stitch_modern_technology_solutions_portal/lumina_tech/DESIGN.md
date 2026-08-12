---
name: Lumina Tech
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#424754'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#727785'
  outline-variant: '#c2c6d6'
  surface-tint: '#005ac2'
  primary: '#0058be'
  on-primary: '#ffffff'
  primary-container: '#2170e4'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#545d62'
  on-tertiary: '#ffffff'
  tertiary-container: '#6d767b'
  on-tertiary-container: '#fbfdff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#dbe4ea'
  tertiary-fixed-dim: '#bfc8ce'
  on-tertiary-fixed: '#141d21'
  on-tertiary-fixed-variant: '#3f484d'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-xl:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.02em
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

The brand personality is **Visionary, Technical, and Ethereal**. This design system targets high-growth startups, AI infrastructure, and innovative software solutions that want to project a "Future-Tech" image without the heaviness of typical dark-themed tech sites. 

The aesthetic is a hybrid of **Minimalism** and **Glassmorphism**. It utilizes a pure white foundation to maintain clarity and breathability, punctuated by high-fidelity 3D fluid elements and glowing blue orbs. The user experience should feel lightweight, sophisticated, and highly responsive—mimicking the fluidity of modern cloud computing. Key visual drivers include ultra-fine borders, soft-focus background blurs, and "plexus" inspired connections between data points.

## Colors

The palette is centered on high-contrast "Electric Blue" against a "Pure White" canvas. 

- **Primary (Electric Blue):** Used for primary actions, progress indicators, and glowing atmospheric elements.
- **Secondary (Soft Slate):** Reserved for supporting text, borders, and secondary iconography to prevent visual clutter.
- **Glass Overlays:** Translucent white surfaces with a backdrop blur (minimum 12px) create depth and hierarchy without introducing new colors.
- **Accents:** Occasional use of "Sky Blue" (#0EA5E9) gradients to add dimensionality to 3D objects and buttons.

## Typography

The system uses **Hanken Grotesk** for headlines to provide a sharp, modern, and architectural feel. **Inter** is utilized for body text due to its exceptional legibility in technical contexts.

Large display headings should be rendered in "Pure Black" or "Deep Slate" to ensure strong contrast against the white background. For subheadings and supporting labels, a medium weight with slightly increased letter spacing is preferred to maintain the "high-tech" look. Ensure all text on glass surfaces meets AA contrast standards by utilizing the dark neutral palette for copy.

## Layout & Spacing

This design system follows a **Fluid Grid** model with generous margins to evoke a premium, "breathable" feel. 

- **Desktop:** 12-column grid with a 1280px max-width.
- **Tablet:** 8-column grid with 32px margins.
- **Mobile:** 4-column grid with 20px margins.

Spacing is based on an 8px base unit. Section-level padding is intentionally large (120px+) to isolate different conceptual "zones" and highlight the 3D abstract assets. Negative space is treated as a functional element, used to direct focus toward the primary "Glass" cards and call-to-action buttons.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Glassmorphism** rather than traditional heavy shadows.

- **Level 1 (Base):** Pure white background.
- **Level 2 (Section Containers):** Soft-tinted backgrounds (Sky Blue 50) with subtle 1px borders in Slate 100.
- **Level 3 (Floating Cards):** Glassmorphic surfaces with a `backdrop-filter: blur(16px)` and a semi-transparent white fill (opacity 0.7). These elements use a "Global Glow"—a very diffused blue shadow (`rgba(59, 130, 246, 0.08)`) with a 40px blur to suggest light emission from the primary blue accents.
- **Level 4 (Interactions):** Active states for buttons and cards increase the glow intensity and include a subtle inner highlight to mimic polished glass edges.

## Shapes

The shape language is **Rounded and Organic**. While the grid is structured, the corners are softened to feel approachable.

- **Standard Cards/Buttons:** 16px (1rem) corner radius.
- **Featured 3D Containers:** 24px (1.5rem) corner radius.
- **Small UI (Chips/Tags):** Fully pill-shaped (100px) to contrast against the larger structural blocks.
- **Decorative Elements:** Use perfectly circular orbs and fluid, non-geometric paths for background illustrations to maintain the "Future-Tech" vibe.

## Components

- **Buttons:** Primary buttons are solid "Electric Blue" with white text and a soft blue drop shadow. Secondary buttons use a glassmorphic style (transparent with a 1px white/blue border and blur).
- **Glass Cards:** Feature a 1px white border with 20% opacity to define the edge against white backgrounds. They should always contain a subtle internal gradient.
- **Chips & Tags:** Small, pill-shaped elements with a light blue background and dark blue text. Use these for categories or "status" indicators.
- **Input Fields:** Minimalist design with a 1px Slate-200 border that transforms into a glowing Electric Blue border on focus.
- **Progress/Graphs:** Use the "Plexus" motif—dots connected by fine lines. Data visualizations should use the primary blue and secondary slate with translucent fills.
- **Abstract Icons:** Use thin-stroke (1.5pt) linear icons with "dual-tone" properties (primary blue for accents, slate for main paths).