---
title: Configuración de Alertas de Finca
description: Ajusta los parámetros globales del sistema de alertas como destinatarios por defecto, horas silenciosas y límites de frecuencia.
---

La configuración de alertas a nivel de finca te permite establecer parámetros que aplican a todas las alertas, evitando configurar lo mismo repetidamente.

---

## Acceder a la Configuración

1. Ve a **Finca → Configuración**
2. Busca la sección **Alertas** o **Notificaciones**
3. Ajusta los parámetros según tus necesidades

---

## Destinatarios por Defecto

### ¿Qué son?

Usuarios que recibirán todas las alertas a menos que se especifique lo contrario en cada alerta individual.

### Configuración

```
Destinatarios por defecto:
  ☑ Propietarios de la finca
  ☑ Administradores
  ☐ Empleados

Correos adicionales:
  - gerencia@finca.com
  - agronomia@consultora.com
```

### Comportamiento

| Alerta individual | Resultado |
|-------------------|-----------|
| Sin destinatarios configurados | Se usan los por defecto |
| Con destinatarios específicos | Se agregan a los por defecto |
| "Ignorar por defecto" marcado | Solo usa los específicos |

---

## Horas Silenciosas

### Propósito

Evitar notificaciones por correo durante la noche u horas no laborales, mientras se mantiene el registro en la aplicación.

### Configuración

```
Horas silenciosas:
  Inicio: 10:00 PM
  Fin: 6:00 AM

Zona horaria: America/Mexico_City

Días: Todos los días
  ☑ Incluir fines de semana
```

### Comportamiento durante horas silenciosas

| Acción | Resultado |
|--------|-----------|
| Registro en app | Normal (siempre se registra) |
| Correo electrónico | Se retiene hasta fin de período silencioso |
| Notificación push | Se retiene (configurable) |

### Excepciones

Puedes configurar alertas críticas que ignoren las horas silenciosas:

```
Alertas que ignoran horas silenciosas:
  ☑ Prioridad Crítica
  ☐ Prioridad Alta
  ☐ Prioridad Media
```

---

## Límites de Frecuencia

### Límite diario global

Máximo de notificaciones por correo por día para toda la finca:

```
Límite diario: 100 correos

Comportamiento al alcanzar límite:
  - Se registran en app
  - No se envían por correo
  - Se notifica al administrador que se alcanzó el límite
```

### Límite por usuario

Máximo de notificaciones que recibe cada usuario:

```
Límite por usuario: 20 correos/día

Ejemplo:
  Usuario A: Recibe máximo 20 alertas por correo
  Usuario B: Recibe máximo 20 alertas por correo
  (independiente del límite global)
```

### Cooldown global por defecto

Tiempo mínimo entre alertas del mismo tipo si no se configura individualmente:

```
Cooldown por defecto: 1 hora

Aplica a alertas sin cooldown específico configurado
```

---

## Agrupación de Notificaciones

### Correos de resumen

En lugar de enviar cada alerta individualmente, puedes agruparlas:

```
Modo de envío:
  ○ Inmediato (cada alerta se envía al momento)
  ○ Resumen cada hora
  ● Resumen diario (8:00 AM)
  ○ Personalizado
```

### Contenido del resumen

```
📬 Resumen de Alertas - Finca San José
   31 de enero de 2025

   CRÍTICAS (2)
   🔴 Ácaros (12) superó umbral (5) - Lote Norte
   🔴 HLB síntomas severos - Lote Este

   ALTAS (5)
   🟠 Minador > 30% en Lote Sur
   🟠 Inventario bajo: Fertilizante NPK
   ... y 3 más

   MEDIAS (8)
   Ver detalles en la aplicación →
```

### Excepciones al resumen

```
Alertas que siempre se envían inmediatamente:
  ☑ Prioridad Crítica
  ☑ Prioridad Alta
  ☐ Prioridad Media
  ☐ Prioridad Baja
```

---

## Canales de Notificación

### Configuración por defecto

```
Canales activos:
  ☑ Notificaciones en app
  ☑ Correo electrónico
  ☐ Notificaciones push (requiere app móvil)
  ☐ SMS (requiere configuración adicional)
  ☐ Webhook (para integraciones)
```

### Preferencias por prioridad

| Prioridad | En App | Correo | Push |
|-----------|:------:|:------:|:----:|
| Crítica | ✓ | ✓ | ✓ |
| Alta | ✓ | ✓ | ✓ |
| Media | ✓ | ✓ | ○ |
| Baja | ✓ | ○ | ○ |

(✓ = activo por defecto, ○ = opcional)

---

## Formato de Correos

### Personalización básica

```
Remitente: alertas@arloagro.com
Nombre del remitente: Arlo Agro - Finca San José
Asunto: [Arlo] {prioridad}: {nombre_alerta}
```

### Idioma

```
Idioma de notificaciones: Español
```

### Logo y branding

Opcionalmente, puedes incluir el logo de tu finca en los correos.

---

## Retención de Notificaciones

### Historial en app

```
Retener notificaciones por: 90 días

Después de este período:
  - Se eliminan del centro de notificaciones
  - Se mantienen en logs de auditoría (si aplica)
```

### Notificaciones leídas vs. no leídas

```
Marcar como leída:
  ☑ Al abrir la notificación
  ☐ Manualmente

Auto-archivar leídas después de: 30 días
```

---

## Auditoría

### Registro de alertas

Todas las alertas disparadas se registran con:

- Fecha y hora
- Condición que se cumplió
- Valor que disparó la alerta
- Destinatarios notificados
- Estado de entrega (enviado, retenido, error)

### Exportar historial

```
Exportar alertas:
  Período: Últimos 30 días
  Formato: Excel / CSV
  Incluir: Todas / Solo disparadas / Solo enviadas
```

---

## Ejemplo de Configuración Típica

### Finca pequeña (1-5 usuarios)

```yaml
Destinatarios por defecto: Todos los administradores
Horas silenciosas: 9 PM - 6 AM
Límite diario: 50 correos
Cooldown por defecto: 2 horas
Modo de envío: Inmediato para críticas/altas, resumen diario para medias/bajas
```

### Finca mediana (5-15 usuarios)

```yaml
Destinatarios por defecto: Solo propietarios
Horas silenciosas: 10 PM - 5 AM
Límite diario: 100 correos
Límite por usuario: 25 correos
Cooldown por defecto: 1 hora
Modo de envío: Inmediato para críticas, resumen cada hora para otras
```

### Finca grande (15+ usuarios)

```yaml
Destinatarios por defecto: Ninguno (configurar por alerta)
Horas silenciosas: Configurable por usuario
Límite diario: 200 correos
Límite por usuario: 30 correos
Cooldown por defecto: 30 minutos
Modo de envío: Personalizado por prioridad y rol
```

---

## Próximos Pasos

1. **[Gestionar notificaciones](/alerts/manage/)** - Administra las alertas recibidas
2. **[Configurar alertas](/alerts/configure/)** - Crea alertas personalizadas
3. **[Alertas con IA](/alerts/ai-alerts/)** - Usa el asistente para configuración inteligente
