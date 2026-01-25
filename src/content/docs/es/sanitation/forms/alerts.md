---
title: Alertas de Sanidad
description: Configura notificaciones automáticas basadas en los datos de tus rutas de sanidad.
---

Las Alertas te permiten monitorear los datos de tus fincas de manera automática. En lugar de revisar cada informe manualmente, el sistema te notificará cuando se cumplan ciertas condiciones críticas (como un conteo de plagas muy alto o un promedio de pH fuera de rango).

## ¿Cómo funcionan las Alertas?

Las alertas en el módulo de Sanidad están vinculadas a un **Formulario de Sanidad**. Esto significa que la alerta vigilará los datos recolectados a través de ese formulario específico.

### Modos de Evaluación

Puedes elegir cuándo quieres que el sistema revise las condiciones:

- **Tiempo Real (Real-time)**: Se evalúa inmediatamente después de que un monitor sube una ruta desde el campo. Es ideal para detectar problemas que requieren acción inmediata.
- **Diario (Daily)**: Se evalúa una vez al día, analizando el acumulado de todas las rutas realizadas en las últimas 24 horas.
- **Semanal (Weekly)**: Se evalúa una vez a la semana, analizando las tendencias de los últimos 7 días.

---

## Configuración de Condiciones

Para configurar una alerta, debes definir una **Condición**. Una condición se compone de:

### 1. Campo Personalizado
Eliges qué dato quieres vigilar (ej. "Conteo de Ácaros", "pH", "¿Presencia de Antracnosis?").

### 2. Método de Agregación
Cómo quieres que el sistema resuma los datos de la ruta o del periodo:
- **Promedio (Average)**: El valor medio (ej. Promedio de ácaros por hoja).
- **Suma (Sum)**: El total acumulado (ej. Total de focos encontrados).
- **Máximo / Mínimo**: El valor más alto o más bajo registrado.
- **Conteo (Count)**: Cuántas veces se registró el dato.

### 3. Operador y Valor Umbral
La regla matemática que dispara la alerta:
- **Mayor que / Menor que**: Ej. "Promedio de ácaros mayor que 5".
- **Entre (Between)**: Ej. "pH entre 5.5 y 7.0".
- **Igual a**: Ej. "Presencia de plaga igual a Sí".

---

## Compatibilidad por Tipo de Campo

No todos los campos se pueden usar para alertas de la misma manera:

| Tipo de Campo | Métodos Disponibles | Ejemplo de Uso |
| :--- | :--- | :--- |
| **Número** | Todos (Promedio, Suma, etc.) | Alertar si el conteo de larvas supera 10. |
| **Casilla (Checkbox)** | Promedio (Porcentaje de incidencia) | Alertar si más del 20% de los árboles tienen plaga. |
| **Lista / Radio** | Conteo, Promedio | Alertar si una opción específica (ej. "Nivel Crítico") aparece con frecuencia. |
| **Texto / Foto** | No compatibles | Estos campos son descriptivos y no se pueden promediar. |

---

## Notificaciones y Destinatarios

Cuando una alerta se dispara, el sistema envía notificaciones de dos formas:
1. **Correo Electrónico**: Un mensaje detallado con los datos que dispararon la alerta.
2. **En la Aplicación**: Una notificación visual dentro del panel de Arlo.

### ¿Quién recibe la alerta?
- **Destinatarios Específicos**: Puedes elegir usuarios individuales de la finca para que reciban la alerta.
- **Destinatarios Globales**: Si la finca tiene configurados "Destinatarios Globales" (ej. el Gerente General), ellos también recibirán la notificación si activas esta opción.

:::tip[Control de Spam]
El sistema tiene un **Periodo de Enfriamiento (Cooldown)** para evitar enviarte cientos de correos por el mismo problema. Si una alerta se dispara varias veces seguidas, solo recibirás la primera notificación hasta que pase el tiempo de enfriamiento configurado para la finca.
:::
