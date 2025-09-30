---
author: kakinnun
ms.author: kakinnun
title: 1.21.110 Update Notes
description: Update summary of Creator changes in Bedrock 1.21.110
ms.service: minecraft-bedrock-edition
ms.date: 09/30/2025 #Required; mm/dd/yyyy format.
---

# Minecraft Bedrock 1.21.110 Update Notes for Creators

> [!VIDEO https://www.youtube.com/embed/WQzKqgwhfhM]
*Video version of this article from the Minecraft Creator Channel*

Minecraft has entered the Copper Age! Minecraft Bedrock been updated to 1.21.110 and there are a number of changes of note for creators. The following features do not require experimental toggles.

## Editor

**Editor v1.1**
Editor has been updated with a number of features.

- Structure tooling - Generic tooling that we think will help to build more organic looking structures.
- Terrain tooling - Adding polish to a few of the terrain building tools including the updated flatten tool.
- Line node weights -  You can now adjust the vertical and horizontal line weight for each node. This provides finer control over the thickness and shape of lines, making it easier to create more customized and organic-looking builds.

[Get started with Editor!](./BedrockEditor/EditorInstallation.md)

## Blocks
- Loot Generation APIs - Allow generation of loot from Blocks & Entities based on player & tool properties through scripting. Destroying a block without the player and still having it's loot drop is now possible.

## Camera
- FOV - This is a new parameter that will allow you to set a custom FOV for the custom camera presets as well as Vanilla cameras via commands and API.
- [Aim assist](../Documents/CameraSystem/IntroToAimAssist.md) - Now available for use with projectiles.

## World Gen
Custom Biomes are now available!
- [Biome Replacement](../Documents/Biomes/CustomPartialBiomeReplacement.md) - The ability to replace Vanilla biomes with custom biome configurations.

## Items
- Item inventory components - Allows for items to have an inventory like a container (as with bundles).
  - [storage_item](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_storage_item.md)
  - [bundle_interaction](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_bundle_interaction.md)
  - [storage_weight_limit](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_storage_weight_limit.md)
  - [storage_weight_modifier](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_storage_weight_modifier.md)

## Scripting
- Player Velocity APIs
  - Player.applyImpulse
  - Player.clearVeolocity
- Book APIs
  - [ItemBookComponent](../ScriptAPI/minecraft/server/ItemBookComponent.md)
  - [BookError](../ScriptAPI/minecraft/server/BookError.md)
  - [BookPageContentError](../ScriptAPI/minecraft/server/BookPageContentError.md)
  - [BookErrorReason](../ScriptAPI/minecraft/server/BookErrorReason.md)
- Camera
  - [setFov](../ScriptAPI/minecraft/server/Camera.md#setfov)
- ContainerSlot Lore
  - [setLore](../ScriptAPI/minecraft/server/ContainerSlot.md#setlore)
  - [getRawLore](../ScriptAPI/minecraft/server/ContainerSlot.md#getrawlore)
  
## What's Next

Looking ahead, here's what you can expect coming in future releases.

### What's Next for Blocks
- Textures, variation - Randomization of textures on a block, per instance. (e.g. a single flower block that gets placed with a random visual rendering)
- Block mask tinting - Allows to tint part of a texture (e.g. grass block is tinted differently for snow on sides and top).
- On environment destroy API - Allows for creators to know that a block was destroyed by something other than the player (needed for logs on a tree to tell leaves they should start to decay).
- Light level API - Allows for reading of light level at any block position (check if sapling has enough light to grow).
- Loot discovery API- Allow reading loot tables and their conditions and functions through scripting.
- Flowerpotable - Allows custom blocks to be placed in flowerpots, like custom flowers or saplings.
- Redstone output - Allows custom blocks to generate redstone power, like a custom redstone block or redstone torch.
- Redstone input - Allows custom blocks to apply logic in script when the redstone powered status on the block changes.
- Block-entity interaction component - this supports recreating mobs that interact with blocks like the Creaking.
- Snow tinting - Allows leaves to change to snow tinted textures over time.
- Leashable - Allows mobs to be leashed to a custom block, like fences.
On neighbor change - Allows for a custom block to understand when the block connected to one of their sides changes.
- Block precipitation - Controls when snow falls through a block (flowers) or builds (dirt) also controls rain falling through (flowers).
- Block opacity - Allows creators to define if light can pass through a block from a gameplay perspective. Allowing for scenarios like grass to not turn to dirt when a custom block is on top of it.

### What's Next for Camera
- Splines - Allows for spline movements of the camera.

### What's Next for World Gen
- Jigsaw Block - All of the functionality currently available in experimental is coming to stable in an upcoming release.
- Improved Spawn rules - Allowing for customized mob spawning in biomes and structures.

For more information on what's next, follow our [Beta/Preview Changelogs](https://feedback.minecraft.net/hc/sections/360001185332).
