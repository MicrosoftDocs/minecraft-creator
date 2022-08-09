---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.follow_owner
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.follow_owner

`minecraft:behavior.follow_owner` allows an entity to follow a player marked as an owner.

> [!IMPORTANT]
> `minecraft:behavior.follow_owner` requires the entity to be marked as an owner through taming.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| can_teleport| true| Boolean| Specify if the mob can teleport to the player if it is too far away. |
| ignore_vibration| true| Boolean| Specify if the mob will follow the owner if it has heard a vibration lately. |
| max_distance| 60.0| Decimal| The maximum distance in blocks this mob can be from its owner to start following, only used when canTeleport is false. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal. |
| start_distance| 10.0| Decimal| The distance in blocks that the owner can be away from this mob before it starts following it. |
| stop_distance| 2.0| Decimal| The distance in blocks this mob will stop from its owner while following it. |

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
