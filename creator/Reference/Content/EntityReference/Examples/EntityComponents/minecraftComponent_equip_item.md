---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:equip_item"
description: "Describes the minecraft:equip_item entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:equip_item

The entity puts on the desired equipment.


## Equip Item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| excluded_items | *not set* | Array of strings | List of items that the entity should not equip. | Bogged: `[{"item":"minecraft:banner:15"}]` | 

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
