---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:admire_item
description: "A reference document detailing the 'admire_item' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:admire_item

`minecraft:admire_item` compels an entity to ignore attackable targets for a given duration.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|cooldown_after_being_attacked| 0| Integer|  Duration, in seconds, that th mob won't admire items if it was hurt |
|duration| 10| Integer|  Duration, in seconds, that the mob is pacified. |

## Example

```json
"minecraft:admire_item":{
    "cooldown_after_being_attacked": 5,
    "duration":10
}
```

## Vanilla entities examples

### piglin

```json
"minecraft:admire_item": {
    "duration": 8,
    "cooldown_after_being_attacked": 20
}
```

## Vanilla entities using `minecraft:admire_item`

- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
