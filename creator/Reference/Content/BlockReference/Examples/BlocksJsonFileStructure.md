---
author: copilot
ms.author: mikeam
title: "Add-Ons Reference: blocks.json"
description: "Reference documentation for the blocks.json file used in Minecraft resource packs to define block properties"
ms.service: minecraft-bedrock-edition
ms.date: 01/16/2025
---

# blocks.json File Reference

The **blocks.json** file is used in Minecraft: Bedrock Edition Resource Packs to define basic properties for custom and vanilla blocks.

> [!IMPORTANT]
> While the **blocks.json** file allows configuration of textures and rendering properties, components in Behavior Packs, specifying `minecraft:geometry` and `minecraft:material_instances`, will override configurations here. Components are more powerful, and they're the recommended way to specify visual properties for blocks, leaving **blocks.json** as just a sound configuration system.

## File location

The `blocks.json` file should be placed in the root directory of your Resource Pack (alongside `manifest.json`).

## File structure

The `blocks.json` file follows this basic structure:

```json
{
  "format_version": "1.19.30",
  "namespace:block_name": {
    "sound": "sound_name",
    "textures": "texture_name_or_object",
    "carried_textures": "texture_name_or_object",
    "isotropic": true
  }
}
```

## Properties

| Name | Description |
| :--- | :---------- |
| format\_version | The syntax version used in the file. Generally, this should be the current version of Minecraft. |
| namespace | Your custom namespace, e.g., `demo`, `custom`, `mypack`, etc. |
| block\_name | The unique name for your block. |
| sound | The sound effect that plays when the block is placed, broken, or walked on. |
| textures | Texture definitions (see below). |
| carried\_textures | Texture definitions (see below); if unspecified, uses `textures`. |
| isotropic | Set to `true` to use isotropic filtering on the block for a smoother appearance. |

## Texture definitions

Textures are defined in the [terrain_texture.json][tt] file; the values in **blocks.json** must refer to texture aliases defined there.

[tt]: ../../TextureSetsReference/TextureSetsConcepts/TextureSetsIntroduction.md

### Single texture (string)

Use a string to apply the same texture to all faces:

```json
{
  "demo:simple_block": {
    "textures": "my_texture"
  }
}
```

### Per-face textures (object)

Use an object to specify different textures for different faces:

```json
{
  "demo:custom_block": {
    "textures": {
      "up": "top_texture",
      "down": "bottom_texture",
      "north": "side_texture",
      "south": "side_texture",
      "east": "side_texture",
      "west": "side_texture"
    }
  }
}
```

In addition to `up`, `down`, `north`, `south`, `east`, and `west` for individual sides, you can use:

- `side`: All four side faces (excluding `up` and `down`)
- `*`: Set a default texture for any unspecified faces

## Complete example

Here's a comprehensive example showing multiple blocks with different properties:

```json
{
  "format_version": "1.19.30",
  "demo:simple_stone": {
    "sound": "stone",
    "textures": "demo_stone"
  },
  "demo:wooden_crate": {
    "sound": "wood",
    "textures": {
      "up": "crate_top",
      "down": "crate_bottom", 
      "side": "crate_side"
    },
    "carried_textures": "crate_item"
  },
  "demo:glass_block": {
    "sound": "glass",
    "textures": "demo_glass",
    "isotropic": true
  },
  "demo:die": {
    "sound": "stone",
    "textures": {
      "up": "die_1",
      "down": "die_6",
      "north": "die_3",
      "south": "die_4", 
      "east": "die_2",
      "west": "die_5"
    },
    "carried_textures": "die_red"
  }
}
```

## Related documentation

- [Block Components Reference](BlockComponents/BlockComponentsList.md)
- [Behavior Pack Block Definitions](BlockJsonFileStructure.md)
- [Create a Custom Die Block Tutorial](../../../../Documents/AddCustomDieBlock.md)
- [Advanced Custom Blocks Tutorial](../../../../Documents/AdvancedCustomBlocks.md)
- [terrain_texture.json Reference][tt]
