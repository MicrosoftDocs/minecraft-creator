---
author: jacksonhardaway
ms.author: micahm
title: 1.26.50 Update Notes
description: Update summary of Creator changes in Bedrock 1.26.50
ai-usage: ai-assisted
ms.topic: release-notes
ms.service: minecraft-bedrock-edition
ms.date: 10/05/2026
---

# Minecraft Bedrock 1.26.50 Update Notes for Creators

Minecraft Bedrock has been updated to 1.26.50. This release ships the now-officially-stable Wilderness Bound game drop content, tightens entity JSON validation at `format_version` 1.26.50 and later, and releases horizontal multi-blocks, the `minecraft:sound` block component, and custom dimension JSON from experimental. 

New entity components include:
 - Powder Snow freezing 
 - Projectile-hit teleportation
 - Movement-slowdown immunity
 
Additionally, vanilla fences, stairs, Chorus Plants, Fire, thin fences, and trip wire now expose connection and corner block states. 

Scripting ships `@minecraft/server` v2.10.0 and `@minecraft/server-ui` v2.2.0 as stable, promotes `@minecraft/server-graphics` to v1.0.0, and adds beta releases of `@minecraft/server` v2.11.0, `@minecraft/server-ui` v2.3.0, and `@minecraft/server-admin`. Editor gains color-aware Custom Mesh placement, a reworked Cinematic timeline, and a new transaction-handler API. 

NetherNet is now the default transport used by dedicated servers, and the `serveridentity` command has been added. Experimental work includes the new **Creator World Clocks Features** experiment, point-of-interest definitions, block-entity containers, beta world-clock, diagnostics, and sound APIs.

