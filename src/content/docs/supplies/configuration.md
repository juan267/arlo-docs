---
title: Configuración de Insumos
description: Configura el comportamiento de los insumos en tu finca, incluyendo moneda, zona horaria y políticas de stock.
---

Configurar correctamente los ajustes de tu finca es el primer paso para una gestión de inventario precisa. Estos ajustes aseguran que tus costos, marcas de tiempo y niveles de stock reflejen tus operaciones en el mundo real.

Puedes acceder a estos ajustes navegando a **Finca → Configuración → Editar**.

---

## 1. Moneda de la Finca

La moneda que selecciones aquí se utilizará para todas las transacciones relacionadas con insumos, incluyendo:

- **Entradas de Insumos:** Precios de unidad de compra y montos totales de compra.
- **Cálculos de WAVCO:** Costos promedio tanto para unidades de compra como de consumo.
- **Informes:** Perspectivas financieras y valor total del inventario.

Asegúrate de que esto esté configurado correctamente antes de registrar compras para mantener la consistencia en tus registros financieros.

---

## 2. Política de Stock Negativo

Uno de los ajustes más críticos en el módulo de Insumos es **"Permitir Stock Negativo de Insumos"**.

- **Desactivado (Predeterminado - Recomendado):** El sistema te impedirá registrar una **Salida de Insumo** si no hay suficiente inventario en stock. Esto asegura que tu inventario digital coincida con la realidad física y obliga a un registro preciso de las entradas.
- **Activado:** Puedes registrar el uso de insumos incluso si el sistema muestra 0 unidades. Esto es útil durante el proceso inicial de implementación si aún no has terminado de registrar todo el historial de compras pero necesitas rastrear las aplicaciones actuales en campo.

:::caution[Integridad de Datos]
Permitir stock negativo puede distorsionar tus cálculos de **WAVCO (Costo Promedio Ponderado)**. Recomendamos mantener esto desactivado para un seguimiento de costos profesional.
:::

---

## 3. Zona Horaria

La zona horaria de la finca asegura que todos los movimientos de inventario (Entradas, Salidas y Devoluciones) se registren con la marca de tiempo local correcta. Esto es vital para:

- **Procesamiento Cronológico:** El sistema procesa las transacciones en orden de tiempo para calcular los niveles de stock y los costos promedio correctamente.
- **Auditoría:** Saber exactamente cuándo se recibió o utilizó un insumo en el campo.
- **Informes Diarios:** Alinear las fotos instantáneas del inventario con el final de tu día operativo.
