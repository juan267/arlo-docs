---
title: Crear Formularios
description: Aprende a diseñar formularios personalizados con diferentes tipos de campos, validaciones y dependencias condicionales.
---

Esta guía te lleva paso a paso a través del proceso de crear un formulario personalizado, desde la configuración básica hasta funcionalidades avanzadas como dependencias condicionales.

---

## Crear un Nuevo Formulario

### Acceder al módulo

1. Ve a **Formularios Personalizados** en el menú lateral
2. Haz clic en **Crear Formulario** o el botón (+)

### Información básica

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| **Nombre** | Título del formulario | "Checklist de Seguridad" |
| **Descripción** | Propósito y uso | "Inspección diaria de condiciones de trabajo" |

---

## Agregar Campos

### Proceso básico

1. En el editor del formulario, haz clic en **Agregar Campo**
2. Selecciona el tipo de campo
3. Configura las propiedades del campo
4. Repite para cada campo necesario

### Propiedades comunes

| Propiedad | Descripción |
|-----------|-------------|
| **Etiqueta** | La pregunta o nombre que verá el usuario |
| **Obligatorio** | Si debe completarse para finalizar |
| **Placeholder** | Texto de ayuda dentro del campo |
| **Descripción** | Instrucciones adicionales |

---

## Tipos de Campos en Detalle

### Texto corto

Para respuestas breves de una línea.

```
Configuración:
- Etiqueta: "Nombre del inspector"
- Obligatorio: Sí
- Placeholder: "Ingrese su nombre completo"
```

**Validaciones disponibles:**
- Longitud mínima/máxima
- Patrón (expresión regular)

### Texto largo

Para descripciones o comentarios extensos.

```
Configuración:
- Etiqueta: "Observaciones detalladas"
- Obligatorio: No
- Filas: 4
```

### Número

Para cantidades, mediciones o conteos.

```
Configuración:
- Etiqueta: "Temperatura (°C)"
- Obligatorio: Sí
- Mínimo: 0
- Máximo: 50
- Decimales: 1
```

**Validaciones disponibles:**
- Valor mínimo
- Valor máximo
- Número de decimales

### Selección única

Para elegir una opción de una lista.

```
Configuración:
- Etiqueta: "Estado del equipo"
- Obligatorio: Sí
- Opciones:
  - Bueno
  - Regular
  - Malo
  - Fuera de servicio
```

**Variantes de presentación:**
- Dropdown (lista desplegable)
- Radio buttons (botones circulares)

### Selección múltiple

Para elegir varias opciones.

```
Configuración:
- Etiqueta: "Problemas detectados"
- Obligatorio: No
- Opciones:
  - Fuga de aceite
  - Ruido anormal
  - Vibración excesiva
  - Daño visible
  - Otro
```

### Fecha

Para capturar fechas.

```
Configuración:
- Etiqueta: "Fecha de última calibración"
- Obligatorio: Sí
- Fecha mínima: (ninguna)
- Fecha máxima: Hoy
```

### Hora

Para capturar tiempos.

```
Configuración:
- Etiqueta: "Hora de inicio de inspección"
- Obligatorio: Sí
- Formato: 24 horas
```

### Foto

Para capturar imágenes.

```
Configuración:
- Etiqueta: "Foto del área inspeccionada"
- Obligatorio: Sí
- Máximo de fotos: 3
```

:::tip[Fotos múltiples]
Puedes permitir múltiples fotos en un solo campo. Útil para documentar diferentes ángulos o problemas.
:::

### Firma

Para firmas digitales.

```
Configuración:
- Etiqueta: "Firma del responsable"
- Obligatorio: Sí
```

### Ubicación

Para capturar coordenadas GPS.

```
Configuración:
- Etiqueta: "Ubicación del punto de muestreo"
- Obligatorio: No
```

---

## Dependencias Condicionales

Las dependencias permiten mostrar u ocultar campos basándose en respuestas previas.

### ¿Cuándo usar dependencias?

- Cuando un campo solo aplica si otro tiene cierto valor
- Para simplificar formularios largos
- Para guiar al usuario según sus respuestas

### Ejemplo básico

```
Campo 1: "¿Se detectaron problemas?"
  Tipo: Selección única
  Opciones: Sí, No

Campo 2: "Describa los problemas"
  Tipo: Texto largo
  Depende de: Campo 1 = "Sí"
```

En este caso, el campo 2 solo aparece si el usuario selecciona "Sí" en el campo 1.

### Configurar una dependencia

1. Crea primero el campo "padre" (del que depende)
2. Crea el campo "hijo" (el que se mostrará condicionalmente)
3. En el campo hijo, activa **Dependencia**
4. Selecciona el campo padre
5. Define la condición (igual a, diferente de, contiene, etc.)
6. Especifica el valor que activa la dependencia

### Ejemplo complejo

```
Campo: "Tipo de inspección"
  Opciones: Rutinaria, Por incidente, Auditoría externa

Si "Por incidente":
  → Mostrar: "Número de incidente"
  → Mostrar: "Fecha del incidente"

Si "Auditoría externa":
  → Mostrar: "Nombre del auditor"
  → Mostrar: "Organización certificadora"
```

---

## Organizar Campos

### Orden de campos

Puedes reordenar campos arrastrándolos a la posición deseada. El orden en el editor es el orden que verá el usuario.

### Secciones (si disponible)

Algunos formularios permiten agrupar campos en secciones:

```
📋 Inspección de Vehículo

Sección: Datos Generales
  - Fecha
  - Vehículo
  - Conductor

Sección: Revisión Mecánica
  - Nivel de aceite
  - Nivel de combustible
  - Estado de frenos

Sección: Documentación
  - Licencia vigente
  - Seguro vigente
  - SOAT vigente
```

---

## Previsualizar y Probar

### Vista previa

Antes de publicar, usa la función de **Vista Previa** para:

- Ver cómo se verá el formulario en dispositivos
- Probar las dependencias condicionales
- Verificar que los campos obligatorios estén correctos

### Prueba con datos reales

1. Guarda el formulario
2. Crea una respuesta de prueba
3. Verifica que todo funcione como esperas
4. Elimina la respuesta de prueba si es necesario

---

## Activar y Desactivar

### Estado activo

- El formulario está disponible para crear respuestas
- Aparece en la lista de formularios disponibles

### Estado inactivo

- El formulario no puede recibir nuevas respuestas
- Las respuestas existentes se mantienen
- Útil para formularios temporales o en revisión

---

## Mejores Prácticas

### Diseño del formulario

1. **Mantén formularios enfocados**: Un formulario = un propósito
2. **Usa campos obligatorios con moderación**: Solo lo esencial
3. **Ordena lógicamente**: Del general al específico
4. **Usa descripciones claras**: Ayuda al usuario a entender qué se espera

### Tipos de campo

1. **Selección vs. texto**: Usa selección cuando las opciones son finitas
2. **Números vs. texto**: Usa número cuando necesites calcular o comparar
3. **Fotos estratégicas**: No pidas fotos innecesarias (consumen tiempo)

### Validaciones

1. **Rangos realistas**: Configura mínimos y máximos que tengan sentido
2. **Obligatorio con propósito**: Si un dato es crítico, hazlo obligatorio
3. **Prueba las dependencias**: Verifica que funcionen correctamente

---

## Próximos Pasos

1. **[Llenar formularios](/custom-forms/fill/)** - Captura respuestas
2. **[Exportar datos](/custom-forms/export/)** - Obtén los datos para análisis
