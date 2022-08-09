---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.target_when_pushed
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.target_when_pushed

`minecraft:behavior.target_when_pushed` allows an entity to select a valid target entity that pushed it.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|[entity_types](../Definitions/NestedTables/entity_types.md)|*not set* | JSON Object| List of entity types that this mob considers valid targets.|
|percent_chance| 5.0| Decimal| Probability that the entity will target the entity that pushed it. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.target_when_pushed": {
        "priority": 1,
        "percent_chance": 5.0,
        "entity_types": [
          {
            "filters": { 
              "all_of": [
                { "test" :  "is_family", "subject" : "other", "value" :  "monster" },
                { "test" :  "is_family", "subject" : "other", "operator": "!=", "value" :  "creeper" }
              ] 
            }
          }
        ]
      },

```

## Vanilla entities examples

### iron_golem

```json
"minecraft:behavior.target_when_pushed": {
        "priority": 1,
        "percent_chance": 5.0,
        "entity_types": [
          {
            "filters": { 
              "all_of": [
                { "test" :  "is_family", "subject" : "other", "value" :  "monster" },
                { "test" :  "is_family", "subject" : "other", "operator": "!=", "value" :  "creeper" }
              ] 
            }
          }
        ]
      },


```

## Vanilla entities using `minecraft:behavior.target_when_pushed`

- [iron_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/iron_golem.md)
