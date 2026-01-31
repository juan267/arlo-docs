---
title: Create Forms
description: Learn to design custom forms with different field types, validations, and conditional dependencies.
---

This guide takes you step by step through creating a custom form, from basic setup to advanced features like conditional dependencies.

---

## Create a New Form

### Access the module

1. Go to **Custom Forms** in the sidebar
2. Click **Create Form** or the (+) button

### Basic information

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Form title | "Safety Checklist" |
| **Description** | Purpose and use | "Daily work conditions inspection" |

---

## Add Fields

### Basic process

1. In the form editor, click **Add Field**
2. Select the field type
3. Configure field properties
4. Repeat for each needed field

### Common properties

| Property | Description |
|----------|-------------|
| **Label** | The question or name the user will see |
| **Required** | Must be completed to finalize |
| **Placeholder** | Help text inside the field |
| **Description** | Additional instructions |

---

## Field Types in Detail

### Short text

For brief single-line answers.

**Available validations:**
- Minimum/maximum length
- Pattern (regular expression)

### Long text

For extended descriptions or comments.

### Number

For quantities, measurements, or counts.

**Available validations:**
- Minimum value
- Maximum value
- Number of decimals

### Single selection

For choosing one option from a list.

**Presentation variants:**
- Dropdown (dropdown list)
- Radio buttons

### Multiple selection

For choosing several options.

### Date

For capturing dates.

### Time

For capturing times.

### Photo

For capturing images.

:::tip[Multiple photos]
You can allow multiple photos in a single field. Useful for documenting different angles or problems.
:::

### Signature

For digital signatures.

### Location

For capturing GPS coordinates.

---

## Conditional Dependencies

Dependencies allow showing or hiding fields based on previous answers.

### When to use dependencies?

- When a field only applies if another has a certain value
- To simplify long forms
- To guide the user according to their responses

### Basic example

```
Field 1: "Were problems detected?"
  Type: Single selection
  Options: Yes, No

Field 2: "Describe the problems"
  Type: Long text
  Depends on: Field 1 = "Yes"
```

In this case, field 2 only appears if the user selects "Yes" in field 1.

---

## Organize Fields

### Field order

You can reorder fields by dragging them to the desired position. The order in the editor is the order the user will see.

---

## Preview and Test

### Preview

Before publishing, use the **Preview** function to:

- See how the form will look on devices
- Test conditional dependencies
- Verify required fields are correct

### Test with real data

1. Save the form
2. Create a test response
3. Verify everything works as expected
4. Delete the test response if needed

---

## Activate and Deactivate

### Active status

- Form is available for creating responses
- Appears in available forms list

### Inactive status

- Form cannot receive new responses
- Existing responses are maintained
- Useful for temporary or under-review forms

---

## Next Steps

1. **[Fill forms](/en/custom-forms/fill/)** - Capture responses
2. **[Export data](/en/custom-forms/export/)** - Get data for analysis
