---
title: Introduction to Supplies
description: Inventory control for fertilizers, agrochemicals, and agricultural materials using the WAVCO weighted average cost method.
---

The Supplies module allows you to manage inventory of fertilizers, agrochemicals, seeds, and other materials your farm uses, with complete traceability from purchase to field consumption.

---

## The Agricultural Inventory Problem

Farms handle dozens of different products: fertilizers, fungicides, insecticides, herbicides, packaging materials, fuels. Without a control system:

- **Surprise stockouts**: You run out of a critical product at the worst time
- **Overstock**: Capital tied up in products that expire before use
- **Unknown costs**: Don't know actual application cost per hectare
- **Undetected losses**: Differences between theoretical and physical inventory

### The Arlo Approach

Arlo implements a perpetual inventory system with:

1. **Warehouses**: Physical storage locations
2. **Supply catalog**: Products with purchase and consumption units
3. **Movements**: Entries (purchases) and exits (consumption)
4. **WAVCO costing**: Automatic weighted average cost

---

## Key Concept: WAVCO

**WAVCO** (Weighted Average Cost) is the costing method Arlo uses to value inventory.

### How does it work?

Every time you purchase a product, the system recalculates the average cost:

```
Example: NPK Fertilizer

Purchase 1: 100 kg at $10/kg = $1,000
  → Average cost: $10/kg

Purchase 2: 50 kg at $12/kg = $600
  → Total inventory: 150 kg
  → Total cost: $1,600
  → New average cost: $1,600 / 150 = $10.67/kg

Exit: 30 kg for application
  → Exit cost: 30 × $10.67 = $320
  → Remaining inventory: 120 kg at $10.67/kg
```

### Why WAVCO?

- **Simple**: No need to track individual lots
- **Realistic**: Cost reflects all purchases, not just first or last
- **Standard**: Method accepted by international accounting standards
- **Automatic**: Arlo does the calculation for you

---

## Module Structure

### Configuration

| Component | Purpose |
|-----------|---------|
| **Warehouses** | Storage locations (central warehouse, field warehouse, etc.) |
| **Providers** | Companies that sell you supplies |
| **Catalog** | Products with units and conversions |

### Movements

| Component | Purpose |
|-----------|---------|
| **Entries** | Record purchases and receive inventory |
| **Exits** | Record field consumption |
| **Rebalancing** | Adjustments for inventory differences |

---

## Purchase vs. Consumption Units

An important concept in Arlo is the distinction between:

### Purchase unit
How you buy the product from the provider.
- Example: 50 kg bags, gallons, 200 L drums

### Consumption unit
How you use the product in the field.
- Example: Kilograms, liters, grams

### Conversion factor

When creating a supply, you define the conversion:

```
Supply: Triple 15 Fertilizer
- Purchase unit: Bag
- Consumption unit: Kilogram
- Conversion factor: 1 bag = 50 kg

When you buy 10 bags:
- Entry recorded: 10 bags × $500 = $5,000
- System inventory: 500 kg at $10/kg

When you use 25 kg:
- Exit recorded: 25 kg
- Exit cost: 25 × $10 = $250
```

---

## Link with Field Tasks

A powerful feature is linking inventory exits with field tasks.

### Example

```
Task: Fertilization - North Lot
  - Contractor: Garcia
  - Quantity: 100 trees

Linked supply exit:
  - Product: NPK Fertilizer
  - Quantity: 50 kg
  - Linked to: Task "Fertilization - North Lot"
```

This allows:
- Calculate total task cost (labor + supplies)
- Know how much supply was used per tree/hectare
- Detect deviations in expected consumption

---

## Next Steps

1. **[Configure warehouses](/en/supplies/configuration/)** - Define storage locations
2. **[Register providers](/en/supplies/providers/)** - Your supply sources
3. **[Create the catalog](/en/supplies/catalog/)** - Products with units and conversions
4. **[Record your first entry](/en/supplies/entries/)** - Start controlling inventory
