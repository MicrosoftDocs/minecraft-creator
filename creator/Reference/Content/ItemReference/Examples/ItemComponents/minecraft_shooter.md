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
> Requires the following component in order to work properly:
> 
> * [Projectile (minecraft:projectile)](../EntityComponents/minecraftComponent_projectile.md)
> 

## Item Components Shooter Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| ammunition | [] | [Ammunition](#item-components-ammunition) item | A list of ammunition entries that define which items can be used as projectiles for this shooter. Each entry specifies the item, whether to search the offhand, inventory, and whether to use in creative mode. | My Sword Shoot: `[{"item":"minecraft:snowball","use_offhand":true,"search_inventory":true,"use_in_creative":true}]` | 
| charge_on_draw | false | Boolean true/false | When true, the shooter begins charging when the player starts drawing, similar to a crossbow. Default is false. |  | 
| max_draw_duration | 0 | Decimal number | The maximum time in seconds that a player can draw the shooter before it automatically fires or reaches maximum power. Default is 0. | My Sword Shoot: `1` | 
| scale_power_by_draw_duration | false | Boolean true/false | When true, the projectile's launch power increases based on how long the player holds the use button before releasing. Default is false. | My Sword Shoot: `true` | 

## Item Components Ammunition
Is ammunition for a shooter item.


#### Item Components Ammunition Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| item | *not set* | String | Ammunition item description identifier. |  | 
| item (Alternate 1) | *not set* | Keyed set of strings |  |  | 
| search_inventory | false | Boolean true/false | Can search inventory? Default is set to false. |  | 
| use_in_creative | false | Boolean true/false | Can use in creative mode? Default is set to false. |  | 
| use_offhand | false | Boolean true/false | Can use off-hand? Default is set to false. |  | 

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
