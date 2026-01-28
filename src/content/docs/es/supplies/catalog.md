---
title: Catálogo de Insumos
description: Gestiona tus artículos de insumos, unidades y tasas de conversión para un seguimiento de costos preciso.
---

El **Catálogo de Insumos** es la lista maestra de todos los materiales agrícolas utilizados en tu finca. Al igual que las Labores de Campo, los insumos están diseñados para ser creados **una sola vez** y luego ser reutilizados en todos los movimientos de inventario (Entradas, Salidas y Devoluciones).

---

## 1. Unidades: Compra vs. Consumo

Una de las características más potentes del sistema es la capacidad de manejar diferentes unidades para la compra y para la aplicación en campo.

### Unidad de Compra

Es la forma en que **compras y almacenas** el insumo. Ejemplos:

- **Sacos/Bultos** (ej. Fertilizante)
- **Litros** o **Galones** (ej. Pesticida líquido)
- **Botellas** o **Envases**

### Unidad de Consumo

Es la forma en que **aplicas** el insumo en el campo. Ejemplos:

- **Kilogramos (kg)** o **Gramos (gr)**
- **Centímetros Cúbicos (cc)** o **Mililitros (ml)**

### Conversión de Unidades

El factor de **Conversión de Unidades** le dice al sistema cuántas unidades de consumo hay en una unidad de compra.

| Insumo    | Unidad de Compra | Unidad de Consumo | Conversión | Explicación                                |
| :-------- | :--------------- | :---------------- | :--------- | :----------------------------------------- |
| Urea      | Bulto            | kg                | **50**     | 1 bulto contiene 50 kilogramos.            |
| Herbicida | Litro            | cc                | **1000**   | 1 litro contiene 1000 centímetros cúbicos. |
| Abono     | Envase           | gr                | **5000**   | 1 envase contiene 5000 gramos.             |

:::tip[Misma Unidad]
Si compras y usas un insumo en la misma unidad (ej. comprar una "Unidad" de un repuesto y usar una "Unidad"), configura la unidad de consumo como "Igual a la de compra". La conversión será automáticamente 1.
:::

---

## 2. Entendiendo el WAVCO

**WAVCO** significa **Costo Promedio Ponderado** (Weighted Average Cost). Es el corazón financiero del módulo de insumos.

A diferencia del precio promedio simple, el WAVCO tiene en cuenta la **cantidad** de artículos que ya hay en stock y su costo, y los promedia con la cantidad y el precio de las nuevas compras.

### ¿Por qué es útil?

A medida que los precios de los proveedores fluctúan debido a la inflación o cambios en el mercado, el WAVCO asegura que el costo asignado a tus labores de campo represente un precio "mezclado" justo de todas las unidades que están actualmente en tu bodega.

**Ejemplo:**

1. Tienes **10 unidades** compradas a **$10** cada una (Valor Total: $100).
2. Compras **10 unidades nuevas** a **$20** cada una (Valor Total: $200).
3. Tu nuevo WAVCO es **$15** ($300 valor total / 20 unidades).
4. Cuando registres una salida, el sistema usará **$15** como costo, sin importar si estás usando físicamente una botella "vieja" o "nueva".

---

## 3. Historial de Transacciones y Devoluciones

Cada insumo tiene una **Vista de Detalle** (Navega a **Insumos → Haz clic en un Insumo**) que sirve como un historial de auditoría completo.

### Instantánea de Inventario (Viaje en el Tiempo)

El sistema te permite ver exactamente cuánto stock y cuál era el precio promedio en cualquier fecha específica del pasado. Esto es útil para auditorías de fin de mes o para conciliar conteos físicos.

### Tabla de Transacciones

Puedes ver cada Entrada, Salida y Devolución en orden cronológico, incluyendo:

- Quién suministró o aplicó el insumo.
- El precio y la cantidad exacta utilizados.
- El impacto financiero total del movimiento.

### Devoluciones

Si un contratista devuelve insumo no utilizado a la bodega después de que se registró una salida, puedes crear una **Devolución**.

1. Busca la **Salida** específica en la tabla de transacciones.
2. Haz clic en el botón **Devolver**.
3. Especifica la cantidad que se devuelve.
4. El sistema aumentará automáticamente el nivel de stock y ajustará el valor del inventario.
