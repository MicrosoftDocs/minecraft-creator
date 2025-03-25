---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:shooter"
description: "Describes the minecraft:shooter item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:shooter

Compels an item to shoot projectiles, similarly to a bow or crossbow. Must have the minecraft:use_modifiers component in order to function properly.

> [!Note]
> Ammunition used by minecraft:shooter must have the minecraft:projectile component in order to function properly.

> [!Note]
> Requires the following component in order to work properly:
> 
> * [Projectile (minecraft:projectile)](../EntityComponents/minecraftComponent_projectile.md)
> 

## Shooter Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| ammunition | *not set* | Array of [Ammunition](#ammunition-item-type) items | Ammunition. | My Sword Shoot: `[{"item":"minecraft:snowball","use_offhand":true,"search_inventory":true,"use_in_creative":true}]` | 
| charge_on_draw | *not set* | Boolean true/false | Charge on draw? Default is set to false. |  | 
| max_draw_duration | *not set* | Decimal number | Draw Duration. Default is set to 0. | My Sword Shoot: `1` | 
| scale_power_by_draw_duration | *not set* | Boolean true/false | Scale power by draw duration? Default is set to false. | My Sword Shoot: `true` | 

## Ammunition item type
Struct SharedTypes V1 20 50 ShooterItemComponent Ammunition.


#### Struct SharedTypes V1 20 50 ShooterItemComponent Ammunition Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| item | *not set* | String | Ammunition item description identifier. |  | 
| item (Alternate 1) | *not set* | Keyed set of strings |  |  | 
| search_inventory | *not set* | Boolean true/false | Can search inventory? Default is set to false. |  | 
| use_in_creative | *not set* | Boolean true/false | Can use in creative mode? Default is set to false. |  | 
| use_offhand | *not set* | Boolean true/false | Can use off-hand? Default is set to false. |  | 

## Samples


```json
"minecraft:shooter": {
  "ammunition": [
    {
      "item": "custom_projectile",
      "use_offhand": true,
      "search_inventory": true,
      "use_in_creative": true
    }
  ],
  "max_draw_duration": 1,
  "scale_power_by_draw_duration": true,
  "charge_on_draw": false
}
```

#### [My Sword Shoot](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_sword_shoot.json)


```json
"minecraft:shooter": {
  "ammunition": [
    {
      "item": "minecraft:snowball",
      "use_offhand": true,
      "search_inventory": true,
      "use_in_creative": true
    }
  ],
  "max_draw_duration": 1,
  "scale_power_by_draw_duration": true,
  "charge_on_draw": false
}
```
