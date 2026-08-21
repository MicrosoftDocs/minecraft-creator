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
| value |  | String | Name shown for an item. | Apple: `"item.apple.name"`, Breeze Rod: `"item.breeze_rod.name"`, Ominous Trial Key: `"item.ominous_trial_key.name"` | 

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

#### [Ominous Trial Key](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/ominous_trial_key.json)


```json
"minecraft:display_name": {
  "value": "item.ominous_trial_key.name"
}
```

#### [Red Shrub](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/red_shrub.json)


```json
"minecraft:display_name": {
  "value": "tile.red_shrub.name"
}
```

#### [Shelf Mushroom](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/shelf_mushroom.json)


```json
"minecraft:display_name": {
  "value": "tile.shelf_mushroom.name"
}
```
