---
author: v-josjones
ms.author: v-josjones
title: Item Documentation - minecraft:wearable
ms.prod: gaming
---

# Item Documentation - minecraft:wearable

`minecraft:wearable` sets the wearable item component.

>[!IMPORTANT]
> `minecraft:wearable` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md)

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
- slot.equippable

## Example

```json
"minecraft:wearable":{
    "dispensable" : true,
    "slot": "slot.chest"
}
```
