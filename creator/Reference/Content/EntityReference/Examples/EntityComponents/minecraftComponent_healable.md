---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:healable
ms.prod: gaming
---

# Entity Documentation - minecraft:healable

`minecraft:healable` defines the interactions with this entity for healing it.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| filters| *not set*| Minecraft Filter| The filter group that defines the conditions for using this item to heal the entity. |
| force_use| False| Boolean| Determines if item can be used regardless of entity being at full health. |
| items| *not set*| Array| The array of items that can be used to heal this entity.|

### items

`items` is an array defined by two parameters. Each item has the following properties:

| Name| Default Value| Type| Description |
|:-----------|:-----------|:-----------|:-----------|
| heal_amount| 1| Integer| The amount of health this entity gains when fed this item. |
| item| *not set*| String| Item identifier that can be used to heal this entity. |

## Example

```json
"minecraft:healable":{
    "filters": {"test": "has_damage", "value": "fatal"} ,
    "force_use": false,
    "items": [
        {
        "heal_amount": 1,
        "item": "carrot"
        }
    ]
}
```

## Vanilla entities examples

### wolf

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/wolf.json" range="299-374":::

## Vanilla entities using `minecraft:healable`

- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [mule](../../../../Source/VanillaBehaviorPack_Snippets/entities/mule.md)
- [parrot](../../../../Source/VanillaBehaviorPack_Snippets/entities/parrot.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)