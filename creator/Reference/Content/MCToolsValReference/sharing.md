---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Sharing Validation"
description: "Documentation for Sharing Validation validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Sharing Validation Validation Rules
Validates content for sharing and marketplace requirements. Identifies custom capabilities and potentially problematic content that may affect distribution.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [SHARING100](#sharing100) | Custom Capabilities | ℹ️ Info |  |
| [SHARING101](#sharing101) | Strong Language | 🟡 Warning |  |

---
## Rule Details

### SHARING100
**ℹ️ Custom Capabilities**  
**Severity**: Info

#### What This Checks
Information about custom capabilities the pack requires (experiments, Beta APIs, etc.). Some capabilities may limit where content can be shared.

#### Technical Details
Data contains the name of the custom capability required.

### SHARING101
**🟡 Strong Language**  
**Severity**: Warning

#### What This Checks
Warning when content may contain strong language.

#### Technical Details
Data contains the text or location where strong language was detected.
