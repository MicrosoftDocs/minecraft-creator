---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.silverfish_wake_up_friends
description: "A reference document detailing the 'behavior.silverfish_wake_up_friends' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.silverfish_wake_up_friends

`minecraft:behavior.silverfish_wake_up_friends` compels an entity to alert other entities of the same family to leave a stone block.

> [!NOTE]
> This behavior can only be used by the `silverfish` entity type.
> This behavior requires `minecraft:behavior.silverfish_merge_with_stone` to be set.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.silverfish_wake_up_friends":{
    "priority": 2
}
```

## Vanilla entities examples

### silverfish

```json
"minecraft:behavior.silverfish_wake_up_friends": {
    "priority": 1
}
```

## Vanilla entities using `minecraft:behavior.silverfish_wake_up_friends`

- [silverfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/silverfish.md)
