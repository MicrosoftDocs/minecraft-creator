---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.breed
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.breed

`minecraft:behavior.breed` allows an entity to breed with other entities that have been assigned.

>[!IMPORTANT]
> `minecraft:behavior.breed` requires the [minecraft:breedable](../EntityComponents/minecraftComponent_breedable.md) component in order to work properly.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| speed_multiplier| 1.0|Decimal |  Movement speed multiplier of the mob when using this AI Goal. |

## Example

```json
"minecraft:behavior.breed":{
    "priority": 1,
    "speed_multiplier": 3.0,
}
```

## Vanilla entities examples

### cow

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/cow.json" range="40-43":::

## Vanilla entities using `minecraft:behavior.breed`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [chicken](../../../../Source/VanillaBehaviorPack_Snippets/entities/chicken.md)
- [cow](../../../../Source/VanillaBehaviorPack_Snippets/entities/cow.md)
- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [goat](../../../../Source/VanillaBehaviorPack_Snippets/entities/goat.md)
- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/hoglin.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [mooshroom](../../../../Source/VanillaBehaviorPack_Snippets/entities/mooshroom.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
- [pig](../../../../Source/VanillaBehaviorPack_Snippets/entities/pig.md)
- [rabbit](../../../../Source/VanillaBehaviorPack_Snippets/entities/rabbit.md)
- [sheep](../../../../Source/VanillaBehaviorPack_Snippets/entities/sheep.md)
- [strider](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
- [turtle](../../../../Source/VanillaBehaviorPack_Snippets/entities/turtle.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
