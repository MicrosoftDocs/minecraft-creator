---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.enderman_leave_block
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.enderman_leave_block

`minecraft:behavior.enderman_leave_block` allows the entity to drop the block they are currently holding.

> [!NOTE]
> This behavior can only be used by the `enderman` entity type.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.enderman_leave_block":{
    "priority": 8,
}
```

## Vanilla entities examples

### enderman

```json
"minecraft:behavior.enderman_leave_block": {
        "priority": 10
      },

``````

## Vanilla entities using `minecraft:behavior.enderman_leave_block`

- [enderman](../../../../Source/VanillaBehaviorPack_Snippets/entities/enderman.md)
