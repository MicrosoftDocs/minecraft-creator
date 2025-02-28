---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:material_instances"
description: "Describes the minecraft:material_instances block component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:material_instances

The material instances for a block. Maps face or material_instance names in a geometry file to an actual material instance. You can assign a material instance object to any of these faces: "up", "down", "north", "south", "east", "west", or "*". You can also give an instance the name of your choosing such as "my_instance", and then assign it to a face by doing "north":"my_instance".


## Material Instances Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| * | *not set* | [*](#*-item-type) item |  | Blue Bubble Fish: `{"texture":"bubble_fish_blue","render_method":"blend","face_dimming":true}`, California Roll: `{"texture":"sushi_wrap"}`, Green Bubble Fish: `{"texture":"bubble_fish_green","render_method":"blend","face_dimming":true}` | 
| down | *not set* | [Down](#down-item-type) item |  |  | 
| east | *not set* | [East](#east-item-type) item |  |  | 
| Material Instance | *not set* | Array of [Material Instance](#material-instance-item-type) items | A material instance definition to map to a material instance in a geometry file. The material instance "*" will be used for any materials that don't have a match. |  | 
| north | *not set* | [North](#north-item-type) item |  | California Roll: `"sushi_side"` | 
| south | *not set* | [South](#south-item-type) item |  | California Roll: `"sushi_side"` | 
| up | *not set* | [Up](#up-item-type) item |  |  | 
| west | *not set* | [West](#west-item-type) item |  |  | 

## * item type

#### * Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| ambient_occlusion | *not set* | Decimal number | If this material has ambient occlusion applied when lighting, shadows will be created around and underneath the block. Decimal value controls exponent applied to a value after lighting. |  | 
| face_dimming | *not set* | String | This material should be dimmed by the direction it's facing. | Blue Bubble Fish: `true` | 
| render_method | *not set* | [Render Method](#render-method-choices) choices | The render method to use. | Blue Bubble Fish: `"blend"`, Block Orange Ore: `"opaque"`, Block Frond Top: `"alpha_test"` | 
| texture | *not set* | String | Texture name for the material. | Blue Bubble Fish: `"bubble_fish_blue"`, California Roll: `"sushi_wrap"`, Green Bubble Fish: `"bubble_fish_green"` | 

### Render Method choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| opaque | Opaque | Used for a regular block texture without an alpha layer. Does not allow for transparency or translucency|
| double_sided | Double Sided | Used for completely disabling backface culling.|
| blend | Blend | Used for a block like stained glass. Allows for transparency and translucency (slightly transparent textures).|
| alpha_test | Alpha Test | Used for a block like the monster spawner. Does not allow for translucency, only fully opaque or fully transparent textures. Also disabled backface culling.|
| alpha_test_single_sided | Alpha Test (Single Sided) | Used for a block like the (unstained) glass. Does not allow for translucency, only fully opaque or fully transparent textures. Also enables backface culling.|

## Down item type

#### * Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| ambient_occlusion | *not set* | Decimal number | If this material has ambient occlusion applied when lighting, shadows will be created around and underneath the block. Decimal value controls exponent applied to a value after lighting. |  | 
| face_dimming | *not set* | String | This material should be dimmed by the direction it's facing. | Blue Bubble Fish: `true` | 
| render_method | *not set* | [Render Method](#render-method-choices) choices | The render method to use. | Blue Bubble Fish: `"blend"`, Block Orange Ore: `"opaque"`, Block Frond Top: `"alpha_test"` | 
| texture | *not set* | String | Texture name for the material. | Blue Bubble Fish: `"bubble_fish_blue"`, California Roll: `"sushi_wrap"`, Green Bubble Fish: `"bubble_fish_green"` | 

### Render Method choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| opaque | Opaque | Used for a regular block texture without an alpha layer. Does not allow for transparency or translucency|
| double_sided | Double Sided | Used for completely disabling backface culling.|
| blend | Blend | Used for a block like stained glass. Allows for transparency and translucency (slightly transparent textures).|
| alpha_test | Alpha Test | Used for a block like the monster spawner. Does not allow for translucency, only fully opaque or fully transparent textures. Also disabled backface culling.|
| alpha_test_single_sided | Alpha Test (Single Sided) | Used for a block like the (unstained) glass. Does not allow for translucency, only fully opaque or fully transparent textures. Also enables backface culling.|

## East item type

#### * Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| ambient_occlusion | *not set* | Decimal number | If this material has ambient occlusion applied when lighting, shadows will be created around and underneath the block. Decimal value controls exponent applied to a value after lighting. |  | 
| face_dimming | *not set* | String | This material should be dimmed by the direction it's facing. | Blue Bubble Fish: `true` | 
| render_method | *not set* | [Render Method](#render-method-choices) choices | The render method to use. | Blue Bubble Fish: `"blend"`, Block Orange Ore: `"opaque"`, Block Frond Top: `"alpha_test"` | 
| texture | *not set* | String | Texture name for the material. | Blue Bubble Fish: `"bubble_fish_blue"`, California Roll: `"sushi_wrap"`, Green Bubble Fish: `"bubble_fish_green"` | 

### Render Method choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| opaque | Opaque | Used for a regular block texture without an alpha layer. Does not allow for transparency or translucency|
| double_sided | Double Sided | Used for completely disabling backface culling.|
| blend | Blend | Used for a block like stained glass. Allows for transparency and translucency (slightly transparent textures).|
| alpha_test | Alpha Test | Used for a block like the monster spawner. Does not allow for translucency, only fully opaque or fully transparent textures. Also disabled backface culling.|
| alpha_test_single_sided | Alpha Test (Single Sided) | Used for a block like the (unstained) glass. Does not allow for translucency, only fully opaque or fully transparent textures. Also enables backface culling.|

## Material Instance item type
A material instance definition to map to a material instance in a geometry file. The material instance "*" will be used for any materials that don't have a match.


#### Material Instance Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| ambient_occlusion | *not set* | Decimal number | Should this material have ambient occlusion applied when lighting? If true, shadows will be created around and underneath the block. Optionally can be constructed with float to control exponent applied to ao value after lighting. |  | 
| Boolean | *not set* | Boolean true/false | isotropic |  | 
| face_dimming | true | Boolean true/false | Should this material be dimmed by the direction it's facing? |  | 
| render_method | opaque | String | The render method to use. Must be one of these options: <br>"opaque" - Used for a regular block texture without an alpha layer. Does not allow for transparency or translucency. <br>"double_sided" - Used for completely disabling backface culling. <br>"blend" - Used for a block like stained glass. Allows for transparency and translucency (slightly transparent textures). <br>"alpha_test" - Used for a block like the vanilla (unstained) glass. Does not allow for translucency, only fully opaque or fully transparent textures. Also disables backface culling. |  | 
| texture | *not set* | String | Texture name for the material. |  | 
| tint_method | false | Boolean true/false | Tint multiplied to the color. Tint method logic varies, but often refers to the "rain" and "temperature" of the biome the block is placed in to compute the tint. Supported tint methods are "none", "default_foliage", "birch_foliage", "evergreen_foliage", "dry_foliage", "grass" and "water" |  | 

## North item type

#### * Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| ambient_occlusion | *not set* | Decimal number | If this material has ambient occlusion applied when lighting, shadows will be created around and underneath the block. Decimal value controls exponent applied to a value after lighting. |  | 
| face_dimming | *not set* | String | This material should be dimmed by the direction it's facing. | Blue Bubble Fish: `true` | 
| render_method | *not set* | [Render Method](#render-method-choices) choices | The render method to use. | Blue Bubble Fish: `"blend"`, Block Orange Ore: `"opaque"`, Block Frond Top: `"alpha_test"` | 
| texture | *not set* | String | Texture name for the material. | Blue Bubble Fish: `"bubble_fish_blue"`, California Roll: `"sushi_wrap"`, Green Bubble Fish: `"bubble_fish_green"` | 

### Render Method choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| opaque | Opaque | Used for a regular block texture without an alpha layer. Does not allow for transparency or translucency|
| double_sided | Double Sided | Used for completely disabling backface culling.|
| blend | Blend | Used for a block like stained glass. Allows for transparency and translucency (slightly transparent textures).|
| alpha_test | Alpha Test | Used for a block like the monster spawner. Does not allow for translucency, only fully opaque or fully transparent textures. Also disabled backface culling.|
| alpha_test_single_sided | Alpha Test (Single Sided) | Used for a block like the (unstained) glass. Does not allow for translucency, only fully opaque or fully transparent textures. Also enables backface culling.|

## South item type

#### * Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| ambient_occlusion | *not set* | Decimal number | If this material has ambient occlusion applied when lighting, shadows will be created around and underneath the block. Decimal value controls exponent applied to a value after lighting. |  | 
| face_dimming | *not set* | String | This material should be dimmed by the direction it's facing. | Blue Bubble Fish: `true` | 
| render_method | *not set* | [Render Method](#render-method-choices) choices | The render method to use. | Blue Bubble Fish: `"blend"`, Block Orange Ore: `"opaque"`, Block Frond Top: `"alpha_test"` | 
| texture | *not set* | String | Texture name for the material. | Blue Bubble Fish: `"bubble_fish_blue"`, California Roll: `"sushi_wrap"`, Green Bubble Fish: `"bubble_fish_green"` | 

### Render Method choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| opaque | Opaque | Used for a regular block texture without an alpha layer. Does not allow for transparency or translucency|
| double_sided | Double Sided | Used for completely disabling backface culling.|
| blend | Blend | Used for a block like stained glass. Allows for transparency and translucency (slightly transparent textures).|
| alpha_test | Alpha Test | Used for a block like the monster spawner. Does not allow for translucency, only fully opaque or fully transparent textures. Also disabled backface culling.|
| alpha_test_single_sided | Alpha Test (Single Sided) | Used for a block like the (unstained) glass. Does not allow for translucency, only fully opaque or fully transparent textures. Also enables backface culling.|

## Up item type

#### * Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| ambient_occlusion | *not set* | Decimal number | If this material has ambient occlusion applied when lighting, shadows will be created around and underneath the block. Decimal value controls exponent applied to a value after lighting. |  | 
| face_dimming | *not set* | String | This material should be dimmed by the direction it's facing. | Blue Bubble Fish: `true` | 
| render_method | *not set* | [Render Method](#render-method-choices) choices | The render method to use. | Blue Bubble Fish: `"blend"`, Block Orange Ore: `"opaque"`, Block Frond Top: `"alpha_test"` | 
| texture | *not set* | String | Texture name for the material. | Blue Bubble Fish: `"bubble_fish_blue"`, California Roll: `"sushi_wrap"`, Green Bubble Fish: `"bubble_fish_green"` | 

### Render Method choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| opaque | Opaque | Used for a regular block texture without an alpha layer. Does not allow for transparency or translucency|
| double_sided | Double Sided | Used for completely disabling backface culling.|
| blend | Blend | Used for a block like stained glass. Allows for transparency and translucency (slightly transparent textures).|
| alpha_test | Alpha Test | Used for a block like the monster spawner. Does not allow for translucency, only fully opaque or fully transparent textures. Also disabled backface culling.|
| alpha_test_single_sided | Alpha Test (Single Sided) | Used for a block like the (unstained) glass. Does not allow for translucency, only fully opaque or fully transparent textures. Also enables backface culling.|

## West item type

#### * Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| ambient_occlusion | *not set* | Decimal number | If this material has ambient occlusion applied when lighting, shadows will be created around and underneath the block. Decimal value controls exponent applied to a value after lighting. |  | 
| face_dimming | *not set* | String | This material should be dimmed by the direction it's facing. | Blue Bubble Fish: `true` | 
| render_method | *not set* | [Render Method](#render-method-choices) choices | The render method to use. | Blue Bubble Fish: `"blend"`, Block Orange Ore: `"opaque"`, Block Frond Top: `"alpha_test"` | 
| texture | *not set* | String | Texture name for the material. | Blue Bubble Fish: `"bubble_fish_blue"`, California Roll: `"sushi_wrap"`, Green Bubble Fish: `"bubble_fish_green"` | 

### Render Method choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| opaque | Opaque | Used for a regular block texture without an alpha layer. Does not allow for transparency or translucency|
| double_sided | Double Sided | Used for completely disabling backface culling.|
| blend | Blend | Used for a block like stained glass. Allows for transparency and translucency (slightly transparent textures).|
| alpha_test | Alpha Test | Used for a block like the monster spawner. Does not allow for translucency, only fully opaque or fully transparent textures. Also disabled backface culling.|
| alpha_test_single_sided | Alpha Test (Single Sided) | Used for a block like the (unstained) glass. Does not allow for translucency, only fully opaque or fully transparent textures. Also enables backface culling.|

## Samples

#### [Blue Bubble Fish](https://github.com/microsoft/minecraft-samples/tree/main/custom_blocks/behavior_packs/custom_blocks/blocks/blue_bubble_fish.json)


```json
"minecraft:material_instances": {
  "*": {
    "texture": "bubble_fish_blue",
    "render_method": "blend",
    "face_dimming": true
  }
}
```

#### [California Roll](https://github.com/microsoft/minecraft-samples/tree/main/custom_blocks/behavior_packs/custom_blocks/blocks/california_roll.json)


```json
"minecraft:material_instances": {
  "north": "sushi_side",
  "south": "sushi_side",
  "*": {
    "texture": "sushi_wrap"
  },
  "sushi_side": {
    "texture": "california_roll"
  }
}
```

#### [Green Bubble Fish](https://github.com/microsoft/minecraft-samples/tree/main/custom_blocks/behavior_packs/custom_blocks/blocks/green_bubble_fish.json)


```json
"minecraft:material_instances": {
  "*": {
    "texture": "bubble_fish_green",
    "render_method": "blend",
    "face_dimming": true
  }
}
```

#### [Orange Bubble Fish](https://github.com/microsoft/minecraft-samples/tree/main/custom_blocks/behavior_packs/custom_blocks/blocks/orange_bubble_fish.json)


```json
"minecraft:material_instances": {
  "*": {
    "texture": "bubble_fish_orange",
    "render_method": "blend",
    "face_dimming": true
  }
}
```

#### [Salmon Roll](https://github.com/microsoft/minecraft-samples/tree/main/custom_blocks/behavior_packs/custom_blocks/blocks/salmon_roll.json)


```json
"minecraft:material_instances": {
  "north": "sushi_side",
  "south": "sushi_side",
  "*": {
    "texture": "sushi_wrap"
  },
  "sushi_side": {
    "texture": "salmon_roll"
  }
}
```

#### [Tuna Roll](https://github.com/microsoft/minecraft-samples/tree/main/custom_blocks/behavior_packs/custom_blocks/blocks/tuna_roll.json)


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

#### [Block Orange Ore](https://github.com/microsoft/minecraft-samples/tree/main/custom_features/basic_orange_ore/behavior_packs/basic_orange_ore/blocks/orange_ore.block.json)


```json
"minecraft:material_instances": {
  "*": {
    "texture": "orange_ore",
    "render_method": "opaque"
  }
}
```

#### [Apple Block](https://github.com/microsoft/minecraft-samples/tree/main/custom_features/example_feature_set/behavior_packs/example_feature_set/blocks/apple_block.json)


```json
"minecraft:material_instances": {
  "*": {
    "texture": "apple_block",
    "render_method": "opaque"
  }
}
```

#### [Block Frond Top](https://github.com/microsoft/minecraft-samples/tree/main/palm_tree_blocks_and_features/palm_tree_blocks/behavior_packs/palm_tree/blocks/frond_top.block.json)


```json
"minecraft:material_instances": {
  "*": {
    "texture": "frond_top",
    "render_method": "alpha_test"
  }
}
```

#### [Block Palm Leave Corner](https://github.com/microsoft/minecraft-samples/tree/main/palm_tree_blocks_and_features/palm_tree_blocks/behavior_packs/palm_tree/blocks/palm_leave_corner.block.json)


```json
"minecraft:material_instances": {
  "*": {
    "texture": "palm_leave_corner",
    "render_method": "alpha_test"
  }
}
```

#### [Block Palm Leave Tip](https://github.com/microsoft/minecraft-samples/tree/main/palm_tree_blocks_and_features/palm_tree_blocks/behavior_packs/palm_tree/blocks/palm_leave_tip.block.json)


```json
"minecraft:material_instances": {
  "*": {
    "texture": "palm_leave_tip",
    "render_method": "alpha_test"
  }
}
```

#### [Block Palm Leave](https://github.com/microsoft/minecraft-samples/tree/main/palm_tree_blocks_and_features/palm_tree_blocks/behavior_packs/palm_tree/blocks/palm_leave.block.json)


```json
"minecraft:material_instances": {
  "*": {
    "texture": "palm_leave",
    "render_method": "alpha_test"
  }
}
```
