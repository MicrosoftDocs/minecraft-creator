---
author: Mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.panic
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.panic

`minecraft:behavior.panic` allows an entity to react when it receives damage.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|damage_sources| all| List| The list of Entity Damage Sources that will cause this mob to panic. |
|force| false| Boolean| If true, this mob will not stop panicking until it can't move anymore or the goal is removed from it. |
|ignore_mob_damage| false| Boolean| If true, the mob will not panic in response to damage from other mobs. This overrides the damage types in "damage_sources." |
|panic_sound| *not set*| String| Sound to play when event occurs. |
|prefer_water| false| Boolean| If true, the mob will prefer water over land. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| sound_interval| 0| Range [a, b]| The range of time in seconds to randomly wait before playing the sound again. |
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal. |

## Example

```json
"minecraft:behavior.panic":{
    "priority": 2,
    "prefer_water": true,
    "speed_multiplier": 1.5,
    "ignore_mob_damage": true,
    "force": true
}
```

## Vanilla entities examples

### chicken

```json
"minecraft:behavior.panic": {
        "priority": 0,
        "prefer_water": true,
        "speed_multiplier": 1.2
},

``````

## Vanilla entities using `minecraft:behavior.panic`

- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [chicken](../../../../Source/VanillaBehaviorPack_Snippets/entities/chicken.md)
- [cow](../../../../Source/VanillaBehaviorPack_Snippets/entities/cow.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [goat](../../../../Source/VanillaBehaviorPack_Snippets/entities/goat.md)
- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/hoglin.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [mooshroom](../../../../Source/VanillaBehaviorPack_Snippets/entities/mooshroom.md)
- [mule](../../../../Source/VanillaBehaviorPack_Snippets/entities/mule.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
- [parrot](../../../../Source/VanillaBehaviorPack_Snippets/entities/parrot.md)
- [pig](../../../../Source/VanillaBehaviorPack_Snippets/entities/pig.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
- [polar_bear](../../../../Source/VanillaBehaviorPack_Snippets/entities/polar_bear.md)
- [rabbit](../../../../Source/VanillaBehaviorPack_Snippets/entities/rabbit.md)
- [sheep](../../../../Source/VanillaBehaviorPack_Snippets/entities/sheep.md)
- [skeleton_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton_horse.md)
- [strider](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
- [turtle](../../../../Source/VanillaBehaviorPack_Snippets/entities/turtle.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [wandering_trader](../../../../Source/VanillaBehaviorPack_Snippets/entities/wandering_trader.md)
- [zombie](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie.md)
