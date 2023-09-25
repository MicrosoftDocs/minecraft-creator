---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:rail_movement
description: "A reference document detailing the 'rail_movement' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:rail_movement

`minecraft:rail_movement` defines the entity's movement on rails. An entity with this component is only allowed to move on the rail.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| max_speed| 0.4| Decimal| Maximum speed that this entity will move at when on the rail. |

## Example

```json
"minecraft:rail_movement":{
    "max_speed": 0.4
}
```

## Vanilla entities examples

### minecart

```json
"minecraft:rail_movement": {
}
```

## Vanilla entities using `minecraft:rail_movement`

- [chest_minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/chest_minecart.md)
- [command_block_minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/command_block_minecart.md)
- [hopper_minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/hopper_minecart.md)
- [minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/minecart.md)
- [tnt_minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/tnt_minecart.md)
