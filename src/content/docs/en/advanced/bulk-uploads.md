---
title: Bulk Uploads
description: How to import batch data to Arlo using CSV and Excel files for initial setup or migrations.
---

**Bulk uploads** allow you to import large amounts of data to Arlo at once, instead of registering each item manually. Especially useful for initial setup or migration from other systems.

---

## When to Use Bulk Uploads?

### Typical use cases

| Scenario | Example |
|----------|---------|
| **Initial setup** | Upload 50 lots with detailed information |
| **Migration** | Import catalog of 200 supplies from previous system |
| **Mass update** | Update prices for all tasks |
| **Historical load** | Import harvest data from previous months |

### When NOT to use?

- For few records (< 10): Faster manually
- Data requiring one-by-one validation
- When you don't have a structured file

---

## Data That Can Be Bulk Uploaded

| Module | Importable data |
|--------|-----------------|
| **Farm** | Lots with GeoJSON coordinates |
| **Sanitation** | Monitors |
| **Field Tasks** | Contractors, Field tasks, Cycle tasks |
| **Supplies** | Providers, Supply catalog, Inventory entries |
| **Harvest** | Vehicles, Units, Groups, Historical entries |

---

## Supported Formats

### Excel (.xlsx)

Recommended format for most users.

```
✓ Easy to edit in Excel/Google Sheets
✓ Supports special characters
✓ Can have multiple sheets
```

### CSV (.csv)

For automated integrations or very large files.

```
✓ Universal format
✓ Smaller files
✓ Easy to generate from other systems

⚠️ Use UTF-8 encoding for special characters
```

### GeoJSON (.geojson)

Exclusive for importing lots with geometry.

```
✓ Includes polygons for each lot
✓ Geospatial standard
✓ Must be WGS 84 (EPSG:4326)
```

---

## General Process

### 1. Download template

```
1. Go to corresponding module
2. Find "Import" or "Bulk upload" option
3. Click "Download template"
4. File downloads with correct columns
```

### 2. Fill the template

```
1. Open in Excel or Google Sheets
2. Review instructions ("Instructions" sheet)
3. Fill data following the format
4. Don't modify headers
5. Save in original format (.xlsx or .csv)
```

### 3. Validate before uploading

```
Manual checks:
  □ All required columns have data
  □ Correct formats (dates, numbers)
  □ No empty intermediate rows
  □ Unique codes not duplicated
```

### 4. Upload the file

```
1. Go to "Import" in the module
2. Select your file
3. Click "Validate"
4. Review validation summary
5. If errors, correct and retry
6. If everything OK, click "Import"
```

### 5. Verify results

```
1. Review import summary
2. Spot-check some records manually
3. If problems, use error report
```

---

## Best Practices

### Before importing

1. **Backup** existing data (export first)
2. **Test with few records** before complete load
3. **Validate file** with Arlo tool
4. **Review summary** before confirming

### Large files

1. Divide into batches of 500-1000 records
2. Import one batch, verify, continue
3. Avoid importing during peak usage hours

### After importing

1. Spot-check records manually
2. Test that references work
3. Document the import performed

---

## Next Steps

1. **[Exports](/en/advanced/exports/)** - Extract data from Arlo
2. **[Farm Setup](/en/getting-started/farm-setup/)** - Initial configuration
3. **[Supply Catalog](/en/supplies/catalog/)** - After importing
