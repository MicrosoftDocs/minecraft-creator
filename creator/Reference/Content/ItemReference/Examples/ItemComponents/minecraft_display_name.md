---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:display_name"
description: "Describes the minecraft:display_name item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:display_name

Sets the item display name within Minecraft: Bedrock Edition. This component may also be used to pull from the localization file by referencing a key from it.


## Display Name Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| value | *not set* | String | Name shown for an item. | Apple: `"item.apple.name"`, Breeze Rod: `"item.breeze_rod.name"`, Ominous Trial Key: `"item.ominous_trial_key.name"` | 

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

#### [Trial Key](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/trial_key.json)


```json
"minecraft:display_name": {
  "value": "item.trial_key.name"
}
```

#### [Wind Charge](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/wind_charge.json)


```json
"minecraft:display_name": {
  "value": "item.wind_charge.name"
}
```

#### [Bag o Leaves](https://github.com/microsoft/minecraft-samples/tree/main/creator_camp/behavior_packs/creator_camp/items/bag_o_leaves.json)


```json
"minecraft:display_name": {
  "value": "Bag o' Leaves"
}
```

#### [Chestplate](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/chestplate.json)


```json
"minecraft:display_name": {
  "value": "My Custom Armor"
}
```

#### [Goo](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/goo.json)


```json
"minecraft:display_name": {
  "value": "Weird Goo"
}
```

#### [My Boots](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_boots.json)


```json
"minecraft:display_name": {
  "value": "My Custom Boots"
}
```

#### [My Helm](https://github.com/microsoft/minecraft-samples/tree/main/custom_items/behavior_packs/custom_item/items/my_helm.json)


```json
"minecraft:display_name": {
  "value": "My Custom Helmet"
}
```
