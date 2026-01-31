---
title: Exports
description: Generate Excel, PDF reports and configure automatic email sends to share data with your team and stakeholders.
---

Arlo allows you to export data in multiple formats for external analysis, stakeholder reports, integration with other systems, or simply for backups.

---

## Export Formats

### Excel (.xlsx)

Most versatile format for analysis.

**Features:**
- Structured data in tables
- Multiple sheets by section
- Formulas and format preserved
- Ideal for Excel/Google Sheets analysis

**Available in:**
- All modules
- Analytical reports
- Lists and catalogs

### PDF

Professional documents ready to print or share.

**Features:**
- Fixed format, not editable
- Includes farm logo
- Professional design
- Ideal for external stakeholders

**Available in:**
- Executive reports
- Service orders (field tasks)
- Harvest schedules
- Statements

### CSV

For integrations and raw data.

**Features:**
- Universal format
- No visual formatting
- Easy to process programmatically
- Ideal for importing to other systems

---

## Exports by Module

### Sanitation

| Export | Format | Content |
|--------|--------|---------|
| Route results | Excel, PDF | Captured data, photos, summary |
| Analytical reports | Excel | Trends, averages, matrices |
| Sanitation map | PDF | Map with finding markers |
| Alert history | Excel | Triggered alerts and actions |

### Field Tasks

| Export | Format | Content |
|--------|--------|---------|
| Cycle summary | Excel | All tasks, logs, costs |
| Service orders | PDF (ZIP) | One PDF per contractor |
| Payment report | Excel | Detail for accounting |
| Cycle history | Excel | Cycle comparison |

### Supplies

| Export | Format | Content |
|--------|--------|---------|
| Current inventory | Excel | Stock by warehouse |
| Kardex | Excel | Movement history |
| Valuation | Excel | Inventory × average cost |
| Period consumption | Excel | Grouped exits |

### Harvest

| Export | Format | Content |
|--------|--------|---------|
| Harvest schedule | PDF | Plan for supervisors |
| Cycle results | Excel | Planned vs. actual |
| Entry detail | Excel | Each scale entry |
| Yield by lot | Excel | Productivity analysis |

---

## How to Export

### Manual export

```
1. Go to desired module or report
2. Apply filters if needed
3. Find export button (⬇️ or "Export")
4. Select format
5. File downloads
```

### Filtering options

Before exporting, you can filter:

- **By date**: Specific range
- **By lot**: One or several lots
- **By status**: Completed, pending, etc.
- **By category**: According to module

Applied filters are reflected in the export.

---

## Automatic Email Sends

### Configure scheduled send

```
1. Go to Settings → Scheduled Sends
2. Click "New send"
3. Configure:

   Report: [Select report]
   Format: PDF / Excel
   Frequency: Daily / Weekly / Monthly
   Day: (for weekly/monthly)
   Time: (send time)
   Recipients: email1@email.com, email2@email.com
   Subject: "Weekly report - San Jose Farm"
   Message: (optional)

4. Save
```

### Available frequencies

| Frequency | Configuration |
|-----------|---------------|
| Daily | Send time |
| Weekly | Day of week + time |
| Monthly | Day of month + time |
| Custom | Cron expression (advanced) |

---

## Best Practices

### File naming

Save with descriptive names:

```
✓ Sanitation_SanJoseFarm_2025-01.xlsx
✓ LaborCosts_January2025.xlsx
✗ export.xlsx
✗ report(1).xlsx
```

### Organization

```
/Reports
  /2025
    /01-January
      Sanitation_weekly_W1.xlsx
      Sanitation_weekly_W2.xlsx
      Costs_monthly.xlsx
    /02-February
      ...
```

### Backups

- Export critical data monthly
- Store in different location than system
- Verify files open correctly

---

## Next Steps

1. **[Bulk Uploads](/en/advanced/bulk-uploads/)** - Import data to Arlo
2. **[Executive Reports](/en/analysis/executive-reports/)** - Create custom reports
3. **[Alert System](/en/alerts/overview/)** - Automate notifications
