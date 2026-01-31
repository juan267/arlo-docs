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
          label: "Comenzando",
          translations: { en: "Getting Started" },
          items: [
            { label: "Bienvenido", slug: "getting-started/welcome", translations: { en: "Welcome" } },
            { label: "Configuración de Finca", slug: "getting-started/farm-setup", translations: { en: "Farm Setup" } },
            { label: "Usuarios y Roles", slug: "getting-started/users-roles", translations: { en: "Users & Roles" } },
            { label: "Tu Primera Semana", slug: "getting-started/first-week", translations: { en: "Your First Week" } },
          ],
        },
        {
          label: "Sanidad",
          translations: { en: "Sanitation" },
          items: [
            { label: "Introducción", slug: "sanitation/introduction", translations: { en: "Introduction" } },
            { label: "Monitores", slug: "sanitation/monitors", translations: { en: "Monitors" } },
            {
              label: "Formularios",
              translations: { en: "Forms" },
              items: [
                { label: "Guía General", slug: "sanitation/forms/guide", translations: { en: "General Guide" } },
                { label: "Campos Personalizados", slug: "sanitation/forms/custom-fields", translations: { en: "Custom Fields" } },
                { label: "Construir con IA", slug: "sanitation/ai-form-builder", translations: { en: "Build with AI" } },
                { label: "Alertas", slug: "sanitation/forms/alerts", translations: { en: "Alerts" } },
              ],
            },
            { label: "Calendario y Planificación", slug: "sanitation/calendar", translations: { en: "Calendar & Planning" } },
            { label: "Lanzador de Rutas", slug: "sanitation/launcher", translations: { en: "Route Launcher" } },
            { label: "Toma de Datos", slug: "sanitation/data-entry", translations: { en: "Data Entry" } },
            {
              label: "Informes",
              translations: { en: "Reports" },
              items: [
                { label: "Análisis de Rutas", slug: "sanitation/route-analysis", translations: { en: "Route Analysis" } },
                { label: "Mapa de Sanidad", slug: "sanitation/reports/map-reports", translations: { en: "Sanitation Map" } },
                { label: "Informes Analíticos", slug: "sanitation/reports/analytical-reports", translations: { en: "Analytical Reports" } },
                { label: "Guía de Evaluación", slug: "sanitation/reports/assessment-guide", translations: { en: "Assessment Guide" } },
              ],
            },
          ],
        },
        {
          label: "Labores",
          translations: { en: "Field Tasks" },
          items: [
            { label: "Introducción", slug: "field-tasks/introduction", translations: { en: "Introduction" } },
            { label: "Contratistas", slug: "field-tasks/contractors", translations: { en: "Contractors" } },
            { label: "Labores de Campo", slug: "field-tasks/tasks", translations: { en: "Field Tasks" } },
            { label: "Ciclos de Campo", slug: "field-tasks/cycles", translations: { en: "Field Cycles" } },
            { label: "Ejecución y Logs", slug: "field-tasks/execution", translations: { en: "Execution & Logs" } },
            { label: "Guía de Gestión", slug: "field-tasks/guides", translations: { en: "Management Guide" } },
          ],
        },
        {
          label: "Insumos",
          translations: { en: "Supplies" },
          items: [
            { label: "Introducción", slug: "supplies/introduction", translations: { en: "Introduction" } },
            { label: "Configuración", slug: "supplies/configuration", translations: { en: "Configuration" } },
            { label: "Proveedores", slug: "supplies/providers", translations: { en: "Providers" } },
            { label: "Catálogo de Insumos", slug: "supplies/catalog", translations: { en: "Supply Catalog" } },
            { label: "Entradas de Inventario", slug: "supplies/entries", translations: { en: "Inventory Entries" } },
            { label: "Salidas de Inventario", slug: "supplies/exits", translations: { en: "Inventory Exits" } },
            { label: "Reequilibrio", slug: "supplies/rebalancing", translations: { en: "Rebalancing" } },
            { label: "Guía y Reportes", slug: "supplies/guide", translations: { en: "Guide & Reports" } },
          ],
        },
        {
          label: "Cosecha",
          translations: { en: "Harvest" },
          items: [
            { label: "Introducción", slug: "harvest/introduction", translations: { en: "Introduction" } },
            { label: "Vehículos", slug: "harvest/vehicles", translations: { en: "Vehicles" } },
            { label: "Unidades de Cosecha", slug: "harvest/units", translations: { en: "Harvest Units" } },
            { label: "Grupos de Cosecha", slug: "harvest/groups", translations: { en: "Harvest Groups" } },
            { label: "Ciclos de Cosecha", slug: "harvest/cycles", translations: { en: "Harvest Cycles" } },
            { label: "Programación", slug: "harvest/scheduling", translations: { en: "Scheduling" } },
            { label: "Entradas de Cosecha", slug: "harvest/entries", translations: { en: "Harvest Entries" } },
            { label: "Guía y Reportes", slug: "harvest/guide", translations: { en: "Guide & Reports" } },
          ],
        },
        {
          label: "Remisiones",
          translations: { en: "Statements" },
          items: [
            { label: "Configuración", slug: "statements/configuration", translations: { en: "Configuration" } },
            { label: "Clientes", slug: "statements/clients", translations: { en: "Clients" } },
            { label: "Listado de Remisiones", slug: "statements/list", translations: { en: "Statement List" } },
            { label: "Guía de Creación", slug: "statements/guide", translations: { en: "Creation Guide" } },
          ],
        },
        {
          label: "Formularios Personalizados",
          translations: { en: "Custom Forms" },
          items: [
            { label: "Introducción", slug: "custom-forms/introduction", translations: { en: "Introduction" } },
            { label: "Crear Formularios", slug: "custom-forms/create", translations: { en: "Create Forms" } },
            { label: "Llenar Formularios", slug: "custom-forms/fill", translations: { en: "Fill Forms" } },
            { label: "Exportar Respuestas", slug: "custom-forms/export", translations: { en: "Export Responses" } },
          ],
        },
        {
          label: "Alertas",
          translations: { en: "Alerts" },
          items: [
            { label: "Sistema de Alertas", slug: "alerts/overview", translations: { en: "Alert System" } },
            { label: "Configurar Alertas", slug: "alerts/configure", translations: { en: "Configure Alerts" } },
            { label: "Alertas con IA", slug: "alerts/ai-alerts", translations: { en: "AI Alerts" } },
            { label: "Configuración de Finca", slug: "alerts/farm-settings", translations: { en: "Farm Settings" } },
            { label: "Gestionar Notificaciones", slug: "alerts/manage", translations: { en: "Manage Notifications" } },
          ],
        },
        {
          label: "Análisis y Decisiones",
          translations: { en: "Analysis & Decisions" },
          items: [
            { label: "Panel de Control", slug: "analysis/dashboard", translations: { en: "Dashboard" } },
            { label: "Análisis con IA", slug: "analysis/ai-analysis", translations: { en: "AI Analysis" } },
            { label: "De Datos a Acción", slug: "analysis/data-to-action", translations: { en: "Data to Action" } },
            { label: "Reportes Ejecutivos", slug: "analysis/executive-reports", translations: { en: "Executive Reports" } },
          ],
        },
        {
          label: "Guías por Rol",
          translations: { en: "Role Guides" },
          items: [
            { label: "Guía del Propietario", slug: "role-guides/owner", translations: { en: "Owner Guide" } },
            { label: "Guía del Administrador", slug: "role-guides/admin", translations: { en: "Admin Guide" } },
            { label: "Guía del Supervisor", slug: "role-guides/supervisor", translations: { en: "Supervisor Guide" } },
          ],
        },
        {
          label: "Herramientas Avanzadas",
          translations: { en: "Advanced Tools" },
          items: [
            { label: "Cargas Masivas", slug: "advanced/bulk-uploads", translations: { en: "Bulk Uploads" } },
            { label: "Exportaciones", slug: "advanced/exports", translations: { en: "Exports" } },
          ],
        },
      ],
    }),
  ],

  adapter: netlify(),
});
