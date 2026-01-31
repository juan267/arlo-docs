---
title: Análisis con IA
description: Usa la inteligencia artificial de Arlo para interpretar tus datos, obtener insights y recibir recomendaciones accionables.
---

Arlo incorpora **Inteligencia Artificial** para ayudarte a entender tus datos más rápidamente. En lugar de analizar manualmente tablas y gráficos, puedes obtener resúmenes, interpretaciones y recomendaciones generadas automáticamente.

---

## Capacidades de IA en Arlo

### Resúmenes automáticos (Debriefs)

Después de completar una ruta de sanidad, la IA genera un resumen que incluye:

```
📋 RESUMEN DE RUTA - Monitoreo Semanal #45
   Completada: 31 Ene 2025, 2:30 PM

━━━ HALLAZGOS PRINCIPALES ━━━
• Niveles de ácaros elevados en Lote Norte (promedio 8.2/hoja),
  superando el umbral de acción de 5/hoja.
• El 35% de los brotes en Lote Sur muestran daño de minador,
  indicando necesidad de intervención.
• No se detectaron síntomas de HLB en ningún lote.

━━━ CONTEXTO CLIMÁTICO ━━━
• Temperatura promedio de la semana: 28°C (2°C sobre normal)
• Precipitación: 0 mm (condiciones secas)
• Las condiciones cálidas y secas favorecen proliferación de ácaros.

━━━ COMPARACIÓN HISTÓRICA ━━━
• Ácaros: +45% vs. promedio de las últimas 4 semanas
• Minador: Estable respecto a semanas anteriores
• Cobertura: 100% de lotes programados inspeccionados

━━━ RECOMENDACIONES ━━━
1. Considerar aplicación de acaricida en Lote Norte
2. Monitorear Lote Sur en próxima ruta para confirmar tendencia
3. Mantener vigilancia regular ante condiciones climáticas favorables
```

### Análisis de preguntas

Puedes hacer preguntas sobre tus datos:

```
Usuario: "¿Cómo están los niveles de plagas este mes
         comparados con el mes pasado?"

IA: "Los niveles generales de plagas han aumentado 15%
    respecto a diciembre. Los principales cambios son:

    • Ácaros: +35% (de 4.2 a 5.7 promedio)
    • Trips: +12% (de 2.1 a 2.4 promedio)
    • Minador: -8% (de 28% a 26% de brotes afectados)

    El aumento coincide con la temporada seca y temperaturas
    más altas. Se recomienda ajustar la frecuencia de
    monitoreo y revisar umbrales de alerta."
```

---

## Dónde Encontrar Análisis de IA

### En rutas de sanidad

Después de completar una ruta:
1. Ve a **Sanidad → Análisis de Rutas**
2. Abre una ruta completada
3. Busca la sección **Resumen de IA** o **Debrief**

### En informes analíticos

1. Ve a **Sanidad → Informes Analíticos**
2. Selecciona el período de análisis
3. Busca el botón **Generar Análisis de IA**

### Chat de análisis (si disponible)

1. Haz clic en el ícono de chat o asistente
2. Escribe tu pregunta sobre los datos
3. Recibe respuesta basada en tus datos reales

---

## Tipos de Análisis

### Análisis de ruta individual

Se genera automáticamente al completar una ruta:

- Resumen de hallazgos principales
- Valores que superaron umbrales
- Contexto climático del período
- Comparación con rutas anteriores del mismo lote
- Recomendaciones de acción

### Análisis de período

Para rangos de tiempo (semana, mes, trimestre):

- Tendencias de indicadores clave
- Lotes con problemas recurrentes
- Efectividad de intervenciones previas
- Proyecciones si los patrones continúan

### Análisis comparativo

Comparaciones entre:

- Lotes (¿cuál tiene más problemas?)
- Períodos (¿mejoramos o empeoramos?)
- Cultivos (¿cuál requiere más atención?)
- Años (¿patrón estacional?)

