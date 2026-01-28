---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Script Analysis"
description: "Documentation for Script Analysis validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Script Analysis Validation Rules
Analyzes JavaScript/TypeScript script files to identify Minecraft Script API usage. Parses code to extract API references and usage patterns.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [SCRIPT101](#script101) | APIs Used | ℹ️ Info |  |

---
## Rule Details

### SCRIPT101
**ℹ️ APIs Used**  
**Severity**: Info

#### What This Checks
Tracks which Minecraft Script APIs are being used in the project. Identifies imports from @minecraft/ modules and API method calls.

#### Technical Details
Data contains the API name or method being referenced.
