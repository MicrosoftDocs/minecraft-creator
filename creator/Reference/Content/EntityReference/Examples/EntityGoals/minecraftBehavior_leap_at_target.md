---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.leap_at_target"
description: "Describes the minecraft:behavior.leap_at_target ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.leap_at_target

Allows monsters to jump at and attack their target. Can only be used by hostile mobs.

> [!Note]
> Requires a target in order to work properly. Entities can generate targets via one of the following behaviors:
> 
> * [minecraft:behavior.nearest_attackable_target](../EntityGoals/minecraftBehavior_nearest_attackble_target.md)
> * [minecraft:behavior.hurt_by_target](../EntityGoals/minecraftBehavior_hurt_by_target.md)

## Leap At Target Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| must_be_on_ground | true | Boolean true/false | If true, the mob will only jump at its target if its on the ground. Setting it to false will allow it to jump even if its already in the air |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Cat: `3`, Cave Spider: `4` | 
| set_persistent | false | Boolean true/false | Allows the actor to be set to persist upon targeting a player |  | 
| target_dist | *not set* | Decimal number |  | Cat: `0.3` | 
| yd | 0 | Decimal number | The height in blocks the mob jumps when leaping at its target | Cave Spider: `0.4` | 

## Samples

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:behavior.leap_at_target": {
  "priority": 3,
  "target_dist": 0.3
}
```

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)

At /minecraft:entity/component_groups/minecraft:spider_hostile/minecraft:behavior.leap_at_target/: 

```json
"minecraft:behavior.leap_at_target": {
  "priority": 4,
  "yd": 0.4,
  "must_be_on_ground": false
}
```

#### [Wolf](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wolf.json)


```json
"minecraft:behavior.leap_at_target": {
  "priority": 4,
  "yd": 0.4
}
```
