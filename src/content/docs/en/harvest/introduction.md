---
title: Introduction to Harvest
description: Harvest planning and tracking with short cycles, yield scheduling, and comparison of actual results.
---

The Harvest module allows you to plan expected yields, record actual scale weights, and analyze your harvest operation's performance by lot, group, and period.

---

## The Harvest Challenge

Harvest is the critical moment when all year's work materializes into value. However, many farms face:

- **Yield uncertainty**: Don't know how much to expect until it's over
- **Hidden variability**: Some lots yield less, but don't know which ones
- **Team issues**: Harvest groups with different productivity
- **Scattered data**: Paper scale tickets that never get analyzed

### The Cycles Approach

Arlo organizes harvest into **Harvest Cycles** - defined periods (typically 1-4 weeks) where:

1. **You schedule** expected yields by lot and group
2. **You record** actual scale weights day by day
3. **You compare** planned vs. actual with color codes
4. **You adjust** expectations and resources for the next cycle

---

## Key Concept: Planned vs. Actual

The module's heart is the comparison between what you expected to harvest and what you actually harvested.

### Harvest Schedule (Planned)

This is your **ideal plan** before work begins:
- Harvest date
- Lot to harvest
- Assigned harvest group
- Expected quantity and units
- Expected weight (calculated automatically)

### Actual Harvest

This is **reality** from each harvest entry:
- Weights recorded in harvest entries (with vehicle or without)
- Automatically aggregated by date/lot/group
- Net weight from the flow: scale minus tare, or unit capacity × quantity

### Performance Indicators

| Color | Range | Interpretation |
|-------|-------|----------------|
| 🟢 Green | 95% - 105% | On target - expected yield |
| 🟠 Amber | < 95% | Below target - investigate causes |
| 🔵 Blue | > 105% | Above target - exceptional yield |
| ⚪ Gray | No data | No plan or no entries |

---

## Module Structure

### Configuration

| Component | Purpose |
|-----------|---------|
| **Vehicles** | Register trucks/vehicles with empty weight |
| **Harvest Units** | Containers (baskets, crates) with capacities |
| **Harvest Groups** | Teams/crews that execute harvest |

### Operations

| Component | Purpose |
|-----------|---------|
| **Harvest Cycles** | Planning periods with defined dates |
| **Scheduling** | Yield plans by date/lot/group |
| **Harvest Entries** | Net weight recording (with vehicle or without) |

### Analysis

| Component | Purpose |
|-----------|---------|
| **Cycle Dashboard** | Real-time performance view |
| **Reports** | Exports and detailed analysis |

---

## Harvest Cycles: The Harvest Sprint

### Why short cycles?

Instead of planning the entire season at once, 1-4 week cycles allow:

- **Continuous adjustment**: Correct estimates based on actual results
- **Clear accountability**: Specific goals for bounded periods
- **Early detection**: Identify problems before they accumulate
- **Resource management**: Redistribute groups based on performance

### Cycle constraints

- **No overlap**: You cannot have two cycles with overlapping dates
- **Data protection**: Cannot delete a cycle that already has schedules
- **Unique code**: Each cycle has a unique reference code

---

## Behind the Scenes

### Net weight calculation

**With vehicle:**

```
net_weight = scale_weight - vehicle_empty_weight
```

Empty weight comes from the vehicle record or the last same-day entry for that vehicle (weight memory).

**Without vehicle:**

```
net_weight = harvest_unit_capacity × quantity
```

You can override net weight if a unit was not full.

:::tip[Weight memory (with vehicle only)]
If a vehicle already weighed empty that day, the system remembers the weight and applies it to later entries for the same vehicle.
:::

### Actual harvest aggregation

The system maintains a unique record (`HarvestActual`) for each combination of:
- Date
- Lot
- Harvest group

When you add or modify entries, the system automatically recalculates totals for that combination.

### Performance calculation

```
performance_percentage = (actual_weight / planned_weight) × 100

If 95% ≤ percentage ≤ 105% → On target (green)
If percentage < 95% → Below target (amber)
If percentage > 105% → Above target (blue)
```

---

## Next Steps

1. **[Define harvest units](/en/harvest/units/)** - Containers and their capacities
2. **[Create harvest groups](/en/harvest/groups/)** - Teams that will execute work
3. **[Choose entry flows](/en/harvest/entries/)** - With vehicle and/or without (register vehicles only if you use with-vehicle)
4. **[Configure your first cycle](/en/harvest/cycles/)** - Start planning
