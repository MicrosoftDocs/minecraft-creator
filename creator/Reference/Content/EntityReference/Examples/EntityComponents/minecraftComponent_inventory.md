---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:inventory"
description: "Describes the minecraft:inventory entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:inventory

Defines this entity's inventory properties.


## Inventory Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| additional_slots_per_strength | 0 | Integer number | Number of slots that this entity can gain per extra strength | Frost Moose: `3` | 
| can_be_siphoned_from | false | Boolean true/false | If true, the contents of this inventory can be removed by a hopper |  | 
| container_type | none | String | Type of container this entity has. Can be horse, minecart_chest, chest_boat, minecart_hopper, inventory, container or hopper | Frost Moose: `"horse"` | 
| inventory_size | 5 | Integer number | Number of slots the container has | Frost Moose: `16`, Beachager: `8` | 
| private | false | Boolean true/false | If true, the entity will not drop its inventory on death | Beachager: `true` | 
| restrict_to_owner | false | Boolean true/false | If true, the entity's inventory can only be accessed by its owner or itself |  | 

## Samples

#### [Frost Moose](https://github.com/microsoft/minecraft-samples/tree/main/addon_starter/2_entities/behavior_packs/aop_mobs/entities/frost_moose.behavior.json)


```json
"minecraft:inventory": {
  "inventory_size": 16,
  "container_type": "horse",
  "additional_slots_per_strength": 3
}
```

#### [Beachager](https://github.com/microsoft/minecraft-samples/tree/main/chill_oasis_blocks_and_features/chill_oasis_assets/behavior_packs/chill_oasis_assets/entities/beachager.behavior.json)


```json
"minecraft:inventory": {
  "inventory_size": 8,
  "private": true
}
```
