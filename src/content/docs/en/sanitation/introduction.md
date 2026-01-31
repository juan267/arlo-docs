---
title: Introduction to Sanitation Monitoring
description: Integrated pest management principles and how Arlo helps you implement systematic monitoring on your farm.
---

The Sanitation module is the heart of preventive monitoring in Arlo. It allows you to detect pest and disease problems before they cause significant economic damage, using a systematic, data-driven approach.

---

## Why Systematic Monitoring?

In perennial crops like citrus, avocado, or coffee, pests and diseases can go unnoticed until damage is considerable. Ad-hoc or reactive monitoring has several problems:

- **Late detection**: Problems are identified when already visible to the naked eye
- **Inconsistent coverage**: Some lots get checked more than others
- **Non-comparable data**: Without standard structure, it's hard to see trends
- **Intuition-based decisions**: Without historical data, treatment decisions are subjective

### The Arlo Approach

Arlo implements a digital **Integrated Pest Management (IPM)** system:

1. **Planned monitoring**: Weekly routes with clear deadlines and responsibilities
2. **Standardized forms**: Same questions in each inspection for comparable data
3. **Action thresholds**: Automatic alerts when levels require intervention
4. **Historical analysis**: Trends and patterns for informed decisions

---

## How Routes Work

A **sanitation route** is a scheduled inspection that includes:

- **Form**: What data to collect (pests, diseases, observations)
- **Lots**: Where to perform the inspection
- **Monitor**: Who will execute it
- **Due date**: When it must be completed

### The Typical Weekly Cycle

```
Monday      → Schedule week's routes
Tue-Thu     → Execute field inspections
Friday      → Review results, make decisions
```

This weekly rhythm keeps the team in a constant monitoring-analysis-action cycle.

### Route Statuses

| Status | Meaning |
|--------|---------|
| **Scheduled** | Created but not yet started |
| **In progress** | Monitor has started the inspection |
| **Completed** | All data captured and synced |
| **Overdue** | Due date passed without completion |

:::caution[Automatic overdue detection]
When a route exceeds its due date (`due_at`), the system automatically marks it as "Overdue." This allows quick identification of pending work in the calendar.
:::

---

## Coverage Strategy

A good monitoring program balances two factors:

### Frequency vs. Depth

- **High frequency, low depth**: Check all lots superficially each week
- **Low frequency, high depth**: Check few lots exhaustively each month

Most farms use a hybrid approach:
- Weekly **quick surveillance** inspections in all lots
- **Detailed** monthly inspections or when problems are detected

### Representative Sampling

For high-density crops, it's impractical to check every tree. Arlo forms support two modes:

- **Closed sampling**: Fixed number of trees per lot (e.g., 10 trees/lot)
- **Open sampling**: Monitor decides how many points to evaluate based on lot size

---

## Module Components

### Configuration

| Component | Purpose |
|-----------|---------|
| **Monitors** | Registration of field inspectors |
| **Forms** | Design of what data to collect |
| **Alerts** | Thresholds and automatic notifications |

### Operations

| Component | Purpose |
|-----------|---------|
| **Calendar** | Route scheduling and tracking |
| **Launcher** | Starting inspections with offline support |
| **Data entry** | Mobile capture with GPS and photos |

### Analysis

| Component | Purpose |
|-----------|---------|
| **Route analysis** | Individual results with AI summary |
| **Sanitation map** | Spatial visualization of findings |
| **Analytical reports** | Trends, coverage, and metrics |

---

## Behind the Scenes

Arlo automates several processes that facilitate work:

### Automatic status transitions
- When a monitor starts a route → Status changes to "In progress"
- When all data is synced → Status changes to "Completed"
- When due date passes without completion → Status changes to "Overdue"

### Report generation
When completing a route, the system automatically:
- Aggregates counts by field type
- Calculates averages and percentages
- Generates an AI summary including weather context
- Triggers alerts if thresholds are exceeded

### Calculated fields
Forms can include fields that are calculated automatically:
- Cross-references between levels (tree can use route data)
- Averages, sums, and counts by section
- Custom composite indices

---

## Next Steps

1. **[Register your monitors](/en/sanitation/monitors/)** - The people who will do inspections
2. **[Create your first form](/en/sanitation/forms/guide/)** - Define what data to collect
3. **[Schedule a route](/en/sanitation/calendar/)** - Assign date, lots, and responsible person
