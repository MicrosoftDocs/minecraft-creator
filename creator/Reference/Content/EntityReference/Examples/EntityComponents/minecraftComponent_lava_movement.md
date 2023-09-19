---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:lava_movement
description: "A reference document detailing the 'lava_movement' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:lava_movement

`minecraft:lava_movement` allows a custom movement speed across lava blocks.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|value|*not set* | Float | The speed a strider moves over a lava block.|

## Example

```json
"minecraft:lava_movement": {
        "value": 0.32
      }
```

## Vanilla entities examples

### strider

```json
"minecraft:lava_movement": {
        "value": 0.32
      }
```

## Vanilla entities using `minecraft:lookat`

- [strider](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
