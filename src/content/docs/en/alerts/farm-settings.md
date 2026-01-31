---
title: Farm Alert Settings
description: Adjust global alert system parameters like default recipients, quiet hours, and frequency limits.
---

Farm-level alert configuration allows you to set parameters that apply to all alerts, avoiding repetitive configuration.

---

## Access Configuration

1. Go to **Farm → Settings**
2. Find the **Alerts** or **Notifications** section
3. Adjust parameters according to your needs

---

## Default Recipients

### What are they?

Users who will receive all alerts unless otherwise specified in each individual alert.

### Configuration

```
Default recipients:
  ☑ Farm owners
  ☑ Administrators
  ☐ Employees

Additional emails:
  - management@farm.com
  - agronomy@consultant.com
```

### Behavior

| Individual alert | Result |
|------------------|--------|
| No recipients configured | Uses defaults |
| With specific recipients | Added to defaults |
| "Ignore defaults" checked | Uses only specific ones |

---

## Quiet Hours

### Purpose

Avoid email notifications during night or non-working hours, while maintaining records in the application.

### Configuration

```
Quiet hours:
  Start: 10:00 PM
  End: 6:00 AM

Timezone: America/New_York

Days: All days
  ☑ Include weekends
```

### Behavior during quiet hours

| Action | Result |
|--------|--------|
| In-app logging | Normal (always logged) |
| Email | Held until end of quiet period |
| Push notification | Held (configurable) |

### Exceptions

You can configure critical alerts that ignore quiet hours:

```
Alerts that ignore quiet hours:
  ☑ Critical priority
  ☐ High priority
  ☐ Medium priority
```

---

## Frequency Limits

### Global daily limit

Maximum email notifications per day for entire farm:

```
Daily limit: 100 emails

Behavior when limit reached:
  - Logged in app
  - Not sent by email
  - Admin notified that limit was reached
```

### Per-user limit

Maximum notifications each user receives:

```
Per-user limit: 20 emails/day

Example:
  User A: Receives max 20 alert emails
  User B: Receives max 20 alert emails
  (independent of global limit)
```

### Default global cooldown

Minimum time between alerts of same type if not configured individually:

```
Default cooldown: 1 hour

Applies to alerts without specific cooldown configured
```

---

## Notification Grouping

### Summary emails

Instead of sending each alert individually, you can group them:

```
Delivery mode:
  ○ Immediate (each alert sent at time)
  ○ Summary every hour
  ● Daily summary (8:00 AM)
  ○ Custom
```

### Summary exceptions

```
Alerts always sent immediately:
  ☑ Critical priority
  ☑ High priority
  ☐ Medium priority
  ☐ Low priority
```

---

## Notification Channels

### Default configuration

```
Active channels:
  ☑ In-app notifications
  ☑ Email
  ☐ Push notifications (requires mobile app)
  ☐ SMS (requires additional setup)
  ☐ Webhook (for integrations)
```

---

## Typical Configuration Examples

### Small farm (1-5 users)

```yaml
Default recipients: All administrators
Quiet hours: 9 PM - 6 AM
Daily limit: 50 emails
Default cooldown: 2 hours
Delivery mode: Immediate for critical/high, daily summary for medium/low
```

### Medium farm (5-15 users)

```yaml
Default recipients: Owners only
Quiet hours: 10 PM - 5 AM
Daily limit: 100 emails
Per-user limit: 25 emails
Default cooldown: 1 hour
Delivery mode: Immediate for critical, hourly summary for others
```

### Large farm (15+ users)

```yaml
Default recipients: None (configure per alert)
Quiet hours: Configurable per user
Daily limit: 200 emails
Per-user limit: 30 emails
Default cooldown: 30 minutes
Delivery mode: Custom per priority and role
```

---

## Next Steps

1. **[Manage notifications](/en/alerts/manage/)** - Administer received alerts
2. **[Configure alerts](/en/alerts/configure/)** - Create custom alerts
3. **[AI alerts](/en/alerts/ai-alerts/)** - Use assistant for smart configuration
