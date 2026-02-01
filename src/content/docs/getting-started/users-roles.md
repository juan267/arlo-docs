---
title: Usuarios y Roles
description: Aprende a invitar usuarios a tu finca y asignar los roles y permisos adecuados para cada miembro del equipo.
---

Arlo permite invitar a múltiples usuarios a tu finca, cada uno con diferentes niveles de acceso según su rol. Una buena configuración de roles garantiza que cada persona tenga acceso a lo que necesita sin comprometer la seguridad de datos sensibles.

---

## 1. Roles Disponibles

Arlo define cinco roles con diferentes niveles de acceso:

### Propietario (Owner)
El rol con acceso completo a todas las funciones y configuraciones.

- Acceso total a todos los módulos
- Puede invitar y eliminar usuarios
- Puede modificar configuración de finca
- Puede eliminar datos permanentemente
- Acceso a reportes financieros completos

**Ideal para:** Dueños de finca, gerentes generales

### Administrador (Admin)
Acceso operativo completo sin capacidad de eliminar datos críticos.

- Acceso a todos los módulos operativos
- Puede crear y editar registros
- Puede invitar usuarios (excepto Propietarios)
- Acceso a reportes operativos y financieros
- No puede eliminar la finca o datos históricos

**Ideal para:** Gerentes de operaciones, administradores de finca

### Empleado (Employee)
Acceso para trabajo diario de oficina y captura de datos.

- Puede crear registros en módulos asignados
- Puede ver reportes operativos
- No puede modificar configuraciones
- No puede ver información financiera detallada

**Ideal para:** Personal administrativo, asistentes

### Monitor
Acceso limitado para trabajo de campo móvil.

- Solo acceso al lanzador de rutas de Sanidad
- Puede completar inspecciones asignadas
- No tiene acceso a reportes ni configuraciones
- Optimizado para uso en dispositivos móviles

**Ideal para:** Inspectores de campo, monitores de sanidad

### Operador de Ventas (Sales Operator)
Acceso específico para el módulo de Remisiones.

- Acceso completo al módulo de Remisiones
- Puede crear y gestionar clientes
- Puede generar y enviar remisiones
- No tiene acceso a otros módulos

**Ideal para:** Personal de ventas, despacho

---

## 2. Matriz de Permisos por Módulo

| Módulo | Propietario | Admin | Empleado | Monitor | Ventas |
|--------|:-----------:|:-----:|:--------:|:-------:|:------:|
| **Sanidad** | Completo | Completo | Lectura/Escritura | Solo rutas | - |
| **Labores** | Completo | Completo | Lectura/Escritura | - | - |
| **Insumos** | Completo | Completo | Lectura/Escritura | - | - |
| **Cosecha** | Completo | Completo | Lectura/Escritura | - | - |
| **Remisiones** | Completo | Completo | - | - | Completo |
| **Configuración** | Completo | Parcial | - | - | - |
| **Usuarios** | Completo | Parcial | - | - | - |
| **Reportes Financieros** | Completo | Completo | - | - | - |

---

## 3. Invitar Usuarios

Para agregar un nuevo miembro al equipo:

1. Ve a **Finca → Usuarios**
2. Haz clic en **Invitar Usuario**
3. Ingresa el correo electrónico del usuario
4. Selecciona el rol apropiado
5. Haz clic en **Enviar Invitación**

El sistema enviará automáticamente un correo de invitación al usuario.

### Proceso de Aceptación

El flujo de aceptación varía según si el usuario ya tiene cuenta en Arlo:

**Usuario existente (ya tiene cuenta en Arlo):**
1. Recibe correo con enlace de invitación
2. Al hacer clic, ve una página de confirmación con detalles de la organización y rol
3. Acepta la invitación con un clic
4. Es iniciado sesión automáticamente y redirigido a la finca

