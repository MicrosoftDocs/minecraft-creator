---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Particle Identifiers"
description: "Documentation for Particle Identifiers validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Particle Identifiers Validation Rules
Validates particle effect identifiers for proper namespace formatting. Particle identifiers should follow the creator:name convention.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [CPARTI101](#cparti101) | File Read Error | 🔴 Error |  |
| [CPARTI102](#cparti102) | Version Read Error | 🔴 Error |  |
| [CPARTI103](#cparti103) | Invalid Identifier | 🔴 Error |  |

---
## Rule Details

### CPARTI101
**🔴 File Read Error**  
**Severity**: Error

#### What This Checks
Error when the particle JSON file could not be read. Check file permissions and format.

#### Technical Details
Data contains the path to the unreadable file.

### CPARTI102
**🔴 Version Read Error**  
**Severity**: Error

#### What This Checks
Error when the format_version field could not be read from the particle definition.

#### Technical Details
Data contains details about the version parsing failure.

### CPARTI103
**🔴 Invalid Identifier**  
**Severity**: Error

#### What This Checks
Error when a particle identifier doesn't follow the expected namespace:name format. Use your creator namespace prefix (e.g., mypack:custom_particle).

#### Technical Details
Data contains the invalid particle identifier.
