---
title: Recolección de Datos en Campo
description: Aprende a usar los formularios optimizados para móviles para recolectar datos de sanidad en el campo.
---

La pantalla de **Entrada de Datos** es donde los monitores registran sus hallazgos mientras recorren la finca. Esta interfaz está diseñada para ser rápida y fácil de usar en dispositivos móviles, incluso con guantes o bajo luz solar intensa.

## Navegación del Flujo de Trabajo

Dependiendo de cómo se haya configurado el **Formulario de Sanidad**, el sistema te guiará a través de una secuencia específica de pantallas:

1.  **Nivel de Ruta**: Preguntas generales sobre todo el lote (ej. Clima).
2.  **Nivel de Árbol**: Observaciones para un árbol o hallazgo específico.
3.  **Nivel de Muestra**: Mediciones detalladas para muestras individuales (ej. hojas o frutas específicas).

El sistema maneja automáticamente las transiciones. Por ejemplo, si necesitas inspeccionar 4 secciones por árbol, te mostrará la pantalla de **Nivel de Muestra** 4 veces antes de pasar al siguiente árbol.

---

## Seguimiento de tu Progreso

En la parte superior de la pantalla, verás una **Tarjeta de Progreso** que te mantiene informado sobre tu posición actual en la ruta:

-   **Progreso de la Ruta**: Muestra en qué árbol te encuentras del total programado (ej. Árbol 5 / 10).
-   **Progreso del Árbol**: Muestra qué sección del árbol estás inspeccionando (ej. Sección 2 / 4).
-   **Progreso de la Muestra**: Muestra cuántas muestras has tomado en la sección actual.

:::note[Rutas de Modo Abierto]
Si la ruta es de **Modo Abierto**, el número total de árboles no es fijo. La barra de progreso simplemente contará a medida que registres nuevos hallazgos.
:::

---

## Completando el Formulario

### Tipos de Campos
Encontrarás diferentes tipos de campos (Números, Casillas, Listas, etc.).
-   **Colores**: Algunos campos pueden tener colores de fondo para ayudarte a agrupar observaciones relacionadas rápidamente.
-   **Campos Condicionales**: Algunas preguntas pueden aparecer solo según respuestas anteriores (ej. un campo de "Foto" que aparece solo si marcas "Plaga Encontrada").

### GPS y Conectividad
-   **Rastreo GPS**: El sistema registra automáticamente tu ubicación cada vez que guardas un punto de datos.
-   **Iconos de Conectividad**: Verás un **Icono de Wifi** en la barra inferior.
    -   **Azul (En línea)**: Los datos se están sincronizando con el servidor en tiempo real.
    -   **Rojo (Sin conexión)**: Estás desconectado actualmente; los datos se guardan de forma segura en tu dispositivo y se sincronizarán más tarde.

---

## Pausar y Completar

En la parte inferior de la pantalla (la "Base" o "Dock"), tienes tres acciones principales:

1.  **Pausar (⏸️)**: Si necesitas detenerte para un descanso o una llamada, haz clic en el icono de pausa. Tu progreso se guarda localmente y puedes retomarlo más tarde desde el **Lanzador de Rutas**.
2.  **Estado de Conectividad**: Indica si tu dispositivo se está comunicando actualmente con los servidores de Arlo.
3.  **Siguiente / Guardar (➡️)**: Después de completar los campos, haz clic en la flecha para guardar y pasar al siguiente paso.

### Completar la Ruta
Cuando llegues a la última muestra del último árbol, el botón "Siguiente" cambiará a una acción de **Completar**. Una vez presionado, la ruta se moverá a la sección de "Completadas" del **Lanzador de Rutas**, lista para la subida final.
