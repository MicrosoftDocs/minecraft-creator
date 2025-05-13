---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:boostable"
description: "Describes the minecraft:boostable entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:boostable

Defines the conditions and behavior of a rideable entity's boost.


## Boostable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| boost_items | *not set* | [Boost Items](#boost-items-item-type) item | List of items that can be used to boost while riding this entity. | Pig: `[{"item":"carrotOnAStick","damage":2,"replace_item":"fishing_rod"}]`, Strider: `[{"item":"warped_fungus_on_a_stick","damage":1,"replace_item":"fishing_rod"}]` | 
| duration | 3 | Decimal number | Time in seconds for the boost. | Pig: `3`, Strider: `16` | 
| speed_multiplier | 1 | Decimal number | Factor by which the entity's normal speed increases. E.g. 2.0 means go twice as fast. | Pig: `1.35` | 

## Boost Items item type
List of items that can be used to boost while riding this entity. Each item has the following properties:


#### Boost Items Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| damage | 1 | Array of strings | This is the damage that the item will take each time it is used. |  | 
| item | *not set* | String | Name of the item that can be used to boost. |  | 
| replace_item | *not set* | String | The item used to boost will become this item once it is used up. |  | 

## Samples

#### [Pig](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/pig.json)


```json
"minecraft:boostable": {
  "speed_multiplier": 1.35,
  "duration": 3,
  "boost_items": [
    {
      "item": "carrotOnAStick",
      "damage": 2,
      "replace_item": "fishing_rod"
    }
  ]
}
```

#### [Strider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/strider.json)


```json
"minecraft:boostable": {
  "speed_multiplier": 1.35,
  "duration": 16,
  "boost_items": [
    {
      "item": "warped_fungus_on_a_stick",
      "damage": 1,
      "replace_item": "fishing_rod"
    }
  ]
}
```
