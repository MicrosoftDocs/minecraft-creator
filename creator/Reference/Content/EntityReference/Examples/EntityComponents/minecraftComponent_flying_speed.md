---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:flying_speed
description: "A reference document detailing the 'flying_speed' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation -  minecraft:flying_speed

`minecraft:flying_speed` sets the speed, in Blocks, at which the entity flies.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|value| 0| Decimal| Flying speed in blocks per tick. |

## Example

```json
"minecraft:flying_speed":{
    "value": 2.0,
}
```

## Vanilla entities examples

### ender_dragon

```json
"minecraft:flying_speed": {
    "value": 0.6
}
```

## Vanilla entities using `minecraft:flying_speed`

- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)