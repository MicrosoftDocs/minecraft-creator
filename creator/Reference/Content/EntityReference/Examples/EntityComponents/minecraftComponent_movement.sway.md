---
author: v-jeffreykim
ms.author: v-jeffreykim
title: minecraft:movement.sway
ms.prod: gaming
---

# minecraft:movement.sway

`minecraft:movement.sway` causes the mob to sway side to side giving the impression it is swimming.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| max_turn| 30.0| Decimal| The maximum number in degrees the mob can turn per tick. |

## Example

```json
"minecraft:movement.sway":{
    "max_turn": 30.0,
}
```

## Vanilla entities examples

### fish

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/fish.json" range="69-71":::

## Vanilla entities using `minecraft:movement.sway`

- [elder_guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/elder_guardian.md)
- [fish](../../../../Source/VanillaBehaviorPack_Snippets/entities/fish.md)
- [guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/guardian.md)
- [pufferfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/pufferfish.md)
- [salmon](../../../../Source/VanillaBehaviorPack_Snippets/entities/salmon.md)
- [tropicalfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/tropicalfish.md)