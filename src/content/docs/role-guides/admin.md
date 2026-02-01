---
title: Guía del Administrador
description: Guía para administradores de finca sobre gestión diaria, coordinación de equipos, aprobaciones y uso avanzado de Arlo.
---

Como **administrador** de finca, eres el puente entre la operación diaria y la dirección. Tu rol en Arlo incluye configurar módulos, supervisar la ejecución, aprobar solicitudes y asegurar que los datos sean confiables.

---

## Tu Rol en Arlo

### Qué deberías hacer

- Configurar y mantener módulos (formularios, ciclos, catálogos)
- Supervisar que supervisores y monitores registren datos
- Aprobar solicitudes dentro de tu autoridad
- Analizar datos y proponer mejoras
- Generar reportes para el propietario
- Responder a alertas y coordinar acciones

### Qué delegas

- Registro de datos de campo (supervisores/monitores)
- Inspecciones de sanidad (monitores)
- Registro de logs de labores (supervisores)
- Pesaje en báscula (operadores)

---

## Rutina Diaria Recomendada

### Mañana (15-20 minutos)

```
□ Revisar alertas nuevas
  → Tomar acción inmediata si es crítico
  → Delegar seguimiento si es necesario

□ Verificar rutas de sanidad del día
  → ¿Están asignadas?
  → ¿Monitores tienen los formularios?

□ Revisar progreso de labores
  → ¿Hay labores retrasadas?
  → ¿Contratistas reportaron problemas?

□ Check de inventario crítico
  → ¿Hay insumos bajo mínimo?
  → ¿Se necesita orden de compra?
```

### Tarde (10-15 minutos)

```
□ Verificar sincronización de datos
  → ¿Rutas de sanidad completadas?
  → ¿Logs de labores registrados?

□ Aprobar solicitudes pendientes
  → Salidas de inventario
  → Ajustes de datos

□ Preparar para mañana
  → ¿Qué rutas están programadas?
  → ¿Qué labores deben avanzar?
```

---

## Por Módulo

### Sanidad

**Tu responsabilidad:**
- Crear y mantener formularios de inspección
- Configurar alertas con umbrales apropiados
- Asignar monitores a rutas
- Programar rutas semanales
- Revisar resultados y análisis de IA
- Coordinar acciones cuando hay alertas

**Indicadores a monitorear:**
- Cobertura semanal (meta: > 90%)
- Rutas atrasadas (meta: 0)
- Alertas sin respuesta (meta: 0 críticas)

### Labores

**Tu responsabilidad:**
- Crear ciclos de campo con presupuestos
- Asignar labores a contratistas
- Monitorear progreso y costos
- Aprobar desviaciones de presupuesto
- Generar reportes de pago

**Indicadores a monitorear:**
- Variación de costo (meta: ± 5%)
- Labores completadas vs. planeadas (meta: > 95%)
- Contratistas con retrasos frecuentes

### Insumos

**Tu responsabilidad:**
- Mantener catálogo actualizado
- Aprobar entradas (compras)
- Aprobar salidas mayores
- Realizar conteos físicos periódicos
- Ordenar reabastecimiento

**Indicadores a monitorear:**
- Productos bajo mínimo
- Diferencias inventario físico vs. sistema
- Rotación de productos (evitar caducidad)

### Cosecha

**Tu responsabilidad:**
- Configurar ciclos de cosecha
- Crear programas de rendimiento
- Monitorear desempeño vs. meta
- Investigar desviaciones significativas
- Generar reportes de producción

**Indicadores a monitorear:**
- % cumplimiento de meta (ideal: 95-105%)
- Lotes persistentemente bajo meta
- Grupos de cosecha con bajo rendimiento

---

## Gestión de Alertas

### Priorización

```
🔴 CRÍTICAS - Responder en < 2 horas
   → Verificar situación en campo
   → Coordinar acción inmediata
   → Documentar decisión tomada
   → Informar a propietario si necesario

🟠 ALTAS - Responder en < 24 horas
   → Planificar acción
   → Asignar responsable
   → Dar seguimiento

🟡 MEDIAS - Incluir en revisión semanal
   → Analizar tendencia
   → Decidir si requiere acción
```

