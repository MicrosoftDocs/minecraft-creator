---
author: JimSeaman42
ms.author: mikeam
title: Item Documentation - minecraft:wearable
description: "A reference document detailing the 'wearable' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - minecraft:wearable

`minecraft:wearable` sets the wearable item component.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|protection|0| Integer| How much protection the wearable has.|
|slot|*not set*| Enumerator| Determines where the item can be worn. If any non-hand slot is chosen, the max stack size is set to 1.|

See [Custom Item Use Priority](../ItemUsePriority.md) for more information on use behavior.

### slot

Here are the following equipment slots that can be set for the value of `slot`.

- slot.weapon.mainhand
- slot.weapon.offhand
- slot.armor.head
- slot.armor.chest
- slot.armor.legs
- slot.armor.feet
- slot.hotbar
- slot.inventory
- slot.enderchest
- slot.saddle
- slot.armor
- slot.chest
- slot.equippable

## Example

```json
"minecraft:wearable":{
    "dispensable" : true,
    "slot": "slot.chest"
}
```
