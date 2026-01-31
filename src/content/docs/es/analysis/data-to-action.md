---
title: De Datos a Acción
description: Marcos de decisión para convertir los datos y análisis de Arlo en acciones concretas de manejo agrícola.
---

Tener datos es el primer paso. Convertirlos en **acciones que mejoren tu operación** es donde se genera el verdadero valor. Esta guía te ayuda a establecer marcos de decisión claros.

---

## El Ciclo de Mejora Continua

```
    ┌─────────────┐
    │   MEDIR     │ ← Capturar datos en campo
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │  ANALIZAR   │ ← Entender qué dicen los datos
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │   DECIDIR   │ ← Elegir acción basada en datos
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │   ACTUAR    │ ← Implementar la decisión
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │  VERIFICAR  │ ← Confirmar que funcionó
    └──────┬──────┘
           │
           └────────────────────────────▶ (volver a MEDIR)
```

---

## Marcos de Decisión por Módulo

### Sanidad: ¿Cuándo Tratar?

**Umbral de Acción Económica (UAE)**

El punto donde el costo del daño supera el costo del tratamiento.

```
Decisión de tratamiento:

SI nivel de plaga > UAE
  Y no se ha tratado en últimos X días
  Y condiciones favorecen la plaga
ENTONCES → Aplicar tratamiento

SI nivel de plaga cerca de UAE (80-100%)
  Y tendencia es creciente
ENTONCES → Monitorear con mayor frecuencia, preparar tratamiento

SI nivel de plaga < UAE
  Y tendencia es estable o decreciente
ENTONCES → Continuar monitoreo normal
```

**Ejemplo práctico: Ácaros en cítricos**

| Nivel | Acción |
|-------|--------|
| 0-3 /hoja | Monitoreo normal |
| 3-5 /hoja | Aumentar frecuencia de monitoreo |
| 5-8 /hoja | Preparar tratamiento, aplicar si sube |
| >8 /hoja | Aplicar tratamiento inmediatamente |

### Labores: ¿Cuándo Ajustar?

**Monitoreo de variaciones de costo**

```
Revisión semanal del ciclo:

SI costo real > 110% del presupuesto
  ENTONCES → Investigar causas, ajustar
    - ¿Rendimiento de contratista bajo esperado?
    - ¿Se agregaron labores no planeadas?
    - ¿Precios incorrectos?

SI labores retrasadas > 2 días
  ENTONCES → Intervenir
    - ¿Contratista tiene problema?
    - ¿Falta de insumos?
    - ¿Clima adverso?
    - Reasignar recursos si necesario
```

### Cosecha: ¿Cuándo Investigar?

**Desviación de rendimiento**

```
SI rendimiento real < 85% del planeado
  Durante 3+ días consecutivos
  En el mismo lote
ENTONCES → Investigar
  - ¿Problema de salud en el lote?
  - ¿Grupo de cosecha con dificultades?
  - ¿Estimación original incorrecta?

SI rendimiento real > 115% del planeado
ENTONCES → Verificar y documentar
  - ¿Se puede replicar en otros lotes?
  - ¿Qué condiciones lo favorecieron?
```

### Insumos: ¿Cuándo Comprar?

**Punto de reorden**

```
Punto de reorden = (Consumo diario promedio × Días de entrega)
                   + Stock de seguridad

SI inventario actual < Punto de reorden
ENTONCES → Generar orden de compra

Ejemplo:
  Consumo diario: 10 kg
  Días de entrega: 5
  Stock seguridad: 20 kg
  Punto de reorden: (10 × 5) + 20 = 70 kg
```

---

## Priorizando Acciones

### Matriz de Urgencia-Importancia

```
              │ URGENTE           │ NO URGENTE
──────────────┼───────────────────┼───────────────────
              │                   │
IMPORTANTE    │ ① HACER AHORA     │ ② PROGRAMAR
              │ - Alerta crítica  │ - Mejorar procesos
              │ - Plaga sobre UAE │ - Capacitar equipo
              │ - Stock en cero   │ - Ajustar umbrales
              │                   │
──────────────┼───────────────────┼───────────────────
              │                   │
NO IMPORTANTE │ ③ DELEGAR         │ ④ ELIMINAR
              │ - Ajustes menores │ - Reportes que
              │ - Correcciones    │   nadie lee
              │   de datos        │ - Procesos
              │                   │   obsoletos
```

