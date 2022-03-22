---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:rail_sensor
ms.prod: gaming
---

# Entity Documentation - minecraft:rail_sensor

`minecraft:rail_sensor` defines the entity's behavior when passing over an activated or deactivated rail.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| check_block_types| False| Boolean| If true, on tick this entity will trigger its on_deactivate behavior |
| eject_on_activate| True| Boolean| If true, this entity will eject all of its riders when it passes over an activated rail |
| eject_on_deactivate| False| Boolean| If true, this entity will eject all of its riders when it passes over a deactivated rail |
| on_activate| *not set*| JSON Object | Event to call when the rail is activated |
| on_deactivate| *not set*| JSON Object | Event to call when the rail is deactivated |
| tick_command_block_on_activate| True| Boolean| If true, command blocks will start ticking when passing over an activated rail |
| tick_command_block_on_deactivate| False| Boolean| If false, command blocks will stop ticking when passing over a deactivated rail |

## Example

```json
"minecraft:rail_sensor":{
    "check_block_types": false,
    "eject_on_activate": true,
    "eject_on_deactivate": false,
    "on_activate": {
        "event": "minecraft:command_block_activate"
    }
    "on_deactivate": {
        "event": "minecraft:hopper_activate"
    },
    "tick_command_block_on_activate": true,
    "tick_command_block_on_deactivate": false
}
```

## Vanilla entities examples

### minecart

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/minecart.json" range="32-34":::

## Vanilla entities using `minecraft:rail_sensor`

- [command_block_minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/command_block_minecart.md)
- [hopper_minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/hopper_minecart.md)
- [minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/minecart.md)
- [tnt_minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/tnt_minecart.md)