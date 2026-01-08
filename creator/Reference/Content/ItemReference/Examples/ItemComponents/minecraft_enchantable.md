---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:enchantable"
description: "Describes the minecraft:enchantable item component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:enchantable

Determines what enchantments can be applied to the item. Not all enchantments will have an effect on all item components.

> [!Note]
> The following enchantment slot types that can be set for the value of `slot`: sword, bow, pickaxe, armor_head, armor_torso, armor_legs, armor_feet.


## Item Components Enchantable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| slot | *not set* | String | Specifies which types of enchantments can be applied. For example, `bow` would allow this item to be enchanted as if it were a bow. Value must match a regular expression pattern of "none|all|g_armor|armor_head|armor_torso|armor_feet|armor_legs|sword|bow|spear|crossbow|melee_spear|g_tool|hoe|shears|flintsteel|shield|g_digging|axe|pickaxe|shovel|fishing_rod|carrot_stick|elytra|cosmetic_head". | Chestplate: `"armor_torso"`, My Boots: `"armor_feet"`, My Helm: `"armor_head"` | 
| value | *not set* | Integer number | Specifies the value of the enchantment (minimum of 0). | Chestplate: `10` | 

## Samples

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
