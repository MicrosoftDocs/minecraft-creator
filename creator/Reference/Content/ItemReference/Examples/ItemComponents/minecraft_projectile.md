---
author: v-josjones
ms.author: v-josjones
title: minecraft:projectile(Item)
ms.prod: gaming
---

# minecraft:projectile (Item)

`minecraft:projectile` sets the projectile item component. Projectile items shoot out, like an arrow.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|minimum_critical_power|*not set*|Decimal|How long you must charge a projectile for it to critically hit.|
|projectile_entity|*not set* |String| The entity to be fired as a projectile.|

## Example

```json
"minecraft:projectile":{
    "minimum_critical_power": 1.25,
    "projectile_entity": "arrow"
}
```
