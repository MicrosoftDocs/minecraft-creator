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
| dispense_on | *not set* | Array of [Dispense On](#dispense-on-item-type) items | List of block descriptors of the blocks that this item can be dispensed on. If left empty, all blocks will be allowed. |  | 
| dispense_on (Alternate 1) | *not set* | String |  |  | 
| dispense_on (Alternate 2) | *not set* | Object |  |  | 
| entity | *not set* | Keyed set of strings | The entity to be placed in the world. Value must be match patern "^(?:\w+(?:\.\w+)*:(?=\w))?(?:\w+(?:\.\w+)*)(?:<((?:\w+(?:\.\w+)*:(?=\w))?\w+(?:\.\w+)*)*>)?$". | My Sword Turtle: `"minecraft:turtle"` | 
| entity (Alternate 1) | *not set* | Keyed set of strings |  |  | 
| use_on | *not set* | Array of [Use On](#use-on-item-type) items | List of block descriptors of the blocks that this item can be used on. If left empty, all blocks will be allowed. | My Sword Turtle: `["minecraft:sand"]` | 
| use_on (Alternate 1) | *not set* | String |  |  | 
| use_on (Alternate 2) | *not set* | Object |  |  | 

## Dispense On item type
Dispense On.


#### Dispense On Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | String | name |  | 
| states | *not set* | Integer number | states |  | 
| states (Alternate 1) | *not set* | String |  |  | 
| states (Alternate 2) | *not set* | Boolean true/false |  |  | 
| tags | *not set* | String | tags |  | 

## Use On item type
Use On


#### Use On Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | String | name |  | 
| states | *not set* | Integer number | states |  | 
| states (Alternate 1) | *not set* | String |  |  | 
| states (Alternate 2) | *not set* | Boolean true/false |  |  | 
| tags | *not set* | String | tags |  | 

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

#### [Item Axe Turret Kit](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/items/axe_turret_kit.item.json)


```json
"minecraft:entity_placer": {
  "entity": "mikeamm_gwve:axe_turret"
}
```

#### [Item Bow Turret Kit](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/items/bow_turret_kit.item.json)


```json
"minecraft:entity_placer": {
  "entity": "mikeamm_gwve:bow_turret"
}
```

#### [Item Crossbow Turret Kit](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/items/crossbow_turret_kit.item.json)


```json
"minecraft:entity_placer": {
  "entity": "mikeamm_gwve:crossbow_turret"
}
```

#### [Item Gray Wave Generator Kit](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/items/gray_wave_generator_kit.item.json)


```json
"minecraft:entity_placer": {
  "entity": "mikeamm_gwve:gray_wave_generator"
}
```

#### [Item Shbullet Turret Kit](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/items/shbullet_turret_kit.item.json)


```json
"minecraft:entity_placer": {
  "entity": "mikeamm_gwve:shbullet_turret"
}
```

#### [Item Smfireball Turret Kit](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/items/smfireball_turret_kit.item.json)


```json
"minecraft:entity_placer": {
  "entity": "mikeamm_gwve:smfireball_turret"
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
