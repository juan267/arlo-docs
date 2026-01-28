---
title: Supply Entries
description: Record purchase orders and restock your inventory while maintaining accurate cost basis.
---

A **Supply Entry** represents a purchase event. It is the mechanism that adds physical stock to your warehouse and updates the financial value (WAVCO) of your supplies.

---

## 1. Grouping Supplies

Purchase orders often contain multiple different items from the same vendor. The system allows you to group these into a single Entry:

- **Header Information:** Includes the **Supply Provider**, the **Document Number** (Invoice or Receipt), and the **Date of Entry**.
- **Line Items:** You can add multiple supplies to a single entry. For each item, you specify the **Buying Quantity** and the **Buying Unit Price**.

---

## 2. Automatic Calculations

When you enter a purchase in **Buying Units**, the system automatically performs several background tasks to ensure data integrity:

- **Consumption Quantity:** Uses your predefined **Unit Conversion** to calculate how many consumption units are being added (e.g., entering 2 bags of 50kg will automatically calculate 100kg of consumption stock).
- **Consumption Unit Price:** Automatically divides the buying price by the conversion factor to get the granular cost.
- **WAVCO Update:** Recalculates the Weighted Average Cost for the entire stock of that supply, blending the new purchase price with the existing inventory.

---

## 3. Validation Logic

To prevent data entry errors, the system includes a strict validation layer:

- **Total Matching:** The system verifies that the **Total Amount** calculated for the buying units matches the total for the consumption units. If there is a discrepancy (beyond a tiny rounding tolerance), the entry will not be saved.
- **Provider Required:** Every entry must be linked to a valid **Supply Provider**.
- **Historical Locks:** To maintain accounting integrity, the system prevents editing entries that are older than 2 months.

---

## 4. How to Create an Entry

1. Navigate to **Supplies → Supply Entries**.
2. Click **New Supply Entry**.
3. Select the **Provider** and enter the **Invoice Number**.
4. Set the **Date** (defaults to today).
5. Add your supplies as **Line Items**.
6. **Save** to update your inventory levels instantly.

:::tip[Bulk Upload]
If you are moving a large amount of stock from an old system or doing a massive yearly restock, you can use the **Bulk Upload** feature in the Supplies index to initialize your stock levels.
:::
