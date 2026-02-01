---
title: Ejecución y Logs
description: Cómo registrar el trabajo completado, monitorear el progreso de las labores y gestionar el flujo de estados durante la ejecución del ciclo.
---

Una vez que has planificado las labores en un ciclo de campo, el siguiente paso es registrar la ejecución. Los **logs** son el mecanismo para capturar el trabajo completado día a día y ver el progreso en tiempo real.

---

## ¿Qué es un Log?

Un **log** es un registro de trabajo completado para una labor específica. Cada log contiene:

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| **Fecha** | Día en que se realizó el trabajo | Sí |
| **Unidades completadas** | Cantidad de trabajo hecho (árboles, metros, etc.) | Sí |
| **Notas** | Observaciones o comentarios | No |

### Ejemplo

```
Labor: Poda de formación - Lote Norte - Contratista García
Presupuesto: 500 árboles

Log 1: 10 Enero - 150 árboles - "Iniciado en sector A"
Log 2: 11 Enero - 180 árboles - "Continuado en sector B"
Log 3: 12 Enero - 170 árboles - "Finalizado"

Total registrado: 500 árboles (100%)
```

---

## Cómo Registrar Logs

### Desde la vista del ciclo

1. Ve a **Labores → Ciclos de Campo**
2. Abre el ciclo activo
3. Encuentra la labor en el calendario o lista
4. Haz clic en la labor para expandirla
5. Haz clic en **Agregar Log**
6. Completa: fecha, unidades, notas (opcional)
7. Guarda

### Consideraciones

- Puedes agregar múltiples logs para la misma labor
- Los logs se pueden registrar para cualquier fecha dentro del ciclo
- El progreso se recalcula automáticamente con cada log

:::tip[Registro diario]
La mejor práctica es registrar los logs al final de cada día de trabajo. Esto mantiene los datos actualizados y facilita la detección temprana de problemas.
:::

---

## Cálculo Automático de Progreso

El sistema calcula el progreso de cada labor automáticamente:

```
progreso = (suma de unidades en logs / cantidad presupuestada) × 100
```

### Ejemplo

```
Presupuesto: 500 árboles

Después de Log 1 (150 árboles): 150/500 = 30%
Después de Log 2 (180 árboles): 330/500 = 66%
Después de Log 3 (170 árboles): 500/500 = 100%
```

### Indicadores visuales

| Progreso | Indicador |
|----------|-----------|
| 0% | Barra vacía |
| 1-99% | Barra parcialmente llena |
| 100% | Barra completa, estado "Completada" |
| >100% | Posible si se registra más de lo presupuestado |

---

## Flujo de Estados

Los estados de las labores cambian automáticamente basándose en los logs y las fechas:

### Transiciones automáticas

```
PENDIENTE
    │
    ├──[Se asigna fecha programada]──▶ PROGRAMADA
    │                                      │
    │                                      ├──[Fecha pasa sin logs]──▶ RETRASADA
    │                                      │
    │                                      └──[Se registra primer log]──▶ EN PROGRESO
    │
    └──[Se registra primer log]──▶ EN PROGRESO
                                       │
                                       ├──[Progreso = 100%]──▶ COMPLETADA
                                       │
                                       └──[Ciclo termina con progreso < 100%]──▶ INCOMPLETA
```

### Descripción de estados

| Estado | Color | Condición |
|--------|-------|-----------|
| **Pendiente** | ⚪ | Sin fecha programada, sin logs |
| **Programada** | 🔵 | Tiene fecha futura, sin logs |
| **Retrasada** | 🔴 | Fecha programada pasó, sin logs o progreso bajo |
| **En Progreso** | 🟡 | Tiene logs, progreso entre 1-99% |
| **Completada** | 🟢 | Progreso = 100% |
| **Incompleta** | 🟣 | Ciclo cerró con progreso < 100% |

---

## Marcas de Tiempo Automáticas

El sistema registra automáticamente:

### `started_at` (Fecha de inicio)
- Se establece con la fecha del **primer log** registrado
- Representa cuándo realmente comenzó el trabajo
- Inmutable una vez establecido

