---
author: v-josjones
ms.author: v-josjones
title: minecraft:wearable
ms.prod: gaming
---

# minecraft:wearable

`minecraft:wearable` sets the wearable item component.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|dispensable|*not set*| Boolean|Sets if the item can be dropped by a dispenser block|
|slot|*not set*| Enumerator| Which equipment slot the item can fit in.|

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

## Example

```json
"minecraft:wearable":{
    "dispensable" : true,
    "slot": "slot.chest"
}
```