**Usuario nuevo (no tiene cuenta):**
1. Recibe correo con enlace de invitación
2. Es redirigido a crear su contraseña
3. Ve un mensaje personalizado: "Crea tu cuenta para [Nombre de Organización]"
4. Al establecer su contraseña, su cuenta es verificada automáticamente
5. Es iniciado sesión y redirigido a la finca

:::note[Inicio de sesión automático]
En ambos casos, el usuario es iniciado sesión automáticamente después de aceptar la invitación. No necesita ingresar credenciales manualmente.
:::

### Gestionar Invitaciones Pendientes

Las invitaciones pendientes aparecen en la parte superior de la página de Usuarios. Desde ahí puedes:

- **Ver estado:** Invitaciones muestran si están pendientes o expiradas
- **Reenviar:** Envía un nuevo correo con un enlace actualizado (el enlace anterior deja de funcionar)
- **Cancelar:** Invalida la invitación permanentemente

:::tip[Expiración]
Las invitaciones expiran después de 7 días. Las invitaciones expiradas se muestran con una etiqueta de "Expirada" y pueden ser reenviadas.
:::

---

## 4. Gestionar Usuarios Existentes

### Cambiar Rol
Si las responsabilidades de un usuario cambian, puedes actualizar su rol:

1. Ve a **Finca → Usuarios**
2. Encuentra al usuario en la lista
3. Haz clic en el menú de acciones (⋮)
4. Selecciona **Cambiar Rol**
5. Elige el nuevo rol

### Remover Acceso
Para quitar a un usuario de la finca:

1. Ve a **Finca → Usuarios**
2. Encuentra al usuario
3. Haz clic en **Remover de la Finca**

:::caution[Importante]
Remover un usuario no elimina los registros que creó. Toda la actividad histórica se mantiene para auditoría.
:::

---

## 5. Mejores Prácticas

### Principio de mínimo privilegio
Asigna el rol con los permisos mínimos necesarios para cada tarea. Es más fácil agregar permisos que lidiar con errores por exceso de acceso.

### Usuarios individuales
Cada persona debe tener su propia cuenta. Compartir credenciales dificulta la auditoría y compromete la seguridad.

### Revisión periódica
Revisa los usuarios activos al menos cada trimestre. Remueve accesos de personas que ya no trabajan con la finca.

### Estructura típica

| Rol | Cantidad típica |
|-----|-----------------|
| Propietario | 1-2 (dueños o gerencia general) |
| Admin | 2-4 (gerentes de área) |
| Empleado | Variable (personal de oficina) |
| Monitor | Variable (inspectores de campo) |
| Ventas | 1-3 (personal de despacho) |

---

## 6. Preguntas Frecuentes

**¿Puede un usuario tener acceso a múltiples fincas?**
Sí. Un usuario puede ser invitado a varias fincas con roles diferentes en cada una.

**¿Qué pasa si alguien pierde acceso a su correo?**
Un Propietario puede eliminar al usuario y crear una nueva invitación con un correo diferente.

**¿Puedo crear roles personalizados?**
Actualmente no. Los cinco roles definidos cubren la mayoría de necesidades. Si tienes un caso especial, contacta a soporte.

**¿Qué pasa si la invitación expiró?**
Las invitaciones expiran después de 7 días. Ve a **Finca → Usuarios**, encuentra la invitación expirada en la sección de invitaciones pendientes, y haz clic en **Reenviar**. Esto genera un nuevo enlace y envía un correo actualizado.

**¿Puedo cancelar una invitación enviada por error?**
Sí. Desde la sección de invitaciones pendientes en **Finca → Usuarios**, haz clic en **Cancelar** junto a la invitación. El enlace dejará de funcionar inmediatamente.

**¿Qué pasa si el usuario ya es miembro de la organización?**
El sistema detecta esto automáticamente. Si alguien intenta aceptar una invitación a una organización de la que ya es miembro, verá un mensaje indicando que ya tiene acceso.

---

## Próximos Pasos

Con tu equipo configurado, es momento de comenzar a usar la plataforma:

**[Tu Primera Semana →](/getting-started/first-week/)**
