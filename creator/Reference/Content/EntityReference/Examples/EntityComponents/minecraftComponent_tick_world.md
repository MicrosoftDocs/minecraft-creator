---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:tick_world
ms.prod: gaming
---

# Entity Documentation - minecraft:tick_world

`minecraft:tick_world` defines if the entity ticks the world and the radius around it to tick.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| distance_to_players| 128| Decimal| The distance at which the closest player has to be before this entity despawns. This option will be ignored if never_despawn is true. Min: 128 blocks. |
| never_despawn| True| Boolean| If true, this entity will not despawn even if players are far away. If false, distance_to_players will be used to determine when to despawn. |
| radius| 2| Integer| The area around the entity to tick. Default: 2. Allowed range: 2-6. Must be a positive integer. |

## Example

```json
"minecraft:tick_world":{
    "distance_to_players": 128,
    "never_despawn": true,
    "radius": 2,
}
```

## Vanilla entities examples

No entities currently use `minecraft:tick_world`

## Vanilla entities using `minecraft:tick_world`

No entities currently use `minecraft:tick_world`
