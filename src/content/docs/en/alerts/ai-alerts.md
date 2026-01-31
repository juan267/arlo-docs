---
title: AI Alerts
description: Use the AI assistant to create alerts based on best practices and your historical data.
---

The **AI Alert Assistant** helps you configure smart alerts based on your farm's characteristics, your data history, and agricultural best practices.

---

## Why Use AI for Alerts?

Configuring effective alerts requires knowledge about:
- Action thresholds for different pests
- Normal vs. abnormal levels for your operation
- Which indicators really matter
- How to avoid false alerts

The AI assistant:
- **Analyzes your history** to suggest realistic thresholds
- **Knows industry standards** for agriculture
- **Identifies patterns** you might not see
- **Suggests optimized configurations**

---

## How to Use the Assistant

### Access the assistant

1. Go to **Alerts**
2. Click **Create with AI** or **AI Assistant**
3. The conversation panel opens

### Describe your need

Write what type of alerts you need:

**Basic example:**
```
I need alerts to monitor pests in my citrus
```

**More specific:**
```
I want to be notified when mites exceed levels
that require treatment in my orange orchard
```

**Detailed:**
```
Configure alerts for:
- Mites: economic action threshold
- Leaf miner: when affecting more than 30% of shoots
- HLB: any severe symptoms detected
I want to receive them by email immediately
```

---

## What the AI Generates

### Analysis of your operation

The AI reviews:
- Your existing sanitation forms
- Data history from recent months
- Value distribution by field
- Seasonal patterns if enough data exists

### Alert suggestions

For each suggested alert:

```
📋 Suggested alert: Mites - Action level

Justification:
  - Your historical average is 2.3 mites/leaf
  - 95th percentile of your data is 7 mites/leaf
  - Standard action threshold is 5 mites/leaf

Recommended configuration:
  Field: Mite count
  Threshold: > 5
  Aggregation: Average per lot
  Priority: High

Would you like to create this alert? [Create] [Adjust] [Discard]
```

---

## Sensitivity Levels

You can indicate how sensitive you want alerts:

### Conservative

```
"I want alerts only when there's really a serious problem"

Result:
  - Higher thresholds
  - Fewer but more critical alerts
  - Lower risk of alert fatigue
  - Higher risk of late detection
```

### Balanced (recommended)

```
"I want a balance between detecting problems and
not receiving too many alerts"

Result:
  - Thresholds at standard action levels
  - Alerts when action is recommended
  - Balance between sensitivity and specificity
```

### Sensitive

```
"I prefer to receive early alerts even if some
are false alarms"

Result:
  - Lower thresholds
  - More alerts, including early signals
  - Earlier detection
  - More manual classification work
```

---

## Limitations

### What the AI does well

- Suggest thresholds based on your data
- Recommend standard configurations
- Identify important fields to alert on
- Generate coherent configurations

### What the AI cannot do

- Know exact conditions of each lot
- Predict the future with certainty
- Replace expert agronomic judgment
- Guarantee all problems will be detected

:::caution[Expert validation]
AI-generated alerts are suggestions based on data and best practices. Review with your technical team before activating in production.
:::

---

## Next Steps

1. **[Farm settings](/en/alerts/farm-settings/)** - Adjust global parameters
2. **[Manage notifications](/en/alerts/manage/)** - Administer received alerts
3. **[AI Analysis](/en/analysis/ai-analysis/)** - Use AI to interpret your data
