---
title: Introducción a Cosecha
description: Planificación y seguimiento de la cosecha con ciclos cortos, programación de rendimientos y comparación de resultados reales.
---

El módulo de Cosecha te permite planificar rendimientos esperados, registrar pesos reales de báscula y analizar el desempeño de tu operación de cosecha por lote, grupo y período.

---

## El Desafío de la Cosecha

La cosecha es el momento crítico donde se materializa el valor de todo el trabajo del año. Sin embargo, muchas fincas enfrentan:

- **Incertidumbre en rendimientos**: No saben cuánto esperar hasta que terminan
- **Variabilidad oculta**: Algunos lotes rinden menos, pero no saben cuáles
- **Problemas de equipos**: Grupos de cosecha con diferente productividad
- **Datos dispersos**: Tickets de báscula en papel que nunca se analizan

### El enfoque de ciclos

Arlo organiza la cosecha en **Ciclos de Cosecha** - períodos definidos (1-4 semanas típicamente) donde:

1. **Programas** rendimientos esperados por lote y grupo
2. **Registras** pesos reales de báscula día a día
3. **Comparas** lo planeado vs. lo real con códigos de color
4. **Ajustas** expectativas y recursos para el siguiente ciclo

---

## Concepto Clave: Planeado vs. Real

El corazón del módulo es la comparación entre lo que esperabas cosechar y lo que realmente cosechaste.

### Programa de Cosecha (Planeado)

Es tu **plan ideal** antes de que comience el trabajo:
- Fecha de cosecha
- Lote a cosechar
- Grupo de cosecha asignado
- Cantidad y unidades esperadas
- Peso esperado (calculado automáticamente)

### Cosecha Real

Es la **realidad** capturada en báscula:
- Pesos registrados en entradas de cosecha
- Agregados automáticamente por fecha/lote/grupo
- Peso neto calculado (peso bruto - peso vehículo)

### Indicadores de Desempeño

| Color | Rango | Interpretación |
|-------|-------|----------------|
| 🟢 Verde | 95% - 105% | En meta - rendimiento esperado |
| 🟠 Ámbar | < 95% | Bajo meta - investigar causas |
| 🔵 Azul | > 105% | Sobre meta - rendimiento excepcional |
| ⚪ Gris | Sin datos | Sin plan o sin entradas |

---

## Estructura del Módulo

### Configuración

| Componente | Propósito |
|------------|-----------|
| **Vehículos** | Registro de camiones/vehículos con peso vacío |
| **Unidades de Cosecha** | Contenedores (canastas, guacales) con capacidades |
| **Grupos de Cosecha** | Equipos/cuadrillas que ejecutan la cosecha |

### Operación

| Componente | Propósito |
|------------|-----------|
| **Ciclos de Cosecha** | Períodos de planificación con fechas definidas |
| **Programación** | Planes de rendimiento por fecha/lote/grupo |
| **Entradas de Cosecha** | Registro de pesos de báscula |

### Análisis

| Componente | Propósito |
|------------|-----------|
| **Dashboard del Ciclo** | Vista de desempeño en tiempo real |
| **Reportes** | Exportaciones y análisis detallados |

---

## Ciclos de Cosecha: El Sprint de la Cosecha

### ¿Por qué ciclos cortos?

En lugar de planificar toda la temporada de una vez, los ciclos de 1-4 semanas permiten:

- **Ajuste continuo**: Corrige estimaciones basándote en resultados reales
- **Responsabilidad clara**: Metas específicas para períodos acotados
- **Detección temprana**: Identifica problemas antes de que se acumulen
- **Gestión de recursos**: Redistribuye grupos según desempeño

### Restricciones de los ciclos

- **Sin superposición**: No puedes tener dos ciclos con fechas que se solapen
- **Protección de datos**: No puedes eliminar un ciclo que ya tiene programas
- **Código único**: Cada ciclo tiene un código de referencia único

---

## Flujo de Trabajo Típico

### Planificación (Inicio del Ciclo)

```
1. Crear ciclo con código de referencia (ej. "H-2025-01")
2. Definir fecha de inicio y fin
3. Programar cosechas esperadas:
   - Seleccionar fecha
   - Seleccionar lote
   - Seleccionar grupo
   - Definir cantidad y unidad
```

### Ejecución (Durante el Ciclo)

```
4. Registrar entradas de cosecha:
   - Seleccionar vehículo
   - Registrar peso de báscula
   - Sistema calcula peso neto automáticamente
5. Monitorear dashboard de desempeño
6. Identificar lotes/grupos bajo meta
```

### Cierre (Fin del Ciclo)

```
7. Revisar resumen de rendimiento
8. Exportar reportes para stakeholders
9. Documentar lecciones aprendidas
10. Crear siguiente ciclo con estimaciones ajustadas
```

---

## Detrás de Escenas

### Cálculo de peso neto

Cuando registras una entrada de cosecha:

```
peso_neto = peso_bascula - peso_vacio_vehiculo
```

El peso vacío del vehículo se obtiene:
1. Del registro del vehículo (si está configurado)
2. De la última entrada del mismo día para ese vehículo (memoria de peso)

:::tip[Memoria de peso]
Si un vehículo ya pesó vacío ese día, el sistema recuerda el peso y lo aplica automáticamente a las siguientes entradas del mismo vehículo.
:::

### Agregación de cosecha real

El sistema mantiene un registro único (`HarvestActual`) por cada combinación de:
- Fecha
- Lote
- Grupo de cosecha

Cuando agregas o modificas entradas, el sistema automáticamente recalcula los totales para esa combinación.

### Cálculo de desempeño

```
porcentaje_desempeño = (peso_real / peso_planeado) × 100

Si 95% ≤ porcentaje ≤ 105% → En meta (verde)
Si porcentaje < 95% → Bajo meta (ámbar)
Si porcentaje > 105% → Sobre meta (azul)
```

---

## Mejores Prácticas

### Programación realista

- Basa las estimaciones en datos históricos cuando estén disponibles
- Considera factores estacionales y estado del cultivo
- Ajusta por condiciones climáticas esperadas

### Registro oportuno

- Registra pesos el mismo día de la cosecha
- Verifica que el vehículo tenga peso vacío configurado
- Revisa el dashboard diariamente durante la cosecha activa

### Análisis de desviaciones

Cuando un lote está consistentemente bajo meta:
1. Verifica el estado sanitario del lote
2. Evalúa si el grupo de cosecha necesita apoyo
3. Revisa si la estimación original fue correcta
4. Documenta hallazgos para futuros ciclos

---

## Próximos Pasos

1. **[Registra vehículos](/es/harvest/vehicles/)** - Con pesos vacíos para cálculo automático
2. **[Define unidades de cosecha](/es/harvest/units/)** - Contenedores y sus capacidades
3. **[Crea grupos de cosecha](/es/harvest/groups/)** - Equipos que ejecutarán el trabajo
4. **[Configura tu primer ciclo](/es/harvest/cycles/)** - Comienza a planificar
