---
author: mammerla
ms.author: mikeam
title: "Entity Actions Documentation - minecraft:set_property"
description: "Describes the minecraft:set_property entity action types"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Actions Documentation - minecraft:set_property

Sets the value of an entity property. The property must be defined in the 'properties' section of the file.


## Set Entity Property Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| property | *not set* | String | The property to set on the entity. | 
| value | *not set* | String | The value to assign to the property. | 

## Samples


```json
""set_property": {
			"minecraft:has_nectar": false
		}"
```
