---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:on_death"
description: "Describes the minecraft:on_death entity trigger"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:on_death

Adds a trigger to call on this entity's death.


## On Death Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| drop_item | *not set* | [Drop Item](#drop-item-item-type) item |  | Copper Golem: `{"slot":"slot.weapon.mainhand"}` | 
| event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | The event to run when the conditions for this trigger are met. | Copper Golem: `"minecraft:on_death"`, Ender Dragon: `"minecraft:start_death"` | 
| filters | *not set* | Minecraft filter | The list of conditions for this trigger to execute. |  | 
| target | self | String | The target of the event. | Ender Dragon: `"self"` | 

## Drop Item item type

#### Drop_item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| slot | *not set* | String |  | Copper Golem: `"slot.weapon.mainhand"` | 

## Samples

#### [Copper Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/copper_golem.json)

At /minecraft:entity/components/minecraft:on_death/: 

```json
"minecraft:on_death": {
  "event": "minecraft:on_death"
}
```

At /minecraft:entity/events/minecraft:on_death/: 

```json
"minecraft:on_death": {
  "drop_item": {
    "slot": "slot.weapon.mainhand"
  }
}
```

#### [Ender Dragon](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ender_dragon.json)


```json
"minecraft:on_death": {
  "event": "minecraft:start_death",
  "target": "self"
}
```
