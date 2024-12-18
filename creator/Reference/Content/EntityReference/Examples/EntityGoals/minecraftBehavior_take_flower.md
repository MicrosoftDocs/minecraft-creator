---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.take_flower
description: "A reference document detailing the 'behavior.take_flower' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.take_flower

`minecraft:behavior.take_flower` allows an entity to receive flowers when presented from the `iron_golem` entity.

> [!NOTE]
> This behavior can only be used by the `villager` entity type.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.take_flower":{
    "priority": 2
}
```

## Vanilla entities examples

### villager_v2

```json
"minecraft:behavior.take_flower":{
    "priority": 9
}
```

## Vanilla entities using `minecraft:behavior.take_flower`

- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
