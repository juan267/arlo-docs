---
title: Entradas de Cosecha
description: Registre los datos reales de la cosecha a medida que llegan del campo.
---

Las **Entradas de Cosecha** son los registros centrales de sus operaciones diarias de cosecha. Capturan los detalles específicos de cada entrega desde el lote hasta la estación de pesaje, incluyendo el peso, las unidades y el equipo responsable.

---

## 1. Requisitos antes de comenzar

Antes de poder crear una Entrada de Cosecha, asegúrese de tener configurado lo siguiente:

1.  **Vehículos:** Para rastrear el transporte y gestionar los pesos vacíos.
2.  **Grupos de Cosecha:** Para identificar qué equipo realizó el trabajo.
3.  **Lotes:** Para saber exactamente dónde se cosechó el cultivo.
4.  **Unidades de Cosecha:** (Utilizadas indirectamente para validar conteos y calcular promedios).

---

## 2. Significado de los campos

Al agregar una Entrada de Cosecha (**Cosecha → Entradas de Cosecha → Agregar Entrada de Cosecha**), encontrará los siguientes campos:

### Información Básica

- **Hora de Entrada:** La fecha y hora exacta en que se registró la cosecha.
- **Vehículo:** Seleccione el vehículo que entregó el cultivo.
- **Lote:** Seleccione el lote específico donde se realizó la cosecha.
- **Grupo de Cosecha:** Seleccione el equipo que realizó la cosecha.

### Peso y Unidades

- **Unidades de Cosecha:** El número total de contenedores (canastillas, bines, etc.) en esta entrega.
- **Peso en Báscula:** El peso total mostrado en la báscula (Vehículo + Cultivo).
- **Peso Vehículo Vacío:** El peso del vehículo solo (Tara).
  :::tip[Sugerencia Inteligente]
  El sistema recuerda el peso vacío de un vehículo para el día actual. Si este es el segundo viaje del mismo camión hoy, sugerirá automáticamente el peso vacío anterior.
  :::
- **Peso Neto:** (Calculado) Peso en Báscula menos Peso Vehículo Vacío.
- **Peso Promedio por Unidad:** (Calculado) Peso Neto dividido por Unidades de Cosecha.

### Seguimiento y Códigos

- **Código Ticket de Báscula:** El número de referencia de su impresora física de la báscula.
- **Código de Planilla de Campo:** Su número interno de seguimiento o vale de cosecha.

---

## 3. Cómo se utilizan los pesos

El sistema utiliza un sistema de peso medido para garantizar la precisión:

- **Conversiones Automáticas:** Puede ingresar pesos en diferentes unidades (kg, lb, toneladas) y el sistema los normalizará para los informes.
- **Precisión:** Maneja valores decimales para asegurar que los rendimientos totales de su finca sean precisos hasta el grammo si es necesario.
- **Validación:** El sistema evita guardar entradas con un peso neto de cero o valores negativos.

---

## 4. Agregación Automática

Una vez que guarda una Entrada de Cosecha, el sistema no solo la almacena; automáticamente:

1.  **Actualiza los Reales Diarios:** Agrupa todas las entradas del mismo día, lote y grupo en un registro de **Cosecha Real**.
2.  **Recalcula el Rendimiento:** Compara inmediatamente el nuevo total con cualquier programa planificado para actualizar sus indicadores de rendimiento (Verde/Ámbar/Azul).
3.  **Actualiza Informes:** Todos los gráficos y tarjetas KPI en el tablero de Informes se actualizan en tiempo real.

---

## 5. Mejores Prácticas

- **Registro en Tiempo Real:** Registre las entradas a medida que ocurren para asegurar que sus tableros de rendimiento siempre reflejen el estado actual de la finca.
- **Verificar Tickets de Báscula:** Siempre verifique el Código del Ticket de Báscula para mantener una pista de auditoría clara.
- **Monitorear Promedios:** Esté atento al "Peso Promedio por Unidad". Si se desvía significativamente de la capacidad de su Unidad de Cosecha, podría indicar un llenado desigual de los contenedores o un error en el conteo de unidades.
