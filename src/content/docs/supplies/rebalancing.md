---
title: Reequilibrio de Inventario
description: Aprende a conciliar tu inventario digital con los conteos físicos de bodega usando la herramienta de Reequilibrio.
---

El **Reequilibrio de Inventario** es una herramienta potente pero destructiva que se utiliza para sincronizar tus registros digitales con la realidad física de tu bodega. Se utiliza típicamente durante la configuración inicial, después de un conteo físico de inventario, o para corregir errores históricos de ingreso de datos.

---

## 1. Cómo funciona el Reequilibrio

A diferencia de una **Entrada de Insumo** estándar, que simplemente añade stock, el Reequilibrio reinicia el estado del inventario de tus insumos a una "línea base" específica en una fecha elegida.

### La Lógica

1.  **Fecha de Corte:** Eliges una fecha para el reequilibrio (ej. el último día del mes).
2.  **Limpieza de Transacciones:** El sistema **elimina permanentemente (soft-delete)** todas las Entradas y Salidas históricas para esos insumos en o antes de esa fecha.
3.  **Nueva Línea Base:** El sistema crea una entrada especial de "REEQUILIBRIO" que establece tu stock y precio promedio con los nuevos valores que proporcionaste.
4.  **Reprocesamiento Futuro:** Cualquier transacción que haya ocurrido **después** de la fecha de reequilibrio se reprocesa automáticamente para asegurar que tus niveles de stock actuales sigan siendo precisos.

---

## 2. Proceso de Reequilibrio Paso a Paso

Navega a **Insumos → Reequilibrio de Inventario**.

### Paso 1: Descargar la Plantilla

Haz clic en **Descargar Plantilla (.xlsx)**. Este archivo contendrá todos tus insumos actuales.

- **Nombre y Código del Insumo:** No modifiques estas columnas.
- **Fecha de Reequilibrio:** La fecha en que se realizó el conteo físico.
- **Nuevo Stock de Unidad de Compra:** El conteo físico de unidades en tu bodega.
- **Nuevo Precio Promedio de Compra:** La base de costo actual para esas unidades.

### Paso 2: Realizar el Conteo Físico

Ve a tu bodega y cuenta cada artículo. Asegúrate de medir en las **Unidades de Compra** correctas (ej. Bultos, Litros) según están definidas en tu catálogo.

### Paso 3: Subir y Confirmar

Sube el archivo Excel completado.
:::danger[Advertencia: Acción Destructiva]
El reequilibrio eliminará todas las transacciones en o antes de la fecha especificada. Esta acción no se puede deshacer fácilmente. Siempre verifica tus números antes de confirmar.
:::

---

## 3. Notas Importantes

- **Proveedor:** El sistema utiliza un "Proveedor de Reequilibrio" especial para estas entradas para distinguirlas de las compras regulares.
- **Reinicio de WAVCO:** El reequilibrio es la única forma de "arreglar" manualmente un precio WAVCO distorsionado sin tener que eliminar transacciones individuales manualmente.
- **Ciclos Activos:** Si reequilibras un insumo que se usó en un ciclo de campo activo, los costos de esas actividades de campo se actualizarán para reflejar el nuevo precio reequilibrado.
- **Confirmación por Correo:** Dado que el reequilibrio puede involucrar muchos datos, se ejecuta en segundo plano. Recibirás un correo electrónico una vez que el proceso haya terminado.

---

## 4. ¿Cuándo Reequilibrar?

- **Implementación Inicial:** Al migrar de papel u otro software a este sistema.
- **Auditorías Anuales:** Después de tu inventario físico anual o trimestral.
- **Corrección:** Si un error grave de ingreso de datos hace meses ha hecho que tus niveles de stock actuales sean completamente irreales.
