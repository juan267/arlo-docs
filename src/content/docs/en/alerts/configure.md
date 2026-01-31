---
title: Configure Alerts
description: Learn to create custom alerts with conditions, aggregations, thresholds, and recipients.
---

This guide takes you step by step through creating an alert, from defining the condition to selecting recipients.

---

## Create a New Alert

### Access configuration

1. Go to **Alerts** in the sidebar
2. Click **New Alert** or the (+) button
3. The configuration form opens

### Basic information

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Alert identifier | "Mites - Critical level" |
| **Description** | What it detects and why it matters | "Alert when mite count exceeds action threshold" |
| **Module** | Where data comes from | Sanitation, Field Tasks, etc. |
| **Priority** | Urgency level | Critical, High, Medium, Low |
| **Active** | Whether alert is enabled | Yes/No |

---

## Define the Condition

### Select the field

Choose what data will be evaluated:

```
Module: Sanitation
Form: Pest Monitoring
Field: Mite count
```

### Select the operator

| Operator | Meaning | Typical use |
|----------|---------|-------------|
| `>` | Greater than | Exceeds max threshold |
| `>=` | Greater than or equal | Reaches threshold |
| `<` | Less than | Falls below minimum |
| `<=` | Less than or equal | Reaches minimum |
| `=` | Equal to | Specific value |
| `!=` | Different from | Exclude value |
| `between` | In range | Within limits |
| `contains` | Includes text | For text fields |

### Set the value

The value to compare against:

```
Field: Mite count
Operator: >
Value: 5

Interpretation: Alert when mites > 5
```

### Multiple conditions (AND/OR)

For complex alerts, you can combine conditions:

**AND (all must be met):**
```
Condition 1: Mites > 5
AND
Condition 2: Lot = "North"

Result: Alert only if more than 5 mites IN North Lot
```

**OR (at least one must be met):**
```
Condition 1: Mites > 5
OR
Condition 2: Thrips > 3

Result: Alert if many mites OR many thrips
```

---

## Configure Aggregation

For evaluating data from multiple records together.

### When to use aggregation?

- When a single record isn't significant
- For averages or totals over a period
- To compare between lots or groups

### Aggregation functions

| Function | Description | Example |
|----------|-------------|---------|
| **Sum** | Total of values | Sum of harvested units |
| **Average** | Mean of values | Average mites per tree |
| **Maximum** | Highest value | Max pest level |
| **Minimum** | Lowest value | Minimum yield |
| **Count** | Number of records | Number of previous alerts |

### Group by

Defines aggregation granularity:

```
Function: Average
Field: Mite count
Group by: Lot

Result: Average mites calculated for each lot
        Alert if any lot's average > threshold
```

---

## Select Recipients

### Specific users

1. Search users by name or email
2. Select those who should receive the alert
3. Can be from any role

### By role

Select all users with a certain role:

- All Owners
- All Administrators
- Specific supervisors

### External emails

To notify people without an Arlo account:

```
agronomy@consultant.com
management@externalfarm.com
```

:::caution[External emails]
External emails only receive email notifications, cannot see details in the application.
:::

---

## Configure Notifications

### Notification channels

| Channel | Description |
|---------|-------------|
| **In-app** | Appears in notification center |
| **Email** | Sent to recipients |
| **Push** | Mobile notification (if app installed) |

### Message content

You can customize the message using variables:

```
Template:
"⚠️ {field} ({value}) exceeded threshold ({threshold}) in {lot}"

Result:
"⚠️ Mites (8) exceeded threshold (5) in North Lot"
```

---

## Frequency Control

### Cooldown period

Minimum time between alerts of the same type:

```
Cooldown: 6 hours

If alert fires at 10:00 AM:
- 11:00 AM: Suppressed
- 2:00 PM: Suppressed
- 4:00 PM: Allowed (6 hours passed)
```

### Maximum notifications

Notification limit per period:

```
Maximum: 10 per day

Notifications 1-10: Sent
Notification 11+: Logged but not sent
```

---

## Test an Alert

### Preview

Before activating, use the preview function:

1. Configure the alert
2. Click **Preview**
3. System shows which existing records would trigger the alert
4. Adjust if needed

### Test alert

1. Save the alert
2. Click **Send Test**
3. You receive a test notification
4. Verify it arrives correctly

---

## Next Steps

1. **[AI alerts](/en/alerts/ai-alerts/)** - Let AI suggest configurations
2. **[Farm settings](/en/alerts/farm-settings/)** - Adjust global parameters
3. **[Manage notifications](/en/alerts/manage/)** - Administer received alerts
