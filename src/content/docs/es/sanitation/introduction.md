---
title: Introducción al Monitoreo de Sanidad
description: Principios de manejo integrado de plagas y cómo Arlo te ayuda a implementar un monitoreo sistemático en tu finca.
---

El módulo de Sanidad es el corazón del monitoreo preventivo en Arlo. Te permite detectar problemas de plagas y enfermedades antes de que causen daño económico significativo, usando un enfoque sistemático basado en datos.

---

## ¿Por qué el Monitoreo Sistemático?

En cultivos perennes como cítricos, aguacate o café, las plagas y enfermedades pueden pasar desapercibidas hasta que el daño es considerable. Un monitoreo ad-hoc o reactivo tiene varios problemas:

- **Detección tardía**: Los problemas se identifican cuando ya son visibles a simple vista
- **Cobertura inconsistente**: Algunos lotes se revisan más que otros
- **Datos no comparables**: Sin estructura estándar, es difícil ver tendencias
- **Decisiones por intuición**: Sin datos históricos, las decisiones de tratamiento son subjetivas

### El enfoque de Arlo

Arlo implementa un sistema de **Manejo Integrado de Plagas (MIP)** digital:

1. **Monitoreo planificado**: Rutas semanales con fechas límite y responsables claros
2. **Formularios estandarizados**: Mismas preguntas en cada inspección para datos comparables
3. **Umbrales de acción**: Alertas automáticas cuando los niveles requieren intervención
4. **Análisis histórico**: Tendencias y patrones para decisiones informadas

---

## Cómo Funcionan las Rutas

Una **ruta de sanidad** es una inspección programada que incluye:

- **Formulario**: Qué datos recolectar (plagas, enfermedades, observaciones)
- **Lotes**: Dónde realizar la inspección
- **Monitor**: Quién la ejecutará
- **Fecha límite**: Cuándo debe completarse

### El ciclo semanal típico

```
Lunes       → Programar rutas de la semana
Mar-Jue     → Ejecutar inspecciones en campo
Viernes     → Revisar resultados, tomar decisiones
```

Este ritmo semanal mantiene al equipo en ciclo constante de monitoreo-análisis-acción.

### Estados de las rutas

| Estado | Significado |
|--------|-------------|
| **Programada** | Creada pero aún no iniciada |
| **En progreso** | El monitor ha iniciado la inspección |
| **Completada** | Todos los datos capturados y sincronizados |
| **Atrasada** | La fecha límite pasó sin completarse |

:::caution[Detección automática de retrasos]
Cuando una ruta supera su fecha límite (`due_at`), el sistema automáticamente la marca como "Atrasada". Esto permite identificar rápidamente trabajo pendiente en el calendario.
:::

---

## Estrategia de Cobertura

Un buen programa de monitoreo equilibra dos factores:

### Frecuencia vs. Profundidad

- **Alta frecuencia, baja profundidad**: Revisar todos los lotes superficialmente cada semana
- **Baja frecuencia, alta profundidad**: Revisar pocos lotes exhaustivamente cada mes

La mayoría de fincas usan un enfoque híbrido:
- Inspecciones de **vigilancia rápida** semanales en todos los lotes
- Inspecciones **detalladas** mensuales o cuando se detectan problemas

### Muestreo representativo

Para cultivos de alta densidad, no es práctico revisar cada árbol. Los formularios de Arlo soportan dos modos:

- **Muestreo cerrado**: Número fijo de árboles por lote (ej. 10 árboles/lote)
- **Muestreo abierto**: El monitor decide cuántos puntos evaluar según el tamaño del lote

---

## Componentes del Módulo

### Configuración

| Componente | Propósito |
|------------|-----------|
| **Monitores** | Registro de inspectores de campo |
| **Formularios** | Diseño de qué datos recolectar |
| **Alertas** | Umbrales y notificaciones automáticas |

### Operación

| Componente | Propósito |
|------------|-----------|
| **Calendario** | Programación y seguimiento de rutas |
| **Lanzador** | Inicio de inspecciones con soporte offline |
| **Toma de datos** | Captura móvil con GPS y fotos |

### Análisis

| Componente | Propósito |
|------------|-----------|
| **Análisis de rutas** | Resultados individuales con resumen de IA |
| **Mapa de sanidad** | Visualización espacial de hallazgos |
| **Informes analíticos** | Tendencias, coberturas y métricas |

---

## Detrás de Escenas

Arlo automatiza varios procesos que facilitan el trabajo:

### Transiciones automáticas de estado
- Cuando un monitor inicia una ruta → Estado cambia a "En progreso"
- Cuando se sincronizan todos los datos → Estado cambia a "Completada"
- Cuando pasa la fecha límite sin completar → Estado cambia a "Atrasada"

### Generación de reportes
Al completar una ruta, el sistema automáticamente:
- Agrega conteos por tipo de campo
- Calcula promedios y porcentajes
- Genera un resumen con IA incluyendo contexto climático
- Dispara alertas si se superan umbrales

### Campos calculados
Los formularios pueden incluir campos que se calculan automáticamente:
- Referencias cruzadas entre niveles (árbol puede usar datos de ruta)
- Promedios, sumas y conteos por sección
- Índices compuestos personalizados

---

## Mejores Prácticas por Cultivo

### Cítricos
- Monitorear HLB (Huanglongbing) con inspección visual de síntomas
- Revisar minador de hoja en brotes nuevos
- Evaluar ácaros en envés de hojas

### Aguacate
- Vigilar trips en flores y frutos jóvenes
- Monitorear Phytophthora en raíces (especial atención en temporada lluviosa)
- Evaluar barrenadores en ramas y tronco

### Café
- Revisar broca del café en frutos
- Monitorear roya en envés de hojas
- Evaluar nemátodos mediante muestreo de suelo periódico

### Cannabis
- Control estricto de ácaros y trips
- Monitoreo de hongos (Botrytis, mildiu) especialmente en floración
- Vigilancia de plagas de raíz en sistemas indoor

---

## Próximos Pasos

1. **[Registra tus monitores](/es/sanitation/monitors/)** - Las personas que harán las inspecciones
2. **[Crea tu primer formulario](/es/sanitation/forms/guide/)** - Define qué datos recolectar
3. **[Programa una ruta](/es/sanitation/calendar/)** - Asigna fecha, lotes y responsable
