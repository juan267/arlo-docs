---
title: Agregar Fincas a tu Organización
description: Aprende a crear fincas adicionales dentro de tu organización en Arlo Agro.
---

Una **organización** en Arlo puede tener múltiples fincas. Esto es útil cuando administras varias propiedades agrícolas bajo una misma empresa o grupo familiar.

---

## Acceder a tu Organización

Para ver todas las fincas de tu organización:

1. Desde cualquier finca, haz clic en **"Ir a [nombre de tu organización]"** en el menú lateral inferior
2. Verás la página de tu organización con todas las fincas disponibles

### Vista de Fincas

En la página de organización encontrarás:

- **Nombre de la organización** en la parte superior
- **Tarjetas de fincas** mostrando cada finca con:
  - Nombre de la finca
  - Dirección completa
  - Número de lotes configurados
  - País

Haz clic en cualquier tarjeta para acceder directamente a esa finca.

---

## Crear una Nueva Finca

:::note[Permisos requeridos]
Solo los usuarios con rol de **Propietario** o **Administrador** pueden crear nuevas fincas.
:::

### Pasos para crear una finca

1. Accede a la página de tu organización
2. Haz clic en el botón **"Crear Finca"** en la esquina superior derecha
3. Completa el formulario con la información de la nueva finca:

| Campo             | Descripción                                   |
| ----------------- | --------------------------------------------- |
| **Nombre**        | Nombre identificativo de la finca             |
| **País**          | Determina la zona horaria y formato de moneda |
| **Región/Estado** | División administrativa del país              |
| **Ciudad**        | Ciudad o municipio donde se ubica             |
| **Dirección**     | Dirección física de la finca                  |

4. Haz clic en **"Crear finca"** para finalizar

### Después de crear la finca

Una vez creada, serás redirigido a la página de **Lotes** de la nueva finca, donde podrás:

- Cargar los polígonos de tus lotes desde un archivo GeoJSON
- Crear lotes manualmente
- Configurar la información de cada lote

:::tip[Configuración inicial]
Después de crear los lotes, recuerda visitar **Configuración** para ajustar:

- Duración de ciclos de campo
- Moneda para reportes financieros
- Otras opciones específicas de la finca
  :::

---

## Cambiar entre Fincas

Hay dos formas de cambiar entre fincas:

### Desde el menú de usuario

1. Haz clic en tu nombre en el menú lateral inferior
2. Selecciona la finca a la que deseas cambiar

### Desde la página de organización

1. Haz clic en **"Ir a [organización]"** en el menú lateral
2. Selecciona la finca haciendo clic en su tarjeta

---

## Permisos y Acceso

Los usuarios de tu organización pueden tener diferentes niveles de acceso a cada finca:

| Rol                | Crear Fincas | Ver Fincas | Cambiar entre Fincas |
| ------------------ | ------------ | ---------- | -------------------- |
| Propietario        | ✓            | ✓          | ✓                    |
| Administrador      | ✓            | ✓          | ✓                    |
| Empleado           | ✗            | ✓          | ✓                    |
| Monitor            | ✗            | ✓          | ✓                    |
| Operador de Ventas | ✗            | ✓          | ✓                    |

:::caution[Importante]
Los permisos de módulos (Sanidad, Labores, etc.) se configuran por organización, no por finca individual. Un usuario con permisos de Sanidad tendrá acceso a ese módulo en todas las fincas de la organización.
:::

---

## Próximos Pasos

Después de crear tu finca, continúa con la configuración completa:

**[Configuración de Finca →](/getting-started/farm-setup/)**

O agrega usuarios a tu organización:

**[Usuarios y Roles →](/getting-started/users-roles/)**
