---
title: Supply Exits
description: Track the consumption of supplies in field tasks and lots to monitor costs and inventory levels.
---

A **Supply Exit** is recorded every time a material is taken from the warehouse and applied in the field. This process decreases your physical stock and assigns a financial cost to a specific location and activity.

---

## 1. Contextual Usage

To provide meaningful insights, every supply exit must be linked to:

- **Lot:** Exactly where the supply was applied. This allows you to see the "Cost per Lot" in your reports.
- **Field Task:** What activity required the supply (e.g., "Fertilization" or "Pest Control").
- **Contractor:** Who was responsible for applying the material. This helps track efficiency and accountability.

---

## 2. Automatic Inventory Updates

When a Supply Exit is saved, the following happens instantly:

1.  **Stock Reduction:** The system calculates the equivalent amount in **Buying Units** and subtracts it from your current inventory.
2.  **Cost Assignment:** The exit uses the **current WAVCO price** at that exact moment. This ensures your field costs are based on what you actually paid for the supplies in stock.
3.  **Total Amount:** The system calculates `Consumption Quantity × Current WAVCO Price` to determine the financial impact.

---

## 3. Stock Protection

Depending on your **Farm Configuration**, the system acts as a safeguard:

- **If Negative Stock is DISALLOWED:** The system will block the exit if the quantity requested is higher than what is available in the warehouse. An error message will appear, and you will need to record a **Supply Entry** first.
- **If Negative Stock is ALLOWED:** The exit will be saved, and your stock level will go into negative numbers. Note that this can lead to temporary inaccuracies in your average cost calculations until a new purchase is recorded.

---

## 4. How to Create an Exit

1. Navigate to **Supplies → Supply Exits**.
2. Click **New Supply Exit**.
3. Select the **Supply** being used.
4. Choose the **Lot**, **Field Task**, and **Contractor**.
5. Enter the **Consumption Quantity** (e.g., how many cc or kg were used).
6. Set the **Date** and add any **Notes** (e.g., "Weather was windy during application").
7. **Save** to update stock and activity costs.

:::tip[Integration]
Recording exits is what enables the **Supply Management Guide** to show you which lots or tasks are consuming the most resources and where your money is going.
:::
