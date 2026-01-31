---
title: Exportaciones
description: Genera reportes en Excel, PDF y configura envíos automáticos por correo para compartir datos con tu equipo y stakeholders.
---

Arlo te permite exportar datos en múltiples formatos para análisis externo, reportes a stakeholders, integración con otros sistemas o simplemente para respaldos.

---

## Formatos de Exportación

### Excel (.xlsx)

El formato más versátil para análisis.

**Características:**
- Datos estructurados en tablas
- Múltiples hojas por sección
- Fórmulas y formato preservados
- Ideal para análisis en Excel/Google Sheets

**Disponible en:**
- Todos los módulos
- Reportes analíticos
- Listas y catálogos

### PDF

Documentos profesionales listos para imprimir o compartir.

**Características:**
- Formato fijo, no editable
- Incluye logo de la finca
- Diseño profesional
- Ideal para stakeholders externos

**Disponible en:**
- Reportes ejecutivos
- Órdenes de servicio (labores)
- Programas de cosecha
- Remisiones

### CSV

Para integraciones y datos crudos.

**Características:**
- Formato universal
- Sin formato visual
- Fácil de procesar programáticamente
- Ideal para importar a otros sistemas

---

## Exportaciones por Módulo

### Sanidad

| Exportación | Formato | Contenido |
|-------------|---------|-----------|
| Resultados de ruta | Excel, PDF | Datos capturados, fotos, resumen |
| Informes analíticos | Excel | Tendencias, promedios, matrices |
| Mapa de sanidad | PDF | Mapa con marcadores de hallazgos |
| Historial de alertas | Excel | Alertas disparadas y acciones |

### Labores

| Exportación | Formato | Contenido |
|-------------|---------|-----------|
| Resumen de ciclo | Excel | Todas las labores, logs, costos |
| Órdenes de servicio | PDF (ZIP) | Un PDF por contratista |
| Reporte de pagos | Excel | Detalle para contabilidad |
| Historial de ciclos | Excel | Comparativo de ciclos |

### Insumos

| Exportación | Formato | Contenido |
|-------------|---------|-----------|
| Inventario actual | Excel | Existencias por bodega |
| Kardex | Excel | Historial de movimientos |
| Valoración | Excel | Inventario × costo promedio |
| Consumo por período | Excel | Salidas agrupadas |

### Cosecha

| Exportación | Formato | Contenido |
|-------------|---------|-----------|
| Programa de cosecha | PDF | Plan para supervisores |
| Resultados de ciclo | Excel | Planeado vs. real |
| Entradas detalle | Excel | Cada entrada de báscula |
| Rendimiento por lote | Excel | Análisis de productividad |

### Remisiones

| Exportación | Formato | Contenido |
|-------------|---------|-----------|
| Remisión individual | PDF | Documento de envío |
| Listado de remisiones | Excel | Todas las remisiones |
| Resumen por cliente | Excel | Totales por cliente |

---

## Cómo Exportar

### Exportación manual

```
1. Ve al módulo o reporte deseado
2. Aplica filtros si es necesario
3. Busca el botón de exportación (⬇️ o "Exportar")
4. Selecciona el formato
5. El archivo se descarga
```

### Opciones de filtrado

Antes de exportar, puedes filtrar:

- **Por fecha**: Rango específico
- **Por lote**: Uno o varios lotes
- **Por estado**: Completados, pendientes, etc.
- **Por categoría**: Según el módulo

Los filtros aplicados se reflejan en la exportación.

---

## Envíos Automáticos por Correo

### Configurar envío programado

```
1. Ve a Configuración → Envíos Programados
2. Haz clic en "Nuevo envío"
3. Configura:

   Reporte: [Seleccionar reporte]
   Formato: PDF / Excel
   Frecuencia: Diario / Semanal / Mensual
   Día: (para semanal/mensual)
   Hora: (hora de envío)
   Destinatarios: correo1@email.com, correo2@email.com
   Asunto: "Reporte semanal - Finca San José"
   Mensaje: (opcional)

4. Guardar
```

### Frecuencias disponibles

