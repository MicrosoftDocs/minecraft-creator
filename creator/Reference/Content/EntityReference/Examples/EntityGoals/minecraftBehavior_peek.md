---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.peek
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.peek

`minecraft:behavior.peek` compels an entity to peek out.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.peek":{
    "priority": 2
}
```

## Vanilla entities examples

### shulker

```json
"minecraft:peek": {
        "on_open": {
          "event": "minecraft:on_open"
        },
        "on_close": {
          "event": "minecraft:on_close"
        },
        "on_target_open": {
          "event": "minecraft:on_open"
        }
      }
```

## Vanilla entities using `minecraft:behavior.peek`

- [shulker](../../../../Source/VanillaBehaviorPack_Snippets/entities/shulker.md)
