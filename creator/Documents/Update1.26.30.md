---
author: mikeam
ms.author: mikeam
title: 1.26.30 Update Notes
description: Update summary of Creator changes in Bedrock 1.26.30
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 06/02/2026
---

# Minecraft Bedrock 1.26.30 Update Notes for Creators

> [!VIDEO https://www.youtube.com/embed/75YBOTlpxnY]
*Video version of this article from the Minecraft Creator Channel*

Minecraft Bedrock has been updated to 1.26.30 (the **Chaos Cubed** game drop). This release graduates a large set of features out of experimental, including the **Custom Projectiles** add-on toggle, the **`minecraft:surface_builder`** and **`minecraft:subsurface_builder`** biome components, the **snow logging** behavior for blocks, several **entity components** (`minecraft:apply_knockback_rules`, `minecraft:pushable_by_entity`, `minecraft:bounciness`, `minecraft:air_drag_modifier`), the **`culling_shape`** field on `minecraft:geometry`, and the **`execute_event_on_home_block`** entity event response. It also ships `@minecraft/server` v2.8.0 and `@minecraft/server-ui` v2.1.0, with a beta release of `@minecraft/server` v2.9.0. A wave of Editor improvements, new Vanilla Voxel Shapes published to `bedrock-samples`, and a new `playerWaypoints` Game Rule round out the release.

The following features do not require experimental toggles unless otherwise specified. Experimental items are grouped under the [Experimental Technical Updates](#experimental-technical-updates) section at the bottom of this document.

## Add-Ons

- The **Custom Projectiles** experiment has been released. Custom projectile features can now be used outside of the experimental context.

## Biome Components

The following biome components are taken out of beta and are available starting with the `1.26.30` format version:

- `minecraft:surface_builder`
- `minecraft:subsurface_builder`

The `minecraft:noise_gradient` surface builder type has been updated. The API is the same as before, but the noise ranges provided are now clamped to the range `[-1, 1]` instead of `[0, 1]`.

## Surface Builders

The `NoiseDescriptor` schema definition has been introduced. The purpose of this schema is to be used as part of a surface- or subsurface-builder's schema. It has the following fields:

- `name` — the string used to initialize the noise. Has no impact on the qualitative aspects of the generated values (required)
- `first_octave` — governs the general frequency characteristics of the generated noise. Lower values result in noise with lower frequency content (required)
- `amplitudes` — governs the attenuation of the first n octaves in the generated noise (required)

The `NoiseBlockSpecifier` schema definition has been introduced. It has the following fields:

- `noise` — the noise identifier associated with a particular `NoiseBlockSpecifier` (optional)
- `threshold` — the minimum sampled noise value associated with the provided block (optional)
- `range` — the range of sampled noise value associated with the provided block (optional)
- `block` — the block to place if the noise sample satisfies either the `threshold` or `range` condition (required)

The `minecraft:noise_gradient` surface- and subsurface-builder now has the following updated API:

- `noise` — a `NoiseDescriptor` (required)
- `non_replaceable_blocks` — a list of blocks that the surface builder is not allowed to replace. Leaving this list empty or unspecified will allow the replacement of any (non-air) block type (optional)
- `noise_block_specifiers` — an array of `NoiseBlockSpecifier`s defining which sample ranges of noise are associated with which blocks. The ranges provided are valid on the interval `[0, 1]`, and may overlap at their endpoints (required)

## Block Components

### Voxel Shapes — `culling_shape` Released

Released the `culling_shape` field in the `minecraft:geometry` component from behind the **Voxel Shapes** experiment. Non-unit-Cube culling shapes for Vanilla blocks (e.g., fences, bells, slabs) still require the experiment.

### Snow Logging Released

Released the snow logging behavior for the `minecraft:precipitation_interactions` component out of experimental. This feature requires `format_version` 1.21.120 or newer.

- The precipitation behavior value has been renamed from `snow_log_no_collision` to `snowlogging` to avoid confusion regarding its functionality.
- Fixed a bug where custom blocks with `random_offset` would be put back in the center of their position when snow logged.

### Sixteen-Way Rotation Trait

Added `minecraft:sixteen_way_rotation` as an enabled state for the `minecraft:placement_direction` block trait. When enabled, this automatically applies a state value from 0–15 based on player rotation at time of block placement.

### Lava Flammable

Added the `lava_flammable` field to the `minecraft:flammable` component. The `lava_flammable` field is usable without the **Upcoming Creator Features** experiment.

- Supported values are `always` and `never` (default)
- When set to `always`, the block is considered when lava attempts to spread fire after adjacent block updates, while still respecting normal fire placement rules
- When set to `never`, the block is excluded from that check

### Block Fixes

- Fixed a bug where `minecraft:material_instances` on custom blocks would override `minecraft:material_instances` inside a `minecraft:item_visual`, causing custom blocks held by the player to be rendered incorrectly
- Fixed permutation component constraints for multi-blocks with `format_version` >= 1.26.20
- Fixed block traits not respecting experimental requirements for `format_version` >= 1.26.20
- Blocks with a custom `beforeOnPlayerPlace` scripting event placed by an item with a `minecraft:block_placer` component no longer desync upon placement

## Client Entities

- Added the `hide_held_items` Molang expression property to the `scripts` section of `minecraft:client_entity`. When it evaluates to a non-zero value, the entity hides its held items.

## Entity

- Released the `execute_event_on_home_block` entity event response out of experimental.

## Entity Components

The following entity components are taken out of beta and are available starting with the `1.26.30` format version:

- `minecraft:apply_knockback_rules`
- `minecraft:pushable_by_entity`
- `minecraft:bounciness`
- `minecraft:air_drag_modifier`

### Area Attack — Self Damage Source

Added the `use_self_as_damage_source` property to the `minecraft:area_attack` component. If set to `false`, other entities won't retaliate against the attacking entity.

### Pushable By Entity — Presets

Added the `presets` field to the `minecraft:pushable_by_entity` component, allowing customization of push behavior per entity type. Each preset entry supports the following fields:

- `filter` — conditions that must be met for the preset to be applied
- `push_mode` — the type of push calculation: `default`, `legacy_boat`, `legacy_minecart`, or `none` (disables pushing entirely)
- `strength_multiplier` — scales the push force applied to the entity
- `min_distance` — minimum distance between entities for push forces to be applied (horizontal distance between entity centers, for all `push_mode` values)
- `max_distance` — maximum range at which push interactions can occur (horizontal distance between the center of the pushed entity and the edge of the pushing entity's collision box). This field was renamed from `kick_distance_threshold`.
- `push_scale_self` — scales how much push force this entity applies to itself away on collision
- `push_scale_other` — scales how much push force this entity applies to the other entity on collision
- `play_sound` — controls whether the `pushed_by_player` sound is played
- `play_sound_cooldown_in_seconds` — cooldown in seconds between sounds (a lower number results in more sounds)
- `play_sound_impulse_threshold` — minimum change of velocity needed to trigger the push sound (a lower value means higher sensitivity)

### Leashable — Unleash On Removal

Added the `unleash_on_removal` field to the `minecraft:leashable` component. When set to `true` (the default), the entity is unleashed from the entity it is leashed to once the component is removed. Entities with `format_version` prior to 1.26.30 default this field to `false` to preserve existing behavior.

Added the `unleash_on_removal` field to the `minecraft:leashable_to` component. When set to `true` (the default), entities leashed to the entity are unleashed once the component is removed. Entities with `format_version` prior to 1.26.30 default this field to `false` to preserve existing behavior.

### Apply Knockback Rules — Extra Knockback

Added the `extra_knockback_approach` field to `minecraft:apply_knockback_rules` preset settings for handling extra knockback from enchantments, sprinting, and swimming:

- `reapply_default` — preserves the current behavior, where knockback is reapplied with the new power and a default preset
- `multiply` — combines the extra knockback into the original knockback calculation by multiplying the power value in the preset provided by `minecraft:apply_knockback_rules`

## Entity Event Responses

Added the `unleash` entity event response:

- If `unleash_self` is set to `true`, it unleashes the entity from the entity it is leashed to.
- If `unleash_others` is set to `true`, it unleashes all entities that are leashed to the entity.

## Entity Filters

Added the `redstone_strength_at_position` entity filter that tests the redstone signal strength at the subject entity's position.

- Now correctly evaluates to `0` when no signal is present
- Now correctly evaluates to the redstone strength when a Redstone Wire is pointing at the evaluated position

## AI Goals — Pickup Items

Added the `stop_if_holding_item` field to `minecraft:behavior.pickup_items`. Defaults to `false`. If `true`, the mob will not pick up another item if the item's preferred slot matches.

## Items

### Use Modifiers — Start Using

A new `start_using` field was added to the `minecraft:use_modifiers` item component. It can be set to `always` or `if_first`. It defaults to `always` with `format_version` lower than 1.26.30 and `if_first` otherwise.

- When set to `if_first`, `minecraft:use_modifiers` will only attempt to start using the item if no other component has already attempted to.
- Items with both a `minecraft:use_modifiers` and a `minecraft:shooter` component with a charge duration will now properly charge and shoot with `start_using` set to `if_first`.
- Items with both a `minecraft:use_modifiers` and a `minecraft:shooter` component with no available ammo will no longer draw with `start_using` set to `if_first` on the `minecraft:use_modifiers` component.

### Wearable and Max Stack Size

The `minecraft:wearable` component no longer overrides the `minecraft:max_stack_size` component when both are present on a custom item.

## Loot Tables

- Added a new condition `biome_has_tag` that allows checking which biome tag is present at the location of the entity that is dropping loot. Specify which biome tag to check in the `tag` field of the condition.
- Fixed loot table container filling so that when trying to insert a new item, existing partial stacks will be merged to open up slots for new additions.
- Fixed loot table container filling so that when no empty slots remain, generated loot now merges into matching non-full stacks instead of failing to place.
- Fixed a bug where the `match_tool` loot condition could match when blocks were broken or mobs were killed with an empty hand.

## Features

### Height Difference Filter Feature

Added a new feature type, `minecraft:height_difference_filter_feature`. This feature is meant to be used as a filter to remove positions based on height differences close to the placed feature.

Example — allowing Pink Petals to only place close to cliffs:

```json
{
  "format_version": "1.26.30",
  "minecraft:height_difference_filter_feature": {
    "description": {
      "identifier": "minecraft:pink_petals_near_cliff_feature"
    },
    "places_feature": "minecraft:pink_petals_feature",
    "min_required_negative_height_diff": 5,
    "search_radius": 5
  }
}
```

Supported fields:

- `min_required_upward_height_diff` — specifies the minimum height difference required upwards
- `min_required_downward_height_diff` — specifies the minimum height difference required downwards
- `max_allowed_upward_height_diff` — specifies the maximum height difference allowed upwards
- `max_allowed_downward_height_diff` — specifies the maximum height difference allowed downwards
- `search_radius` — specifies the length in each cardinal direction the filter will check for blocks against the given differences
- `places_feature` — specifies what feature should be placed when filter succeeds

### Structure Template Feature Updates

Added the `ground_level` field to `minecraft:structure_template_feature`:

- Specifies which Y coordinate of the structure is considered its ground level
- Used as a vertical offset during placement and determines which layer of the structure is checked by the `leveled` and `grounded` constraints
- All non-air blocks at this level define positions where the `leveled` and `grounded` constraints are checked
- If the value exceeds the structure's height, it is clamped to the maximum valid value and a content warning is emitted
- Defaults to `0`

Added a new `leveled` option to the `constraints` field of `minecraft:structure_template_feature`:

- When specified, ensures the structure's ground level is placed on mostly flat terrain
- Includes a `max_steepness` field that defines the maximum allowed height difference between the placement position and terrain samples taken at the structure's ground level. A valid terrain sample consists of a solid block with a non-solid block above it. Defaults to `2`.

Added the `only_check_intersection_for_motion_blocking_blocks` field to the `block_intersection` constraint of `minecraft:structure_template_feature`. This field is optional.

- When `true`, only motion-blocking blocks within the structure are checked for intersections against the `block_allowlist`
- When `false`, all blocks in the structure except empty ones are checked for intersections, including air
- Defaults to `true`, preserving existing behavior
- Motion-blocking blocks are full blocks that block motion

## Projectiles

- Projectiles spawned using the `minecraft:spawn_entity` component now respect the `anchor` field of `minecraft:projectile`.

## Mobs

- The `effect_amplifier` field on the `minecraft:attack` component is now applied to the inflicted status effect, so amplifier-sensitive effects such as Hunger now scale correctly when triggered by a mob's melee attack.
- Fixed actor textures not loading properly when applying packs with older `min_engine_version`.

## Molang

- Added the `query.fuse_time` query that returns the remaining fuse time of an entity, or `-1` if the entity doesn't have a `minecraft:explode` component.

## Renderer

- Fixed a bug where `held_item_scale` was not correctly applied to data-driven blocks.
- Entity `held_item_scale` now accepts a Molang expression for state-driven scaling, and consistently applies to the main hand only in both first- and third-person.

## Commands

### Player Waypoints Game Rule

- **Removed** the `locatorbar` boolean Game Rule. Worlds that previously had `locatorbar` set to `true` will automatically migrate to the new `playerWaypoints` Game Rule with a value of `everyone`, and `false` will migrate to `off`.
- Added the `playerWaypoints` Game Rule as a replacement for the deprecated `locatorbar` Game Rule. Accepted values are `off` (players are not shown on the locator bar) and `everyone` (all players are visible on the locator bar).

### Command Fixes

- Fixed command auto-completion for custom block states with integer values showing incorrect zero-based indices instead of the actual defined values.
- The `/stopsound` command now produces exactly one success or failure message upon completion.
- The `/playsound` command now produces exactly one success or failure message upon completion.
- Fixed an issue where every `/camerashake add` changed the shake types of previously added shake events.
- Fixed missing suggestions for commands typed after `/execute run setblock`.

## World Generation

- Fixed infinite loading issue for biomes with subsurface builder.
- Bedrock floor and ceiling will be placed regardless of `minecraft:surface_builder` and `minecraft:subsurface_builder` presence in the `biome.json` file.

## General

- Fixed a bug where pack settings could be lost when an older version of the same pack without settings defined existed in the cache.
- Fixed an issue where on slower connections the hotbar would swap between items if you placed a block and immediately swapped.
- String length validation for JSON now correctly applies to multi-byte characters.

## Voxel Shapes

- Internally used Voxel Shapes have been released to the [bedrock-samples GitHub repo](https://github.com/Mojang/bedrock-samples/) for creator reference when making their own shapes.
- Matching shapes will be merged at runtime for better performance. For example, `minecraft:composter` and `custom:composter` (where `custom:composter` is a copy of the exported `minecraft:composter` shape) will be de-duplicated on world load to save memory.
- For a deeper dive into Voxel Shape usage, see [Voxel Shapes documentation](./VoxelShapes.md).

## Graphical

- Fixed an issue where `should_update_bones_and_effects_offscreen` and `should_update_effects_offscreen` settings were not applied as expected.
- Removed padding from terrain atlas on RenderDragon.
- Restructured internal graphics settings to be more compact and separated by platform.

## Volumetric Fog

Updated the fog JSON schemas to allow keyframes for the following volumetric fog data members. JSONs must target the 1.26.20 schema version to use this new capability:

- `Max Density` — maximum fog density (0.0–1.0)
- `Zero Density Height` — Y level with maximum density
- `Max Density Height` — Y level where density reaches 0
- `Scattering` — RGB scattering coefficients (light bouncing in fog)
- `Absorption` — RGB absorption coefficients (light absorbed by fog)
- `Henyey Greenstein G` — scattering asymmetry parameter

## Content Log

- Content log messages now cut out the user's personal file path prefix to instead only show the relevant path.

## Dedicated Server

- JSON schema outputs now include beta format versions.
- Dedicated servers now have the allow list enabled by default in `server.properties`, and will display a warning on server startup if the allow list is enabled but contains no entries.
- Added a new flag to Bedrock Dedicated Server to allow converting standard vanilla worlds to an Editor Project when launching BDS as Editor.

## Network Protocol

- Modified the binary format of `BossEventPacket`.

## Scripting API

### Released `@minecraft/server` v2.8.0

This release ships `@minecraft/server` v2.8.0 with the following promotions from beta to stable.

#### Container Access Events

- `BlockContainerClosedAfterEvent` and `BlockContainerClosedAfterEventSignal`
- `BlockContainerOpenedAfterEvent` and `BlockContainerOpenedAfterEventSignal`
- `EntityContainerClosedAfterEvent` and `EntityContainerClosedAfterEventSignal`
- `EntityContainerOpenedAfterEvent` and `EntityContainerOpenedAfterEventSignal`
- `ContainerAccessSource` class
- `BlockContainerAccessEventOptions` interface
- `EntityContainerAccessEventOptions` interface
- `ContainerAccessSourceFilter` interface

#### Locator Bar / Waypoints

- `LocatorBar`
- `LocatorBarErrorReason`
- `LocatorBarError`
- `Waypoint`
- `EntityWaypoint`
- `LocationWaypoint`
- `PlayerWaypoint`
- `WaypointTexture`
- `WaypointTextureBounds`
- `WaypointTextureSelector`
- `CustomTexture`
- `EntityVisibilityRules`
- `PlayerVisibilityRules`
- `InvalidWaypointError`
- `InvalidWaypointTextureSelectorError`

#### Custom Dimensions

- `DimensionRegistry`
- `StartupBeforeEvent.dimensionRegistry`
- `CustomDimensionAlreadyRegisteredError`
- `CustomDimensionInvalidRegistryError`
- `CustomDimensionNameError`
- `CustomDimensionReloadNewDimensionError`

#### Entity Upgrade Events

- `EntityUpgradeAfterEvent` and `EntityUpgradeAfterEventSignal` are released to stable. Entity version upgrades are **no longer gated behind the Upcoming Creator Features experiment**.

#### Primitive Shapes

- `PrimitiveShapesManager`
- `PrimitiveShape`
- `TextPrimitive`
- `PrimitiveShapeError`

#### Other Stable Additions

- `ClientSystemInfo.locale` released from beta to v2.8.0
- `EntityEnderInventoryComponent` released from beta to v2.8.0
- `StructureManager.getPackStructureIds` released from beta to v2.8.0
- `EntityHealCause.TotemOfUndying` enum member released from beta to v2.8.0
- `minecraft:totem_of_undying` firing `entityHeal` events released from beta to v2.8.0
- `BlockComponentBlockStateChangeEvent` class released from beta to v2.8.0
- `ScriptBlockPrecipitationComponent.isSnowLoggable` released from beta to v2.8.0

### Released `@minecraft/server-ui` v2.1.0

Released a new `@minecraft/server-ui` v2.1.0:

- `MessageBox`, `CustomForm`, and all supporting APIs are released out of beta into `@minecraft/server-ui` v2.1.0.

### API Improvements and Fixes

- Significantly improved block search speed when using `BlockVolume` for the `getBlocks` API.
- Significantly improved block search speed when using `BlockVolume` for the `containsBlock` API.
- Fixed a crash that would sometimes occur when setting the color of an item with `DyeableItemComponent`.
- Fixed an issue where `SimulatedPlayer`s do not spawn with properties defined in `player.json`.
- Fixed `Dimension.containsBlock()` returning incorrect results when using exclude filters on a `BlockVolume` smaller than 16x16x16.
- Fixed a bug where the `@minecraft/debug-utilities` package didn't have a peer dependency on the beta version of `@minecraft/server`.
- `LootItem` scripting class now returns correct values for the `Name` field on custom items and blocks.
- `LootPool` scripting class now returns correct values for the `Rolls` and `Bonus Rolls` fields.

### Data-Driven UI (DDUI) Implementation Updates

The implementation of DDUI has been significantly updated as we prepare for stabilization. Please test the latest changes and report any issues.

- Replaced `Observable<T>` with `ObservableString`, `ObservableNumber`, `ObservableUIRawMessage`, and `ObservableBoolean`.
- Instead of using `Observable.create`, you should now use the constructor — for example, `new ObservableString("hello!")`.
- Renamed `DropdownItem` to `DropdownItemData`.
- Changed values of `DataDrivenScreenClosedReason`:
  - `UserClose` → `ClientClosed`
  - `ServerClose` → `ServerClosed`
  - `UserBusy` is unchanged
- Fixed a bug where you could not show `ModalFormData` or `MessageFormData` directly after `CustomForm` or `MessageBox`.

## Editor

[Editor](./BedrockEditor/EditorOverview.md) continues to receive significant updates in this release, spanning Releases 1.3.8 and 1.3.9. For detailed release notes with video demonstrations, see the Editor GitHub Discussions for [Release 1.3.8 (26.30.28)](https://github.com/Mojang/minecraft-editor/discussions/319) and [Release 1.3.9 (26.30.29)](https://github.com/Mojang/minecraft-editor/discussions/320).

### Custom Dimensions Tool

- Added the **Custom Dimensions** tool to the action bar. Easily teleport between custom dimensions inside your world.
- Added **Dimensions and Biome Data Assignment** tools.

> [!NOTE]
> View the [Release 1.3.8 update article](https://github.com/Mojang/minecraft-editor/discussions/319) and [Release 1.3.9 update article](https://github.com/Mojang/minecraft-editor/discussions/320) to see the videos.

### Custom Mesh Tool

- Added the **Custom Mesh** tool to Editor, allowing creators to import STL mesh files and place them as blocks.

> [!NOTE]
> View the [Release 1.3.9 update article](https://github.com/Mojang/minecraft-editor/discussions/320) to see the video.

### Tree Generator

- Added Cherry, Mangrove, Pale Oak, Crimson, and Warped tree types to the Tree Generator sample tool.

### Farm Generator

- Added Melon as a crop option in the Farm Generator tool.

### Flood Tool

- Added tooltip with keyboard shortcut information to the Flood Tool **Apply Flood** button.
- Fixed Flood Tool preview placement and movement not supporting Undo and Redo actions.
- Fixed Flood Tool preview being visually displaced by one block when placed at Y coordinate of 0 or lower.

### Jigsaw

- Fixed a bug where adding a new Jigsaw collection would cause the selected collection to switch to the last one alphabetically instead of staying on the newly created collection.
- Fixed a crash and missing blocks when generating a Jigsaw preview containing wall blocks or other blocks whose post-placement state depends on neighboring blocks.
- Fixed a crash that occurred when generating a Jigsaw preview with structures containing Jigsaw blocks that have an invalid **Turns Into** block name.
- Fixed a bug where the Jigsaw was built using only one structure from the pool of pieces after rejoining a project.
- Implemented Jigsaw auto-save for changing structure and weight in pool.

### Selection / Paste Preview

- Fixed a bug where the preview offset had been changed after clicking Quick Move in the Selection Tool.
- Fixed a bug where the `LayoutInstance` structure rotation/mirror didn't match the structure preview.
- Fixed a bug where stairs/torches/doors in a structure faced the wrong direction when applying Mirror X/Z in the Paste Preview tool.
- The Paste Preview Tool now remembers your current clipboard's changed origin.
- The Line Tool with two control points now respects the maximum allowable distance when moving the second point.

### Minimap

- Added Minimap click and hover interactions:
  - Added click-to-teleport on the minimap and markers
  - Added hover tooltips showing block, biome, and coordinate info on the minimap, and label info on markers
- Improved Minimap architecture and added new features:
  - Moved block scanning to a client-driven model with spread-over-frames processing to avoid frame spikes
  - Added marker system with Multiplayer, Location, and Custom marker types
  - Added FollowPlayer and FreeCenter tracking modes
  - Added Y-level control for top-block scanning depth
  - Added client-side block change detection via `BlockSourceListener`
  - Changed minimap position types from `Vec2` to `VecXZ`
  - Reworked `MinimapItem` script API with typed marker methods and options-based `createMinimap`

### Status Bar

- Status bar now displays the biome under the cursor.

### Workbench

- Fixed a bug in the Editor Workbench tool where doors could only be edited by clicking the bottom half. Clicks on the top half (`upper_block_bit=true`) are now resolved to the bottom half so block state highlighting and property edits work consistently from either half.

### Editor APIs

- Added `TooltipButton` API for interactive tooltips to support buttons.
- Improved performance for frequently updating scripted panes. Also removed `beginConstruct` and `endConstruct` functions.
- Added `setSortOrder` and `getSortOrder` to `IModalToolContainer` for custom tool organization.
- Added `IPaneManager` to `IPlayerUISession` for creating panes. `createPropertyPane` function will be deprecated.
- Added `IIntroductionPane` API to support creating user education content to be displayed in a floating window.
- Added `IContentBadgeManager` API for managing content badges that will highlight UI controls. Content badges can be restored or dismissed from the settings panel.
- Added `contentBadgeId` to `IRootPropertyPaneOptions` API for highlighting `infoTooltip` button. It will persist until tooltip is displayed. Content badges can also be added to action bar items with `IActionBarItemCreationParams`.
- Added `RootPaneLocation.Bottom` to display scripted root panes in a bottom drawer panel.
- Added `sortIndex` for menu API to organize them within the submenu.
- Added `PrimaryAttention` and `SecondaryAttention` to `ThemeSettingsColorKey` API for content badges.
- Introduced infrastructure to enable custom cursor icons in Editor, per context:
  - Introduced new enum `MouseCursorIconType` for the supported cursor icons
  - Player Input Service extended to support cosmetic feature in Editor
  - Cursor icon can be set/cleared with context priority resolution (Global → Modal Tool → Viewport)
- Updated editor tools to show a load/busy mouse cursor during longer-running operations (shape placement, flood apply, chunk operations).

### Vibrant Visuals Per-Biome Mapping

- Added a new modal dialog to Vibrant Visuals that allows users to map per-biome lighting configurations, letting creators assign specific lighting groups, atmospheric scattering, color grading, water, and Cubemap settings to individual biomes.

### Export Settings

- Added three new export types to Export Settings:
  - **Project Backup** — creates a packaged backup of the current editor project into the archive folder (`.mcproject` file)
  - **World Template** — creates a packaged World Template (`.mctemplate`) with all Editor settings and metadata removed into the archive folder
  - **Shareable World** — creates a packaged playable world (`.mcworld`) with all Editor settings and metadata removed into the archive folder
- Disabled the **Export World** button on the Edit Project screen. To export the world, enter the project, go to **File → Export**, and select **Shareable World** from the dropdown.

### Other Editor Improvements

- Added a new modal to display information about the new changes in editor, accessible from the Help menu.
- Removed the Quick Start panel.
- Fixed Navigation Panel teleport-to-player so it also moves the local player to the target player's dimension instead of teleporting to their XYZ in the local player's current dimension.
- Fixed transition when loading a project on the Editor play screen from Instant to Slide, making it consistent with the Play screen.
- Fixed the Publish to Realms help link so it stays available when a Bedrock Editor user does not have an active Realms subscription.
- Fixed a crash that occurred when removing structures from a layout template when a template was placed into the world.
- Fixed an issue where the GameCore build crashes or incorrectly copies data out of the Shared `minecraftWorlds` folder for worlds (with behavior/resource packs enabled) upon exiting the Edit Project screen.
- Implemented auto-save for Prefab template layout changes.
- Modifying buttons in a button pane now works correctly again.

[Get started with Editor!](./BedrockEditor/EditorInstallation.md)

## User Interface

- Tab key can now be used to navigate text fields, entering editing mode with all text selected. Pressing Tab while editing moves to the next field.
- Fixed an issue that caused the Default Game Mode and Activate Cheats settings to appear editable to players who don't have operator permissions.
- Fixed the on-screen keyboard not dismissing after submitting text in JSON UI text fields on iOS and Android.
- Fixed banner message for graphics mode settings option.
- Crafting preview now shows the correct wood material variants. Recipes containing different wood materials now show the variants related to the materials you own.
- Fixed a bug where resource packs with subpacks would not correctly save to new worlds when they were added automatically by activating a corresponding behavior pack.
- Fixed a bug where resource packs with subpacks would not display the valid default settings when they were added automatically by activating a corresponding behavior pack.
- Added a new color formatting code (`§w`) for the shade of blue used by party chat.
- Furnace recipe book was moved from experiments to the common game.
- Improved the furnace recipe book UI.
- Replaced the Locator Bar toggle in the Multiplayer tab of the Create New World and Edit World screens with a **Player Waypoints** setting, allowing players to choose between **Off** (no players shown on the locator bar) and **Everyone** (all players shown on the locator bar).

## Experimental Technical Updates

> [!NOTE]
> The following features require experimental toggles to be enabled.

### Add-Ons (Custom Projectiles Toggle)

- Custom projectiles spawned via the `minecraft:spawn_entity` component now apply the `offset` field of `minecraft:projectile` when the experimental toggle **Custom Projectiles** is enabled.

### Scripting API Beta (`@minecraft/server` v2.9.0-beta)

A new `@minecraft/server` v2.9.0-beta release ships in this version.

#### Game Rules

- Removed the `locatorBar: boolean` property from beta.
- Added `playerWaypoints: PlayerWaypointsMode` property to beta. This replaces the removed `locatorBar` rule.
- Added `PlayerWaypointMode` enum to beta.

#### Entity Upgrade Events (Beta — also released to stable above)

- Added `EntityUpgradeAfterEvent`, which fires when an entity upgrade occurs in `@minecraft/server`.
- Added `entityUpgrade` event to `WorldAfterEvents` in `@minecraft/server`.

#### Sound Instances

- Added `SoundInstance` class to beta with a `stop` method that allows stopping a playing sound.
- `Dimension.playSound` now returns a `SoundInstance` in beta.
- `Player.playSound` now returns a `SoundInstance` in beta.

#### Player

- Added `getPing()` to `Player` in beta.
- Added `playfabId` property to `Player` in beta.
- Removed the beta `Player.partyInfo` scripting property and `PartyInfo` interface from `@minecraft/server`.

#### Block Breaking Events

- Added class `PlayerStartBreakingBlockAfterEvent` to beta.
- Added class `PlayerStartBreakingBlockAfterEventSignal` to beta.
- Added interface `PlayerBreakingBlockEventOptions` to beta.
- Added property `WorldAfterEvents.playerStartBreakingBlock` to beta.
- Added class `PlayerCancelBreakingBlockAfterEvent` to beta.
- Added class `PlayerCancelBreakingBlockAfterEventSignal` to beta.
- Added property `WorldAfterEvents.playerCancelBreakingBlock` to beta.

#### Sneaking Events

- Added `EntityStartSneakingAfterEvent` and `EntityStartSneakingAfterEventSignal` to beta.

#### Block Dynamic Properties Component

- Added the `minecraft:dynamic_properties` block component:
  - It is only present on blocks defined with a `minecraft:block_entity` component with `dynamic_properties` set to `true`
  - It stores properties of the same `DynamicProperties` type that can be found on entities or item stacks
  - It comes with `get`, `set`, and `totalByteCount` APIs
  - It may only store up to 1 KByte of data per block entity
  - It does not (currently) carry over its data to the item resulting from mining or picking the block entity

#### Entity Fog Component

- Added `EntityFogComponent` to `@minecraft/server` (beta) for manipulating a player's fog settings, with `push`, `pop`, `remove`, `getStack`, `getTags`, and `applyStack` methods.
- Added `EntityFogComponentError` to `@minecraft/server` (beta).

#### Graphics Override APIs (Beta)

- Added `BiomeWater` API for water graphics overrides to beta.
- Added `BiomeColorGrading` API for color grading and tone mapping graphics overrides to beta.
- Added `BiomeLighting` API for lighting graphics overrides to beta.
- Added `PlayerWater` API for per-player water graphics overrides to beta.
- Added `PlayerColorGrading` API for per-player color grading and tone mapping graphics overrides to beta.
- Added `PlayerLighting` API for per-player lighting graphics overrides to beta.
- Added `PlayerAtmospherics` API for per-player atmospherics graphics overrides to beta.

#### Loot

- Added `LootItem.conditions` to beta.

#### Debug Utilities

- Added new shape classes to `@minecraft/debug-utilities`: `DebugCone`, `DebugCylinder`, `DebugPyramid`, `DebugEllipsoid`.

#### `@minecraft/server-net` Beta

- When connecting websockets, you can now provide headers for the connection packet: `WebSocket.connect(uri: string, headers?: HttpHeader[]): Promise<WebSocketClient>`.
- Added `WebSocketClientCloseReasons` enum.
- `WebSocketClientCloseAfterEvent` adds property `reason: WebSocketClientCloseReasons`. This event is now sent when `WebSocketClient.close()` is called.
- Added `max_websocket_payload_size` to `@minecraft/server-net` module configuration. This setting, if set, will prevent a websocket from being spammed by the server and close the socket if all data payload sizes received during a tick exceed this value.
- Added `HttpStatusCode` enum.
- `WebSocketConnectionFailedError` property `errorCode` is now a `HttpStatusCode`.
- Fixed a bug where `@minecraft/server-net` was using the incorrect dedicated server configuration ID for a pack. Under `./config/<moduleID>/*` is a pack's configuration for scripting. The server-net module was looking at the pack ID rather than the script module ID like all other modules.
- Fixed a race condition when connecting script websocket clients to a server which caused the socket to fail to connect.

### Data-Driven UI (Experimental)

- Added `ScriptInvalidObservableError`, which is thrown when an observable value is expected to be writable but is not.
- Changed `CustomForm` callback return types to include `InvalidObservableError`:
  - `dropdownChanged` now throws `InvalidFormModificationError` or `InvalidObservableError`
  - `sliderChanged` now throws `InvalidFormModificationError` or `InvalidObservableError`
  - `textFieldChanged` now throws `InvalidFormModificationError` or `InvalidObservableError`
  - `toggleChanged` now throws `InvalidFormModificationError` or `InvalidObservableError`

### Blocks (Experimental)

#### Snow Logging for Multi-Blocks

- Added snow logging behavior for multi-blocks.

#### Block Entity Component (Upcoming Creator Features)

Added the `minecraft:block_entity` block component:

- It has a single boolean field `dynamic_properties`
- It requires `format_version` 1.26.20 and the **Upcoming Creator Features** experiment
- It cannot be used in permutations
- When a block with a `minecraft:block_entity` is placed in the world, an associated block-entity will be placed with the intent to provide persistent local metadata, akin to chests, spawners, signs, etc.
- While leaner than their Vanilla counterparts, they are still heavier on RAM than non-block-entities — use them sparingly

#### Instrument Sound Component (Upcoming Creator Features)

Added the `minecraft:instrument_sound` block component behind the **Upcoming Creator Features** experiment:

- It can be used to assign an instrument to "up" and "down" faces of a block and its permutations
- All current instruments can be used to define a sound
- The newly added `note.none` can be used to specify no sound for a face
- If a face is not defined, it will use its default value: `"up": "note.harp"` and `"down": "note.none"`
- At least one face must be defined for the component to be valid

Example:

```json
{
  "format_version": "1.26.20",
  "minecraft:block": {
    "description": {
      "identifier": "test:test_block"
    },
    "components": {
      "minecraft:instrument_sound": {
        "up": "note.bit",
        "down": "note.bell"
      }
    }
  }
}
```

### Custom Dimensions (Experimental)

- Fixed Custom Dimension height range to match Overworld defaults.

### Entities (Upcoming Creator Features)

- Added support for using entity actions in `entity_version` upgraders.

### Entity Components (Experimental)

The following beta fields of `minecraft:apply_knockback_rules` now use the direction of the tap location when using a touch input device:

- `horizontal_hit_angle_scale`
- `vertical_hit_angle_scale`
- `vertical_position_angle_scale`

The beta field `vertical_hit_angle_scale` from `minecraft:apply_knockback_rules` is now correctly applied when `horizontal_hit_angle_scale` is negative.

### Projectiles (Experimental)

- Added the `owner_launch_immunity_ticks` field to the `minecraft:projectile` component.

### General (Experimental)

- Fixed player spawn position when rejoining a world after their previously saved custom dimension becomes inactive.

### Graphical (Experimental)

- Point lights are now disabled on unsupported hardware (Android, PS4, Xbox One) when the **RenderDragon Features for Creators** experiment is enabled in Vibrant Visuals.
- Fixed an issue where square artifacts would appear when looking at point lights.

### Items (Experimental — Beta APIs)

- Item components `minecraft:swing_sounds`, `minecraft:durability_sensor`, `minecraft:record`, and `minecraft:use_modifiers` now accept string-based sound event names in addition to enum values when using the **Beta APIs** experimental toggle.
- String-based sound names reference entries in `sound_definitions.json`, allowing content creators to use custom sounds in data-driven items without needing new enum values.

### Packs (Experimental)

- Added a new pack folder to dedicated server for system packs (packs which are loaded automatically to the world and disallow other packs using their IDs): `system_behavior_packs` and `system_resource_packs`.

### User Interface (Experimental)

- Fixed formatting codes when using multiline texts in Ore UI system.
- Added support for responding to Xbox friend requests from the Social Drawer.

## What's Next

Looking ahead, here's what you can expect in future releases:

- Block entities, including containers and ticking blocks
- Additions to Dimensions
- Audio improvements, including improvements to sound instancing
- Animation improvements