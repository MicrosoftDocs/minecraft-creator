---
author: v-josjones
ms.author: v-josjones
title: Block Documentation - minecraft:material_instances
ms.prod: gaming
---

# Block Documentation - minecraft:material_instances

`minecraft:material_instances` is a `JSON Object` component that maps the face or the material_instance names in a geometry file to an actual material instance or a name to another already defined instance.

## Default Parameter

|Default Value|Type |
|:----|:----|
|*not set*| JSON Object|

## Extra Parameters

`minecraft:material_instances` can use the following to define the JSON object:

|Name |Default Value |Type |Description |
|:----|:----|:----|:----|
|texture |*not set* |String |	Defines what texture the block should have. Can be any texture name defined in your resource pack folder (textures/terrain_texture.json |
|render_method |opaque |String |Defines what render method the block should use. Can be opaque, alpha_test or blend.|

## Example

```json
"minecraft:material_instances": {
    "NewInstance":{"texture":"fancyTexture", "render_method": "alpha_test"}
}
```
