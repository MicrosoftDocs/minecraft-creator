---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:display_name"
description: "Describes the minecraft:display_name item component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:display_name

Sets the item display name within Minecraft: Bedrock Edition. This component may also be used to pull from the localization file by referencing a key from it.

> [!Note]
> This item requires a format version of at least 1.20.0.


## Item Display Name Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| value |  | String | Name shown for an item. | Apple: `"item.apple.name"`, Breeze Rod: `"item.breeze_rod.name"`, Ice Ball: `"item.ice_ball.name"` | 

## Samples

At sample: 

```json
"minecraft:display_name": {
  "value": "secret_weapon"
}
```

At sample with localication key: 

```json
"minecraft:display_name": {
  "value": "item.snowball.name"
}
```

#### [Apple](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/apple.json)


```json
"minecraft:display_name": {
  "value": "item.apple.name"
}
```

#### [Breeze Rod](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/breeze_rod.json)


```json
"minecraft:display_name": {
  "value": "item.breeze_rod.name"
}
```

#### [Ice Ball](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/ice_ball.json)


```json
"minecraft:display_name": {
  "value": "item.ice_ball.name"
}
```

#### [Ice Crystal](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/ice_crystal.json)


```json
"minecraft:display_name": {
  "value": "tile.ice_crystal.name"
}
```

#### [Icicle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/icicle.json)


```json
"minecraft:display_name": {
  "value": "tile.icicle.name"
}
```
