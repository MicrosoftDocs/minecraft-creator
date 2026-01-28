---
author: mammerla
ms.author: mikeam
title: "Validation Rules - World Data"
description: "Documentation for World Data validation rules in Minecraft Creator Tools"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---
# World Data Validation Rules
Analyzes world data including LevelDB chunks, command blocks, level.dat settings, and coordinates. Identifies command usage patterns and potential issues in saved world data.
## Rules Summary
| Rule ID | Rule | Severity | Auto-Fix |
|:--------|:-----|:---------|:---------|
| [WORLDDATA101](#worlddata101) | Function Command | 🟡 Warning |  |
| [WORLDDATA102](#worlddata102) | Block Command | 🟡 Warning |  |
| [WORLDDATA103](#worlddata103) | Min X | ℹ️ Info |  |
| [WORLDDATA104](#worlddata104) | Min Z | ℹ️ Info |  |
| [WORLDDATA105](#worlddata105) | Max X | ℹ️ Info |  |
| [WORLDDATA106](#worlddata106) | Max Z | ℹ️ Info |  |
| [WORLDDATA112](#worlddata112) | World Command | 🟡 Warning |  |
| [WORLDDATA121](#worlddata121) | Block Types | ℹ️ Info |  |
| [WORLDDATA122](#worlddata122) | Block States | ℹ️ Info |  |
| [WORLDDATA123](#worlddata123) | Command | ℹ️ Info |  |
| [WORLDDATA124](#worlddata124) | Execute Subcommand | ℹ️ Info |  |
| [WORLDDATA125](#worlddata125) | Level.dat Info | ℹ️ Info |  |
| [WORLDDATA126](#worlddata126) | Experiments | ℹ️ Info |  |
| [WORLDDATA127](#worlddata127) | Empty Chunks | ℹ️ Info |  |
| [WORLDDATA128](#worlddata128) | Chunk Count | ℹ️ Info |  |
| [WORLDDATA212](#worlddata212) | Outdated Command | 🟡 Warning |  |
| [WORLDDATA400](#worlddata400) | Processing Error | 🔴 Error |  |
| [WORLDDATA401](#worlddata401) | Unexpected Error | 🔴 Error |  |

---
## Rule Details

### WORLDDATA101
**🟡 Function Command**  
**Severity**: Warning

#### What This Checks
Warning when a potentially problematic command is found in an MCFunction file. Some commands may have unintended effects in certain contexts.

#### Technical Details
Data contains the problematic command text.

### WORLDDATA102
**🟡 Block Command**  
**Severity**: Warning

#### What This Checks
Warning when a potentially problematic command is found in a command block. Some commands may cause issues when run from command blocks.

#### Technical Details
Data contains the command block command text.

### WORLDDATA103
**ℹ️ Min X**  
**Severity**: Info

#### What This Checks
The minimum X coordinate of loaded chunks in the world. Used to determine world boundaries.

#### Technical Details
Data contains the minimum X coordinate as a number.

### WORLDDATA104
**ℹ️ Min Z**  
**Severity**: Info

#### What This Checks
The minimum Z coordinate of loaded chunks in the world. Used to determine world boundaries.

#### Technical Details
Data contains the minimum Z coordinate as a number.

### WORLDDATA105
**ℹ️ Max X**  
**Severity**: Info

#### What This Checks
The maximum X coordinate of loaded chunks in the world. Used to determine world boundaries.

#### Technical Details
Data contains the maximum X coordinate as a number.

### WORLDDATA106
**ℹ️ Max Z**  
**Severity**: Info

#### What This Checks
The maximum Z coordinate of loaded chunks in the world. Used to determine world boundaries.

#### Technical Details
Data contains the maximum Z coordinate as a number.

### WORLDDATA112
**🟡 World Command**  
**Severity**: Warning

#### What This Checks
Warning when commands that affect the entire world are detected, such as weather, time, or gamerule commands.

#### Technical Details
Data contains the world-impacting command text.

### WORLDDATA121
**ℹ️ Block Types**  
**Severity**: Info

#### What This Checks
Tracks block types found in the world data for content analysis.

#### Technical Details
Data contains the block type identifier.

### WORLDDATA122
**ℹ️ Block States**  
**Severity**: Info

#### What This Checks
Tracks block data values and states found in the world.

#### Technical Details
Data contains the block state data.

### WORLDDATA123
**ℹ️ Command**  
**Severity**: Info

#### What This Checks
Tracks individual commands found in the world (from command blocks, etc.) for analysis.

#### Technical Details
Data contains the command text.

### WORLDDATA124
**ℹ️ Execute Subcommand**  
**Severity**: Info

#### What This Checks
Tracks subcommands used within /execute commands for complexity analysis.

#### Technical Details
Data contains the execute subcommand text.

### WORLDDATA125
**ℹ️ Level.dat Info**  
**Severity**: Info

#### What This Checks
Information extracted from the level.dat file, including world settings and properties.

#### Technical Details
Data contains level.dat property information.

### WORLDDATA126
**ℹ️ Experiments**  
**Severity**: Info

#### What This Checks
Experiments enabled in the world's level.dat file.

#### Technical Details
Data contains the experiment name.

### WORLDDATA127
**ℹ️ Empty Chunks**  
**Severity**: Info

#### What This Checks
Count of chunks that have no subchunk data. May indicate empty or corrupted chunks.

#### Technical Details
Data contains the count of empty chunks.

### WORLDDATA128
**ℹ️ Chunk Count**  
**Severity**: Info

#### What This Checks
Total number of chunks in the world.

#### Technical Details
Data contains the total chunk count.

### WORLDDATA212
**🟡 Outdated Command**  
**Severity**: Warning

#### What This Checks
Warning when a command uses syntax from an older Minecraft version. Consider updating to current command syntax.

#### Technical Details
Data contains the outdated command text.

### WORLDDATA400
**🔴 Processing Error**  
**Severity**: Error

#### What This Checks
Error when the world data could not be fully processed. May indicate corruption or unsupported format.

#### Technical Details
Data contains details about the processing error.

### WORLDDATA401
**🔴 Unexpected Error**  
**Severity**: Error

#### What This Checks
An unexpected error occurred while processing world data. Check logs for details.

#### Technical Details
Data contains the error message.
