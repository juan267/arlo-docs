---
title: Introduction to Field Tasks
description: Agricultural labor management principles and how field cycles help you control costs and productivity.
---

The Field Tasks module is the control center for all labor on your farm. It allows you to plan work, assign contractors, log execution, and compare budgeted vs. actual costs in short, manageable cycles.

---

## The Cost Control Problem

On agricultural farms, labor typically represents 40-60% of operating costs. However, many farms struggle to:

- **Know how much they spent**: Contractor payments accumulate without detailed records
- **Compare efficiency**: Is contractor A more expensive or more efficient than B?
- **Budget accurately**: Estimates are based on intuition, not historical data
- **Detect deviations**: Cost overruns are discovered at the end of the period

### The Cycles Approach

Arlo organizes work into **Field Cycles** - short periods (typically 15 days) where:

1. **You plan** what work will be done and how much it will cost
2. **You execute** by logging completed work day by day
3. **You compare** budget vs. actual before closing the cycle
4. **You adjust** for the next cycle based on real data

This rhythm of short cycles is similar to "sprints" in software development: bounded periods that allow rapid feedback and course correction.

---

## Anatomy of a Field Cycle

### Structure

```
┌─────────────────────────────────────────────────────────┐
│ FIELD CYCLE: FC-JAN-1-2025                             │
│ Start: Jan 1, 2025  │  End: Jan 15, 2025              │
├─────────────────────────────────────────────────────────┤
│ TASK 1: Pruning - North Lot - Contractor Garcia        │
│   Budget: 500 trees × $2.00 = $1,000                  │
│   Actual: 480 trees × $2.00 = $960                    │
│   Progress: 96%                                        │
├─────────────────────────────────────────────────────────┤
│ TASK 2: Fertilization - South Lot - Contractor Lopez   │
│   Budget: 200 trees × $1.50 = $300                    │
│   Actual: 200 trees × $1.50 = $300                    │
│   Progress: 100%                                       │
├─────────────────────────────────────────────────────────┤
│ CYCLE SUMMARY                                          │
│   Budgeted Cost: $1,300                               │
│   Actual Cost: $1,260                                 │
│   Variance: -$40 (3% under budget)                    │
└─────────────────────────────────────────────────────────┘
```

### Key Components

| Component | Description |
|-----------|-------------|
| **Serial** | Automatically generated unique identifier (FC-MON-#-YEAR) |
| **Start date** | First day of the cycle |
| **End date** | Automatically calculated based on configured duration |
| **Tasks** | Work lines with contractor, task, lot, and budget |
| **Logs** | Daily records of completed work |

---

## Task Lifecycle

Each task within a cycle goes through statuses that reflect its progress:

| Status | Condition |
|--------|-----------|
| **Pending** | No scheduled date, no work logged |
| **Scheduled** | Has future date assigned |
| **Delayed** | Scheduled date passed without starting work |
| **In Progress** | At least one log recorded, progress < 100% |
| **Completed** | Progress = 100% or manually marked as finished |
| **Incomplete** | Cycle closed with progress < 100% |

:::note[Grace period]
There's a 5-day grace period for logging late entries. After this period, logs for earlier dates require administrator approval.
:::

---

## Cycle Duration Configuration

Cycle duration is configured at the farm level in **Farm → Settings → Field Tasks Settings**.

| Duration | Use Case |
|----------|----------|
| **7 days** | Intensive operations requiring weekly tracking |
| **15 days** | Ideal for bi-weekly payroll (most common) |
| **30 days** | Monthly planning for stable operations |

When you create a new cycle:
1. You select the start date
2. The system automatically calculates the end date
3. A unique serial is generated (e.g., FC-JAN-1-2025)

---

## Behind the Scenes

### Automatic calculations

**Task budgeted cost:**
```
budgeted_cost = budgeted_quantity × default_price
```

**Task progress:**
```
progress = (sum of log units / budgeted_quantity) × 100
```

**Task actual cost:**
```
actual_cost = sum(log_units × log_price)
```

**Cycle actual cost:**
```
cycle_actual_cost = sum(actual_cost of all tasks)
```

### Automatic timestamps

- `started_at`: Set with the date of the first log
- `completed_at`: Set when progress reaches 100%

### Data protection

- You cannot delete a task if it has logs with progress > 0
- Cycle serial is immutable once created
- Log changes are recorded for auditing

---

## Next Steps

1. **[Register contractors](/en/field-tasks/contractors/)** - People or companies that execute work
2. **[Define field tasks](/en/field-tasks/tasks/)** - The task catalog with prices
3. **[Create your first cycle](/en/field-tasks/cycles/)** - Start planning work
