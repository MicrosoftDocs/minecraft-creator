---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:entity_placer"
description: "Describes the minecraft:entity_placer item component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:entity_placer

Allows an item to place entities into the world. Additionally, in version 1.19.80 and above, the component allows the item to set the spawn type of a monster spawner.


## Item Components Entity Placer Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| dispense_on (Dispense On) | [] | Array of [Dispense On](#dispense-on) items | List of block descriptors of the blocks that this item can be dispensed on. If left empty, all blocks will be allowed. |  | 
| dispense_on (as String) | *not set* | String |  |  | 
| dispense_on (as Object) | *not set* | Object |  |  | 
| entity |  | Object | The entity to be placed in the world. Value must match a regular expression pattern of "^(?:\w+(?:\.\w+)*:(?=\w))?(?:\w+(?:\.\w+)*)(?:<((?:\w+(?:\.\w+)*:(?=\w))?\w+(?:\.\w+)*)*>)?$". | My Sword Turtle: `"minecraft:turtle"` | 
| use_on (Use On) | [] | Array of [Use On](#use-on) items | List of block descriptors of the blocks that this item can be used on. If left empty, all blocks will be allowed. | My Sword Turtle: `["minecraft:sand"]` | 
| use_on (as String) | *not set* | String |  |  | 
| use_on (as Object) | *not set* | Object |  |  | 

### Dispense On

#### Dispense On Properties

**JSON path:** `dispense_on`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name |  | String |  | 
| states | {} | Integer number |  | 
| states (as String) | *not set* | String |  | 
| states (as Boolean true/false) | *not set* | Boolean true/false |  | 
| tags |  | String |  | 

### Use On

Same structure as [Dispense On](#dispense-on).


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
