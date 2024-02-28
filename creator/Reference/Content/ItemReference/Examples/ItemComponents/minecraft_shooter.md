---
author: JimSeaman42
ms.author: mikeam
title: Item Documentation - minecraft:shooter
description: "A reference document detailing the 'shooter' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - minecraft:shooter

`minecraft:shooter` compels an item to shoot projectiles, similarly to a bow or crossbow. Must have the `minecraft:use_modifiers` component in order to function properly.

>[!IMPORTANT]
> Ammunition used by `minecraft:shooter` must have the `minecraft:projectile` component in order to function properly.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|ammunition|*not set* | Array| Sets the entity that is used as ammunition|
|charge_on_draw| false| Boolean|Sets if the item is charged when drawn|
|max_draw_duration|0.0| Float| Determines how long can the weapon can be drawn before releasing automatically|
|scale_power_by_draw_duration| false| Boolean|When set to 'true', the longer the weapon is drawn, the more power it will have when released|

See [Custom Item Use Priority](../ItemUsePriority.md) for more information on use behavior.

## Ammunition

The 'ammunition' parameter contains four parameters of its own:

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|item|*not set* |String|Denotes the item description identifier|
|use_offhand|false |Boolean|When set to 'true', ammunition can be used from the offhand|
|search_inventory|false|Boolean| Determines whether the inventory can be searched for ammunition to use|
|use_in_creative|false|Boolean|Determines whether the ammunition can be used in Creative mode|

## Example

```json
"minecraft:shooter":{
    "ammunition" :[{
"item" :"custom_projectile",
"use_offhand" :true,
"search_inventory" :true,
"use_in_creative" :true
    }],
    "max_draw_duration" :1.0,
    "scale_power_by_draw_duration" :true,
    "charge_on_draw" :false
}
```
