---
author: mammerla
ms.author: mikeam
title: "Validation Rules - File Validation"
description: "Documentation for File Validation validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# File Validation Validation Rules
Validates that content files are properly formatted and parseable. Catches JSON syntax errors and encoding issues that would prevent content from loading.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [VALFILE102](#valfile102) | Invalid JSON | 🔴 Error |  |
| [VALFILE103](#valfile103) | Empty File | 🟡 Warning |  |
| [VALFILE104](#valfile104) | Binary Content | 🔴 Error |  |

---
## Rule Details

### VALFILE102
**🔴 Invalid JSON**  
**Severity**: Error

#### What This Checks
Error when a JSON file contains syntax errors and cannot be parsed. Check for missing commas, brackets, quotes, or invalid escape sequences.

#### Technical Details
Data contains the JSON parse error message.

### VALFILE103
**🟡 Empty File**  
**Severity**: Warning

#### What This Checks
Warning when a JSON file is empty or contains only whitespace. The file may be incomplete or accidentally cleared.

#### Technical Details
Data contains the path to the empty file.

### VALFILE104
**🔴 Binary Content**  
**Severity**: Error

#### What This Checks
Error when a file expected to contain text/JSON data contains binary or non-string content. The file may be corrupted or the wrong type.

#### Technical Details
Data contains the path to the file with binary content.
