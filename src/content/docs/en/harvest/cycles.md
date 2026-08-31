---
title: Harvest Cycles
description: Plan and monitor your harvest periods with calendars and performance tracking.
---

A **Harvest Cycle** groups schedules, actuals, shipments, and pricing over **1 to 4 ISO weeks** (Monday–Sunday). It is not a free-form season with loose start and end dates.

---

## 1. Creating a Harvest Cycle

Navigate to **Harvest → Harvest Cycles** and click **Add Harvest Cycle**.

Preferred length (1–4 weeks) is set in **Harvest → Harvest entry configuration** (or when you save a cycle, if you can edit farm configuration).

### Fields

- **Start week:** Pick the Monday of the first week. The system fills the following free weeks at the preferred length and shortens the cycle if a later week is already occupied.
- **Reference code:** Suggested from the selected weeks (for example `HC-2026-W-33`). You can edit it.

:::note[Date Integrity]
Harvest cycles do not overlap. You cannot delete a cycle that already has planned schedules or whose end date has passed. Legacy cycles that are not ISO weeks may still exist.
:::

---

## 2. Planning vs. Actuals

The Harvest Cycle view is divided into three main interactive sections:

### Harvest Schedules (Planning)

This is where you plan your work. In the **Calendar**, you can click on any date to schedule a harvest.

- **Select Lot & Group:** Specify who will harvest where.
- **Select Unit & Quantity:** The system will calculate the expected weight.
- **Filters:** You can filter the calendar by Lot or Harvest Group to see specific plans.

### Harvest Actuals (Execution)

The system automatically aggregates your **Harvest Entries** into this section.

- **Performance Status:** Each day/lot/group combination is color-coded:
  - <span style="color: #10b981; font-weight: bold;">Green (On Target):</span> 95% - 105% of plan.
  - <span style="color: #f59e0b; font-weight: bold;">Amber (Under Target):</span> Less than 95% of plan.
  - <span style="color: #3b82f6; font-weight: bold;">Blue (Over Target):</span> More than 105% of plan.
  - <span style="color: #6b7280; font-weight: bold;">Gray:</span> No plan or no entries recorded.

### Harvest Shipments

Track what you have sent to clients. This section includes its own calendar and summary tables by client.

---

## 3. The Interactive Dashboard

The Harvest Cycle "Show" page (`/farms/X/harvest_cycles/Y`) provides real-time insights:

- **Summary Tables:** See totals by Lot, Client, and Harvest Unit.
- **Performance Summary:** A high-level view of how much has been harvested vs. what was planned for the entire cycle.
- **PDF Export:** Use the **Printer** icon in the Schedule section to download a professional PDF of your harvest plan.

---

## 4. Understanding the Components

### Harvest Schedule vs. Harvest Actual

- **Schedule:** Your "Ideal" plan created before the work starts.
- **Actual:** The "Reality" calculated automatically from the net weights recorded in **Harvest Entries**.

The system links them by **Date, Lot, and Harvest Group** to calculate the variance and performance percentage.

---

## 5. Best Practices

- **Plan Early:** Fill out your harvest schedules at the start of the week or month.
- **Use the PDF:** Print the harvest schedule and give it to supervisors so they know exactly what the targets are.
- **Monitor Variances:** If a lot is consistently "Under Target" (Amber), investigate if there are health issues in those trees or if the harvest group needs more support.
