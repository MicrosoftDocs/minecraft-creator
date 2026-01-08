---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:equip_item"
description: "Describes the minecraft:equip_item entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:equip_item

The entity puts on the desired equipment.


## Equip Item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| can_wear_armor | false | Boolean true/false | If true, the entity can pick up and wear armor items from the ground. |  | 
| excluded_items | *not set* | Array of [Excluded Items](#excluded-items) items | List of items that the entity should not equip. | Bogged: `[{"item":"minecraft:banner:15"}]` | 

## Excluded Items

#### Excluded Item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| item | *not set* | String |  |  | 

## Samples

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:equip_item": {
  "excluded_items": [
    {
      "item": "minecraft:banner:15"
    }
  ]
}
```

#### [Evocation Illager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/evocation_illager.json)


```json
"minecraft:equip_item": {}
```

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)


```json
"minecraft:equip_item": {
  "can_wear_armor": false
}
```
