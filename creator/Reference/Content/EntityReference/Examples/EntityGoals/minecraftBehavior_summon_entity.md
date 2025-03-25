---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.summon_entity"
description: "Describes the minecraft:behavior.summon_entity ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.summon_entity

Allows the mob to attack the player by summoning other entities.


## Summon Entity Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Evocation Illager: `2` | 
| summon_choices | *not set* | Array of [Summon Choices](#summon-choices-item-type) items | List of spells for the mob to use to summon entities. Each spell has the following parameters: | Evocation Illager: `[{"min_activation_range":0,"max_activation_range":3,"cooldown_time":5,"weight":3,"cast_duration":2,"particle_color":"#FF664D59","start_sound_event":"cast.spell","sequence":[{"shape":"circle","target":"self","base_delay":1,"delay_per_summon":0,"num_entities_spawned":5,"entity_type":"minecraft:evocation_fang","size":1.5,"entity_lifespan":1.1,"sound_event":"prepare.attack"},{"shape":"circle","target":"self","base_delay":0.15,"delay_per_summon":0,"num_entities_spawned":8,"entity_type":"minecraft:evocation_fang","size":2.5,"entity_lifespan":1.1}]},{"min_activation_range":3,"weight":3,"cooldown_time":5,"cast_duration":2,"particle_color":"#FF664D59","start_sound_event":"cast.spell","sequence":[{"shape":"line","target":"self","base_delay":1,"delay_per_summon":0.05,"num_entities_spawned":16,"entity_type":"minecraft:evocation_fang","size":20,"entity_lifespan":1.1}]},{"weight":1,"cooldown_time":17,"cast_duration":5,"particle_color":"#FFB3B3CC","sequence":[{"shape":"circle","target":"self","base_delay":5,"num_entities_spawned":3,"entity_type":"minecraft:vex","summon_cap":8,"summon_cap_radius":16,"size":1,"sound_event":"prepare.summon","summon_event":"minecraft:add_damage_timer"}]}]` | 

## Summon Choices item type
List of spells for the mob to use to summon entities. Each spell has the following parameters:


#### Summon Choices Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cast_duration | *not set* | Decimal number | Time in seconds the spell casting will take |  | 
| cooldown_time | 0 | Decimal number | Time in seconds the mob has to wait before using the spell again |  | 
| do_casting | true | Boolean true/false | If true, the mob will do the casting animations and render spell particles |  | 
| filters | *not set* | Minecraft filter |  |  | 
| max_activation_range | 32 | Decimal number | Upper bound of the activation distance in blocks for this spell, must not be negative. |  | 
| min_activation_range | 1 | Decimal number | Lower bound of the activation distance in blocks for this spell, must not be negative. |  | 
| particle_color | 0 | Integer number | The color of the particles for this spell |  | 
| sequence | *not set* | Array of [Sequence](#sequence-item-type) items | List of steps for the spell. Each step has the following parameters: |  | 
| start_sound_event | *not set* | String | The sound event to play when using this spell |  | 
| weight | 0 | Decimal number | The weight of this spell. Controls how likely the mob is to choose this spell when casting one |  | 

## Sequence item type
List of steps for the spell. Each step has the following parameters:


#### Sequence Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| base_delay | 0 | Decimal number | Amount of time in seconds to wait before this step starts |  | 
| delay_per_summon | 0 | Decimal number | Amount of time in seconds before each entity is summoned in this step |  | 
| entity_lifespan | -1 | Decimal number | Amount of time in seconds that the spawned entity will be alive for. A value of -1.0 means it will remain alive for as long as it can |  | 
| entity_type | *not set* | String | The entity type of the entities we will spawn in this step |  | 
| num_entities_spawned | 1 | Integer number | Number of entities that will be spawned in this step |  | 
| shape | line | String | The base shape of this step. Valid values are circle and line |  | 
| size | 1 | Decimal number | The base size of the entity |  | 
| sound_event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | The sound event to play for this step |  | 
| summon_cap | 0 | Integer number | Maximum number of summoned entities at any given time |  | 
| summon_cap_radius | 0 | Decimal number |  |  | 
| summon_event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to invoke on each summoned entity on spawn |  | 
| target | self | String | The target of the spell. This is where the spell will start (line will start here, circle will be centered here) |  | 

## Samples

#### [Evocation Illager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/evocation_illager.json)


```json
"minecraft:behavior.summon_entity": {
  "priority": 2,
  "summon_choices": [
    {
      "min_activation_range": 0,
      "max_activation_range": 3,
      "cooldown_time": 5,
      "weight": 3,
      "cast_duration": 2,
      "particle_color": "#FF664D59",
      "start_sound_event": "cast.spell",
      "sequence": [
        {
          "shape": "circle",
          "target": "self",
          "base_delay": 1,
          "delay_per_summon": 0,
          "num_entities_spawned": 5,
          "entity_type": "minecraft:evocation_fang",
          "size": 1.5,
          "entity_lifespan": 1.1,
          "sound_event": "prepare.attack"
        },
        {
          "shape": "circle",
          "target": "self",
          "base_delay": 0.15,
          "delay_per_summon": 0,
          "num_entities_spawned": 8,
          "entity_type": "minecraft:evocation_fang",
          "size": 2.5,
          "entity_lifespan": 1.1
        }
      ]
    },
    {
      "min_activation_range": 3,
      "weight": 3,
      "cooldown_time": 5,
      "cast_duration": 2,
      "particle_color": "#FF664D59",
      "start_sound_event": "cast.spell",
      "sequence": [
        {
          "shape": "line",
          "target": "self",
          "base_delay": 1,
          "delay_per_summon": 0.05,
          "num_entities_spawned": 16,
          "entity_type": "minecraft:evocation_fang",
          "size": 20,
          "entity_lifespan": 1.1
        }
      ]
    },
    {
      "weight": 1,
      "cooldown_time": 17,
      "cast_duration": 5,
      "particle_color": "#FFB3B3CC",
      "sequence": [
        {
          "shape": "circle",
          "target": "self",
          "base_delay": 5,
          "num_entities_spawned": 3,
          "entity_type": "minecraft:vex",
          "summon_cap": 8,
          "summon_cap_radius": 16,
          "size": 1,
          "sound_event": "prepare.summon",
          "summon_event": "minecraft:add_damage_timer"
        }
      ]
    }
  ]
}
```
