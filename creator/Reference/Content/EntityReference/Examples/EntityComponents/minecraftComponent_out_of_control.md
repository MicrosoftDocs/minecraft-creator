---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:out_of_control
description: "A reference document detailing the 'out_of_control' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:out_of_control

`minecraft:out_of_control` defines the entity's 'out of control' state.

## Example

```json
"minecraft:out_of_control":{
}
```

## Vanilla entities examples

### boat

In the `boat` entity, `minecraft:out_of_control` is used in conjunction with `minecraft:buoyant`to create a custom event.

```json
"minecraft:out_of_control": {
        }
      },
      "minecraft:above_bubble_column_up": {
        "minecraft:buoyant": {
          "base_buoyancy": 1.0,
          "apply_gravity": true,
          "simulate_waves": false,
          "liquid_blocks": [
            "minecraft:water",
            "minecraft:flowing_water"
          ],
          "drag_down_on_buoyancy_removed": 0.7
        },
        "minecraft:out_of_control": {
        }
      }
```

## Vanilla entities using `minecraft:out_of_control`

- [boat](../../../../Source/VanillaBehaviorPack_Snippets/entities/boat.md)
