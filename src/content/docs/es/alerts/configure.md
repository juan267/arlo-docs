---
title: Configurar Alertas
description: Aprende a crear alertas personalizadas con condiciones, agregaciones, umbrales y destinatarios.
---

Esta guía te lleva paso a paso a través del proceso de crear una alerta, desde definir la condición hasta seleccionar los destinatarios.

---

## Crear una Nueva Alerta

### Acceder a la configuración

1. Ve a **Alertas** en el menú lateral
2. Haz clic en **Nueva Alerta** o el botón (+)
3. Se abre el formulario de configuración

### Información básica

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| **Nombre** | Identificador de la alerta | "Ácaros - Nivel crítico" |
| **Descripción** | Qué detecta y por qué importa | "Alerta cuando el conteo de ácaros supera el umbral de acción" |
| **Módulo** | De dónde vienen los datos | Sanidad, Labores, etc. |
| **Prioridad** | Nivel de urgencia | Crítica, Alta, Media, Baja |
| **Activa** | Si la alerta está habilitada | Sí/No |

---

## Definir la Condición

### Seleccionar el campo

Elige qué dato se evaluará:

```
Módulo: Sanidad
Formulario: Monitoreo de Plagas
Campo: Conteo de ácaros
```

### Seleccionar el operador

| Operador | Significado | Uso típico |
|----------|-------------|------------|
| `>` | Mayor que | Supera umbral máximo |
| `>=` | Mayor o igual | Alcanza umbral |
| `<` | Menor que | Cae bajo mínimo |
| `<=` | Menor o igual | Alcanza mínimo |
| `=` | Igual a | Valor específico |
| `!=` | Diferente de | Excluir valor |
| `entre` | En rango | Dentro de límites |
| `contiene` | Incluye texto | Para campos de texto |

### Establecer el valor

El valor contra el que se compara:

```
Campo: Conteo de ácaros
Operador: >
Valor: 5

Interpretación: Alerta cuando ácaros > 5
```

### Condiciones múltiples (AND/OR)

Para alertas complejas, puedes combinar condiciones:

**AND (todas deben cumplirse):**
```
Condición 1: Ácaros > 5
Y
Condición 2: Lote = "Norte"

Resultado: Alerta solo si hay más de 5 ácaros EN el Lote Norte
```

**OR (al menos una debe cumplirse):**
```
Condición 1: Ácaros > 5
O
Condición 2: Trips > 3

Resultado: Alerta si hay muchos ácaros O muchos trips
```

---

## Configurar Agregación

Para evaluar datos de múltiples registros en conjunto.

### ¿Cuándo usar agregación?

- Cuando un solo registro no es significativo
- Para promedios o totales de un período
- Para comparar entre lotes o grupos

### Funciones de agregación

| Función | Descripción | Ejemplo |
|---------|-------------|---------|
| **Suma** | Total de valores | Suma de unidades cosechadas |
| **Promedio** | Media de valores | Promedio de ácaros por árbol |
| **Máximo** | Valor más alto | Máximo nivel de plaga |
| **Mínimo** | Valor más bajo | Mínimo rendimiento |
| **Conteo** | Cantidad de registros | Número de alertas previas |

### Agrupar por

Define la granularidad de la agregación:

```
Función: Promedio
Campo: Conteo de ácaros
Agrupar por: Lote

Resultado: Se calcula el promedio de ácaros para cada lote
           Alerta si el promedio de cualquier lote > umbral
```

### Período de agregación

El rango de tiempo a considerar:

| Período | Uso |
|---------|-----|
| **Último registro** | Evaluación en tiempo real |
| **Últimas 24 horas** | Tendencia diaria |
| **Última semana** | Tendencia semanal |
| **Mes actual** | Evaluación mensual |

---

## Seleccionar Destinatarios

### Usuarios específicos

1. Busca usuarios por nombre o correo
2. Selecciona los que deben recibir la alerta
3. Pueden ser de cualquier rol

### Por rol

Selecciona todos los usuarios con cierto rol:

- Todos los Propietarios
- Todos los Administradores
- Supervisores específicos

