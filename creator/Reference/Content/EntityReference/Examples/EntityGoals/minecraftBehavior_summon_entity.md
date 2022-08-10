---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.summon_entity
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.summon_entity

`minecraft:behavior.summon_entity` allows an entity to attack other entities by summoning new entities.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|summon_choices|*not set* | List|  List of spells for the mob to use to summon entities.|

### summon_choices

`summon_choices` is a List variable that can use the following parameters:

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|cast_duration|*not set*| Decimal| Time in seconds the spell casting will take |
|cooldown_time| 0.0| Decimal| Time in seconds the mob has to wait before using the spell again |
|do_casting| true| Boolean|  If true, the mob will do the casting animations and render spell particles |
| filters|*not set* | [Minecraft Filter](../FilterList.md)|Filters allow data objects to specify test criteria |
| max_activation_range| 32.0| Decimal| Upper bound of the activation distance in blocks for this spell, must not be negative. |
|min_activation_range| 1.0| Decimal|  Lower bound of the activation distance in blocks for this spell, must not be negative. |
|particle_color| 0| Integer| The color of the particles for this spell |
|start_sound_event|*not set* | String| The sound event to play when using this spell |
|weight| 0.0| Decimal| The weight of this spell. Controls how likely the mob is to choose this spell when casting one |
|sequence| | List| List of steps for the spell.|

#### sequence

`sequence` is a list variable that can use the following parameters:

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| base_delay| 0.0|Decimal| Amount of time in seconds to wait before this step starts |
|delay_per_summon| 0.0| Decimal|  Amount of time in seconds before each entity is summoned in this step |
|entity_lifespan| -1.0| Decimal|  Amount of time in seconds that the spawned entity will be alive for. A value of -1.0 means it will remain alive for as long as it can |
|[entity_type](../Definitions/NestedTables/entity_types.md)|*not set* | String|  The entity type of the entities we will spawn in this step |
|num_entities_spawned| 1| Integer| Number of entities that will be spawned in this step |
|shape| line| String| The base shape of this step. Valid values are circle and line |
|size| 1.0| Decimal| The base size of the entity |
|sound_event|*not set* | String|  The sound event to play for this step |
|summon_cap| 0| Integer|  Maximum number of summoned entities at any given time |
| summon_cap_radius| 0.0| Decimal|Maximum radius where the summon entities can spawn  |
|target| self| String|  The target of the spell. This is where the spell will start (line will start here, circle will be centered here) |

## Example

```json
"minecraft:behavior.summon_entity":{
    "priority": 2,
    "summon_choices": [
        {
            "min_activation_range": 0.0,
            "max_activation_range": 5.0,
            "cooldown_time": 10.0,
            "weight": 2,
            "cast_duration": 3.0,
            "particle_color": "#800080", // hex value for purple
            "start_sound_event": "cast.spell",
            "sequence": [
              {
                "shape": "circle",
                "target": "self",
                "base_delay": 1.0,
                "delay_per_summon": 0.0,
                "num_entities_spawned": 5,
                "entity_type": "minecraft:spider",
                "size": 1.5,
                "entity_lifespan": 1.1,
                "sound_event": "prepare.attack"
              },
              {
                "shape": "circle",
                "target": "self",
                "base_delay": 0.15,
                "delay_per_summon": 0.0,
                "num_entities_spawned": 8,
                "entity_type": "minecraft:skeleton",
                "size": 2.5,
                "entity_lifespan": 1.1
              }
            ]
        },
        {
            "min_activation_range": 3.0,
            "weight": 3,
            "cooldown_time": 5.0,
            "cast_duration": 2.0,
            "particle_color": "#FF0000",
            "start_sound_event": "cast.spell",
            "sequence": [
              {
                "shape": "line",
                "target": "self",
                "base_delay": 1.0,
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
            "cooldown_time": 17.0,
            "cast_duration": 5.0,
            "particle_color": "#FFB3B3CC",
            "sequence": [
              {
                "shape": "circle",
                "target": "self",
                "base_delay": 5.0,
                "num_entities_spawned": 3,
                "entity_type": "minecraft:vex",
                "summon_cap": 8,
                "summon_cap_radius": 16.0,
                "size": 1.0,
                "sound_event": "prepare.summon"
              }
            ]
          }
        ]
}
```

## Vanilla entities examples

### evocation_illager

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/evocation_illager.json" range="104-180":::

## Vanilla entities using `minecraft:behavior.summon_entity`

- [evocation_illager](../../../../Source/VanillaBehaviorPack_Snippets/entities/evocation_illager.md)
