---
author: docsbryce
ms.author: v-brbortree
title: 1.26.40 Update Notes
description: Update summary of Creator changes in Bedrock 1.26.40
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 08/03/2026
---

# Minecraft Bedrock 1.26.40 Update Notes for Creators

Minecraft Bedrock has been updated to 1.26.40. This release introduces stricter entity JSON validation, releases the `minecraft:multi_block` trait and `minecraft:instrument_sound` block component from experimental, and adds new controls for entity pushing, knockback, and projectile damage. Pack files are now compressed and archived, and duplicate raw files have been removed to improve performance. It also ships `@minecraft/server` v2.9.0, with beta releases of `@minecraft/server` v2.10.0 and `@minecraft/server-ui` v2.2.0. Editor gains glTF and GLB mesh support, real-time biome chunk synchronization, timeline tools, and improved transaction APIs. Dedicated Server creators can now run pack optimization from the command line. Experimental Drop 3 content includes the Dappled Forest biome, Abandoned Camps, Poplar trees, Cushions, Straw Beds, and Wool Stairs and Slabs.

The following features do not require experimental toggles unless otherwise specified. Experimental items are grouped under the [Experimental Technical Updates](#experimental-technical-updates) section at the bottom of this document.

## Packaging

Pack files are now compressed and stored in archives. The duplicate raw files previously included in the `behavior_pack` and `resource_pack` folders have been removed to improve performance.

## Entity JSON validation

Entity definitions that use `format_version` 1.26.40 or later now fail to load when invalid data is supplied to several components and AI goals. Validate affected content before increasing its format version.

The following actor components now use stricter schemas:

- `minecraft:cannot_be_attacked`
- `minecraft:floats_in_liquid`
- `minecraft:ignore_cannot_be_attacked`
- `minecraft:wants_jockey`
- `minecraft:on_death`
- `minecraft:on_friendly_anger`
- `minecraft:on_hurt`
- `minecraft:on_hurt_by_player`
- `minecraft:on_ignite`
- `minecraft:on_start_landing`
- `minecraft:on_start_takeoff`
- `minecraft:on_target_acquired`
- `minecraft:on_target_escape`
- `minecraft:on_wake_with_owner`

The following AI components now use stricter schemas:

- `minecraft:annotation.open_door`
- `minecraft:bucketable`
- `minecraft:hide`
- `minecraft:jump.dynamic`
- `minecraft:jump.static`
- `minecraft:managed_wandering_trader`
- `minecraft:persistent`
- `minecraft:trade_resupply`
- `minecraft:trust`

The following AI goals now use stricter schemas:

- `minecraft:behavior.charge_held_item`
- `minecraft:behavior.drink_potion`
- `minecraft:behavior.eat_block`
- `minecraft:behavior.knockback_roar`
- `minecraft:behavior.leap_at_target`
- `minecraft:behavior.move_to_block`
- `minecraft:behavior.nap`
- `minecraft:behavior.ranged_attack`
- `minecraft:behavior.silverfish_merge_with_stone`
- `minecraft:behavior.silverfish_wake_up_friends`
- `minecraft:behavior.snacking`
- `minecraft:behavior.squid_dive`
- `minecraft:behavior.squid_flee`
- `minecraft:behavior.squid_idle`
- `minecraft:behavior.squid_move_away_from_ground`
- `minecraft:behavior.squid_out_of_water`
- `minecraft:behavior.stalk_and_pounce_on_target`
- `minecraft:behavior.summon_entity`

The following fields have specific migration requirements for `format_version` 1.26.40 and later:

- `minecraft:behavior.beg.look_time` must be an object containing `min` and `max` values.
- `minecraft:behavior.float_wander.float_duration` must be an object containing `min` and `max` values.
- `minecraft:behavior.ranged_attack.attack_interval` now accepts a float range and replaces `attack_interval_min` and `attack_interval_max`.

The `on_kill` event is now mapped correctly for the following goals in entity definitions that use `format_version` 1.26.40 or later:

- `minecraft:behavior.delayed_attack`
- `minecraft:behavior.melee_attack`
- `minecraft:behavior.melee_box_attack`
- `minecraft:behavior.stomp_attack`
- `minecraft:behavior.use_kinetic_weapon`

Previously, `on_kill` was incorrectly mapped to `on_attack` and didn't fire when the entity killed its target.

## Entity components

### Pushable by entity

Added the `require_collision_overlap` field to presets in `minecraft:pushable_by_entity`. This field controls whether two entity collision boxes must overlap before pushing occurs.

- Defaults to `true` for `format_version` 1.26.40 and later.
- Defaults to `false` for earlier format versions to preserve existing behavior.

### Apply knockback rules

The `minecraft:apply_knockback_rules` component is no longer in beta. The component has the following changes:

- Renamed `scale_previous_velocity` to `slowdown_scale`.
- `horizontal_power` is no longer scaled internally by `0.4`. Similar horizontal and vertical power values now produce similar knockback on both axes.
- Deprecated `horizontal_hit_angle_scale`, `vertical_hit_angle_scale`, and `vertical_position_angle_scale`.
- Added `knockback_mode` to control the direction of applied knockback:
  - `relative_horizontal` — applies horizontal knockback from the attacker toward the target. This value is the default.
  - `hit_direction` — applies knockback based on the hit direction and point of impact.

Creators using existing `horizontal_power` values should retest their entities because the internal scaling behavior has changed.

### Projectile impact damage

The `impact_damage` subcomponent of `minecraft:projectile` has the following changes:

- Added `ceil_pre_critical_damage`. When `true`, damage is rounded up before applying the critical-hit multiplier.
- `power_multiplier` now applies independently of difficulty randomization, allowing projectile velocity to scale damage directly.
- The default value of `power_multiplier` changed from `2` to `0` so that content that doesn't specify either damage field remains unchanged.
- Replaced `semi_random_diff_damage` with `difficulty_randomization`. Accepted values are:
  - `none` — ignores world difficulty. This value is the default.
  - `additive` — adds a difficulty-driven value to base damage and matches the previous behavior of `semi_random_diff_damage: true`.
  - `multiplicative` — adds a difficulty-driven value to `power_multiplier` before velocity scaling is applied.

Content authored against earlier format versions is upgraded when loaded in 1.26.40 or later to preserve its existing behavior.

### Projectile bounce behavior

The `should_bounce` field in `minecraft:projectile` is now an enum instead of a Boolean. Accepted values are:

- `no` — the projectile never bounces. This value is the default.
- `if_invulnerable` — the projectile bounces when its target is invulnerable to the damage source, such as a player in Creative mode or a player blocking with a shield.
- `if_no_damage_dealt` — the projectile bounces whenever no damage is dealt, including because of a damage sensor or invulnerability frames.

Earlier content is upgraded automatically: `true` becomes `if_invulnerable`, and `false` becomes `no`.

### Cursor targeting

Added the `minecraft:not_pickable_from_inside` entity component. When present, an entity can't be targeted by a cursor hit test while the viewer's point of view is inside the entity's collision box. This component can prevent large or invulnerable entities from blocking interaction with nearby entities and blocks.

## Blocks

### Multi-block trait

The `minecraft:multi_block` trait has been released from experimental. Horizontal values for its `direction` field still require the **Upcoming Creator Features** experiment.

Added the `minecraft:multi_block_feature` biome decoration feature. This feature places blocks that are defined with the `minecraft:multi_block` trait.

The following related fixes are included:

- `/fill` now places blocks that use `minecraft:multi_block` correctly.
- `minecraft:sixteen_way_rotation` command suggestions now display values from `0` through `15`.
- Sixteen-way placement rotation now uses the same orientation as the existing cardinal- and facing-direction traits.

### Rotation

N-way rotation on `minecraft:geometry` no longer requires the **Upcoming Creator Features** experiment. The `minecraft:sixteen_way_rotation` state on the `minecraft:placement_direction` trait also no longer requires the experiment.

### Instrument sound

The `minecraft:instrument_sound` block component has been released from experimental. Scripts can access its corresponding component API under beta, as described in [Experimental Technical Updates](#experimental-technical-updates).

### Item display transforms

Added `shelf` as an `item_display_transforms` offset in geometry JSON. It controls item positioning inside a Shelf block. For content authored before 1.26.40, a `fixed` transform is copied to `shelf`. Starting with 1.26.40, creators can define `fixed` for Item Frames and `shelf` for Shelf blocks independently.

### Voxel-shape culling

Vanilla blocks with definitions in the `shapes` folder now use voxel-shape culling without requiring the **Voxel Shapes** experiment. Custom blocks that use voxel shapes can therefore cull against any Vanilla block that has a voxel shape.

### Fence and stair states

Vanilla fences now expose connection states that creators can inspect:

- `minecraft:connection_north`
- `minecraft:connection_east`
- `minecraft:connection_south`
- `minecraft:connection_west`

In 1.26.40 and later worlds, fence connection changes send server-side block updates to adjacent blocks. Existing worlds retain the previous behavior.

Vanilla stairs now expose `minecraft:corner`, with the values `none`, `inner_left`, `inner_right`, `outer_left`, and `outer_right`. In worlds with a base game version of 1.26.40 or later, stair corner changes trigger neighboring block updates. Existing worlds retain client-only updates.

### Block fixes

- Fixed custom blocks with `minecraft:tick` ticking more often than expected when placed from a structure containing saved tick data.
- Improved brightness sampling consistency between custom and Vanilla blocks.
- Jigsaw block replacement now writes a content log message when it encounters an invalid `final_state`.

## Crafting

The `addition` field in `minecraft:recipe_smithing_transform` now accepts items tagged with `minecraft:transform_materials`.

Vanilla furnace recipes now define explicit `priority` values. Creators can use recipe priorities to determine which recipe is selected when multiple furnace recipes match the same input.

## Items

Item definitions using `format_version` 1.26.30 or later must contain at least one entry in `minecraft:item.components`. Definitions with an empty components object now fail to register and produce a content error instead of falling back to legacy item parsing.

Custom resource-pack item definitions now reliably override Vanilla definitions in the following cases:

- A custom definition using an older `format_version` overrides a Vanilla item using `format_version` 1.16 or later.
- A custom definition using a flattened identifier, such as `minecraft:enchanted_golden_apple`, overrides a Vanilla definition that uses its legacy identifier.

The `minecraft:shooter` component can now shoot when no ammunition is defined.

## Features and content validation

The content log now reports an error when multiple feature definitions in the same behavior pack use the same identifier.

Generated Minecraft JSON Schema files now use a more granular layout instead of generating one self-contained schema for every registered type. This reduces duplicated schema content for external tools. Generated SharedTypes schemas also include binary-protocol metadata such as ordinal index, control value type, underlying type, and serialization options.

## Graphical and resource packs

- Fixed component-rendered custom blocks not displaying emissive and MER effects when held, dropped, or displayed in Item Frames or Shelves with Vibrant Visuals enabled.
- Fixed corrupted actor visuals when Vibrant Visuals was used with PBR resource packs containing actor height maps.
- Fixed high-resolution resource-pack textures appearing blurred when Texture Streaming was enabled.
- Fixed custom dimension fog color not matching time-of-day brightness.
- Fixed custom blocks rendering a solid face through textures when a model face used a UV size of zero.
- Fixed texture bleeding on custom blocks that used automatic block-face UV assignment with undersized textures.
- Particles can now use textures from the `font` folder without producing an incorrect content log error.
- Small geometry using `item_display_transforms` > `gui` > `fit_to_frame: false` is centered correctly for `format_version` 1.21.130 and later.

## Commands

- Non-operator players can use player names as command targets where permitted, such as with `/tell`.
- Non-operator players can expand self selectors where permitted.
- `/clone` no longer clones partial beds. Both parts must be inside the clone volume.
- `/fill` now supports blocks that use `minecraft:multi_block`.

## Dedicated Server

- Fixed `content-log-file-enabled=true` not creating a content log file.
- Added command-line options that run Bedrock Dedicated Server in pack optimization mode. Creators can use this mode to optimize packs for testing and distribution inside or outside Marketplace.
- Fixed some player connection issues by allowing game servers to attempt self-repair.
- Added an NBT nesting limit of 512 entries for list and compound tags. This prevents crashes caused by excessively nested NBT data.

## Scripting API

### Released `@minecraft/server` v2.9.0

This release ships `@minecraft/server` v2.9.0 with the following promotions from beta to stable:

- `Block.getParts`
- `BiomeSearchOptions`
- `Dimension.calculateClosestBiomeFromSeed`, renamed from `Dimension.findClosestBiome`
- `PlayerStartBreakingBlockAfterEvent` and `PlayerStartBreakingBlockAfterEventSignal`
- `PlayerCancelBreakingBlockAfterEvent` and `PlayerCancelBreakingBlockAfterEventSignal`
- `PlayerBreakingBlockEventOptions`
- `LootItem.conditions`
- `SoundInstance.stop`

`SoundInstance` is also available in `@minecraft/server` v1.2.0. `Player.playSound` returns a `SoundInstance` in v1.2.0, and `Dimension.playSound` returns one in v1.11.0.

The following API changes and fixes are also included:

- Added `EffectTypes.getAll()` to return all registered effect types. It can't be called in restricted-execution mode.
- Moved `Player.nameplateDepthTested` and `Player.nameplateRenderDistance` from beta to v2.8.0.
- Fixed `Dimension.fillBlocks` when called with a block filter.
- Improved `Dimension.fillBlocks` performance when using a `BlockVolume`.
- Fixed `LootItem` returning incorrect `Name` values for custom items and blocks.
- Fixed hopper minecarts not firing `EntityItemPickupAfterEvent` and `EntityItemPickupBeforeEvent` for items above the cart.
- Fixed invulnerability timer bypass when a before-hurt event reduced damage below the source amount.

## Editor

### Custom Mesh Tool

- Added support for glTF and GLB files.
- Added a **Scale By** axis selector and a **Change Mesh** button.
- Imported meshes remain loaded after placement or cancellation, allowing repeated placement without reimporting the file.

### Biomes and dimensions

- Added real-time chunk synchronization to the Biome Data Assignment Tool.
- Fixed allowed biome tags being combined with logical AND. A biome now qualifies when it has any allowed tag.
- The Dimensions Tool returns players to their last-known location in a dimension, or to the origin on their first visit.
- World locations are stored per dimension and shared across clients.
- The dimension menu now marks the player's current dimension.

### Vibrant Visuals

- The resource-pack generation button now exports edited Vibrant Visuals configurations and provides a link to the generated folder.
- Fixed timeline scrubbing not previewing Vibrant Visuals color and value keyframes across the day/night cycle.
- Fixed sliders remaining interactive when their associated **Enabled** option was turned off.

### Cinematic and timeline tools

- Added a timeline player component with a scrubbable timeline and playback controls for time-based previews.
- Added a Timeline panel to the Cinematic Tool for editing camera-path keyframes.
- Renamed **Control Points** to **Keyframes** in the Cinematic Tool.
- Added a timeline drag handle for changing cinematic duration.

### Transactions

Transaction processing has been updated to support long-running Editor operations:

- `TransactionManager.undo` and `TransactionManager.redo` are now processed over time.
- Transaction recording and management moved from `TransactionManager` to `PendingTransaction`.
- Create transactions with `TransactionManager.createPendingTransaction`, then finalize staged changes with `PendingTransaction.submit` or `PendingTransaction.discard`.
- Added pending transaction support to `ClipboardItem.writeToWorld` and Brush Shape Manager APIs.

Creators with Editor scripts that use the previous transaction handlers should migrate to `PendingTransaction`.

### Other Editor improvements

- Added Structures to the **View** menu, Keyboard Settings to the **File** menu, and Biome Data Assignment to the **World** menu.
- Added the Dimensions Panel to the Dimensions submenu.
- Added pagination and selector menus for tabs. The mouse wheel can move between pages on the tool rail, action bar, and floating-window tabs.
- Added scrolling for menu bars and context menus that exceed the available window size.
- Added a bounding-box highlight to the selected block in Block Inspector.
- Added Pale Oak, Dark Oak, Nether Brick, and Mangrove fence options to the Farm Generator.
- Copying a double chest with Paste Preview or the Structure Tool now preserves it as one double chest.
- Updating a structure from the clipboard now requires confirmation before overwriting it.

## Experimental Technical Updates

The features in this section are experimental or beta and might change in future releases.

### Drop 3 experimental features

This release adds experimental world-generation content, blocks, and items that creators can use when testing worlds and packs:

- **Dappled Forest** — a new forest biome that generates near cold biomes. It includes Poplar trees, fallen Poplar trees, Shelf Mushrooms, Red Shrubs, Leaf Litter, and biome-specific ambient sounds.
- **Abandoned Camp** — a new structure with variants designed for the biome where it generates. Camps can contain Chests, Barrels, Straw Beds, and biome-specific structure pieces, and they use procedural trees.
- **Poplar wood set** — Poplar trees have Red, Orange, and Yellow leaf variants, matching falling-leaf particles, Poplar Saplings, and a new family of Poplar wood blocks.
- **Red Shrub and Shelf Mushroom** — new decorative plants for the Dappled Forest. Shelf Mushrooms have small and large forms and can be grown with Bone Meal.
- **Wool Stairs and Wool Slabs** — new stair and slab blocks in all 16 wool colors.
- **Cushions** — placeable, sittable items in 16 colors. Cushions align to the placement grid, require a supporting surface, and have no collision.
- **Straw Beds** — single-use beds crafted from Hay Bales. They skip the night without setting a player's spawn point.

> [!NOTE]
> Cushions don't currently generate in Abandoned Camps, but are available in the Creative inventory while the experiment is enabled.

### Add-On upgrader

The experimental JSON document upgrader now reports configuration parsing failures and upgrade-aborting errors in its error log. Files outside a pack are ignored instead of causing the upgrade to fail.

### Beta `@minecraft/server` v2.10.0

Added `@minecraft/server` v2.10.0-beta. Key additions include:

- `EntityStartSneakingAfterEvent` and `EntityStopSneakingAfterEvent`, with their signal classes.
- `EntityTamedBeforeEvent`, `EntityTamedAfterEvent`, their signal classes, `EntityTamedEventFilter`, `WorldBeforeEvents.entityTamed`, and `WorldAfterEvents.entityTamed`.
- `Camera.addShake`, `Camera.stopShaking`, `CameraShakeOptions`, and `CameraShakeType`.
- `Dimension.cloneBlocks`, with `CloneMode` values `Copy`, `ForceCopy`, and `Move`.
- `BlockVolumeBase.getClosest` and `BlockVolumeBase.getFarthest`.
- `BlockQueryOptions` for `Dimension.getBlocks`, including closest, farthest, and location options.
- `CompoundBlockVolume` and its supporting action and position-relativity enums.
- `PrimitiveShapesManager.getShapes` and `PrimitiveShapeQueryOptions`.
- `Player.getSplitScreenSlot`. The `playfabId` property on `Player` was renamed to `persistentId`.
- `SystemBeforeEvents.watchdogTerminate` and the related event, signal, and reason types.
- `TextPrimitive.lineGapHeight`.

### Beta sound APIs

The beta APIs provide additional control over tracked sounds:

- Added `SoundInstance.setVolume`, `setPitch`, `fade`, and `seekTo`.
- Added `loopCount` to `PlayerSoundOptions` and `WorldSoundOptions`. A value of `-1` loops indefinitely while a reference to the `SoundInstance` is retained.
- Added `soundEventId`, `recipient`, `durationInfo`, and `id` to `SoundInstance`.
- Added `SoundDurationInfo` and playback-position tracking. Playback position respects calls to `seekTo`, `pause`, and `resume`.
- Added `WorldAfterEvents.soundCompleted`, which identifies the completed sound by its `SoundInstance.id`.
- Added `SoundDefinition`, `SoundDefinitionDurationInfo`, `SoundDefinitionFilter`, and `SoundDefinitionRegistry`.
- Added `World.soundDefinitionRegistry`. `Player.playSound` can accept a `SoundDefinition` instead of a string identifier.

Behavior packs can declare server-side sounds in `sounds/sound_definitions.json` with the experimental `minecraft:server_sound_definitions` payload. Definitions can provide duration tracking, music metadata, and custom tags that scripts can query and filter.

### Beta `@minecraft/server-ui` v2.2.0

`@minecraft/server-ui` v2.2.0-beta has a peer dependency on `@minecraft/server` v2.10.0-beta and includes the following additions:

- Added `CustomForm.image` for displaying an image in a custom form.
- Added `ImageOptions.onClick` and `ImageOptions.tooltip`.
- Added `MessageBox.button1WithOptions` and `MessageBox.button2WithOptions` for button images and tooltips.
- Fixed custom-form images not being centered.
- Fixed `ModalFormData` and `MessageFormData` not being shown directly after a `CustomForm` or `MessageBox`.

### Beta server administration

The beta `@minecraft/server-admin` module adds the following allow-list APIs:

- `AllowList.clear`
- `AllowList.entries`
- `AllowListEntry`, with optional `name` and `xuid` properties
- `AllowList.add`, `remove`, and `contains` now accept a `Player` or `AllowListEntry` instead of a string
- `AsyncPlayerJoinBeforeEvent.splitScreenSlot`

### Block dynamic properties and loot

Added the experimental `carry_over_block_entity_data` loot function. When `dynamic_properties` is `true`, dynamic properties on a block entity are copied to the resulting item stack. This functionality requires the **Upcoming Creator Features** experiment.

The related beta APIs include `CarryOverBlockEntityDataFunction` and `ItemBlockDynamicPropertiesComponent`, which provides `get`, `set`, and `totalByteCount` functionality.

Block dynamic-property storage also has the following experimental changes:

- Each pack receives its own 1 KB block dynamic-property limit instead of sharing a global limit.
- Properties are grouped by manifest UUID instead of module UUID.
- Block-entity properties use readable NBT serialization.

> [!CAUTION]
> The storage format changed. Existing saved block dynamic properties are lost when moving to this experimental implementation.

### Experimental multi-block directions

Added `y_rotation_offset` support to the `minecraft:sixteen_way_rotation` placement-direction trait.

The `minecraft:multi_block` trait supports the experimental horizontal directions `north`, `south`, `east`, and `west` when **Upcoming Creator Features** is enabled. Horizontal multi-blocks that cross into an unloaded chunk delay placement until both chunks load, and pending placements are saved to level storage.

Blocks using `minecraft:multi_block` have the following restrictions:

- They can't also define `minecraft:connection`, `minecraft:placement_position`, or `minecraft:block_entity`.
- If `minecraft:placement_direction` is present, only `minecraft:cardinal_direction` can be enabled.
- Their `minecraft:geometry` component can't define `n_way_visual_rotation`.

### Experimental block sound component

Added `minecraft:sound` for assigning sounds to a custom block and its permutations. It requires `format_version` 1.26.20 or later and the **Upcoming Creator Features** experiment. Values in `blocks.json` override values supplied by this component, including values in permutations.

The beta scripting API for `minecraft:instrument_sound` provides methods to get and play the instrument assigned to a block face. The component can be retrieved from custom and Vanilla blocks; blocks without an explicit component return the default sounds.

### Voxel Shapes

With the **Voxel Shapes** experiment enabled, custom blocks can cull hidden faces against new occlusion shapes for one-arm through four-arm wall connections and full wall connections.

### RenderDragon Features for Creators

The **Point Light Shadow Quality** setting has been merged into **Point Light Quality**. These settings are available only when the **RenderDragon Features for Creators** experiment is enabled for Vibrant Visuals.
