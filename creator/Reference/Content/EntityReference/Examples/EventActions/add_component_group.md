---
author: mammerla
ms.author: mikeam
title: "Entity Actions Documentation - minecraft:add_component_group"
description: "Describes the minecraft:add_component_group entity action types"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Actions Documentation - minecraft:add_component_group

Adds component groups to the current entity. These groups must be defined in the 'component_groups' section of the file. As entities can only have one component of each type active, any components in a group that is being added will replace previously added components. Additionally, adding a component group that is already active will cause those components to be re-initialized. For some types of components like minecraft:is_baby, re-initializing an already active component has no effect, but for other component types the associated logic will start over. For example, an already-added minecraft:timer that is added again will start its timing logic over.


## Samples


```json
""sequence": [
			{
				"add": { "component_groups": [ "one" ] }
			},
			{
				"add": { "component_groups": [ "two", "five", "etc.." ] }
			}
		]"
```
