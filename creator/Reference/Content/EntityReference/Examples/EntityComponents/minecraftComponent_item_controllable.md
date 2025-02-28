---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:item_controllable"
description: "Describes the minecraft:item_controllable entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:item_controllable

Defines what items can be used to control this entity while ridden.


## Item Controllable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_items | *not set* | Array of strings | List of items that can be used to control this entity. | Pig: `"carrotOnAStick"`, Strider: `"warped_fungus_on_a_stick"` | 

## Samples

#### [Pig](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/pig.json)


```json
"minecraft:item_controllable": {
  "control_items": "carrotOnAStick"
}
```

#### [Strider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/strider.json)


```json
"minecraft:item_controllable": {
  "control_items": "warped_fungus_on_a_stick"
}
```
