---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.squid_dive
description: "A reference document detailing the 'behavior.squid_dive' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.squid_dive

`minecraft:behavior.squid_dive` compels an entity to dive underwater.

> [!NOTE]
> This behavior can only be used by the `squid` entity type.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.squid_dive":{
    "priority": 2
}
```

## Vanilla entities examples

### squid

```json
"minecraft:behavior.squid_dive": {
    "priority": 2
}
```

## Vanilla entities using `minecraft:behavior.squid_dive`

- [glow_squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/glow_squid.md)
- [squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/squid.md)
