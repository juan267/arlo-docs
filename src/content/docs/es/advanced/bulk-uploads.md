---
title: Cargas Masivas
description: Cómo importar datos en lote a Arlo usando archivos CSV y Excel para configuración inicial o migraciones.
---

Las **cargas masivas** te permiten importar grandes cantidades de datos a Arlo de una sola vez, en lugar de registrar cada item manualmente. Es especialmente útil para configuración inicial o migración desde otros sistemas.

---

## ¿Cuándo Usar Cargas Masivas?

### Casos de uso típicos

| Escenario | Ejemplo |
|-----------|---------|
| **Configuración inicial** | Cargar 50 lotes con información detallada |
| **Migración** | Importar catálogo de 200 insumos desde sistema anterior |
| **Actualización masiva** | Actualizar precios de todas las labores |
| **Carga histórica** | Importar datos de cosecha de meses anteriores |

### ¿Cuándo NO usar?

- Para pocos registros (< 10): Más rápido manual
- Datos que requieren validación uno a uno
- Cuando no tienes un archivo estructurado

---

## Datos que Pueden Cargarse Masivamente

| Módulo | Datos importables |
|--------|-------------------|
| **Finca** | Lotes con coordenadas GeoJSON |
| **Sanidad** | Monitores |
| **Labores** | Contratistas, Labores de campo, Labores de ciclo |
| **Insumos** | Proveedores, Catálogo de insumos, Entradas de inventario |
| **Cosecha** | Vehículos, Unidades, Grupos, Entradas históricas |

---

## Formatos Soportados

### Excel (.xlsx)

Formato recomendado para la mayoría de usuarios.

```
✓ Fácil de editar en Excel/Google Sheets
✓ Soporta caracteres especiales
✓ Puede tener múltiples hojas
```

### CSV (.csv)

Para integraciones automatizadas o archivos muy grandes.

```
✓ Formato universal
✓ Archivos más pequeños
✓ Fácil de generar desde otros sistemas

⚠️ Usar codificación UTF-8 para caracteres especiales
```

### GeoJSON (.geojson)

Exclusivo para importación de lotes con geometría.

```
✓ Incluye polígonos de cada lote
✓ Estándar geoespacial
✓ Debe ser WGS 84 (EPSG:4326)
```

---

## Proceso General

### 1. Descargar plantilla

```
1. Ve al módulo correspondiente
2. Busca opción "Importar" o "Carga masiva"
3. Haz clic en "Descargar plantilla"
4. Se descarga archivo con columnas correctas
```

### 2. Llenar la plantilla

```
1. Abre en Excel o Google Sheets
2. Revisa las instrucciones (hoja "Instrucciones")
3. Llena los datos siguiendo el formato
4. No modifiques los encabezados
5. Guarda en formato original (.xlsx o .csv)
```

### 3. Validar antes de cargar

```
Verificaciones manuales:
  □ Todas las columnas obligatorias tienen datos
  □ Formatos correctos (fechas, números)
  □ No hay filas vacías intermedias
  □ Códigos únicos no duplicados
```

### 4. Cargar el archivo

```
1. Ve a "Importar" en el módulo
2. Selecciona tu archivo
3. Haz clic en "Validar"
4. Revisa el resumen de validación
5. Si hay errores, corrige y reintenta
6. Si todo está bien, haz clic en "Importar"
```

### 5. Verificar resultados

```
1. Revisa el resumen de importación
2. Verifica algunos registros manualmente
3. Si hay problemas, usa el reporte de errores
```

---

## Plantillas por Módulo

