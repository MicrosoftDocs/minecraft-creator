---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:is_dyeable
description: "A reference document detailing the 'is_dyeable' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation -  minecraft:is_dyeable

`minecraft:is_dyeable` allows the entity to be interacted with dyes to change its color.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|interact_text|*not set* | String|  The text that will display when interacting with this entity with a dye when playing with Touch-screen controls. |

## Example

```json
"minecraft:is_dyeable":{
    "interact_text": "action.interact.dye"
}
```

## Vanilla entities examples

### sheep

```json
"minecraft:is_dyeable": {
    "interact_text": "action.interact.dye"
}
```

## Vanilla entities using `minecraft:is_dyeable`

- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [sheep](../../../../Source/VanillaBehaviorPack_Snippets/entities/sheep.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
