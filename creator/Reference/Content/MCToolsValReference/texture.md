---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Texture Validation"
description: "Documentation for Texture Validation validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Texture Validation Validation Rules
Validates texture references across entities, blocks, items, particles, and UI elements. Tracks texture handle usage to prevent exceeding platform limits.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [TEXTURE100](#texture100) | Handle Limit Exceeded | 🔴 Error |  |
| [TEXTURE101](#texture101) | Textures | ℹ️ Info |  |

---
## Rule Details

### TEXTURE100
**🔴 Handle Limit Exceeded**  
**Severity**: Error

#### What This Checks
Error when the total number of unique texture handles exceeds platform limits. Mobile devices have lower limits than PC. Consider consolidating textures or using texture atlases.

#### How to Fix
Reduce the number of unique textures by combining small textures into texture atlases. Consider using flipbook animations instead of separate texture files. Remove unused textures from your pack.

#### Technical Details
Data contains the count of texture handles exceeding the limit.

### TEXTURE101
**ℹ️ Textures**  
**Severity**: Info

#### What This Checks
Count of unique texture paths referenced in the project from entities, blocks, items, particles, terrain_texture.json, and UI definitions.

#### Technical Details
Data contains the count of unique texture references.
