---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:equipment"
description: "Describes the minecraft:equipment entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:equipment

Sets the Equipment table to use for this Entity.


## Equipment Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| slot_drop_chance | *not set* | Array of strings | A list of slots with the chance to drop an equipped item from that slot. Can be an array of slot name strings or an array of objects with slot and drop_chance properties. |  | 
| slot_drop_chance (Alternate 1) | *not set* | Array of [Slot Drop Chance](#slot-drop-chance) items |  |  | 
| table | *not set* | String | The file path to the equipment table, relative to the behavior pack's root. | Gray Zombie Leader: `"loot_tables/entities/zombie_equipment.json"` | 

## Slot Drop Chance

#### Slot Drop Chance Item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| drop_chance | *not set* | Decimal number | The chance to drop the equipped item (0.0 to 1.0). |  | 
| slot | *not set* | String | The equipment slot name. |  | 

## Samples

#### [Gray Zombie Leader](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/entities/gray_zombie_leader.behavior.json)


```json
"minecraft:equipment": {
  "table": "loot_tables/entities/zombie_equipment.json"
}
```
