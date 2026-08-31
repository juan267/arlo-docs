---
title: Introducción a Labores de Campo
description: Principios de gestión de mano de obra agrícola y cómo los ciclos de campo te ayudan a controlar costos y productividad.
---

El módulo de Labores es el centro de control para toda la mano de obra de tu finca. Te permite planificar trabajo, asignar contratistas, registrar ejecución y comparar costos presupuestados contra reales en ciclos cortos y manejables.

---

## El Problema del Control de Costos

En fincas agrícolas, la mano de obra suele representar 40-60% de los costos operativos. Sin embargo, muchas fincas tienen dificultad para:

- **Saber cuánto gastaron**: Los pagos a contratistas se acumulan sin registro detallado
- **Comparar eficiencia**: ¿El contratista A es más caro o más eficiente que el B?
- **Presupuestar con precisión**: Las estimaciones se basan en intuición, no en datos históricos
- **Detectar desviaciones**: Los sobrecostos se descubren al final del período

### El enfoque de ciclos

Arlo organiza el trabajo en **Ciclos de Campo** - períodos de **1 a 4 semanas ISO** (lunes–domingo) donde:

1. **Planificas** qué trabajo se hará y cuánto costará
2. **Ejecutas** registrando el trabajo completado día a día
3. **Comparas** presupuesto vs. real antes de cerrar el ciclo
4. **Ajustas** para el siguiente ciclo basándote en datos reales

Este ritmo de ciclos cortos es similar a los "sprints" en desarrollo de software: períodos acotados que permiten retroalimentación rápida y corrección de rumbo.

---

## Anatomía de un Ciclo de Campo

### Estructura

```
┌─────────────────────────────────────────────────────────┐
│ CICLO DE CAMPO: FC-2026-SEM-33                          │
│ Inicio: lun 10 ago 2026  │  Fin: dom 16 ago 2026      │
├─────────────────────────────────────────────────────────┤
│ LABOR 1: Poda - Lote Norte - Contratista García        │
│   Presupuesto: 500 árboles × $2.00 = $1,000           │
│   Real: 480 árboles × $2.00 = $960                    │
│   Progreso: 96%                                        │
├─────────────────────────────────────────────────────────┤
│ LABOR 2: Fertilización - Lote Sur - Contratista López  │
│   Presupuesto: 200 árboles × $1.50 = $300             │
│   Real: 200 árboles × $1.50 = $300                    │
│   Progreso: 100%                                       │
├─────────────────────────────────────────────────────────┤
│ RESUMEN DEL CICLO                                      │
│   Costo Presupuestado: $1,300                         │
│   Costo Real: $1,260                                  │
│   Variación: -$40 (3% bajo presupuesto)               │
└─────────────────────────────────────────────────────────┘
```

### Componentes clave

| Componente | Descripción |
|------------|-------------|
| **Serial** | Identificador único sugerido desde las semanas ISO (FC-2026-SEM-33) |
| **Semana de inicio** | Lunes de la primera semana del ciclo |
| **Fin** | Domingo de la última semana (1–4 semanas, se acorta si hay solape) |
| **Labores** | Líneas de trabajo con contratista, tarea, lote y presupuesto |
| **Logs** | Registros diarios de trabajo completado |

---

## Ciclo de Vida de una Labor

Cada labor dentro de un ciclo pasa por estados que reflejan su progreso:

```
┌──────────┐    ┌─────────────┐    ┌───────────┐    ┌────────────┐
│ Pendiente│───▶│ Programada  │───▶│En Progreso│───▶│ Completada │
└──────────┘    └─────────────┘    └───────────┘    └────────────┘
     │                │                  │                │
     │                ▼                  │                │
     │         ┌───────────┐            │                │
     │         │ Retrasada │◀───────────┘                │
     │         └───────────┘                             │
     │                                                   │
     └──────────────────────────────────────────────────▶│
                                                   ┌────────────┐
                                                   │ Incompleta │
                                                   └────────────┘
```

| Estado | Condición |
|--------|-----------|
| **Pendiente** | Sin fecha programada, sin trabajo registrado |
| **Programada** | Con fecha futura asignada |
| **Retrasada** | La fecha programada pasó sin iniciar trabajo |
| **En Progreso** | Al menos un log registrado, progreso < 100% |
| **Completada** | Progreso = 100% o marcada manualmente como finalizada |
| **Incompleta** | El ciclo cerró con progreso < 100% |

:::note[Período de gracia]
Existe un período de gracia de 5 días para registrar logs atrasados. Después de este período, los logs de fechas anteriores requieren aprobación de administrador.
:::

---

## Configuración de Duración de Ciclos

La duración preferida se configura en **Finca → Configuración → Configuración de Labores**: **1 a 4 semanas ISO** (lunes–domingo).

| Semanas | Caso de uso |
|---------|-------------|
| **1** | Seguimiento semanal |
| **2** | Ritmo quincenal de pago a contratistas |
| **3–4** | Planificación operativa más larga |

Cuando creas un nuevo ciclo:
1. Seleccionas la semana de inicio
2. El sistema llena esa cantidad de semanas libres (y acorta si una semana posterior está ocupada)
3. Se sugiere un serial (ej. FC-2026-SEM-33)

---

## Detrás de Escenas

### Cálculos automáticos

**Costo presupuestado de labor:**
```
costo_presupuestado = cantidad_presupuestada × precio_por_defecto
```

**Progreso de labor:**
```
progreso = (suma_unidades_logs / cantidad_presupuestada) × 100
```

**Costo real de labor:**
```
costo_real = suma(unidades_log × precio_log)
```

**Costo real del ciclo:**
```
costo_real_ciclo = suma(costo_real de todas las labores)
```

### Marcas de tiempo automáticas

- `started_at`: Se establece con la fecha del primer log
- `completed_at`: Se establece cuando el progreso llega a 100%

### Protección de datos

- No puedes eliminar una labor si tiene logs con progreso > 0
- El serial del ciclo es inmutable una vez creado
- Los cambios en logs se registran para auditoría

---

## Flujo de Trabajo Típico

### Inicio del ciclo (Día 1-2)

1. Crear nuevo ciclo de campo
2. Agregar labores con:
   - Contratista responsable
   - Tipo de labor
   - Lote asignado
   - Cantidad presupuestada
3. Opcionalmente, programar fechas específicas dentro del ciclo

### Durante el ciclo (Días 3-13)

4. Registrar logs diariamente:
   - Fecha del trabajo
   - Unidades completadas
   - Notas opcionales
5. Monitorear progreso en el dashboard del ciclo
6. Ajustar programación si hay retrasos

### Cierre del ciclo (Días 14-15)

7. Verificar que todas las labores estén completas o marcadas
8. Revisar reporte de costos
9. Exportar resúmenes para contabilidad
10. Identificar lecciones para el siguiente ciclo

---

## Métricas Clave

| Métrica | Fórmula | Interpretación |
|---------|---------|----------------|
| **Variación de costo** | (Real - Presupuesto) / Presupuesto | Negativo = bajo presupuesto |
| **Eficiencia de contratista** | Unidades / Días trabajados | Mayor = más productivo |
| **Tasa de completitud** | Labores completadas / Total labores | 100% = ciclo exitoso |

---

## Próximos Pasos

1. **[Registra contratistas](/field-tasks/contractors/)** - Las personas o empresas que ejecutan trabajo
2. **[Define labores de campo](/field-tasks/tasks/)** - El catálogo de tareas con precios
3. **[Crea tu primer ciclo](/field-tasks/cycles/)** - Comienza a planificar trabajo
