<big>Version: 1.18.10.3</big>

[[_TOC_]]

# Texture Sets

Minecraft supports a Physically Based Rendering (PBR) color pipeline (e.g. used for Ray Tracing). 		This uses more texture data than simply 'color' to enable richer, more realistic visuals. 		With the PBR approach, you can have layers for different specular reflections, emissivity, normal maps, etc. which goes beyond the Classic color pipeline for Vanilla Minecraft. 		Texture Sets have been added as the feature for defining multiple PBR layers for a texture resource. Texture sets are data driven from json files.



## Texture Set Json Schema

```
--------
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

----------
```




## Layers

A texture_set.json file may specify several layers.
Layers are references to texture image resources. they can also be defined in .json as values for uniform solid values as an alternative to referencing texture images in a pack.





**Color**

- This is an RGB 3-channel image (defaults to uniform alpha of 1.0), or an RGBA 4-channel image, or a 4 value array for a uniform color with alpha.
- This is the only required layer.
- It is the only layer used by the Classic pipeline.
- Typically there is lighting baked in the color image.




**Normal**

- 3-channel normal map image (or 4-channel where the 4th channel is ignored).
- Mutually exclusive with the `heightmap` layer.




**Heightmap**

- 1-channel layer image or a single value in json for a uniform heightmap.
- Mutually exclusive with the `normal` layer.




**Metalness_emissive_roughness**

- 3-channel image (or 4-channel where the 4th channel is ignored) or a 3 value array for a uniform MER.
- RGB images map Red to Metalness, Green to Emissive, and Blue to Roughness.




## Specifying uniform values

Instead of referencing a texture image for a Texture Set layer, values can instead be specified in the *texture_set.json file,			which is effectively the equivalent to referencing a texture image filled uniformly with that value or values for the respective channels.

The values in the json can be specified in any of the following formats:
- 0 to 255 numeric range, or as a vector of such integers for a multi-channel layer.
- Hexadecimal RGB or ARGB for 3 and 4 channels respectively, also as 2 hex digits for a single channel layer.




## Examples of *.texture_set.json files

**All the layer values can be mixed and match with references to image textures, hexadecimal and numerical values.
**
```

				{
				   "format_version": "1.16.100",
				   "minecraft:texture_set": {
				     "color": [ 180, 140, 190, 255 ],
				     "metalness_emissive_roughness": "#FBA34C",
				     "normal": "grass_carried_normal"
				  }
				}
				
```

**This example uses referenced images that exist in the same folder. It uses a normal and MER map.
**
```

				{
				    "format_version": "1.16.100",
				    "minecraft:texture_set": {
				      "color": "grass_carried",
				      "metalness_emissive_roughness": "grass_carried_mer",
				      "heightmap": "grass_carried_heightmap"
				  }
				}
				
```

**You could also specify values of textures using numerical or hexadecimal values.
**
```

				{
				   "format_version": "1.16.100",
				   "minecraft:texture_set": {
				     "color": [ 180, 135, 190, 170 ],
				     "metalness_emissive_roughness": [ 130, 135, 140 ]
				  }
				}
				
```



## Invalid *.texture_set.json

If a Texture Set is invalid, we'll log a CONTENT_ERROR and the Texture Set will not be used.
A Texture Set is invalid if:
- Json data cannot be parsed, or doesn't meet the Texture Set schema.
- Color layer is not specified. Having a color layer in the .texture_set.json is required.
- Both heightmap and normal layers are defined.
- If a referenced texture does not exist in the same resource pack or the referenced texture cannot be parsed.
- Any layer is defined with an unexpected number of channels:
  - For layers that are specified with referenced images: Color, MER, and Normal support 3 or 4 channel images;		Heightmap support 1-channel images only.
  - For layers that are specified with numerical or hexadecimal values: Color support 4-channel values;		MER support 3-channel values;




## Resource Stack Behaviour

- Texture Set definitions can only reference images that exist in the same resource pack as the definition.
- Texture images in higher priority resource packs do not override a Texture Set's reference to a texture in its own pack.
- In the resource pack stack, Texture Set definitions for the same texture resource don't get merged. The higher priority pack's Texture Set definition will override the lower priority one.




## Referencing Texture Resources

The priority of file extensions, in case you have duplicate image references, is: .tga > .png > .jpg > .jpeg. For example: 			if grass.png and grass.tga both exist in the folder, grass.tga will be chosen. This also applies to other data driven files, like actor json referencing a texture resource.


