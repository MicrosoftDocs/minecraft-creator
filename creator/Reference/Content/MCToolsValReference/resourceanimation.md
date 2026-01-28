---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Animation Analysis"
description: "Documentation for Animation Analysis validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Animation Analysis Validation Rules
Analyzes resource pack animation files to count animations and bone references. Used to assess animation complexity.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [RESOURCEANIMATION101](#resourceanimation101) | Animation Count | ℹ️ Info |  |
| [RESOURCEANIMATION102](#resourceanimation102) | Bone Count | ℹ️ Info |  |

---
## Rule Details

### RESOURCEANIMATION101
**ℹ️ Animation Count**  
**Severity**: Info

#### What This Checks
Count of animation definitions in resource pack animation files.

#### Technical Details
Data contains the count of animations as a number.

### RESOURCEANIMATION102
**ℹ️ Bone Count**  
**Severity**: Info

#### What This Checks
Count of bone references used across animations. More bones generally means more complex animations.

#### Technical Details
Data contains the count of bone references as a number.
