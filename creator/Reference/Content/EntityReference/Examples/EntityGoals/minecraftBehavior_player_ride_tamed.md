---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.player_ride_tamed
description: "A reference document detailing the 'behavior.player_ride_tamed' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.player_ride_tamed

`minecraft:behavior.player_ride_tamed` allows an entity to be rideable after being tamed by a player.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.player_ride_tamed":{
}
```

## Vanilla entities examples

### zombie_horse

```json
"minecraft:behavior.player_ride_tamed": {
}
```

## Vanilla entities using `minecraft:behavior.player_ride_tamed`

- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [mule](../../../../Source/VanillaBehaviorPack_Snippets/entities/mule.md)
- [skeleton_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton_horse.md)
- [zombie_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_horse.md)
