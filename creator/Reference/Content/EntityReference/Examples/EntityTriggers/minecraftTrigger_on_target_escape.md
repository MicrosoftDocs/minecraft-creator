---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:on_target_escape"
description: "Describes the minecraft:on_target_escape entity trigger"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:on_target_escape

Adds a trigger to call when this entity loses the target it currently has.


## On Target Escape Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | The event to run when the conditions for this trigger are met. | Drowned: `"minecraft:lost_target"`, Llama: `"minecraft:on_calm"`, Magma Cube: `"minecraft:become_calm"` | 
| filters | *not set* | Minecraft filter | The list of conditions for this trigger to execute. | Llama: `{"all_of":[{"test":"is_family","subject":"target","value":"wolf"},{"test":"has_component","subject":"target","operator":"!=","value":"minecraft:is_tamed"}]}` | 
| target | self | String | The target of the event. | Dolphin: `"self"` | 

## Samples

#### [Dolphin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json)


```json
"minecraft:on_target_escape": {
  "target": "self"
}
```

#### [Drowned](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json)


```json
"minecraft:on_target_escape": {
  "event": "minecraft:lost_target",
  "target": "self"
}
```

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)


```json
"minecraft:on_target_escape": {
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
  "event": "minecraft:on_calm",
  "target": "self"
}
```

#### [Magma Cube](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/magma_cube.json)


```json
"minecraft:on_target_escape": {
  "event": "minecraft:become_calm",
  "target": "self"
}
```
