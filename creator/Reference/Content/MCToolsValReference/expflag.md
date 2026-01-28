---
author: mammerla
ms.author: mikeam
title: "Validation Rules - Experimental Flags"
description: "Documentation for Experimental Flags validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# Experimental Flags Validation Rules
Validates experimental flags in world templates. Experiments that were enabled can affect world behavior even after being disabled.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [EXPFLAG101](#expflag101) | Experiment Active | 🟡 Warning |  |
| [EXPFLAG102](#expflag102) | Missing Level.dat | 🔴 Error |  |
| [EXPFLAG103](#expflag103) | World Not Found | 🔴 Error |  |

---
## Rule Details

### EXPFLAG101
**🟡 Experiment Active**  
**Severity**: Warning

#### What This Checks
Warning when an experimental flag is or was enabled in the world. Some experiments permanently modify world data even after being turned off.

#### How to Fix
If the experimental feature is no longer needed, you can disable it in the world settings. Note that some experiments cannot be fully reverted. For publishing, create a new world without experiments enabled.

#### Technical Details
Data contains the name of the experimental flag.

### EXPFLAG102
**🔴 Missing Level.dat**  
**Severity**: Error

#### What This Checks
Error when the world's level.dat file could not be found. The world may be corrupted or incomplete.

#### How to Fix
Ensure the world template includes a complete world folder with level.dat. If the file is missing, try re-exporting the world from Minecraft.

#### Technical Details
Data contains the expected level.dat path.

### EXPFLAG103
**🔴 World Not Found**  
**Severity**: Error

#### What This Checks
Error when the world folder could not be located. Check that the world path is correct and accessible.

#### How to Fix
Verify the world template structure includes the correct world folder path. The world should be in a subfolder matching the manifest's world_template module entry.

#### Technical Details
Data contains the expected world path.
