---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:hand_equipped"
description: "Describes the minecraft:hand_equipped item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:hand_equipped

The hand_equipped component determines if an item is rendered like a tool while it is in a player's hand.


## Hand Equipped Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| value | *not set* | Boolean true/false | Determines whether the item is rendered like a tool while in the player's hand. |  | 

## Samples

#### [AppleEnchanted](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/appleEnchanted.json)


```json
"minecraft:hand_equipped": false
```

#### [Breeze Rod](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/breeze_rod.json)


```json
"minecraft:hand_equipped": true
```
