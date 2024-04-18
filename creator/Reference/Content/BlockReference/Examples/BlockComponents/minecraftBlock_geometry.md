---
author: iconicNurdle
ms.author: mikeam
title: Block Documentation - minecraft:geometry
description: "A reference document detailing the 'geometry' block component"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - minecraft:geometry

`minecraft:geometry` is an `Identifier String` component that specifies the geometry description identifier to use to render this block. This identifier must match an existing geometry identifier in any of the currently loaded resource packs.

## UV Rotation (preview feature)
In version 1.21.0 of Minecraft, your geometry model can use a new `uv_rotation` attribute, in 90 degeree increments, to adjust the rotation of how UV textures apply to cube faces. See [the 1.21.0 geometry reference](../../../SchemasReference/Schemas/minecraftSchema_geometry_1.21.0.md) for more details.

## Default Value of the Component

This component is specified as an `Identifier String`, so it does not have a default value. You must provide a valid geometry identifier in order to use this component.

## bone_visibility

`minecraft:bone_visibility` is an optional array of Booleans that define the visibility of individual bones in the geometry file. In order to set up 'bone_visibility' the geometry file name must be entered as an identifier. After the identifier has been specified, bone_visibility can be defined based on the names of the bones in the specified geometry file on a true/false basis.

Note that all bones default to 'true,' so bones should only be defined if they are being set to 'false.' Including bones set to 'true' will work the same as the default.

## Basic Geometry Example

```json
"minecraft:geometry": "geometry.bubble_fish"
```

## Geometry and Bone Visibility Example

```json
"minecraft:geometry": { 
        "identifier": "geometry:bubble_fish", 
        "bone_visibility": { 
          "bone1": true, 
          "bone2": false 
        } 
      }
```
