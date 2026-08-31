---
title: Add Farms to Your Organization
description: Learn how to create additional farms within your organization in Arlo Agro.
---

An **organization** in Arlo can have multiple farms. This is useful when you manage several agricultural properties under the same company or family group.

---

## Access Your Organization

To view all farms in your organization:

1. From any farm, click **"Go to [your organization name]"** in the bottom sidebar menu
2. You'll see your organization page with all available farms

### Farm View

On the organization page you'll find:

- **Organization name** at the top
- **Farm cards** showing each farm with:
  - Farm name
  - Full address
  - Number of configured lots
  - Country

Click any card to access that farm directly.

---

## Create a New Farm

:::note[Required permissions]
Only users with **Owner** or **Admin** role can create new farms.
:::

### Steps to create a farm

1. Access your organization page
2. Click the **"Create Farm"** button in the top right corner
3. Complete the form with the new farm's information:

| Field            | Description                             |
| ---------------- | --------------------------------------- |
| **Name**         | Identifying name for the farm           |
| **Country**      | Determines timezone and currency format |
| **Region/State** | Administrative division of the country  |
| **City**         | City or municipality where it's located |
| **Address**      | Physical address of the farm            |

4. Click **"Create farm"** to finish

### After creating the farm

Once created, you'll be redirected to the new farm's **Lots** page, where you can:

- Upload your lot polygons from a GeoJSON file
- Create lots manually
- Configure information for each lot

:::tip[Initial setup]
After creating lots, remember to visit **Settings** to adjust:

- Field cycle length (ISO weeks)
- Currency for financial reports
- Other farm-specific options
  :::

---

## Switch Between Farms

There are two ways to switch between farms:

### From the user menu

1. Click your name in the bottom sidebar menu
2. Select the farm you want to switch to

### From the organization page

1. Click **"Go to [organization]"** in the sidebar menu
2. Select the farm by clicking its card

---

## Permissions and Access

Users in your organization can have different access levels to each farm:

| Role           | Create Farms | View Farms | Switch Farms |
| -------------- | ------------ | ---------- | ------------ |
| Owner          | ✓            | ✓          | ✓            |
| Admin          | ✓            | ✓          | ✓            |
| Employee       | ✗            | ✓          | ✓            |
| Monitor        | ✗            | ✓          | ✓            |
| Sales Operator | ✗            | ✓          | ✓            |

:::caution[Important]
Module permissions (Sanitation, Field Tasks, etc.) are configured per organization, not per individual farm. A user with Sanitation permissions will have access to that module across all farms in the organization.
:::

---

## Next Steps

After creating your farm, continue with the complete setup:

**[Farm Setup →](/en/getting-started/farm-setup/)**

Or add users to your organization:

**[Users & Roles →](/en/getting-started/users-roles/)**
