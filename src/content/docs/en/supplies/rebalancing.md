---
title: Inventory Rebalancing
description: Learn how to reconcile your digital inventory with physical warehouse counts using the Rebalancing tool.
---

**Inventory Rebalancing** is a powerful but destructive tool used to synchronize your digital records with the physical reality of your warehouse. It is typically used during initial setup, after a physical inventory count, or to correct historical data entry errors.

---

## 1. How Rebalancing Works

Unlike a standard **Supply Entry**, which simply adds stock, Rebalancing resets the inventory state of your supplies to a specific "baseline" on a chosen date.

### The Logic

1.  **Baseline Date:** You choose a date for the rebalance (e.g., the last day of the month).
2.  **Transaction Cleanup:** The system **permanently deletes (soft-deletes)** all historical Entries and Exits for those supplies on or before that date.
3.  **New Baseline:** The system creates a special "REBALANCE" entry that sets your stock and average price to the new values you provided.
4.  **Future Reprocessing:** Any transactions that occurred **after** the rebalance date are automatically reprocessed to ensure your current stock levels remain accurate.

---

## 2. Step-by-Step Rebalancing Process

Navigate to **Supplies → Inventory Rebalancing**.

### Step 1: Download the Template

Click **Download Template (.xlsx)**. This file will contain all your current supplies.

- **Supply Name & Code:** Do not modify these.
- **Rebalance Date:** The date when the physical count was performed.
- **New Buying Unit Stock:** The physical count of units in your warehouse.
- **New Average Buying Price:** The current cost basis for those units.

### Step 2: Perform Physical Count

Go to your warehouse and count every item. Ensure you are measuring in the correct **Buying Units** (e.g., Bags, Liters) as defined in your catalog.

### Step 3: Upload and Confirm

Upload the completed Excel file.
:::danger[Warning: Destructive Action]
Rebalancing will delete all transactions on or before the specified date. This action cannot be easily undone. Always double-check your numbers before confirming.
:::

---

## 3. Important Notes

- **Provider:** The system uses a special "Rebalancing Provider" for these entries to distinguish them from regular purchases.
- **WAVCO Reset:** Rebalancing is the only way to manually "fix" a distorted WAVCO price without deleting individual transactions manually.
- **Active Cycles:** If you rebalance a supply that was used in an active field cycle, the costs for those field activities will be updated to reflect the new rebalanced price.
- **Email Confirmation:** Since rebalancing can involve a lot of data, it runs in the background. You will receive an email once the process is complete.

---

## 4. When to Rebalance?

- **Onboarding:** When moving from paper or another software to this system.
- **Yearly Audits:** After your annual or quarterly physical inventory.
- **Correction:** If a major data entry error months ago has made your current stock levels completely unreliable.
