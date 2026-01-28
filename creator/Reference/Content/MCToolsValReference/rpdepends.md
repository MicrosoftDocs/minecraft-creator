---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Resource Pack Deps"
description: "Documentation for Resource Pack Deps validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Resource Pack Deps Validation Rules
Validates that resource pack dependencies declared in behavior pack manifests are properly resolved and available.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [RPDEPENDS101](#rpdepends101) | Invalid Manifest JSON | 🔴 Error |  |
| [RPDEPENDS102](#rpdepends102) | Missing Resource Pack | 🔴 Error |  |
| [RPDEPENDS103](#rpdepends103) | Processing Error | 🔴 Error |  |

---
## Rule Details

### RPDEPENDS101
**🔴 Invalid Manifest JSON**  
**Severity**: Error

#### What This Checks
Error when a pack manifest contains invalid JSON syntax. Check for missing commas, brackets, or malformed entries.

#### Technical Details
Data contains the path to the invalid manifest file.

### RPDEPENDS102
**🔴 Missing Resource Pack**  
**Severity**: Error

#### What This Checks
Error when a behavior pack declares a dependency on a resource pack that cannot be found. Ensure the resource pack is included and the UUID matches.

#### Technical Details
Data contains the UUID of the missing resource pack dependency.

### RPDEPENDS103
**🔴 Processing Error**  
**Severity**: Error

#### What This Checks
An internal error occurred while processing resource pack dependencies. Check logs for details.

#### Technical Details
Data contains details about the internal processing error.
