---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Beta Features"
description: "Documentation for Beta Features validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Beta Features Validation Rules
Validates that add-on content does not use beta features flags. The 'use_beta_features' property is not allowed in entity, block, or item behavior definitions for published content. This validator scans manifest files and custom definition JSON files to detect usage of beta feature flags.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [CBFG101](#cbfg101) | File Read Error | 🔴 Error |  |
| [CBFG102](#cbfg102) | JSON Parse Error | 🔴 Error |  |
| [CBFG103](#cbfg103) | Beta Features Flag | 🔴 Error |  |

---
## Rule Details

### CBFG101
**🔴 File Read Error**  
**Severity**: Error

#### What This Checks
The validator was unable to read the file contents. This may indicate a corrupted file, encoding issues, or file system permissions problems. Ensure the file is accessible and properly formatted.

#### How to Fix
Check file permissions and ensure the file isn't locked by another program. If the file appears corrupted, try restoring from backup or recreating it.

#### Technical Details
Data contains the file path that could not be read.

### CBFG102
**🔴 JSON Parse Error**  
**Severity**: Error

#### What This Checks
The file contains invalid JSON syntax and could not be parsed. Check for missing commas, unquoted strings, trailing commas, or other JSON syntax errors. Use a JSON validator to identify the exact location of the error.

#### How to Fix
Use a JSON validator or editor with JSON syntax highlighting to find errors. Common issues: missing commas, unquoted strings, or trailing commas before closing brackets.

#### Technical Details
Data contains the JSON parse error message.

### CBFG103
**🔴 Beta Features Flag**  
**Severity**: Error

#### What This Checks
The 'use_beta_features: true' property was found in an entity, block, or item behavior definition. Beta features are experimental and not allowed in published add-on content. Remove the 'use_beta_features' property or set it to false.

#### How to Fix
Remove the 'use_beta_features' property from your entity, block, or item definition, or set it to false. Beta features cannot be used in published content.

#### Technical Details
Data contains the file path where beta features flag was found.
