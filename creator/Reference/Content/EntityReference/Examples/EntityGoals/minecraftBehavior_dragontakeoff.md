---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.dragontakeoff
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.dragontakeoff

`minecraft:behavior.dragontakeoff` allows an entity to leave perch mode and go back to flying around.

> [!NOTE]
> This behavior can only be used by the `ender_dragon` entity type.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.dragontakeoff":{
    "priority": 1,
}
```

## Vanilla entities examples

### ender_dragon

```json
"minecraft:behavior.dragontakeoff": {
          "priority": 0
    },

``````

## Vanilla entities using `minecraft:behavior.dragontakeoff`

- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
