---
author: mammerla
ms.author: mikeam
title: "Entity Actions Documentation - minecraft:emit_vibration"
description: "Describes the minecraft:emit_vibration entity action types"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Actions Documentation - minecraft:emit_vibration

Allows the entity to emit a vibration having the entity itself as its source.


## Emit Vibration Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| vibration | *not set* | [Vibration](#vibration-choices) choices | Type of vibration to emit. |  | 

### Vibration choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| entity_interact | Entity Interact | |
| entity_act | Entity Act | |
| entity_die | Entity Die | |

## Samples


```json
{
	"emit_vibration": {
		"vibration": "entity_act"
	}
}
```
