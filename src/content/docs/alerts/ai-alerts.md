---
title: Alertas con IA
description: Usa el asistente de inteligencia artificial para crear alertas basadas en mejores prácticas y tus datos históricos.
---

El **Asistente de IA para Alertas** te ayuda a configurar alertas inteligentes basadas en las características de tu finca, tu historial de datos y mejores prácticas agrícolas.

---

## ¿Por qué Usar IA para Alertas?

Configurar alertas efectivas requiere conocimiento sobre:
- Umbrales de acción para diferentes plagas
- Niveles normales vs. anormales para tu operación
- Qué indicadores realmente importan
- Cómo evitar alertas falsas

El asistente de IA:
- **Analiza tu historial** para sugerir umbrales realistas
- **Conoce estándares** de la industria agrícola
- **Identifica patrones** que podrías no ver
- **Sugiere configuraciones** optimizadas

---

## Cómo Usar el Asistente

### Acceder al asistente

1. Ve a **Alertas**
2. Haz clic en **Crear con IA** o **Asistente de IA**
3. Se abre el panel de conversación

### Describir tu necesidad

Escribe qué tipo de alertas necesitas:

**Ejemplo básico:**
```
Necesito alertas para monitorear plagas en mis cítricos
```

**Más específico:**
```
Quiero que me avise cuando los ácaros superen niveles
que requieran tratamiento en mi huerto de naranja
```

**Detallado:**
```
Configura alertas para:
- Ácaros: umbral de acción económica
- Minador: cuando afecte más del 30% de brotes
- HLB: cualquier síntoma severo detectado
Quiero recibirlas por correo inmediatamente
```

---

## Qué Genera la IA

### Análisis de tu operación

La IA revisa:
- Tus formularios de sanidad existentes
- Historial de datos de los últimos meses
- Distribución de valores por campo
- Patrones estacionales si hay suficientes datos

### Sugerencias de alertas

Para cada alerta sugerida:

```
📋 Alerta sugerida: Ácaros - Nivel de acción

Justificación:
  - Tu promedio histórico es 2.3 ácaros/hoja
  - El percentil 95 de tus datos es 7 ácaros/hoja
  - El umbral de acción estándar es 5 ácaros/hoja

Configuración recomendada:
  Campo: Conteo de ácaros
  Umbral: > 5
  Agregación: Promedio por lote
  Prioridad: Alta

¿Deseas crear esta alerta? [Crear] [Ajustar] [Descartar]
```

### Umbrales personalizados

La IA ajusta umbrales según:

| Factor | Ajuste |
|--------|--------|
| Tu historial | Umbrales basados en tus datos reales |
| Estacionalidad | Más sensible en épocas críticas |
| Cultivo | Tolerancias específicas del cultivo |
| Región | Plagas endémicas de tu zona |

---

## Niveles de Sensibilidad

Puedes indicar qué tan sensibles quieres las alertas:

### Conservador

```
"Quiero alertas solo cuando realmente haya un problema serio"

Resultado:
  - Umbrales más altos
  - Menos alertas, pero más críticas
  - Menor riesgo de fatiga de alertas
  - Mayor riesgo de detectar problemas tarde
```

### Balanceado (recomendado)

```
"Quiero un balance entre detectar problemas y no recibir
demasiadas alertas"

Resultado:
  - Umbrales en niveles de acción estándar
  - Alertas cuando hay acción recomendada
  - Balance entre sensibilidad y especificidad
```

### Sensible

```
"Prefiero recibir alertas temprano aunque algunas
sean falsas alarmas"

Resultado:
  - Umbrales más bajos
  - Más alertas, incluyendo señales tempranas
  - Detección más temprana
  - Más trabajo de clasificación manual
```

---

## Ejemplos de Prompts

### Para sanidad

```
Sugiere alertas para mis formularios de sanidad de aguacate.
Quiero saber cuando haya problemas de Phytophthora, trips
o barrenadores. Nivel de sensibilidad balanceado.
```

### Para labores

```
Necesito alertas cuando los ciclos de campo tengan
sobrecostos mayores al 15% o cuando haya labores
retrasadas más de 3 días.
```

### Para inventario

```
Configura alertas de inventario bajo para mis insumos
críticos: fertilizantes NPK, fungicidas de cobre y
herbicidas. Quiero saber cuando quede para menos
de 2 semanas de operación.
```

### Para cosecha

```
Alerta cuando un lote tenga rendimiento menor al 80%
de lo programado durante 3 días consecutivos.
También avísame si algún grupo de cosecha está
bajo meta de forma persistente.
```

---

## Revisar y Ajustar

### Cada sugerencia es personalizable

La IA genera un punto de partida que puedes ajustar:

1. **Revisar umbral**: ¿Es apropiado para tu situación?
2. **Ajustar destinatarios**: ¿Quién debe recibir esta alerta?
3. **Modificar prioridad**: ¿Es crítica, alta o media?
4. **Cambiar cooldown**: ¿Cada cuánto quieres recibirla?

### Iterar con la IA

Continúa la conversación para refinar:

```
Usuario: El umbral de 5 ácaros es muy bajo para mi zona,
         normalmente veo 3-4 sin problemas

IA: Entendido. Ajusto el umbral a 8 ácaros, que está
    en el percentil 90 de tus datos históricos.
    ¿Deseas actualizar la alerta?
```

---

## Alertas Inteligentes Avanzadas

### Detección de anomalías

La IA puede crear alertas que detectan valores inusuales sin umbral fijo:

```
"Avísame cuando cualquier campo tenga valores
significativamente diferentes al promedio histórico"

Resultado:
  Alerta con umbral dinámico:
  - Se dispara cuando valor > promedio + 2 desviaciones estándar
  - Ajusta automáticamente según la estacionalidad
```

### Alertas correlacionadas

Alertas que consideran múltiples factores:

```
"Alerta si hay ácaros altos Y el clima fue seco
la semana pasada"

Resultado:
  Alerta con condiciones compuestas que considera
  contexto climático para reducir falsos positivos
```

### Tendencias

Alertas basadas en dirección del cambio:

```
"Avísame si los niveles de plaga están aumentando
consistentemente durante 3 inspecciones seguidas"

Resultado:
  Alerta de tendencia que evalúa la dirección
  del cambio, no solo el valor absoluto
```

---

## Limitaciones

### Lo que la IA hace bien

- Sugerir umbrales basados en tus datos
- Recomendar configuraciones estándar
- Identificar campos importantes para alertar
- Generar configuraciones coherentes

### Lo que la IA no puede hacer

- Conocer las condiciones exactas de cada lote
- Predecir el futuro con certeza
- Reemplazar el criterio agronómico experto
- Garantizar que todos los problemas se detecten

:::caution[Validación experta]
Las alertas generadas por IA son sugerencias basadas en datos y mejores prácticas. Revísalas con tu equipo técnico antes de activar en producción.
:::

---

## Próximos Pasos

1. **[Configuración de finca](/alerts/farm-settings/)** - Ajusta parámetros globales
2. **[Gestionar notificaciones](/alerts/manage/)** - Administra las alertas recibidas
3. **[Análisis con IA](/analysis/ai-analysis/)** - Usa IA para interpretar tus datos
