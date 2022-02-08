---
author: v-josjones
ms.author: v-josjones
title: Block Documentation - minecraft:material_instances
ms.prod: gaming
---

# Block Documentation - minecraft:material_instances

`minecraft:material_instances` is a `JSON Object` component that specifies the material instances for a block.

>[!IMPORTANT]
> `minecraft:material_instances` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md)

## Material Instance

A material instance definition to map to a material instance in a geometry file. The material instance '*' will be used for any materials that don't have a match.
## Extra Parameters

`minecraft:material_instances` can use the following to define the JSON object:

|Type | Name |Default Value |Description |
|:----|:----|:----|:----|
| Boolean| ambient_occlusion| true| Should this material have ambient occlusion applied when lighting. |
| Boolean| face_dimming| true| Should this material be dimmed by the direction it's facing. |
| String| render_method| opaque| The render method to use. Must be one of 'opaque', 'double_sided', 'blend', or 'alpha_test'. |
| String| texture| | Texture name for the material. |
## Example

```json
"minecraft:material_instances": {
    "NewInstance":{"texture":"fancyTexture", "render_method": "alpha_test"}
}
```
