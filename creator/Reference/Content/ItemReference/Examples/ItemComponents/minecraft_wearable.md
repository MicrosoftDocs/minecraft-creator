---
author: mammerla
ms.author: mikeam
title: "Items Documentation - wearable"
description: "Describes the wearable Items"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - wearable

Sets the wearable item component.


## Wearable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| dispensable | *not set* | String |  | Chestplate: `true` | 
| protection | *not set* | Integer number | How much protection the wearable item provides. Default is set to 0. |  | 
| slot | *not set* | String | Specifies where the item can be worn. If any non-hand slot is chosen, the max stack size is set to 1. | Chestplate: `"slot.armor.chest"`, Crown: `"slot.armor.head"`, My Boots: `"slot.armor.feet"` | 

## Samples

#### [Chestplate](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/chestplate.json)


```json
{
  "dispensable": true,
  "slot": "slot.armor.chest"
}
```

#### [Crown](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/crown.json)


```json
{
  "dispensable": true,
  "slot": "slot.armor.head"
}
```

#### [My Boots](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_boots.json)


```json
{
  "dispensable": true,
  "slot": "slot.armor.feet"
}
```

#### [My Helm](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_helm.json)


```json
{
  "dispensable": true,
  "slot": "slot.armor.head"
}
```

#### [My Leggings](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_leggings.json)


```json
{
  "dispensable": true,
  "slot": "slot.armor.legs"
}
```

#### [Wrench](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/wrench.json)


```json
{
  "dispensable": true,
  "slot": "slot.weapon.offhand"
}
```
