---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:nameable"
description: "Describes the minecraft:nameable entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:nameable

Allows this entity to be named (e.g. using a name tag).


## Nameable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| allow_name_tag_renaming | true | Boolean true/false | If true, this entity can be renamed with name tags |  | 
| always_show | false | Boolean true/false | If true, the name will always be shown | Player: `true` | 
| default_trigger | *not set* | String | Trigger to run when the entity gets named | Vindicator: `{"event":"minecraft:stop_johnny","target":"self"}` | 
| name_actions | *not set* | Array of [Name Actions](#name-actions) items | Describes the special names for this entity and the events to call when the entity acquires those names | Vindicator: `[{"name_filter":"Johnny","on_named":{"event":"minecraft:start_johnny","target":"self"}}]` | 

## Name Actions
Describes the special names for this entity and the events to call when the entity acquires those names.


#### Name Actions Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name_filter | *not set* | String | List of special names that will cause the events defined in 'on_named' to fire |  | 
| on_named | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to be called when this entity acquires the name specified in 'name_filter' |  | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:nameable": {}
```

#### [Npc](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/npc.json)


```json
"minecraft:nameable": {
  "always_show": false,
  "allow_name_tag_renaming": false
}
```

#### [Player](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/player.json)


```json
"minecraft:nameable": {
  "always_show": true,
  "allow_name_tag_renaming": false
}
```

#### [Vindicator](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/vindicator.json)


```json
"minecraft:nameable": {
  "default_trigger": {
    "event": "minecraft:stop_johnny",
    "target": "self"
  },
  "name_actions": [
    {
      "name_filter": "Johnny",
      "on_named": {
        "event": "minecraft:start_johnny",
        "target": "self"
      }
    }
  ]
}
```
