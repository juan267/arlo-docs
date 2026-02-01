---
title: Labores de Campo
description: Define y estandariza el trabajo realizado en tu finca para un seguimiento preciso de costos y planificación.
---

Las **Labores de Campo** son los bloques de construcción de las operaciones de tu finca. Representan tipos estandarizados de trabajo, como "Deshierbe Manual", "Poda" o "Fertilización". Al definir estas labores claramente, puedes rastrear los costos con precisión y planificar tus ciclos de trabajo de manera efectiva.

---

## 1. Crear una Labor de Campo

Navega a **Finca → Labores** y haz clic en **Agregar Labor**.

:::important[Crea una vez, usa siempre]
Las labores de campo están diseñadas para ser creadas **una sola vez**. Una vez que has definido una labor (ej. "Poda de Formación"), puedes reutilizarla en tantos **Ciclos de Campo** como sea necesario a lo largo de los años. No necesitas crear una nueva labor para cada ciclo o cada mes; simplemente selecciónala del listado al planificar tu ciclo.
:::

### Significado de los Campos

- **Nombre:** Un nombre descriptivo para la labor (ej. "Guadaña de Calles").
- **Código:** Un identificador abreviado único (ej. "GUA-01"). Se utiliza para búsquedas rápidas y cargas masivas.
- **Precio por Defecto:** La cantidad estándar pagada a un contratista por unidad de esta labor. La moneda sigue la configuración de tu finca.

:::caution[Actualización de Precios]
Si actualizas el **Precio por Defecto** de una labor, el sistema recalculará automáticamente los costos presupuestados y reales de todos los **Ciclos de Campo activos o futuros**. Los ciclos que ya han finalizado conservarán sus costos originales para proteger tus registros históricos.
:::

- **Unidad de Labor:** La métrica utilizada para medir el progreso. Ejemplos comunes incluyen _Árbol_, _Palma_, _Lote_ o _Metro_.
- **Descripción:** Contexto adicional sobre los requisitos o estándares de la labor.

---

## 2. Mejor Práctica: Segregación de Labores

Un error común es crear labores amplias y genéricas como "Manejo Integrado de Plagas" o "Mantenimiento General". Para un seguimiento de costos profesional, **lo mejor es separar las labores por acción específica.**

### ¿Por qué segregar?

Considera el "Manejo de Malezas". En lugar de una sola labor, crea:

1.  **Guadaña para Calles:** Medida en metros o lotes.
2.  **Plateo Manual:** Medido en árboles.
3.  **Plateo Químico:** Medido en árboles y vinculado al uso de insumos.

**Beneficios:**

- **Costeo Preciso:** Es posible que pagues de manera diferente por el trabajo manual frente al trabajo con maquinaria.
- **Información de Eficiencia:** Puedes ver si el "Plateo Manual" se está volviendo demasiado caro en comparación con el "Plateo Químico".
- **Planificación Granular:** Puedes programar guadaña para un lote y plateo para otro dentro del mismo ciclo.

---

## 3. Carga y Actualización Masiva

Para fincas con un gran volumen de datos, la **Carga Masiva** es la herramienta más eficiente para gestionar el catálogo de labores. Puedes encontrar esta opción en el botón **Carga Masiva** dentro del listado de Labores.

### Cómo funciona el proceso

1.  **Descarga la Plantilla:** Haz clic en **Descargar Plantilla (.xlsx)**. El sistema generará un archivo inteligente que incluye:
    - **Tus Labores Actuales:** Como ejemplos para que solo tengas que editarlas.
    - **Validaciones de Datos:** Desplegables en columnas como "Unidad de Labor" para evitar errores de escritura.
    - **Hoja de Instrucciones:** Detalles sobre el formato esperado para cada columna.
2.  **Prepara los Datos:** Completa o edita la información en el archivo Excel.
3.  **Sube el Archivo:** Arrastra y suelta tu archivo en el área de carga.

### Actualizaciones Masivas (Ej. Ajuste de Precios Anual)

El sistema utiliza el **Código** de la labor para identificar si debe crear un registro nuevo o actualizar uno existente.

- **Si el código ya existe:** El sistema actualizará el nombre, la descripción y el precio de esa labor. Esto es ideal para realizar el **ajuste anual de precios** en cuestión de segundos: descargas la plantilla con tus precios actuales, los actualizas en Excel y vuelves a subir el archivo.
- **Si el código es nuevo:** Se creará una nueva labor de campo.

### Notificaciones y Reporte de Errores

Una vez procesado el archivo, recibirás un **correo electrónico** con el resumen del proceso:

- **Éxito:** Cuántas labores fueron creadas y cuántas actualizadas.
- **Errores:** Si hubo algún problema (ej. un código duplicado o una unidad inválida), el correo incluirá un **Reporte de Errores en Excel**. Este reporte te indicará exactamente en qué fila está el error y qué debes corregir.

:::tip[Eficiencia]
Usa la carga masiva no solo para empezar, sino como tu herramienta principal de mantenimiento para mantener tus costos actualizados año tras año.
:::