| Frecuencia | Configuración |
|------------|---------------|
| Diario | Hora de envío |
| Semanal | Día de la semana + hora |
| Mensual | Día del mes + hora |
| Personalizado | Expresión cron (avanzado) |

### Ejemplos de configuración

```
Reporte mensual para propietario:
  Reporte: Estado Mensual
  Frecuencia: Mensual
  Día: 5
  Hora: 8:00 AM
  Destinatarios: propietario@finca.com

Resumen semanal para administrador:
  Reporte: Resumen de Sanidad
  Frecuencia: Semanal
  Día: Lunes
  Hora: 7:00 AM
  Destinatarios: admin@finca.com

Alertas diarias:
  Reporte: Alertas del día
  Frecuencia: Diario
  Hora: 6:00 PM
  Destinatarios: equipo@finca.com
```

---

## Exportación Masiva

### Exportar todo el módulo

Para respaldos o migraciones:

```
1. Ve al módulo
2. Busca "Exportar todo" o "Exportación masiva"
3. Selecciona el rango de fechas (o "Todo")
4. El sistema genera el archivo (puede tardar)
5. Recibes link de descarga por correo
```

### Exportación programada (backups)

```
Configurar backup automático:
  Frecuencia: Semanal
  Día: Domingo
  Módulos: Todos
  Formato: Excel
  Destino: Correo o almacenamiento en nube
```

---

## Integraciones

### Webhook de exportación

Para sistemas que consumen datos automáticamente:

```
Configurar webhook:
  URL: https://tu-sistema.com/api/import
  Formato: JSON
  Trigger: Al completar ruta / Al cerrar ciclo
  Autenticación: API Key
```

### API de exportación

Para desarrolladores:

```
GET /api/v1/farms/{id}/exports/sanitation
  ?from=2025-01-01
  &to=2025-01-31
  &format=json

Respuesta: Datos estructurados en JSON
```

---

## Personalización de Reportes PDF

### Logo y branding

```
Configuración → Finca → Branding
  Logo: [Subir archivo]
  Nombre comercial: "Finca San José"
  Dirección: (para documentos formales)
  Teléfono: (para documentos formales)
```

### Contenido incluido

Para cada tipo de PDF puedes configurar:

```
Reporte mensual:
  ☑ Logo de finca
  ☑ Resumen ejecutivo
  ☑ Gráficos de tendencia
  ☐ Detalle por lote (demasiado largo)
  ☑ Pie de página con fecha/hora
```

---

## Solución de Problemas

### El archivo no se descarga

1. Verifica conexión a internet
2. Desactiva bloqueador de popups
3. Intenta otro navegador
4. Si el archivo es grande, espera el correo

### Archivo corrupto o vacío

1. Verifica que hay datos para el filtro seleccionado
2. Intenta con un rango de fechas más pequeño
3. Reporta el problema si persiste

### Caracteres extraños en Excel

1. Abre Excel → Datos → Desde texto
2. Selecciona codificación UTF-8
3. O abre en Google Sheets (detecta automáticamente)

### No llega el correo programado

1. Verifica carpeta de spam
2. Confirma que el correo es correcto
3. Revisa el historial de envíos en Configuración
4. Verifica que el reporte tenga datos para el período

---

## Mejores Prácticas

### Nombrar archivos

Guarda con nombres descriptivos:

```
✓ Sanidad_FincaSanJose_2025-01.xlsx
✓ CostosManoObra_Enero2025.xlsx
✗ export.xlsx
✗ reporte(1).xlsx
```

### Organización

```
/Reportes
  /2025
    /01-Enero
      Sanidad_semanal_S1.xlsx
      Sanidad_semanal_S2.xlsx
      Costos_mensual.xlsx
    /02-Febrero
      ...
```

### Respaldos

- Exporta datos críticos mensualmente
- Guarda en ubicación diferente al sistema
- Verifica que los archivos se abran correctamente

---

## Próximos Pasos

1. **[Cargas masivas](/es/advanced/bulk-uploads/)** - Importar datos a Arlo
2. **[Reportes ejecutivos](/es/analysis/executive-reports/)** - Crear reportes personalizados
3. **[Sistema de alertas](/es/alerts/overview/)** - Automatizar notificaciones
