---
title: Field Tasks
description: Define and standardize the work performed on your farm for accurate cost tracking and planning.
---

**Field Tasks** (Labores) are the building blocks of your farm's operations. They represent standardized types of work, such as "Manual Weeding," "Pruning," or "Fertilizing." By defining these tasks clearly, you can track costs precisely and plan your labor cycles effectively.

---

## 1. Creating a Field Task

Navigate to **Farm → Field Tasks** and click **Add Field Task**.

### Field Meanings

- **Name:** A descriptive name for the task (e.g., "Guadaña de Calles").
- **Code:** A unique shorthand identifier (e.g., "GUA-01"). This is used for quick searching and bulk uploads.
- **Default Price:** The standard amount paid to a contractor per unit of this task. The currency follows your farm's configuration.
- **Task Unit:** The metric used to measure progress. Common examples include _Tree_, _Palm_, _Lot_, or _Meter_.
- **Description:** Additional context about the task's requirements or standards.

---

## 2. Best Practice: Segregating Tasks

A common mistake is to create broad, catch-all tasks like "Integrated Pest Management" or "General Maintenance." For professional cost tracking, **it is best to separate tasks by specific action.**

### Why Segregate?

Consider "Manejo de Malezas" (Weeding). Instead of one task, create:

1.  **Guadaña para Calles:** Measured in meters or lots.
2.  **Plateo Manual:** Measured in trees.
3.  **Plateo Químico:** Measured in trees and linked to supply usage.

**Benefits:**

- **Accurate Costing:** You might pay differently for manual work vs. machinery work.
- **Efficiency Insights:** You can see if "Plateo Manual" is becoming too expensive compared to "Plateo Químico."
- **Granular Planning:** You can schedule guadaña for one lot and plateo for another within the same cycle.

---

## 3. Units: Consumption vs. Buying

Understanding how the system handles units is key to accurate inventory and cost analysis.

### Buying Unit (Stock)

This is how you **purchase** supplies from providers (e.g., a _20L Jug_ of Herbicide or a _50kg Bag_ of Fertilizer). Your inventory is tracked in these units.

### Consumption Unit (Application)

This is how you **apply** the supply in the field (e.g., _Milliliters_ per tree or _Grams_ per plant).

### Field Task Unit (Execution)

This is the work metric (e.g., _Trees_ pruned or _Meters_ weeded).

### WAVCO (Weighted Average Cost)

The system uses **WAVCO** to translate your Buying Unit price into a Consumption Unit cost.
_Example:_ If you buy a 50kg bag for $100, and a Field Task consumes 500g per tree, the system automatically calculates the cost per tree as $1. This ensures that your **Actual Cost** in a labor cycle reflects the real value of the supplies used.

---

## 4. Bulk Uploads

If you have a long list of tasks, use the **Bulk Upload** feature on the Field Tasks index.

1.  Download the template.
2.  Fill in the `code`, `name`, `default_price`, and `field_task_unit`.
3.  Upload to create or update multiple tasks at once.
