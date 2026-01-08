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
| event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | The event to run when the conditions for this trigger are met. | Bee: `"attacked"`, Cave Spider: `"minecraft:become_angry"`, Drowned: `"minecraft:has_target"` | 
| filters | *not set* | Minecraft filter | The list of conditions for this trigger to execute. | Llama: `{"all_of":[{"test":"is_family","subject":"target","value":"wolf"},{"test":"has_component","subject":"target","operator":"!=","value":"minecraft:is_tamed"}]}` | 
| target | self | String | The target of the event. | Bee: `"self"` | 

## Samples

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)


```json
"minecraft:on_target_acquired": {
  "event": "attacked",
  "target": "self"
}
```

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)


```json
"minecraft:on_target_acquired": {
  "event": "minecraft:become_angry"
}
```

#### [Drowned](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json)


```json
"minecraft:on_target_acquired": {
  "event": "minecraft:has_target",
  "target": "self"
}
```

#### [Enderman](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/enderman.json)


```json
"minecraft:on_target_acquired": {
  "event": "minecraft:become_angry",
  "target": "self"
}
```

#### [Hoglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/hoglin.json)


```json
"minecraft:on_target_acquired": {
  "event": "become_angry_event",
  "target": "self"
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

#### [Panda](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/panda.json)

At /minecraft:entity/component_groups/minecraft:panda_baby/minecraft:on_target_acquired/: 

```json
"minecraft:on_target_acquired": {
  "event": "minecraft:on_scared",
  "target": "self"
}
```

At /minecraft:entity/component_groups/minecraft:panda_angry/minecraft:on_target_acquired/: 

```json
"minecraft:on_target_acquired": {}
```

#### [Polar Bear](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/polar_bear.json)

At /minecraft:entity/component_groups/minecraft:adult_wild/minecraft:on_target_acquired/: 

```json
"minecraft:on_target_acquired": {
  "event": "minecraft:on_anger",
  "target": "self"
}
```

#### [Vindicator](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/vindicator.json)


```json
"minecraft:on_target_acquired": {
  "event": "minecraft:become_aggro",
  "target": "self"
}
```
