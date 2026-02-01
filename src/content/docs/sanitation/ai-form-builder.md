---
title: Construir Formularios con IA
description: Usa el asistente de inteligencia artificial para crear formularios de inspección basados en tu cultivo, plagas y mejores prácticas agrícolas.
---

El **Asistente de IA** te ayuda a crear formularios de inspección de sanidad sin necesidad de diseñarlos desde cero. Describe lo que necesitas monitorear y la IA generará un formulario completo con campos, alertas y estructura optimizada.

---

## ¿Por qué Usar el Asistente de IA?

Crear un buen formulario de inspección requiere conocimiento sobre:
- Plagas y enfermedades relevantes para tu cultivo
- Métodos de muestreo apropiados
- Escalas de evaluación estándar
- Umbrales de acción recomendados

El asistente de IA:
- **Conoce las plagas comunes** de diferentes cultivos
- **Sugiere estructuras** basadas en mejores prácticas
- **Incluye umbrales** según estándares de la industria
- **Genera campos completos** con tipos apropiados

---

## Cómo Usar el Asistente

### Acceder al asistente

1. Ve a **Sanidad → Formularios**
2. Haz clic en **Crear con IA** o **Asistente de IA**
3. Se abrirá el panel de conversación

### Describir tu necesidad

Escribe un mensaje describiendo:
- Qué cultivo tienes
- Qué plagas o enfermedades te preocupan
- Qué tipo de inspección necesitas

### Ejemplos de prompts efectivos

**Básico:**
```
Necesito un formulario para monitorear plagas en cítricos
```

**Más específico:**
```
Crea un formulario para monitorear HLB, minador de hoja
y ácaros en un huerto de naranja Valencia en zona tropical.
Incluye evaluación de síntomas y conteo de insectos.
```

**Detallado:**
```
Necesito un formulario de inspección semanal para aguacate Hass:
- Evaluar trips en flores (escala 0-5)
- Monitorear Phytophthora en raíces
- Revisar barrenadores en ramas
- Incluir sección de fotos para anomalías
- Alertar si trips > 3 o hay signos de Phytophthora
```

---

## Qué Genera la IA

### Estructura del formulario

La IA crea un formulario con:

1. **Nombre descriptivo** basado en tu solicitud
2. **Sección de ruta** con campos generales (fecha, clima, etc.)
3. **Sección de árbol** con evaluaciones específicas
4. **Campos personalizados** apropiados para cada plaga
5. **Alertas** con umbrales recomendados

### Tipos de campos que puede generar

| Tipo | Uso típico |
|------|------------|
| Número | Conteo de insectos, porcentaje de daño |
| Selección | Nivel de severidad, presencia/ausencia |
| Checkbox | Síntomas observados, tratamientos previos |
| Foto | Evidencia visual de problemas |
| Texto | Notas y observaciones |

### Ejemplo de formulario generado

```
Formulario: Monitoreo de Plagas - Cítricos

📋 SECCIÓN DE RUTA
  - Condiciones climáticas (selección)
  - Observaciones generales (texto)

🌳 SECCIÓN DE ÁRBOL (por cada árbol muestreado)

  ▸ HLB (Huanglongbing)
    - Síntomas foliares (selección: ninguno/leve/moderado/severo)
    - Patrón asimétrico (checkbox)
    - Foto de síntomas (foto)

  ▸ Minador de Hoja
    - Brotes afectados (número, 0-100%)
    - Nivel de daño (selección: bajo/medio/alto)

  ▸ Ácaros
    - Presencia (checkbox)
    - Conteo por hoja (número)
    - Foto de daño (foto)

⚠️ ALERTAS CONFIGURADAS
  - HLB síntomas = "severo" → Alerta alta
  - Minador > 30% → Alerta media
  - Ácaros conteo > 5 → Alerta media
```

---

## Revisar y Ajustar

### El formulario generado es un borrador

La IA genera un punto de partida que debes revisar:

1. **Revisa los campos**: ¿Cubren lo que necesitas?
2. **Ajusta los umbrales**: ¿Son apropiados para tu situación?
3. **Agrega campos faltantes**: La IA puede no incluir todo
4. **Elimina lo innecesario**: Mantén el formulario enfocado

### Iteración con la IA

Puedes continuar la conversación para refinar:

```
Usuario: Agrega también evaluación de cochinilla
IA: [Genera campos adicionales para cochinilla]

Usuario: Los umbrales de minador son muy altos para mi zona
IA: [Ajusta los umbrales sugeridos]

Usuario: Simplifica la sección de HLB, solo necesito
         presencia/ausencia
IA: [Reduce los campos de HLB]
```

---

## Mejores Prácticas para Prompts

### Sé específico sobre tu cultivo

```
❌ "Formulario para plagas"
✓ "Formulario para plagas en café arábica en zona de 1,400 msnm"
```

### Menciona plagas prioritarias

```
❌ "Incluye todas las plagas comunes"
✓ "Enfócate en broca del café y roya, son mis principales problemas"
```

### Indica el tipo de inspección

```
❌ "Monitoreo general"
✓ "Inspección rápida semanal de vigilancia, máximo 5 minutos por árbol"
```

### Especifica acciones esperadas

```
✓ "Incluye alertas que me avisen cuando deba aplicar tratamiento"
✓ "Necesito saber cuándo el nivel es económicamente dañino"
```

---

## Limitaciones

### Lo que la IA hace bien

- Sugerir estructuras basadas en cultivos comunes
- Proponer campos estándar para plagas conocidas
- Generar umbrales basados en literatura agrícola
- Crear formularios coherentes y organizados

### Lo que la IA no puede hacer

- Conocer las condiciones específicas de tu finca
- Saber el historial de plagas de tus lotes
- Determinar umbrales económicos para tu operación
- Reemplazar el criterio de un agrónomo experimentado

:::caution[Revisión experta]
Aunque la IA genera formularios útiles, siempre revisa con tu equipo técnico antes de usar en producción. Los umbrales y criterios pueden necesitar ajuste para tu contexto específico.
:::

---

## Guardar y Usar

### Guardar el formulario

1. Una vez satisfecho con el resultado, haz clic en **Crear Formulario**
2. El formulario se guarda en tu lista de formularios
3. Puedes editarlo como cualquier otro formulario

### Usar el formulario

1. El formulario aparece en **Sanidad → Formularios**
2. Asígnalo a una ruta desde el calendario
3. Los monitores lo verán al iniciar la inspección

---

## Ejemplos por Cultivo

### Cannabis

```
Crea un formulario para monitoreo de cannabis indoor:
- Ácaros (especialmente araña roja)
- Trips
- Hongos (Botrytis, mildiu polvoriento)
- Deficiencias nutricionales
- Evaluación por etapa de crecimiento (vegetativo/floración)
```

### Palma de aceite

```
Formulario de inspección para palma de aceite:
- Pudrición del cogollo
- Anillo rojo
- Defoliadores
- Estado nutricional (deficiencias visibles)
- Evaluación de racimos
```

### Café

```
Monitoreo fitosanitario para café:
- Broca del café (evaluación de frutos)
- Roya (envés de hojas)
- Ojo de gallo
- Minador de hoja
- Estado general del árbol
```

---

## Próximos Pasos

1. **[Revisa la guía de formularios](/sanitation/forms/guide/)** - Entiende la estructura completa
2. **[Configura campos personalizados](/sanitation/forms/custom-fields/)** - Ajusta detalles
3. **[Define alertas](/sanitation/forms/alerts/)** - Configura notificaciones automáticas
