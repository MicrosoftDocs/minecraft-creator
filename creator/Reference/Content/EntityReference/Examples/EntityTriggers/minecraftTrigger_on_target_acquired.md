---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:on_target_acquired"
description: "Describes the minecraft:on_target_acquired entity trigger"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:on_target_acquired

Adds a trigger to call when this entity finds a target.


## On Target Acquired Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| event | *not set* | String | The event to run when the conditions for this trigger are met. | Cave Spider: `"minecraft:become_angry"`, Llama: `"minecraft:mad_at_wolf"`, Magma Cube: `"minecraft:become_aggressive"` | 
| filters | *not set* | Minecraft filter | The list of conditions for this trigger to execute. | Llama: `{"all_of":[{"test":"is_family","subject":"target","value":"wolf"},{"test":"has_component","subject":"target","operator":"!=","value":"minecraft:is_tamed"}]}` | 
| target | self | String | The target of the event. | Llama: `"self"` | 

## Samples

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)


```json
"minecraft:on_target_acquired": {
  "event": "minecraft:become_angry"
}
```

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)


```json
"minecraft:on_target_acquired": {
  "filters": {
    "all_of": [
      {
        "test": "is_family",
        "subject": "target",
        "value": "wolf"
      },
      {
        "test": "has_component",
        "subject": "target",
        "operator": "!=",
        "value": "minecraft:is_tamed"
      }
    ]
  },
  "event": "minecraft:mad_at_wolf",
  "target": "self"
}
```

#### [Magma Cube](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/magma_cube.json)


```json
"minecraft:on_target_acquired": {
  "event": "minecraft:become_aggressive",
  "target": "self"
}
```

#### [Polar Bear](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/polar_bear.json)

At /minecraft:entity/component_groups/minecraft:baby_wild/minecraft:on_target_acquired/: 

```json
"minecraft:on_target_acquired": {
  "event": "minecraft:on_scared",
  "target": "self"
}
```

At /minecraft:entity/component_groups/minecraft:adult_wild/minecraft:on_target_acquired/: 

```json
"minecraft:on_target_acquired": {
  "event": "minecraft:on_anger",
  "target": "self"
}
```

#### [Silverfish](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/silverfish.json)


```json
"minecraft:on_target_acquired": {
  "event": "minecraft:become_angry",
  "target": "self"
}
```
