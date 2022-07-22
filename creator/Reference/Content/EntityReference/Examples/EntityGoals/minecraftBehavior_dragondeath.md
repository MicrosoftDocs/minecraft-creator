---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.dragondeath
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.dragondeath

`minecraft:behavior.dragondeath` controls the entity's death state and animation.

> [!NOTE]
> This behavior can only be used by the `ender_dragon` entity type.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.dragondeath":{
    "priority": 1,
}
```

## Vanilla entities examples

### ender_dragon

```json
"dragon_death": {
        "minecraft:behavior.dragondeath": {
          "priority": 0
        }
}

``````

## Vanilla entities using `minecraft:behavior.dragondeath`

- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
