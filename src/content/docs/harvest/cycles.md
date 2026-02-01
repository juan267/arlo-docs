---
title: Ciclos de Cosecha
description: Planifique y monitoree sus períodos de cosecha con calendarios y seguimiento del rendimiento.
---

Un **Ciclo de Cosecha** es un contenedor para un período de cosecha específico (ej. "Verano 2024", "Cosecha Q3" o "Temporada Principal"). Le permite organizar sus programas, realizar un seguimiento de los resultados reales y gestionar los envíos dentro de un marco de tiempo definido.

---

## 1. Crear un Ciclo de Cosecha

Navegue a **Cosecha → Ciclos de Cosecha** y haga clic en **Agregar Ciclo de Cosecha**.

### Campos

- **Código de Referencia:** Un nombre único para el período (ej. "H-2024-01").
- **Fecha de Inicio:** El día en que comienzan las operaciones de cosecha.
- **Fecha de Finalización:** El día en que concluyen las operaciones de cosecha.

:::note[Integridad de Fechas]
El sistema evita la superposición de ciclos de cosecha para asegurar la consistencia de los datos. Además, no puede eliminar un ciclo si ya tiene programas planificados o si ya ha pasado su fecha de finalización.
:::

---

## 2. Planificación vs. Reales

La vista del Ciclo de Cosecha se divide en tres secciones interactivas principales:

### Programas de Cosecha (Planificación)

Aquí es donde planifica su trabajo. En el **Calendario**, puede hacer clic en cualquier fecha para programar una cosecha.

- **Seleccionar Lote y Grupo:** Especifique quién cosechará y dónde.
- **Seleccionar Unidad y Cantidad:** El sistema calculará el peso esperado.
- **Filtros:** Puede filtrar el calendario por Lote o Grupo de Cosecha para ver planes específicos.

### Cosechas Reales (Ejecución)

El sistema agrega automáticamente sus **Entradas de Cosecha** en esta sección.

- **Estado de Rendimiento:** Cada combinación de día/lote/grupo tiene un código de colores:
  - <span style="color: #10b981; font-weight: bold;">Verde (En Meta):</span> 95% - 105% del plan.
  - <span style="color: #f59e0b; font-weight: bold;">Ámbar (Bajo Meta):</span> Menos del 95% del plan.
  - <span style="color: #3b82f6; font-weight: bold;">Azul (Sobre Meta):</span> Más del 105% del plan.
  - <span style="color: #6b7280; font-weight: bold;">Gris:</span> Sin plan o sin entradas registradas.

### Envíos de Cosecha

Rastree lo que ha enviado a los clientes. Esta sección incluye su propio calendario y tablas resumen por cliente.

---

## 3. El Tablero Interactivo

La página de "Detalles" del Ciclo de Cosecha proporciona información en tiempo real:

- **Tablas Resumen:** Vea los totales por Lote, Cliente y Unidad de Cosecha.
- **Resumen de Rendimiento:** Una vista de alto nivel de cuánto se ha cosechado vs. lo que se planificó para todo el ciclo.
- **Exportación PDF:** Use el icono de la **Impresora** en la sección de Programas para descargar un PDF profesional de su plan de cosecha.

---

## 4. Entendiendo los Componentes

### Programa de Cosecha vs. Cosecha Real

- **Programa:** Su plan "Ideal" creado antes de que comience el trabajo.
- **Real:** La "Realidad" calculada automáticamente a partir de los pesos de la báscula registrados en las **Entradas de Cosecha**.

El sistema los vincula por **Fecha, Lote y Grupo de Cosecha** para calcular la varianza y el porcentaje de rendimiento.

---

## 5. Mejores Prácticas

- **Planifique Temprano:** Complete sus programas de cosecha al inicio de la semana o mes.
- **Use el PDF:** Imprima el programa de cosecha y entrégueselo a los supervisores para que sepan exactamente cuáles son las metas.
- **Monitoree las Variaciones:** Si un lote está constantemente "Bajo Meta" (Ámbar), investigue si hay problemas de salud en esos árboles o si el grupo de cosecha necesita más apoyo.
