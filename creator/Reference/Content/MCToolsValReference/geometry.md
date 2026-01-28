---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Model Geometry"
description: "Documentation for Model Geometry validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Model Geometry Validation Rules
Validates and analyzes model geometry files (.geo.json) for blocks, entities, and items. Tracks cube counts and complexity to identify potential performance issues.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [GEOMETRY101](#geometry101) | Block Geometry | ℹ️ Info |  |
| [GEOMETRY102](#geometry102) | Entity Geometry | ℹ️ Info |  |
| [GEOMETRY103](#geometry103) | Item Geometry | ℹ️ Info |  |
| [GEOMETRY501](#geometry501) | Complex Block | 🟡 Warning |  |

---
## Rule Details

### GEOMETRY101
**ℹ️ Block Geometry**  
**Severity**: Info

#### What This Checks
Tracks custom block geometry files found in /blocks/ folders. Reports cube counts for performance analysis.

#### Technical Details
Data contains the cube count for the block geometry.

### GEOMETRY102
**ℹ️ Entity Geometry**  
**Severity**: Info

#### What This Checks
Tracks custom entity geometry files found in /entity/ folders. Reports cube counts for complexity analysis.

#### Technical Details
Data contains the cube count for the entity geometry.

### GEOMETRY103
**ℹ️ Item Geometry**  
**Severity**: Info

#### What This Checks
Tracks custom item geometry files found in /items/ or /attachables/ folders. Reports cube counts for complexity analysis.

#### Technical Details
Data contains the cube count for the item geometry.

### GEOMETRY501
**🟡 Complex Block**  
**Severity**: Warning

#### What This Checks
Warning when a custom block has more than 50 cubes in its geometry. High cube counts can cause performance degradation, especially on lower-end devices. Consider simplifying the model or using textures instead.

#### How to Fix
Simplify the model by reducing cube count, merging adjacent cubes, or using textures with transparency instead of modeled details. Target under 50 cubes for blocks.

#### Technical Details
Data contains the cube count exceeding the threshold.
