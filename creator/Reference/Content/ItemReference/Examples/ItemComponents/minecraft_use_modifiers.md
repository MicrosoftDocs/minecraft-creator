---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:use_modifiers"
description: "Describes the minecraft:use_modifiers item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:use_modifiers

Determines how long an item takes to use in combination with components such as Shooter, Throwable, or Food.


## Use Modifiers Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| movement_modifier | *not set* | Decimal number | Modifier value to scale the players movement speed when item is in use. Value must be <= 1. | Apple: `0.35` | 
| use_duration | *not set* | Decimal number | How long the item takes to use in seconds. | Apple: `1.6` | 

## Samples

#### [Apple](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/apple.json)


```json
"minecraft:use_modifiers": {
  "use_duration": 1.6,
  "movement_modifier": 0.35
}
```

#### [Cooked Dream Turkey](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/chill_dreams/1_dream_turkey/behavior_packs/mamm_cds/items/cooked_dream_turkey.json)


```json
"minecraft:use_modifiers": {
  "use_duration": 4,
  "movement_modifier": 0.35
}
```

#### [My Sword Shoot](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_sword_shoot.json)


```json
"minecraft:use_modifiers": {
  "use_duration": 3
}
```
