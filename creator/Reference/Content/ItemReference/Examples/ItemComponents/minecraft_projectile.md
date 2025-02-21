---
author: mammerla
ms.author: mikeam
title: "Items Documentation - projectile"
description: "Describes the projectile Items"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - projectile

Compels the item to shoot, similarly to an arrow. Items with minecraft:projectile can be shot from dispensers or used as ammunition for items with the minecraft:shooter item component. Additionally, this component sets the entity that is spawned for items that also contain the minecraft:throwable component.


## Projectile Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| minimum_critical_power | *not set* | Decimal number | Specifies how long a player must charge a projectile for it to critically hit. | My Sword Chuck: `1.25` | 
| projectile_entity | *not set* | String | Which entity is to be fired as a projectile. | Wind Charge: `"wind_charge_projectile"`, My Sword Chuck: `"minecraft:snowball"` | 

## Samples

#### [Wind Charge](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/wind_charge.json)


```json
{
  "projectile_entity": "wind_charge_projectile"
}
```

#### [My Sword Chuck](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_sword_chuck.json)


```json
{
  "minimum_critical_power": 1.25,
  "projectile_entity": "minecraft:snowball"
}
```

#### [My Sword Shoot](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_sword_shoot.json)


```json
{
  "minimum_critical_power": 1.25,
  "projectile_entity": "minecraft:snowball"
}
```
