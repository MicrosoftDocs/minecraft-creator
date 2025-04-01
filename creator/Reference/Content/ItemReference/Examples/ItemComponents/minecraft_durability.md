---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:durability"
description: "Describes the minecraft:durability item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:durability

Sets how much damage the item can take before breaking, and allows the item to be combined at an anvil, grindstone, or crafting table.


## Durability Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| damage_chance | *not set* | [Damage Chance](#damage-chance-item-type) item | Specifies the percentage chance of this item losing durability. Default is set to 100. Defined as an int range with min and max value. | My Sword Chuck: `{"min":10,"max":50}`, My Sword Singing: `{"min":0,"max":0}`, My Sword Weak: `{"min":100,"max":100}` | 
| max_durability | *not set* | Integer number | Max durability is the amount of damage that this item can take before breaking. This is a required parameter and has a minimum of 0. | Chestplate: `200`, My Sword Chuck: `10`, My Sword Singing: `1000` | 

## Damage Chance item type
IntRange


#### IntRange Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | *not set* | Integer number | max |  | 
| min | *not set* | Integer number | min |  | 

## Samples


```json
"minecraft:durability": {
  "damage_chance": {
    "min": 10,
    "max": 50
  },
  "max_durability": 36
}
```

#### [Item Axe Turret Kit](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/items/axe_turret_kit.item.json)


```json
"minecraft:durability": {
  "max_durability": 251
}
```

#### [Chestplate](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/chestplate.json)


```json
"minecraft:durability": {
  "max_durability": 200
}
```

#### [My Sword Chuck](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_sword_chuck.json)


```json
"minecraft:durability": {
  "damage_chance": {
    "min": 10,
    "max": 50
  },
  "max_durability": 10
}
```

#### [My Sword Singing](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_sword_singing.json)


```json
"minecraft:durability": {
  "damage_chance": {
    "min": 0,
    "max": 0
  },
  "max_durability": 1000
}
```

#### [My Sword Weak](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_sword_weak.json)


```json
"minecraft:durability": {
  "damage_chance": {
    "min": 100,
    "max": 100
  },
  "max_durability": 2
}
```
