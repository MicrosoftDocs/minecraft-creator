---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:addrider
ms.prod: gaming
---

# Entity Documentation - minecraft:addrider

`minecraft:addrider` adds a rider to the entity.

>[!IMPORTANT]
> `minecraft:addrider` requires `minecraft:rideable` in order to work properly.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|entity_type|*not set* | String| The entity type that will be riding this entity. |
|spawn_event|*not set* | String| The spawn event that will be used when the riding entity is created. |

## Example

```json
"minecraft:addrider":{
   "spawn_event": "minecraft:spawn_as_illager",
    "entity_type": "minecraft:villager"
}
```

## Vanilla entities examples

### spider

```json
"minecraft:addrider": {
    "entity_type": "minecraft:skeleton"
}
```

## Vanilla entities using `minecraft:addrider`

- [cave_spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/cave_spider.md)
- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
- [spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/spider.md)
- [strider](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
