---
author: mammerla
ms.author: mikeam
title: "Validation Rules - BOM Validation"
description: "Documentation for BOM Validation validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# BOM Validation Validation Rules
Validates that JSON files do not contain byte order marks (BOM). BOMs can cause parsing failures in Minecraft.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [NOBOM101](#nobom101) | BOM Detected | 🔴 Error |  |

---
## Rule Details

### NOBOM101
**🔴 BOM Detected**  
**Severity**: Error

#### What This Checks
Error when a JSON file begins with a UTF-8 BOM (byte order mark). Minecraft cannot parse JSON files with BOMs. Re-save the file as UTF-8 without BOM using a text editor.

#### How to Fix
Open the file in VS Code or Notepad++ and save it as 'UTF-8' (not 'UTF-8 with BOM'). In VS Code, click the encoding in the status bar and select 'Save with Encoding' → 'UTF-8'.

#### Technical Details
Data contains the path to the file with BOM.
