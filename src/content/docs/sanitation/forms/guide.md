---
title: Guía de Formularios de Sanidad
description: Aprende a crear y configurar formularios de inspección para tu finca.
---

Los Formularios de Sanidad son el corazón de tu sistema de monitoreo. Definen exactamente qué datos se recolectarán en el campo, cuántos árboles se inspeccionarán y qué detalles específicos son importantes para tus cultivos.

## Entendiendo los Modos de Muestreo

La decisión más importante al crear un formulario es elegir el **Modo de Muestreo**. Esto le indica al sistema cómo debe el inspector recorrer el lote.

### 1. Cerrado (Muestreo Fijo)
**Úsalo para:** Monitoreo sistemático de plagas, enfermedades o calidad de fruta.
- **Cómo funciona:** Defines un porcentaje (ej. 2% del lote). Si un lote tiene 500 árboles, el sistema le pedirá al monitor que visite exactamente 10 árboles.
- **Objetivo:** Obtener una visión estadísticamente representativa de todo el lote.

### 2. Abierto (Registro de Hallazgos)
**Úsalo para:** Registrar cosas a medida que se encuentran, como nidos de hormigas, trampas o puntos específicos de daño.
- **Cómo funciona:** El monitor camina por el lote y registra una entrada cada vez que encuentra algo. No hay un número fijo de árboles a visitar.
- **Objetivo:** Mapear las ubicaciones exactas y los detalles de hallazgos específicos.

---

## Ajustes de Configuración del Formulario

Al crear o editar un formulario, verás varias opciones de configuración:

| Ajuste | Descripción |
| :--- | :--- |
| **Nombre** | Un nombre claro como "Monitoreo de Ácaros" o "Censo de Hormigueros". |
| **Color** | Elige un color para ayudar a identificar este formulario en el panel y en la aplicación móvil. |
| **Porcentaje de Árboles por Lote** | (Solo modo Cerrado) El porcentaje de árboles en un lote que deben ser inspeccionados (usualmente entre 1% y 5%). |
| **Número de Secciones del Árbol** | En cuántas partes se divide el árbol (ej. 4 para Norte, Sur, Este, Oeste). |
| **Muestras por Sección** | Cuántos puntos de datos recolectar en cada sección (ej. 2 hojas por sección). |
| **Muestras Abiertas** | Si está activado, el monitor puede decidir cuántas muestras tomar en cada punto en lugar de seguir un número fijo. |

---

## Construir con IA

Si no estás seguro de cómo estructurar tu formulario, puedes usar el **Asistente de IA**. 

1. Haz clic en **Construir con IA**.
2. Cuéntale a la IA qué quieres monitorear (ej. "Quiero revisar Ácaro Rojo en mi finca de Aguacate").
3. La IA sugerirá el mejor modo de muestreo, secciones de árboles y campos personalizados basados en mejores prácticas agrícolas.
4. Puedes revisar y ajustar el formulario sugerido antes de guardarlo.

---

## Niveles del Formulario: ¿Dónde Poner las Preguntas?

Cada formulario se organiza en tres niveles distintos. Elegir el nivel correcto para cada pregunta es crucial para obtener datos precisos e informes claros.

### 1. Nivel de Ruta (Una vez por Inspección)
Estas son preguntas que se aplican a **todo el trabajo** o a todo el lote que se está visitando.
- **Cuándo usarlo:** Para contexto general que no cambia de árbol en árbol.
- **Ejemplos:**
  - Condiciones climáticas (Soleado, Lloviendo, Ventoso).
  - Estado general del lote (Limpio, Maleza alta).
  - Estado general del riego.

### 2. Nivel de Árbol (Una vez por Árbol o Hallazgo)
Estas son preguntas sobre el **punto o árbol específico** frente al cual se encuentra el monitor.
- **Cuándo usarlo:** Para observaciones que se aplican a toda la planta o al "hallazgo" específico (en formularios de modo abierto).
- **Ejemplos:**
  - **Modo Cerrado:** Vigor general del árbol (Alto, Medio, Bajo), presencia de enfermedades en el tronco.
  - **Modo Abierto:** Tamaño de un hormiguero, nivel de actividad de una trampa.

### 3. Nivel de Muestra (Varias veces por Árbol)
Estas son las preguntas más detalladas. Se responden por **cada muestra individual** tomada de un árbol.
- **Cuándo usarlo:** Cuando necesitas recolectar varios puntos de datos de diferentes partes del mismo árbol para obtener un promedio.
- **Ejemplos:**
  - Número de ácaros encontrados en una sola hoja (cuando revisas 4 hojas por árbol).
  - Diámetro de la fruta (cuando mides 5 frutas por árbol).
  - Conteo de plagas en una rama específica.

---

## Guía de Decisión: ¿Nivel de Árbol o de Muestra?

Una pregunta común es: *"¿Debería poner esto en el nivel de Árbol o en el de Muestra?"*

| Si estás preguntando... | Usa este Nivel | ¿Por qué? |
| :--- | :--- | :--- |
| "¿Está enfermo este árbol?" | **Nivel de Árbol** | Es un solo "Sí/No" para toda la planta. |
| "¿Cuántos bichos hay en esta hoja?" | **Nivel de Muestra** | Revisarás varias hojas en el mismo árbol. |
| "¿Cuál es el tamaño del nido?" | **Nivel de Árbol** | En modo abierto, el "Árbol" es el nido mismo. |
| "¿De qué color es la fruta?" | **Nivel de Muestra** | Estás evaluando varias frutas por árbol. |

:::tip[Consejo para Informes]
Los datos en el **Nivel de Muestra** se promedian o suman automáticamente para darte un "Puntaje por Árbol". Los datos en el **Nivel de Árbol** te dicen cuántos árboles en la finca están afectados.
:::

---

## Ejemplos Reales de Formularios

Para ayudarte a visualizar cómo se ven estos conceptos en la práctica, aquí tienes dos ejemplos basados en configuraciones reales de Arlo:

### Ejemplo 1: Monitoreo de Ácaros (Modo Cerrado)
Este formulario se usa para una inspección sistemática semanal donde se busca entender el nivel de infestación promedio en todo el lote.

*   **Configuración General:**
    *   **Modo:** Cerrado (Muestreo Fijo).
    *   **Porcentaje de Árboles:** 1.5% (En un lote de 1,000 árboles, se visitan 15).
    *   **Secciones:** 4 (Norte, Sur, Este, Oeste).
    *   **Muestras por Sección:** 4 (4 hojas por cada sección).
*   **Campos Personalizados:**
    *   **Nivel Ruta:** Clima (Soleado, Nublado, Lluvia).
    *   **Nivel Árbol:** Vigor del árbol (Alto, Medio, Bajo).
    *   **Nivel Muestra:** Conteo de ácaros (Número).

### Ejemplo 2: Monitoreo de Hormigas (Modo Abierto)
Este formulario se usa para recorrer el lote y registrar cada hormiguero que se encuentre para su tratamiento.

*   **Configuración General:**
    *   **Modo:** Abierto (Registro de Hallazgos).
    *   **Secciones:** 1 (No se divide por secciones, el hallazgo es el punto central).
    *   **Muestras por Sección:** 1 (Una sola entrada por cada hormiguero).
*   **Campos Personalizados:**
    *   **Nivel Ruta:** Observador (Nombre del monitor).
    *   **Nivel Árbol (Hallazgo):**
        *   Tamaño del nido (Pequeño, Mediano, Grande).
        *   Estado (Activo, Tratado).
        *   Foto del nido (Archivo).
