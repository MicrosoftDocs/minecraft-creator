---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.dragonholdingpattern
description: "A reference document detailing the 'dragonholdingpattern' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.dragonholdingpattern

`minecraft:behavior.dragonholdingpattern` allows an entity to fly around in a circle around the center podium located in `The End`.

> [!NOTE]
> This behavior can only be used by the `ender_dragon` entity type.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| priority|*not set*| Integer |The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.dragonholdingpattern":{
    "priority": 3
}
```

## Vanilla entities example

### ender_dragon

```json
"minecraft:behavior.dragonholdingpattern": {
     "priority": 3
}
```

## Vanilla entities using `minecraft:behavior.dragonholdingpattern`

- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
