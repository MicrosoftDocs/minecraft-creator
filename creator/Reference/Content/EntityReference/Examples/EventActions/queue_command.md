---
author: mammerla
ms.author: mikeam
title: "Entity Actions Documentation - minecraft:queue_command"
description: "Describes the minecraft:queue_command entity action types"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Actions Documentation - minecraft:queue_command

Will queue a slash command or a series of slash commands set in an array to trigger at the end of the tick. Due to being queued as opposed to triggering instantly, any immediate side-effects of the command may not be observable by other molang queries, commands, or scripts until later in the tick. Note that commands executed via queue_command are guaranteed to run in order with respect to other queued commands. Additionally, if an entity is removed before a queued command has the chance to execute, for example removed on the same tick that the command was queued, the command will not execute.


## Queue Command Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| command | *not set* | String or Array of strings |  |  | 
| command (Alternate 1) | *not set* | Array of strings |  |  | 
| target | *not set* | [Target](#target-choices) choices |  |  | 

### Target choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| self | Self | |

## Samples


```json
""queue_command": {
			"command": "say I have died!"
		}"
```
