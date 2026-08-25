---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.eat_block"
description: "Describes the minecraft:behavior.eat_block ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.eat_block

Allows the entity to consume a block, replace the eaten block with another block, and trigger an event as a result.


## Entity Eat Block Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| eat_and_replace_block_pairs | [[object Object], [object Object], [object Object]] | Array of [Eat And Replace Block Pairs](#entity-eatandreplaceblockpair) items | A collection of pairs of blocks; the first ("eat_block") is the block the entity should eat, the second ("replace_block") is the block that should replace the eaten block. | Sheep: `[{"eat_block":"grass","replace_block":"dirt"},{"eat_block":"tallgrass","replace_block":"air"},{"eat_block":"short_dry_grass","replace_block":"air"},{"eat_block":"tall_dry_grass","replace_block":"air"}]` | 
| on_eat | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [Eat](#entity-actordefinitiontrigger) item | The event to trigger when the block eating animation has completed. | Sheep: `{"event":"minecraft:on_eat_block","target":"self"}` | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Sheep: `6` | 
| success_chance | 0.019999999552965164 | Keyed set of strings | A molang expression defining the success chance the entity has to consume a block. | Sheep: `"query.is_baby ? 0.02 : 0.001"` | 
| success_chance (as Named set of objects) | *not set* | Key/item pairs of [Success Chance (Legacy Molang Expression)](#legacy-molang-expression) items |  |  | 
| success_chance (as Decimal number) | *not set* | Decimal number |  |  | 
| time_until_eat | 1.7999999523162842 | Decimal number | The amount of time (in seconds) it takes for the block to be eaten upon a successful eat attempt. | Sheep: `1.8` | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Entity EatAndReplaceBlockPair

#### Entity EatAndReplaceBlockPair Properties

**JSON path:** `eat_and_replace_block_pairs`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| eat_block |  | String | The block the entity should eat. | 
| replace_block |  | String | The block that should replace the eaten block. | 

### Entity ActorDefinitionTrigger
Triggers an entity event when specified conditions are met. Events activate component groups that change entity behavior—transforming villagers into zombie villagers, switching mobs to aggressive mode, or triggering growth stages. Combine with filters to create conditional state machines that respond to gameplay.


#### Entity ActorDefinitionTrigger Properties

**JSON path:** `on_eat`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| event |  | String |  | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | Filters allow data objects to specify test criteria which allows their use. | 
| filters (Alternate 1) | *not set* | Object |  | 
| target | self | [Target](#target-choices) choices |  | 

#### filters

Filters allow data objects to specify test criteria which allows their use. Filters can be defined by a single object of type (Filter Test), an array of tests, collection groups, or a combination of these objects.


#### Filters

##### Filters Properties

**JSON path:** `on_eat > filters`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

### Target choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| baby | Baby | |
| block | Block | |
| damager | Damager | |
| holder | Holder | |
| item | Item | |
| other | Other | |
| parent | Parent | |
| player | Player | |
| self | Self | |
| target | Target | |

### Legacy Molang Expression

#### Legacy Molang Expression Properties

**JSON path:** `success_chance`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 

## Samples

#### [Sheep](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sheep.json)


```json
"minecraft:behavior.eat_block": {
  "priority": 6,
  "success_chance": "query.is_baby ? 0.02 : 0.001",
  "time_until_eat": 1.8,
  "eat_and_replace_block_pairs": [
    {
      "eat_block": "grass",
      "replace_block": "dirt"
    },
    {
      "eat_block": "tallgrass",
      "replace_block": "air"
    },
    {
      "eat_block": "short_dry_grass",
      "replace_block": "air"
    },
    {
      "eat_block": "tall_dry_grass",
      "replace_block": "air"
    }
  ],
  "on_eat": {
    "event": "minecraft:on_eat_block",
    "target": "self"
  }
}
```
