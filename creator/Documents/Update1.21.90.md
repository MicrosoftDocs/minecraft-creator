---
author: kakinnun
ms.author: kakinnun
title: 1.21.90 Update Notes
description: Update summary of Creator changes in Bedrock 1.21.90
ms.service: minecraft-bedrock-edition
ms.date: 06/17/2025 #Required; mm/dd/yyyy format.
---

# Minecraft Bedrock 1.21.90 Update Notes for Creators

> [!VIDEO https://www.youtube.com/embed/Jpubvfks9As]
*Video version of this article from the Minecraft Creator Channel*

Minecraft Bedrock has been updated to 1.21.90 and there are a number of changes of note for creators. The following features do not require experimental toggles.

## Editor

**Editor v1.0**
We are excited to announce Editor v1.0.0! With this milestone Editor is officially out of beta. There are also a number of new features to highlight in this version.

- Updated Movement Controls
- Vibrant Visuals Settings Improvements
- Pick blocks by color in the Block Picker
- Hollow Selection Trim Action
- Line Tool Improvements

[Get started with Editor!](./BedrockEditor/EditorInstallation.md)

## Camera
- The [/controlscheme](../Commands/commands/controlscheme.md) command allows for selecting different control schemes that are more appropriate in 3rd Person camera scenarios. For example, over the shoulder is now unlocked by using the camera_relative control scheme with the follow_orbit preset.

## Blocks
- [Custom Components V2](../Documents/ScriptingV2.0.0Overview.md#custom-components-v2) is now available with new capabilities.
- culling improvements - A subset of culling rules to support behaviors such as how leaves appear when configured in a tree with neighbor rules. 

## Items
- [Custom Components V2](../Documents/ScriptingV2.0.0Overview.md#custom-components-v2) is now available with new capabilities.

## Entities
- [remove_in_peaceful](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_remove_in_peaceful.md) component - determines whether an entity should despawn on "Peaceful" difficulty. 
- Leash improvements:
  - [leashable_to](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_leashable_to.md)
  - New fields added to the [leashable](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_leashable.md) component.
    - can_be_cut
    - spring_type
    - rotation_adjustment
- [input_air_controlled](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_input_air_controlled.md)
- [body_rotation_always_follows_head](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_body_rotation_always_follows_head.md) - Ensures the entity's body is always aligned with the head.
- rideable improvements
  - is_riding_self - returns true if the subject entity is riding the calling entity on which the filter is used
  - is_vehicle_family - returns true when the subject entity is riding a vehicle with the specified family.

## Graphical
Vibrant Visuals is released! Many capabilities are available for creators to play with including:
- [PBR textures](../Documents/VibrantVisuals/PBROverview.md)
- [Subsurface Scattering](../Documents/VibrantVisuals/SubSurfaceScatteringCustomization.md)
- [Atmospherics](../Documents/VibrantVisuals/AtmosphericsCustomization.md)
- [Per Biome Settings](../Documents/VibrantVisuals/BiomeCustomization.md)
- [Water](../Documents/VibrantVisuals/WaterCustomization.md)
- [Shadows](../Documents/VibrantVisuals/ShadowsCustomization.md)
- [Color Grading and Tone Mapping](../Documents/VibrantVisuals/ColorGradingToneMappingCustomization.md)
- [Key Framing](../Documents/VibrantVisuals/KeyFrameJSONSyntax.md)

[Get started with Vibrant Visuals!](../Documents/VibrantVisuals/IntroVibrantVisuals.md)

You can also make Vibrant Visuals textures [in Blockbench](../Documents/VibrantVisuals/UseBlockbenchToCreateModelsWithTextures.md). Or you can [use Editor](../Documents/BedrockEditor/EditorVibrantVisuals.md) to visualize Vibrant Visuals customization.

## Scripting
Scripting API v2.0.0 is released and includes a number of new APIs.
For an overview of Scripting API v2.0.0 please refer to this document. [Scripting v2.0.0 API Overview](../Documents/ScriptingV2.0.0Overview.md)

## UI
Some additional formatting options have been added to server-ui forms.
- Section Headers
- Labels
- Section Dividers
- Tooltips

## What's Next

Looking ahead, here's what you can expect coming in future releases.

### What's Next for World Gen

- Jigsaw Block - All of the functionality currently available in experimental is coming to stable in an upcoming releases.
- Improved Spawn rules - Allowing for customized mob spawning in biomes and structures.

## What's Next for Blocks
- particle intensity - When breaking a block, defines the quantity of particles that appear.
- Textures – UV locking - This will make it so there is no longer a need to define new geo every time a texture is rotated.
- Loot & destroy API - Allow reading loot tables through scripting. Apply different loot tables through scripting when destroying entity or block.

### What's Next for Script API, Molang and Commands

- Custom Commands - Similar to block and item custom components, this will allow creation of custom slash commands via script.

For more information on what's next, follow our [Beta/Preview Changelogs](https://feedback.minecraft.net/hc/sections/360001185332).
