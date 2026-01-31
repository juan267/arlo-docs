---
title: Manage Notifications
description: How to view, filter, mark, and organize alert notifications you receive in Arlo.
---

The notification center allows you to see all triggered alerts, filter them by different criteria, mark them as read, and take actions.

---

## Notification Center

### Access

1. Click the bell icon (🔔) in the top bar
2. The notifications panel opens
3. For full view, click **View all**

### Structure

```
🔔 Notifications (5 new)

━━━ TODAY ━━━
🔴 Critical | Mites (12) exceeded threshold (5)
   North Lot - 2 hours ago
   [View details] [Mark read]

🟠 High | Leaf miner > 30% in shoots
   South Lot - 4 hours ago
   [View details] [Mark read]

━━━ YESTERDAY ━━━
🟡 Medium | Low inventory: NPK
   Central Warehouse - yesterday 3:00 PM
   [View details] [Mark read]
```

---

## Priority Indicators

| Color | Priority | Meaning |
|-------|----------|---------|
| 🔴 | Critical | Requires immediate action |
| 🟠 | High | Important, address today |
| 🟡 | Medium | Attention needed |
| 🔵 | Low | Informational |

---

## Filter Notifications

### By status

```
Show:
  ○ All
  ● Unread (5)
  ○ Read
  ○ Archived
```

### By priority

```
Priority:
  ☑ Critical
  ☑ High
  ☑ Medium
  ☐ Low
```

### By module

```
Module:
  ☑ Sanitation
  ☑ Field Tasks
  ☐ Supplies
  ☐ Harvest
```

### By date

```
Period:
  ○ Today
  ○ Last 7 days
  ● Last 30 days
  ○ Custom: [___] to [___]
```

---

## Actions on Notifications

### Mark as read

- Click **Mark read** on the notification
- Or click on the notification to view details (marks automatically)

### Mark multiple as read

1. Select notifications (checkbox)
2. Click **Mark selected as read**

### Mark all as read

```
[Mark all as read]
```

Useful after reviewing the full panel.

### Archive

Move notifications out of main view:

1. Click **Archive** on the notification
2. Notification moves to "Archived"
3. Still available for reference

### Delete

:::caution[Permanent deletion]
Deleting a notification removes it permanently. Use "Archive" if you might need it later.
:::

---

## View Notification Details

When clicking on a notification:

```
📋 Alert Detail

Alert: Mites - Critical level
Triggered: January 31, 2025, 10:35 AM
Priority: Critical

━━━ DATA ━━━
Field: Mite count
Recorded value: 12
Configured threshold: > 5
Lot: North
Route: Weekly monitoring #45

━━━ CONTEXT ━━━
Recorded by: John Smith (Monitor)
Form: Pest Monitoring v2
Tree #: 15 of 20 sampled

━━━ ACTIONS ━━━
[View complete route]
[View lot history]
[Go to alert configuration]
```

---

## Alert History

### View complete history

1. Go to **Alerts → History**
2. Shows all alerts triggered over time

### History information

| Column | Description |
|--------|-------------|
| Date/Time | When triggered |
| Alert | Configuration name |
| Value | Data that triggered the alert |
| Lot | Location (if applicable) |
| Status | Notified / Suppressed / Error |
| Recipients | Who was notified |

### Export history

```
[Export to Excel]

Options:
  Period: Last 30 days
  Alerts: All / Selected
  Include: Suppressed / Only notified
```

---

## Personal Preferences

### Configure your profile

Each user can adjust their notification preferences:

1. Go to **My Profile → Notifications**
2. Adjust according to your preferences

### Options

```
Receive notifications by:
  ☑ In-app (always active)
  ☑ Email
  ☐ Mobile push

Email frequency:
  ○ Immediate
  ○ Summary every hour
  ● Daily summary (8:00 AM)

Priorities I receive:
  ☑ Critical
  ☑ High
  ☑ Medium
  ☐ Low

My quiet hours:
  Start: 9:00 PM
  End: 7:00 AM
```

---

## Troubleshooting

### Not receiving notifications

1. Verify you're in the alert's recipient list
2. Check your personal preferences
3. Check spam folder (emails)
4. Confirm the alert is active

### Receiving too many notifications

1. Adjust alert thresholds
2. Increase cooldown
3. Reduce priorities you receive
4. Use daily summary instead of immediate

### Notification doesn't make sense

1. Go to alert details
2. Review configuration
3. Verify if threshold needs adjustment
4. Consider if condition is correct

---

## Next Steps

1. **[Configure alerts](/en/alerts/configure/)** - Adjust existing alerts
2. **[AI alerts](/en/alerts/ai-alerts/)** - Improve configuration with AI
3. **[AI Analysis](/en/analysis/ai-analysis/)** - Understand patterns behind alerts
