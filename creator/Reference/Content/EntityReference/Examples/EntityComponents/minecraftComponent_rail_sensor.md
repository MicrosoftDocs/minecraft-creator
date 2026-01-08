---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:rail_sensor"
description: "Describes the minecraft:rail_sensor entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:rail_sensor

Enables minecart-type entities to detect powered rails and respond to activation state changes. Triggers events when the entity passes over activated or deactivated rails, enabling custom minecart behaviors like launching at boosted speed, stopping at braking rails, or triggering special effects at detector rails.


## Rail Sensor Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| check_block_types | false | Boolean true/false | If true, on tick this entity will trigger its on_deactivate behavior | Command Block Minecart: `true` | 
| eject_on_activate | true | Boolean true/false | If true, this entity will eject all of its riders when it passes over an activated rail | Minecart: `true` | 
| eject_on_deactivate | false | Boolean true/false | If true, this entity will eject all of its riders when it passes over a deactivated rail |  | 
| on_activate | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to call when the rail is activated | Command Block Minecart: `{"event":"minecraft:command_block_activate"}`, Hopper Minecart: `{"event":"minecraft:hopper_deactivate"}`, Tnt Minecart: `{"filters":{"all_of":[{"test":"is_game_rule","domain":"tntexplodes","operator":"==","value":true}]},"event":"minecraft:on_prime"}` | 
| on_deactivate | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to call when the rail is deactivated | Command Block Minecart: `{"event":"minecraft:command_block_deactivate"}`, Hopper Minecart: `{"event":"minecraft:hopper_activate"}` | 
| tick_command_block_on_activate | true | Boolean true/false | If true, command blocks will start ticking when passing over an activated rail | Command Block Minecart: `true` | 
| tick_command_block_on_deactivate | false | Boolean true/false | If false, command blocks will stop ticking when passing over a deactivated rail |  | 

## Samples

#### [Command Block Minecart](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/command_block_minecart.json)

At /minecraft:entity/component_groups/minecraft:command_block_active/minecraft:rail_sensor/: 

```json
"minecraft:rail_sensor": {
  "check_block_types": true,
  "eject_on_activate": false,
  "eject_on_deactivate": false,
  "tick_command_block_on_activate": true,
  "tick_command_block_on_deactivate": false,
  "on_deactivate": {
    "event": "minecraft:command_block_deactivate"
  }
}
```

At /minecraft:entity/component_groups/minecraft:command_block_inactive/minecraft:rail_sensor/: 

```json
"minecraft:rail_sensor": {
  "check_block_types": false,
  "eject_on_activate": false,
  "eject_on_deactivate": false,
  "tick_command_block_on_activate": true,
  "tick_command_block_on_deactivate": false,
  "on_activate": {
    "event": "minecraft:command_block_activate"
  }
}
```

#### [Hopper Minecart](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/hopper_minecart.json)

At /minecraft:entity/component_groups/minecraft:hopper_active/minecraft:rail_sensor/: 

```json
"minecraft:rail_sensor": {
  "on_activate": {
    "event": "minecraft:hopper_deactivate"
  }
}
```

At /minecraft:entity/component_groups/minecraft:hopper_inactive/minecraft:rail_sensor/: 

```json
"minecraft:rail_sensor": {
  "on_deactivate": {
    "event": "minecraft:hopper_activate"
  }
}
```

#### [Minecart](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/minecart.json)


```json
"minecraft:rail_sensor": {
  "eject_on_activate": true
}
```

#### [Tnt Minecart](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/tnt_minecart.json)

At /minecraft:entity/component_groups/minecraft:primed_tnt/minecraft:rail_sensor/: 

```json
"minecraft:rail_sensor": {}
```

At /minecraft:entity/component_groups/minecraft:inactive/minecraft:rail_sensor/: 

```json
"minecraft:rail_sensor": {
  "on_activate": {
    "filters": {
      "all_of": [
        {
          "test": "is_game_rule",
          "domain": "tntexplodes",
          "operator": "==",
          "value": true
        }
      ]
    },
    "event": "minecraft:on_prime"
  }
}
```
