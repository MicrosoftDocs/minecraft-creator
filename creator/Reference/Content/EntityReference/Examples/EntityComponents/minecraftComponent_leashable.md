---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:leashable
ms.prod: gaming
---

# Entity Documentation - minecraft:leashable

`minecraft:leashable` allows this entity to be leashed and defines the conditions and events for this entity when is leashed.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| can_be_stolen| False| Boolean| If true, players can leash this entity even if it is already leashed to another mob. |
| hard_distance| 6| Decimal| Distance in blocks at which the leash stiffens, restricting movement. |
| max_distance| 10| Decimal| Distance in blocks at which the leash breaks. |
| on_leash| *not set*| JSON Object | Event to call when this entity is leashed. |
| on_unleash| *not set*| JSON Object | Event to call when this entity is unleashed. |
| soft_distance| 4| Decimal| Distance in blocks at which the 'spring' effect starts acting to keep this entity close to the entity that leashed it. |

## Example

```json
"minecraft:leashable": {
    "soft_distance": 4.0,
    "hard_distance": 6.0,
    "max_distance": 10.0,
    "on_leash": {
        "event": "minecraft:on_leash",
        "target": "self"
    },
    "on_unleash": {
        "event": "minecraft:on_unleash",
        "target": "self"
    }
}
```

## Vanilla entities examples

### wolf

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/wolf.json" range="237-249":::

## Vanilla entities using `minecraft:leashable`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [boat](../../../../Source/VanillaBehaviorPack_Snippets/entities/boat.md)
- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [chicken](../../../../Source/VanillaBehaviorPack_Snippets/entities/chicken.md)
- [cow](../../../../Source/VanillaBehaviorPack_Snippets/entities/cow.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [glow_squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/glow_squid.md)
- [goat](../../../../Source/VanillaBehaviorPack_Snippets/entities/goat.md)
- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/hoglin.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [iron_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/iron_golem.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [mooshroom](../../../../Source/VanillaBehaviorPack_Snippets/entities/mooshroom.md)
- [mule](../../../../Source/VanillaBehaviorPack_Snippets/entities/mule.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
- [parrot](../../../../Source/VanillaBehaviorPack_Snippets/entities/parrot.md)
- [pig](../../../../Source/VanillaBehaviorPack_Snippets/entities/pig.md)
- [polar_bear](../../../../Source/VanillaBehaviorPack_Snippets/entities/polar_bear.md)
- [rabbit](../../../../Source/VanillaBehaviorPack_Snippets/entities/rabbit.md)
- [sheep](../../../../Source/VanillaBehaviorPack_Snippets/entities/sheep.md)
- [skeleton_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton_horse.md)
- [snow_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/snow_golem.md)
- [squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/squid.md)
- [strider](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
- [zoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/zoglin.md)
- [zombie_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_horse.md)