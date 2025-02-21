---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:entity_placer"
description: "Describes the minecraft:entity_placer item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:entity_placer

Allows an item to place entities into the world. Additionally, in version 1.19.80 and above, the component allows the item to set the spawn type of a monster spawner.


## Entity Placer Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| dispense_on | *not set* | Array of objects | List of block descriptors of the blocks that this item can be dispensed on. If left empty, all blocks will be allowed. |  | 
| entity | *not set* | String | The entity to be placed in the world. | My Sword Turtle: `"minecraft:turtle"` | 
| use_on | *not set* | Array of objects | List of block descriptors of the blocks that this item can be used on. If left empty, all blocks will be allowed. | My Sword Turtle: `["minecraft:sand"]` | 

## Samples


```json
"minecraft:entity_placer": {
  "entity": "minecraft:spider",
  "dispense_on": [
    "minecraft:web"
  ],
  "use_on": [
    "minecraft:web"
  ]
}
```

#### [My Sword Turtle](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_sword_turtle.json)


```json
"minecraft:entity_placer": {
  "entity": "minecraft:turtle",
  "use_on": [
    "minecraft:sand"
  ]
}
```
