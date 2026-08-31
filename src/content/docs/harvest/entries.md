---
title: Entradas de Cosecha
description: Registre los datos reales de la cosecha a medida que llegan del campo.
---

Las **Entradas de Cosecha** son los registros centrales de sus operaciones diarias de cosecha: hora, lote, grupo, unidades y peso neto.

La finca habilita uno o ambos flujos en **Cosecha → Configuración de entradas de cosecha**:

- **Con vehículo:** peso neto = peso en báscula menos peso vacío del vehículo.
- **Sin vehículo:** peso neto = capacidad de la unidad de cosecha × cantidad (puede sobrescribirlo si una unidad no estuvo llena).

Si ambos están activos, al crear una entrada elija el flujo.

---

## 1. Requisitos antes de comenzar

En ambos flujos necesita **grupos de cosecha**, **lotes** y **unidades de cosecha**.

El flujo **con vehículo** también requiere **vehículos** con peso vacío. El flujo **sin vehículo** no.

---

## 2. Significado de los campos

Ruta: **Cosecha → Entradas de Cosecha → Agregar Entrada de Cosecha**. Use el formulario que muestre su finca.

### Común a ambos flujos

- **Hora de Entrada:** La fecha y hora en que se registró la cosecha.
- **Lote:** El lote donde se cosechó.
- **Grupo de Cosecha:** El equipo que realizó el trabajo.
- **Unidades de Cosecha:** Número de contenedores (canastillas, bines, etc.).
- **Código Ticket de Báscula** y **Código de Planilla de Campo:** Opcionales, para seguimiento.

### Con vehículo

- **Vehículo:** El vehículo que entregó el cultivo.
- **Peso en Báscula:** Peso total (vehículo + cultivo).
- **Peso Vehículo Vacío:** Tara. El sistema recuerda el peso vacío de un vehículo para el día actual y lo sugiere en viajes siguientes.
- **Peso Neto:** Peso en báscula menos peso vacío.

### Sin vehículo

- **Unidad de Cosecha:** Contenedor con capacidad conocida. El peso neto se calcula como capacidad × cantidad.
- **Peso Neto:** Calculado; puede sobrescribirlo si una unidad no estuvo llena.

**Peso promedio por unidad** (cuando aplica): peso neto dividido por unidades.

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
