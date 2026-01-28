---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Unknown JSON"
description: "Documentation for Unknown JSON validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Unknown JSON Validation Rules
Identifies JSON files that don't match any known Minecraft content schema. Unknown JSON files may indicate misplaced content or unsupported custom formats.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [UNKJSON101](#unkjson101) | Unknown JSON Type | 🟡 Warning |  |

---
## Rule Details

### UNKJSON101
**🟡 Unknown JSON Type**  
**Severity**: Warning

#### What This Checks
Warning when a JSON file is found that doesn't match any recognized Minecraft schema. The file may be in the wrong location, use an outdated format, or be non-Minecraft content.

#### Technical Details
Data contains the path to the unrecognized JSON file.
