---
author: JimSeaman42
ms.author: mikeam
title: Item Documentation - minecraft:projectile
description: "A reference document detailing the 'projectile' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - minecraft:projectile

`minecraft:projectile` compels the item to shoot, similarly to an arrow. Items with `minecraft:projectile` can be shot from dispensers or used as ammunition for items with the `minecraft:shooter` item component. Additionally, this component sets the entity that is spawned for items that also contain the `minecraft:throwable` component.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|minimum_critical_power|*not set*| Float| Defines the time a projectile needs to charge in order to critically hit|
|projectile_entity|*not set* | String| The entity to be fired as a projectile. If no namespace is specified, it is assumed to be `minecraft`|

See [Custom Item Use Priority](../ItemUsePriority.md) for more information on dispense behavior.

## Example

```json
"minecraft:projectile":{
    "minimum_critical_power": 1.25,
    "projectile_entity": "arrow"
}
```
