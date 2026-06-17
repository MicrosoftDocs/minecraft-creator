---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:shooter"
description: "Describes the minecraft:shooter item component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:shooter

Compels an item to shoot projectiles, similarly to a bow or crossbow. Must have the minecraft:use_modifiers component in order to function properly.

> [!Note]
> Ammunition used by minecraft:shooter must have the minecraft:projectile component in order to function properly.

> [!Note]
> Items equipped with the shooter component will only sustain damage while shooting. Durability will remain unaffected if the item is used for melee attacks.

> [!Note]
> This item requires a format version of at least 1.20.10.

> [!Note]
> Requires the following component in order to work properly:
> 
> * [Projectile (minecraft:projectile)](./minecraft_projectile.md)
> 

## Item Shooter Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| ammunition | [] | Array of [Ammunition](#item-ammunition) items | A list of ammunition entries that define which items can be used as projectiles for this shooter. | 
| charge_on_draw | false | Boolean true/false | When true, the shooter begins charging when the player starts drawing, similar to a crossbow. Default is false. | 
| max_draw_duration | 0 | Decimal number | The maximum time in seconds that a player can draw the shooter before it automatically fires or reaches maximum power. Default is 0. | 
| scale_power_by_draw_duration | false | Boolean true/false | When true, the projectile's launch power increases based on how long the player holds the use button before releasing. Default is false. | 

### ammunition

A list of ammunition entries that define which items can be used as projectiles for this shooter. Each entry specifies the item, whether to search the offhand, inventory, and whether to use in creative mode.


### Item Ammunition
Configures this item as ammunition consumed by ranged weapons like bows and crossbows. Reference compatible shooter items and specify search behavior for inventory slots. When players use the associated weapon, this item is consumed and its projectile is launched.


#### Item Ammunition Properties

**JSON path:** `ammunition`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| item | *not set* | String | Ammunition item description identifier. | 
| item (as Keyed set of strings) | *not set* | Keyed set of strings |  | 
| search_inventory | false | Boolean true/false | Can search inventory? Default is set to false. | 
| use_in_creative | false | Boolean true/false | Can use in creative mode? Default is set to false. | 
| use_offhand | false | Boolean true/false | Can use off-hand? Default is set to false. | 

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
