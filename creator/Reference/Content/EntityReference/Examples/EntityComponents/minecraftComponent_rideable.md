---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:rideable
ms.prod: gaming
---

# Entity Documentation - minecraft:rideable

`minecraft:rideable` determines whether this entity can be ridden. Allows specifying the different seat positions and quantity.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| controlling_seat| 0| Integer| The seat that designates the driver of the entity. This is only observed by the horse/boat styles of riding; minecarts/entities with "minecraft:controlled_by_player" give control to any player in any seat.  |
| crouching_skip_interact| True| Boolean| If true, this entity can't be interacted with if the entity interacting with it is crouching |
| family_types| *not set*| List| List of entities that can ride this entity |
| interact_text| *not set*| String| The text to display when the player can interact with the entity when playing with Touch-screen controls |
| priority| 0| Integer| This field may exist in old data but isn't used by minecraft:rideable. |
| pull_in_entities| False| Boolean| If true, this entity will pull in entities that are in the correct family_types into any available seats |
| rider_can_interact| False| Boolean| If true, this entity will be picked when looked at by the rider |
| seat_count| 1| Integer| The number of entities that can ride this entity at the same time |
| seats| *not set*| List| The list of positions and number of riders for each position for entities riding this entity|

### seats

`seats` is a list defined by five parameters. Each item has the following properties:

| Name| Default Value| Type| Description |
|:-----------|:-----------|:-----------|:-----------|
| lock_rider_rotation| 181| Decimal| Angle in degrees that a rider is allowed to rotate while riding this entity. Omit this property for no limit |
| max_rider_count| seat_count| Integer| Defines the maximum number of riders that can be riding this entity for this seat to be valid |
| min_rider_count| 0| Integer| Defines the minimum number of riders that need to be riding this entity before this seat can be used |
| position| [0, 0, 0]| Vector [a, b, c]| Position of this seat relative to this entity's position |
| rotate_rider_by| 0| Molang| Offset to rotate riders by |

## Example

```json
"minecraft:rideable":{
    "controlling_seat": 0,
    "crouching_skip_interact": true,
    "family_types": [],
    "interact_text": ,
    "priority": 0,
    "pull_in_entities": false,
    "rider_can_interact": false,
    "seat_count": 1,
    "seats": {
        "lock_rider_rotation": 181,
        "max_rider_count": "seat_count",
        "min_rider_count": 0,
        "position": [0, 0, 0],
        "rotate_rider_by": 0
    },
}
```

## Vanilla entities examples

### boat

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/boat.json" range="26-56":::

## Vanilla entities using `minecraft:rideable`

- [boat](../../../../Source/VanillaBehaviorPack_Snippets/entities/boat.md)
- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [cave_spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/cave_spider.md)
- [chicken](../../../../Source/VanillaBehaviorPack_Snippets/entities/chicken.md)
- [cow](../../../../Source/VanillaBehaviorPack_Snippets/entities/cow.md)
- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/hoglin.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [husk](../../../../Source/VanillaBehaviorPack_Snippets/entities/husk.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/minecart.md)
- [mooshroom](../../../../Source/VanillaBehaviorPack_Snippets/entities/mooshroom.md)
- [mule](../../../../Source/VanillaBehaviorPack_Snippets/entities/mule.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
- [pig](../../../../Source/VanillaBehaviorPack_Snippets/entities/pig.md)
- [player](../../../../Source/VanillaBehaviorPack_Snippets/entities/player.md)
- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
- [sheep](../../../../Source/VanillaBehaviorPack_Snippets/entities/sheep.md)
- [skeleton_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton_horse.md)
- [spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/spider.md)
- [strider](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
- [zombie_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_horse.md)
- [zombie_pigman](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_pigman.md)
- [zombie_villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager_v2.md)
- [zombie_villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager.md)
- [zombie](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie.md)