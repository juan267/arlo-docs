---
title: Harvest Scheduling
description: How to plan expected yields by date, lot, and harvest group to compare with actual results.
---

**Harvest scheduling** allows you to define how much you expect to harvest each day, in which lots, and with which groups. This planning is the basis for comparing actual performance against expectations.

---

## What is a Harvest Schedule?

A harvest schedule is your **ideal plan** before work begins. It defines:

| Field | Description |
|-------|-------------|
| **Date** | Day harvest is planned |
| **Lot** | Where harvest will take place |
| **Harvest Group** | Who will execute the work |
| **Unit** | Container type (basket, crate, etc.) |
| **Quantity** | Number of expected units |
| **Expected weight** | Calculated automatically |

### Expected weight calculation

```
expected_weight = quantity × unit_capacity

Example:
  Unit: Basket (capacity: 25 kg)
  Quantity: 40 baskets
  Expected weight: 40 × 25 = 1,000 kg
```

---

## Creating Harvest Schedules

### From the cycle calendar

1. Open an active harvest cycle
2. Go to the **Harvest Schedules** section
3. Click on a date in the calendar
4. Complete the fields:
   - Lot
   - Harvest group
   - Harvest unit
   - Expected quantity
5. Save the schedule

### From the list view

1. In the cycle, click **Add Schedule**
2. Select date, lot, group, unit, and quantity
3. Save

:::tip[Quick scheduling]
You can create multiple schedules for the same day if you have several groups working in different lots.
:::

---

## Scheduling Rules

### One unique combination

For each combination of **date + lot + group**, only one schedule can exist. This prevents duplicates and confusion.

```
✓ Allowed:
  - Jan 15 | North Lot | Group A | 40 baskets
  - Jan 15 | North Lot | Group B | 35 baskets  (different group)
  - Jan 15 | South Lot | Group A | 30 baskets  (different lot)

✗ Not allowed:
  - Jan 15 | North Lot | Group A | 40 baskets
  - Jan 15 | North Lot | Group A | 20 baskets  (duplicate)
```

### Within cycle range

Schedules can only be created for dates within the harvest cycle's range.

---

## Scheduling Strategies

### By group capacity

Estimate how much each group can harvest per day and schedule accordingly.

```
Group A: 5 people × 8 baskets/person/day = 40 baskets/day
Group B: 4 people × 8 baskets/person/day = 32 baskets/day
```

### By lot rotation

Schedule groups to rotate between lots ensuring uniform coverage.

### By crop maturity

Prioritize lots where the crop is ready for harvest.

---

## Link with Actual Harvest

Schedules are automatically compared with **Actual Harvests** (aggregations of harvest entries).

### How are they linked?

The system joins schedule and actual by:
- Same date
- Same lot
- Same harvest group

```
Schedule: Jan 15 | North Lot | Group A | 1,000 kg expected

Harvest entries for Jan 15, North Lot, Group A:
  - Entry 1: 350 kg net
  - Entry 2: 380 kg net
  - Entry 3: 290 kg net

Actual Harvest (aggregated): 1,020 kg

Performance: 1,020 / 1,000 = 102% → ON TARGET (green)
```

---

## Export Schedules

### PDF of harvest schedule

1. In the Schedules section, click the printer icon
2. A PDF is generated with:
   - Summary by date
   - Detail by lot and group
   - Expected totals

**Typical use**: Print and give to field supervisors so they know the day's goals.

---

## Next Steps

With schedules created:

1. **[Record harvest entries](/en/harvest/entries/)** - Capture actual weights
2. **[Monitor dashboard](/en/harvest/cycles/)** - See real-time performance
3. **[Generate reports](/en/harvest/guide/)** - Analyze cycle results
