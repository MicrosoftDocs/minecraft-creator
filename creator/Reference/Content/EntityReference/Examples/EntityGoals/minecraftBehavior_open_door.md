---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.open_door
description: "A reference document detailing the 'behavior.open_door' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.open_door

`minecraft:behavior.open_door` compels an entity to interact and open a door.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|close_door_after| true| Boolean| If true, the mob will close the door after opening it and going through it. |
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.open_door":{
    "priority": 2,
    "close_door_after":true
}
```

## Vanilla entities examples

### villager

```json
"minecraft:annotation.open_door": {
}
```

## Vanilla entities using `minecraft:behavior.open_door`

- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
