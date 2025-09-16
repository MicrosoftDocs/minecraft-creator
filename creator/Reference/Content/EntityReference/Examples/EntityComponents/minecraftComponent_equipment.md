---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:equipment"
description: "Describes the minecraft:equipment entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:equipment

Sets the Equipment table to use for this Entity.


## Equipment Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| slot_drop_chance | *not set* | Array of strings | A list of slots with the chance to drop an equipped item from that slot. |  | 
| table | *not set* | String | The file path to the equipment table, relative to the behavior pack's root. | Gray Zombie Leader: `"loot_tables/entities/zombie_equipment.json"` | 

## Samples

#### [Gray Zombie Leader](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/entities/gray_zombie_leader.behavior.json)


```json
"minecraft:equipment": {
  "table": "loot_tables/entities/zombie_equipment.json"
}
```
