---
title: Analytical Sanitation Reports
description: Deep dive into your sanitation data with advanced charts, operation metrics, and AI-powered insights.
---

The **Analytical Reports** section is the core of your data-driven decision-making. While Map Reports give you spatial context, these reports provide the statistical depth needed to understand trends, monitor efficiency, and predict future pest behavior.

---

## 1. Findings Report (Biological Data)

This tab focuses on the actual data collected during inspections. It is divided into two main levels, matching the structure of your forms:

- **Tree Level (Emerald):** Observations made about the whole tree or finding (e.g., "Is the tree infested?").
- **Sample Level (Violet):** Detailed data points from multiple parts of the same tree (e.g., "Mite count on leaf #3").

### How Data Translates to Charts
The system automatically chooses the best way to visualize each type of question:

| Field Type | Chart Type | Features |
| :--- | :--- | :--- |
| **Checkbox (Yes/No)** | Grouped Bar Chart | Shows the % of positive findings. Includes a **secondary line** showing the total number of samples taken to provide context. |
| **Number / Calculated** | Multi-Metric Line Chart | Allows switching between **Average**, **Median**, and **Total Sum** via a dropdown in the chart corner. |
| **Select / Radio** | Stacked Bar Chart | Shows the distribution of answers (e.g., 20% Light, 50% Medium, 30% Severe). |

---

## 2. Operations Report (Monitor Efficiency)

This tab helps you manage your team and ensure the farm is being covered effectively.

### Monitor Efficiency
Tracks how your monitors are performing over time:
- **Aggregated View:** See the total farm performance (Total Trees vs. Average Time per Tree).
- **By Monitor:** Compare individual performance. Are some monitors faster than others? Is accuracy dropping when they go too fast?
- **Metrics:** Total trees inspected, number of routes, and **Average Time per Tree** (the most critical efficiency metric).

### Coverage Matrix
A "Heatmap" table showing which lots were visited in each time period.
- **Lot Status:**
    - **🟢 On Track:** Lot has been visited recently.
    - **🟡 Monitor:** Lot hasn't been visited in the last period.
    - **🔴 Needs Attention:** Lot hasn't been visited in 2 or more periods (a **Coverage Gap**).
- **Gap Alerts:** The system will automatically warn you at the top of the report if it detects lots that are being neglected.

---

## 3. Advanced Filtering & Aggregations

The filter panel allows for powerful data slicing:

### Comparing Lots vs. Aggregated Data
- **Comparison Mode:** If you select **1 to 10 lots**, the charts will show a separate line or bar for each lot, allowing for direct comparison.
- **Aggregated Mode:** If you select **more than 10 lots** (or leave it empty), the system will average the data across the whole selection to show a single "Farm Trend."

### Single Field Focus
You can choose to filter the entire report by a **Single Custom Field**. This is useful when you want to look exclusively at one specific pest or measurement without the noise of the rest of the form.

---

## 4. Alerts & Thresholds

If you have configured **Alerts** for your form:
1. Enable **"Show Alerts"** in the filters.
2. A **red dashed line** will appear on the charts representing your threshold.
3. This allows you to see at a glance when a lot crossed the "action threshold" and needs treatment.

---

## 5. Q&A Assistant (Ask AI)

The **Q&A Assistant** is a specialized AI that has access to all the data currently shown in your report. You can open it from the top right button.

- **Data Access:** It sees the findings, operation metrics, and lot context for the selected period.
- **Best Uses:**
    - *"What are the top 3 pest concerns this week?"*
    - *"Which monitor is most efficient at scouting mites?"*
    - *"Is there a correlation between inspection speed and infestation levels?"*
    - *"Summarize the coverage gaps I should worry about."*

---

## 6. Downloading Data

- **Processed Report (.xlsx):** Downloads an Excel file with the same aggregated data shown in the charts (averages, sums, etc.).
- **Raw Data (.xlsx):** Downloads every single individual data point collected by monitors. Use this for your own custom spreadsheets or external analysis.
