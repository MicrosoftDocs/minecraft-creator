---
author: mammerla
ms.author: mikeam
title: "Validation Rules - VS Code Files"
description: "Documentation for VS Code Files validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# VS Code Files Validation Rules
Validates VS Code configuration files (tasks.json, launch.json) in projects. Checks for proper Minecraft-related task and debug configurations.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [VSCODEFILE100](#vscodefile100) | No Deploy Tasks | 🔵 Recommendation |  |
| [VSCODEFILE101](#vscodefile101) | No Debug Config | 🔵 Recommendation |  |

---
## Rule Details

### VSCODEFILE100
**🔵 No Deploy Tasks**  
**Severity**: Recommendation

#### What This Checks
The project contains a .vscode/tasks.json file but does not have any Minecraft deployment tasks configured. Consider adding tasks for deploying to Minecraft.

### VSCODEFILE101
**🔵 No Debug Config**  
**Severity**: Recommendation

#### What This Checks
The project contains a .vscode/launch.json file but is not configured for launching a Minecraft Dedicated Server debug session. Consider adding a debug configuration.
