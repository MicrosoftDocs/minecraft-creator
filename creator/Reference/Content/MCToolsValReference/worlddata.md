---
author: mammerla
ms.author: mikeam
title: "MCTools Validation Rules Documentation - minecraft:worlddata"
description: "Describes the minecraft:worlddata mctools validation rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# MCTools Validation Rules Documentation - minecraft:worlddata

Analyzes world data including LevelDB chunks, command blocks, level.dat settings, and coordinates. Identifies command usage patterns and potential issues in saved world data.


## World Data Validation Rules


### WORLDDATA101: Function Command

**Rule ID:** `WORLDDATA101`

**Severity:** Info

**What it checks:** Warning when a potentially problematic command is found in an MCFunction file. Some commands may have unintended effects in certain contexts.

**Technical details:** Data contains the problematic command text.


### WORLDDATA102: Block Command

**Rule ID:** `WORLDDATA102`

**Severity:** Info

**What it checks:** Warning when a potentially problematic command is found in a command block. Some commands may cause issues when run from command blocks.

**Technical details:** Data contains the command block command text.


### WORLDDATA103: Min X

**Rule ID:** `WORLDDATA103`

**Severity:** Info

**What it checks:** The minimum X coordinate of loaded chunks in the world. Used to determine world boundaries.

**Technical details:** Data contains the minimum X coordinate as a number.


### WORLDDATA104: Min Z

**Rule ID:** `WORLDDATA104`

**Severity:** Info

**What it checks:** The minimum Z coordinate of loaded chunks in the world. Used to determine world boundaries.

**Technical details:** Data contains the minimum Z coordinate as a number.


### WORLDDATA105: Max X

**Rule ID:** `WORLDDATA105`

**Severity:** Info

**What it checks:** The maximum X coordinate of loaded chunks in the world. Used to determine world boundaries.

**Technical details:** Data contains the maximum X coordinate as a number.


### WORLDDATA106: Max Z

**Rule ID:** `WORLDDATA106`

**Severity:** Info

**What it checks:** The maximum Z coordinate of loaded chunks in the world. Used to determine world boundaries.

**Technical details:** Data contains the maximum Z coordinate as a number.


### WORLDDATA112: World Command

**Rule ID:** `WORLDDATA112`

**Severity:** Info

**What it checks:** Warning when commands that affect the entire world are detected, such as weather, time, or gamerule commands.

**Technical details:** Data contains the world-impacting command text.


### WORLDDATA121: Block Types

**Rule ID:** `WORLDDATA121`

**Severity:** Info

**What it checks:** Tracks block types found in the world data for content analysis.

**Technical details:** Data contains the block type identifier.


### WORLDDATA122: Block States

**Rule ID:** `WORLDDATA122`

**Severity:** Info

**What it checks:** Tracks block data values and states found in the world.

**Technical details:** Data contains the block state data.


### WORLDDATA123: Command

**Rule ID:** `WORLDDATA123`

**Severity:** Info

**What it checks:** Tracks individual commands found in the world (from command blocks, etc.) for analysis.

**Technical details:** Data contains the command text.


### WORLDDATA124: Execute Subcommand

**Rule ID:** `WORLDDATA124`

**Severity:** Info

**What it checks:** Tracks subcommands used within /execute commands for complexity analysis.

**Technical details:** Data contains the execute subcommand text.


### WORLDDATA125: Level.dat Info

**Rule ID:** `WORLDDATA125`

**Severity:** Info

**What it checks:** Information extracted from the level.dat file, including world settings and properties.

**Technical details:** Data contains level.dat property information.


### WORLDDATA126: Experiments

**Rule ID:** `WORLDDATA126`

**Severity:** Info

**What it checks:** Experiments enabled in the world's level.dat file.

**Technical details:** Data contains the experiment name.


### WORLDDATA127: Empty Chunks

**Rule ID:** `WORLDDATA127`

**Severity:** Info

**What it checks:** Count of chunks that have no subchunk data. May indicate empty or corrupted chunks.

**Technical details:** Data contains the count of empty chunks.


### WORLDDATA128: Chunk Count

**Rule ID:** `WORLDDATA128`

**Severity:** Info

**What it checks:** Total number of chunks in the world.

**Technical details:** Data contains the total chunk count.


### WORLDDATA212: Outdated Command

**Rule ID:** `WORLDDATA212`

**Severity:** Info

**What it checks:** Warning when a command uses syntax from an older Minecraft version. Consider updating to current command syntax.

**Technical details:** Data contains the outdated command text.


### WORLDDATA400: Processing Error

**Rule ID:** `WORLDDATA400`

**Severity:** Info

**What it checks:** Error when the world data could not be fully processed. May indicate corruption or unsupported format.

**Technical details:** Data contains details about the processing error.


### WORLDDATA401: Unexpected Error

**Rule ID:** `WORLDDATA401`

**Severity:** Info

**What it checks:** An unexpected error occurred while processing world data. Check logs for details.

**Technical details:** Data contains the error message.
