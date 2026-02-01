---
title: Introducción a Formularios Personalizados
description: Captura cualquier dato adicional que tu finca necesite con formularios flexibles para auditorías, checklists de calidad e inspecciones especiales.
---

Los **Formularios Personalizados** te permiten crear formularios para capturar datos que no encajan en los módulos estándar de Arlo. Son ideales para auditorías, checklists de calidad, inspecciones especiales y cualquier proceso que requiera documentación estructurada.

---

## ¿Cuándo Usar Formularios Personalizados?

### Casos de uso típicos

| Caso | Ejemplo |
|------|---------|
| **Auditorías internas** | Checklist de buenas prácticas agrícolas |
| **Certificaciones** | Inspección para certificación orgánica o GlobalGAP |
| **Seguridad** | Revisión de EPP y condiciones de trabajo |
| **Calidad** | Evaluación de fruta en empacadora |
| **Mantenimiento** | Checklist de revisión de equipos y maquinaria |
| **Inventario especial** | Conteo de activos no incluidos en Insumos |

### ¿Formularios Personalizados o Sanidad?

| Característica | Sanidad | Formularios Personalizados |
|----------------|---------|---------------------------|
| Vinculado a rutas y lotes | ✓ | ✗ |
| GPS y seguimiento | ✓ | ✗ |
| Alertas automáticas | ✓ | ✗ |
| Análisis espacial | ✓ | ✗ |
| Uso general (cualquier tema) | ✗ | ✓ |
| Sin necesidad de monitor | ✗ | ✓ |
| Respuestas independientes | ✗ | ✓ |

**Regla simple**: Si es monitoreo de plagas/enfermedades en campo, usa Sanidad. Para todo lo demás, usa Formularios Personalizados.

---

## Estructura de un Formulario

Un formulario personalizado tiene:

### Metadatos

- **Nombre**: Identificador del formulario
- **Descripción**: Explicación de su propósito
- **Estado**: Activo o inactivo

### Campos

Los campos son las preguntas o datos a capturar. Cada campo tiene:

| Atributo | Descripción |
|----------|-------------|
| **Etiqueta** | Pregunta o nombre del campo |
| **Tipo** | Texto, número, selección, fecha, foto, etc. |
| **Obligatorio** | Si debe completarse o es opcional |
| **Opciones** | Para campos de selección, las opciones disponibles |

### Dependencias (condicionales)

Puedes configurar campos que solo aparecen si otro campo tiene cierto valor:

```
Campo: ¿Encontró anomalías?
  - Opción: Sí → Muestra campo "Describa la anomalía"
  - Opción: No → Oculta el campo de descripción
```

---

## Tipos de Campos Disponibles

| Tipo | Uso | Ejemplo |
|------|-----|---------|
| **Texto corto** | Respuestas breves | Nombre del inspector |
| **Texto largo** | Descripciones | Observaciones detalladas |
| **Número** | Cantidades | Temperatura, conteos |
| **Selección única** | Una opción | Estado: Bueno/Regular/Malo |
| **Selección múltiple** | Varias opciones | Problemas detectados |
| **Fecha** | Fechas | Fecha de última revisión |
| **Hora** | Tiempos | Hora de inicio |
| **Foto** | Imágenes | Evidencia fotográfica |
| **Firma** | Firmas digitales | Aprobación del responsable |
| **Ubicación** | Coordenadas GPS | Punto de inspección |

---

## Flujo de Trabajo

### Crear formulario (una vez)

```
1. Diseñar estructura del formulario
2. Agregar campos necesarios
3. Configurar campos obligatorios
4. Establecer dependencias si aplica
5. Activar el formulario
```

### Usar formulario (cada vez que se necesite)

```
1. Seleccionar el formulario
2. Crear nueva respuesta
3. Completar los campos
4. Guardar como borrador o finalizar
5. Exportar si es necesario
```

---

## Borradores vs. Respuestas Completadas

### Borrador

- Respuesta guardada pero no finalizada
- Puede editarse y completarse después
- No aparece en exportaciones por defecto
- Útil para inspecciones que toman múltiples sesiones

### Respuesta completada

- Respuesta finalizada y validada
- No puede modificarse (integridad de datos)
- Incluida en exportaciones y reportes
- Marca de tiempo de completitud

:::note[Validación al completar]
Al marcar una respuesta como completada, el sistema valida que todos los campos obligatorios estén llenos. Si falta alguno, no permitirá finalizar.
:::

---

## Ejemplos de Formularios

### Checklist de Buenas Prácticas Agrícolas (BPA)

```
📋 Checklist BPA

1. Área de almacenamiento de agroquímicos
   - [ ] Área cerrada con llave
   - [ ] Piso impermeable
   - [ ] Ventilación adecuada
   - [ ] Señalización visible
   - Foto: [📷]

2. Equipos de protección personal
   - [ ] Guantes disponibles
   - [ ] Mascarillas disponibles
   - [ ] Gafas de seguridad
   - [ ] Overoles de protección
   - Estado general: [Bueno/Regular/Malo]

3. Registros
   - [ ] Bitácora de aplicaciones actualizada
   - [ ] Fichas técnicas disponibles
   - Fecha última actualización: [📅]

4. Observaciones generales: [_______________]

5. Firma del inspector: [✍️]
```

### Revisión de Maquinaria

```
📋 Revisión de Tractor

Equipo: [Selección: Tractor 1, Tractor 2, etc.]
Fecha: [📅]
Horómetro actual: [####]

Revisión visual:
- Nivel de aceite: [OK/Bajo/Crítico]
- Nivel de combustible: [%]
- Estado de llantas: [Bueno/Regular/Malo]
- Luces funcionando: [Sí/No]

Problemas detectados: [_______________]
Requiere mantenimiento: [Sí/No]
  → Si Sí: Tipo de mantenimiento: [___]
           Urgencia: [Alta/Media/Baja]

Foto de tablero: [📷]
Firma del operador: [✍️]
```

---

## Diferencias con Otros Módulos

| Aspecto | Formularios Personalizados | Sanidad | Labores |
|---------|---------------------------|---------|---------|
| Propósito | Cualquier dato | Plagas/enfermedades | Trabajo de campo |
| Vinculación | Independiente | Lotes y rutas | Contratistas y ciclos |
| Seguimiento GPS | Opcional | Automático | No aplica |
| Alertas | No | Sí | No |
| Análisis | Exportación básica | Mapas y tendencias | Costos y progreso |

---

## Próximos Pasos

1. **[Crear un formulario](/custom-forms/create/)** - Diseña tu primer formulario
2. **[Llenar formularios](/custom-forms/fill/)** - Captura respuestas
3. **[Exportar datos](/custom-forms/export/)** - Obtén los datos en Excel
