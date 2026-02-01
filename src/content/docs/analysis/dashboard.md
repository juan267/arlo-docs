---
title: Panel de Control
description: Visión general del dashboard de Arlo con métricas clave de todos los módulos para tomar decisiones informadas.
---

El **Panel de Control** (Dashboard) de Arlo te ofrece una vista consolidada de las métricas más importantes de tu finca. En lugar de navegar por cada módulo, puedes ver el estado general de la operación en un solo lugar.

---

## Acceder al Dashboard

El dashboard es típicamente la primera pantalla al entrar a una finca. También puedes acceder desde:

1. Haz clic en el logo de Arlo o **Inicio**
2. Selecciona **Panel de Control** en el menú lateral

---

## Estructura del Dashboard

### Resumen Ejecutivo

Vista de alto nivel con indicadores clave:

```
┌─────────────────────────────────────────────────────────┐
│ FINCA SAN JOSÉ - Panel de Control                      │
│ Última actualización: 31 Ene 2025, 10:35 AM            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  📊 RESUMEN DEL MES                                    │
│                                                         │
│  Sanidad          Labores          Cosecha             │
│  ──────────       ─────────        ─────────           │
│  12 rutas         8 labores        1,245 kg            │
│  completadas      activas          cosechados          │
│  🟢 94% cobert.   🟡 $12,400       🟢 102% meta        │
│                                                         │
│  Insumos          Alertas                              │
│  ─────────        ─────────                            │
│  $45,200          3 activas                            │
│  en inventario    🔴 1 crítica                         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Métricas por Módulo

### Sanidad

| Métrica | Descripción |
|---------|-------------|
| **Rutas completadas** | Total de inspecciones finalizadas en el período |
| **Cobertura** | % de lotes inspeccionados al menos una vez |
| **Rutas atrasadas** | Inspecciones que pasaron su fecha límite |
| **Alertas activas** | Condiciones que superaron umbrales |

**Indicadores de estado:**
- 🟢 Verde: Cobertura > 90%, sin alertas críticas
- 🟡 Amarillo: Cobertura 70-90% o alertas medias activas
- 🔴 Rojo: Cobertura < 70% o alertas críticas activas

### Labores

| Métrica | Descripción |
|---------|-------------|
| **Ciclo activo** | Ciclo de campo actual y sus fechas |
| **Labores activas** | Cantidad de tareas en progreso |
| **Costo real** | Gasto acumulado en el ciclo |
| **Variación** | Diferencia vs. presupuesto (%) |

**Indicadores de estado:**
- 🟢 Verde: Costo ≤ presupuesto, labores al día
- 🟡 Amarillo: Costo 1-10% sobre presupuesto o labores retrasadas
- 🔴 Rojo: Costo > 10% sobre presupuesto

### Insumos

| Métrica | Descripción |
|---------|-------------|
| **Valor de inventario** | Suma de existencias × costo promedio |
| **Productos bajo mínimo** | Items que necesitan reabastecimiento |
| **Consumo del mes** | Total de salidas en el período |

**Indicadores de estado:**
- 🟢 Verde: Todos los productos sobre mínimo
- 🟡 Amarillo: 1-3 productos bajo mínimo
- 🔴 Rojo: > 3 productos bajo mínimo o críticos sin stock

### Cosecha

| Métrica | Descripción |
|---------|-------------|
| **Ciclo activo** | Ciclo de cosecha actual |
| **Total cosechado** | Kilogramos/unidades del período |
| **% de meta** | Real vs. planeado |
| **Lotes bajo meta** | Cantidad con rendimiento < 95% |

**Indicadores de estado:**
- 🟢 Verde: 95-105% de meta global
- 🟡 Amarillo: 85-95% o > 105%
- 🔴 Rojo: < 85% de meta

---

## Widgets del Dashboard

### Gráfico de tendencias

Evolución de métricas clave en el tiempo:

```
Niveles de ácaros - Últimas 8 semanas
     │
  8 ─│     ╭───╮
  6 ─│   ╭─╯   ╰─╮
  4 ─│ ╭─╯       ╰───╮
  2 ─│─╯             ╰───
  0 ─│─────────────────────
     S1  S2  S3  S4  S5  S6  S7  S8

