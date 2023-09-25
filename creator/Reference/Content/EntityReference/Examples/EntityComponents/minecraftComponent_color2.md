---
author: mammerla
ms.author: mikeam
title: Entity Documentation - minecraft:color2
description: "A reference document detailing the 'color2' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation -  minecraft:color2

`minecraft:color2` Defines the entity's second texture color.

> [!NOTE]
> This attribute only works on vanilla entities that have a second predefined color value (`tropical fish`)

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|value| 0| Integer|  The Palette Color value of the entity. |

## Example

```json
"minecraft:color2":{
    "value": 2,
}
```

## Vanilla entities examples

### tropical fish

>[!Note]
>This snippet shows `minecraft:color` and `minecraft:color2` working together to create a special variant.

```json
"minecraft:color": {
    "value": 0
},
"minecraft:color2": {
    "value": 7
}
```

## Vanilla entities using `minecraft:color2`

- [tropicalfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/tropicalfish.md)