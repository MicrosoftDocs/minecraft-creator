---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.dragonscanning
description: "A reference document detailing the 'behavior.dragonscanning' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.dragonscanning

`minecraft:behavior.dragonscanning` compels an entity to look around for a player to attack while in perch mode.

> [!NOTE]
> This behavior can only be used by the `ender_dragon` entity type.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.dragonscanning":{
    "priority": 3
}
```

## Vanilla entities examples

### ender_dragon

```json
"minecraft:behavior.dragonscanning": {
    "priority": 2
}
```

## Vanilla entities using `minecraft:behavior.dragonscanning`

- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