The following features do not require experimental toggles unless otherwise specified. Experimental and beta items are grouped under the [Experimental Technical Updates](#experimental-technical-updates) section at the bottom of this document.

## Wilderness Bound content

The Wilderness Bound game drop content is now enabled by default. Creators can reference the following newly released blocks, biomes, and structures without an experimental toggle:

- **Dappled Forest** — a forest biome that generates near cold biomes, with Poplar trees, fallen Poplar trees, Red Shrubs, Shelf Mushrooms, and Leaf Litter.
- **Poplar wood set** — Poplar trees with Red, Orange, and Yellow leaf variants, matching falling-leaf particles, Poplar Saplings, and a family of Poplar wood blocks.
- **Abandoned Camp** — a structure with biome-specific variants that generates across many Overworld biomes and contains Chests, Barrels, Straw Beds, and Cushions.
- **Red Shrub and Shelf Mushroom** — decorative plants for the Dappled Forest. Shelf Mushrooms have small and large forms.
- **Wool Stairs/Wool Slabs** and **Concrete Stairs/Concrete Slabs** — new stair and slab blocks in all 16 colors.
- **Cushions** — placeable, sittable blocks in 16 colors that align to the placement grid and have no collision.
- **Straw Beds** — single-use beds crafted from hay bales that skip the night without setting a player's spawn point.

## Entity JSON validation

Entity definitions that use `format_version` 1.26.50 or later now fail to load when invalid data is supplied to several components, AI goals, and the `minecraft:projectile` schema. Validate affected content before increasing its format version.

The following actor components now use stricter schemas:

- `minecraft:anger_level`
- `minecraft:barter`

The following AI components now use stricter schemas:

- `minecraft:boss`
- `minecraft:collision_box`
- `minecraft:damage_over_time`
- `minecraft:exhaustion_values`
- `minecraft:flocking`
- `minecraft:game_event_movement_tracking`
- `minecraft:grows_crop`
- `minecraft:home`
- `minecraft:trade_table`
- `minecraft:physics`
- `minecraft:tamemount`
- `minecraft:preferred_path`

The following fields have specific migration requirements for `format_version` 1.26.50 and later:

- `minecraft:interact` accepts arrays only for the `interactions`, `spawn_entities`, and `play_sounds` fields.
- `minecraft:projectile` no longer accepts alternate field names. Additionally:
  - `first_spawn_chance` and `second_spawn_chance` under `spawn_chance` now take floats in the range `0.0` to `1.0`.
  - `anchor` now takes the string values `origin`, `eye_height`, and `middle` instead of integers.
  - `damage` under `impact_damage` now takes an object with `min` and `max` fields.
  - `effects` under `mob_effects` now takes an array of mob instances.

The following AI goals have changes and stricter schemas:

- `minecraft:behavior.ranged_attack` adds `in_range_movement_mode` for `format_version` 1.26.50 and later. Accepted values are `hold_position`, which holds the entity's position while within attack range, and `follow_target`, which continues moving toward the target while within attack range. For 1.26.50 and later, `attack_range` now takes a float range and replaces `attack_radius_min` and `attack_radius`.
- `minecraft:behavior.follow_mob` now uses a stricter schema and interrupts the mob's navigation whenever the goal stops or is removed through a component group change.

## Entity components

### Powder Snow freezing

Powder Snow freeze immunity and vulnerability are no longer hardcoded at runtime and are now defined by components.

- `minecraft:freezing_immune` marks an entity as immune to freezing from Powder Snow. Declare it as `"minecraft:freezing_immune": {}`. The Creaking, Ender Dragon, Polar Bear, Skeleton, Snow Golem, Stray, and Wither are upgraded to include it automatically, and all non-mob entities are implicitly immune.
- `minecraft:freezing_vulnerable` marks an entity as vulnerable to freezing damage. The Blaze, Magma Cube, and Strider are upgraded to include it automatically.

Added the `minecraft:can_stand_on_powder_snow` component for entity definitions with a `format_version` of 1.26.50 or later. Entities with this component can stand on top of Powder Snow.

- The `lightweight` type family no longer grants this behavior to definitions using `format_version` 1.26.50 or later.
- Definitions using an older format version that include the `lightweight` type family are upgraded to include this component.
- The vanilla Endermite, Fox, Rabbit, and Silverfish definitions no longer include the `lightweight` type family.

### Projectile-hit teleportation

Added projectile-hit teleportation fields to the `minecraft:teleport` component:

- `teleports_on_projectile_hit` determines whether the entity attempts to teleport away from an incoming projectile. It defaults to `false`.
- `projectile_filter` defines the conditions an incoming projectile must meet to trigger a teleport attempt.

All vanilla projectile entities now include the `projectile` type family plus a type-specific family, such as `arrow`, `snowball`, or `wither_skull`.

### Projectile schema changes

The `minecraft:projectile` component has the following changes:

- `multiple_targets` now defaults to `false` for `format_version` 1.26.50 and later, and remains `true` for earlier versions.
- `isolated_physics` now defaults to `true` for `format_version` 1.26.30 and later, and `false` for earlier versions. Vanilla projectile entities now explicitly set `isolated_physics` to `false`. A content error is emitted when `isolated_physics` is set to `true` on an entity using a vanilla projectile `runtime_identifier`, such as `minecraft:arrow`, because it isn't intended for use with vanilla projectiles.

The `owner_launch_immunity_ticks` field on `minecraft:projectile_component` is deprecated in favor of a spatial check. Projectiles can now only hit the entity that shot them, or entities in the same vehicle hierarchy such as the shooter's mount, after they have spatially left that hierarchy.

### Movement and despawn components

- Added `minecraft:block_movement_slowdown_immunity`. When set, the entity is immune to movement slowdown from blocks such as Cobwebs.
- `minecraft:instant_despawn` now uses a stricter schema for `format_version` 1.26.50 and later.
- `minecraft:insomnia` now uses a stricter schema for `format_version` 1.26.50 and later.

### Ambient sounds

Entity ambient sounds are no longer redefined at runtime and now respect the conditions defined by `minecraft:ambient_sound_interval`. Previously, the ambient sound event name was overwritten when the entity's head was in water (`ambient.in.water`), when it was off the ground (`ambient.in.air`), or when it was a baby (`ambient.baby`), overriding any user-defined entry in `event_names`.

- Entities defined in an older version fall back to the original overriding behavior through an automatically added `minecraft:uses_legacy_ambient_sounds` component.
- `minecraft:uses_legacy_ambient_sounds` is deprecated. Specify the intended behavior in `minecraft:ambient_sound_interval` instead.
- Vanilla mobs are upgraded to the new syntax. You can preserve the previous behavior with conditional `event_names` entries, for example:

```json
"minecraft:ambient_sound_interval": {
  "event_name": "ambient",
  "event_names": [
    { "condition": "query.head_is_in_water", "event_name": "ambient.in.water" },
    { "condition": "!query.is_on_ground", "event_name": "ambient.in.air" },
    { "condition": "query.is_baby", "event_name": "ambient.baby" }
  ],
  "range": 16.0,
  "value": 8.0
}
```

## Blocks

### Multi-blocks

- Horizontal multi-blocks are here. These are blocks defined with the `minecraft:multi_block` trait and a horizontal `direction` field. The **Upcoming Creator Features** experiment is still required when `format_version` is less than 1.26.50.
- Multi-block behavior from the `/fill` command is extended to the scripting fill APIs, such as `Dimension.fillBlocks`.
- Block-entity restrictions for multi-blocks are removed. Each part has its own block entity by design.

### Block entities

- The `minecraft:block_entity` component no longer requires an experimental toggle from `format_version` 1.26.20 onward.
- Replacing a custom block that has a `minecraft:block_entity` component with a different block definition now creates a new block entity, so the previous block's dynamic properties are no longer carried over. Changing only a block state keeps the same block entity and its dynamic properties.

### Connection and corner states

Vanilla fences now expose per-direction connection states (`minecraft:connection_north`, `minecraft:connection_east`, `minecraft:connection_south`, `minecraft:connection_west`). In worlds using version 1.26.50 and later, fence connection changes send block updates to neighboring blocks.

Vanilla glass panes, iron bars, copper bars, and trip wire now expose the same four cardinal connection states. For new worlds with a base game version of 1.26.50 and later, thin-fence and trip-wire connection-state changes trigger neighbor block updates for parity with Java Edition. Existing worlds keep the prior client-only update behavior.

Chorus Plant and Fire blocks now expose `minecraft:connection_north`, `minecraft:connection_east`, `minecraft:connection_south`, `minecraft:connection_west`, `minecraft:connection_up`, and `minecraft:connection_down`, reflecting their connected or supporting neighbors.

Vanilla stairs now expose `minecraft:corner`, with the values `none`, `inner_left`, `inner_right`, `outer_left`, and `outer_right`. For new worlds with a base game version of 1.26.40 and later, stair corner-state changes trigger neighbor block updates. Existing worlds keep client-only updates.

### Leaves and tags

- All vanilla leaves blocks now carry the `minecraft:leaves` tag. Vanilla tree features match leaves through `"tags": "query.any_tag('minecraft:leaves')"` in `may_replace` instead of listing each block by name, so a new leaves block no longer has to be added to every tree feature to be grown through.
- The `minecraft:is_shears_item_destructible` block tag now also grants the Shears breaking-speed bonus, matching the other `is_*_item_destructible` tags.

### Block sounds

The `minecraft:sound` block component has been released from experimental. It assigns a set of sounds to a block and its permutations, similar to the `sound` field in `blocks.json`, and requires `format_version` 1.26.20 or later. Values in `blocks.json` override the component's values, including values in permutations.

```json
{
  "format_version": "1.26.20",
  "minecraft:block": {
    "description": {
      "identifier": "test:test_block",
      "states": { "custom:int": [0, 1, 2] }
    },
    "permutations": [
      { "condition": "query.block_state('custom:int') == 1", "components": { "minecraft:sound": { "sound": "glass" } } },
      { "condition": "query.block_state('custom:int') == 2", "components": { "minecraft:sound": { "sound": "metal" } } }
    ],
    "components": { "minecraft:sound": { "sound": "snow" } }
  }
}
```

## Camera

Camera presets that inherit from `minecraft:follow_orbit` no longer reset the player's rotation the first time they're applied, for presets using `format_version` 1.26.50 or later.

## World generation features

- Added the `minecraft:conditional_list` feature, which places features based on a collection of conditions evaluated in order. The `conditional_features` field is an array of objects, each containing a `places_feature` reference and an optional Molang condition expression. The `early_out_scheme` field controls when evaluation stops: `condition_success` stops at the first condition that passes, `placement_success` stops at the first successful placement, and `none` (the default) evaluates all entries without stopping early.
- Added `minecraft:multipart_block_column_feature`, which places an ordered column made of one to four block types: `tip_block`, `frustum_block`, `middle_block`, and `base_block`. Its default growth `direction` is `UP`. The blocks used depend on the generated column height: one block uses `tip_block`; two use `frustum_block` and `tip_block`; three use `base_block`, `frustum_block`, and `tip_block`; and four or more use `base_block`, one or more `middle_block`, `frustum_block`, and `tip_block`. Use `may_place_on` to restrict valid placement surfaces and `may_replace` to restrict which existing blocks can be replaced.
- `snap_to_surface_feature` adds a `wall` value to its `surface` field, allowing a feature to snap to walls in addition to ceilings and floors. The new `allow_non_air_placement` field controls whether the snapped feature can snap through solid blocks when the snap starts inside a non-water, non-air block. The `vertical_search_range` field is renamed to `search_range`.

## Custom dimensions

- Added support for defining custom dimensions with JSON and configuring custom dimension heights.
- Added the `minecraft:default_biome` component to custom dimension JSON, which configures the biome a custom dimension generates with.
- The `minecraft:default_biome` component is now optional and supported only on custom dimensions. Using it on a vanilla dimension now produces a content error instead of being silently accepted.

## Molang

- Added `query.has_all_biome_tags`, a world-generation query that returns `1.0` if the biome at the current placement position has all of the specified tags.
- Added `query.has_any_biome_tags`, a world-generation query that returns `1.0` if the biome at the current placement position has at least one of the specified tags.
- Added `query.head_is_in_water`, which checks whether the entity's head is in water.

## Loot tables

Added the optional `operator` field to all loot table conditions, which controls whether the condition's result is used directly or negated:

- `==` and `equals` apply when the condition evaluates to `true`.
- `!=` and `not` apply when the condition evaluates to `false`.
- Omitting `operator` preserves the existing behavior and is equivalent to `==`.

For example, the following condition selects a loot entry only when the loot context is not in a biome with the `plains` tag:

```json
{ "condition": "biome_has_tag", "operator": "not", "tag": "plains" }
```

## Pack settings

Added a multiselect pack setting type, which lets pack authors declare a list of options. Molang can query active options through `query.is_pack_setting_selected`. In `@minecraft/server` beta, `world.getPackSettings()` can return an array of strings for multiselect options, and `PackSettingsChangeAfterEvent.settingValue` can be an array of strings.

## JSON Schema

The JSON document upgrader now differentiates base game JSON from creator JSON. Base game content can use the `minecraft:` namespace, while creator content continues to be validated against creator namespace rules.

## Structure files

Added version 2 of the structure (`.mcstructure`) file format:

- The `block_indices` arrays are now stored as NBT `IntArrayTag` values instead of a `ListTag` containing one `IntTag` per block, which significantly reduces the time and memory needed to save and load structures.
- The second `block_indices` array is now optional and is omitted when nothing is stored in the extra block layer, making those files about 50 percent smaller.
- Version 1 structures still load correctly and are upgraded to version 2 the next time they're saved.

## Sounds

Added `allow_concurrent_streaming` to sound objects in `sound_definitions.json`, which allows streamed ordinary sound events to play independent simultaneous instances. The field defaults to `true` in `format_version` 1.26.50 and later.

## Minecraft Debugger

The Entity System and CPU Profiler views are now usable without a behavior pack enabled.

## Graphical and resource packs

- Fixed `.texture_set.json` not being compatible with certain JSON tools.
- Fixed MERS not applying to assets in several vanilla content slices, including the 1.21.120 Copper Chest and dye items and the 1.26.20 Baby Bee and Baby Fox.
- Fixed texture bleeding on custom blocks that used automatic block-face UV assignment with undersized textures.
- Small geometry using `item_display_transforms` > `gui` > `fit_to_frame: false` is no longer force-centered in the slot, so blocks intended to rest at the bottom stay in place.
- Fixed `item_display_transforms` > `gui` > `translation` no longer affecting an item's position in the slot.
- Fixed `materials/entity.material` from resource packs sometimes having no effect.

## Scripting API

### Released `@minecraft/server` v2.10.0

This release ships `@minecraft/server` v2.10.0 as stable and adds `@minecraft/server` v2.11.0-beta, described in [Experimental Technical Updates](#experimental-technical-updates).

The following sound APIs moved from beta to v2.10.0:

- `SoundInstance` now exposes `id`, `soundEventId`, `recipient`, and `durationInfo` properties.
- Added `SoundDurationInfo`, with a `duration` property, an `isActive` property, and a `getPlaybackPosition()` method that returns the elapsed playback time in seconds.
- Added `World.soundDefinitionRegistry` and `SoundDefinitionRegistry`, whose `getDefinitions()` method returns the registered `SoundDefinition` entries and accepts an optional `SoundDefinitionFilter`.
- Added `SoundDefinition` (`soundEventId`, `durationInfo`, `musicInfo`, `tags`), `SoundDefinitionDurationInfo` (`duration`), `SoundDefinitionMusicInfo` (`genres`, `moods`, `artist`, `title`), and `SoundDefinitionFilter` (`minDuration`, `maxDuration`, `genres`, `moods`, `artists`, `titles`, `tags`).
- `Player.playSound` now accepts a `SoundDefinition` in addition to a sound event ID.
- `WorldAfterEvents.soundCompleted` fires when a tracked sound's declared duration elapses, identified by `soundInstanceId`.

The following event APIs moved from beta to v2.10.0:

- `EntityTamedAfterEvent`, `EntityTamedAfterEventSignal`, `EntityTamedBeforeEvent`, `EntityTamedBeforeEventSignal`, `EntityTamedEventOptions` (renamed from `EntityTamedEventFilter`), `WorldAfterEvents.entityTamed`, and `WorldBeforeEvents.entityTamed`.
- `EntityStartSneakingAfterEvent`, `EntityStartSneakingAfterEventSignal`, `EntityStopSneakingAfterEvent`, `EntityStopSneakingAfterEventSignal`, `EntitySneakingChangedEventOptions`, `WorldAfterEvents.entityStartSneaking`, and `WorldAfterEvents.entityStopSneaking`.

The following block, volume, and camera APIs moved from beta to v2.10.0:

- `Dimension.cloneBlocks` and the `CloneMode` enum, with values `Copy`, `ForceCopy`, and `Move`.
- `BlockQueryOptions`, now used by `Dimension.getBlocks`.
- `BlockVolumeBase.getClosest` and `BlockVolumeBase.getFarthest`.
- `Camera.addShake`, `Camera.stopShaking`, `CameraShakeOptions`, and `CameraShakeType`.
- `PrimitiveShapesManager.getShapes` and `PrimitiveShapeQueryOptions`.
- `BlockDynamicPropertiesComponent`, `ItemBlockDynamicPropertiesComponent`, and `BlockInstrumentComponent`.
- `Player.fogSettings`, `FogSettings`, and `FogSettingsError`.

The following API changes and fixes are also included:

- `EffectTypes.get()` and `EffectTypes.getAll()` can now be called from before events.
- `DimensionTypes.get` and `DimensionTypes.getAll` now return custom dimension types in addition to vanilla dimension types.
- `Entity.teleport` now throws an error when the entity has passengers and the target dimension differs from the entity's current dimension. Dismount passengers before teleporting to another dimension.
- Tamed pets no longer attempt to follow their owner when the owner travels to or from a custom dimension.
- Fixed the `scale` property on `DebugShape` when used with `DebugCone`, `DebugEllipsoid`, `DebugPyramid`, and `DebugCylinder`. The `rotation` property of `DebugShape` now applies to `DebugLine`, `DebugArrow`, `DebugCircle`, `DebugSphere`, and `DebugBox`.
- Fixed `Player.playSound` producing read-only errors when writing new properties to the player afterward, and fixed `Player.fogSettings` throwing when a player rejoins a server.

### Released `@minecraft/server-graphics` v1.0.0

`@minecraft/server-graphics` is promoted out of beta to v1.0.0, releasing the module and all of its APIs as stable. Version 1.0.0 requires `@minecraft/server` v2.3.0 or later.

### Released `@minecraft/server-ui` v2.2.0

This release ships `@minecraft/server-ui` v2.2.0 as stable with the following changes:

- Added `CustomForm.image` and `ImageOptions`.
- Added `fixedFormatDigits` to `SliderOptions`, so a slider display can format to a set number of decimal places.
- Fixed hiding a `CustomForm` and then immediately showing another form returning a `UserBusy` response. The second form is now swapped in correctly.

## Editor

### Custom Mesh Tool

- Added the Color Block List UI so creators can review detected mesh colors, replace suggested blocks, and delete color rows before color-aware placement.
- Added color-aware placement, which places imported colored meshes as matched block groups from the Color Block List.

### Transactions

- Added the `TransactionHandler` API for tracking transaction events. Transaction operation handlers are now created from this object.
- Added `PendingTransaction.addVolumeListOperation` and `VolumeListTransactionOperationHandler` for more performant volume transactions, and improved transaction handling for large selection volumes.
- `addUserDefinedOperation` methods now accept separate transaction payloads for the previous and new operation states.

Creators with Editor scripts that use the previous transaction handlers should migrate to the `TransactionHandler` API.

### Cinematic and timeline tools

- Reworked the Cinematic tool's keyframe list to use expandable sub panes instead of a list pane. Each keyframe owns an expander holding its name, timestamp, camera position, a collapsible rotation section, and easing type.
- Added a view-control footer that selects, duplicates, and deletes checked keyframes, redistributes timestamps, and copies or imports cinematic JSON.

### Paste Preview

Added a Move mode to the Paste Preview tool, which freezes the preview in place so it can be repositioned with a world gizmo or by typing exact coordinates.

### Property pane APIs

- Added `addHeader` to `ISubPanePropertyItem` to create a custom sub-pane header with an optional prebaked multiselect checkbox, an overflow menu, and a dynamic region of icon buttons and color pickers.
- Added `buildSubPaneViewControl` to `ISubPanePropertyItem` to sort, filter, and manage a list of header sub panes, and added a `tags` option to `ISubPanePropertyItemOptions` for filtering.
- Added an optional property to `IRootPropertyPane` to disable scrolling, and removed the Header Action API from `IRootPropertyPane`.
- Added a `Swatch` variant to `ColorPickerPropertyItemVariant` for color pickers that collapse to a single square.

### Other Editor improvements

- Added the ControlHelp feature, which shows the keyboard shortcuts available in any global or tool-specific context.
- Added missing keycodes to the `KeyboardKey` enum so they can be selected as shortcuts in Keyboard Settings.
- Enabled Editor Test World reloads with `/reload all` without a vanilla connection.
- Fixed the Flood tool continuing a previous operation when applied in an invalid location, and added feedback when a valid liquid level hasn't been set.
- Fixed Flowing Water and Flowing Lava displaying as "Water" and "Lava" in the Block Picker.
- Improved Primitives tool placement performance and increased the maximum allowed shape sizes.
- Added a Render Clouds setting to the Editor World View panel, and added user-friendly biome and block names to minimap hover tooltips.

## Dedicated Server

- NetherNet is now the default transport used by dedicated servers.
- Added the `serveridentity` command, which lets dedicated-server operators save, delete, and check the status of the server identity key.
- Added a dedicated server option to unpack optimized creator packs into loose files.
- Windows dedicated servers, including Education, now use the correct application data directory for Bedrock and Education.
- System packs are now sorted into alphanumeric order before being added to the stack. A system pack that fails to load its manifest, or fails to execute its script plugin, now stops the dedicated server.
- Added the `script-debugger-listen-address` server property. The script debugger listen mode now binds to loopback by default, and non-loopback listen addresses require a configured passcode.

## Experimental Technical Updates

The features in this section are experimental or beta and might change in future releases. Experimental features require their named experiment toggle to be enabled on the world.

### Creator World Clocks

Added the **Creator World Clocks Features** experiment, which introduces scriptable world clocks with time markers.

The `/time of` command modifies world clocks:

- `/time of <clock> add <time>` adds time to the clock and can't result in a negative time.
- `/time of <clock> set <time>` sets the clock to the specified time and can't be set to a negative time.
- `/time of <clock> set <timemarker> (next|previous|stay)` sets the clock to an occurrence of the time marker.
- `/time of <clock> pause` and `/time of <clock> resume` pause and resume the clock.
- `/time of <clock> query time` outputs the clock's current time.

The beta `@minecraft/server` world-clock APIs include:

- `WorldClock`, with `timeMarkers`, `addTimeMarker`, `removeTimeMarker`, `set`, `skipTo`, and `rewindTo`.
- `WorldClockRegistry`, with `registerClock` (available on `BeforeStartupEvent`) and an optional `registrationOptions` parameter, plus `World.getClock`.
- `TimeMarker`, `WorldClockRegistrationOptions`, and `TimeMarkerOptions`.
- World-clock events: `WorldClockOnTimeModifiedAfterEvent`, `WorldClockOnPausedAfterEvent`, `WorldClockOnResumedAfterEvent`, `WorldClockOnTimeMarkerAfterEvent`, and `WorldClockOnRestartBeforeEvent`, with their signal classes and the `WorldClockEventOptions` and `WorldClockTimeMarkerEventOptions` filters. The corresponding `WorldAfterEvents` and `WorldBeforeEvents` signals are `worldClockOnTimeModified`, `worldClockOnPaused`, `worldClockOnResumed`, `worldClockOnTimeMarker`, and `worldClockOnRestart`.
- Error classes for invalid registration and time-marker operations, including `WorldClockRegistrationError`, `WorldClockReloadNewWorldClockError`, `WorldClockInvalidRegistryError`, `WorldClockNotFoundError`, `WorldClockReloadTimeMarkerError`, `WorldClockAddTimeMarkerError`, `WorldClockRemoveMinecraftTimeMarkerError`, `WorldClockInvalidTimeMarkerError`, `WorldClockTimeMarkerNotFoundError`, and `WorldClockRewindError`.

### Points of interest

- Added experimental support for defining point-of-interest (POI) types and hierarchical tags in behavior packs.
- Added a beta `@minecraft/server` Script API for querying and managing registered points in the current dimension.
- Added `/locate poi` for locating registered points by type or tag.

### Custom dimension heights

With the experimental toggle enabled, custom dimension heights defined in a dimension JSON file can again span the full `-512` to `512` block range instead of being capped to the default Overworld heights of `-64` to `320`.

### Block-entity containers

- Added the `container` field to the `minecraft:block_entity` block component, which gives a custom block a container that holds up to 54 item stacks, persists with the world, drops its contents when the block is broken, and opens a container screen when the block is used.
- Replacing a custom block whose `minecraft:block_entity` declares a container with a different block definition rebuilds its block entity, so the outgoing block drops its container contents rather than handing them to the new block.
- Added scripting access to custom block inventories provided by `minecraft:block_entity` containers.
- Blocks defined with the `minecraft:multi_block` trait can't also define the `minecraft:random_offset` component when the multi-block `direction` field is horizontal.

### Beta `@minecraft/server` v2.11.0

Added `@minecraft/server` v2.11.0-beta. In addition to the world-clock and POI APIs above, it includes:

- `DiagnosticsManager`, `DiagnosticsTab`, `DiagnosticsView`, `DiagnosticsStat`, and `DiagnosticsError` for scripting against the VS Code debugger's live diagnostics.
- `TextPrimitive.lineHeightOverride` and `DebugText.lineHeightOverride`.
- An optional `directionMask` parameter on `BlockUtilityTasks.floodSearch` for restricting traversal directions.
- A modifiable `targets` property on `ChatSendBeforeEvent` to control which players receive a chat message.
- Read-only `tamedToPlayer` and `tamedToPlayerId` properties on `EntityIsTamedComponent`.
- `SoundDurationInfo` updates for looping sounds: the playback position restarts at the beginning of each iteration, and a looping sound's duration is complete only after all iterations have played.

### Beta `@minecraft/server-admin`

The beta `@minecraft/server-admin` allow-list APIs changed:

- `AllowList.add` now takes an `AllowListEntryNameInfo` and a boolean that allows the player to ignore player limits when joining.
- `AllowList.contains` and `AllowList.remove` now take an `AllowListEntryNameInfo`.
- Added the `ignoresPlayerLimit` property to `AllowListEntry` and added the `AllowListEntryNameInfo` type.

### Beta `@minecraft/server-ui` v2.3.0

Beta DDUI (`CustomForm` and `MessageBox`) additions include:

- Added a `tooltip` property to `DropdownOptions`, `SliderOptions`, `TextFieldOptions`, `TextOptions`, and `ToggleOptions`.
- Added `MessageBox.button1WithOptions` and `MessageBox.button2WithOptions`, the `MessageBoxButtonOptions` interface, and the `imageDetails` property with the `ImageDetails` interface for button images and tooltips.
- Button icons are now supported, and the close button in DDUI forms now plays a sound when clicked or closed with a key shortcut.
- Fixed DDUI forms not working in split screen, and fixed label and header wrapping for long text without spaces.

### Beta sound APIs

- The `minecraft:server_sound_definitions` payload in `sounds/sound_definitions.json` now accepts an optional `broadcast_range` field, which specifies an XZ range in blocks. When set, a broadcast play sound is delivered to players within this range of the sound.

### Scripting websockets

Scripting websockets now send a ping packet to the socket server every 45 seconds instead of every second.
