---
title: Harvest Entries
description: Record the actual harvest data as it arrives from the field.
---

**Harvest Entries** are the core records of your daily harvest operations. They capture the specific details of each delivery from the field to the weighing station, including weight, units, and the team responsible.

---

## 1. Requirements Before Starting

Before you can create a Harvest Entry, ensure the following are set up:

1.  **Vehicles:** To track transportation and handle empty weights.
2.  **Harvest Groups:** To identify which team performed the work.
3.  **Lots:** To know exactly where the crop was harvested.
4.  **Harvest Units:** (Indirectly used to validate counts and calculate averages).

---

## 2. Field Meanings

When adding a Harvest Entry (**Harvest → Harvest Entries → Add Harvest Entry**), you will encounter the following fields:

### Basic Information

- **Entry Time:** The exact date and time the harvest was recorded.
- **Vehicle:** Select the vehicle that delivered the crop.
- **Lot:** Select the specific lot where the harvest took place.
- **Harvest Group:** Select the team that did the harvesting.

### Weight & Units

- **Harvest Units:** The total number of containers (crates, bins, etc.) in this delivery.
- **Scale Weight:** The total weight shown on the scale (Vehicle + Crop).
- **Empty Vehicle Weight:** The weight of the vehicle alone (Tare).
  :::tip[Smart Suggestion]
  The system remembers the empty weight of a vehicle for the current day. If this is the second trip for the same truck today, it will suggest the previous empty weight automatically.
  :::
- **Net Weight:** (Calculated) Scale Weight minus Empty Vehicle Weight.
- **Average Unit Weight:** (Calculated) Net Weight divided by Harvest Units.

### Tracking & Codes

- **Scale Ticket Code:** The reference number from your physical scale printer.
- **Field Statement Code:** Your internal tracking or harvest voucher number.

---

## 3. How Weights are Used

The system uses the **Measured** weight system to ensure accuracy:

- **Automatic Conversions:** You can enter weights in different units (kg, lb, tons), and the system will normalize them for reporting.
- **Precision:** It handles decimal values to ensure your total farm yields are accurate to the gram if needed.
- **Validation:** The system prevents saving entries with a net weight of zero or negative values.

---

## 4. Automatic Aggregation

Once you save a Harvest Entry, the system doesn't just store it; it automatically:

1.  **Updates Daily Actuals:** It groups all entries for the same day, lot, and group into a **Harvest Actual** record.
2.  **Recalculates Performance:** It immediately compares the new total against any planned schedules to update your performance indicators (Green/Amber/Blue).
3.  **Updates Reports:** All charts and KPI cards in the Reports dashboard are updated in real-time.

---

## 5. Best Practices

- **Real-time Entry:** Record entries as they happen to ensure your performance dashboards always reflect the current state of the farm.
- **Verify Scale Tickets:** Always double-check the Scale Ticket Code to maintain a clear audit trail.
- **Monitor Averages:** Keep an eye on the "Average Unit Weight." If it deviates significantly from your Harvest Unit capacity, it might indicate uneven filling of containers or an error in the unit count.
