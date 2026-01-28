---
title: Field Tasks
description: Define and standardize the work performed on your farm for accurate cost tracking and planning.
---

**Field Tasks** (Labores) are the building blocks of your farm's operations. They represent standardized types of work, such as "Manual Weeding," "Pruning," or "Fertilizing." By defining these tasks clearly, you can track costs precisely and plan your labor cycles effectively.

---

## 1. Creating a Field Task

Navigate to **Farm → Field Tasks** and click **Add Field Task**.

:::important[Create Once, Use Forever]
Field tasks are designed to be created **only once**. Once you have defined a task (e.g., "Pruning"), you can reuse it in as many **Field Cycles** as needed over the years. You don't need to create a new task for every cycle or every month; simply select it from the list when planning your cycle.
:::

### Field Meanings

- **Name:** A descriptive name for the task (e.g., "Guadaña de Calles").
- **Code:** A unique shorthand identifier (e.g., "GUA-01"). This is used for quick searching and bulk uploads.
- **Default Price:** The standard amount paid to a contractor per unit of this task. The currency follows your farm's configuration.

:::caution[Price Updates]
If you update the **Default Price** of a task, the system will automatically recalculate the budgeted and actual costs for all **active or future Field Cycles**. Cycles that have already ended will retain their original costs to protect your historical records.
:::

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

## 3. Bulk Uploads and Updates

For farms with a large volume of data, the **Bulk Upload** tool is the most efficient way to manage your task catalog. You can find this option via the **Bulk Upload** button on the Field Tasks index.

### How the Process Works

1.  **Download the Template:** Click **Download Template (.xlsx)**. The system generates a smart file that includes:
    - **Existing Tasks:** Your current catalog as sample data so you can simply edit them.
    - **Data Validations:** Dropdowns for columns like "Task Unit" to prevent typing errors.
    - **Instructions Sheet:** Details on the expected format for each column.
2.  **Prepare the Data:** Fill in or edit the information in the Excel file.
3.  **Upload the File:** Drag and drop your file into the upload area.

### Bulk Updates (e.g., Yearly Price Adjustments)

The system uses the **Code** of the task to identify whether to create a new record or update an existing one.

- **If the code already exists:** The system will update the name, description, and price of that task. This is ideal for **yearly price adjustments**: download the template with current prices, update them in Excel, and re-upload.
- **If the code is new:** A new field task will be created.

### Notifications and Error Reports

Once the file is processed, you will receive an **email** with a summary of the results:

- **Success:** How many tasks were created and how many were updated.
- **Errors:** If there were any issues (e.g., an invalid unit or a database error), the email will include an **Excel Error Report**. This report tells you exactly which row failed and why, so you can fix and re-upload only the corrected rows.

:::tip[Efficiency]
Use bulk upload not just for initial setup, but as your primary maintenance tool to keep your labor costs updated year after year.
:::
