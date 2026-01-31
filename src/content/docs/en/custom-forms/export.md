---
title: Export Responses
description: How to export custom form data to Excel for analysis, reports, and documentation.
---

Data captured in custom forms can be exported to Excel (XLSX) for external analysis, report generation, or integration with other systems.

---

## Basic Export

### Export all responses

1. Go to **Custom Forms**
2. Select the form
3. Go to the **Responses** tab
4. Click **Export** or the download icon
5. An XLSX file is generated

### File contents

The Excel file includes:

| Column | Description |
|--------|-------------|
| ID | Unique response identifier |
| Status | Draft or Completed |
| Creation date | When response was started |
| Completion date | When finalized (if applicable) |
| User | Who completed the form |
| Field 1 | First question value |
| Field 2 | Second question value |
| ... | ... |
| Field N | Last question value |

---

## Filter Before Exporting

### By date range

1. Use the date filters in the response list
2. Select start and end dates
3. List is filtered
4. Export only visible responses

### By status

- **Completed only**: Excludes drafts (default behavior)
- **Include drafts**: Check the corresponding option

### By user

If multiple users complete the form:

1. Filter by specific user
2. Export only their responses

---

## Excel File Format

### Sheet structure

**Sheet 1: Responses**
Contains all responses in tabular format, one row per response.

**Sheet 2: Metadata (if available)**
Information about the form and export:
- Form name
- Export date
- Filters applied
- Total records

### Data types

| Field type | Excel format |
|------------|--------------|
| Text | Plain text |
| Number | Number with configured decimals |
| Single selection | Option text |
| Multiple selection | Options separated by comma |
| Date | Date format (YYYY-MM-DD) |
| Time | Time format (HH:MM) |
| Photo | Image URL |
| Signature | Indicator (Yes/No) |
| Location | Coordinates (lat, lng) |

---

## Use Cases

### Audit reports

1. Export all responses for the period
2. Create a pivot table in Excel
3. Group by evaluated criteria
4. Calculate compliance percentages

### Historical tracking

1. Export responses from several periods
2. Combine in a single file
3. Create trend charts
4. Identify patterns

### Integration with other systems

1. Export data
2. Import into your management system
3. Use columns as reference for mapping

---

## Handling Photos

### Photo URLs

Photos are exported as URLs pointing to stored files.

### Download photos

URLs are valid as long as you have farm access. To download:

1. Copy the URL from the cell
2. Paste in your browser
3. Image opens/downloads

---

## Scheduled Exports

### Automatic exports

If you need regular exports (daily, weekly):

1. Contact support team
2. Automatic email sending can be configured
3. File is attached on scheduled date

---

## Best Practices

### File naming

Save files with descriptive names:

```
✓ Safety_Checklist_2025-01.xlsx
✓ BPA_Audit_January2025.xlsx
✗ export.xlsx
✗ data(1).xlsx
```

### Organization

1. Create folders by period or form type
2. Keep a master file with consolidated data
3. Document filters used in each export

### Security

- Files may contain sensitive information
- Store in secure locations
- Delete files you no longer need
- Don't share photo URLs publicly

---

## Next Steps

1. **[Create new forms](/en/custom-forms/create/)** - Design forms for other processes
2. **[AI Analysis](/en/analysis/ai-analysis/)** - Use AI to interpret your data
3. **[Executive reports](/en/analysis/executive-reports/)** - Generate reports for stakeholders
