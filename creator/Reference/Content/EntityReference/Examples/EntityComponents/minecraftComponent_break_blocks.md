---
author: v-josjones
ms.author: v-josjones
title: minecraft:break_blocks
ms.prod: gaming
---

# minecraft:break_blocks

`minecraft:break_blocks` specifies the blocks that the entity can break as it moves around.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|breakable_blocks|*not set* | List|  A list of the blocks that can be broken as this entity moves around |

## Example

```json
"minecraft:break_blocks":{
    "breakable_blocks": [
        "grass",
        "dirt"
    ]
}
```

## Vanilla entities examples

### ravager

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/ravager.json" range="298-333":::

## Vanilla entities using `minecraft:break_blocks`

- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
