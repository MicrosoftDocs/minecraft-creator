---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:instant_despawn
description: "A reference document detailing the 'instant_despawn' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:instant_despawn

`minecraft:instant_despawn` despawns the entity immediately.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| remove_child_entities| False| Boolean| If true, all linked entities in a child relationship (eg. leashed) will also be despawned. |

## Example

```json
"minecraft:instant_despawn":{
    "remove_child_entities": false
}
```

## Vanilla entities examples

No entities currently use `minecraft:instant_despawn`.

## Vanilla entities using `minecraft:instant_despawn`

No entities currently use `minecraft:instant_despawn`.
