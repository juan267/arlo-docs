---
title: Entradas de Inventario
description: Registra órdenes de compra y reabastece tu inventario manteniendo una base de costos precisa.
---

Una **Entrada de Insumo** representa un evento de compra. Es el mecanismo que añade stock físico a tu bodega y actualiza el valor financiero (WAVCO) de tus insumos.

---

## 1. Agrupación de Insumos

Las órdenes de compra a menudo contienen múltiples artículos diferentes del mismo vendedor. El sistema te permite agrupar estos en una sola Entrada:

- **Información del Encabezado:** Incluye el **Proveedor de Insumos**, el **Número de Documento** (Factura o Recibo) y la **Fecha de Entrada**.
- **Items de Línea:** Puedes agregar múltiples insumos a una sola entrada. Para cada artículo, especificas la **Cantidad de Compra** y el **Precio de Unidad de Compra**.

---

## 2. Cálculos Automáticos

Cuando registras una compra en **Unidades de Compra**, el sistema realiza automáticamente varias tareas en segundo plano para asegurar la integridad de los datos:

- **Cantidad de Consumo:** Utiliza tu **Conversión de Unidades** predefinida para calcular cuántas unidades de consumo se están añadiendo (ej. ingresar 2 bultos de 50kg calculará automáticamente 100kg de stock de consumo).
- **Precio de Unidad de Consumo:** Divide automáticamente el precio de compra por el factor de conversión para obtener el costo granular.
- **Actualización de WAVCO:** Recalcula el Costo Promedio Ponderado para todo el stock de ese insumo, mezclando el precio de la nueva compra con el inventario existente.

---

## 3. Lógica de Validación

Para prevenir errores en el ingreso de datos, el sistema incluye una capa estricta de validación:

- **Coincidencia de Totales:** El sistema verifica que el **Monto Total** calculado para las unidades de compra coincida con el total para las unidades de consumo. Si hay una discrepancia (más allá de una pequeña tolerancia por redondeo), la entrada no se guardará.
- **Proveedor Obligatorio:** Cada entrada debe estar vinculada a un **Proveedor de Insumos** válido.
- **Bloqueos Históricos:** Para mantener la integridad contable, el sistema impide editar entradas que tengan más de 2 meses de antigüedad.

---

## 4. Cómo Crear una Entrada

1. Navega a **Insumos → Entradas de Insumos**.
2. Haz clic en **Nueva Entrada**.
3. Selecciona el **Proveedor** e ingresa el **Número de Factura**.
4. Establece la **Fecha** (por defecto es hoy).
5. Agrega tus insumos como **Items de Línea**.
6. **Guarda** para actualizar tus niveles de inventario instantáneamente.

:::tip[Carga Masiva]
Si estás migrando una gran cantidad de stock de un sistema antiguo o realizando un reabastecimiento masivo anual, puedes usar la función de **Carga Masiva** en el índice de Insumos para inicializar tus niveles de stock.
:::
