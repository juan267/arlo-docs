---
title: Harvest Entries
description: Record the actual harvest data as it arrives from the field.
---

**Harvest Entries** are the core records of daily harvest: time, lot, group, unit count, and net weight.

The farm enables one or both flows in **Harvest → Harvest entry configuration**:

- **With vehicle:** net weight = scale weight minus empty vehicle weight.
- **Without vehicle:** net weight = harvest unit capacity × quantity (overridable if a unit was not full).

If both are on, pick the flow when creating an entry.

---

## 1. Requirements Before Starting

Both flows need **harvest groups**, **lots**, and **harvest units**.

The **with-vehicle** flow also needs **vehicles** with empty weight. The **without-vehicle** flow does not.

---

## 2. Field Meanings

Path: **Harvest → Harvest Entries → Add Harvest Entry**. Use the form your farm shows.

### Shared

- **Entry Time:** When the harvest was recorded.
- **Lot:** Where the crop was harvested.
- **Harvest Group:** Which team did the work.
- **Harvest Units:** Number of containers (crates, bins, etc.).
- **Scale Ticket Code** and **Field Statement Code:** Optional tracking.

### With vehicle

- **Vehicle:** The vehicle that delivered the crop.
- **Scale Weight:** Total weight (vehicle + crop).
- **Empty Vehicle Weight:** Tare. The system remembers a vehicle's empty weight for the current day and suggests it on later trips.
- **Net Weight:** Scale weight minus empty vehicle weight.

### Without vehicle

- **Harvest Unit:** Container with a known capacity. Net weight is capacity × quantity.
- **Net Weight:** Calculated; override it if a unit was not full.

**Average unit weight** (when it applies): net weight divided by unit count.

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
