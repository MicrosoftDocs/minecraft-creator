---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Platform Validation"
description: "Documentation for Platform Validation validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Platform Validation Validation Rules
Validates content against strict platform requirements. Identifies cases where custom content overrides vanilla Minecraft identifiers, which may cause compatibility issues or unexpected behavior.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [STRICT100](#strict100) | Entity Override | 🟡 Warning |  |
| [STRICT101](#strict101) | Runtime ID Override | 🟡 Warning |  |
| [STRICT104](#strict104) | Item Override | 🟡 Warning |  |

---
## Rule Details

### STRICT100
**🟡 Entity Override**  
**Severity**: Warning

#### What This Checks
Warning when a custom entity uses a 'minecraft:' prefixed identifier. This overrides vanilla entity behavior and may cause conflicts with Minecraft updates.

#### Technical Details
Data contains the minecraft: identifier being overridden.

### STRICT101
**🟡 Runtime ID Override**  
**Severity**: Warning

#### What This Checks
Warning when a custom entity uses a runtime_identifier that references a vanilla Minecraft entity. While useful for inheriting behaviors, it may cause unexpected interactions.

#### Technical Details
Data contains the runtime_identifier being used.

### STRICT104
**🟡 Item Override**  
**Severity**: Warning

#### What This Checks
Warning when a custom item uses a 'minecraft:' prefixed identifier. This overrides vanilla item behavior and may cause conflicts with Minecraft updates.

#### Technical Details
Data contains the minecraft: item identifier being overridden.
