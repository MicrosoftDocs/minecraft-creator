---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.wither_random_attack_pos_goal
ms.prod: gaming
---

# minecraft:behavior.wither_random_attack_pos_goal

`minecraft:behavior.wither_random_attack_pos_goal` allows an entity to attack at random.

> [!NOTE]
> This behavior can only be used by the `wither` entity type.

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
