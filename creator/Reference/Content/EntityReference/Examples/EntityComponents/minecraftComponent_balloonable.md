---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:balloonable
ms.prod: gaming
---

# Entity Documentation - minecraft:balloonable

`minecraft:balloonable` allows this entity to have a balloon attached and defines the conditions and events for this entity when is ballooned.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|soft_distance| 2.0 | Decimal | Distance in blocks at which the 'spring' effect that lifts it. |
|max_distance| 10.0 | Decimal | Distance in blocks at which the balloon breaks |
|on_balloon| *not set* | String | Event to call when this entity is ballooned. |
|on_unballoon| *not set* | String | Event to call when this entity is unballooned. |
|mass| 1.0 | Decimal | Mass that this entity will have when computing balloon pull forces.|


## Example

```json
"minecraft:balloonable": {
    "max_distance": 10.0,
    "soft_distance": 2.0
}
```

## Vanilla entities examples

### fox

```json
"minecraft:balloonable": {
    "mass": 0.6
}
```

## Vanilla entities using `minecraft:balloonable`

- [chicken](../../../../Source/VanillaBehaviorPack_Snippets/entities/chicken.md)
- [cow](../../../../Source/VanillaBehaviorPack_Snippets/entities/cow.md)
- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [glow_squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/glow_squid.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [iron_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/iron_golem.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [mooshroom](../../../../Source/VanillaBehaviorPack_Snippets/entities/mooshroom.md)
- [mule](../../../../Source/VanillaBehaviorPack_Snippets/entities/mule.md)
- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
- [pig](../../../../Source/VanillaBehaviorPack_Snippets/entities/pig.md)
- [rabbit](../../../../Source/VanillaBehaviorPack_Snippets/entities/rabbit.md)
- [sheep](../../../../Source/VanillaBehaviorPack_Snippets/entities/sheep.md)
- [skeleton_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton_horse.md)
- [snow_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/snow_golem.md)
- [zombie_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_horse.md)


