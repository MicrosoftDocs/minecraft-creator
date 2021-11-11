---
author: v-josjones
ms.author: v-josjones
title: Item Documentation - minecraft:projectile
ms.prod: gaming
---

# Item Documentation - minecraft:projectile

`minecraft:projectile` sets the projectile item component. Projectile items shoot out, like an arrow.

>[!IMPORTANT]
> `minecraft:projectile` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md)

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
