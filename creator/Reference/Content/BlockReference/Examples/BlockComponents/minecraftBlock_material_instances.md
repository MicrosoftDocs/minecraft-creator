---
author: mammerla
ms.author: v-bbortree
title: Block Documentation - minecraft:material_instances
ms.prod: gaming
---

# Block Documentation - minecraft:material_instances

`minecraft:material_instances` is a `JSON Object` component that specifies the material instances for a block. Maps face or material_instance names in a geometry file to an actual material instance. You can assign a material instance object to any of these faces: `up`, `down`, `north`, `south`, `east`, `west`, or `*`. You can also give an instance the name of your choosing such as `my_instance`, and then assign it to a face by doing `north`:`my_instance`.

>[!IMPORTANT]
> `minecraft:material_instances` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md).

## Material Instance

A material instance definition to map to a material instance in a geometry file. The material instance `*` will be used for any materials that don't have a match.
## Extra Parameters

`minecraft:material_instances` can use the following to define the JSON object:

| Name |Default Value |Type |Description |
|:----|:----|:----|:----|
| ambient_occlusion| true| Boolean| Should this material have ambient occlusion applied when lighting? If true, shadows will be created around and underneath the block. |
| face_dimming| true| Boolean| Should this material be dimmed by the direction it's facing? |
| render_method| opaque| String| The render method to use. Must be one of these options: `opaque` - Used for a regular block texture without an alpha layer. Does not allow for transparency or translucency. `double_sided` - Used for completely disabling backface culling. `blend` - Used for a block like stained glass. Allows for transparency and translucency (slightly transparent textures). `alpha_test` - Used for a block like the vanilla (unstained) glass. Does not allow for translucency, only fully opaque or fully transparent textures. Also disables backface culling.  |
| texture| | String| Texture name for the material. |

## Example

```json
"minecraft:material_instances": {
    "NewInstance":{"texture":"fancyTexture", "render_method": "alpha_test"}
}
```
