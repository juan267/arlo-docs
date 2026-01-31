---
title: Alert System
description: Learn about Arlo's smart notification system that alerts you when indicators exceed defined thresholds.
---

Arlo's alert system allows you to receive automatic notifications when your farm's data exceeds thresholds you define. Instead of manually reviewing every report, alerts proactively notify you when something requires your attention.

---

## Why Alerts?

On a farm with multiple lots, crops, and operations, it's impossible to manually review every data point. Alerts solve this problem:

| Without alerts | With alerts |
|----------------|-------------|
| You review reports daily looking for anomalies | Anomalies find you |
| You discover problems days later | You learn in real-time |
| Depend on someone remembering to check | System never forgets |
| You react late | You act early |

---

## Alert Types

### By module

| Module | Alert types |
|--------|-------------|
| **Sanitation** | Pest levels, detected symptoms, low coverage |
| **Field Tasks** | Costs exceeding budget, delayed tasks |
| **Supplies** | Inventory below minimum, unusual consumption |
| **Harvest** | Below-target yield, significant deviations |

### By evaluation timing

| Type | When evaluated | Example |
|------|----------------|---------|
| **Real-time** | When data is captured | Immediate alert if pest > threshold |
| **Scheduled** | At fixed time | Daily summary of overdue routes |
| **Aggregated** | When period completes | Alert if weekly cost exceeds budget |

---

## Anatomy of an Alert

Each configured alert has:

### Condition

Defines what is evaluated:

```
Field: Mite count
Operator: Greater than (>)
Value: 5
```

### Aggregation (optional)

For data from multiple records:

```
Function: Average
Grouped by: Lot
```

### Recipients

Who receives the notification:

- Specific users
- Roles (all administrators)
- External emails

### Actions

What happens when triggered:

- In-app notification
- Email
- Both

---

## Alert Flow

```
1. DATA CAPTURE
   Monitor records: Mites = 8 in North Lot
                    ↓
2. EVALUATION
   System compares: 8 > 5 (threshold)
   Result: CONDITION MET
                    ↓
3. TRIGGER
   Notification created
   Email sent to recipients
                    ↓
4. RECEPTION
   Admin receives:
   "⚠️ Alert: Mites (8) exceeded threshold (5) in North Lot"
                    ↓
5. ACTION
   Admin decides on intervention
```

---

## Priority Levels

| Priority | Use | Treatment |
|----------|-----|-----------|
| **Critical** | Requires immediate action | Push notification + email |
| **High** | Important, act today | Immediate email |
| **Medium** | Attention needed | Included in daily summary |
| **Low** | Informational | Only visible in app |

---

## Frequency Control

To avoid notification overload:

### Cooldown (cooling period)

Minimum time between alerts of the same type for the same object.

### Quiet hours

Period where emails aren't sent (but logged in app).

### Daily limit

Maximum alerts per day to avoid spam.

---

## Next Steps

1. **[Configure alerts](/en/alerts/configure/)** - Create your first alert
2. **[AI alerts](/en/alerts/ai-alerts/)** - Use assistant for smart configuration
3. **[Farm settings](/en/alerts/farm-settings/)** - Adjust global parameters
