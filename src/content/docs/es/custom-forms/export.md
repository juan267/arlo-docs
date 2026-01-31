---
title: Exportar Respuestas
description: Cómo exportar los datos de formularios personalizados a Excel para análisis, reportes y documentación.
---

Los datos capturados en formularios personalizados pueden exportarse a Excel (XLSX) para análisis externo, generación de reportes o integración con otros sistemas.

---

## Exportación Básica

### Exportar todas las respuestas

1. Ve a **Formularios Personalizados**
2. Selecciona el formulario
3. Ve a la pestaña **Respuestas**
4. Haz clic en **Exportar** o el ícono de descarga
5. Se genera un archivo XLSX

### Contenido del archivo

El archivo Excel incluye:

| Columna | Descripción |
|---------|-------------|
| ID | Identificador único de la respuesta |
| Estado | Borrador o Completada |
| Fecha de creación | Cuándo se inició la respuesta |
| Fecha de completitud | Cuándo se finalizó (si aplica) |
| Usuario | Quién completó el formulario |
| Campo 1 | Valor de la primera pregunta |
| Campo 2 | Valor de la segunda pregunta |
| ... | ... |
| Campo N | Valor de la última pregunta |

---

## Filtrar antes de Exportar

### Por rango de fechas

1. Usa los filtros de fecha en la lista de respuestas
2. Selecciona fecha inicial y final
3. La lista se filtra
4. Exporta solo las respuestas visibles

```
Ejemplo:
- Fecha inicio: 01/01/2025
- Fecha fin: 31/01/2025
- Exporta solo respuestas de enero 2025
```

### Por estado

- **Solo completadas**: Excluye borradores (comportamiento por defecto)
- **Incluir borradores**: Marca la opción correspondiente

### Por usuario

Si hay múltiples usuarios completando el formulario:

1. Filtra por usuario específico
2. Exporta solo sus respuestas

---

## Formato del Archivo Excel

### Estructura de hojas

**Hoja 1: Respuestas**
Contiene todas las respuestas en formato tabular, una fila por respuesta.

**Hoja 2: Metadatos (si disponible)**
Información sobre el formulario y la exportación:
- Nombre del formulario
- Fecha de exportación
- Filtros aplicados
- Total de registros

### Tipos de datos

| Tipo de campo | Formato en Excel |
|---------------|------------------|
| Texto | Texto plano |
| Número | Número con decimales configurados |
| Selección única | Texto de la opción |
| Selección múltiple | Opciones separadas por coma |
| Fecha | Formato de fecha (YYYY-MM-DD) |
| Hora | Formato de hora (HH:MM) |
| Foto | URL de la imagen |
| Firma | Indicador (Sí/No) |
| Ubicación | Coordenadas (lat, lng) |

---

## Casos de Uso

### Reportes de auditoría

1. Exporta todas las respuestas del período
2. Crea una tabla dinámica en Excel
3. Agrupa por criterio evaluado
4. Calcula porcentajes de cumplimiento

```
Ejemplo de análisis:
- Total de inspecciones: 25
- Cumplimiento de EPP: 92%
- Áreas con hallazgos: 3
```

### Seguimiento histórico

1. Exporta respuestas de varios períodos
2. Combina en un solo archivo
3. Crea gráficos de tendencia
4. Identifica patrones

### Integración con otros sistemas

1. Exporta los datos
2. Importa a tu sistema de gestión
3. Usa las columnas como referencia para mapeo

---

## Manejo de Fotos

### URLs de fotos

Las fotos se exportan como URLs que apuntan a los archivos almacenados.

```
Columna "Foto de evidencia":
https://storage.arloagro.com/forms/abc123/photo1.jpg
```

### Descargar fotos

Las URLs son válidas mientras tengas acceso a la finca. Para descargar:

1. Copia la URL de la celda
2. Pégala en tu navegador
3. La imagen se abre/descarga

### Exportación masiva de fotos

Para obtener todas las fotos de un formulario:

1. Exporta el Excel con URLs
2. Usa las URLs para descarga automatizada
3. O solicita un paquete de fotos al soporte

---

## Automatización de Exportaciones

### Exportaciones programadas

Si necesitas exportaciones regulares (diarias, semanales):

1. Contacta al equipo de soporte
2. Se puede configurar envío automático por correo
3. El archivo se adjunta en la fecha programada

### API (si disponible)

Para integraciones avanzadas:

1. Usa la API de Arlo para extraer datos
2. Programa extracciones desde tu sistema
3. Procesa los datos automáticamente

---

## Buenas Prácticas

### Nombres de archivo

Guarda los archivos con nombres descriptivos:

```
✓ Checklist_Seguridad_2025-01.xlsx
✓ Auditoria_BPA_Enero2025.xlsx
✗ export.xlsx
✗ datos(1).xlsx
```

### Organización

1. Crea carpetas por período o tipo de formulario
2. Mantén un archivo maestro con datos consolidados
3. Documenta los filtros usados en cada exportación

### Seguridad

- Los archivos pueden contener información sensible
- Almacena en ubicaciones seguras
- Elimina archivos que ya no necesites
- No compartas URLs de fotos públicamente

---

## Solución de Problemas

### El archivo no se descarga

1. Verifica tu conexión a internet
2. Intenta con otro navegador
3. Reduce el rango de fechas (archivos muy grandes pueden fallar)

### Faltan respuestas

1. Verifica los filtros aplicados
2. Los borradores no se incluyen por defecto
3. Revisa el rango de fechas

### Fotos no cargan

1. Las URLs son temporales, verifica que no hayan expirado
2. Verifica que tienes acceso a la finca
3. Algunas fotos grandes pueden tardar en cargar

### Caracteres extraños

1. Abre el archivo con codificación UTF-8
2. En Excel: Datos → Desde texto → Selecciona UTF-8

---

## Próximos Pasos

1. **[Crear nuevos formularios](/es/custom-forms/create/)** - Diseña formularios para otros procesos
2. **[Análisis con IA](/es/analysis/ai-analysis/)** - Usa IA para interpretar tus datos
3. **[Reportes ejecutivos](/es/analysis/executive-reports/)** - Genera informes para stakeholders
