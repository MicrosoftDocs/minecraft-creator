---
author: mammerla
ms.author: mikeam
title: "Validation Rules - MC Functions"
description: "Documentation for MC Functions validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# MC Functions Validation Rules
Validates .mcfunction files for correct command syntax and formatting. MCFunction files contain Minecraft commands that execute in behavior packs.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [MCFUNCTION102](#mcfunction102) | Invalid Syntax | 🔴 Error |  |
| [MCFUNCTION103](#mcfunction103) | Leading Slash | 🟡 Warning |  |

---
## Rule Details

### MCFUNCTION102
**🔴 Invalid Syntax**  
**Severity**: Error

#### What This Checks
Error when a command in the .mcfunction file has invalid syntax. Verify the command follows Minecraft Bedrock Edition command format and all arguments are correct.

#### How to Fix
Check your command syntax against the Minecraft Bedrock command reference at docs.microsoft.com. Common issues include misspelled commands, wrong argument order, or using Java Edition syntax.

#### Technical Details
Data contains the invalid command text.

### MCFUNCTION103
**🟡 Leading Slash**  
**Severity**: Warning

#### What This Checks
Warning when a command line starts with a forward slash (/). Unlike in-game chat, .mcfunction files should not have leading slashes on commands.

#### How to Fix
Remove the leading slash (/) from the command. In .mcfunction files, commands should start directly with the command name, e.g., 'say Hello' instead of '/say Hello'.

#### Technical Details
Data contains the command with leading slash.