### Documentar respuestas

Para cada alerta importante:

```
Alerta: [descripción]
Fecha: [cuando se disparó]
Acción tomada: [qué hiciste]
Responsable de ejecución: [quién]
Fecha de verificación: [cuándo confirmar resultado]
```

---

## Coordinación con el Equipo

### Con supervisores

**Reunión diaria breve (5-10 min):**
- ¿Qué se hizo ayer?
- ¿Qué está planeado hoy?
- ¿Hay bloqueos o problemas?

**Comunicación continua:**
- Notificar cambios de prioridad
- Alertar sobre problemas detectados
- Reconocer buen trabajo

### Con monitores

**Seguimiento:**
- ¿Completaron rutas a tiempo?
- ¿Los datos tienen calidad?
- ¿Necesitan capacitación?

### Con el propietario

**Reporte semanal:**
- Resumen de operaciones
- Variaciones importantes
- Decisiones que requieren aprobación

**Comunicación inmediata:**
- Alertas críticas
- Desviaciones > 10%
- Situaciones excepcionales

---

## Calidad de Datos

### Verificaciones regulares

```
Semanal:
  □ ¿Todas las rutas programadas se completaron?
  □ ¿Los logs de labores coinciden con trabajo real?
  □ ¿Las entradas de cosecha están al día?

Mensual:
  □ Conteo físico de inventario (muestra)
  □ Revisión de alertas vs. acciones tomadas
  □ Validación de datos de contratistas
```

### Problemas comunes y soluciones

| Problema | Causa probable | Solución |
|----------|----------------|----------|
| Rutas incompletas | Monitor no sincronizó | Verificar conexión, capacitar |
| Logs faltantes | Supervisor olvidó | Establecer rutina, recordatorios |
| Inventario no cuadra | Salidas no registradas | Proceso de salida más estricto |
| Costos incorrectos | Precios desactualizados | Revisar catálogo de labores |

---

## Generación de Reportes

### Para el propietario

```
Mensual: Reporte completo
  - Generar los primeros 5 días del mes
  - Incluir comparativo con presupuesto
  - Resaltar variaciones significativas
  - Agregar tu análisis/recomendaciones

Semanal: Resumen breve
  - Solo si hay novedades importantes
  - Por correo o mensaje directo
```

### Para certificaciones

```
Antes de auditoría:
  - Exportar registros de trazabilidad
  - Verificar que todo esté documentado
  - Preparar reportes de BPA si aplica
```

### Para contabilidad

```
Al cierre de ciclo:
  - Exportar resumen de pagos a contratistas
  - Detallar consumo de inventario
  - Generar reporte de costos
```

---

## Configuraciones Importantes

### Que debes revisar periódicamente

```
Trimestral:
  □ Umbrales de alertas (¿siguen siendo relevantes?)
  □ Formularios de sanidad (¿necesitan ajustes?)
  □ Catálogo de labores (¿precios actualizados?)
  □ Usuarios activos (¿hay que agregar/remover?)

Anual:
  □ Duración de ciclos de campo
  □ Metas de rendimiento
  □ Configuración de reportes automáticos
```

---

## Preguntas Frecuentes

### ¿Cómo capacito a nuevos usuarios?

1. Asigna rol apropiado en el sistema
2. Muestra las funciones relevantes a su rol
3. Haz que practiquen con supervisión
4. Verifica calidad de sus primeros registros

### ¿Qué hago si hay datos incorrectos?

1. No entres en pánico
2. Documenta el error
3. Corrige si tienes permisos
4. Si no, solicita corrección a quien corresponda
5. Investiga la causa para prevenir

### ¿Cómo justifico desviaciones al propietario?

1. Presenta los datos objetivamente
2. Explica las causas identificadas
3. Describe las acciones tomadas
4. Propón medidas preventivas

---

## Próximos Pasos

1. **[Panel de control](/analysis/dashboard/)** - Tu vista operativa
2. **[Sistema de alertas](/alerts/configure/)** - Configura alertas efectivas
3. **[Guía del supervisor](/role-guides/supervisor/)** - Para capacitar a tu equipo