### Correos externos

Para notificar a personas que no tienen cuenta en Arlo:

```
agronomía@consultora.com
gerencia@fincaexterna.com
```

:::caution[Correos externos]
Los correos externos solo reciben notificaciones por email, no pueden ver detalles en la aplicación.
:::

---

## Configurar Notificaciones

### Canales de notificación

| Canal | Descripción |
|-------|-------------|
| **En app** | Aparece en el centro de notificaciones |
| **Correo** | Se envía email a destinatarios |
| **Push** | Notificación móvil (si app instalada) |

### Contenido del mensaje

Puedes personalizar el mensaje usando variables:

```
Plantilla:
"⚠️ {campo} ({valor}) superó umbral ({umbral}) en {lote}"

Resultado:
"⚠️ Ácaros (8) superó umbral (5) en Lote Norte"
```

Variables disponibles:
- `{campo}` - Nombre del campo evaluado
- `{valor}` - Valor que disparó la alerta
- `{umbral}` - Umbral configurado
- `{lote}` - Lote afectado (si aplica)
- `{fecha}` - Fecha del evento
- `{usuario}` - Usuario que registró el dato

---

## Control de Frecuencia

### Período de enfriamiento (Cooldown)

Tiempo mínimo entre alertas del mismo tipo:

```
Cooldown: 6 horas

Si la alerta se dispara a las 10:00 AM:
- 11:00 AM: Se suprime
- 2:00 PM: Se suprime
- 4:00 PM: Se permite (pasaron 6 horas)
```

### Máximo de notificaciones

Límite de notificaciones por período:

```
Máximo: 10 por día

Notificaciones 1-10: Se envían
Notificación 11+: Se registran pero no se envían
```

---

## Ejemplos Completos

### Alerta de plaga crítica

```yaml
Nombre: "Ácaros - Nivel crítico"
Módulo: Sanidad
Prioridad: Alta

Condición:
  Campo: Conteo de ácaros
  Operador: >
  Valor: 5

Agregación: Ninguna (tiempo real)

Destinatarios:
  - Administrador de finca
  - Ingeniero agrónomo externo

Notificaciones:
  - En app: Sí
  - Correo: Sí

Cooldown: 24 horas
```

### Alerta de inventario bajo

```yaml
Nombre: "Fertilizante bajo mínimo"
Módulo: Insumos
Prioridad: Media

Condición:
  Campo: Cantidad en existencia
  Operador: <
  Valor: (referencia a campo "Cantidad mínima" del producto)

Agregación:
  Función: Suma
  Agrupar por: Producto

Destinatarios:
  - Encargado de compras

Notificaciones:
  - En app: Sí
  - Correo: Sí (resumen diario)

Cooldown: 7 días
```

### Alerta de sobrecosto

```yaml
Nombre: "Ciclo sobre presupuesto"
Módulo: Labores
Prioridad: Alta

Condición:
  Campo: Porcentaje de variación (real vs presupuesto)
  Operador: >
  Valor: 10  (10% sobre presupuesto)

Agregación:
  Función: Suma
  Agrupar por: Ciclo de campo
  Período: Actual

Destinatarios:
  - Gerente de operaciones
  - Propietario

Notificaciones:
  - En app: Sí
  - Correo: Sí (inmediato)

Cooldown: 48 horas
```

---

## Probar una Alerta

### Vista previa

Antes de activar, usa la función de vista previa:

1. Configura la alerta
2. Haz clic en **Vista Previa**
3. El sistema muestra qué registros existentes dispararían la alerta
4. Ajusta si es necesario

### Alerta de prueba

1. Guarda la alerta
2. Haz clic en **Enviar Prueba**
3. Recibes una notificación de prueba
4. Verifica que llegue correctamente

---

## Próximos Pasos

1. **[Alertas con IA](/es/alerts/ai-alerts/)** - Deja que la IA sugiera configuraciones
2. **[Configuración de finca](/es/alerts/farm-settings/)** - Ajusta parámetros globales
3. **[Gestionar notificaciones](/es/alerts/manage/)** - Administra las alertas recibidas
