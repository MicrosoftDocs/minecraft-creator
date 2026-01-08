---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:mcfunction"
description: "Describes the minecraft:mcfunction mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:mcfunction

Validates .mcfunction files for correct command syntax and formatting. MCFunction files contain Minecraft commands that execute in behavior packs.


## MC Functions Validation Rules


### MCFUNCTION102: Invalid Syntax

**Rule ID:** `MCFUNCTION102`

**Severity:** Info

**What it checks:** Error when a command in the .mcfunction file has invalid syntax. Verify the command follows Minecraft Bedrock Edition command format and all arguments are correct.

**How to fix:** Check your command syntax against the Minecraft Bedrock command reference at docs.microsoft.com. Common issues include misspelled commands, wrong argument order, or using Java Edition syntax.

**Technical details:** Data contains the invalid command text.


### MCFUNCTION103: Leading Slash

**Rule ID:** `MCFUNCTION103`

**Severity:** Info

**What it checks:** Warning when a command line starts with a forward slash (/). Unlike in-game chat, .mcfunction files should not have leading slashes on commands.

**How to fix:** Remove the leading slash (/) from the command. In .mcfunction files, commands should start directly with the command name, e.g., 'say Hello' instead of '/say Hello'.

**Technical details:** Data contains the command with leading slash.
