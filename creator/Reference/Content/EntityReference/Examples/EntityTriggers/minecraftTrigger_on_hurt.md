---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:on_hurt"
description: "Describes the minecraft:on_hurt entity trigger"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:on_hurt

Adds a trigger to call when this entity takes damage.


## On Hurt Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | The event to run when the conditions for this trigger are met. | Blaze: `"minecraft:on_hurt_event"`, Ender Crystal: `"minecraft:crystal_explode"`, Pillager: `"minecraft:ranged_mode"` | 
| filters | *not set* | Minecraft filter | The list of conditions for this trigger to execute. |  | 
| target | self | String | The target of the event. | Blaze: `"self"` | 

## Samples

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:on_hurt": {
  "event": "minecraft:on_hurt_event",
  "target": "self"
}
```

#### [Ender Crystal](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ender_crystal.json)


```json
"minecraft:on_hurt": {
  "event": "minecraft:crystal_explode",
  "target": "self"
}
```

#### [Pillager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/pillager.json)

At /minecraft:entity/component_groups/minecraft:illager_squad_captain/minecraft:on_hurt/: 

```json
"minecraft:on_hurt": {
  "event": "minecraft:ranged_mode",
  "target": "self"
}
```
