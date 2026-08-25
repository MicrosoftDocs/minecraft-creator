---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:tamemount"
description: "Describes the minecraft:tamemount entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:tamemount

Allows entities to flock in groups in water or not.


## Entity Tamemount Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| attempt_temper_mod | 5 | Integer number | The amount the entity's temper will increase when mounted. |  | 
| auto_reject_items | [] | Array of [Auto Reject Items](#entity-mounttamingcomponentrejectitem) items | The list of items that, if carried while interacting with the entity, will anger it. |  | 
| autoRejectItems | *not set* | Array of [AutoRejectItems](#autorejectitems) items | The list of items that, if carried while interacting with the entity, will anger it. |  | 
| feed_items | [] | Array of [Feed Items](#entity-mounttamingcomponentfeeditem) items | The list of items that can be used to increase the entity's temper and speed up the taming process. | Llama: `[{"item":"wheat","temper_mod":3},{"item":"hay_block","temper_mod":6}]` | 
| feed_text |  | String | The text that shows in the feeding interact button. | Llama: `"action.interact.feed"` | 
| max_temper | 100 | Integer number | The maximum value for the entity's random starting temper. | Llama: `30` | 
| min_temper | 0 | Integer number | The minimum value for the entity's random starting temper. |  | 
| ride_text |  | String | The text that shows in the riding interact button. | Llama: `"action.interact.mount"` | 
| tame_event | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [Tame Event](#entity-actordefinitiontrigger) item | Event that triggers when the entity becomes tamed. | Llama: `{"event":"minecraft:on_tame","target":"self"}` | 

### Entity MountTamingComponentRejectItem

#### Entity MountTamingComponentRejectItem Properties

**JSON path:** `auto_reject_items`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| item | {} | String | Name of the item this entity dislikes and will cause it to get angry if used while untamed. | 
| item (as Keyed set of strings) | *not set* | Keyed set of strings |  | 

### AutoRejectItems
The list of items that, if carried while interacting with the entity, will anger it.


#### AutoRejectItems Properties

**JSON path:** `autoRejectItems`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| item | *not set* | String | The list of items that, if carried while interacting with the entity, will anger it. | 

### Entity MountTamingComponentFeedItem

#### Entity MountTamingComponentFeedItem Properties

**JSON path:** `feed_items`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| item | {} | String | Name of the item this entity likes and can be used to increase this entity's temper. | 
| item (as Keyed set of strings) | *not set* | Keyed set of strings |  | 
| temper_mod | 0 | Integer number | The amount of temper this entity gains when fed this item. | 

### Entity ActorDefinitionTrigger
Triggers an entity event when specified conditions are met. Events activate component groups that change entity behavior—transforming villagers into zombie villagers, switching mobs to aggressive mode, or triggering growth stages. Combine with filters to create conditional state machines that respond to gameplay.


#### Entity ActorDefinitionTrigger Properties

**JSON path:** `tame_event`

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

**JSON path:** `tame_event > filters`

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

## Samples

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)


```json
"minecraft:tamemount": {
  "min_temper": 0,
  "max_temper": 30,
  "feed_text": "action.interact.feed",
  "ride_text": "action.interact.mount",
  "feed_items": [
    {
      "item": "wheat",
      "temper_mod": 3
    },
    {
      "item": "hay_block",
      "temper_mod": 6
    }
  ],
  "tame_event": {
    "event": "minecraft:on_tame",
    "target": "self"
  }
}
```

#### [Trader Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/trader_llama.json)


```json
"minecraft:tamemount": {
  "min_temper": 0,
  "max_temper": 30,
  "feed_text": "action.interact.feed",
  "ride_text": "action.interact.mount",
  "feed_items": [
    {
      "item": "wheat",
      "temper_mod": 3
    },
    {
      "item": "hay_block",
      "temper_mod": 6
    }
  ],
  "auto_reject_items": [
    {
      "item": "horsearmorleather"
    },
    {
      "item": "horsearmoriron"
    },
    {
      "item": "horsearmorgold"
    },
    {
      "item": "horsearmordiamond"
    },
    {
      "item": "minecraft:copper_horse_armor"
    },
    {
      "item": "minecraft:netherite_horse_armor"
    },
    {
      "item": "saddle"
    }
  ],
  "tame_event": {
    "event": "minecraft:on_tame",
    "target": "self"
  }
}
```
