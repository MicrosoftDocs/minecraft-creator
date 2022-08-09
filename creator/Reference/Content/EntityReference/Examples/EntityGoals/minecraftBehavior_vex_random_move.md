---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.vex_random_move
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.vex_random_move

`minecraft:behavior.vex_random_move` allows an entity of the`vex` family to move randomly.

> [!CAUTION]
> `minecraft:behavior.vex_random_move` is no longer used for the `vex` entity. Instead, `minecraft:navigation.walk` and `minecraft:behavior.float`allow the `vex` entity to navigate.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.vex_random_move":{
    "priority": 2,
}
```

## Vanilla entities examples

No entities currently use `minecraft:behavior.vex_random_move`

## Vanilla entities using `minecraft:behavior.vex_random_move`

No entities currently use `minecraft:behavior.vex_random_move`
