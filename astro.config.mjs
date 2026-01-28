// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeRapide from "starlight-theme-rapide";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.arloagro.com",

  integrations: [
    starlight({
      favicon: "favicon.ico",
      plugins: [starlightThemeRapide()],
      title: "Docs",
      defaultLocale: "es",
      locales: {
        // English docs in `src/content/docs/en/`
        en: {
          label: "English",
        },
        // Spanish docs in `src/content/docs/es/`
        es: {
          label: "Español",
        },
      },
      logo: {
        light: "./src/assets/logo.svg",
        dark: "./src/assets/logo-dark.svg",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Sanidad",
          items: [
            {
              label: "Monitores",
              items: [{ label: "Guía", slug: "sanitation/monitors" }],
            },
            {
              label: "Formularios",
              items: [
                { label: "Guía General", slug: "sanitation/forms/guide" },
                {
                  label: "Campos Personalizados",
                  slug: "sanitation/forms/custom-fields",
                },
                { label: "Alertas", slug: "sanitation/forms/alerts" },
              ],
            },
            { label: "Calendario", slug: "sanitation/calendar" },
            { label: "Lanzador de Rutas", slug: "sanitation/launcher" },
            { label: "Toma de Datos", slug: "sanitation/data-entry" },
            {
              label: "Informes",
              items: [
                {
                  label: "Análisis de Resultados",
                  slug: "sanitation/route-analysis",
                },
                {
                  label: "Mapa de Sanidad",
                  slug: "sanitation/reports/map-reports",
                },
                {
                  label: "Informes Analíticos",
                  slug: "sanitation/reports/analytical-reports",
                },
                {
                  label: "Guía de Evaluación",
                  slug: "sanitation/reports/assessment-guide",
                },
              ],
            },
          ],
        },
        {
          label: "Labores",
          items: [
            { label: "Contratistas", slug: "field-tasks/contractors" },
            { label: "Labores de Campo", slug: "field-tasks/tasks" },
            { label: "Ciclos de Labor", slug: "field-tasks/cycles" },
            { label: "Guía de Gestión", slug: "field-tasks/guides" },
          ],
        },
      ],
    }),
  ],

  adapter: netlify(),
});
