---
title: Configuración de Finca
description: Aprende a crear y configurar tu finca en Arlo Agro, incluyendo la carga de lotes georreferenciados y los parámetros operativos.
---

La configuración inicial de tu finca es el fundamento de todo lo que harás en Arlo. Una buena configuración te ahorrará tiempo y evitará problemas más adelante.

---

## 1. Crear tu Finca

Al iniciar sesión por primera vez, se te pedirá crear una finca. Si ya tienes acceso a una finca existente, puedes crear fincas adicionales desde el selector de fincas en la parte superior.

### Información Básica

- **Nombre de la Finca**: El nombre que identificará tu finca en toda la plataforma
- **País**: Configura la zona horaria y formato de moneda
- **Moneda**: Para costos de mano de obra, insumos y reportes financieros

---

## 2. Configurar tus Lotes

Los **lotes** son las unidades geográficas fundamentales de tu finca. Todo en Arlo se organiza por lote: inspecciones de sanidad, labores de campo, cosechas e inventario.

### Cargar Lotes desde GeoJSON

La forma más precisa de configurar tus lotes es cargando un archivo GeoJSON con los polígonos de cada lote.

**Requisitos del archivo:**
- Formato: GeoJSON (`.geojson` o `.json`)
- Sistema de coordenadas: **WGS 84 (EPSG:4326)**
- Cada Feature debe tener una propiedad `name` para el nombre del lote

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Lote Norte A"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[...], [...], [...]]]
      }
    }
  ]
}
```

:::caution[Importante]
Asegúrate de que tu archivo use el sistema de coordenadas WGS 84 (EPSG:4326). Si tus datos están en otro sistema (como UTM), necesitarás convertirlos antes de cargarlos.
:::

### Crear Lotes Manualmente

Si no tienes un archivo GeoJSON, puedes crear lotes manualmente:

1. Ve a **Finca → Lotes**
2. Haz clic en **Agregar Lote**
3. Ingresa el nombre y área del lote
4. Opcionalmente, dibuja el polígono en el mapa

### Información del Lote

Para cada lote puedes registrar:
- **Nombre**: Identificador único del lote
- **Código**: Código corto para uso interno
- **Área**: Hectáreas o la unidad de tu preferencia
- **Cultivo**: Tipo de cultivo plantado
- **Variedad**: Variedad específica
- **Año de siembra**: Para calcular la edad del cultivo
- **Número de plantas**: Total de árboles o plantas

---

## 3. Configuración General de la Finca

Navega a **Finca → Configuración** para ajustar los parámetros operativos.

### Configuración de Labores

| Parámetro | Descripción | Valor por Defecto |
|-----------|-------------|-------------------|
| **Duración de Ciclos de Campo** | Número de días para cada ciclo de trabajo | 15 días |

La **duración de ciclos de campo** determina automáticamente la fecha de fin cuando creas un nuevo ciclo. Por ejemplo, si configuras 15 días y creas un ciclo que inicia el 1 de enero, la fecha de fin será automáticamente el 15 de enero.

:::tip[Ritmos comunes]
- **15 días**: Ideal para nóminas quincenales o pagos a contratistas cada dos semanas
- **30 días**: Para planificación operativa mensual
- **7 días**: Para operaciones que requieren seguimiento semanal intensivo
:::

### Configuración de Cosecha

- **Unidades de peso**: Kilogramos, libras, toneladas
- **Tolerancia de rendimiento**: Porcentaje para determinar si la cosecha está "en meta"

### Configuración de Inventario

- **Método de costeo**: WAVCO (Costo Promedio Ponderado)
- **Bodegas**: Define las ubicaciones de almacenamiento

---

## 4. Configuraciones de Módulos

Cada módulo tiene su propia configuración inicial:

### Sanidad
- Registrar monitores (inspectores de campo)
- Crear formularios de inspección
- Definir alertas y umbrales

### Labores
- Registrar contratistas
- Crear catálogo de labores de campo
- Definir precios por defecto

### Insumos
- Configurar bodegas
- Registrar proveedores
- Crear catálogo de insumos

### Cosecha
- Registrar vehículos con peso vacío
- Definir unidades de cosecha (canastas, guacales)
- Crear grupos de cosecha

---

## 5. Verificación de Configuración

Antes de comenzar a operar, verifica que tengas:

- [ ] Al menos un lote configurado con área
- [ ] Zona horaria correcta para tu ubicación
- [ ] Moneda configurada para reportes financieros
- [ ] Duración de ciclos de campo definida según tu ritmo de pago

---

## Próximos Pasos

Con tu finca configurada, el siguiente paso es agregar a tu equipo:

**[Usuarios y Roles →](/es/getting-started/users-roles/)**

:::note[¿Necesitas ayuda?]
Si tienes archivos GeoJSON de otras plataformas o necesitas convertir formatos, el equipo de soporte puede asistirte con la migración de datos.
:::
