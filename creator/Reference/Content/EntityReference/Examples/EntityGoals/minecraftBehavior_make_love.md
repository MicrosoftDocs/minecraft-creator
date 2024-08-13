---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.make_love
description: "A reference document detailing the 'behavior.make_love' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.make_love

`minecraft:behavior.make_love` compels an entity to interact with other similar entities to produce an offspring.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.make_love":{
    "priority": 8
}
```

## Vanilla entities examples

### villager_v2

```json
"minecraft:behavior.make_love": {
          "priority": 5
        }
```

## Vanilla entities using `minecraft:behavior.make_love`

- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
