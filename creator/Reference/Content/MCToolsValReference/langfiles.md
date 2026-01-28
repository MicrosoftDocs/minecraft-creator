---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Language Files"
description: "Documentation for Language Files validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Language Files Validation Rules
Validates that localization files (.lang) and the languages.json catalog are properly synchronized within each pack. For each language listed in languages.json, there must be a corresponding .lang file, and vice versa. English (en_US) is always required.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [LANGFILES101](#langfiles101) | Missing Catalog | 🟡 Warning |  |
| [LANGFILES102](#langfiles102) | Missing English | 🔴 Error |  |
| [LANGFILES103](#langfiles103) | Invalid JSON | 🔴 Error |  |
| [LANGFILES104](#langfiles104) | Missing Lang File | 🔴 Error |  |
| [LANGFILES105](#langfiles105) | Orphaned Lang File | 🟡 Warning |  |

---
## Rule Details

### LANGFILES101
**🟡 Missing Catalog**  
**Severity**: Warning

#### What This Checks
The pack is missing a languages.json file in its root directory. This file is required to define which languages your pack supports. Create a languages.json file listing all supported language codes.

#### How to Fix
Create a languages.json file in your pack's root texts/ folder with an array of language codes, e.g.: ["en_US", "es_ES", "de_DE"].

#### Technical Details
Data contains the pack path missing languages.json.

### LANGFILES102
**🔴 Missing English**  
**Severity**: Error

#### What This Checks
The languages.json file does not include 'en_US' (English - United States). English is required as the primary language for all packs. Add 'en_US' to the languages array in languages.json.

#### How to Fix
Add "en_US" to the array in your languages.json file. English is required as the default fallback language for all packs.

#### Technical Details
Data contains the path to languages.json missing en_US.

### LANGFILES103
**🔴 Invalid JSON**  
**Severity**: Error

#### What This Checks
The languages.json file contains invalid JSON syntax. Verify the file has proper JSON formatting with correct brackets, quotes, and commas.

#### How to Fix
Check your languages.json file for JSON syntax errors. It should be a simple array of strings: ["en_US", "es_ES"].

#### Technical Details
Data contains the JSON parse error message.

### LANGFILES104
**🔴 Missing Lang File**  
**Severity**: Error

#### What This Checks
A language listed in languages.json does not have a corresponding .lang file. Every language code in languages.json must have a matching .lang file (e.g., 'en_US' requires 'en_US.lang').

#### How to Fix
Create the missing .lang file in the texts/ folder. For example, if you have "de_DE" in languages.json, create a texts/de_DE.lang file.

#### Technical Details
Data contains the language code missing a .lang file.

### LANGFILES105
**🟡 Orphaned Lang File**  
**Severity**: Warning

#### What This Checks
A .lang file exists in the pack but its language code is not listed in languages.json. Either add the language code to languages.json or remove the orphaned .lang file.

#### How to Fix
Either add the language code to your languages.json array, or delete the orphaned .lang file if that language isn't needed.

#### Technical Details
Data contains the orphaned .lang file name.
