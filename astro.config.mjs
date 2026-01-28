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
            { label: "Ciclos de Campo", slug: "field-tasks/cycles" },
            { label: "Guía de Gestión", slug: "field-tasks/guides" },
          ],
        },
        {
          label: "Insumos",
          items: [
            { label: "Configuración", slug: "supplies/configuration" },
            { label: "Proveedores", slug: "supplies/providers" },
            { label: "Catálogo de Insumos", slug: "supplies/catalog" },
            { label: "Entradas de Inventario", slug: "supplies/entries" },
            { label: "Salidas de Inventario", slug: "supplies/exits" },
            {
              label: "Reequilibrio de Inventario",
              slug: "supplies/rebalancing",
            },
            { label: "Guía y Reportes", slug: "supplies/guide" },
          ],
        },
        {
          label: "Cosecha",
          items: [
            { label: "Vehículos", slug: "harvest/vehicles" },
            { label: "Unidades de Cosecha", slug: "harvest/units" },
            { label: "Grupos de Cosecha", slug: "harvest/groups" },
            { label: "Entradas de Cosecha", slug: "harvest/entries" },
            { label: "Ciclos de Cosecha", slug: "harvest/cycles" },
            { label: "Guía y Reportes", slug: "harvest/guide" },
          ],
        },
        {
          label: "Remisiones",
          items: [
            { label: "Configuración", slug: "statements/configuration" },
            { label: "Clientes", slug: "statements/clients" },
            { label: "Listado de Remisiones", slug: "statements/list" },
            { label: "Guía de Creación", slug: "statements/guide" },
          ],
        },
      ],
    }),
  ],

  adapter: netlify(),
});
