---
title: Labores de Campo
description: Define y estandariza el trabajo realizado en tu finca para un seguimiento preciso de costos y planificación.
---

Las **Labores de Campo** son los bloques de construcción de las operaciones de tu finca. Representan tipos estandarizados de trabajo, como "Deshierbe Manual", "Poda" o "Fertilización". Al definir estas labores claramente, puedes rastrear los costos con precisión y planificar tus ciclos de trabajo de manera efectiva.

---

## 1. Crear una Labor de Campo

Navega a **Finca → Labores** y haz clic en **Agregar Labor**.

### Significado de los Campos

- **Nombre:** Un nombre descriptivo para la labor (ej. "Guadaña de Calles").
- **Código:** Un identificador abreviado único (ej. "GUA-01"). Se utiliza para búsquedas rápidas y cargas masivas.
- **Precio por Defecto:** La cantidad estándar pagada a un contratista por unidad de esta labor. La moneda sigue la configuración de tu finca.
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

## 3. Unidades: Consumo vs. Compra

Comprender cómo el sistema maneja las unidades es clave para un análisis preciso de inventario y costos.

### Unidad de Compra (Stock)

Es la forma en que **compras** los insumos a los proveedores (ej. un _Bidón de 20L_ de Herbicida o un _Saco de 50kg_ de Fertilizante). Tu inventario se rastrea en estas unidades.

### Unidad de Consumo (Aplicación)

Es la forma en que **aplicas** el insumo en el campo (ej. _Mililitros_ por árbol o _Gramos_ por planta).

### Unidad de Labor (Ejecución)

Es la métrica del trabajo (ej. _Árboles_ podados o _Metros_ guadañados).

### WAVCO (Costo Promedio Ponderado)

El sistema utiliza el **WAVCO** para traducir el precio de tu Unidad de Compra a un costo de Unidad de Consumo.
_Ejemplo:_ Si compras un saco de 50kg por $100, y una Labor de Campo consume 500g por árbol, el sistema calcula automáticamente el costo por árbol como $1. Esto asegura que tu **Costo Real** en un ciclo de labor refleje el valor real de los insumos utilizados.

---

## 4. Carga Masiva

Si tienes una lista larga de labores, utiliza la función de **Carga Masiva** en el índice de Labores.

1.  Descarga la plantilla.
2.  Completa el `código`, `nombre`, `precio_por_defecto` y `unidad_de_labor`.
3.  Sube el archivo para crear o actualizar múltiples labores a la vez.
