---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.harvest_farm_block"
description: "Describes the minecraft:behavior.harvest_farm_block ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.harvest_farm_block

Allows the entity to search within an area for farmland with air above it. If found, the entity will replace the air block by planting a seed item from its inventory on the farmland block. This goal will not execute if the entity does not have an item in its inventory.

> [!Note]
> Requires the following components in order to work properly:
> 
> * [Inventory (minecraft:inventory)](../EntityComponents/minecraftComponent_inventory.md)
> * [Navigation (minecraft:navigation)](../EntityComponents/minecraftComponent_navigation.md)
> 

## Harvest Farm Block Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| goal_radius | 1.5 | Decimal number | Distance in blocks within the entity considers it has reached it's target position. |  | 
| max_seconds_before_search | 1 | Decimal number | The maximum amount of time in seconds that the goal can take before searching for the first harvest block. The time is chosen between 0 and this number. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Villager v2: `7`, Villager: `9` | 
| search_cooldown_max_seconds | 8 | Decimal number | The maximum amount of time in seconds that the goal can take before searching again, after failing to find a a harvest block already. The time is chosen between 0 and this number. |  | 
| search_count | 0 | Integer number | The number of randomly selected blocks each tick that the entity will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick. |  | 
| search_height | 1 | Integer number | The Height in blocks the entity will search within to find a valid target position. |  | 
| search_range | 16 | Integer number | The distance in blocks the entity will search within to find a valid target position. |  | 
| seconds_until_new_task | 0.5 | Decimal number | The amount of time in seconds that the goal will cooldown after a successful reap/sow, before it can start again. |  | 
| speed_multiplier | 0.5 | Decimal number | Movement speed multiplier of the entity when using this Goal. | Villager: `0.5` | 

## Samples

#### [Villager v2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)

At /minecraft:entity/component_groups/job_specific_goals/minecraft:behavior.harvest_farm_block/: 

```json
"minecraft:behavior.harvest_farm_block": {}
```

At /minecraft:entity/component_groups/work_schedule_farmer/minecraft:behavior.harvest_farm_block/: 

```json
"minecraft:behavior.harvest_farm_block": {
  "priority": 7
}
```

#### [Villager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager.json)


```json
"minecraft:behavior.harvest_farm_block": {
  "priority": 9,
  "speed_multiplier": 0.5
}
```
