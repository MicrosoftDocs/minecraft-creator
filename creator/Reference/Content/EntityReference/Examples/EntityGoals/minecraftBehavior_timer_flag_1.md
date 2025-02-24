---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - behavior.timer_flag_1"
description: "Describes the behavior.timer_flag_1 AI Goals"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - behavior.timer_flag_1

Fires an event when this behavior starts, then waits for a duration before stopping. When stopping due to that timeout or due to being interrupted by another behavior, fires another event. query.timer_flag_1 will return 1.0 on both the client and server when this behavior is running, and 0.0 otherwise.


## Timer Flag 1 Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | *not set* | Array of strings |  | Sniffer: `["move","look"]` | 
| cooldown_range | *not set* | Range of integers | Goal cooldown range in seconds. If specified, the cooldown will have to elapse even before the goal can be selected for the first time. | Armadillo: `2.5`, Sniffer: `[400,500]` | 
| duration_range | *not set* | Range of integers | Goal duration range in seconds. | Armadillo: `[5,20]`, `1.5`, Bee: `[0.05,0.05]` | 
| on_end | *not set* | Minecraft Event Trigger | Event(s) to run when the goal end. | Armadillo: `{"event":"minecraft:start_peeking"}`, Bee: `{"event":"minecraft:on_poison_effect_added","target":"self"}`, `{"event":"minecraft:on_wither_effect_added","target":"self"}` | 
| on_start | *not set* | Minecraft Event Trigger | Event(s) to run when the goal starts. | Armadillo: `{"event":"minecraft:stop_peeking"}`, `{"event":"minecraft:start_unrolling"}` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Sniffer: `6` | 

## Samples

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)

At /minecraft:entity/component_groups/minecraft:rolled_up_with_threats/minecraft:behavior.timer_flag_1/: 

```json
{
  "priority": 0,
  "cooldown_range": 2.5,
  "duration_range": [
    5,
    20
  ],
  "on_start": {
    "event": "minecraft:stop_peeking"
  },
  "on_end": {
    "event": "minecraft:start_peeking"
  }
}
```

At /minecraft:entity/component_groups/minecraft:rolled_up_without_threats/minecraft:behavior.timer_flag_1/: 

```json
{
  "priority": 0,
  "cooldown_range": 2.5,
  "duration_range": 1.5,
  "on_start": {
    "event": "minecraft:start_unrolling"
  }
}
```

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)

At /minecraft:entity/component_groups/add_poison_effect/minecraft:behavior.timer_flag_1/: 

```json
{
  "priority": 0,
  "cooldown_range": 0,
  "duration_range": [
    0.05,
    0.05
  ],
  "on_end": {
    "event": "minecraft:on_poison_effect_added",
    "target": "self"
  }
}
```

At /minecraft:entity/component_groups/add_wither_effect/minecraft:behavior.timer_flag_1/: 

```json
{
  "priority": 0,
  "cooldown_range": 0,
  "duration_range": [
    0.05,
    0.05
  ],
  "on_end": {
    "event": "minecraft:on_wither_effect_added",
    "target": "self"
  }
}
```

#### [Creaking](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creaking.json)


```json
{
  "priority": 0,
  "cooldown_range": 0,
  "duration_range": [
    2.25,
    2.25
  ],
  "on_end": {
    "event": "minecraft:crumble",
    "target": "self"
  }
}
```

#### [Sniffer](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sniffer.json)


```json
{
  "priority": 6,
  "control_flags": [
    "move",
    "look"
  ],
  "cooldown_range": [
    400,
    500
  ],
  "duration_range": 2,
  "on_end": {
    "event": "on_scenting_success",
    "target": "self"
  }
}
```
