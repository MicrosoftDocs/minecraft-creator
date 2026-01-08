---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:on_friendly_anger"
description: "Describes the minecraft:on_friendly_anger entity trigger"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:on_friendly_anger

Adds a trigger that will run when a nearby entity of the same type as this entity becomes Angry.


## On Friendly Anger Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | The event to run when the conditions for this trigger are met. | Panda: `"minecraft:on_anger"`, Trader Llama: `"minecraft:defend_wandering_trader"` | 
| filters | *not set* | Minecraft filter | The list of conditions for this trigger to execute. |  | 
| target | self | String | The target of the event. | Panda: `"self"` | 

## Samples

#### [Panda](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/panda.json)


```json
"minecraft:on_friendly_anger": {
  "event": "minecraft:on_anger",
  "target": "self"
}
```

#### [Trader Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/trader_llama.json)


```json
"minecraft:on_friendly_anger": {
  "event": "minecraft:defend_wandering_trader",
  "target": "self"
}
```
