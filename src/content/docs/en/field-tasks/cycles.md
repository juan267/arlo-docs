---
title: Field Cycles
description: Master the management of work cycles, from planning and budgeting to execution and final cost analysis.
---

**Field Cycles** (Ciclos de Labor) are the core of operational planning. They allow you to group multiple field tasks over a specific time window, assign them to contractors and lots, and track their financial and physical progress.

---

## 1. Understanding Cycle Duration

Every farm has a preferred rhythm for managing and paying for work. You can configure the standard duration of your cycles in **Farm → Configuration → Field Task Configuration**.

- **Why configure this?** When you create a new cycle and select a **Start Date**, the system automatically calculates the **End Date** based on this configuration.
- **Common rhythms:**
  - **15 Days:** Common for bi-weekly payroll or contractor payments.
  - **30 Days:** Monthly operational planning.
  - **Custom:** Some farms use shorter or longer windows depending on the season.

---

## 2. Planning the Cycle (Line Items)

Once a cycle is created, you add specific jobs to it using **Field Cycle Line Items**.

### Creating Line Items

On the Field Cycle details page, click **Add Cycle Field Task**. For each item, you define:

- **Contractor:** Who is responsible?
- **Field Task:** What is the specific job (e.g., Pruning)?
- **Lot:** Where will it be done?
- **Budgeted Quantity:** How many units (trees, meters, etc.) are planned?
- **Schedule (Optional):** You can pick a specific date/time within the cycle window to organize your calendar.

### Budgeted vs. Actual Cost

- **Budgeted Cost:** Automatically calculated as `Budgeted Quantity × Task Default Price`. This gives you a financial projection of the cycle before any work starts.
- **Actual Cost:** Calculated from the **Logs** uploaded as the work is executed. This represents what you actually owe the contractor.

---

## 3. Execution Tracking (Logs)

As work is completed in the field, you record it using **Logs**.

- **Adding a Log:** Click on a line item to add units completed, the date of the work, and optional notes.
- **Progress Percentage:** The system automatically updates the progress (e.g., if you budgeted 100 trees and log 50, the item moves to 50% progress).
- **Record of Changes:** Every change to a schedule or log is tracked. You can see when an item was started, when it reached 100%, and who modified the record.

---

## 4. Status Lifecycle

Line items move through several states, indicated by colors:

- **⚪ Pending:** Not scheduled and not started.
- **🔵 Scheduled:** Planned for a future date.
- **🔴 Delayed:** Scheduled for the past but no work has been logged.
- **🟢 Completed:** Reached 100% progress or marked as finished.
- **🟣 Incomplete:** The cycle ended before the work reached 100%.

---

## 5. Navigating the Cycle View

The **Cycle Show Page** provides several tools for management:

- **Calendar Navigation:** View work by week. Use the arrow buttons to move forward or backward within the cycle window.
- **Filters:** Quickly isolate work by a specific **Contractor**, **Lot**, or **Status**.
- **Exports:**
  - **XLSX:** Download a detailed spreadsheet including every log and a summary of costs per contractor.
  - **PDF ZIP:** Generates individual "Service Orders" or "Payment Summaries" for each contractor in a single ZIP file. Use these as formal records for your accounting department.

:::tip[Pro Tip]
You can move scheduled work directly in the calendar by editing the line item. This helps you re-balance the workload if a contractor is falling behind.
:::
