---
title: Llenar Formularios
description: Cómo completar formularios personalizados, guardar borradores y finalizar respuestas con validación automática.
---

Una vez que tienes formularios creados, esta guía te muestra cómo completarlos, manejar borradores y finalizar respuestas correctamente.

---

## Iniciar una Nueva Respuesta

### Desde la lista de formularios

1. Ve a **Formularios Personalizados**
2. Encuentra el formulario que deseas completar
3. Haz clic en **Nueva Respuesta** o el botón (+)
4. Se abre el formulario listo para completar

### Desde respuestas existentes

1. Abre el formulario
2. Ve a la pestaña **Respuestas**
3. Haz clic en **Nueva Respuesta**

---

## Completar los Campos

### Campos de texto

- Haz clic en el campo y escribe tu respuesta
- Respeta la longitud máxima si está configurada
- Los campos obligatorios tienen un indicador (*)

### Campos numéricos

- Ingresa solo números
- Usa punto (.) o coma (,) para decimales según tu configuración regional
- El sistema valida rangos mínimos y máximos

### Campos de selección

**Selección única:**
- Haz clic en la opción deseada
- Solo una opción puede estar seleccionada

**Selección múltiple:**
- Haz clic en todas las opciones que apliquen
- Puedes seleccionar ninguna, una o varias

### Campos de fecha y hora

- Usa el selector de fecha/hora
- Algunos campos pueden tener restricciones (ej. no fechas futuras)

### Campos de foto

1. Haz clic en **Agregar Foto**
2. Opciones:
   - Tomar foto con la cámara del dispositivo
   - Seleccionar de la galería
3. La foto se adjunta al campo
4. Puedes eliminarla y agregar otra si es necesario

:::tip[Calidad de fotos]
Las fotos se comprimen automáticamente para optimizar almacenamiento. Para documentación que requiere alta resolución, considera tomar las fotos por separado y adjuntar referencias.
:::

### Campos de firma

1. Haz clic en el área de firma
2. Dibuja tu firma con el dedo o mouse
3. Haz clic en **Aceptar** para confirmar
4. Puedes limpiar y reintentar si es necesario

### Campos de ubicación

1. Haz clic en **Capturar Ubicación**
2. Permite acceso a ubicación si el navegador lo solicita
3. Las coordenadas se capturan automáticamente
4. Puedes ver la ubicación en un mini-mapa

---

## Campos Condicionales

Si el formulario tiene dependencias configuradas:

1. Completa los campos iniciales
2. Los campos dependientes aparecerán según tus respuestas
3. Si cambias una respuesta, los campos dependientes pueden ocultarse

### Ejemplo

```
Pregunta: "¿Se detectaron anomalías?"

Si seleccionas "Sí":
  → Aparece: "Describa las anomalías"
  → Aparece: "Adjunte foto"

Si seleccionas "No":
  → Estos campos permanecen ocultos
```

---

## Guardar como Borrador

### ¿Cuándo usar borradores?

- Inspecciones largas que no puedes completar de una vez
- Necesitas verificar información antes de finalizar
- Quieres revisar con un supervisor antes de completar

### Cómo guardar borrador

1. Completa los campos que puedas
2. Haz clic en **Guardar Borrador**
3. La respuesta se guarda con estado "Borrador"
4. Puedes cerrar y volver después

### Retomar un borrador

1. Ve a la lista de respuestas del formulario
2. Encuentra tu borrador (indicado con etiqueta "Borrador")
3. Haz clic para abrirlo
4. Continúa completando
5. Guarda como borrador nuevamente o finaliza

:::note[Borradores y exportaciones]
Por defecto, los borradores NO se incluyen en exportaciones de datos. Esto evita incluir información incompleta en reportes.
:::

---

## Finalizar Respuesta

### Validación automática

Al hacer clic en **Completar** o **Finalizar**:

1. El sistema verifica todos los campos obligatorios
2. Valida rangos y formatos
3. Si hay errores, muestra qué campos necesitan atención
4. Si todo está correcto, la respuesta se marca como completada

### Mensajes de validación

```
⚠️ Campo "Temperatura" es obligatorio
⚠️ Campo "Cantidad" debe ser mayor a 0
⚠️ Campo "Fecha" no puede ser futura
```

### Después de completar

- La respuesta queda bloqueada (no editable)
- Se registra fecha y hora de completitud
- Se registra quién completó el formulario
- La respuesta aparece en exportaciones

---

## Respuestas Completadas

### Características

- **Inmutables**: No se pueden modificar después de completar
- **Auditables**: Tienen marca de tiempo y usuario
- **Exportables**: Se incluyen en exportaciones por defecto
- **Permanentes**: Forman parte del registro histórico

### Visualizar respuesta completada

1. Abre la respuesta desde la lista
2. Todos los campos son de solo lectura
3. Puedes ver todos los datos y fotos capturadas

### ¿Qué pasa si necesito corregir algo?

Si descubres un error en una respuesta completada:

1. **No puedes editarla directamente**
2. Opciones:
   - Crear una nueva respuesta corregida
   - Documentar la corrección con una nota
   - Contactar administrador para casos excepcionales

---

## Trabajo Offline

### Disponibilidad

El comportamiento offline depende de cómo accedes a Arlo:

| Plataforma | Soporte Offline |
|------------|-----------------|
| App móvil | Sí |
| Navegador web | Limitado |

### Cómo funciona (app móvil)

1. Abre el formulario mientras tienes conexión
2. El formulario se descarga al dispositivo
3. Completa la respuesta sin conexión
4. Guarda como borrador
5. Cuando recuperes conexión, sincroniza

### Sincronización

- Los borradores offline se sincronizan automáticamente
- Verifica la sincronización antes de cerrar la app
- Las fotos pueden tomar más tiempo en sincronizar

---

## Consejos Prácticos

### Antes de empezar

- Lee las instrucciones del formulario
- Verifica que tienes la información necesaria
- Asegúrate de tener buena conexión (o descarga offline)

### Durante el llenado

- Guarda borradores frecuentemente en inspecciones largas
- Toma fotos claras y bien iluminadas
- Usa las descripciones de campo como guía

### Problemas comunes

| Problema | Solución |
|----------|----------|
| No puedo completar | Revisa los campos obligatorios faltantes |
| No carga la foto | Verifica permisos de cámara/galería |
| No captura ubicación | Verifica permisos de GPS |
| Perdí mi borrador | Verifica sincronización, contacta soporte |

---

## Próximos Pasos

1. **[Exportar respuestas](/es/custom-forms/export/)** - Obtén los datos para análisis
2. **[Crear nuevos formularios](/es/custom-forms/create/)** - Diseña formularios adicionales
