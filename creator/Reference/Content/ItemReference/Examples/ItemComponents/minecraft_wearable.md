---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:wearable"
description: "Describes the minecraft:wearable item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:wearable

Sets the wearable item component.

> [!Note]
> Here are the following equipment slots that can be set for the value of slot: slot.weapon.mainhand, slot.weapon.offhand, slot.armor.head, slot.armor.chest, slot.armor.legs, slot.armor.feet, slot.hotbar, slot.inventory, slot.enderchest, slot.saddle, slot.armor, slot.chest, slot.equippable.


## Item Components Wearable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| hides_player_location | false | Boolean true/false | Determines whether the Player's location is hidden on Locator Maps and the Locator Bar when the wearable item is worn. Default is false. |  | 
| protection | 0 | Integer number | How much protection the wearable item provides. Default is set to 0. |  | 
| slot | *not set* | [Slot](#slot-choices) choices | Specifies where the item can be worn. If any non-hand slot is chosen, the max stack size is set to 1. | Chestplate: `"slot.armor.chest"`, Crown: `"slot.armor.head"`, My Boots: `"slot.armor.feet"` | 
| dispensable | *not set* | Boolean true/false |  | Chestplate: `true` | 

### Slot choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| slot.armor.body | Slot.armor.body | |
| slot.armor.chest | Slot.armor.chest | |
| slot.armor.feet | Slot.armor.feet | |
| slot.armor.head | Slot.armor.head | |
| slot.armor.legs | Slot.armor.legs | |
| slot.weapon.offhand | Slot.weapon.offhand | |

## Samples

#### [Chestplate](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/chestplate.json)


```json
"minecraft:wearable": {
  "dispensable": true,
  "slot": "slot.armor.chest"
}
```

#### [Crown](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/crown.json)


```json
"minecraft:wearable": {
  "dispensable": true,
  "slot": "slot.armor.head"
}
```

#### [My Boots](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_boots.json)


```json
"minecraft:wearable": {
  "dispensable": true,
  "slot": "slot.armor.feet"
}
```

#### [My Leggings](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_leggings.json)


```json
"minecraft:wearable": {
  "dispensable": true,
  "slot": "slot.armor.legs"
}
```

#### [Wrench](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/wrench.json)


```json
"minecraft:wearable": {
  "dispensable": true,
  "slot": "slot.weapon.offhand"
}
```
