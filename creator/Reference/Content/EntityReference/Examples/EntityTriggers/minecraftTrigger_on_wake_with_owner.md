---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:on_wake_with_owner"
description: "Describes the minecraft:on_wake_with_owner entity trigger"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:on_wake_with_owner

A trigger when a mob's tamed onwer wakes up.


## On wake with owner trigger Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| event | *not set* | String | The event to run when the conditions for this trigger are met. | Cat: `"minecraft:pet_slept_with_owner"` | 
| filters | *not set* | Minecraft filter | The list of conditions for this trigger to execute. |  | 
| target | self | String | The target of the event. | Cat: `"self"` | 

## Samples

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:on_wake_with_owner": {
  "event": "minecraft:pet_slept_with_owner",
  "target": "self"
}
```
