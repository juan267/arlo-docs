---
title: Supply Configuration
description: Configure how supplies behave in your farm, including currency, timezone, and stock policies.
---

Properly configuring your farm settings is the first step toward accurate inventory management. These settings ensure that your costs, timestamps, and stock levels reflect your real-world operations.

You can access these settings by navigating to **Farm → Configuration → Edit**.

---

## 1. Farm Currency

The currency you select here will be used for all supply-related transactions, including:

- **Supply Entries:** Buying unit prices and total purchase amounts.
- **WAVCO Calculations:** Average costs for both buying and consumption units.
- **Reports:** Financial insights and total inventory value.

Ensure this is set correctly before recording purchases to maintain consistency across your financial records.

---

## 2. Negative Stock Policy

One of the most critical settings in the Supply module is **"Allow Negative Supply Stock"**.

- **Disabled (Default - Recommended):** The system will prevent you from recording a **Supply Exit** if there isn't enough inventory in stock. This ensures your digital inventory matches the physical reality and forces accurate recording of entries.
- **Enabled:** You can record supply usage even if the system shows 0 units. This is useful during initial onboarding if you haven't finished recording all purchase history but need to track current field applications.

:::caution[Data Integrity]
Allowing negative stock can distort your **WAVCO (Weighted Average Cost)** calculations. We recommend keeping this disabled for professional cost tracking.
:::

---

## 3. Timezone

The farm's timezone ensures that all inventory movements (Entries, Exits, and Returns) are recorded with the correct local timestamp. This is vital for:

- **Chronological Processing:** The system processes transactions in order of time to calculate stock levels and average costs correctly.
- **Audit Trails:** Knowing exactly when a supply was received or used in the field.
- **Daily Reports:** Aligning inventory snapshots with the end of your operational day.
