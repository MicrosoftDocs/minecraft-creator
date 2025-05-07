---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:icon"
description: "Describes the minecraft:icon item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:icon

Determines the icon to represent the item in the UI and elsewhere.

## Alternate Simple Representations

This item can also be represented as a `String`.


## Icon Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| textures | *not set* | Keyed set of strings | This map contains the different textures that can be used for the item's icon. Default will contain the actual icon texture. Armor trim textures and palettes can be specified here as well. The icon textures are the keys from the resource_pack/textures/item_texture.json 'texture_data' object associated with the texture file. | Black Bundle: `{"default":"bundle_black"}`, Blue Bundle: `{"default":"bundle_blue"}`, Brown Bundle: `{"default":"bundle_brown"}` | 
| (deprecated) texture | *not set* | String | Deprecated - no longer in use. This contains a single texture for the items icon. | Apple: `"apple"`, Breeze Rod: `"breeze_rod"`, Ominous Trial Key: `"ominous_trial_key"` | 

## Samples


```json
"minecraft:icon": "oak_slab"
```

#### [Apple](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/apple.json)


```json
"minecraft:icon": {
  "texture": "apple"
}
```

#### [Black Bundle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/black_bundle.json)


```json
"minecraft:icon": {
  "textures": {
    "default": "bundle_black"
  }
}
```

#### [Blue Bundle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/blue_bundle.json)


```json
"minecraft:icon": {
  "textures": {
    "default": "bundle_blue"
  }
}
```

#### [Breeze Rod](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/breeze_rod.json)


```json
"minecraft:icon": {
  "texture": "breeze_rod"
}
```

#### [Brown Bundle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/brown_bundle.json)


```json
"minecraft:icon": {
  "textures": {
    "default": "bundle_brown"
  }
}
```

#### [Bundle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/bundle.json)


```json
"minecraft:icon": {
  "textures": {
    "default": "bundle"
  }
}
```

#### [Cyan Bundle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/cyan_bundle.json)


```json
"minecraft:icon": {
  "textures": {
    "default": "bundle_cyan"
  }
}
```

#### [Gray Bundle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/gray_bundle.json)


```json
"minecraft:icon": {
  "textures": {
    "default": "bundle_gray"
  }
}
```

#### [Green Bundle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/green_bundle.json)


```json
"minecraft:icon": {
  "textures": {
    "default": "bundle_green"
  }
}
```

#### [Light Blue Bundle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/light_blue_bundle.json)


```json
"minecraft:icon": {
  "textures": {
    "default": "bundle_light_blue"
  }
}
```

#### [Light Gray Bundle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/light_gray_bundle.json)


```json
"minecraft:icon": {
  "textures": {
    "default": "bundle_light_gray"
  }
}
```
