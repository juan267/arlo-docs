---
title: "Listado de Remisiones"
description: Vista general del tablero de remisiones, seguimiento de estados y gestión de documentos.
---

El **Listado de Remisiones** es su centro de control para rastrear toda la actividad de ventas en la finca. Proporciona una vista cronológica de cada documento creado, su estado actual y acceso rápido a descargas.

---

## 1. Entendiendo el Tablero

La vista de lista muestra información clave de un vistazo:

- **Serie**: El número único del documento (ej: REM-105).
- **Cliente**: Quién compró los productos.
- **Completada el**: Fecha y hora en que se finalizó el documento.
- **Peso Total**: La suma de todos los productos en la remisión (en kg).
- **Valor Total**: El valor monetario final de la venta.
- **Estado**: Si es un Borrador, Completada o Cancelada.

---

## 2. Flujo de Estados

Las remisiones pasan por un ciclo de vida específico para asegurar la integridad de los datos:

| Estado         | Descripción                                                                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Borrador**   | El estado inicial. Puede editar cada detalle, añadir/quitar productos y cambiar el cliente. Aún no se asigna un número de serie.                       |
| **Completada** | Documento finalizado. Recibe un número de serie, activa el envío de correos y genera el PDF final. **Las remisiones completadas no se pueden editar.** |
| **Cancelada**  | Un documento que fue completado pero luego anulado. Mantiene su número de serie para auditoría pero se marca como inválido.                            |

---

## 3. Búsqueda y Filtros

Use los filtros en la parte superior de la página para encontrar documentos específicos:

- **Estado**: Vea solo ventas completadas o borradores pendientes.
- **Cliente**: Vea todo lo vendido a un comprador específico.
- **Rango de Fechas**: Filtre por fechas "Desde" y "Hasta" para ver las ventas de una semana o mes específico.

---

## 4. Acciones

- **Añadir Remisión**: Inicia un nuevo borrador.
- **Editar (Icono Lápiz)**: Disponible solo para **Borradores**. Le lleva al editor.
- **Descargar PDF**: Disponible para remisiones **Completadas** y **Canceladas**.
- **Eliminar**: Solo puede eliminar remisiones en estado **Borrador**. Una vez que un documento tiene un número de serie (Completada/Cancelada), no se puede eliminar del sistema para mantener la integridad de sus registros contables.
