---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:projectile"
description: "Describes the minecraft:projectile item component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:projectile

Defines an item as a projectile that can be shot from dispensers or used as ammunition with minecraft:shooter. When combined with minecraft:throwable, this component specifies which entity is spawned when the item is thrown.


## Item Projectile Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| minimum_critical_power | 0 | Decimal number | Specifies how long a player must charge a projectile for it to critically hit. | 
| projectile_entity | *not set* | String | Which entity is to be fired as a projectile. Value must match a regular expression pattern of "^(?:\w+(?:\.\w+)*:(?=\w))?(?:\w+(?:\.\w+)*)(?:<((?:\w+(?:\.\w+)*:(?=\w))?\w+(?:\.\w+)*)*>)?$". | 

## Samples


```json
"minecraft:projectile": {
  "minimum_critical_power": 1.25,
  "projectile_entity": "arrow"
}
```
