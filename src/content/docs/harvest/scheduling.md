---
title: Programación de Cosecha
description: Cómo planificar rendimientos esperados por fecha, lote y grupo de cosecha para comparar con los resultados reales.
---

La **programación de cosecha** te permite definir cuánto esperas cosechar cada día, en qué lotes y con qué grupos. Esta planificación es la base para comparar el desempeño real contra las expectativas.

---

## ¿Qué es un Programa de Cosecha?

Un programa de cosecha es tu **plan ideal** antes de que comience el trabajo. Define:

| Campo | Descripción |
|-------|-------------|
| **Fecha** | Día en que se planea cosechar |
| **Lote** | Dónde se realizará la cosecha |
| **Grupo de Cosecha** | Quién ejecutará el trabajo |
| **Unidad** | Tipo de contenedor (canasta, guacal, etc.) |
| **Cantidad** | Número de unidades esperadas |
| **Peso esperado** | Calculado automáticamente |

### Cálculo de peso esperado

```
peso_esperado = cantidad × capacidad_unidad

Ejemplo:
  Unidad: Canasta (capacidad: 25 kg)
  Cantidad: 40 canastas
  Peso esperado: 40 × 25 = 1,000 kg
```

---

## Crear Programas de Cosecha

### Desde el calendario del ciclo

1. Abre un ciclo de cosecha activo
2. Ve a la sección **Programas de Cosecha**
3. Haz clic en una fecha en el calendario
4. Completa los campos:
   - Lote
   - Grupo de cosecha
   - Unidad de cosecha
   - Cantidad esperada
5. Guarda el programa

### Desde la vista de lista

1. En el ciclo, haz clic en **Agregar Programa**
2. Selecciona fecha, lote, grupo, unidad y cantidad
3. Guarda

:::tip[Programación rápida]
Puedes crear múltiples programas para el mismo día si tienes varios grupos trabajando en diferentes lotes.
:::

---

## Reglas de Programación

### Una combinación única

Para cada combinación de **fecha + lote + grupo**, solo puede existir un programa. Esto evita duplicados y confusión.

```
✓ Permitido:
  - 15 Enero | Lote Norte | Grupo A | 40 canastas
  - 15 Enero | Lote Norte | Grupo B | 35 canastas  (diferente grupo)
  - 15 Enero | Lote Sur   | Grupo A | 30 canastas  (diferente lote)

✗ No permitido:
  - 15 Enero | Lote Norte | Grupo A | 40 canastas
  - 15 Enero | Lote Norte | Grupo A | 20 canastas  (duplicado)
```

### Dentro del rango del ciclo

Los programas solo pueden crearse para fechas dentro del rango del ciclo de cosecha.

```
Ciclo: 1 Enero - 31 Enero

✓ Permitido: Programas del 1 al 31 de Enero
✗ No permitido: Programas del 1 de Febrero
```

---

## Estrategias de Programación

### Por capacidad de grupo

Estima cuánto puede cosechar cada grupo por día y programa en consecuencia.

```
Grupo A: 5 personas × 8 canastas/persona/día = 40 canastas/día
Grupo B: 4 personas × 8 canastas/persona/día = 32 canastas/día
```

### Por rotación de lotes

Programa grupos para rotar entre lotes y asegurar cobertura uniforme.

```
Semana 1:
  Lunes-Miércoles: Grupo A en Lote Norte, Grupo B en Lote Sur
  Jueves-Viernes: Grupos intercambian lotes

Semana 2:
  Repetir patrón
```

### Por madurez del cultivo

Prioriza lotes donde el cultivo está listo para cosecha.

```
Lote Norte: Madurez alta → Programar primero
Lote Centro: Madurez media → Programar segunda semana
Lote Sur: Madurez baja → Programar tercera semana
```

---

## Vista del Calendario

La sección de Programas muestra un calendario interactivo donde:

- **Celdas con número**: Indican cantidad programada
- **Código de colores**: Refleja el estado de cumplimiento
- **Clic en celda**: Edita o crea programa

### Colores de estado

| Color | Significado |
|-------|-------------|
| ⚪ Gris | Solo hay programa, sin datos reales aún |
| 🟢 Verde | Real entre 95-105% del plan |
| 🟠 Ámbar | Real menor al 95% del plan |
| 🔵 Azul | Real mayor al 105% del plan |

---

## Vinculación con Cosecha Real

Los programas se comparan automáticamente con las **Cosechas Reales** (agregaciones de entradas de cosecha).

### ¿Cómo se vinculan?

El sistema une programa y real por:
- Misma fecha
- Mismo lote
- Mismo grupo de cosecha

```
Programa: 15 Enero | Lote Norte | Grupo A | 1,000 kg esperados

Entradas de cosecha del 15 Enero, Lote Norte, Grupo A:
  - Entrada 1: 350 kg netos
  - Entrada 2: 380 kg netos
  - Entrada 3: 290 kg netos

Cosecha Real (agregada): 1,020 kg

Desempeño: 1,020 / 1,000 = 102% → EN META (verde)
```

---

## Modificar y Eliminar Programas

### Editar un programa

1. Haz clic en la celda del calendario con el programa
2. Modifica los valores necesarios
3. Guarda los cambios

### Eliminar un programa

1. Abre el programa
2. Haz clic en **Eliminar**
3. Confirma la acción

:::caution[Impacto en comparaciones]
Si eliminas un programa que ya tiene cosecha real asociada, la cosecha real se mostrará como "sin plan" (gris) en lugar de compararse con expectativas.
:::

---

## Exportar Programas

### PDF del programa de cosecha

1. En la sección de Programas, haz clic en el ícono de impresora
2. Se genera un PDF con:
   - Resumen por fecha
   - Detalle por lote y grupo
   - Totales esperados

**Uso típico**: Imprimir y entregar a supervisores de campo para que conozcan las metas del día.

### Excel para análisis

Exporta los datos del ciclo completo para análisis externo o reportes personalizados.

---

## Ajustes Durante el Ciclo

Es normal necesitar ajustar programas durante la ejecución:

### Razones comunes para ajustar

- **Clima adverso**: Lluvia impide cosecha programada
- **Madurez diferente**: El lote no está tan listo como se esperaba
- **Personal ausente**: Un grupo tiene menos capacidad
- **Rendimiento real**: La experiencia de días anteriores sugiere ajuste

### Mejores prácticas para ajustes

1. Ajusta lo antes posible cuando detectes la necesidad
2. Documenta la razón del cambio (usa notas)
3. Considera mover la carga a otro día en lugar de eliminar
4. Comunica cambios al equipo de campo

---

## Métricas de Programación

### Cobertura de programación

```
cobertura = días con programa / días del ciclo × 100
```

Una cobertura alta indica que tienes un plan para la mayoría de días.

### Precisión de estimación

```
precisión = promedio(real / programa × 100)
```

Si tu precisión histórica es 85%, considera ajustar tus estimaciones al alza.

### Distribución de carga

Verifica que el trabajo esté distribuido razonablemente entre días y grupos.

---

## Próximos Pasos

Con los programas creados:

1. **[Registra entradas de cosecha](/harvest/entries/)** - Captura los pesos reales
2. **[Monitorea el dashboard](/harvest/cycles/)** - Ve el desempeño en tiempo real
3. **[Genera reportes](/harvest/guide/)** - Analiza resultados del ciclo
