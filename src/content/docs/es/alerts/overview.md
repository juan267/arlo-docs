---
title: Sistema de Alertas
description: Conoce el sistema de notificaciones inteligentes de Arlo que te avisa cuando los indicadores superan umbrales definidos.
---

El sistema de alertas de Arlo te permite recibir notificaciones automáticas cuando los datos de tu finca superan umbrales que tú defines. En lugar de revisar manualmente cada reporte, las alertas te avisan proactivamente cuando algo requiere tu atención.

---

## ¿Por qué Alertas?

En una finca con múltiples lotes, cultivos y operaciones, es imposible revisar cada dato manualmente. Las alertas resuelven este problema:

| Sin alertas | Con alertas |
|-------------|-------------|
| Revisas reportes diariamente buscando anomalías | Las anomalías te encuentran a ti |
| Descubres problemas días después | Te enteras en tiempo real |
| Dependes de que alguien recuerde revisar | El sistema nunca olvida |
| Reaccionas tarde | Actúas temprano |

---

## Tipos de Alertas

### Por módulo

| Módulo | Tipos de alerta |
|--------|-----------------|
| **Sanidad** | Niveles de plagas, síntomas detectados, cobertura baja |
| **Labores** | Costos que superan presupuesto, labores retrasadas |
| **Insumos** | Inventario bajo mínimo, consumo inusual |
| **Cosecha** | Rendimiento bajo meta, desviaciones significativas |

### Por momento de evaluación

| Tipo | Cuándo se evalúa | Ejemplo |
|------|------------------|---------|
| **Tiempo real** | Al capturar datos | Alerta inmediata si plaga > umbral |
| **Programada** | En horario fijo | Resumen diario de rutas atrasadas |
| **Agregada** | Al completar período | Alerta si costo semanal excede presupuesto |

---

## Anatomía de una Alerta

Cada alerta configurada tiene:

### Condición

Define qué se evalúa:

```
Campo: Conteo de ácaros
Operador: Mayor que (>)
Valor: 5
```

### Agregación (opcional)

Para datos de múltiples registros:

```
Función: Promedio
Agrupado por: Lote
```

### Destinatarios

Quién recibe la notificación:

- Usuarios específicos
- Roles (todos los administradores)
- Correos externos

### Acciones

Qué pasa cuando se dispara:

- Notificación en app
- Correo electrónico
- Ambas

---

## Flujo de una Alerta

```
1. CAPTURA DE DATOS
   Monitor registra: Ácaros = 8 en Lote Norte
                    ↓
2. EVALUACIÓN
   Sistema compara: 8 > 5 (umbral)
   Resultado: CONDICIÓN CUMPLIDA
                    ↓
3. DISPARO
   Se crea notificación
   Se envía correo a destinatarios
                    ↓
4. RECEPCIÓN
   Administrador recibe:
   "⚠️ Alerta: Ácaros (8) superó umbral (5) en Lote Norte"
                    ↓
5. ACCIÓN
   Administrador decide intervención
```

---

## Configuración Típica por Módulo

### Sanidad

```
Alerta: Plaga crítica detectada
- Campo: Nivel de [plaga]
- Condición: ≥ "Alto" o > umbral numérico
- Destinatarios: Administrador, Ingeniero agrónomo
- Prioridad: Alta
```

```
Alerta: Ruta atrasada
- Campo: Estado de ruta
- Condición: = "Atrasada"
- Destinatarios: Supervisor de sanidad
- Prioridad: Media
```

### Labores

```
Alerta: Sobrecosto de ciclo
- Campo: Costo real del ciclo
- Condición: > (Costo presupuestado × 1.1)  // 10% sobre presupuesto
- Destinatarios: Gerente de operaciones
- Prioridad: Alta
```

### Insumos

```
Alerta: Inventario bajo
- Campo: Cantidad en existencia
- Condición: < Cantidad mínima configurada
- Destinatarios: Encargado de compras
- Prioridad: Media
```

### Cosecha

```
Alerta: Rendimiento bajo
- Campo: Porcentaje de cumplimiento
- Condición: < 85%
- Agregación: Por lote, diario
- Destinatarios: Supervisor de cosecha
- Prioridad: Media
```

---

## Niveles de Prioridad

| Prioridad | Uso | Tratamiento |
|-----------|-----|-------------|
| **Crítica** | Requiere acción inmediata | Notificación push + correo |
| **Alta** | Importante, actuar hoy | Correo inmediato |
| **Media** | Atención necesaria | Incluida en resumen diario |
| **Baja** | Informativo | Solo visible en app |

---

## Control de Frecuencia

Para evitar saturación de notificaciones:

### Cooldown (período de enfriamiento)

Tiempo mínimo entre alertas del mismo tipo para el mismo objeto.

```
Alerta: Ácaros > 5 en Lote Norte
Cooldown: 24 horas

Disparo 1: 10:00 AM → Se notifica
Disparo 2: 2:00 PM → Se suprime (dentro de cooldown)
Disparo 3: 11:00 AM día siguiente → Se notifica
```

### Horas silenciosas

Período donde no se envían correos (pero se registran en app).

```
Horas silenciosas: 10:00 PM - 6:00 AM
Alerta a las 11:00 PM → Se registra, correo se envía a las 6:00 AM
```

### Límite diario

Máximo de alertas por día para evitar spam.

```
Límite: 50 alertas/día
Alerta #51 → Se registra con nota "límite alcanzado"
```

---

## Notificaciones vs. Alertas

| Concepto | Descripción |
|----------|-------------|
| **Alerta** | La configuración (qué evaluar, umbral, destinatarios) |
| **Notificación** | El mensaje generado cuando una alerta se dispara |

Una alerta puede generar muchas notificaciones a lo largo del tiempo.

---

## Mejores Prácticas

### Comienza simple

1. Configura pocas alertas para los indicadores más críticos
2. Ajusta umbrales basándote en la experiencia
3. Agrega más alertas gradualmente

### Umbrales realistas

- Muy sensible = muchas alertas falsas = fatiga de alertas
- Muy conservador = no detecta problemas reales
- Encuentra el balance para tu operación

### Destinatarios correctos

- Envía cada alerta a quien puede actuar
- No copies a todos "por si acaso"
- Un responsable claro por cada tipo de alerta

### Revisa periódicamente

- ¿Las alertas están llegando?
- ¿Se están tomando acciones?
- ¿Los umbrales siguen siendo relevantes?

---

## Próximos Pasos

1. **[Configurar alertas](/es/alerts/configure/)** - Crea tu primera alerta
2. **[Alertas con IA](/es/alerts/ai-alerts/)** - Usa el asistente para configuración inteligente
3. **[Configuración de finca](/es/alerts/farm-settings/)** - Ajusta parámetros globales
