---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.wither_random_attack_pos_goal
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.wither_random_attack_pos_goal

`minecraft:behavior.wither_random_attack_pos_goal` allows an entity to attack at random.

> [!NOTE]
> This behavior can only be used by the `wither` entity type.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.wither_random_attack_pos_goal":{
    "priority": 3,
}
```

## Vanilla entities examples

### wither

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/wither.json" range="71-73":::

## Vanilla entities using `minecraft:behavior.wither_random_attack_pos_goal`

- [wither](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither.md)
