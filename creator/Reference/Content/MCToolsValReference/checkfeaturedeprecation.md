---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Deprecated Features"
description: "Documentation for Deprecated Features validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Deprecated Features Validation Rules
Checks for deprecated features, blocks, and textures that may be removed in future Minecraft versions. Update deprecated content to ensure long-term compatibility.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [CHECKFEATUREDEPRECATION101](#checkfeaturedeprecation101) | Deprecated Block | 🟡 Warning |  |
| [CHECKFEATUREDEPRECATION102](#checkfeaturedeprecation102) | Deprecated Terrain | 🟡 Warning |  |
| [CHECKFEATUREDEPRECATION103](#checkfeaturedeprecation103) | Deprecated Texture | 🟡 Warning |  |
| [CHECKFEATUREDEPRECATION104](#checkfeaturedeprecation104) | JSON Parse Error | 🔴 Error |  |

---
## Rule Details

### CHECKFEATUREDEPRECATION101
**🟡 Deprecated Block**  
**Severity**: Warning

#### What This Checks
Warning when overriding a deprecated vanilla block. The block may be removed in future versions, breaking your content.

#### Technical Details
Data contains the deprecated block identifier.

### CHECKFEATUREDEPRECATION102
**🟡 Deprecated Terrain**  
**Severity**: Warning

#### What This Checks
Warning when referencing a deprecated terrain texture name. Update to the current texture identifier.

#### Technical Details
Data contains the deprecated terrain texture name.

### CHECKFEATUREDEPRECATION103
**🟡 Deprecated Texture**  
**Severity**: Warning

#### What This Checks
Warning when using a deprecated texture path. Update to the current texture location.

#### Technical Details
Data contains the deprecated texture path.

### CHECKFEATUREDEPRECATION104
**🔴 JSON Parse Error**  
**Severity**: Error

#### What This Checks
Error when a JSON file could not be parsed during deprecation checking.

#### Technical Details
Data contains the JSON parse error message.