### `completed_at` (Fecha de completitud)
- Se establece cuando el progreso **llega a 100%**
- Se usa la fecha del log que completó la labor
- Se puede recalcular si se agregan/modifican logs

### Ejemplo

```
Labor creada: 5 Enero (started_at: null, completed_at: null)

Log 1: 10 Enero - 150 árboles
  → started_at: 10 Enero

Log 2: 11 Enero - 180 árboles
  → Sin cambios en timestamps

Log 3: 12 Enero - 170 árboles (100%)
  → completed_at: 12 Enero
```

---

## Período de Gracia

Existe un **período de gracia de 5 días** para registrar logs atrasados.

### ¿Cómo funciona?

- Puedes registrar logs con fechas hasta 5 días en el pasado sin restricción
- Los logs con fechas anteriores a 5 días requieren permisos especiales
- Esto permite flexibilidad para capturar trabajo que no se registró a tiempo

### Ejemplo

```
Hoy: 15 Enero

Fechas permitidas sin restricción: 10-15 Enero
Fechas que requieren aprobación: 9 Enero y anteriores
```

:::caution[Integridad de datos]
El período de gracia equilibra la flexibilidad operativa con la integridad de datos. Evita el hábito de registrar logs muy atrasados, ya que dificulta la detección oportuna de problemas.
:::

---

## Costo Real vs. Presupuestado

Cada log contribuye al cálculo del costo real:

### Costo presupuestado (planificación)

```
costo_presupuestado = cantidad_presupuestada × precio_labor
```

### Costo real (ejecución)

```
costo_real = suma(unidades_log × precio_labor)
```

### Comparación

| Escenario | Interpretación |
|-----------|----------------|
| Real < Presupuesto | Bajo presupuesto (favorable) |
| Real = Presupuesto | En línea con lo planeado |
| Real > Presupuesto | Sobre presupuesto (investigar) |

---

## Protección de Datos

El sistema incluye validaciones para proteger la integridad de los datos:

### No se puede eliminar una labor si:
- Tiene logs registrados con progreso > 0
- Forma parte de un ciclo cerrado

### Para modificar un log:
- El usuario debe tener permisos de edición
- Los cambios se registran en el historial de auditoría
- El progreso se recalcula automáticamente

### Para eliminar un log:
- Solo usuarios con permisos de administrador
- El progreso se recalcula automáticamente
- La acción queda registrada para auditoría

---

## Vista de Ejecución

La vista del ciclo ofrece varias herramientas para monitorear la ejecución:

### Filtros disponibles

- **Por contratista**: Ver solo labores de un contratista específico
- **Por lote**: Ver solo labores de un lote específico
- **Por estado**: Filtrar por pendiente, en progreso, completada, etc.

### Vista de calendario

- Muestra las labores programadas en un calendario semanal
- Puedes navegar entre semanas del ciclo
- Código de colores indica el estado de cada labor

### Vista de lista

- Muestra todas las labores con detalles
- Ordena por fecha, contratista o progreso
- Expandir para ver logs individuales

---

## Mejores Prácticas

### Para supervisores de campo

1. Registra logs al final de cada jornada
2. Incluye notas cuando hay situaciones especiales
3. Verifica que las unidades sean correctas antes de guardar
4. Reporta labores retrasadas al administrador

### Para administradores

1. Revisa el dashboard del ciclo diariamente
2. Investiga labores que pasan a estado "Retrasada"
3. Verifica que el progreso reportado sea realista
4. Usa los filtros para monitorear contratistas específicos

### Para contabilidad

1. No cierres el ciclo hasta verificar todos los logs
2. Exporta el resumen de costos antes del cierre
3. Compara costo real vs. presupuestado por contratista
4. Documenta desviaciones significativas

---

## Próximos Pasos

Con los logs registrados, puedes:

1. **[Revisar la guía de gestión](/field-tasks/guides/)** - Análisis de costos y exportaciones
2. **[Vincular salidas de insumos](/supplies/exits/)** - Asociar materiales con labores
3. **[Crear siguiente ciclo](/field-tasks/cycles/)** - Continuar con la planificación
