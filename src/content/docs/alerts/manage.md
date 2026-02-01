---
title: Gestionar Notificaciones
description: Cómo ver, filtrar, marcar y organizar las notificaciones de alertas que recibes en Arlo.
---

El centro de notificaciones te permite ver todas las alertas disparadas, filtrarlas por diferentes criterios, marcarlas como leídas y tomar acciones.

---

## Centro de Notificaciones

### Acceder

1. Haz clic en el ícono de campana (🔔) en la barra superior
2. Se despliega el panel de notificaciones
3. Para vista completa, haz clic en **Ver todas**

### Estructura

```
🔔 Notificaciones (5 nuevas)

━━━ HOY ━━━
🔴 Crítica | Ácaros (12) superó umbral (5)
   Lote Norte - hace 2 horas
   [Ver detalles] [Marcar leída]

🟠 Alta | Minador > 30% en brotes
   Lote Sur - hace 4 horas
   [Ver detalles] [Marcar leída]

━━━ AYER ━━━
🟡 Media | Inventario bajo: NPK
   Bodega Central - ayer 3:00 PM
   [Ver detalles] [Marcar leída]
```

---

## Indicadores de Prioridad

| Color | Prioridad | Significado |
|-------|-----------|-------------|
| 🔴 | Crítica | Requiere acción inmediata |
| 🟠 | Alta | Importante, atender hoy |
| 🟡 | Media | Atención necesaria |
| 🔵 | Baja | Informativo |

---

## Filtrar Notificaciones

### Por estado

```
Mostrar:
  ○ Todas
  ● No leídas (5)
  ○ Leídas
  ○ Archivadas
```

### Por prioridad

```
Prioridad:
  ☑ Crítica
  ☑ Alta
  ☑ Media
  ☐ Baja
```

### Por módulo

```
Módulo:
  ☑ Sanidad
  ☑ Labores
  ☐ Insumos
  ☐ Cosecha
```

### Por fecha

```
Período:
  ○ Hoy
  ○ Últimos 7 días
  ● Últimos 30 días
  ○ Personalizado: [___] a [___]
```

### Por lote (si aplica)

```
Lote:
  ☐ Todos
  ☑ Lote Norte
  ☑ Lote Sur
  ☐ Lote Este
```

---

## Acciones sobre Notificaciones

### Marcar como leída

- Haz clic en **Marcar leída** en la notificación
- O haz clic en la notificación para ver detalles (se marca automáticamente)

### Marcar múltiples como leídas

1. Selecciona las notificaciones (checkbox)
2. Haz clic en **Marcar seleccionadas como leídas**

### Marcar todas como leídas

```
[Marcar todas como leídas]
```

Útil después de revisar el panel completo.

### Archivar

Mueve notificaciones fuera de la vista principal:

1. Haz clic en **Archivar** en la notificación
2. La notificación se mueve a "Archivadas"
3. Sigue disponible para consulta

### Eliminar

:::caution[Eliminación permanente]
Eliminar una notificación la borra permanentemente. Usa "Archivar" si podrías necesitarla después.
:::

---

## Ver Detalles de una Notificación

Al hacer clic en una notificación:

```
📋 Detalle de Alerta

Alerta: Ácaros - Nivel crítico
Disparada: 31 de enero 2025, 10:35 AM
Prioridad: Crítica

━━━ DATOS ━━━
Campo: Conteo de ácaros
Valor registrado: 12
Umbral configurado: > 5
Lote: Norte
Ruta: Monitoreo semanal #45

━━━ CONTEXTO ━━━
Registrado por: Juan Pérez (Monitor)
Formulario: Monitoreo de Plagas v2
Árbol #: 15 de 20 muestreados

━━━ ACCIONES ━━━
[Ver ruta completa]
[Ver historial del lote]
[Ir a configuración de alerta]
```

---

## Historial de Alertas

### Ver historial completo

1. Ve a **Alertas → Historial**
2. Muestra todas las alertas disparadas en el tiempo

### Información del historial

| Columna | Descripción |
|---------|-------------|
| Fecha/Hora | Cuándo se disparó |
| Alerta | Nombre de la configuración |
| Valor | Dato que disparó la alerta |
| Lote | Ubicación (si aplica) |
| Estado | Notificado / Suprimido / Error |
| Destinatarios | Quién fue notificado |

### Filtros del historial

- Por rango de fechas
- Por alerta específica
- Por estado de notificación
- Por lote o área

### Exportar historial

```
[Exportar a Excel]

Opciones:
  Período: Últimos 30 días
  Alertas: Todas / Seleccionadas
  Incluir: Suprimidas / Solo notificadas
```

---

## Estadísticas de Alertas

### Dashboard de alertas

```
📊 Resumen de Alertas - Enero 2025

Total disparadas: 145
  ├─ Críticas: 8
  ├─ Altas: 32
  ├─ Medias: 67
  └─ Bajas: 38

Por módulo:
  ├─ Sanidad: 89 (61%)
  ├─ Labores: 34 (23%)
  ├─ Insumos: 15 (10%)
  └─ Cosecha: 7 (5%)

Top 5 alertas más frecuentes:
  1. Ácaros > umbral (23)
  2. Labor retrasada (18)
  3. Inventario bajo (12)
  4. Rendimiento bajo meta (10)
  5. Trips en flores (9)
```

### Tendencias

Gráfico de alertas por día/semana para identificar:
- Períodos con más problemas
- Efectividad de intervenciones
- Patrones estacionales

---

## Preferencias Personales

### Configurar tu perfil

Cada usuario puede ajustar sus preferencias de notificación:

1. Ve a **Mi Perfil → Notificaciones**
2. Ajusta según tus preferencias

### Opciones

```
Recibir notificaciones por:
  ☑ En app (siempre activo)
  ☑ Correo electrónico
  ☐ Push móvil

Frecuencia de correos:
  ○ Inmediato
  ○ Resumen cada hora
  ● Resumen diario (8:00 AM)

Prioridades que recibo:
  ☑ Crítica
  ☑ Alta
  ☑ Media
  ☐ Baja

Mis horas silenciosas:
  Inicio: 9:00 PM
  Fin: 7:00 AM
```

---

## Solución de Problemas

### No recibo notificaciones

1. Verifica que estés en la lista de destinatarios de la alerta
2. Revisa tus preferencias personales
3. Verifica la carpeta de spam (correos)
4. Confirma que la alerta está activa

### Recibo demasiadas notificaciones

1. Ajusta los umbrales de las alertas
2. Aumenta el cooldown
3. Reduce las prioridades que recibes
4. Usa resumen diario en lugar de inmediato

### Notificación no tiene sentido

1. Ve a los detalles de la alerta
2. Revisa la configuración
3. Verifica si el umbral necesita ajuste
4. Considera si la condición es correcta

---

## Próximos Pasos

1. **[Configurar alertas](/alerts/configure/)** - Ajusta las alertas existentes
2. **[Alertas con IA](/alerts/ai-alerts/)** - Mejora la configuración con IA
3. **[Análisis con IA](/analysis/ai-analysis/)** - Entiende los patrones detrás de las alertas
