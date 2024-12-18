---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.dragonlanding
description: "A reference document detailing the 'dragonlanding' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.dragonlanding

`minecraft:behavior.dragonlanding` compels an entity to stop flying and transition into perching mode.

> [!NOTE]
> This behavior can only be used by the `ender_dragon` entity type.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.dragonlanding":{
    "priority": 0
}
```

## Vanilla entities examples

### ender_dragon

```json
"minecraft:on_start_landing": {
        "event": "minecraft:start_land",
        "target": "self"
      }
```

## Vanilla entities using `minecraft:behavior.dragonlanding`

- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
