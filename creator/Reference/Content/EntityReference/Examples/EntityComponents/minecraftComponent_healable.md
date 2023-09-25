---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:healable
description: "A reference document detailing the 'healable' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:healable

`minecraft:healable` defines the interactions with the entity for healing it.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| filters| *not set*| Minecraft Filter| The filter group that defines conditions for using this item to heal the entity. |
| force_use| False| Boolean| Determines if an item can be used regardless of entity being at full health. |
| items| *not set*| Array| The array of items that can be used to heal the entity.|

### items

`items` is an array defined by two parameters. Each item has the following properties:

| Name| Default Value| Type| Description |
|:-----------|:-----------|:-----------|:-----------|
| heal_amount| 1| Integer| The amount of health the entity gains when fed this item. |
| item| *not set*| String| Item identifier that can be used to heal the entity. |

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

```json
 "minecraft:healable": {
        "items": [
          {
            "item": "porkchop",
            "heal_amount": 3
          },
          {
            "item": "cooked_porkchop",
            "heal_amount": 8
          },
          {
            "item": "fish",
            "heal_amount": 2
          },
          {
            "item": "salmon",
            "heal_amount": 2
          },
          {
            "item": "clownfish",
            "heal_amount": 1
          },
          {
            "item": "pufferfish",
            "heal_amount": 1
          },
          {
            "item": "cooked_fish",
            "heal_amount": 5
          },
          {
            "item": "cooked_salmon",
            "heal_amount": 6
          },
          {
            "item": "beef",
            "heal_amount": 3
          },
          {
            "item": "cooked_beef",
            "heal_amount": 8
          },
          {
            "item": "chicken",
            "heal_amount": 2
          },
          {
            "item": "cooked_chicken",
            "heal_amount": 6
          },
          {
            "item": "muttonRaw",
            "heal_amount": 2
          },
          {
            "item": "muttonCooked",
            "heal_amount": 6
          },
          {
            "item": "rotten_flesh",
            "heal_amount": 4
          },
          {
            "item": "rabbit",
            "heal_amount": 3
          },
          {
            "item": "cooked_rabbit",
            "heal_amount": 5
          },
          {
            "item": "rabbit_stew",
            "heal_amount": 10
          }
        ]
      }
```

## Vanilla entities using `minecraft:healable`

- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [mule](../../../../Source/VanillaBehaviorPack_Snippets/entities/mule.md)
- [parrot](../../../../Source/VanillaBehaviorPack_Snippets/entities/parrot.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
