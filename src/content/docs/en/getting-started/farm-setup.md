---
title: Farm Setup
description: Learn how to create and configure your farm in Arlo Agro, including uploading georeferenced lots and operational parameters.
---

Your farm's initial setup is the foundation for everything you'll do in Arlo. A good configuration will save you time and prevent problems later.

---

## 1. Create Your Farm

When you first log in, you'll be prompted to create a farm. If you already have access to an existing farm, you can create additional farms from the farm selector at the top.

### Basic Information

- **Farm Name**: The name that will identify your farm throughout the platform
- **Country**: Sets timezone and currency format
- **Currency**: For labor costs, supplies, and financial reports

---

## 2. Configure Your Lots

**Lots** are the fundamental geographic units of your farm. Everything in Arlo is organized by lot: sanitation inspections, field tasks, harvests, and inventory.

### Upload Lots from GeoJSON

The most accurate way to set up your lots is by uploading a GeoJSON file with each lot's polygons.

**File requirements:**
- Format: GeoJSON (`.geojson` or `.json`)
- Coordinate system: **WGS 84 (EPSG:4326)**
- Each Feature must have a `name` property for the lot name

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "North Lot A"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[...], [...], [...]]]
      }
    }
  ]
}
```

:::caution[Important]
Make sure your file uses the WGS 84 (EPSG:4326) coordinate system. If your data is in another system (like UTM), you'll need to convert it before uploading.
:::

### Create Lots Manually

If you don't have a GeoJSON file, you can create lots manually:

1. Go to **Farm → Lots**
2. Click **Add Lot**
3. Enter the lot name and area
4. Optionally, draw the polygon on the map

### Lot Information

For each lot you can record:
- **Name**: Unique lot identifier
- **Code**: Short code for internal use
- **Area**: Hectares or your preferred unit
- **Crop**: Type of crop planted
- **Variety**: Specific variety
- **Planting year**: To calculate crop age
- **Plant count**: Total trees or plants

---

## 3. General Farm Settings

Navigate to **Farm → Settings** to adjust operational parameters.

### Field Tasks Settings

| Parameter | Description | Default Value |
|-----------|-------------|---------------|
| **Field Cycle Duration** | Number of days for each work cycle | 15 days |

The **field cycle duration** automatically determines the end date when you create a new cycle. For example, if you set 15 days and create a cycle starting January 1st, the end date will automatically be January 15th.

:::tip[Common rhythms]
- **15 days**: Ideal for bi-weekly payroll or contractor payments every two weeks
- **30 days**: For monthly operational planning
- **7 days**: For operations requiring intensive weekly tracking
:::

### Harvest Settings

- **Weight units**: Kilograms, pounds, tons
- **Yield tolerance**: Percentage to determine if harvest is "on target"

### Inventory Settings

- **Costing method**: WAVCO (Weighted Average Cost)
- **Warehouses**: Define storage locations

---

## 4. Module Configurations

Each module has its own initial setup:

### Sanitation
- Register monitors (field inspectors)
- Create inspection forms
- Define alerts and thresholds

### Field Tasks
- Register contractors
- Create field task catalog
- Define default prices

### Supplies
- Configure warehouses
- Register providers
- Create supply catalog

### Harvest
- Register vehicles with empty weight
- Define harvest units (baskets, crates)
- Create harvest groups

---

## 5. Configuration Verification

Before starting operations, verify that you have:

- [ ] At least one lot configured with area
- [ ] Correct timezone for your location
- [ ] Currency configured for financial reports
- [ ] Field cycle duration set according to your payment rhythm

---

## Next Steps

With your farm configured, the next step is to add your team:

**[Users & Roles →](/en/getting-started/users-roles/)**

:::note[Need help?]
If you have GeoJSON files from other platforms or need to convert formats, the support team can assist with data migration.
:::
