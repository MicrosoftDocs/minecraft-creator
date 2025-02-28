---
author: mammerla
ms.author: mikeam
title: "Entity Actions Documentation - minecraft:remove_component_group"
description: "Describes the minecraft:remove_component_group entity action types"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Actions Documentation - minecraft:remove_component_group

Removes component groups from the current entity. This can be any group you have defined in the 'component_groups' section of the file.


## Samples


```json
""sequence": [
			{
				"remove": { "component_groups": [ "one" ] }
			},
			{
				"remove": { "component_groups": [ "two", "five", "etc.." ] }
			}
		]"
```
