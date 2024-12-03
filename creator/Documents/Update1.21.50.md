---
author: kakinnun
ms.author: kakinnun
title: 1.21.50 Update Notes
description: Update summary of Creator changes in Bedrock 1.21.50
ms.service: minecraft-bedrock-edition
ms.date: 12/03/2024 #Required; mm/dd/yyyy format.
---

# Minecraft Bedrock 1.21.50 Update Notes for Creators

Minecraft Bedrock has been updated to 1.21.50 and there are a number of changes of note for Add-On creators. The following features do not require experimental toggles.

## Editor 
**Editor v0.8 The Sculpting Update**

Editor is now available on stable builds and is accessible via the Minecraft Launcher on Windows PC.

Editor v0.8 added a number of new capabilities including:
- Sculpting tools: [Flatten](./BedrockEditor/EditorFlattenTool.md), [Fill](./BedrockEditor/EditorFillTool.md), [Extrude](./BedrockEditor/EditorExtrudeTool.md), [Repeater](./BedrockEditor/EditorRepeaterTool.md)
- [Farm tool](./BedrockEditor/EditorFarmTool.md)
- Compass & Fly Speed
- Improved Block Picker

[Get started with Editor!](./BedrockEditor/EditorInstallation.md)

## Blocks

- [minecraft:block_placer](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_block_placer.md) - Use this item component to render the referenced block as the item icon.
- [Destructible_by_mining](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_destructible_by_mining.md) - This allows creators to set the tool tiers for vanilla and custom blocks.

## Entities

- [minecraft:cannot_be_attacked](./../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_cannot_be_attacked.md) - When added to an entity it prevents other entities from attacking it unless they fulfill an exception filter, in vanilla it is added to Ghasts, creators can add their entities to the exception filter allowing them to then attack Ghasts.
- [minecraft:ignore_cannot_be_attacked](./../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_ignore_cannot_be_attacked.md) - This allows content to have custom mobs which bypass the 'cannot_be_attacked' component (for example the one on the Ghast) without requiring a modification of the attacked mob's settings.
- [behavior.summon_entity](../Reference/Content/EntityReference/Examples/EntityGoals/minecraftBehavior_summon_entity.md) - lets creators specify an event to be invoked on the summoned entity immediately after summon.
- [play_sound](../Reference/Content/EntityReference/Examples/EntityEvents/minecraftEvents_play_sound.md) - this entity event response allows the owner entity to emit sounds
- [emit_particle](../Reference/Content/EntityReference/Examples/EntityEvents/minecraftEvents_emit_particle.md) - this entity event response allows particles to be emitted at the center of the entity's bounding box.

## World Gen

**Biome Music & Audio**
- Per-biome ambient sounds are now defined in client_biome JSON components using the new [minecraft:ambient_sounds](../Reference/Content/ClientBiomesReference/Examples/Components/minecraftClientBiomes_ambient_sounds.md) component.
- Client biome JSON files now support a [minecraft:biome_music](../Reference/Content/ClientBiomesReference/Examples/Components/minecraftClientBiomes_biome_music.md) component with a "volume_multiplier" field which will gradually affect music volume when the audio listener is inside the corresponding biome.

## Commands

- [/schedule delay](../Commands/commands/schedule.md#delaymode) - Queue a function to be executed after a certain amount of time.

## Creator API

Another set of Creator APIs have been released out of beta and into stable (see: [script versioning](ScriptVersioning.md) for information on how we version Creator APIs).

**APIs included in the @minecraft/server version 1.16.0 release:**

- **Block Liquid APIs**
  - [FluidContainer](../ScriptAPI/minecraft/server/FluidContainer.md)
  - [BlockFluidContainerComponent](../ScriptAPI/minecraft/server/BlockFluidContainerComponent.md)
- **Device Info APIs**
  - [ClientSystemInfo](../ScriptAPI/minecraft/server/ClientSystemInfo.md)
  - [MemoryTier](../ScriptAPI/minecraft/server/MemoryTier.md)
  - [PlatformType](../ScriptAPI/minecraft/server/PlatformType.md)
  - [SystemInfo](../ScriptAPI/minecraft/server/SystemInfo.md)
- **Block Fill APIs**
  - [BlockFillOptions](../ScriptAPI/minecraft/server/BlockFillOptions.md)
  - [UnloadedChunksError](../ScriptAPI/minecraft/server/UnloadedChunksError.md)
  - Dimension
    - [containsBlock](../ScriptAPI/minecraft/server/Dimension.md#containsblock)
    - [getBlocks](../ScriptAPI/minecraft/server/Dimension.md#getblocks)
    - [fillBlocks](../ScriptAPI/minecraft/server/Dimension.md#fillblocks)
- **ItemUse Event API Improvements**
  - ItemUseOnBeforeEvent
    - [isFirstEvent](../ScriptAPI/minecraft/server/ItemUseOnBeforeEvent.md#isfirstevent)
  - ItemUseOnAfterEvent
    - [isFirstEvent](../ScriptAPI/minecraft/server/ItemUseOnAfterEvent.md#isfirstevent)
    
## What's Next

Looking ahead, here's what you can expect coming in future releases.

### What's Next for World Gen

- Jigsaw Block - All of the functionality currently available in experimental is coming to stable in the upcoming releases.
- /place feature - A command that allows placing of features.

### What's Next for Camera

- 3rd Person Boom Preset - currently in experimental, this will add another camera preset type for use with the camera command and APIs.
- Focus Target - A new parameter allowing the Free Cam to track an entity.
- Aim Assist - A feature that allows for Aim Assist to improve usability in Custom Camera scenarios.

### What's Next for Blocks

- Block Item Config - improvements to block item config settings.
- Liquid - Improvements to liquid detection and waterlogging APIs.

### What's Next for Script API, Molang and Commands

- Input APIs - Script APIs and Molang queries that detection of some input events.


For more information on what's next, follow our [Beta/Preview Changelogs](https://feedback.minecraft.net/hc/sections/360001185332).
