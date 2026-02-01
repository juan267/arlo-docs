---
title: Salidas de Inventario
description: Rastrea el consumo de insumos en labores de campo y lotes para monitorear costos y niveles de inventario.
---

Una **Salida de Insumo** se registra cada vez que un material se retira de la bodega y se aplica en el campo. Este proceso disminuye tu stock físico y asigna un costo financiero a una ubicación y actividad específica.

---

## 1. Uso Contextual

Para proporcionar información valiosa, cada salida de insumo debe estar vinculada a:

- **Lote:** Exactamente dónde se aplicó el insumo. Esto te permite ver el "Costo por Lote" en tus informes.
- **Labor de Campo:** Qué actividad requirió el insumo (ej. "Fertilización" o "Control de Plagas").
- **Contratista:** Quién fue responsable de aplicar el material. Esto ayuda a rastrear la eficiencia y la responsabilidad.

---

## 2. Actualizaciones Automáticas de Inventario

Cuando se guarda una Salida de Insumo, ocurre lo siguiente instantáneamente:

1.  **Reducción de Stock:** El sistema calcula la cantidad equivalente en **Unidades de Compra** y la resta de tu inventario actual.
2.  **Asignación de Costo:** La salida utiliza el **precio WAVCO actual** en ese momento exacto. Esto asegura que tus costos de campo se basen en lo que realmente pagaste por los insumos en stock.
3.  **Monto Total:** El sistema calcula `Cantidad de Consumo × Precio WAVCO Actual` para determinar el impacto financiero.

---

## 3. Protección de Stock

Dependiendo de la **Configuración de tu Finca**, el sistema actúa como una salvaguarda:

- **Si el Stock Negativo NO ESTÁ PERMITIDO:** El sistema bloqueará la salida si la cantidad solicitada es mayor a la disponible en la bodega. Aparecerá un mensaje de error y deberás registrar primero una **Entrada de Insumo**.
- **Si el Stock Negativo ESTÁ PERMITIDO:** La salida se guardará y tu nivel de stock pasará a números negativos. Ten en cuenta que esto puede generar inexactitudes temporales en tus cálculos de costo promedio hasta que se registre una nueva compra.

---

## 4. Cómo Crear una Salida

1. Navega a **Insumos → Salidas de Insumos**.
2. Haz clic en **Nueva Salida**.
3. Selecciona el **Insumo** que se va a utilizar.
4. Elige el **Lote**, la **Labor de Campo** y el **Contratista**.
5. Ingresa la **Cantidad de Consumo** (ej. cuántos cc o kg se usaron).
6. Establece la **Fecha** y añade cualquier **Nota** (ej. "Había mucho viento durante la aplicación").
7. **Guarda** para actualizar el stock y los costos de la actividad.

:::tip[Integración]
Registrar las salidas es lo que permite que la **Guía de Gestión de Insumos** te muestre qué lotes o labores están consumiendo más recursos y hacia dónde se está yendo tu dinero.
:::
