---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:color
description: "A reference document detailing the 'color' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation -  minecraft:color

`minecraft:color` Defines the entity's main color.

> [!NOTE]
> This attribute only works on vanilla entities that have predefined color values (`sheep`, `llama`, `shulker`).

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|value| 0| Integer|  The Palette Color value of the entity. |

## Example

```json
"minecraft:color":{
    "value": 0
}
```

## Vanilla entities examples

### tropical fish

>[!Note]
>This snippet is showing how `minecraft:color` and `minecraft:color2` working together to create a special variant.

```json
"minecraft:color": {
    "value": 7
},
"minecraft:color2": {
    "value": 3
}
```

## Vanilla entities using `minecraft:color`

- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [sheep](../../../../Source/VanillaBehaviorPack_Snippets/entities/sheep.md)
- [tropicalfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/tropicalfish.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
