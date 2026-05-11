# LUKLAK SAIGON - AI DEVELOPMENT GUIDELINES

This document outlines the core technical and aesthetic conventions for developing the Luklak Saigon website. AI assistants MUST read and follow these rules before modifying or creating new code.

## 1. Technology Stack
- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons/UI**: React Icons (if needed)

## 2. Design Aesthetics & Philosophy
- **Vibe**: Luxury, high-end architectural portfolio, "Editorial/Magazine" feel.
- **Whitespace**: Generous use of padding/margin (whitespace is a premium design element).
- **Physical Photo Aesthetic**: Project images should often mimic physical printed photos. Use white borders (`p-2` or `p-3 bg-white`) and soft, deep shadows (`shadow-2xl`).
- **Typography (Vietnamese)**: Be extremely careful with Vietnamese diacritics (dấu sắc, nặng, mũ...). When using large font sizes (e.g., `text-6xl` to `text-8xl`), do NOT rely on standard Tailwind line-heights or `<br/>` tags, as the accents will collide. Always break multiline headings into separate flex-items using `flex flex-col gap-4` to force physical separation, or use explicitly large line-heights (e.g., `leading-[1.3]`).

## 3. Animation Standards (Framer Motion)
- **Ease**: Always use luxurious, cinematic easing curves. Default to: `ease: [0.16, 1, 0.3, 1]`.
- **Speed**: Animations should be slow, deliberate, and smooth. Avoid fast/snappy transitions. Default duration for hero/entrance elements should be between `2.0s` and `8.0s` depending on the dramatic effect.
- **Scattered Gallery (Collage)**: When arranging clustered images, avoid chaotic multi-axis tumbling. Use consistent single-axis rotations (e.g., `rotateY: -1080` or `rotateY: 1080`) for 3D entry effects, ending with slight, realistic 2D `rotateZ` offsets (e.g., `-12deg`, `8deg`) to create an organic, "tossed on a table" pile.
- **CSS Conflicts**: NEVER mix Tailwind's class-based transforms (e.g., `-translate-x-1/2`) with Framer Motion animations (`animate={{ rotate: x }}`) on the same element. Framer Motion's inline styles will overwrite Tailwind's transform classes. Handle all translations/rotations inside the `initial` and `animate` props.

## 4. Layout & UI Patterns
- **Hero Sections**: Favor split-screen desktop layouts (Content on one side, Interactive/Gallery on the other) to ensure everything fits elegantly within a single viewport.
- **Navigation**: The Header is sticky and uses dynamic URL parameter routing (e.g., `/projects?category=Biệt thự`) to deep-link to specific portfolio filters. Ensure these URL syncs remain functional.
- **Z-Index Management**: Be mindful of layering. Sticky headers, floating images, and text overlays must have strictly defined `z-index` classes to prevent overlapping issues.

## 5. Component Development Rules
- Keep components modular and reusable.
- Do not use hardcoded hex colors or generic Tailwind colors (e.g., `text-red-500`, `bg-blue-600`). Always rely on the project's curated semantic tokens (`text-primary`, `bg-background`, `text-secondary`, `bg-accent`).
- Ensure all layouts are highly responsive. They must gracefully stack on mobile breakpoints (e.g., `flex-col` on mobile, `grid-cols-2` on `lg` screens).

## 6. Business Logic & Terminology (CRITICAL)
- **Dự án (Projects)**: Strictly refers to **"Dự án thiết kế"** (Design Projects - 3D renders, conceptual designs).
- **Thi công (Construction)**: Strictly refers to **"Dự án thực tế"** (Actual built projects, real-life photography of completed works).
- Do NOT mix these terms up. The navigation, page headers, URL structures, and data sets must clearly separate "Thiết kế" from "Thực tế".

## 7. SEO Best Practices
All pages must be developed with standard SEO considerations:
- **Semantic HTML**: Use proper HTML5 tags (`<main>`, `<section>`, `<article>`, `<nav>`). Ensure there is only ONE `<h1>` tag per page.
- **Image Optimization (Strict)**: All `<img>` tags MUST have BOTH `alt` and `title` attributes. The text must be highly descriptive, clean, human-readable, and keyword-rich (e.g., `alt="Thiết kế nội thất biệt thự tân cổ điển Luklak Saigon"`). Do NOT use generic text like "image" and absolutely NO auto-generated nonsense numbers, file hashes, or random codes (e.g., strictly ban `alt="img_1234"`).
- **Dynamic Routing**: Ensure dynamic routes handle canonical URLs properly and inject correct meta titles/descriptions based on the project/article content.

## 8. UI/UX Interaction Rules
- **Premium Feel**: The interface should feel "alive" but not overwhelming. Achieve this with subtle micro-interactions.
- **Hover Effects**: Interactive elements (buttons, project cards, links) must have smooth hover states (e.g., `transition-all duration-500 hover:scale-105 hover:shadow-xl`).
- **No Placeholders**: Never leave blank placeholder boxes. If a mock image is needed for layout testing, use the `generate_image` tool to create a relevant, high-quality demonstration asset.
