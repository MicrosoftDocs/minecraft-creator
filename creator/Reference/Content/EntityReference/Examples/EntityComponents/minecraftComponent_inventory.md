---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:inventory"
description: "Describes the minecraft:inventory entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:inventory

Defines this entity's inventory properties.


## Inventory Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| additional_slots_per_strength | 0 | Integer number | Number of slots that this entity can gain per extra strength |  | 
| can_be_siphoned_from | false | Boolean true/false | If true, the contents of this inventory can be removed by a hopper |  | 
| container_type | none | String | Type of container this entity has. Can be horse, minecart_chest, chest_boat, minecart_hopper, inventory, container or hopper |  | 
| inventory_size | 5 | Integer number | Number of slots the container has |  | 
| private | false | Boolean true/false | If true, the entity will not drop its inventory on death |  | 
| restrict_to_owner | false | Boolean true/false | If true, the entity's inventory can only be accessed by its owner or itself |  | 

## Samples