── Promedio   ─ ─ Umbral de acción
```

### Mapa de calor

Vista espacial de indicadores por lote:

```
┌─────────────────────────────────────┐
│         MAPA DE SANIDAD             │
│                                     │
│    ┌──────┐  ┌──────┐  ┌──────┐    │
│    │Norte │  │Centro│  │ Este │    │
│    │ 🟢   │  │ 🟡   │  │ 🔴   │    │
│    └──────┘  └──────┘  └──────┘    │
│    ┌──────┐  ┌──────┐              │
│    │ Sur  │  │Oeste │              │
│    │ 🟢   │  │ 🟢   │              │
│    └──────┘  └──────┘              │
│                                     │
│ 🟢 OK  🟡 Atención  🔴 Crítico     │
└─────────────────────────────────────┘
```

### Lista de alertas recientes

```
⚠️ ALERTAS RECIENTES

🔴 Hace 2h - Ácaros (12) superó umbral - Lote Este
🟡 Hace 5h - Minador > 30% - Lote Centro
🔵 Ayer - Inventario bajo: Fertilizante NPK
```

### Tareas pendientes

```
📋 PENDIENTE HOY

□ Completar ruta de sanidad - Lote Norte
□ Registrar logs de poda - Contratista García
□ Aprobar salida de inventario - Bodega Central
```

---

## Personalización

### Período de análisis

```
Mostrar datos de:
  ○ Hoy
  ○ Última semana
  ● Último mes
  ○ Último trimestre
  ○ Personalizado: [___] a [___]
```

### Widgets visibles

Puedes elegir qué widgets mostrar:

```
Widgets activos:
  ☑ Resumen ejecutivo
  ☑ Gráfico de tendencias (sanidad)
  ☑ Mapa de calor
  ☑ Alertas recientes
  ☐ Gráfico de costos (labores)
  ☑ Tareas pendientes
```

### Orden de widgets

Arrastra y suelta para reorganizar los widgets según tu preferencia.

---

## Indicadores Clave de Rendimiento (KPIs)

### Sanidad

| KPI | Fórmula | Meta típica |
|-----|---------|-------------|
| Tasa de cobertura | Lotes inspeccionados / Total lotes | > 90% semanal |
| Índice de problema | Alertas disparadas / Inspecciones | < 10% |
| Tiempo de respuesta | Días entre detección y tratamiento | < 3 días |

### Labores

| KPI | Fórmula | Meta típica |
|-----|---------|-------------|
| Eficiencia de ciclo | Labores completadas / Labores planeadas | > 95% |
| Variación de costo | (Real - Presupuesto) / Presupuesto | ± 5% |
| Productividad | Unidades completadas / Días trabajados | Varía por labor |

### Cosecha

| KPI | Fórmula | Meta típica |
|-----|---------|-------------|
| Cumplimiento de meta | Real / Planeado | 95-105% |
| Consistencia | Desviación estándar de rendimiento | Baja |
| Eficiencia de grupo | kg/persona/día | Varía por cultivo |

---

## Acciones desde el Dashboard

### Navegación rápida

Haz clic en cualquier métrica para ir directamente al módulo correspondiente:

- Clic en "12 rutas" → Lista de rutas de sanidad
- Clic en "$12,400" → Detalle del ciclo de labores
- Clic en alerta → Detalle de la notificación

### Acciones comunes

- **Ver detalles** → Abre el módulo correspondiente
- **Exportar** → Genera PDF del estado actual
- **Compartir** → Envía resumen por correo

---

## Mejores Prácticas

### Revisión diaria

1. Revisa alertas activas al inicio del día
2. Verifica tareas pendientes
3. Chequea indicadores en rojo/amarillo

### Revisión semanal

1. Analiza tendencias de sanidad
2. Revisa progreso de ciclo de labores
3. Verifica cobertura de monitoreo

### Revisión mensual

1. Compara KPIs con metas
2. Analiza variaciones de costo
3. Identifica patrones en alertas

---

## Próximos Pasos

1. **[Análisis con IA](/analysis/ai-analysis/)** - Interpreta los datos con ayuda de IA
2. **[De datos a acción](/analysis/data-to-action/)** - Convierte insights en decisiones
3. **[Reportes ejecutivos](/analysis/executive-reports/)** - Genera informes para stakeholders
