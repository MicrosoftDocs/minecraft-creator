---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:equippable"
description: "Describes the minecraft:equippable entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:equippable

Defines an entity's behavior for having items equipped to it.


## Equippable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| slots | *not set* | Array of [Slots](#slots) items | List of slots and the item that can be equipped. | Camel: `[{"slot":0,"item":"saddle","accepted_items":["saddle"],"on_equip":{"event":"minecraft:camel_saddled"},"on_unequip":{"event":"minecraft:camel_unsaddled"}}]` | 

## Slots
List of slots and the item that can be equipped.


#### Slots Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| accepted_items | *not set* | Array of strings | The list of items that can go in this slot. |  | 
| interact_text | *not set* | String | Text to be displayed when the entity can be equipped with this item when playing with Touch-screen controls. |  | 
| item | *not set* | String | Identifier of the item that can be equipped for this slot. |  | 
| on_equip | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to trigger when this entity is equipped with this item. |  | 
| on_unequip | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to trigger when this item is removed from this entity. |  | 
| slot | 0 | Integer number | The slot number of this slot. |  | 

## Samples

#### [Camel](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel.json)


```json
"minecraft:equippable": {
  "slots": [
    {
      "slot": 0,
      "item": "saddle",
      "accepted_items": [
        "saddle"
      ],
      "on_equip": {
        "event": "minecraft:camel_saddled"
      },
      "on_unequip": {
        "event": "minecraft:camel_unsaddled"
      }
    }
  ]
}
```

#### [Donkey](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/donkey.json)


```json
"minecraft:equippable": {
  "slots": [
    {
      "slot": 0,
      "item": "saddle",
      "accepted_items": [
        "saddle"
      ],
      "on_equip": {
        "event": "minecraft:donkey_saddled"
      },
      "on_unequip": {
        "event": "minecraft:donkey_unsaddled"
      }
    }
  ]
}
```

#### [Horse](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/horse.json)


```json
"minecraft:equippable": {
  "slots": [
    {
      "slot": 0,
      "item": "saddle",
      "accepted_items": [
        "saddle"
      ],
      "on_equip": {
        "event": "minecraft:horse_saddled"
      },
      "on_unequip": {
        "event": "minecraft:horse_unsaddled"
      }
    },
    {
      "slot": 1,
      "item": "horsearmoriron",
      "accepted_items": [
        "horsearmorleather",
        "horsearmoriron",
        "horsearmorgold",
        "horsearmordiamond",
        "minecraft:copper_horse_armor"
      ]
    }
  ]
}
```

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)


```json
"minecraft:equippable": {
  "slots": [
    {
      "slot": 1,
      "item": "carpet",
      "accepted_items": [
        "carpet"
      ]
    }
  ]
}
```

#### [Mule](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/mule.json)


```json
"minecraft:equippable": {
  "slots": [
    {
      "slot": 0,
      "item": "saddle",
      "accepted_items": [
        "saddle"
      ],
      "on_equip": {
        "event": "minecraft:mule_saddled"
      },
      "on_unequip": {
        "event": "minecraft:mule_unsaddled"
      }
    }
  ]
}
```
