---
author: mammerla
ms.author: mikeam
title: "Entity Actions Documentation - minecraft:randomize_node"
description: "Describes the minecraft:randomize_node entity action types"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Actions Documentation - minecraft:randomize_node

The 'randomize' node is an array node that will pick one entry to execute, based on a weight.
		If no weight is specified, a node will have a weight of 1.0.
		If you add a weight of 4.0 in one node, and 8.0 in another, then those nodes will have a 33.33% (4 / (4 + 8)) and 66.66% (8 / (4 + 8)) chance of executing, respectively.


## Samples


```json
""randomize": [
			{
				"weight": <float>
				// actions like 'add' or 'remove'
			}
		]"
```
