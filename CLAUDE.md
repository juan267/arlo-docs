# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the documentation site for Arlo Agro, a farm management platform. Built with Astro Starlight and deployed to Netlify.

## Commands

```bash
yarn dev        # Start dev server at localhost:4321
yarn build      # Build production site to ./dist/
yarn preview    # Preview production build locally
```

## Architecture

- **Framework**: Astro 5.x with Starlight documentation theme
- **Theme**: starlight-theme-rapide
- **Deployment**: Netlify adapter configured
- **Localization**: Bilingual (Spanish default, English available)

## Content Structure

Documentation lives in `src/content/docs/` organized by locale:
- `src/content/docs/es/` - Spanish content (default)
- `src/content/docs/en/` - English content

Each locale mirrors the same structure with matching slugs. The sidebar is configured in `astro.config.mjs` with these main sections:
- Sanidad/Sanitation - pest monitoring and inspections
- Labores/Field Tasks - contractor and field work management
- Insumos/Supplies - inventory management
- Cosecha/Harvest - harvest tracking
- Remisiones/Statements - shipping statements

## Key Files

- `astro.config.mjs` - Starlight configuration, sidebar structure, locales
- `src/content/config.ts` - Content collection schema using Starlight's docsLoader
- `src/assets/` - Logo files (logo.svg, logo-dark.svg)

## Writing Documentation

- Use `.md` for simple pages, `.mdx` when importing Starlight components
- Frontmatter requires `title` and `description`
- Starlight components available: `Card`, `CardGrid`, `LinkCard` (import from `@astrojs/starlight/components`)
- Images go in `src/assets/`, reference with relative paths
- Static assets (favicon) go in `public/`
