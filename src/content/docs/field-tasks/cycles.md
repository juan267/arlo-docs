---
title: Ciclos de Campo
description: Domina la gestión de los ciclos de trabajo, desde la planificación y el presupuesto hasta la ejecución y el análisis final de costos.
---

Los **Ciclos de Campo** son el núcleo de la planificación operativa. Te permiten agrupar múltiples labores de campo durante una ventana de tiempo específica, asignarlas a contratistas y lotes, y rastrear su progreso físico y financiero.

---

## 1. Comprender la Duración del Ciclo

Cada finca tiene un ritmo preferido de **1 a 4 semanas ISO** (lunes–domingo). Configúralo en **Finca → Configuración → Configuración de Labores**.

- **¿Por qué configurar esto?** Cuando creas un nuevo ciclo, eliges la **semana de inicio**. El sistema llena esa cantidad de semanas libres y acorta el ciclo si una semana posterior ya está ocupada.
- **Ritmos:**
  - **1 semana:** seguimiento semanal.
  - **2 semanas:** ritmo quincenal de pago a contratistas.
  - **3–4 semanas:** planificación operativa más larga.

Los ciclos nuevos no se miden en 15 o 30 días corridos. El serial se sugiere desde las semanas elegidas (por ejemplo `FC-2026-SEM-33`). Pueden existir ciclos antiguos con otras duraciones.

---

## 2. Planificar el Ciclo (Labores)

Una vez creado un ciclo, agregas trabajos específicos utilizando las **Labores**.

### Crear Labores

En la página de detalles del Ciclo de Campo, haz clic en **Agregar Labor al Ciclo**. Para cada labor, defines:

- **Contratista:** ¿Quién es el responsable?
- **Labor de Campo:** ¿Cuál es el trabajo específico (ej. Poda)?
- **Lote:** ¿Dónde se realizará?
- **Cantidad Presupuestada:** ¿Cuántas unidades (árboles, metros, etc.) están planeadas?
- **Programación (Opcional):** Puedes elegir una fecha/hora específica dentro de la ventana del ciclo para organizar tu calendario.

### Costo Presupuestado vs. Real

- **Costo Presupuestado:** Se calcula automáticamente como `Cantidad Presupuestada × Precio por Defecto de la Labor`. Esto te da una proyección financiera del ciclo antes de que comience cualquier trabajo.
- **Costo Real:** Se calcula a partir de los **Registros (Logs)** subidos a medida que se ejecuta el trabajo. Esto representa lo que realmente le debes al contratista.

---

## 3. Seguimiento de Ejecución (Logs)

A medida que el trabajo se completa en el campo, lo registras usando **Logs**.

- **Agregar un Log:** Haz clic en una labor para agregar las unidades completadas, la fecha del trabajo y notas opcionales.
- **Porcentaje de Progreso:** El sistema actualiza automáticamente el progreso (ej. si presupuestaste 100 árboles y registras 50, la labor pasa al 50% de progreso).
- **Registro de Cambios:** Cada cambio en una programación o log es rastreado. Puedes ver cuándo se inició una labor, cuándo llegó al 100% y quién modificó el registro.

---

## 4. Ciclo de Vida de los Estados

Las labores pasan por varios estados, indicados por colores:

- **⚪ Pendiente:** No programado y no iniciado.
- **🔵 Programado:** Planeado para una fecha futura.
- **🔴 Retrasado:** Programado para el pasado pero no se ha registrado trabajo.
- **🟢 Completado:** Llegó al 100% de progreso o se marcó como finalizado.
- **🟣 Incompleto:** El ciclo terminó antes de que el trabajo llegara al 100%.

---

## 5. Navegar por la Vista del Ciclo

La **Página de Detalle del Ciclo** ofrece varias herramientas de gestión:

- **Navegación del Calendario:** Mira el trabajo por semana. Usa los botones de flecha para avanzar o retroceder dentro de la ventana del ciclo.
- **Filtros:** Aísla rápidamente el trabajo por un **Contratista**, **Lote** o **Estado** específico.
- **Exportaciones:**
  - **XLSX:** Descarga una hoja de cálculo detallada que incluye cada log y un resumen de costos por contratista.
  - **PDF ZIP:** Genera "Órdenes de Servicio" o "Resúmenes de Pago" individuales para cada contratista en un solo archivo ZIP. Úsalos como registros formales para tu departamento de contabilidad.

:::tip[Consejo Profesional]
Puedes mover el trabajo programado directamente en el calendario editando la labor. Esto te ayuda a reequilibrar la carga de trabajo si un contratista se está quedando atrás.
:::
