---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:vscodefile"
description: "Describes the minecraft:vscodefile mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:vscodefile

Validates VS Code configuration files (tasks.json, launch.json) in projects. Checks for proper Minecraft-related task and debug configurations.


## VS Code Files Validation Rules


### VSCODEFILE100: No Deploy Tasks

**Rule ID:** `VSCODEFILE100`

**Severity:** Recommendation

**What it checks:** The project contains a .vscode/tasks.json file but does not have any Minecraft deployment tasks configured. Consider adding tasks for deploying to Minecraft.


### VSCODEFILE101: No Debug Config

**Rule ID:** `VSCODEFILE101`

**Severity:** Recommendation

**What it checks:** The project contains a .vscode/launch.json file but is not configured for launching a Minecraft Dedicated Server debug session. Consider adding a debug configuration.
