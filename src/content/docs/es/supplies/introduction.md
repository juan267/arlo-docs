---
title: Introducción a Insumos
description: Control de inventario para fertilizantes, agroquímicos y materiales agrícolas usando el método WAVCO de costeo promedio ponderado.
---

El módulo de Insumos te permite gestionar el inventario de fertilizantes, agroquímicos, semillas y otros materiales que utiliza tu finca, con trazabilidad completa desde la compra hasta el consumo en campo.

---

## El Problema del Inventario Agrícola

Las fincas manejan decenas de productos diferentes: fertilizantes, fungicidas, insecticidas, herbicidas, materiales de empaque, combustibles. Sin un sistema de control:

- **Desabastecimiento sorpresa**: Te quedas sin un producto crítico en el peor momento
- **Sobreinventario**: Capital atado en productos que caducan antes de usarse
- **Costos desconocidos**: No sabes el costo real de aplicación por hectárea
- **Pérdidas no detectadas**: Diferencias entre inventario teórico y físico

### El enfoque de Arlo

Arlo implementa un sistema de inventario perpetuo con:

1. **Bodegas**: Ubicaciones físicas de almacenamiento
2. **Catálogo de insumos**: Productos con unidades de compra y consumo
3. **Movimientos**: Entradas (compras) y salidas (consumo)
4. **Costeo WAVCO**: Costo promedio ponderado automático

---

## Concepto Clave: WAVCO

**WAVCO** (Weighted Average Cost - Costo Promedio Ponderado) es el método de costeo que usa Arlo para valorar el inventario.

### ¿Cómo funciona?

Cada vez que compras un producto, el sistema recalcula el costo promedio:

```
Ejemplo: Fertilizante NPK

Compra 1: 100 kg a $10/kg = $1,000
  → Costo promedio: $10/kg

Compra 2: 50 kg a $12/kg = $600
  → Inventario total: 150 kg
  → Costo total: $1,600
  → Nuevo costo promedio: $1,600 / 150 = $10.67/kg

Salida: 30 kg para aplicación
  → Costo de salida: 30 × $10.67 = $320
  → Inventario restante: 120 kg a $10.67/kg
```

### ¿Por qué WAVCO?

- **Simple**: No necesitas rastrear lotes individuales
- **Realista**: El costo refleja todas las compras, no solo la primera o última
- **Estándar**: Método aceptado por normas contables internacionales
- **Automático**: Arlo hace el cálculo por ti

---

## Estructura del Módulo

### Configuración

| Componente | Propósito |
|------------|-----------|
| **Bodegas** | Ubicaciones de almacenamiento (bodega central, bodega campo, etc.) |
| **Proveedores** | Empresas que te venden insumos |
| **Catálogo** | Productos con unidades y conversiones |

### Movimientos

| Componente | Propósito |
|------------|-----------|
| **Entradas** | Registrar compras y recibir inventario |
| **Salidas** | Registrar consumo en campo |
| **Reequilibrio** | Ajustes por diferencias de inventario |

---

## Unidades de Compra vs. Consumo

Un concepto importante en Arlo es la distinción entre:

### Unidad de compra
Cómo compras el producto del proveedor.
- Ejemplo: Sacos de 50 kg, galones, tambores de 200 L

### Unidad de consumo
Cómo usas el producto en campo.
- Ejemplo: Kilogramos, litros, gramos

### Factor de conversión

Al crear un insumo, defines la conversión:

```
Insumo: Fertilizante Triple 15
- Unidad de compra: Saco
- Unidad de consumo: Kilogramo
- Factor de conversión: 1 saco = 50 kg

Cuando compras 10 sacos:
- Entrada registrada: 10 sacos × $500 = $5,000
- Inventario en sistema: 500 kg a $10/kg

Cuando usas 25 kg:
- Salida registrada: 25 kg
- Costo de salida: 25 × $10 = $250
```

---

## Flujo de Trabajo Típico

### Configuración inicial (una vez)

```
1. Crear bodegas (Central, Campo Norte, Campo Sur)
2. Registrar proveedores
3. Crear catálogo de insumos con:
   - Nombre y código
   - Unidades de compra y consumo
   - Factor de conversión
   - Categoría (fertilizante, fungicida, etc.)
```

### Operación diaria

```
4. Registrar entradas cuando llegan compras:
   - Proveedor
   - Bodega destino
   - Producto, cantidad, costo

5. Registrar salidas cuando se usan productos:
   - Bodega origen
   - Producto y cantidad
   - Opcional: vincular a labor de campo

6. Revisar inventarios periódicamente
```

### Ajustes periódicos

```
7. Realizar conteo físico
8. Comparar con inventario en sistema
9. Registrar reequilibrio si hay diferencias
```

---

## Vinculación con Labores

Una funcionalidad poderosa es vincular salidas de inventario con labores de campo.

### Ejemplo

```
Labor: Fertilización - Lote Norte
  - Contratista: García
  - Cantidad: 100 árboles

Salida de insumo vinculada:
  - Producto: Fertilizante NPK
  - Cantidad: 50 kg
  - Vinculado a: Labor "Fertilización - Lote Norte"
```

Esto permite:
- Calcular el costo total de la labor (mano de obra + insumos)
- Saber cuánto insumo se usó por árbol/hectárea
- Detectar desviaciones en consumo esperado

---

## Detrás de Escenas

### Cálculo de costo promedio

Cada entrada recalcula el costo promedio:

```
nuevo_costo_promedio = (inventario_actual × costo_actual + cantidad_entrada × costo_entrada)
                       / (inventario_actual + cantidad_entrada)
```

### Validaciones automáticas

- No puedes registrar una salida mayor al inventario disponible
- El sistema alerta cuando el inventario baja de un umbral mínimo (si está configurado)
- Las entradas y salidas no pueden tener fecha futura

### Conversiones automáticas

Cuando registras movimientos, puedes usar cualquier unidad:
- Si compras en sacos, el sistema convierte a la unidad base
- Si usas en kilogramos, la salida se registra correctamente

---

## Reportes Disponibles

| Reporte | Información |
|---------|-------------|
| **Existencias** | Inventario actual por producto y bodega |
| **Kardex** | Historial de movimientos por producto |
| **Valoración** | Valor total del inventario (cantidad × costo promedio) |
| **Consumo por lote** | Insumos utilizados en cada lote |
| **Costo por labor** | Insumos vinculados a labores de campo |

---

## Mejores Prácticas

### Registro oportuno

- Registra entradas el mismo día que llegan los productos
- Registra salidas antes de que el producto salga de bodega
- No dejes movimientos pendientes para "después"

### Conteos físicos

- Realiza conteo físico al menos mensualmente
- Enfócate en productos de alto valor o alto movimiento
- Documenta diferencias y sus posibles causas

### Organización de bodegas

- Usa bodegas que reflejen tu operación real
- No crees demasiadas bodegas (dificulta el seguimiento)
- Considera una bodega "en tránsito" para transferencias

---

## Próximos Pasos

1. **[Configura bodegas](/es/supplies/configuration/)** - Define ubicaciones de almacenamiento
2. **[Registra proveedores](/es/supplies/providers/)** - Tus fuentes de insumos
3. **[Crea el catálogo](/es/supplies/catalog/)** - Productos con unidades y conversiones
4. **[Registra tu primera entrada](/es/supplies/entries/)** - Comienza a controlar inventario
