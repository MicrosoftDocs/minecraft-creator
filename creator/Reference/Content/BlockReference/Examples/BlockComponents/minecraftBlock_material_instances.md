---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:material_instances"
description: "Describes the minecraft:material_instances block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:material_instances

The material instances for a block.
Maps face or material_instance names in a geometry file to an actual material instance. Material instance can either be a full material instance or a name to another already defined instance.
Limited to 64 instances.

> [!Note]
> From 1.21.80 onward, when using a minecraft:geometry component or minecraft:material_instances component, you must include both.

> [!Note]
> In format version 1.26.20, `ambient_occlusion` no longer accepts boolean values — it must be a float between 0.0 and 10.0 inclusive, and defaults to 1.0 when omitted.

> [!Note]
> This item requires a format version of at least 1.19.40.


## Material Instances Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| * (Material Instance Face) | *not set* | [*](#material-instance-face) item |  | Block Red Shrub: `{"texture":"red_shrub","render_method":"alpha_test_single_sided","ambient_occlusion":0}` | 
| * (as String) | *not set* | String |  |  | 
| down (Material Instance Face) | *not set* | [Down](#material-instance-face) item |  |  | 
| down (as String) | *not set* | String |  |  | 
| east (Material Instance Face) | *not set* | [East](#material-instance-face) item |  |  | 
| east (as String) | *not set* | String |  |  | 
| north (Material Instance Face) | *not set* | [North](#material-instance-face) item |  |  | 
| north (as String) | *not set* | String |  |  | 
| south (Material Instance Face) | *not set* | [South](#material-instance-face) item |  |  | 
| south (as String) | *not set* | String |  |  | 
| up (Material Instance Face) | *not set* | [Up](#material-instance-face) item |  |  | 
| up (as String) | *not set* | String |  |  | 
| west (Material Instance Face) | *not set* | [West](#material-instance-face) item |  |  | 
| west (as String) | *not set* | String |  |  | 

### Material Instance Face
Configures how a block face renders its texture, including transparency, culling, and lighting. Set the texture reference, choose render method (opaque, alpha_test, blend, or double_sided), control face culling, and configure ambient occlusion. Enables glass-like transparency, leaf rendering, and custom visual effects.


#### Material Instance Face Properties

**JSON path:** `*`

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| ambient_occlusion | *not set* | Decimal number | If this material has ambient occlusion applied when lighting, shadows will be created around and underneath the block. Decimal value controls exponent applied to a value after lighting. |  | 
| face_dimming | *not set* | String | This material should be dimmed by the direction its facing. | Blue Bubble Fish: `true` | 
| isotropic | false | Boolean true/false | Should the faces that this material is applied to randomize their UVs? This item requires a format version of at least 1.21.80. |  | 
| render_method | *not set* | [Render Method](#render-method-choices) choices | The render method to use. | Blue Bubble Fish: `"blend"`, Block Orange Ore: `"opaque"`, Block Frond Top: `"alpha_test"` | 
| texture | *not set* | String | Texture name for the material. | Blue Bubble Fish: `"bubble_fish_blue"`, California Roll: `"sushi_wrap"`, Green Bubble Fish: `"bubble_fish_green"` | 
| tint_method | false | Boolean true/false | Tint multiplied to the color. |  | 

#### tint_method

Tint multiplied to the color. Tint method logic varies, but often refers to the "rain" and "temperature" of the biome the block is placed in to compute the tint. Supported tint methods are "none", "default_foliage", "birch_foliage", "evergreen_foliage", "dry_foliage", "grass" and "water" This item requires a format version of at least 1.21.80.


### Render Method choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| opaque | Opaque | Used for a regular block texture without an alpha layer. Does not allow for transparency or translucency|
| double_sided | Double Sided | Used for completely disabling backface culling.|
| blend | Blend | Used for a block like stained glass. Allows for transparency and translucency (slightly transparent textures).|
| alpha_test | Alpha Test | Used for a block like the monster spawner. Does not allow for translucency, only fully opaque or fully transparent textures. Also disabled backface culling.|
| alpha_test_single_sided | Alpha Test (Single Sided) | Used for a block like the (unstained) glass. Does not allow for translucency, only fully opaque or fully transparent textures. Also enables backface culling.|
| blend_to_opaque | Blend to Opaque | Will blend like stained glass in the near render and turn opaque on the far render.|
| alpha_test_to_opaque | Alpha Test to Opaque | Used for a block like the leaves. Does not allow for translucency, only fully opaque or fully transparent textures in the near render and turn only opaque on the far render. Also disabled backface culling.|
| alpha_test_single_sided_to_opaque | Alpha Test (Single Sided) to Opaque | Used for a block like the sugar cane. Does not allow for translucency, only fully opaque or fully transparent textures in the near render and turn only opaque on the far render. Also enables backface culling.|

## Samples

#### Block Fabricator


```json
"minecraft:material_instances": {
  "*": {
    "texture": "mikeamm_gwve_fabricator",
    "render_method": "alpha_test",
    "ambient_occlusion": 1
  }
}
```

#### Block Gray Ore


```json
"minecraft:material_instances": {
  "*": {
    "texture": "mikeamm_gwve_gray_ore",
    "render_method": "alpha_test",
    "face_dimming": false
  }
}
```

#### Block Frond Top


```json
"minecraft:material_instances": {
  "*": {
    "texture": "frond_top",
    "render_method": "alpha_test"
  }
}
```

#### Block Palm Leave


```json
"minecraft:material_instances": {
  "*": {
    "texture": "palm_leave",
    "render_method": "alpha_test"
  }
}
```

#### Block White Sand


```json
"minecraft:material_instances": {
  "*": {
    "texture": "white_sand",
    "render_method": "alpha_test"
  }
}
```

#### Block Leaf Pile


```json
"minecraft:material_instances": {
  "*": {
    "texture": "leaf_pile",
    "render_method": "alpha_test",
    "tint_method": "default_foliage"
  }
}
```

#### Tuna Roll


```json
"minecraft:material_instances": {
  "north": "sushi_side",
  "south": "sushi_side",
  "*": {
    "texture": "sushi_wrap"
  },
  "sushi_side": {
    "texture": "tuna_roll"
  }
}
```

#### Blue Bubble Fish


```json
"minecraft:material_instances": {
  "*": {
    "texture": "bubble_fish_blue",
    "render_method": "blend",
    "face_dimming": true,
    "ambient_occlusion": 1
  }
}
```

#### [Block Red Shrub](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/blocks/red_shrub.block.json)


```json
"minecraft:material_instances": {
  "*": {
    "texture": "red_shrub",
    "render_method": "alpha_test_single_sided",
    "ambient_occlusion": 0
  }
}
```
