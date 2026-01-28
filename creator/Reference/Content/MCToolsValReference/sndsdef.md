---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Sounds Definition"
description: "Documentation for Sounds Definition validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Sounds Definition Validation Rules
Validates sound_definitions.json files that define custom sounds for the resource pack. Ensures proper structure and references to audio files.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [SNDSDEF101](#sndsdef101) | Multiple Definitions | 🟡 Warning |  |
| [SNDSDEF102](#sndsdef102) | Invalid Structure | 🔴 Error |  |
| [SNDSDEF103](#sndsdef103) | Invalid JSON | 🔴 Error |  |
| [SNDSDEF104](#sndsdef104) | Loose Definition | 🟡 Warning |  |

---
## Rule Details

### SNDSDEF101
**🟡 Multiple Definitions**  
**Severity**: Warning

#### What This Checks
Warning when multiple sound_definitions.json files exist. Only one should exist per resource pack in the sounds/ folder.

#### Technical Details
Data contains the path to the additional sound_definitions.json file.

### SNDSDEF102
**🔴 Invalid Structure**  
**Severity**: Error

#### What This Checks
Error when sound_definitions.json has an invalid structure. Verify format_version, sound categories, and sound entry formats.

#### Technical Details
Data contains details about the structural issue.

### SNDSDEF103
**🔴 Invalid JSON**  
**Severity**: Error

#### What This Checks
Error when sound_definitions.json contains JSON syntax errors. Check for missing commas, brackets, or malformed entries.

#### Technical Details
Data contains the JSON parse error message.

### SNDSDEF104
**🟡 Loose Definition**  
**Severity**: Warning

#### What This Checks
Warning when a sound definition references a path that doesn't follow the expected folder structure. Sounds should be organized in the sounds/ folder.

#### Technical Details
Data contains the path to the loose sound definition.
