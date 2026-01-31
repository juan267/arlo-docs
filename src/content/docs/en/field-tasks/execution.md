---
title: Execution & Logs
description: How to log completed work, monitor task progress, and manage status flow during cycle execution.
---

Once you've planned tasks in a field cycle, the next step is to log execution. **Logs** are the mechanism to capture completed work day by day and see progress in real-time.

---

## What is a Log?

A **log** is a record of completed work for a specific task. Each log contains:

| Field | Description | Required |
|-------|-------------|----------|
| **Date** | Day the work was performed | Yes |
| **Units completed** | Amount of work done (trees, meters, etc.) | Yes |
| **Notes** | Observations or comments | No |

### Example

```
Task: Formation pruning - North Lot - Contractor Garcia
Budget: 500 trees

Log 1: Jan 10 - 150 trees - "Started in sector A"
Log 2: Jan 11 - 180 trees - "Continued in sector B"
Log 3: Jan 12 - 170 trees - "Finished"

Total logged: 500 trees (100%)
```

---

## How to Log

### From the cycle view

1. Go to **Field Tasks → Field Cycles**
2. Open the active cycle
3. Find the task in the calendar or list
4. Click on the task to expand it
5. Click **Add Log**
6. Complete: date, units, notes (optional)
7. Save

### Considerations

- You can add multiple logs for the same task
- Logs can be recorded for any date within the cycle
- Progress is recalculated automatically with each log

:::tip[Daily logging]
Best practice is to log at the end of each work day. This keeps data current and enables early problem detection.
:::

---

## Automatic Progress Calculation

The system calculates each task's progress automatically:

```
progress = (sum of units in logs / budgeted quantity) × 100
```

### Example

```
Budget: 500 trees

After Log 1 (150 trees): 150/500 = 30%
After Log 2 (180 trees): 330/500 = 66%
After Log 3 (170 trees): 500/500 = 100%
```

### Visual indicators

| Progress | Indicator |
|----------|-----------|
| 0% | Empty bar |
| 1-99% | Partially filled bar |
| 100% | Full bar, "Completed" status |
| >100% | Possible if more than budgeted is logged |

---

## Status Flow

Task statuses change automatically based on logs and dates:

### Automatic transitions

| Status | Color | Condition |
|--------|-------|-----------|
| **Pending** | ⚪ | No scheduled date, no logs |
| **Scheduled** | 🔵 | Has future date, no logs |
| **Delayed** | 🔴 | Scheduled date passed, no logs or low progress |
| **In Progress** | 🟡 | Has logs, progress between 1-99% |
| **Completed** | 🟢 | Progress = 100% |
| **Incomplete** | 🟣 | Cycle closed with progress < 100% |

---

## Automatic Timestamps

The system automatically records:

### `started_at` (Start date)
- Set with the **first log** date recorded
- Represents when work actually began
- Immutable once set

### `completed_at` (Completion date)
- Set when progress **reaches 100%**
- Uses the date of the log that completed the task
- Can be recalculated if logs are added/modified

---

## Grace Period

There's a **5-day grace period** for logging late entries.

### How it works

- You can log entries with dates up to 5 days in the past without restriction
- Logs with dates older than 5 days require special permissions
- This allows flexibility to capture work that wasn't logged on time

:::caution[Data integrity]
The grace period balances operational flexibility with data integrity. Avoid the habit of logging very late entries, as it hinders timely problem detection.
:::

---

## Actual vs. Budgeted Cost

Each log contributes to the actual cost calculation:

### Budgeted cost (planning)

```
budgeted_cost = budgeted_quantity × task_price
```

### Actual cost (execution)

```
actual_cost = sum(log_units × task_price)
```

### Comparison

| Scenario | Interpretation |
|----------|----------------|
| Actual < Budget | Under budget (favorable) |
| Actual = Budget | In line with planned |
| Actual > Budget | Over budget (investigate) |

---

## Data Protection

The system includes validations to protect data integrity:

### Cannot delete a task if:
- It has logged entries with progress > 0
- It's part of a closed cycle

### To modify a log:
- User must have edit permissions
- Changes are recorded in audit history
- Progress is recalculated automatically

### To delete a log:
- Only users with administrator permissions
- Progress is recalculated automatically
- Action is recorded for auditing

---

## Next Steps

With logs recorded, you can:

1. **[Review management guide](/en/field-tasks/guides/)** - Cost analysis and exports
2. **[Link supply exits](/en/supplies/exits/)** - Associate materials with tasks
3. **[Create next cycle](/en/field-tasks/cycles/)** - Continue planning
