---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.hold_ground"
description: "Describes the minecraft:behavior.hold_ground ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.hold_ground

Compels an entity to stop at their current location, turn to face a mob they are targeting, and react with an event.

> [!Note]
> Requires a target in order to work properly. Entities can generate targets via one of the following behaviors:
> 
> * [minecraft:behavior.nearest_attackable_target](../EntityGoals/minecraftBehavior_nearest_attackable_target.md)
> * [minecraft:behavior.hurt_by_target](../EntityGoals/minecraftBehavior_hurt_by_target.md)

## Hold Ground Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| broadcast | false | Boolean true/false | Whether to broadcast out the mob's target to other mobs of the same type. | Pillager: `true` | 
| broadcast_range | 0 | Decimal number | Range in blocks for how far to broadcast. | Pillager: `8` | 
| min_radius | 10 | Decimal number | Minimum distance the target must be for the mob to run this goal. | Pillager: `10` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Pillager: `5`, `6` | 
| within_radius_event | *not set* | Minecraft Event Reference | Event to run when target is within the radius. This event is broadcasted if broadcast is true. | Pillager: `{"event":"minecraft:ranged_mode","target":"self"}` | 

## Samples

#### [Pillager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/pillager.json)

At /minecraft:entity/component_groups/minecraft:patrol_captain/minecraft:behavior.hold_ground/: 

```json
"minecraft:behavior.hold_ground": {
  "priority": 5,
  "min_radius": 10,
  "broadcast": true,
  "broadcast_range": 8,
  "within_radius_event": {
    "event": "minecraft:ranged_mode",
    "target": "self"
  }
}
```

At /minecraft:entity/component_groups/minecraft:patrol_follower/minecraft:behavior.hold_ground/: 

```json
"minecraft:behavior.hold_ground": {
  "priority": 6,
  "min_radius": 10,
  "broadcast": true,
  "broadcast_range": 8,
  "within_radius_event": {
    "event": "minecraft:ranged_mode",
    "target": "self"
  }
}
```
