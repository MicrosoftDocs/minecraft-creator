---
author: mikeam
ms.author: mikeam
title: 1.26.0 Update Notes
description: Update summary of Creator changes in Bedrock 1.26.0
ms.service: minecraft-bedrock-edition
ms.date: 02/05/2026 #Required; mm/dd/yyyy format.
---

# Minecraft Bedrock 1.26.0 Update Notes for Creators

> [!VIDEO https://www.youtube.com/embed/8DT7mEEyUlY]
*Video version of this article from the Minecraft Creator Channel*

Welcome to 1.26.0 – the first release following Minecraft's new version numbering system! Going forward, versions are numbered based on the year, so all 2026 releases begin with '26'. For more details on the version numbering changes, see [aka.ms/MinecraftVersionUpdate](https://aka.ms/MinecraftVersionUpdate). For the purposes of APIs and the platform, and because this is what is used within various JSON files, we'll continue to use 1.26.xx.yyz versioning here.

Minecraft Bedrock has been updated to 1.26.0 and there are a number of changes of note for creators. The following features do not require experimental toggles unless otherwise specified.

## Blocks

### Geometry Updates
Updated `minecraft:geometry` block component to bring parity with Java Edition:
- Changed `minecraft:geometry.full_block` so the DOWN face is rotated 180 degrees, matching non-data-driven full blocks and Java Edition
- Creators can use the old geometry by explicitly specifying `minecraft:geometry.full_block_v1`
- Existing blocks using `minecraft:geometry.full_block` with format_version less than 1.26.0 will continue to work unchanged

### Block Collision Box Improvements
Released collision box improvements from experimental:
- Can now have an array of collision boxes
- Max height has been increased from 16 to 24
- No longer requires format version 1.21.130 or higher

### Block Connection Trait
The `minecraft:connection` block trait can now be used without the Upcoming Creator Features toggle.

### Redstone Consumer Component
The `minecraft:redstone_consumer` component is now released from experimental for `format_version >= 1.26.0`:
- Renamed field `propogates_power` to `propagates_power`

### Liquid Detection Updates
Added `use_liquid_clipping` field to the `detection_rules` in `minecraft:liquid_detection`:
- `true` - The block uses `collision_box` to visually clip the water
- `false` - Ignores liquid clipping, rendering water across the whole block
- Defaults to `true` prior to format_version 1.26.0
- Defaults to `false` for format_version 1.26.0 and after

### Connection Rule Component
Released `minecraft:connection_rule` component from experimental for block format versions 1.26.0 or higher.

### Support Component
Released `minecraft:support` component from experimental for block format versions 1.26.0 or higher.

### Leashable Block Component
The `minecraft:leashable` block component can be used with format_version 1.26.0 and higher without the "Upcoming Creator Features" toggle.

### Corner and Cardinal Direction
`minecraft:corner_and_cardinal_direction` in `minecraft:placement_direction` can now be used without the Beta APIs toggle.

> [!NOTE]
> There is a known issue with the inside corner state not being set properly (MCPE-232019) that will be fixed in a future release.

### Alpha Masked Tint
The `alpha_masked_tint` option in `minecraft:material_instances` no longer requires "Upcoming Creator Features".

### Ambient Occlusion Improvements
Custom blocks intersecting with other blocks now have better ambient occlusion.

## Items

### Damage Component Range
The item component `minecraft:damage` now supports values between 0 and 32767.

### Storage Component Fix
Equipping an item with a `storage` item component in an armor or hand slot will no longer delete storage contents.

## Entity Components

### Component Schema Changes
Made schemas for the following AI goals stricter when parsing. They will fail to load entity JSON that has invalid data in versions 1.26.0 and newer:

#### Attack Behaviors
- `minecraft:behavior.defend_village_target`
- `minecraft:behavior.nearest_attackable_target`
- `minecraft:behavior.guardian_attack`
- `minecraft:behavior.delayed_attack`
- `minecraft:behavior.dragonstrafeplayer`
- `minecraft:behavior.dragonchargeplayer`
- `minecraft:behavior.melee_attack`
- `minecraft:behavior.melee_box_attack`
- `minecraft:behavior.stomp_attack`

#### Timer Flags
- `minecraft:behavior.timer_flag_1`
- `minecraft:behavior.timer_flag_2`
- `minecraft:behavior.timer_flag_3`

#### Movement Restrictions
- `minecraft:behavior.move_towards_dwelling_restriction`
- `minecraft:behavior.move_towards_home_restriction`

#### Float Range Field Updates
- `attack_interval` in `minecraft:behavior.nearest_attackable_target` now only accepts an object with `min` and `max` values
- `target_zone` in `minecraft:behavior.dragonchargeplayer` and `minecraft:behavior.dragonstrafeplayer` now only accepts an object with `min` and `max` values
- `cooldown_range` and `duration_range` in timer flag behaviors now only accept an object with `min` and `max` values

### Look At Behavior Updates
Updated the `minecraft:behavior.look_at_*` behavior components:
- Made schemas stricter - they will fail to load entity JSON with invalid data in versions 1.26.0 and newer
- Deprecated `min_look_time` and `max_look_time` - replaced with `look_time` which takes `min` and `max` as a range
- Existing uses of `min_look_time` and `max_look_time` will be upgraded automatically

These changes affect:
- `minecraft:behavior.look_at_entity`
- `minecraft:behavior.look_at_player`
- `minecraft:behavior.look_at_target`
- `minecraft:behavior.look_at_trading_player`

### Jump Dynamic Component
Added new fields to `minecraft:jump.dynamic`:
- `regular_skip_data` - Used during normal skip movement
  - `distance_scale` - Multiplier applied to horizontal velocity when jumping
  - `height` - Force applied vertically when jumping
  - `jump_delay` - Ticks between sequential jumps
  - `animation_duration` - Duration of the jump animation
- `fast_skip_data` - Used when traveling quickly with skip movement (same fields as above)

### Breedable Component Split
Split the `minecraft:breedable` component into two separate components:

#### minecraft:offspring_data
Defines how an offspring of an entity is born. Contains the following fields moved from `minecraft:breedable`:
- `blend_attributes`
- `inherit_tamed`
- `mutation_factor`
- `mutation_strategy`
- `random_variant_mutation_interval`
- `random_extra_variant_mutation_interval`
- `deny_parents_variant`
- `breeds_with`
- `combine_parent_colors`
- `property_inheritance`
- `parent_centric_attribute_blending`

#### minecraft:breedable
Now only contains data about how an entity uses breeding behavior:
- How it enters the "love" state (items required, taming, health requirements)
- How it handles the pregnancy system and fires those events
- Spawning the child entity now requires the `minecraft:offspring_data` component

### Interact Component Default Change
Changed the `swing` field to default to `true` in the `minecraft:interact` component.

### Equippable Component Fix
Fixed an issue where `on_equip` and `on_unequip` events on the `minecraft:equippable` entity component would be executed on world load. These events now only execute as a result of an interaction in the game world.

### Fire At Target Fix
Fixed bug with `minecraft:behavior.fire_at_target` where `max_head_rotation_x` and `max_head_rotation_y` were applied inversely.

### Projectile Deflection
All projectiles now deflect `reflect_on_hurt:true` projectiles on hit as outlined in the documentation. This is in addition to damage causing these projectiles to be deflected.

## Scripting API

### Released to v2.5.0

#### Block Component Types
Added missing `BlockComponentTypes` enum values:
- `PrecipitationInteractions = 'minecraft:precipitation_interactions'`
- `RedstoneProducer = 'minecraft:redstone_producer'`
- `MapColor = 'minecraft:map_color'`
- `Movable = 'minecraft:movable'`

#### Player Swing Events
- `PlayerSwingStartAfterEvent`
- `PlayerSwingEventOptions`
- `HeldItemOption`
- `EntitySwingSource`

#### Redstone Update Event
- `BlockComponentRedstoneUpdateEvent` (released to v2.0.0)
- `BlockCustomComponent.onRedstoneUpdate` (released to v2.0.0)

#### Entity Hurt Event Changes
- `EntityHurtAfterEvent` now sends when damage amount is zero

#### Bug Fixes
- Fixed an issue where `getComponents` on `ItemStack` could return an undefined in the array when used in older scripting versions
- Fixed an issue where `getComponents` on `Entity` could return an undefined in the array when used in older scripting versions

## Camera

### Aim Assist Script API
Provided the script API for supporting entity type families in the aim assist.

## Molang

### Multi-line Brace Support
The `pre_animation` and `initialize` fields in `minecraft:client_entity` and `minecraft:attachable` now properly support `{}` brace scope delimiters across multiple lines when using format version 1.26.0 or higher.

## Biomes

### Biome Namespace Handling
Biomes without a namespace in `biomes_client.json` will be applied to worlds below `base_game_version` 1.21.40 with the default namespace.

### Nether Biome Replacement
Enabled the Biome Replacement feature in the Nether:
- Using Biome Replacement for Overworld and Nether for the same Biome is discouraged but not prohibited
- Biome Replacement in Nether can only be used with `minecraft:surface_builder` of types: `minecraft:overworld`, `minecraft:frozen_ocean`, `minecraft:capped`, `minecraft:the_end`

### Village Type Component
Added `minecraft:village_type` biome component that determines the type of the village in the biome.

### New Biome Tags
- `slime` - Allows Slime to spawn higher than usual
- `swamp_water_huge_mushroom` - Allows huge mushrooms to spawn in shallow swamp water
- `fast_fishing` - Increases Fishing speed
- `high_seas` - Alters Salmon behavior
- `surface_mineshaft` - Changes Surface Mineshaft blocks to Dark Oak

## Graphical

### Vibrant Visuals Data-Driving
Added the ability to specify the following in Vibrant Visuals lighting configuration files:
- Ambient light colors according to the time of day
- Ambient light illuminances according to the time of day
- Sky light intensity according to the time of day

### Biome Water Color Contribution
Introduced new parameter `biome_water_color_contribution` to the Vibrant Visuals water effects configuration file:
- Controls the contribution of per-biome water colors provided by `*.client_biome.json` files
- Range: `[0.0, 1.0]`
- Default value: `0.0`

### Rendering Fixes
- Fixed attachables not rendering correctly when the game is paused or when rendered in an NPC UI window
- Fixed blocks using `render_method:blend` in various rendering contexts

## Editor

[Editor](./BedrockEditor/EditorOverview.md) has received numerous improvements in this release. For detailed release notes with video demonstrations, see the Editor GitHub Discussions for [Release 1.2.1](https://github.com/Mojang/minecraft-editor/discussions/282), [Release 1.2.2](https://github.com/Mojang/minecraft-editor/discussions/284), [Release 1.2.3](https://github.com/Mojang/minecraft-editor/discussions/288), and [Release 1.2.4](https://github.com/Mojang/minecraft-editor/discussions/303).

### Chunk Management

You can now quickly regenerate or delete chunks from your world! This is helpful for rapidly developing content like feature rules without having to generate new worlds, or for reducing the size of worlds you've been playing for years. Note that it can take time for the client to reflect the updates.

*See [Release 1.2.4 discussion](https://github.com/Mojang/minecraft-editor/discussions/303) for video demonstration.*

### Cinematic Tool

A new tool makes it easier to create cinematics using the camera scripting APIs:
- Create paths using control points with spline interpolation (Catmull-Rom or Linear)
- In-game visualization of control points and spline paths with interactive gizmos
- Play/stop animation preview for camera movement along the spline path
- Export TypeScript code with validation for duplicate timestamps

*See [Release 1.2.4 discussion](https://github.com/Mojang/minecraft-editor/discussions/303) for video demonstration.*

### Flood Tool

A new tool makes it easier to add or remove water and lava in your world. Select a starting point and raise or lower to prepare an area, then hit 'Apply Flood' to make the change. There's a limit to the number of blocks that can be changed, but if you're willing to wait, hit 'Ignore Block Limit' to do even larger areas.

*See [Release 1.2.4 discussion](https://github.com/Mojang/minecraft-editor/discussions/303) for video demonstration.*

### Three-Point Selection

Updated how SHIFT modifies Selection to now use a 'three-point' method. When holding SHIFT, the first two clicks define the XZ bounds and then the third click defines the Y height. If you want the previous behavior of SHIFT selecting the opposite corner, you can toggle the '2-Point Selection' button.

*See [Release 1.2.3 discussion](https://github.com/Mojang/minecraft-editor/discussions/288) for video demonstration.*

### Selection Volume Limits
- Added a dynamic limit for selection volumes that limits the volume to 1,000,000 blocks
- This allows for non-cube rectangular volumes larger than the previous 100x100x100 cube limit
- A larger cube limit is still present at 1024x1024x1024

### Structure Panel Improvements
- Added Edit Tags menu item in the structure panel for editing tags on one or more checked structures
- Added modal popup 'Edit Tags' to add new or remove existing tags from selected structures

### Terrain Tool Updates
- Updated Elevation icons
- Fixed a bug where the game would freeze when using Elevation mode to Lower the terrain near the bottom of the world

### Vibrant Visuals in Editor
- Fixed Vibrant Visuals mode not rendering water correctly
- Fixed an issue where opening the Vibrant Visuals pane and selecting a setting would not display the selected setting
- The Vibrant Visuals Settings panel now supports editing settings for each biome
- Blocks that leverage the `minecraft:connection` block trait now connect when used in the Editor

### Editor API Updates

#### Cursor API
- Added `getDefaultProperties`, `popPropertiesById`, `pushPropertiesById`, and `updatePropertiesById` functions to manage stateful properties
- Fixed the cursor distance limit to match the spherical view distance setting

#### Widget API
- Added `dimensionId` and `ignoreEditorModeVisibilityOverride` to control widget visibility without manual handling
- Fixed a bug where cursor-bound widgets triggered state change events while hidden

#### Pane API
- Added `drawerPane` API property to `IRootPropertyPane` for displaying a split-view drawer overlaid on the root pane's contents
- Added `style` API property to `IPropertyItemOptionsBase` for overriding default styles of items
- Updated `IListPanePropertyItem` to dynamically adjust its size based on the number of entries until the maximum height is reached, unless the optional `fixedHeight` property is set
- Updated `LayoutAlignment` API enum values to be `Start` and `End`, instead of `Left` and `Right`
- Updated `LayoutDirection` API with `PaneLayoutType`, and `Horizontal` property will now be treated as a single row

#### Modal Tool API
- Added `isActive` property to `IModalTool` to check for the active state
- Added `onSelectedToolChanged` property to `IModalToolContainer` to listen for global modal tool change events
- Updated selected modal tool to toggle off when changing out of Tool mode, then toggle on after returning back

#### Settings Persistence
Added settings persistence for scripted extensions.

### Bug Fixes
- Fixed a bug where enabling "restrict smart fill to selection" in Smart Fill caused the project to crash for large selection areas
- Fixed a bug that caused Selection/quick-move mode to get into a bad state if you tried to use "enter" to make a selection while in Quick Move mode
- Fixed an issue when Quick Move was used on a large brush selection, the client would freeze and crash
- Fixed a bug that caused Navigation panel selected location to not mark the list entry
- Fixed a bug that caused the input field focus highlight to remain after a drag operation
- Updated Grapple tool so it will work within the full view distance

[Get started with Editor!](./BedrockEditor/EditorInstallation.md)

## Packs

### Resource Pack Fixes
- Fixed issue on Windows where `skin_packs` and `custom_skins` weren't migrated
- Added a migration step to move `skin_packs`, `custom_skins`, and `development_skin_packs` from user to Shared storage
- Added a migration step to move `development_resource_packs` and `development_behavior_packs` from user_id to Shared storage
- Fixed an issue on Windows where the `resource_packs` and `behavior_packs` folders weren't migrated to the new file directory
- Fixed an issue where development resource packs enabled globally would not reload when leaving and re-entering a world or using the `/reload all` command

### Temporary Files
Temporary files on Windows will now write to `%LocalAppData%\Temp\Minecraft Bedrock Preview` and `%LocalAppData%\Temp\Minecraft Bedrock` respectively.

## Sounds

### Spear Sound Events
Every spear type now has its own unique sound event, allowing creators to define dedicated custom sounds.

## User Interface

### JSON UI Updates
- Updated the priority of `stack_panel` children to be bindable

### UI Scaling
- Consolidated JSON UI and Ore UI under one scaling approach
- Ore UI screens use full-integer scaling for sharper visuals
- Revised scaling range: new defaults, new min/max
- Default scale uses DPI-based detection on handheld devices
- Minimum scale set to half the maximum scale value

## General

### Key Bindings
- Command macro support added for Creator Settings
- 10 new key mappings for command macros (Alt + chosen key)
- It is now possible to reuse a keybinding for normal actions, macros, and coordinates

### Launch Protocol
`minecraft://connect?localLevelId=<level id>` launch protocol now requires the level id to be a URL encoded value.

### JSON Schema Fixes
Fixed an issue where generated JSON Schemas included superfluous `_array` fields (e.g., `on_bred_array`, `on_death_array`) for certain components such as `experience_reward`.

## Stability and Performance

- Fixed a bug where some low memory Android devices would crash at startup
- Fixed a bug that was causing crashes when using the NPC component
- Fixed a potential crash when suspended during "Syncing user data" UI
- Fixed a rare crash when trying to breed animals

## Experimental Features

> [!NOTE]
> The following features require experimental toggles to be enabled.

### Scripting API Beta (v2.6.0-beta)

#### Block Methods
- Added `getComponents` to `Block`
- Added `hasComponent` to `Block`

#### Localization Keys
- Added `localizationKey` property to `BlockType` and `BlockPermutation`
- Added `localizationKey` property to `EntityType`
- Added `localizationKey` property to `ItemType`

#### Entity Hurt Before Event
- `EntityHurtBeforeEvent` class
- `EntityHurtBeforeEventSignal` class
- `EntityHurtAfterEventOptions` interface
- `EntityHurtBeforeEventOptions` interface
- `WorldBeforeEvents.entityHurt`
- Changed `EntityHurtAfterEventSignal` to use `EntityHurtAfterEventOptions`

#### Entity Heal Events
- `EntityHealCause` enum
- `EntityHealSource` class
- `EntityHealAfterEvent` class
- `EntityHealBeforeEvent` class
- `EntityHealBeforeEventSignal` class
- `EntityHealAfterEventSignal` class
- `WorldAfterEvents.entityHeal`
- `WorldBeforeEvents.entityHeal`
- `EntityHealEventOptions` interface

#### Entity Item Pickup Events
- `EntityItemPickupAfterEvent` class
- `EntityItemPickupBeforeEvent` class
- `EntityItemPickupAfterEventSignal` class
- `EntityItemPickupBeforeEventSignal` class
- `EntityItemPickupEventOptions` interface
- `ItemFilter` interface
- `WorldAfterEvents.entityItemPickup`
- `WorldBeforeEvents.entityItemPickup`

#### Entity Item Drop Events
- `EntityItemDropAfterEvent`
- `EntityItemDropAfterEventSignal`
- `EntityItemDropEventOptions`

#### Biome APIs
- Added `getTags()` to `BiomeType`
- Added `hasTags(tags: string[])` to `BiomeType`
- Added `containsBiomes(volume: BlockVolumeBase, biomeFilter: BiomeFilter)` to `Dimension`
- Added `BiomeFilter` interface

#### Camera APIs
- Added easing type parameter to camera splines API for rotation and position
- Added `EntityAttachPoint` enum
- Added `CameraAttachOptions` interface
- Added `attachToEntity(attachCameraOptions?: CameraAttachOptions): void` method for attaching third-person camera to an entity

#### Debug Shape Improvements
- Added `attachedTo` property to `DebugShape` for specifying an Entity that this shape should be positionally attached to
- Added `visibleTo` property to `DebugShape` for specifying an array of players that this shape should be visible to
- Debug Shapes no longer have a maximum render distance

#### Redstone Update Event Enhancement
- Added `previousPowerLevel` to `BlockComponentRedstoneUpdateEvent`

#### World Seed
- Added `World.seed` property to expose the world seed

### Camera Splines (Experimental Creator Camera)
- Behavior packs for custom camera splines can be created in the `camera/splines/` directory
- Splines only play on the `minecraft:free` camera preset
- Added the `play_spline` keyword to the `/camera` command for playing a spline loaded from behavior pack

### Molang (Upcoming Creator Features)
Added `query.get_level_seed_based_fraction` Molang query.

### Block Entity Events (Beta APIs)
Blocks can handle the entity `execute_event_on_home_block` event via custom components in scripting:

```javascript
system.beforeEvents.startup.subscribe(init => {
    init.blockComponentRegistry.registerCustomComponent('sample:my_custom_block_component', {
        onEntity: (e: BlockComponentEntityEvent) => {
            if (e.name !== "sample:my_entity_named_event") return;
            const block = e.block;
            const source = e.entitySource;
            // Handle event...
        },
    });
});
```

### RenderDragon for Creators Experiment
- Static colored lighting has been adjusted to dim block light color relative to the max block light emission level
- Static colored lighting on flowing lava and other blocks no longer appears too dark
- Fixed cases of static colored lighting leaking through corners
- Added static lighting shading support to data-driven entities and items
- The number of analytic/point lights in the scene is now limited according to resource availability
- Analytic/point lights will now phase in or out according to their importance to the scene's lighting
- Block lights in `local_lighting.json` colors are expected to be in sRGB space
- Added Android/PlayStation support for colored block lights in preview for Vibrant Visuals

### Metal Nuggets Tag (Drop 1 of 2026)
Added the new tag `minecraft:metal_nuggets` item tag to Copper, Iron, and Gold Nuggets.

## What's Next

Looking ahead, here's what you can expect coming in future releases.

### More camera work into stable
 - splines
 - attach to non-player entity, aim assist

More modal UI presets 

### Stabilizing APIs 
 - Adding unbreakable to item durability
 - Ticking area APIs
 - Container inventory features
 - Work for custom projectiles