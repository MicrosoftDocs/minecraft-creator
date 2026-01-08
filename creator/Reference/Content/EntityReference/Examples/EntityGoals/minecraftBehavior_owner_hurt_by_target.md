---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.owner_hurt_by_target"
description: "Describes the minecraft:behavior.owner_hurt_by_target ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.owner_hurt_by_target

Allows the mob to target another mob that hurts their owner.

> [!Note]
> Requires a player to be set as the tame owner via taming (or the `tame` command, or the tame API on EntityTameableComponent) in order to work properly.

## Owner Hurt By Target Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| entity_types | *not set* | Array of [Entity Types](#entity-types) items | List of entity types that this mob can target if they hurt their owner |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Wolf: `1` | 

## Entity Types
List of entity types that this mob can target if they hurt their owner.


#### Entity Types Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| reevaluate_description | false | Boolean true/false | If true, the targeting entity will continuously reevaluate the target and stop attacking if the target no longer meets the filter conditions. |  | 

## Samples

#### [Wolf](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wolf.json)


```json
"minecraft:behavior.owner_hurt_by_target": {
  "priority": 1
}
```
