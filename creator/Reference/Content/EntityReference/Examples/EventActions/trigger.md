---
author: mammerla
ms.author: mikeam
title: "Entity Actions Documentation - minecraft:trigger"
description: "Describes the minecraft:trigger entity action types"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Actions Documentation - minecraft:trigger

Triggers additional entity events when hit. For example, you could use a randomize node in minecraft:entity_spawned to choose either an adult or baby event for adding component groups.

## Alternate Simple Representations

This item can also be represented as a `String`.


## Trigger Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| event | *not set* | String | The event to trigger on the entity. | 
| target | *not set* | [Target](#target-choices) choices | The target entity for the trigger. | 

### Target choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| self | Self | |
| other | Other | |
| player | Player | |
| target | Target | |
| baby | Baby | |
| parent | Parent | |

## Samples


```json
""sample:spawn_adult": {
			// add adult component groups
		},
		"sample:spawn_baby": {
			// add baby component groups
		},
		"minecraft:entity_spawned": {
			"randomize": [
				{
					"weight": 50.0,
					"trigger": "sample:spawn_adult"
				},
				{
					"weight": 50.0,
					"trigger": "sample:spawn_baby"
				}
			]
		}"
```
