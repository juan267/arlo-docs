---
title: Sanitation Forms Guide
description: Learn how to create and configure inspection forms for your farm.
---

Sanitation Forms are the heart of your monitoring system. They define exactly what data will be collected in the field, how many trees will be inspected, and what specific details are important for your crops.

## Understanding Sampling Modes

The most important decision when creating a form is choosing the **Sampling Mode**. This tells the system how the inspector should walk the lot.

### 1. Closed-Ended (Fixed Sampling)
**Use this for:** Systematic monitoring of pests, diseases, or fruit quality.
- **How it works:** You set a percentage (e.g., 2% of the lot). If a lot has 500 trees, the system will ask the monitor to visit exactly 10 trees.
- **Goal:** Get a statistically representative view of the entire lot.

### 2. Open-Ended (Discovery Logging)
**Use this for:** Logging things as they are found, like ant nests, traps, or specific damage spots.
- **How it works:** The monitor walks through the lot and logs an entry every time they find something. There is no fixed number of trees to visit.
- **Goal:** Map the exact locations and details of specific findings.

---

## Form Configuration Settings

When you create or edit a form, you will see several configuration options:

| Setting | Description |
| :--- | :--- |
| **Name** | A clear name like "Mite Monitoring" or "Ant Nest Census". |
| **Color** | Choose a color to help identify this form in the dashboard and mobile app. |
| **Lot Tree Percentage** | (Closed-ended only) The percentage of trees in a lot that must be inspected (usually 1% to 5%). |
| **Number of Tree Sections** | How many parts the tree is divided into (e.g., 4 for North, South, East, West). |
| **Samples per Section** | How many data points to collect in each section (e.g., 2 leaves per section). |
| **Open-Ended Samples** | If enabled, the monitor can decide how many samples to take at each spot instead of following a fixed number. |

---

## Build with AI

If you're not sure how to structure your form, you can use the **AI Wizard**. 

1. Click on **Build with AI**.
2. Tell the AI what you want to monitor (e.g., "I want to check for Red Mites in my Avocado finca").
3. The AI will suggest the best sampling mode, tree sections, and custom fields based on agricultural best practices.
4. You can review and adjust the suggested form before saving it.

---

## Form Levels: Where to Put Your Questions?

Every form is organized into three distinct levels. Choosing the right level for each question is crucial for accurate data and clear reports.

### 1. Route Level (Once per Inspection)
These are questions that apply to the **entire job** or the whole lot being visited.
- **When to use:** For general context that doesn't change from tree to tree.
- **Examples:**
  - Weather conditions (Sunny, Raining, Windy).
  - General state of the lot (Clean, Weedy).
  - Overall irrigation status.

### 2. Tree Level (Once per Tree or Finding)
These are questions about the **specific spot or tree** the monitor is standing in front of.
- **When to use:** For observations that apply to the whole plant or the specific "discovery" (in open-ended forms).
- **Examples:**
  - **Closed-ended:** Overall tree vigor (High, Medium, Low), presence of trunk disease.
  - **Open-ended:** Size of an ant nest, activity level of a trap.

### 3. Sample Level (Multiple times per Tree)
These are the most detailed questions. They are answered for **every individual sample** taken from a tree.
- **When to use:** When you need to collect multiple data points from different parts of the same tree to get an average.
- **Examples:**
  - Number of mites found on a single leaf (when checking 4 leaves per tree).
  - Fruit diameter (when measuring 5 fruits per tree).
  - Pest count on a specific branch.

---

## Decision Guide: Tree vs. Sample Level

A common question is: *"Should I put this in the Tree level or the Sample level?"*

| If you are asking... | Use this Level | Why? |
| :--- | :--- | :--- |
| "Is this tree sick?" | **Tree Level** | It's a single "Yes/No" for the whole plant. |
| "How many bugs on this leaf?" | **Sample Level** | You will check several leaves on the same tree. |
| "What is the nest size?" | **Tree Level** | In open-ended forms, the "Tree" is the nest itself. |
| "What's the fruit color?" | **Sample Level** | You are evaluating multiple fruits per tree. |

:::tip[Pro Tip for Reports]
Data at the **Sample Level** is automatically averaged or totaled to give you a "Tree Score." Data at the **Tree Level** tells you how many trees in the finca are affected.
:::

---

## Real-World Form Examples

To help you visualize these concepts, here are two examples based on actual Arlo configurations:

### Example 1: Mite Monitoring (Closed-Ended)
This form is used for a systematic weekly inspection to understand the average infestation level across the entire lot.

*   **General Configuration:**
    *   **Mode:** Closed-Ended (Fixed Sampling).
    *   **Lot Tree Percentage:** 1.5% (In a lot of 1,000 trees, 15 are visited).
    *   **Sections:** 4 (North, South, East, West).
    *   **Samples per Section:** 4 (4 leaves per section).
*   **Custom Fields:**
    *   **Route Level:** Weather (Sunny, Cloudy, Raining).
    *   **Tree Level:** Tree vigor (High, Medium, Low).
    *   **Sample Level:** Mite count (Number).

### Example 2: Ant Monitoring (Open-Ended)
This form is used to walk the lot and log every ant nest found for treatment.

*   **General Configuration:**
    *   **Mode:** Open-Ended (Discovery Logging).
    *   **Sections:** 1 (No sections needed, the finding is the center point).
    *   **Samples per Section:** 1 (A single entry for each nest found).
*   **Custom Fields:**
    *   **Route Level:** Observer (Name of the monitor).
    *   **Tree Level (Finding):**
        *   Nest size (Small, Medium, Large).
        *   Status (Active, Treated).
        *   Nest Photo (File/Photo).
