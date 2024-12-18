---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.squid_flee
description: "A reference document detailing the 'behavior.squid_flee' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.squid_flee

`minecraft:behavior.squid_flee` compels an entity to swim away when attacked.

> [!NOTE]
> This behavior can only be used by the `squid` entity type.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.squid_flee":{
    "priority": 2
}
```

## Vanilla entities examples

### squid

```json
"minecraft:behavior.squid_flee": {
    "priority": 2
}
```

## Vanilla entities using `minecraft:behavior.squid_flee`

- [glow_squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/glow_squid.md)
- [squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/squid.md)
