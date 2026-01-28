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

The material instances for a block. Maps face or material_instance names in a geometry file to an actual material instance. You can assign a material instance object to any of these faces: "up", "down", "north", "south", "east", "west", or "*". You can also give an instance the name of your choosing such as "my_instance", and then assign it to a face by doing "north":"my_instance".

> [!Note]
> From 1.21.80 onward, when using a minecraft:geometry component or minecraft:material_instances component, you must include both.


## Material Instances Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| * (Material Instance Face) | *not set* | [*](#material-instance-face) item |  |  | 
| * (Alternate 1) | *not set* | String |  |  | 
| down (Material Instance Face) | *not set* | [Down](#material-instance-face) item |  |  | 
| down (Alternate 1) | *not set* | String |  |  | 
| east (Material Instance Face) | *not set* | [East](#material-instance-face) item |  |  | 
| east (Alternate 1) | *not set* | String |  |  | 
| north (Material Instance Face) | *not set* | [North](#material-instance-face) item |  |  | 
| north (Alternate 1) | *not set* | String |  |  | 
| south (Material Instance Face) | *not set* | [South](#material-instance-face) item |  |  | 
| south (Alternate 1) | *not set* | String |  |  | 
| up (Material Instance Face) | *not set* | [Up](#material-instance-face) item |  |  | 
| up (Alternate 1) | *not set* | String |  |  | 
| west (Material Instance Face) | *not set* | [West](#material-instance-face) item |  |  | 
| west (Alternate 1) | *not set* | String |  |  | 

## Material Instance Face
Configures how a block face renders its texture, including transparency, culling, and lighting. Set the texture reference, choose render method (opaque, alpha_test, blend, or double_sided), control face culling, and configure ambient occlusion. Enables glass-like transparency, leaf rendering, and custom visual effects.


#### Material Instance Face Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| ambient_occlusion | *not set* | Decimal number | If this material has ambient occlusion applied when lighting, shadows will be created around and underneath the block. Decimal value controls exponent applied to a value after lighting. |  | 
| face_dimming | *not set* | String | This material should be dimmed by the direction its facing. | Blue Bubble Fish: `true` | 
| isotropic | false | Boolean true/false | Should the faces that this material is applied to randomize their UVs? This item requires a format version of at least 1.21.80. |  | 
| render_method | *not set* | [Render Method](#render-method-choices) choices | The render method to use. | Blue Bubble Fish: `"blend"`, Block Orange Ore: `"opaque"`, Block Frond Top: `"alpha_test"` | 
| texture | *not set* | String | Texture name for the material. | Blue Bubble Fish: `"bubble_fish_blue"`, California Roll: `"sushi_wrap"`, Green Bubble Fish: `"bubble_fish_green"` | 
| tint_method | false | Boolean true/false | Tint multiplied to the color. Tint method logic varies, but often refers to the "rain" and "temperature" of the biome the block is placed in to compute the tint. Supported tint methods are "none", "default_foliage", "birch_foliage", "evergreen_foliage", "dry_foliage", "grass" and "water" This item requires a format version of at least 1.21.80. |  | 

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
