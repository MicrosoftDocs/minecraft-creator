---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.defend_trusted_target"
description: "Describes the minecraft:behavior.defend_trusted_target ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.defend_trusted_target

Allows the mob to target another mob that hurts an entity it trusts.

> [!Note]
> Requires a mob to be set to a trusted relationship in order for the behavior to work properly. The `minecraft:trust` component will set the entity state to trusted.


## Defend Trusted Target Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| aggro_sound | *not set* | String | Sound to occasionally play while defending. | Fox: `"mad"` | 
| attack_interval | 0 | Integer number | Time in seconds between attacks |  | 
| entity_types | *not set* | Array of [Entity Types](#entity-types) items | List of entity types that this mob considers valid targets |  | 
| must_see | false | Boolean true/false | If true, only entities in this mob's viewing range can be selected as targets |  | 
| must_see_forget_duration | 3 | Decimal number | Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more |  | 
| on_defend_start | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) |  | Fox: `{"event":"minecraft:fox_configure_defending","target":"self"}` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| sound_chance | *not set* | Decimal number |  | Fox: `0.05` | 
| within_radius | 0 | Decimal number | Distance in blocks that the target can be within to launch an attack | Fox: `25` | 

## Entity Types
List of entity types that this mob considers valid targets.


#### Entity Types Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown | 0 | Decimal number | The amount of time in seconds that the mob has to wait before selecting a target of the same type again |  | 
| filters | *not set* | Minecraft filter | Conditions that make this entry in the list valid |  | 
| max_dist | 16 | Decimal number | Maximum distance this mob can be away to be a valid choice |  | 
| must_see | false | Boolean true/false | If true, the mob has to be visible to be a valid choice |  | 
| must_see_forget_duration | 3 | Decimal number | Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more |  | 
| reevaluate_description | false | Boolean true/false | If true, the mob will stop being targeted if it stops meeting any conditions. |  | 
| sprint_speed_multiplier | 1 | Decimal number | Multiplier for the running speed. A value of 1.0 means the speed is unchanged |  | 
| walk_speed_multiplier | 1 | Decimal number | Multiplier for the walking speed. A value of 1.0 means the speed is unchanged |  | 

## Samples

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)


```json
"minecraft:behavior.defend_trusted_target": {
  "priority": 0,
  "within_radius": 25,
  "must_see": false,
  "aggro_sound": "mad",
  "sound_chance": 0.05,
  "on_defend_start": {
    "event": "minecraft:fox_configure_defending",
    "target": "self"
  }
}
```
