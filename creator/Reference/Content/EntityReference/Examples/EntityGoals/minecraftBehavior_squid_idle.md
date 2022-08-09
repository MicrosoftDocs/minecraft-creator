---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.squid_idle
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.squid_idle

`minecraft:behavior.squid_idle` allows an entity to swim in place.

> [!NOTE]
> This behavior can only be used by the `squid` entity type.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.squid_idle":{
    "priority": 2,
}
```

## Vanilla entities examples

### squid

```json
"minecraft:behavior.squid_idle": {
        "priority": 2
      },

```

## Vanilla entities using `minecraft:behavior.squid_idle`

- [glow_squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/glow_squid.md)
- [squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/squid.md)
