---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:enchantable"
description: "Describes the minecraft:enchantable item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:enchantable

Determines what enchantments can be applied to the item. Not all enchantments will have an effect on all item components.

> [!Note]
> The following enchantment slot types that can be set for the value of `slot`: sword, bow, pickaxe, armor_head, armor_torso, armor_legs, armor_feet.


## Minecraft Enchantable Item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| slot | *not set* | String | Specifies which types of enchantments can be applied. For example, `bow` would allow this item to be enchanted as if it were a bow. | Chestplate: `"armor_torso"`, My Boots: `"armor_feet"`, My Helm: `"armor_head"` | 
| value | *not set* | Integer number | Specifies the value of the enchantment (minimum of 0). | Chestplate: `10` | 

## Samples

#### [Item Axe Turret Kit](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/items/axe_turret_kit.item.json)


```json
"minecraft:enchantable": {
  "slot": "pickaxe",
  "value": 14
}
```

#### [Chestplate](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/chestplate.json)


```json
"minecraft:enchantable": {
  "value": 10,
  "slot": "armor_torso"
}
```

#### [My Boots](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_boots.json)


```json
"minecraft:enchantable": {
  "value": 10,
  "slot": "armor_feet"
}
```

#### [My Helm](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_helm.json)


```json
"minecraft:enchantable": {
  "value": 10,
  "slot": "armor_head"
}
```

#### [My Leggings](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_leggings.json)


```json
"minecraft:enchantable": {
  "value": 10,
  "slot": "armor_legs"
}
```
