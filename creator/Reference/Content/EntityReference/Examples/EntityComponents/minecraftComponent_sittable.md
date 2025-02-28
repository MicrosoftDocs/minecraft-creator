---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:sittable"
description: "Describes the minecraft:sittable entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:sittable

Defines the entity's 'sit' state.


## Sittable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| sit_event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to run when the entity enters the 'sit' state |  | 
| stand_event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to run when the entity exits the 'sit' state |  | 

## Samples

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:sittable": {}
```
