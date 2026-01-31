---
title: Introduction to Custom Forms
description: Capture any additional data your farm needs with flexible forms for audits, quality checklists, and special inspections.
---

**Custom Forms** allow you to create forms to capture data that doesn't fit into Arlo's standard modules. They're ideal for audits, quality checklists, special inspections, and any process requiring structured documentation.

---

## When to Use Custom Forms?

### Typical use cases

| Case | Example |
|------|---------|
| **Internal audits** | Good agricultural practices checklist |
| **Certifications** | Organic or GlobalGAP certification inspection |
| **Safety** | PPE and working conditions review |
| **Quality** | Fruit evaluation at packing house |
| **Maintenance** | Equipment and machinery review checklist |
| **Special inventory** | Asset count not included in Supplies |

### Custom Forms vs. Sanitation?

| Feature | Sanitation | Custom Forms |
|---------|------------|--------------|
| Linked to routes and lots | ✓ | ✗ |
| GPS and tracking | ✓ | ✗ |
| Automatic alerts | ✓ | ✗ |
| Spatial analysis | ✓ | ✗ |
| General use (any topic) | ✗ | ✓ |
| No monitor required | ✗ | ✓ |
| Independent responses | ✗ | ✓ |

**Simple rule**: If it's pest/disease monitoring in the field, use Sanitation. For everything else, use Custom Forms.

---

## Form Structure

A custom form has:

### Metadata

- **Name**: Form identifier
- **Description**: Explanation of its purpose
- **Status**: Active or inactive

### Fields

Fields are the questions or data to capture. Each field has:

| Attribute | Description |
|-----------|-------------|
| **Label** | Question or field name |
| **Type** | Text, number, selection, date, photo, etc. |
| **Required** | Must be completed or is optional |
| **Options** | For selection fields, available choices |

### Dependencies (conditionals)

You can configure fields that only appear if another field has a certain value.

---

## Available Field Types

| Type | Use | Example |
|------|-----|---------|
| **Short text** | Brief answers | Inspector name |
| **Long text** | Descriptions | Detailed observations |
| **Number** | Quantities | Temperature, counts |
| **Single selection** | One option | Status: Good/Fair/Poor |
| **Multiple selection** | Several options | Problems detected |
| **Date** | Dates | Last review date |
| **Time** | Times | Start time |
| **Photo** | Images | Photographic evidence |
| **Signature** | Digital signatures | Responsible approval |
| **Location** | GPS coordinates | Inspection point |

---

## Drafts vs. Completed Responses

### Draft

- Response saved but not finalized
- Can be edited and completed later
- Doesn't appear in exports by default
- Useful for inspections taking multiple sessions

### Completed response

- Finalized and validated response
- Cannot be modified (data integrity)
- Included in exports and reports
- Completion timestamp recorded

---

## Next Steps

1. **[Create a form](/en/custom-forms/create/)** - Design your first form
2. **[Fill forms](/en/custom-forms/fill/)** - Capture responses
3. **[Export data](/en/custom-forms/export/)** - Get data in Excel
