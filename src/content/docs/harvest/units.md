---
title: Unidades de Cosecha
description: Defina los contenedores o unidades utilizados para la medición durante la cosecha.
---

Las **Unidades de Cosecha** representan los contenedores físicos o unidades estandarizadas utilizadas durante el proceso de cosecha (ej. canastillas, bines, sacos o cajas). Estas unidades son esenciales para la planificación y el seguimiento, ya que permiten al sistema estimar el peso total y monitorear la eficiencia de los cosechadores.

---

## 1. Por qué son importantes las unidades de cosecha

El uso de unidades estandarizadas ofrece varios beneficios:

- **Planificación Consistente:** Puede planificar su cosecha en términos de "unidades" (ej. 100 canastillas) en lugar de solo peso bruto.
- **Estimaciones Automáticas:** Al programar una cosecha, el sistema calcula automáticamente el peso esperado basándose en la capacidad de la unidad.
- **Precisión en el Campo:** Ayuda a los monitores y supervisores a asegurar que el número de contenedores recolectados coincida con los datos registrados.

---

## 2. Gestión de Unidades de Cosecha

Navegue a **Cosecha → Unidades de Cosecha**.

### Crear una Unidad de Cosecha

Haga clic en **Agregar Unidad de Cosecha** y complete lo siguiente:

- **Nombre:** El nombre del contenedor (ej. "Canastilla Estándar", "Bin Grande").
- **Capacidad:** El peso promedio del cultivo que cabe en una unidad.
  - **Valor:** El peso numérico (ej. 25).
  - **Unidad:** La unidad de medida (actualmente restringida a **kg** para mayor consistencia).

:::tip[Peso Promedio]
Dado que el peso de los cultivos puede variar, ingrese el **peso promedio** que normalmente ve para un contenedor lleno. Esto hará que sus programas de cosecha sean más precisos.
:::

---

## 3. Cómo se utilizan

1.  **Programas:** Al planificar un **Ciclo de Cosecha**, selecciona una Unidad de Cosecha y especifica el número de unidades. El sistema multiplica la cantidad por la capacidad para mostrar el **Peso Planificado**.
2.  **Entradas:** Al registrar una **Entrada de Cosecha**, ingresa el número de unidades recolectadas realmente. Luego, el sistema calcula el **Peso Promedio por Unidad** para ese viaje dividiendo el peso neto total por el número de unidades.

---

## 4. Mejores Prácticas

- **Estandarizar Contenedores:** Intente usar el mismo tamaño y tipo de contenedores en toda la finca para simplificar los cálculos.
- **Tener en cuenta la tara:** Recuerde que la capacidad debe reflejar el **peso neto** del cultivo, sin incluir el peso del contenedor en sí.
- **Una Unidad por Entrada:** Para un seguimiento más preciso, cada entrada de cosecha idealmente debería usar un solo tipo de unidad de cosecha.
