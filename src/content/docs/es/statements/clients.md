---
title: "Clientes"
description: Gestione su base de datos de clientes para una generación de remisiones eficiente.
---

El módulo de **Clientes** funciona como la base de datos de compradores de su finca. Al mantener una lista de clientes precisa, puede generar remisiones de venta rápidamente sin tener que ingresar la misma información cada vez.

---

## 1. ¿Por qué gestionar clientes?

- **Eficiencia**: Seleccione un cliente de una lista desplegable en el editor de remisiones, y todos sus detalles (Dirección, Identificación, Correo) se completarán automáticamente.
- **Análisis**: Realice un seguimiento de sus ventas por cliente para identificar a sus compradores más importantes.
- **Automatización**: Asegúrese de que las remisiones completadas se envíen automáticamente a la dirección de correo correcta.

---

## 2. Gestión de Clientes

Navegue a **Ventas → Clientes** para ver y gestionar su lista.

### Creación de un Cliente

Al añadir un nuevo cliente, deberá proporcionar:

- **Nombre**: La razón social o nombre comercial del comprador.
- **Identificación (Documento)**: Número de identificación tributaria (NIT, RUT o cédula).
- **Correo Electrónico**: Crucial para el envío automatizado de remisiones.
- **Teléfono y Dirección**: Para logística y documentación oficial.

:::tip[Unicidad de Clientes]
El sistema asegura que no cree clientes duplicados validando que el Nombre y el Correo sean únicos dentro de su finca.
:::

---

## 3. Uso de Clientes en Remisiones

Cuando inicia una nueva remisión, la sección de **Selección de Cliente** le permite elegir de su lista guardada.

- **Borrador**: Puede iniciar una remisión como borrador sin asignar un cliente.
- **Finalización**: Un cliente **debe** estar asignado antes de que una remisión pueda marcarse como "Completada".
