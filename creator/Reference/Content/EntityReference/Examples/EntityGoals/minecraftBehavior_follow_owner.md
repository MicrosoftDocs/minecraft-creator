---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.follow_owner
description: "A reference document detailing the 'behavior.follow_owner' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.follow_owner

`minecraft:behavior.follow_owner` compels an entity to follow a player marked as an owner.

> [!IMPORTANT]
> `minecraft:behavior.follow_owner` requires the entity to be marked as an owner through taming.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| can_teleport| true| Boolean| Defines if the mob will teleport to its owner when too far away. |
| ignore_vibration| true| Boolean| Defines if the mob should disregard following its owner after detecting a recent vibration. |
| max_distance| 60.0| Decimal| The maximum distance in blocks this mob can be from its owner to start following, only used when canTeleport is false. |
| post_teleport_distance | stop_distance" + 1 | Integer | Defines how far (in blocks) the entity will be from its owner after teleporting. If not specified, it defaults to "stop_distance" + 1, allowing the entity to seamlessly resume navigation. |
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal. |
| start_distance| 10.0| Decimal| The minimum distance the mob must be from its owner to start following it. |
| stop_distance| 2.0| Decimal| The distance at which the mob will stop following its owner. |

## Example

```json
"minecraft:behavior.follow_owner":{
    "priority": 2,
    "speed_multiplier": 1.0,
    "start_distance": 5.0,
    "stop_distance": 2.5
}
```

## Vanilla entities examples

### cat

```json
"minecraft:behavior.follow_owner": {
  "priority": 4,
  "speed_multiplier": 1.0,
  "start_distance": 10,
  "stop_distance": 2
}
```

## Vanilla entities using `minecraft:behavior.follow_owner`

- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
- [parrot](../../../../Source/VanillaBehaviorPack_Snippets/entities/parrot.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