### Lotes (GeoJSON)

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Lote Norte",
        "code": "LN-001",
        "area_ha": 25.5,
        "crop": "Naranja",
        "variety": "Valencia",
        "planting_year": 2018,
        "tree_count": 2500
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[lng, lat], [lng, lat], ...]]
      }
    }
  ]
}
```

### Contratistas (Excel/CSV)

| nombre | codigo | documento | telefono | email | direccion |
|--------|--------|-----------|----------|-------|-----------|
| Juan García | C001 | 12345678 | 555-1234 | juan@email.com | Calle 1 |
| María López | C002 | 87654321 | 555-5678 | maria@email.com | Calle 2 |

### Labores de Campo (Excel/CSV)

| nombre | codigo | unidad | precio_defecto | descripcion |
|--------|--------|--------|----------------|-------------|
| Poda de formación | POD-001 | árbol | 2.50 | Poda para dar forma |
| Fertilización | FER-001 | árbol | 1.00 | Aplicación manual |
| Cosecha | COS-001 | kg | 0.15 | Recolección manual |

### Catálogo de Insumos (Excel/CSV)

| nombre | codigo | categoria | unidad_compra | unidad_consumo | factor_conversion | cantidad_minima |
|--------|--------|-----------|---------------|----------------|-------------------|-----------------|
| Fertilizante NPK | FER-NPK | Fertilizante | Saco 50kg | kg | 50 | 100 |
| Fungicida Cobre | FUN-CU | Fungicida | Litro | ml | 1000 | 20 |

---

## Validaciones Comunes

### Errores frecuentes

| Error | Causa | Solución |
|-------|-------|----------|
| "Campo obligatorio vacío" | Falta dato requerido | Llenar la celda |
| "Formato de fecha inválido" | Fecha mal formateada | Usar YYYY-MM-DD |
| "Código duplicado" | Mismo código en 2 filas | Hacer códigos únicos |
| "Referencia no encontrada" | ID de lote/contratista inexistente | Verificar IDs |
| "Número inválido" | Texto donde debería ser número | Revisar formato |

### Reglas de formato

```
Fechas: YYYY-MM-DD (2025-01-31)
Números: Punto decimal (25.5, no 25,5)
Booleanos: true/false o 1/0
Textos: Sin comillas extra
Códigos: Sin espacios, preferir guiones
```

---

## Importación de Lotes (GeoJSON)

### Requisitos del archivo

```
Sistema de coordenadas: WGS 84 (EPSG:4326)
Geometría: Polygon o MultiPolygon
Propiedades requeridas: name
Propiedades opcionales: code, area_ha, crop, variety, etc.
```

### Preparar desde QGIS

1. Abre tu capa de lotes en QGIS
2. Verifica que esté en WGS 84
3. Exportar → GeoJSON
4. Selecciona los campos a incluir
5. Guarda el archivo

### Preparar desde Google Earth

1. Dibuja los polígonos en Google Earth
2. Exporta como KML
3. Convierte KML a GeoJSON (usa herramienta online)
4. Agrega propiedades manualmente o en QGIS

---

## Importación Incremental

### Agregar vs. Reemplazar

Al importar, puedes elegir:

| Modo | Comportamiento |
|------|----------------|
| **Agregar** | Solo crea registros nuevos, ignora existentes |
| **Actualizar** | Actualiza registros existentes si el código coincide |
| **Reemplazar** | Elimina existentes y carga solo los del archivo |

:::caution[Cuidado con "Reemplazar"]
El modo reemplazar elimina datos existentes. Úsalo solo cuando estés seguro de que el archivo tiene todos los datos necesarios.
:::

### Identificación de registros

Los registros se identifican típicamente por **código**. Si importas un registro con código existente:

- **Modo Agregar**: Se ignora (no se duplica)
- **Modo Actualizar**: Se actualizan los campos

---

## Reporte de Errores

### Durante validación

Antes de importar, verás un resumen:

```
📋 VALIDACIÓN DE ARCHIVO

Registros totales: 150
  ✓ Válidos: 147
  ✗ Con errores: 3

Errores encontrados:
  Fila 45: Campo "nombre" está vacío
  Fila 78: Código "C001" ya existe
  Fila 123: Fecha "31/01/2025" formato inválido

[Descargar reporte de errores]
```

### Después de importar

```
📋 RESULTADO DE IMPORTACIÓN

Registros procesados: 147
  ✓ Creados: 145
  ↻ Actualizados: 2
  ✗ Fallidos: 0

[Ver registros importados]
```

---

## Mejores Prácticas

### Antes de importar

1. **Haz respaldo** de datos existentes (exporta primero)
2. **Prueba con pocos registros** antes de la carga completa
3. **Valida el archivo** con la herramienta de Arlo
4. **Revisa el resumen** antes de confirmar

### Archivos grandes

1. Divide en lotes de 500-1000 registros
2. Importa un lote, verifica, continúa
3. Evita importar en horas pico de uso

### Después de importar

1. Verifica registros aleatorios manualmente
2. Prueba que las referencias funcionen
3. Documenta la importación realizada

---

## Próximos Pasos

1. **[Exportaciones](/es/advanced/exports/)** - Extraer datos de Arlo
2. **[Configuración de finca](/es/getting-started/farm-setup/)** - Configuración inicial
3. **[Catálogo de insumos](/es/supplies/catalog/)** - Después de importar