### Regla del 80/20

El 80% de los problemas vienen del 20% de las causas.

```
Enfócate en:
  - Los 2-3 lotes con más problemas
  - Las 2-3 plagas más frecuentes
  - Los 2-3 contratistas con más variación

En lugar de:
  - Intentar optimizar todo simultáneamente
  - Perseguir cada pequeña anomalía
```

---

## Documentar Decisiones

### Registro de decisiones

Para cada acción importante, documenta:

```
📋 REGISTRO DE DECISIÓN

Fecha: 31 Ene 2025
Problema: Ácaros > 10/hoja en Lote Norte
Datos: Promedio 12.3/hoja, tendencia creciente 3 semanas
Decisión: Aplicar acaricida (producto X, dosis Y)
Responsable: Ing. García
Fecha de acción: 2 Feb 2025
Verificación: Re-monitorear 7 Feb 2025

Resultado (agregado después):
  - Nivel post-tratamiento: 2.1/hoja
  - Efectividad: Buena
  - Notas: Considerar tratamiento preventivo en condiciones
           similares
```

### Por qué documentar

1. **Aprendizaje**: Saber qué funcionó y qué no
2. **Consistencia**: Decisiones similares ante situaciones similares
3. **Auditoría**: Registro para certificaciones o trazabilidad
4. **Transferencia**: Conocimiento no depende de una persona

---

## Evitar Trampas Comunes

### Parálisis por análisis

```
❌ "Necesito más datos antes de decidir"
   (cuando ya hay suficiente información)

✓ "Con estos datos, la mejor acción es X.
    Monitorearemos el resultado."
```

### Sesgo de confirmación

```
❌ "Los datos confirman lo que yo pensaba"
   (ignorando datos que contradicen)

✓ "Los datos muestran Y, aunque esperaba Z.
    Debo ajustar mi entendimiento."
```

### Reacción excesiva

```
❌ "Un dato alto = acción inmediata"
   (sin considerar contexto o tendencia)

✓ "Este dato es alto. Verifiquemos si es
    tendencia o anomalía antes de actuar."
```

### No actuar por miedo al error

```
❌ "Mejor no hago nada para no equivocarme"

✓ "La mejor decisión con la información disponible es X.
    Si no funciona, aprenderemos y ajustaremos."
```

---

## Comunicar Decisiones

### A tu equipo

```
Comunicación clara:
  QUÉ: "Aplicaremos acaricida en Lote Norte"
  POR QUÉ: "Los niveles superan el umbral de acción"
  CUÁNDO: "Mañana temprano"
  QUIÉN: "Equipo de aplicaciones"
  SEGUIMIENTO: "Re-monitoreo en 7 días"
```

### A stakeholders

```
Reporte de decisión:

"Durante la semana, identificamos niveles elevados de
ácaros en el Lote Norte (promedio 12/hoja vs. umbral de 5).

Decisión: Aplicación de control el 2 de febrero.
Costo estimado: $XXX
Resultado esperado: Reducción a niveles normales en 7 días.

Seguimiento: Re-monitoreo programado para el 9 de febrero."
```

---

## Mejora Continua

### Revisión periódica de decisiones

Mensualmente, revisa:

1. ¿Qué decisiones tomamos?
2. ¿Qué resultados obtuvimos?
3. ¿Qué funcionó bien?
4. ¿Qué haríamos diferente?

### Ajustar umbrales

Si consistentemente:
- Actúas muy tarde → Baja los umbrales
- Actúas innecesariamente → Sube los umbrales
- Los datos no predicen bien → Revisa qué medir

### Automatizar lo repetitivo

Si siempre tomas la misma decisión ante cierta condición:
- Configura una alerta automática
- Documenta el procedimiento estándar
- Entrena al equipo para actuar sin esperar

---

## Próximos Pasos

1. **[Reportes ejecutivos](/es/analysis/executive-reports/)** - Comparte decisiones y resultados
2. **[Sistema de alertas](/es/alerts/overview/)** - Automatiza la detección de condiciones
3. **[Panel de control](/es/analysis/dashboard/)** - Monitorea indicadores clave
