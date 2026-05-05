---
author: mikeam
ms.author: mikeam
title: 1.26.20 Update Notes
description: Update summary of Creator changes in Bedrock 1.26.20
ms.service: minecraft-bedrock-edition
ms.date: 05/05/2026
---

# Minecraft Bedrock 1.26.20 Update Notes for Creators

> [!VIDEO https://www.youtube.com/embed/2Oxgd25_z74]
*Video version of this article from the Minecraft Creator Channel*

Minecraft Bedrock has been updated to 1.26.20. This release brings the full rollout of the modern block JSON parser and tag definition format, a significant set of new entity components for fine-grained control over friction, spawn, and equipment changes, the release of `@minecraft/server` v2.7.0, and a wave of Editor improvements. The following features do not require experimental toggles unless otherwise specified.

### Tags Definition Change (Breaking)

There is a breaking change to how tags are defined. As of version 1.26.20, tags cannot freely live as top level entities in the components array. They must live inside the `minecraft:tags` component, which accepts an array of tags of the format:

```json
"minecraft:tags": ["minecraft:crop", "custom:custom_tag"]
```

- The values must have the format `<namespace>:<tag_name>`
- They no longer need to be prefixed with `tag:`


## Block Components

#### Chest Obstruction Released

Released the component `minecraft:chest_obstruction` from experimental for block format versions 1.26.20 or higher.

- `obstruction_rule` defines how a block above a chest affects its opening:
  - `"always"` — always obstructs
  - `"never"` — never obstructs
  - `"shape"` — uses the block's AABB to determine obstruction (default)

### Block Validation Changes

The block schema parsing update tested during 1.26.10 previews is now fully enabled. The custom block JSON API has the following changes that affect loading of block JSON with `format_version` 1.26.20 and up.

Namespace constraints have been tweaked but everything permitted before should still be valid. This affects identifiers used for blocks, states, and menu category groups.

#### Block Traits

- `placement_direction` trait, validation change: The rotation offset no longer accepts a 0.5 tolerance.
  - Input value must be a multiple of 90.0
  - The value must be in the range 0.0 to 360.0 inclusive
- `blocks_to_corner_with` now requires `minecraft:corner_and_cardinal_direction` to be one of the `enabled_states` for the `placement_direction` trait

#### Menu Category

- `menu_category`, validation change: An empty `group` value is not allowed. The `group` field can either exist with a non-empty value or not exist at all.
- `category` is now a required field, when using `menu_category`. This is strictly enforced now.

#### Components

- `minecraft:flower_pottable`, validation change: It is restricted outside of root components object.
- `minecraft:geometry`, validation change: The constraint on `culling_shape` identifier is strictly enforced.
  - When using the `minecraft` namespace, the only currently available culling shape identifiers are `minecraft:empty` or `minecraft:unit_cube`
  - When using no namespaces or a custom one, the names must start and end with an alpha-numeric character
- `minecraft:light_dampening` and `minecraft:light_emission`, validation change: They now strictly enforce the value to be between 0 and 15 inclusive.
- `minecraft:material_instances`, validation change: `ambient_occlusion` does not accept booleans as valid input. It must be a float between 0.0 - 10.0 inclusive. It defaults to 1.0 if not provided.

## Entity Components

### Friction Modifier Behavior Change

The behavior of the `minecraft:friction_modifier` component now matches its description. The higher its value, the more friction affects an entity:

- `0.0` means no friction
- `1.0` means regular friction
- `2.0` means double friction

The component now affects ground friction only, and no longer partially affects air or liquid drag. The component now properly works on players, and on other client-predicted entities.

The legacy incorrect behavior can be re-enabled by adding the `minecraft:uses_legacy_friction` component. This component is automatically added to all entities with a `format_version` lower than 1.26.20, to ensure their behavior stays unaltered.

### On Equipment Changed

Added the `minecraft:on_equipment_changed` component, which allows executing entity events when items are equipped or unequipped in specific equipment slots.

- Contains a `slots` field with a list of entries, each with:
  - `slot` — the equipment slot to monitor
  - `on_equip` — event to fire when a non-empty item is placed in the slot
  - `on_unequip` — event to fire when the slot is cleared
- When equipment changes, the first matching slot entry is used
- Does not apply to `minecraft:inventory` slots — use `minecraft:equippable` instead

### Spawn On Death

Added the `minecraft:spawn_on_death` component for spawning entities when an entity perishes.

- `entity_to_spawn` (optional) — what entity to spawn, defaults to the owning entity when not set
- `spawn_method` (optional) — `born`, `spawned`, or `summoned`, defaults to `spawned` when not set
- `spawn_amount` (optional) — how many entities to spawn, defaults to 1
- `inherit_parent_name` (optional) — if true, the entity inherits the name of the parent entity (defaults to true)
- `additional_spawn_range` (optional) — additional random range of entities to spawn (defaults to 0, 0)
- `filters` — entity filter for whether the spawn is triggered

### Knockback Resistance

The `minecraft:knockback_resistance` component now accepts negative values down to a minimum of `-2`, resulting in knockback being increased instead of being diminished.

### Damage Sensor

The `minecraft:damage_sensor` component's `deals_damage` field now supports an additional value: `"no_but_entity_effects_apply"`:

- Damage is not applied to the entity
- Knockback and enchantments are applied
- The attacker's weapon is used as normal
- The entity does not flash red


## Entity Filters

- Added `has_same_equipment_in_slot_as` entity filter

> [!NOTE]
> The previously added `has_equipment_block_tag` entity filter has been removed in this release. Block tags should not be used for item behavior decisions.

### Float Range Field Changes

The following Float Range fields now only accept an object with `min` and `max` values (other formats will fail to parse):

- `sound_interval` in `minecraft:behavior.admire_item`
- `valid_distance_to_target` and `landing_distance_from_target` in `minecraft:behavior.jump_around_target`
- `cooldown_range` in `minecraft:behavior.jump_to_block`
- `destination_position_range` in `minecraft:behavior.move_around_target`
- `hover_height` in `minecraft:behavior.random_hover`

### Pickup Items Triggers

Added `on_pickup_item_start` and `on_pickup_item_end` triggers to `minecraft:behavior.pickup_items`.

### Follow Target Leader

Refactored `minecraft:behavior.follow_target_captain` to `minecraft:behavior.follow_target_leader`. The following fields have been added:

- `always_look_for_leader` (default: false) — if true, the mob always searches for a valid leader to follow if none is found or the current leader is not valid anymore
- `leader_filters` (required) — the filters to use when determining if a mob is a suitable leader
- `search_cooldown` (default: 20) — number of ticks that must pass before a new search is initiated after a target is not found, lost, or becomes invalid

## Features

### Structure Template Feature Rotation

Added a boolean `rotate_around_center` field to the `minecraft:structure_template_feature` feature.

- When set to `true`, it rotates the structure around its center when placing it in the world
- Defaults to `false` if omitted

### Snap to Surface Feature

A new field `embed_in_surface` has been added to the schema of `snap_to_surface_feature`, which allows specifying whether the snapped feature should be embedded in the located surface. Defaults to `false`.

## Biomes

## World Generation

- You can now use `minecraft:feature_pool_element` in Jigsaw Structure Template Pools in order to place Features
- Features can now connect to a Jigsaw Block with any Target Name, rather than only `minecraft:bottom`
- Updated new features in structure pools to include data driven features

## Items

- Items that have their `item_lock` mode set to either `lock_in_inventory` or `lock_in_slot` can no longer be placed in shelf blocks
- Fixed pickblock overriding items in the hotbar with `item_lock`
- New 1.26.10 attachables now use a new `controller.render.armor.v2` render controller rather than using an updated `controller.render.armor`. This fixes some creator content's custom armor not rendering properly.
- Fixed furnace recipe categorization so custom items using `minecraft:block_placer` with `replace_block_item` are correctly treated as block recipes
- Added tags for the Sulfur Cube to use for physics determination and absorbing:
  - `minecraft:sulfur_cube_archetype_bouncy`
  - `minecraft:sulfur_cube_archetype_regular`
  - `minecraft:sulfur_cube_archetype_slow_flat`
  - `minecraft:sulfur_cube_archetype_fast_flat`
  - `minecraft:sulfur_cube_archetype_light`
  - `minecraft:sulfur_cube_archetype_fast_sliding`
  - `minecraft:sulfur_cube_archetype_slow_sliding`
  - `minecraft:sulfur_cube_archetype_sticky`
  - `minecraft:sulfur_cube_archetype_high_resistance`

## Components — Other

- Fixed an issue with mob projectile accuracy going negative on higher difficulty settings
- Descriptions for custom blocks with `minecraft:display_name` now return correct values

## Mobs

- Fixed a bug where the `summon_cap` for custom entities was ignored
- Fixed actor textures not loading properly when applying packs with older min engine version
- Fixed player friction not resetting for older content

## Commands

- Fixed an issue where players could still auto-jump after using the `/inputPermissions` command to disable jumping
- `/loot` failing no longer stops the rest of an `/execute` command from continuing

## Scripting API

### Released `@minecraft/server` v2.7.0

This release ships `@minecraft/server` v2.7.0 with the following promotions from beta to stable:

#### Entity APIs

- `Entity.addItem` moved from beta to v2.7.0
- `InvalidEntityComponentError` moved from beta to v2.7.0

#### Biome Type Promotions

Moving the following from beta to v2.7.0 in `@minecraft/server`:

- `BiomeTypes.getAll`
- `BiomeTypes.get`
- `BiomeType.hasTags`
- `BiomeType.getTags`

#### Localization Key Fix

Values returned by `localizationKey` on `Block`, `BlockPermutation`, and `BlockType` now correctly respect `minecraft:display_name` keys for custom blocks.

### Other Stable Additions

- Added `InvalidType` and `UnsupportedValue` to `InvalidArgumentErrorType` enum in `@minecraft/common` v1.3.0
- Added the pack name to Error content log lines for easier debugging
- Added `locale` property to `ClientSystemInfo` that provides the player's selected language (e.g., `en_US`, `fr_FR`, `ja_JP`)

## Audio

Fixed an issue where content packs that override entity sound events without defining variants could incorrectly clear the variant key from the base `sounds.json`, causing content warnings during loading.

## General

Upgraded particles, trading, and cameras JSON resources to Cereal slice 1.26.10 and re-serialized to align with the updated schema.

## Atmosphere and Water Configuration

- Added a new version of the atmospheric scattering config:
  - New format version is `1.26.20`
  - Fields `minecraft:atmosphere_settings` and `minecraft:atmosphere_settings/description` are now required

## Network Protocol

- Modified the binary format of `PlayerEnchantOptionsPacket`
- Packet `UpdateClientOptionsPacket` added bool `Filter Profanity Change`

## Editor

[Editor](./BedrockEditor/EditorOverview.md) continues to receive significant updates in this release. For the latest detailed release notes, see the [Editor GitHub Discussions](https://github.com/Mojang/minecraft-editor/discussions).

### Primitives Tool

- Added the Primitives tool to the Editor tool rail. See this [update discussion](https://github.com/Mojang/minecraft-editor/discussions/311) for a video preview of this tool.

### Terrain Tool

- Fixed a bug in Terrain Flatten mode where adjusting the brush height made the brush harder to use
- Ensured proper offsets are applied when switching flatten modes in the Terrain Tool
- Fixed an issue where Flatten Up was sampling too far into the ground

### Selection Tool

- Updated how incomplete 3-point select volumes are handled by the Selection Tool:
  - Switching between tools now clears the incomplete 3-point select volume
  - Deselect (Ctrl+D) correctly clears the incomplete 3-point select volume and no longer logs an error
  - Fill (Ctrl+F) correctly ignores the incomplete 3-point select volume and no longer logs an error
- Fixed an issue in 3-point selection mode where single-clicking to create a volume didn't finalize it
- Updated the outdated tooltip for the 2-point select checkbox in the Selection Tool

### Paste Preview

- Disabled left mouse button paste in Paste Preview when Keyboard-only cursor mode is active
- Changed default X and Z axis mirror keybindings for Paste Preview to use SHIFT + CTRL modifiers
- Fixed Paste Preview appearing at an unpredictable position when entering Keys Only cursor mode. The preview now appears at the block the player is looking at, or 32 blocks in front of the camera if no block is in view.
- Added Ignore Air Blocks toggle to Paste Preview, allowing air blocks in the clipboard to be excluded from the paste operation

### Ruler Tool

- Changed default axis lock keybinding for the Ruler tool to use SHIFT + CTRL modifiers

### Vibrant Visuals Pane

- The Local Lights and Shadow configurations in the Vibrant Visuals pane no longer have a non-functioning plus button and are disabled
- The Vibrant Visuals generate resource pack button now exports any edited configurations to a resource pack with a folder link provided

### Jigsaw

- Fixed Jigsaw Collection names allowing case-variant duplicates which caused file conflicts and potential data loss on case-insensitive file systems

### Layout Instance Editor

- Fixed label values for the 'Deselect' and 'Delete Instance' shortcuts for the layout instance editor
- Fixed tooltips for the mode selectors for the layout instance editor

### Editor APIs

- Added optional drag and drop support for `ICollectionTreePropertyItem` API entries
- Added `location` to `IRootPropertyPaneOptions` to display root panes over the viewport instead of within a drawer
- Added view control pane API support for `ICollectionTreePropertyItem`
- Implemented auto-save for structure detail setting and removed Save button and Save menu from structure detail pane
- Added unbound keybindings for core panels

### Other Editor Improvements

- Toast notifications are grouped when multiple errors are triggered rapidly
- Fixed a Vector3 Timeline bug to avoid time values beyond neighboring nodes' time bounds in the edit popup
- Fixed a bug where you can't undo/redo the operations of deselect and replace blocks from the manifest table in Marquee and Freehand mode
- Fixed a bug that caused the Test World panel to not open when the menu item was clicked
- Fixed an error that occurred when running the `/reload` command from the tool mode chat shortcut

## User Interface

- Furnace recipes will now unlock when you collect the corresponding material (this feature is available under "Experimental")
- Improved how scrollable screen content is displayed in Ore UI menu screens on devices with notches, rounded corners, or safe zones applied
- Fixed a bug where entering custom settings of a behavior pack screen disables the pack
- Fixed an issue causing the HUD to fail to load after disabling Screen Animations in-game

[Get started with Editor!](./BedrockEditor/EditorInstallation.md)

## Experimental Features

> [!NOTE]
> The following features require experimental toggles to be enabled.

### Custom Projectiles (Add-On)

Added the experimental toggle "Custom Projectiles" which enables improvements around custom projectiles in add-ons without the use of runtime identifiers:

- Adds the `isolated_physics` property to the `minecraft:projectile` component for easier trajectory control
- The `fire_at_target` goal now applies projectile offsets relative to entity rotation
- Custom projectiles can now:
  - Be reflected
  - Update their owner upon launch and reflection
  - No longer collide with their owner on launch
  - Apply their offsets on launch
  - Remain at their point of impact when using `stick_in_ground`

### Scripting API Beta (`@minecraft/server` v2.8.0-beta)

#### Debug and Primitive Shapes

- Added `maximumRenderDistance` property to `DebugShape` and `PrimitiveShape`. The default render distance used by `DebugShape` and `PrimitiveShape` is now your client's render distance, instead of infinity. To match the old behavior, set `maximumRenderDistance` to a very large number.

### `@minecraft/server-net` Error Type Renames

The following error types in `@minecraft/server-net` have been renamed in beta for consistency. Update your scripts accordingly:

- `HttpRequestBodyTooLargeError` → `RequestBodyTooLargeError`
- `HttpRequestNotAllowedError` → `UriNotAllowedError`
- `HttpsOnlyError` → `TLSOnlyError`
- `MalformedHttpRequestError` → `MalformedUriError`

The `@minecraft/server-net` configuration module permissions parameter `force_https` has been renamed to `force_tls`.

## Data-Driven UI (DDUI)

- Made close buttons client authoritative so that forms close more quickly
- Added `DataDrivenScreenClosedReason` to `@minecraft/server-ui` beta
- Replaced `MessageBoxResult.wasShown` with `MessageBoxResult.closeReason` (a `DataDrivenScreenClosedReason`)
- Changed return type of `CustomForm.show()` from `Promise<boolean>` to `Promise<DataDrivenScreenClosedReason>`
- Added `FormCloseError`, `PlayerLeftError`, and `ServerShutdownError` to `@minecraft/server-ui` beta for use with `CustomForm` and `MessageBox`

#### Custom Dimensions

Added the ability to register custom dimensions during the before startup event:

- Added method `DimensionRegistry.registerCustomDimension` to allow registrations of new custom dimensions in beta

See [this article](./scripting/custom-dimension-api-tutorial.md) for more on getting started with custom dimensions.

#### 3D World Text Primitives

Added new tech to support 3D world text objects and rendering to `@minecraft/server`:

- Added new beta `PrimitiveShapesManager` class used to add and remove text primitives to the world
- Added new beta `PrimitiveShape` base class used to represent 3D shape objects in the world
- Added new beta `TextPrimitive` class used to render 3D text shape objects in the world
- Added new beta `primitiveShapesManager` property to `World`
- Maximum number of `PrimitiveShape` objects is now 1000
- Maximum length of the `text` parameter on `setText` for `TextPrimitive` is 128 lines and 128 characters per line
- Min and max scale value of `PrimitiveShape` objects is now `-1000` and `1000` respectively
- Added `backfaceVisible` and `textBackfaceVisible` properties to `TextPrimitive`

#### Container Access Events

- Added `EntityContainerOpenedAfterEvent` / `EntityContainerClosedAfterEvent` and their signals
- Added `BlockContainerOpenedAfterEvent` / `BlockContainerClosedAfterEvent` and their signals
- Added `ContainerAccessSource` and `ContainerAccessSourceFilter` interfaces
- Added `EntityContainerAccessEventOptions` and `BlockContainerAccessEventOptions` interfaces

#### Player Chat Display

- Added `Player.chatNamePrefix` to beta — an optional string prepended to the player's name in chat messages
- Added `Player.chatNameSuffix` to beta — an optional string appended to the player's name in chat messages
- Added `Player.chatDisplayName` to beta — a read-only property returning the composed chat name (`chatNamePrefix` + `name` + `chatNameSuffix`)
- Added `Player.chatMessagePrefix` to beta — an optional string prepended to the text of the player's chat messages, useful for applying color/formatting codes

#### Party Info

Added beta read-only property `partyInfo` to `Player` that returns a `PartyInfo` object (`{ partyId: string, isLeader: boolean }`) or `undefined` if the player is not in a party.

#### Block Component Events

- Added `BlockComponentBlockStateChangeEvent` to beta. Custom Block components can subscribe to `onBlockStateChange`.
- Added beta boolean property `firstUpdate` to `BlockComponentRedstoneUpdateEvent`

#### EnderChest Inventory

Added `EntityEnderInventoryComponent` for accessing a player's EnderChest container contents to beta.

#### Heal Cause: Totem of Undying

- Added `EntityHealCause.TotemOfUndying` to beta
- Added `minecraft:totem_of_undying` support to entity heal before/after events

#### Spawn XP

Added `Dimension.spawnXp` method to spawn experience orbs at a specified location in `@minecraft/server`.

#### Nameplate Properties

- Added Script Entity property `nameplateDepthTested` to beta
- Added Script Entity property `nameplateRenderDistance` to beta

#### Server Admin (`@minecraft/server-admin` beta)

- Added `kickPlayer()` to the `@minecraft/server-admin` module in beta
- Added `opPlayer` and `deopPlayer` functions in beta
- Added `allowCheats` boolean property to the `World` class in beta
- Added `reloadScriptingConfig()`, `reloadPermissions()`, and `reloadCDNConfig()` to `DedicatedServerUtils`

#### WebSocket Clients

Added WebSocket clients to `@minecraft/server-net` in beta:

- `WebSocket` class is used to create and connect websocket clients (created as the global `websocket` object in `@minecraft/server-net`)
- `WebSocketClient` class is used to interact with the websocket and receive data from the server through events

#### Other Beta Additions

- Added `Observable.toJSON` to `@minecraft/server` beta so that observables can be easily stringified with `JSON.stringify`
- Added `StructureManager.getPackStructureIds` to beta
- Added `CustomTexture` type to beta. The `textureBoundsList` in the `WaypointTextureSelector` now has the option of passing in a `CustomTexture` with a specified path, height, and width.
- Adjusted GameTest to no longer run callbacks from methods such as `succeedWhen` and `failIf` after the test has already completed
- Fixed a bug where in-flight HTTP requests could freeze the game when the HTTP client is destroyed in scripting

#### Debug Utilities

- Changed `color` property of `DebugShape` (in `@minecraft/debug-utilities`) from RGB to RGBA
- Added `depthTest` property to `DebugText`
- Added `backgroundColorOverride` property to `DebugText`
- Added `useRotation` property to `DebugText`
- Added `backfaceVisible` and `textBackfaceVisible` properties to `DebugText`
- Added localization support to `DebugText`:
  - The `DebugText` constructor now allows using either `RawMessage` or `string` for the text parameter
  - `DebugText.text` changed to be a read-only property
  - `DebugText.setText` method added which allows using either `RawMessage` or `string`
  - `DebugText.rawText` read-only property added to get the text if `RawMessage` is used via `setText`
- Fixed a bug when `attachedTo` on a `ShapePrimitive` or `DebugShape` wouldn't update if the attached entity was unloaded and reloaded
- Added `maximumRenderDistance` to `DebugShape` in `@minecraft/debug-utilities`

### Data-Driven UI (Experimental)

- Added support for localization for dropdown items:
  - `DropdownItem.description` and `DropdownItem.label` now accept `UIRawMessage | string`
- Added multiline text support for `MessageBox.body`, `CustomForm.label`, and `CustomForm.header` using `\n`
- Added method `Observable.getFilteredText` (only available for strings) which gets filtered data from an `Observable`
- Added enum `TextFilteringError` representing errors that can occur during text filtering
- Fixed an issue where text input areas were covered by the virtual keyboard at some platforms like Android
- Fixed an issue where showing forms (`CustomForm` or `MessageBox`) back to back resulted in the second form not showing
- Fixed buttons getting clipped when in a focused state
- Fix for players getting stuck when DDUI screen is open and server crashes

### Blocks (Experimental)

#### Snow Logging

Added `snow_log_no_collision` behavior to `precipitation_behavior` in the `minecraft:precipitation_interactions` component. This behavior allows creators to specify whether snow should cover their custom block.

Added a scripting method that allows creators to check the snow logging behavior of a block.

#### Multi-Block Trait Fixes

- Fixed `minecraft:multi_block` trait not loading properly with the modern block definition loader
- Fixed `minecraft:replaceable` to work with all parts of a multi-block. The component can no longer be defined in the permutations array — only allowed in the base components object.
- Fixed selection outline for multi-blocks using `minecraft:random_offset`. For multi-blocks, `minecraft:random_offset` can no longer be defined in the permutations array, only in the base components object.
- Fixed `minecraft:placement_filter` not working for blocks with the `minecraft:multi_block` trait
- Multi-blocks that don't have a `minecraft:selection_box` component will now default to a full block outline shape for each part

### Entities (Upcoming Creator Features)

#### Entity Versioning

Added a new `entity_version` description field to entity behavior definitions that enables per-entity versioning and upgrade handling.

- The `entity_version` field is a JSON object containing an `upgrades` array, where each entry specifies an integer `upgrade_to` version and a `name` string referencing an upgrade handler defined in a new top-level `upgrades` section of the entity definition
- Upgrade versions must start at 1 and be contiguous (e.g., 1, 2, 3) — gaps or duplicates are rejected with a content error
- Version 0 is reserved for entities that have no version set ("versionless"), which is the default for all existing entities
- When an entity is loaded with a version older than the current definition version, all upgrade handlers between the entity's saved version and the current version are executed sequentially
- Newly spawned entities are set directly to the latest version without running any upgrade handlers
- Upgrade handlers reuse the existing event system but are defined in a separate `upgrades` section, keeping them distinct from regular events
- The entity's version is persisted and loaded/saved automatically

This feature is gated behind the **Upcoming Creator Features** experiment toggle.

### Entity Components (Experimental)

### Uses Uniform Air Drag

Added the `minecraft:uses_uniform_air_drag` component. When present, air drag is applied uniformly on both the vertical and horizontal axes, instead of being biased toward horizontal movement.

### Apply Knockback Rules

Added the `minecraft:apply_knockback_rules` component which controls how an entity applies knockback to a target. The component takes an array of `presets`, each with a `filter` for matching targets and the following fields:

- `horizontal_power` — defines how much the target is hit backwards (defaults to 1.0)
- `vertical_power` — defines how much the target is hit upwards (defaults to 0.4)
- `vertical_velocity_cap` — defines the target's maximum vertical upwards velocity after the knockback rules have been evaluated (defaults to 0.4)
- `check_if_target_is_immersed_in_water` — defines whether the target should be fully immersed in water for the knockback rules to apply (defaults to false)

Not defining this component results in default knockback behavior.

#### Bounciness

Added the `minecraft:bounciness` component, which controls how an entity bounces when colliding with surfaces:

- Contains a single field, `value`, defining the bounce strength:
  - `0` results in no bounce
  - `1` results in a perfectly elastic collision with full energy preservation
- If the component is not present, bounciness defaults to `0`
- Only available if the entity's `format_version` is set to `beta`

#### Air Drag Modifier

Added the `minecraft:air_drag_modifier` component:

- The higher its value, the more air drag affects an entity:
  - `0.0` means no air drag
  - `1.0` means regular air drag
  - `2.0` means double air drag
- Only available if the entity's `format_version` is set to `beta`

#### Apply Knockback Rules — Beta Fields

The following fields have been added to the preset element exclusively in the beta version of `minecraft:apply_knockback_rules`:

- `scale_previous_velocity` — scales the previous velocity of the target when hit
- `horizontal_hit_angle_scale` — scales the horizontal angle response of the target when hit based on the attacker's aim direction
- `vertical_hit_angle_scale` — scales the vertical angle response of the target when hit based on the attacker's aim direction
- `vertical_position_angle_scale` — scales the vertical angle response of the target when hit based on the attacker's relative feet position
- `scale_with_damage` — enables scaling the magnitude of knockback based on the inverse square of the damage

> [!NOTE]
> There is currently a known issue where knockback is applied twice — first the custom knockback defined by `minecraft:apply_knockback_rules`, then the default knockback with the custom `horizontal_power`, `vertical_power`, and `vertical_velocity_cap` defined by `minecraft:apply_knockback_rules`.

### Graphical (Experimental)

#### Water Configuration

Added a new version for the water configuration JSON file:

- New format version is `1.26.20`
- Fields `minecraft:water_settings` and `minecraft:water_settings/description` are now required

#### Render Dragon for Creators

Under the RenderDragon Features for Creators Experiment:

- Migrated colored block light storage to the GPU. There may be new artifacts with light leaking through or around blocks. Colored block lights now influence Volumetrics.
- Added `static_light` shading to weather

#### Point Lights

- Removed point lights visually fading out once past a certain distance from the camera
- Fixed an issue where point lights were over-exposed at their center (this behavior can be replicated using emissive textures if desired)
- Fixed an issue where the RenderDragon Features for Creators Experimental resource pack would override other resource packs on the stack

## What's Next

Looking ahead, here's what you can expect in future releases:

- Continued expansion of Data-Driven UI (DDUI) with more capabilities
- 3D world text primitives moving toward stable
- Custom dimensions API
- Locator bar infrastructure
- Custom projectile improvements
- Voxel shapes for vanilla blocks
- Per-entity versioning system for forward-compatible add-ons
