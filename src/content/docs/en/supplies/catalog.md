---
title: Supply Catalog
description: Manage your supply items, units, and conversion rates for accurate cost tracking.
---

The **Supply Catalog** is the master list of all agricultural materials used in your farm. Just like Field Tasks, supplies are designed to be created **only once** and then reused across all inventory movements (Entries, Exits, and Returns).

---

## 1. Units: Buying vs. Consumption

One of the most powerful features of the system is the ability to handle different units for purchasing and field application.

### Buying Unit

This is how you **purchase and store** the supply. Examples include:

- **Bags** (e.g., Fertilizer)
- **Litres** or **Gallons** (e.g., Liquid Pesticide)
- **Bottles** or **Containers**

### Consumption Unit

This is how you **apply** the supply in the field. Examples include:

- **Kilograms (kg)** or **Grams (gr)**
- **Cubic Centimeters (cc)** or **Milliliters (ml)**

### Unit Conversion

The **Unit Conversion** factor tells the system how many consumption units are in one buying unit.

| Supply     | Buying Unit | Consumption Unit | Unit Conversion | Explanation                              |
| :--------- | :---------- | :--------------- | :-------------- | :--------------------------------------- |
| Urea       | Bag         | kg               | **50**          | 1 bag contains 50 kilograms.             |
| Herbicide  | Litre       | cc               | **1000**        | 1 litre contains 1000 cubic centimeters. |
| Fertilizer | Container   | gr               | **5000**        | 1 container contains 5000 grams.         |

:::tip[Same Unit]
If you buy and use a supply in the same unit (e.g., buying a "Unit" of a spare part and using a "Unit"), set the consumption unit to "Same as Buying Unit". The conversion will automatically be 1.
:::

---

## 2. Understanding WAVCO

**WAVCO** stands for **Weighted Average Cost**. It is the financial heart of the supply module.

Unlike simple average pricing, WAVCO takes into account the **quantity** of items already in stock and their cost, and averages them with the quantity and price of new purchases.

### Why is this useful?

As prices from providers fluctuate due to inflation or market changes, WAVCO ensures that the cost assigned to your field tasks represents a fair "blended" price of all units currently sitting in your warehouse.

**Example:**

1. You have **10 units** bought at **$10** each (Total Value: $100).
2. You buy **10 new units** at **$20** each (Total Value: $200).
3. Your new WAVCO is **$15** ($300 total value / 20 units).
4. When you record an exit, the system will use **$15** as the cost, regardless of whether you are physically using an "old" or "new" bottle.

---

## 3. Transaction History & Devolutions

Each supply has a detailed **Show View** (Navigate to **Supplies → Click on a Supply**) that serves as a complete audit trail.

### Inventory Snapshot (Time Travel)

The system allows you to see exactly how much stock and what the average price was at any specific date in the past. This is useful for end-of-month audits or reconciling physical counts.

### Transaction Table

You can see every Entry, Exit, and Return in chronological order, including:

- Who provided or applied the supply.
- The exact price and quantity used.
- The total financial impact of the movement.

### Devolutions (Returns)

If a contractor returns unused supply to the warehouse after an exit was recorded, you can create a **Return**.

1. Find the specific **Exit** in the transaction table.
2. Click the **Return** button.
3. Specify the quantity being returned.
4. The system will automatically increase the stock level and adjust the inventory value.
