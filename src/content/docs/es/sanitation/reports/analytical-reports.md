---
title: Informes Analíticos de Sanidad
description: Profundiza en tus datos de sanidad con gráficos avanzados, métricas de operación e información impulsada por IA.
---

La sección de **Informes Analíticos** es el núcleo de tu toma de decisiones basada en datos. Mientras que los Informes de Mapa te dan un contexto espacial, estos informes proporcionan la profundidad estadística necesaria para entender tendencias, monitorear la eficiencia y predecir el comportamiento futuro de las plagas.

---

## 1. Informe de Hallazgos (Datos Biológicos)

Esta pestaña se centra en los datos reales recolectados durante las inspecciones. Se divide en dos niveles principales, coincidiendo con la estructura de tus formularios:

- **Nivel Árbol (Esmeralda):** Observaciones sobre el árbol completo o el hallazgo (ej. "¿Está el árbol infectado?").
- **Nivel Muestra (Violeta):** Puntos de datos detallados de múltiples partes del mismo árbol (ej. "Conteo de ácaros en la hoja #3").

### Cómo se Traducen los Datos a Gráficos
El sistema elige automáticamente la mejor forma de visualizar cada tipo de pregunta:

| Tipo de Campo | Tipo de Gráfico | Características |
| :--- | :--- | :--- |
| **Casilla (Sí/No)** | Gráfico de Barras Agrupadas | Muestra el % de hallazgos positivos. Incluye una **línea secundaria** que muestra el número total de muestras tomadas para dar contexto. |
| **Número / Calculado** | Gráfico de Líneas Multi-Métrica | Permite cambiar entre **Promedio**, **Mediana** y **Suma Total** mediante un desplegable en la esquina del gráfico. |
| **Selección / Radio** | Gráfico de Barras Apiladas | Muestra la distribución de las respuestas (ej. 20% Leve, 50% Medio, 30% Severo). |

---

## 2. Informe de Operaciones (Eficiencia del Monitor)

Esta pestaña te ayuda a gestionar a tu equipo y asegurar que la finca se esté cubriendo de manera efectiva.

### Eficiencia del Monitor
Rastrea el desempeño de tus monitores a lo largo del tiempo:
- **Vista Agregada:** Mira el desempeño total de la finca (Total de Árboles vs. Tiempo Promedio por Árbol).
- **Por Monitor:** Compara el desempeño individual. ¿Son algunos monitores más rápidos que otros? ¿Baja la precisión cuando van demasiado rápido?
- **Métricas:** Total de árboles inspeccionados, número de rutas y **Tiempo Promedio por Árbol** (la métrica de eficiencia más crítica).

### Matriz de Cobertura
Una tabla de tipo "Mapa de Calor" que muestra qué lotes fueron visitados en cada período de tiempo.
- **Estado del Lote:**
    - **🟢 Al Día:** El lote ha sido visitado recientemente.
    - **🟡 Monitorear:** El lote no ha sido visitado en el último período.
    - **🔴 Necesita Atención:** El lote no ha sido visitado en 2 o más períodos (un **Hueco de Cobertura**).
- **Alertas de Huecos:** El sistema te avisará automáticamente en la parte superior del informe si detecta lotes que están siendo descuidados.

---

## 3. Filtros Avanzados y Agregaciones

El panel de filtros permite un potente segmentado de datos:

### Comparar Lotes vs. Datos Agregados
- **Modo Comparación:** Si seleccionas entre **1 y 10 lotes**, los gráficos mostrarán una línea o barra separada para cada lote, permitiendo la comparación directa.
- **Modo Agregado:** Si seleccionas **más de 10 lotes** (o lo dejas vacío), el sistema promediará los datos de toda la selección para mostrar una única "Tendencia de la Finca".

### Enfoque en un Solo Campo
Puedes elegir filtrar todo el informe por un **Único Campo Personalizado**. Esto es útil cuando quieres mirar exclusivamente una plaga o medición específica sin el ruido del resto del formulario.

---

## 4. Alertas y Umbrales

Si has configurado **Alertas** para tu formulario:
1. Activa **"Mostrar Alertas"** en los filtros.
2. Aparecerá una **línea roja discontinua** en los gráficos representando tu umbral.
3. Esto permite ver de un vistazo cuándo un lote cruzó el "umbral de acción" y necesita tratamiento.

---

## 5. Asistente de Consultas (Pregunta a la IA)

El **Asistente de Consultas** es una IA especializada que tiene acceso a todos los datos que se muestran actualmente en tu informe. Puedes abrirlo desde el botón superior derecho.

- **Acceso a Datos:** Ve los hallazgos, métricas de operación y contexto de los lotes para el período seleccionado.
- **Mejores Usos:**
    - *"¿Cuáles son las 3 principales preocupaciones de plagas esta semana?"*
    - *"¿Qué monitor es más eficiente buscando ácaros?"*
    - *"¿Hay una correlación entre la velocidad de inspección y los niveles de infestación?"*
    - *"Resume los huecos de cobertura por los que debería preocuparme."*

---

## 6. Descarga de Datos

- **Informe Procesado (.xlsx):** Descarga un archivo Excel con los mismos datos agregados que se muestran en los gráficos (promedios, sumas, etc.).
- **Datos Crudos (.xlsx):** Descarga cada uno de los puntos de datos individuales recolectados por los monitores. Úsalo para tus propias hojas de cálculo personalizadas o análisis externos.