---

## Cómo Interpretar los Análisis

### Nivel de confianza

La IA indica cuando hay limitaciones:

```
⚠️ Nota: Este análisis se basa en 3 semanas de datos.
   Para tendencias más confiables, se recomienda acumular
   al menos 8 semanas de monitoreo continuo.
```

### Correlaciones vs. Causalidad

La IA puede identificar correlaciones, pero no siempre implican causalidad:

```
IA: "Los niveles de ácaros aumentaron junto con la temperatura.
    Esto es consistente con el ciclo de vida del ácaro, que
    se acelera en condiciones cálidas."

vs.

IA: "Los niveles de trips son más altos en lotes cerca del
    camino principal. Posibles causas a investigar: polvo,
    menor humedad, o coincidencia."
```

### Recomendaciones

Las recomendaciones son sugerencias, no instrucciones absolutas:

- ✓ Usar como punto de partida para decisiones
- ✓ Validar con conocimiento local
- ✓ Considerar factores no capturados en datos
- ✗ No seguir ciegamente sin contexto

---

## Hacer Preguntas Efectivas

### Preguntas específicas

```
❌ "¿Cómo está la finca?"
✓ "¿Cuáles lotes tuvieron los niveles más altos de ácaros
    en las últimas 4 semanas?"
```

### Preguntas comparativas

```
✓ "¿Cómo se compara el rendimiento de cosecha de enero
    con diciembre?"
✓ "¿Qué contratista tuvo mejor productividad este ciclo?"
```

### Preguntas de tendencia

```
✓ "¿Los niveles de minador están aumentando o disminuyendo?"
✓ "¿Hay patrón estacional en los costos de mano de obra?"
```

### Preguntas de causa

```
✓ "¿Qué factores podrían explicar el bajo rendimiento
    del Lote Norte?"
✓ "¿Hay correlación entre lluvias y niveles de Phytophthora?"
```

---

## Limitaciones de la IA

### Lo que la IA hace bien

- Resumir grandes cantidades de datos
- Identificar patrones y anomalías
- Comparar con promedios históricos
- Contextualizar con datos climáticos
- Sugerir acciones basadas en mejores prácticas

### Lo que la IA no puede hacer

- Inspeccionar físicamente los cultivos
- Conocer circunstancias locales no registradas
- Predecir el futuro con certeza
- Reemplazar el criterio de un agrónomo experto
- Tomar decisiones por ti

:::caution[Validación humana]
Siempre valida los análisis de IA con observación directa en campo y criterio agronómico. La IA es una herramienta de apoyo, no un sustituto del conocimiento experto.
:::

---

## Mejorar los Análisis

### Más datos = Mejor análisis

- Registra consistentemente en todas las rutas
- Completa todos los campos, no solo los obligatorios
- Mantén histórico de varios meses/años

### Datos de calidad

- Valores precisos (no estimaciones vagas)
- Fotos cuando hay hallazgos relevantes
- Notas que explican contexto

### Contexto adicional

- Registra aplicaciones de tratamientos
- Documenta eventos climáticos extremos
- Anota cambios en prácticas de manejo

---

## Privacidad y Seguridad

### Tus datos son tuyos

- Los análisis se generan con tus datos únicamente
- No se comparten con otras fincas
- Los modelos de IA no aprenden de tus datos específicos

### Datos usados para análisis

- Registros de sanidad, labores, cosecha
- Datos climáticos de fuentes públicas
- Configuración de umbrales y alertas
- No se usan datos personales de usuarios

---

## Próximos Pasos

1. **[De datos a acción](/es/analysis/data-to-action/)** - Convierte insights en decisiones
2. **[Reportes ejecutivos](/es/analysis/executive-reports/)** - Comparte análisis con stakeholders
3. **[Sistema de alertas](/es/alerts/overview/)** - Automatiza la detección de problemas
