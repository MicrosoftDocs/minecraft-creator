---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Texture Set Documentation - Introduction to Texture Sets
ms.prod: gaming
---

# Texture Set Documentation - Introduction to Texture Sets

Minecraft supports a Physically Based Rendering (PBR) color pipeline (e.g. used for Ray Tracing). This uses more texture data than just 'color', which enables richer, more realistic visuals. Using PBR, you can have layers for different specular reflections, emissivity, normal maps, and more, which goes beyond the classic color pipeline for Vanilla Minecraft. Texture Sets have been added as the feature for defining multiple PBR layers for a texture resource. Texture Sets are data driven from json files.

## Texture Set Json Schema

```json
{
  version "format_version"
  object "minecraft:texture_set"
  {
      color "color" : opt // Fill RGBA channels of a textureset layer with the specified values in an array or hex string
      string "color" : opt // The texture name of a textureset layer
      string "normal" : opt // The texture name of a textureset layer
      string "heightmap" : opt // The texture name of a textureset layer
      color "metalness_emissive_roughness" : opt // Fill RGB channels of a textureset layer with the specified values in an array or hex string
      string "metalness_emissive_roughness" : opt // The texture name of a textureset layer
  }
}

```

## Layers

A texture_set.json file may specify several layers.
Layers are references to texture image resources. They can also be defined in JSON as values for uniform solid values as an alternative to referencing texture images in a pack.

### Color

- This is an RGB 3-channel image (defaults to uniform alpha of 1.0), or an RGBA 4-channel image, or a 4 value array for a uniform color with alpha.
- This is the only required layer.
- This is the only layer used by the Classic pipeline.
- There is typically lighting baked in the color image.

### Normal

- This is a 3-channel normal map image (or 4-channel where the 4th channel is ignored).
- This layer and the `heightmap` layer should not both be defined at the same time in a single Texture Set.

### Heightmap

- 1-channel layer image or a single value in the JSON file for a uniform heightmap.
- This layer and the `normal` layer should not both be defined at the same time in a single Texture Set.

### Metalness_emissive_roughness

- This is a 3-channel image (or 4-channel where the 4th channel is ignored) or a 3-value array for a uniform MER.
- RGB images map Red to Metalness, Green to Emissive, and Blue to Roughness.

## Specifying uniform values

Instead of referencing a texture image for a Texture Set layer, values can instead be specified in the *texture_set.json file, which is effectively the equivalent to referencing a texture image filled uniformly with that value or values for the respective channels.

The values in the json file can be specified in any of the following formats:

- 0 to 255 numeric range, or as a vector of such integers for a multi-channel layer.
- Hexadecimal RGB or ARGB for 3 or 4 channels, or as 2 hex digits for a single channel layer.

## Examples of *.texture_set.json files

> [!NOTE]
> The layer values of a Texture Set JSON file can include a mix of references to image textures, hexadecimal, and numerical values.

```json
{
  "format_version": "1.16.100",
  "minecraft:texture_set": {
    "color": [ 180, 140, 190, 255 ],
    "metalness_emissive_roughness": "#FBA34C",
    "normal": "grass_carried_normal"
  }
}
```

This example uses referenced images that exist in the same folder. It uses a normal and MER map.

```json
{
  "format_version": "1.16.100",
  "minecraft:texture_set": {
    "color": "grass_carried",
    "metalness_emissive_roughness": "grass_carried_mer",
    "heightmap": "grass_carried_heightmap"
  }
}
```

You could also specify values of textures using numerical or hexadecimal values.

```json
{
  "format_version": "1.16.100",
  "minecraft:texture_set": {
    "color": [ 180, 135, 190, 170 ],
    "metalness_emissive_roughness": [ 130, 135, 140 ]
  }
}
```

## Invalid *.texture_set.json

If a Texture Set is invalid, CONTENT_ERROR will be logged and the Texture Set will not be used.

A Texture Set is invalid if:

- JSON data cannot be parsed, or doesn't meet the Texture Set schema.
- Color layer is not specified. Having a color layer in the **.texture_set.json** file is required.
- Both heightmap and normal layers are defined.
- A referenced texture does not exist in the same resource pack or the referenced texture cannot be parsed.
- Any layer is defined with an unexpected number of channels:
  - For layers that are specified with referenced images: Color, MER, and Normal support 3 or 4 channel images; heightmap supports single-channel images only.
  - For layers that are specified with numerical or hexadecimal values: Color support 4-channel values; MER support 3-channel values;

## Resource Stack Behavior

- Texture Set definitions can only reference images that exist in the same resource pack as the definition.
- Texture images in higher priority resource packs do not override a Texture Set's reference to a texture in its own pack.
- In the resource pack stack, Texture Set definitions for the same texture resource don't get merged. The higher priority pack's Texture Set definition will override the lower priority one.

## Referencing Texture Resources

If you have duplicate image references, the priority of file extensions is: .tga > .png > .jpg > .jpeg.

For example: if grass.png and grass.tga both exist in the folder, grass.tga will be chosen. This also applies to other data driven files, like actor json referencing a texture resource.
