---
title: Harvest Units
description: Define the containers or units used for measurement during harvest.
---

**Harvest Units** represent the physical containers or standardized units used during the harvest process (e.g., crates, bins, bags, or boxes). These units are essential for planning and tracking, as they allow the system to estimate total weight and monitor picker efficiency.

---

## 1. Why Harvest Units Matter

Using standardized units provides several benefits:

- **Consistent Planning:** You can plan your harvest in terms of "units" (e.g., 100 crates) rather than just raw weight.
- **Automatic Estimations:** When you schedule a harvest, the system automatically calculates the expected weight based on the unit's capacity.
- **Field Accuracy:** It helps monitors and supervisors ensure that the number of containers collected matches the data recorded.

---

## 2. Managing Harvest Units

Navigate to **Harvest → Harvest Units**.

### Creating a Harvest Unit

Click **Add Harvest Unit** and fill in the following:

- **Name:** The name of the container (e.g., "Standard Crate", "Large Bin").
- **Capacity:** The average weight of the crop that fits into one unit.
  - **Value:** The numeric weight (e.g., 25).
  - **Unit:** The measurement unit (currently restricted to **kg** for consistency).

:::tip[Average Weight]
Since the weight of crops can vary, enter the **average weight** you typically see for a full container. This will make your harvest schedules more accurate.
:::

---

## 3. How they are used

1.  **Schedules:** When planning a **Harvest Cycle**, you select a Harvest Unit and specify the number of units. The system multiplies the count by the capacity to show the **Planned Weight**.
2.  **Entries:** When recording a **Harvest Entry**, you enter the number of units actually collected. The system then calculates the **Average Unit Weight** for that trip by dividing the total net weight by the number of units.

---

## 4. Best Practices

- **Standardize Containers:** Try to use the same size and type of containers across the entire farm to simplify calculations.
- **Account for Tare:** Remember that the capacity should reflect the **net weight** of the crop, not including the weight of the container itself.
- **One Unit per Entry:** For most accurate tracking, each harvest entry should ideally use a single type of harvest unit.
