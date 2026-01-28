---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Texture References"
description: "Documentation for Texture References validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Texture References Validation Rules
Collects and aggregates all texture references from across the project including entity textures, block textures, particle effects, and UI elements.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [TEXTUREREF101](#textureref101) | Reference List | ℹ️ Info |  |

---
## Rule Details

### TEXTUREREF101
**ℹ️ Reference List**  
**Severity**: Info

#### What This Checks
Aggregated list of all texture file references found in the project. Used to verify that referenced textures exist and are properly formatted.

#### Technical Details
Data contains the texture path being referenced.
