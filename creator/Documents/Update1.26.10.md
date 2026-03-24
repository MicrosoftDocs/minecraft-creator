---
author: mikeam
ms.author: mikeam
title: 1.26.10 Update Notes
description: Update summary of Creator changes in Bedrock 1.26.10
ms.service: minecraft-bedrock-edition
ms.date: 03/19/2026
---


# Minecraft Bedrock 1.26.10 Update Notes for Creators

> [!VIDEO https://www.youtube.com/embed/IRKOm9zRj_E]
*Video version of this article from the Minecraft Creator Channel*

Minecraft Bedrock has been updated to 1.26.10 - the Tiny Takeover game drop! While players revel in adorable new baby mob models, creators get a significant wave of API releases and updated entity components. The following features do not require experimental toggles unless otherwise specified.

## Camera

Camera splines and attach-to-entity APIs are now out of experimental, available in `@minecraft/server` v2.6.0.

## Blocks

### Corner Stair Fix

Blocks using the `minecraft:corner_and_cardinal_direction` value of `minecraft:placement_direction` now correctly form inner corners when adjacent to other stairs.

### Geometry Rotation Fix

Fixed rotation for blocks in item frames that use `"minecraft:geometry.full_block"` for `format_version` >= 1.26.0.

### Block Placer Aligned Placement

The `minecraft:block_placer` item component has a new boolean field `aligned_placement`:

- When `true`, block placement through this item is aligned while holding the interaction button
- Defaults to `false`
- Supported from `format_version` 1.26.0 onward

### Liquid Detection

- `minecraft:liquid_detection` component containing an empty array will now fail to load and produce a content error
- Fixed `placement_filter` and `block_placer` components to support placing on liquid blocks when used with `liquid_clipped`

### Ambient Occlusion

- Custom blocks with ambient occlusion disabled no longer have the occasional black vertex issue
- Improved ambient occlusion for blocks using custom geometry

### Other Block Fixes

- Fixed client crash on world load from out-of-bounds `minecraft:geometry` in the `minecraft:item_visual` component
- Corner stairs next to a stair block of a different type will no longer leak water for worlds of `base_game_version` 26.10 or higher

## Items

### Custom Item Cooldowns

Cooldowns on custom items now visualize correctly.

## Entity Components

### Ageable Growth Control

Added the ability to pause and reset growth of entities using `minecraft:ageable` with specified items:

- New field `pause_growth_items` — a list of items that can be fed to pause growth for baby entities
- New field `reset_growth_items` — a list of items that can be fed to reset growth for baby entities
- New `ActorDefinitionTrigger` field `reset_growth` — triggers an event when aging is reset
- New `ActorDefinitionTrigger` field `pause_growth` — triggers an event when aging is paused

### Pushable Component Split

The `minecraft:pushable` component has been split into two new components:

- **`minecraft:pushable_by_block`**: Equivalent to `"is_pushable_by_piston": true`. If present, Pistons and Shulker Boxes can push the entity.
- **`minecraft:pushable_by_entity`**: Equivalent to `"is_pushable": true`. If present, other entities can push it.

The original `minecraft:pushable` component will no longer be parsed.

### Buoyant Component Updates

The `minecraft:buoyant` component has been updated:

- The `simulate_waves` field has been replaced with `movement_type`, which accepts:
  - `"waves"` — moves up and down based on speed (default)
  - `"bobbing"` — moves up and down at a constant pace
  - `"none"` — no wave movement
- `big_wave_probability` and `big_wave_speed` only apply when `movement_type` is `"waves"`
- New field `can_auto_step_from_liquid` — defines whether the entity can step out of liquid onto neighboring solid blocks when pushed against them

### Entity Filter: is_tamed

Added the `is_tamed` entity filter, which checks if the subject entity is tamed.

### AI Goal Schema Changes

Made schemas for many AI goals stricter when parsing. They will fail to load entity JSON that has invalid data in versions 1.26.10 and newer:

#### Farming and Interaction Behaviors

- `minecraft:behavior.drop_item_for`
- `minecraft:behavior.fertilize_farm_block`
- `minecraft:behavior.harvest_farm_block`
- `minecraft:behavior.inspect_bookshelf`
- `minecraft:behavior.lay_egg`

#### Combat and Movement Behaviors

- `minecraft:behavior.ram_attack`
- `minecraft:behavior.celebrate`
- `minecraft:behavior.celebrate_survive`
- `minecraft:behavior.random_search_and_dig`
- `minecraft:behavior.swim_with_entity`
- `minecraft:behavior.take_flower`
- `minecraft:behavior.trade_with_player`
- `minecraft:behavior.teleport_to_owner`
- `minecraft:behavior.work`
- `minecraft:behavior.work_composter`
- `minecraft:behavior.move_to_land`
- `minecraft:behavior.move_to_water`
- `minecraft:behavior.ocelot_sit_on_block`
- `minecraft:behavior.raid_garden`
- `minecraft:behavior.stomp_turtle_egg`
- `minecraft:behavior.offer_flower`
- `minecraft:behavior.play_dead`
- `minecraft:behavior.play`

#### Float Range Field Changes

The following Float Range fields now only accept an object with `min` and `max` values (other formats will fail to parse):

- `time_of_day_range` in `minecraft:behavior.drop_item_for`
- `cooldown_range` in `minecraft:behavior.ram_attack`
- `sound_interval` and `jump_interval` in `minecraft:behavior.celebrate`
- `fireworks_interval` in `minecraft:behavior.celebrate_survive`
- `cooldown_range` and `digging_duration_range` in `minecraft:behavior.random_search_and_dig`
- `random_damage_range` in `minecraft:behavior.play_dead`

#### Other AI Changes

- `lay_seconds` in `minecraft:behavior.lay_egg` now only accepts numbers >= 0
- `minecraft:behavior.panic` has been made more robust in how it calculates a desired path
- `minecraft:behavior.ocelotattack` has been migrated (the underscore misname is legacy and cannot safely be changed)
- Entity JSON with invalid data will now fail to load in versions 1.26.0 and newer

### Experience Orb Warning

A content warning will now fire if the number of experience orbs requested to spawn in a single tick exceeds the recommended max of 512.

### Client Entity: held_item_scale

Added a `held_item_scale` field to the `entity.json` schema:

- Allows items held by mobs to be scaled by a factor greater than zero
- Defaults to `1.0`

## Scripting API

### Released to Stable (@minecraft/server v2.6.0)

#### Entity Heal Events

Released a full suite of entity heal events:

- `EntityHealBeforeEvent` / `EntityHealAfterEvent`
- `EntityHealCause` / `EntityHealSource`
- `EntityHealEventOptions`
- `EntityHealBeforeEventSignal` / `EntityHealAfterEventSignal`
- `WorldBeforeEvents.entityHeal` / `WorldAfterEvents.entityHeal`

#### Entity Hurt Before Event

- `EntityHurtBeforeEvent`
- `EntityHurtBeforeEventOptions` / `EntityHurtBeforeEventSignal`
- `WorldBeforeEvents.entityHurt`
- `EntityHurtAfterEventOptions` (with updated `EntityHurtAfterEventSignal` usage)

#### Entity Item Pickup Events

- `EntityItemPickupAfterEvent` / `EntityItemPickupBeforeEvent`
- `EntityItemPickupEventOptions` / `ItemFilter`
- `EntityItemPickupAfterEventSignal` / `EntityItemPickupBeforeEventSignal`
- `WorldAfterEvents.entityItemPickup` / `WorldBeforeEvents.entityItemPickup`

#### Entity Item Drop Events

- `EntityItemDropAfterEvent` / `EntityItemDropAfterEventSignal`
- `EntityItemDropEventOptions`
- `WorldAfterEvents.entityItemDrop`

#### Block APIs

- `Block.getComponents` and `Block.hasComponent`
- `BlockComponentEntityEvent`
- `BlockComponentRedstoneUpdateEvent.previousPowerLevel`

#### Aim Assist APIs

Released the full aim assist API suite:

- `AimAssistCategory` / `AimAssistCategorySettings`
- `AimAssistPreset` / `AimAssistPresetSettings`
- `AimAssistRegistry` / `AimAssistTargetMode`
- `PlayerAimAssist` / `PlayerAimAssistSettings`
- `World.getAimAssist` / `Player.getAimAssist`

#### Camera APIs

Released camera animation and attachment APIs:

- `playAnimation` / `attachToEntity` methods
- `EntityAttachPoint` / `CatmullRomSpline` / `LinearSpline`
- `AnimationOptions` / `CameraAttachOptions`
- `ProgressKeyFrame` / `RotationKeyFrame` / `SplineAnimation`

#### Ticking Area APIs

- `TickingAreaManager` / `TickingArea` / `TickingAreaOptions`
- `TickingAreaError` / `TickingAreaErrorReason`
- `World.tickingAreaManager`

#### Biome APIs

- `world.containsBiomes` moved to stable with new `isSuperset` parameter
- `BiomeFilter` (formerly `ScriptBiomeFilter`) moved to stable

#### World and Item APIs

- `World.getSeed` moved to stable
- `ItemDurabilityComponent.unbreakable`
- `EntityDefinitionFeedItem.resultItem` / `FeedItem.resultItem` (type changed to `string | undefined`)
- `localizationKey` property on `ItemType`, `EntityType`, `BlockType`, and `BlockPermutation`

#### Bug Fixes

- Fixed `isValid` returning false for a valid `SimulatedPlayer` after spawning
- Fixed localization string for `tile.sticky_piston_arm_collision.name`

### @minecraft/server-net

Added additional error types for HTTP requests:

- `HttpRequestBodyTooLargeError` — request body exceeds configured limit
- `HttpRequestLimitExceededError` — concurrent request limit reached
- `HttpRequestNotAllowedError` — request targets a URI not in the allow list
- `HttpsOnlyError` — HTTPS required but non-HTTPS URI provided

## Molang

- `query.get_level_seed_based_fraction` is now available without the Upcoming Creator Features toggle
- Generated JSON metadata for Molang queries available in the game
- Built-in math functions are now included in generated Molang metadata

## Commands

- Fixed `/reload all` not reloading packs outside of development folders
- Fixed `/setblock` and `/fill` commands placing partial double blocks (e.g., upper part of a door)

## Dedicated Server

Added HTTP configuration capabilities for the `@minecraft/server-net` scripting module. Server operators can configure HTTP request limits and restrictions via `permissions.json`:

```json
{
  "allowed_modules": [
    "@minecraft/server-net"
  ],
  "module_permissions": {
    "@minecraft/server-net": {
      "allowed_uris": [
        "https://example.com/"
      ],
      "force_https": true,
      "max_body_bytes": 1048576,
      "max_concurrent_requests": 1,
      "session_headers": {
        "session-data": "abc123"
      }
    }
  }
}
```

All options are optional. If not specified, limits for that setting are not enforced.

## Graphical

### Colored Block Lighting

- The colored block lighting feature is no longer restricted to the Render Dragon Features for Creator experiment
- Static/Colorized block lighting in Vibrant Visuals is no longer restricted to Preview builds
- To enable, PBR resource packs must include a `local_lighting.json` with `static_light` entries
- Blocks without a `static_light` and `light_color` entry use standard uniform light color
- Known issue: empty chunks not propagating colors will be fixed in a future update

### Vibrant Visuals

- Added static/colorized block light shading to particles
- Added static local lighting support for more entities and items, including pistons, moving blocks, signs, beds, and chests
- Fixed gamma encoding of sun, moon, weather, and end sky
- Vibrant Visuals now correctly support grayscale crushed images in texture sets
- Fixed spyglass full-screen effect brightening the scene
- Fixed End Portal invisible panels
- Static colored lighting on flowing lava no longer appears too dark
- Static colored lighting no longer leaks through corners
- Adjusted light attenuation of static colored block lighting to be less intense

### Other Rendering Changes

- Removed ESSL_300 shader language support
- Custom blocks with ambient occlusion disabled no longer have the occasional black vertex issue
- Improved ambient occlusion for blocks using custom geometry
- Fixed z-fighting on Brewing Stand and Stonecutter on PlayStation

## Features

Fixed feature loading to allow sub-directories and any filename — only the identifier in JSON is used now.

## JSON Schema

Updated the `canopy_decorator` schema to support placing several blocks in a row as a decorator. New format uses `decoration_blocks_sequence` as a list of blocks with a count per block. The old `decoration_block` and `num_steps` format is still supported, but the new format takes priority when both are present.

```json
"canopy_decoration": {
    "decoration_blocks_sequence": [
        {
            "block": "minecraft:bedrock",
            "count": 1
        },
        {
            "block": "minecraft:dirt",
            "count": [1, 2]
        },
        {
            "block": "minecraft:stone",
            "count": {
                "range_min": 1,
                "range_max": 2
            }
        }
    ],
    "decoration_chance": {
        "numerator": 1,
        "denominator": 4
    },
    "step_direction": "out"
}
```

## Editor

[Editor](./BedrockEditor/EditorOverview.md) continues to receive significant updates in this release, spanning Releases 1.2.5 through 1.3.0. For detailed release notes, see the Editor GitHub Discussions for [Release 1.2.5](https://github.com/Mojang/minecraft-editor/discussions/304), [Release 1.2.6](https://github.com/Mojang/minecraft-editor/discussions/305), [Release 1.2.7](https://github.com/Mojang/minecraft-editor/discussions/307), [Release 1.2.8](https://github.com/Mojang/minecraft-editor/discussions/308), and [Release 1.3.0](https://github.com/Mojang/minecraft-editor/discussions/309).

### Cinematic Tool

The Cinematic Tool received major improvements across multiple releases:

- Supports undo/redo for control point position and rotation changes via the Editor's transaction system
- Added speed dots to visualize camera travel speed along the spline path
- Hides control points, spline, and speed dots during cinematic preview playback
- Import JSON button now opens a modal dialog for pasting exported cinematic data
- Export JSON button copies cinematic data to the clipboard for sharing between sessions
- Redistribute Evenly properly distributes control point times across total duration
- Fixed 'Update' and 'Move to' Camera Point referring to different Y levels

### Jigsaw Tool

The Jigsaw Tool received a significant UX overhaul:

- Converted from dropdown-based UI to CollectionTree component (pools displayed as folders with pieces as entries)
- Added "New Collection..." option directly in the Jigsaw Editor Collection dropdown
- Added confirmation dialog when deleting a Jigsaw Collection
- Added validation to prevent generating when all elements in the starting pool are empty
- Added localized error logging when jigsaw files cannot be saved (e.g., file locked by another program)
- Added structure display name to the dropdowns for jigsaw pieces, sorted alphabetically
- Moved checkboxes (Reuse Seed, Skip Validation) into a wrapping row layout
- Collection dropdown no longer automatically opens the New Collection dialog on first open
- Canceling the New Collection dialog correctly reverts dropdown to no selection
- Add Pool, Export, and Delete buttons are hidden when no collection is selected
- Collection tree is hidden when no collection is selected
- Registry is now saved when the editor is closed or tool is changed

### Selection Tool

- Re-enabled 3-point selection and re-added 2-point selection toggle (off by default)
- Fixed click-drag-release issue where it didn't finalize the 2nd point in the 3-point selection
- Fixed a bug where players were unable to create a selection volume using the Enter key in Marquee mode
- Fixed a bug where the selection volume would not be updated in Marquee mode after deselecting items in the Block Manifest Table
- Updated Selection Tool to display toast notifications when Quick Actions (Fill, Delete) or Trim Actions (Trim Selection, Remove Air, Hollow) cannot be performed due to no selection or when they result in no changes
- Fixed an issue where switching to the Extrude Tool would remove any active selection volumes
- Large volume trim operations no longer freeze the UI

### Terrain Tool

- Fixed a bug where players could not use the Enter key in the Terrain tool
- Fixed Brush Settings displayed incorrectly across all Terrain Modes
- Fixed Brush dropdown not being hidden in Elevation mode
- Removed block masks and filters pane in Elevation terrain mode

### Farm Generator

- Farm generator now places crop blocks on tilled dirt and not water blocks
- Fixed preview displaying one block lower than the actual farm placement position

### Repeater Tool

- Repeater tool now dynamically limits repetition count based on selection size and spacing to prevent offset errors

### Landing Page

- Updated the Editor Landing Page (gradual rollout)

### New Scripting APIs

Several new APIs were added for Editor extensions:

- `ICollectionTreePropertyItem` API to display a tree view of nested folders and sequential entries
- `IListPaneViewControlPane` API for creating a view control pane at the bottom of the root pane
- `IListPanePropertyItem` now supports variant and layout section
- `IStringPropertyItem` now supports multiline strings via `multilineHeight` property
- `hasClearButton` optional property on `IStringPropertyItemOptions` for clear button visibility
- Tag Container control as Property Pane API
- Icon property for root panes and sub panes, enabling icon display in pane headers
- Vector3 Timeline Control — new timeline type for editing Vector3 values over time (nodes draggable along X-axis, Vector3 values editable via popup)
- New widget render primitive types: `Cylinder`, `Cone`, `Cuboid`, `Pyramid`, `Ellipsoid` — all supporting optional rotation and transparency
- Updated `ListPaneSlotLayout` type renamed to `ListPaneSlotConfiguration`

### Vibrant Visuals in Editor

- The Vibrant Visuals pane can now update globally configured Local Lights properly
- Fixed a bug that prevented graphs from rendering inside the Vibrant Visuals pane
- Fixed the Texel Size slider in Shadow settings displaying decimal values instead of integers
- Improved performance by preventing extra deferred rendering call

### Other Editor Improvements

- Updated default UI zoom level from 75% to 100% for improved out-of-box accessibility
- Added option to keep player data on export for any player that had previously played in that world
- Added editor metrics collection options (also available for Bedrock Dedicated Server)
- Fixed a bug where the flood tool would not close the modal dialog when block change limit was exceeded
- Fixed changing between Crosshair and Tool modes to no longer cause world geometry to get re-created
- Fixed the `/structure load` command placing structures at a different position in Editor mode compared to Test World
- Fixed a bug where exporting a world did not display the file path in the Log Panel
- Fixed a bug where "New from Clipboard" button was inactive outside of Paste Preview tool
- Fixed a bug causing the tutorial dimmer to render misaligned relative to the viewport
- Fixed a bug where players could not select any volumes using Enter key while in Line Tool
- Fixed visual inconsistencies for expanders
- Fixed opening `.mcproject` files to correctly launch the game in Editor mode
- Fixed the "Spawn at Current Location" checkbox in Test World settings being always treated as enabled
- Fixed most double slab blocks missing from the Block Picker menu
- Fixed a bug that entities couldn't spawn in the center of the cursor position for Summon Tool
- Updated text selection and caret colors for default themes
- Fixed tool names to align with existing patterns
- Updated Primitive tool localization for block filter mode and placement progress dialog strings

[Get started with Editor!](./BedrockEditor/EditorInstallation.md)

## Stability and Performance

- Fixed slow server when loading into a world with too many blocks scheduled for ticking
- Fixed game freezes and large save files when spending time near lava flow in the Nether
- Fixed sky light calculations being applied multiple times per chunk, causing excessive memory usage

## Experimental Features

> [!NOTE]
> The following features require experimental toggles to be enabled.

### Scripting API Beta (@minecraft/server v2.7.0-beta)

#### Data-Driven UI (DDUI) Framework

This release introduces new **Data-Driven UI** capabilities. These APIs provide a new way to create modal forms with new capabilities and an updated appearance. New modal forms is the first step in the creator UI journey.

- `CustomForm` and `MessageBox` classes for creating modal UI
- `Observable` class — fires change events when wrapped data changes; used for syncing data between client and server
- `UIRawMessage` interface for localizable messages
- `CustomForm.show()` returns `Promise<boolean>` (true = shown, false = not shown)
- `CustomForm.isShowing()` and `MessageBox.isShowing()` added
- `MessageBox.create()` now takes a `title` parameter directly
- `CustomForm.label()` method added; `LabelOptions` renamed to `TextOptions`

Known Issues:
- You need to wait a tick between programmatically closing a `CustomForm`/`MessageBox` and opening another
- Showing a form while UI is already up queues the UI instead of failing
- `CustomForms` only update after being shown via Observables — you cannot add new controls while the form is shown
- `/reload` command now closes all Data Driven UI screens

#### Entity APIs

- `Entity.addItem` for directly giving items to a mob or player
- `Block.getParts` returns an array of block parts if the block has the `minecraft:multi_block` trait

#### Locator Bar and Waypoints

A new suite of classes for managing waypoints on a player's locator bar:

- `LocatorBar` class — manages the collection of waypoints
- `Waypoint`, `EntityWaypoint`, `PlayerWaypoint`, `LocationWaypoint` classes
- `WaypointTexture` enum and `WaypointTextureBounds` / `WaypointTextureSelector` interfaces
- `EntityVisibilityRules` / `PlayerVisibilityRules` interfaces
- `LocatorBarError` / `InvalidWaypointError` / `InvalidWaypointTextureSelectorError` error classes

#### Dedicated Server APIs (@minecraft/server-admin beta)

- `DedicatedServerUtils` for dedicated server-only APIs
- `LevelStorage` / `LevelStorageQuerySnapshotFile` for save state management
- `AllowList` for dedicated server allow list management

#### TickingAreaManager

- `createTickingArea()` now returns `Promise<void>` instead of `Promise<TickingArea>`

#### Debug Shape Fixes

- Fixed `DebugBox` position to use center instead of bottom-left corner
- Fixed `DebugShape.attachedTo` unintentionally using height offset

#### Other Beta Fixes

- Fixed `EntityHurtBeforeEvent.cancel` to prevent knockback sources (sprint bonus, enchantment, mace smash, projectiles) when set to true
- Added minimum/maximum bounds to several APIs
- `ScriptSetBannerDetailsFunction` now includes base color and pattern data

### Blocks (Experimental)

#### Voxel Shapes

Added experimental toggle "Voxel Shapes" which enables the use of voxel shapes on vanilla and custom blocks:

- Voxel shapes are currently only used for occlusion/culling
- Added `culling_shape` field to `minecraft:geometry` component (behind VoxelShapes toggle)
- Individual boxes must be within bounds of (-14, -14, -14) to (30, 30, 30) pixels
- At least one box must overlap the base block (0–16 pixels on all axes)
- Total shape extent cannot exceed 30 pixels on any axis

#### Block Entity Events

Blocks can handle entity events in scripting through the `onEntity` handler:

- Custom named events: `on_home`, `on_escape`, `on_reach`, `on_place`, `on_take`
- Custom blocks may receive these events up to one tick after emission

#### Multi Block Trait (Upcoming Creator Features)

Added `minecraft:multi_block` block trait behind the Upcoming Creator Features experiment. This trait allows a single block definition to span multiple block positions, treating all parts as a unified block (like Doors). Key details:

- Enables the new `minecraft:multi_block_part` state
- The `direction` property defines which direction parts are placed (`"up"` or `"down"`)
- The optional `part_count` property sets the number of parts (range: 2–4)
- Setting `"minecraft:selection_box": true` automatically combines AABBs from each part into a combined outline
- Component `minecraft:movable` must be defined and cannot be in permutations; valid `movement_type` values are `"popped"` or `"immovable"`
- Component `minecraft:placement_filter` cannot be defined in permutations

Example:

```json
{
    "format_version": "1.26.0",
    "minecraft:block": {
        "description": {
            "identifier": "example:triple_block",
            "traits": {
                "minecraft:multi_block": {
                    "enabled_states": [
                        "minecraft:multi_block_part"
                    ],
                    "parts": 3,
                    "direction": "up"
                }
            }
        },
        "components": {
            "minecraft:selection_box": true
        },
        "permutations": [
            {
                "condition": "q.block_state('minecraft:multi_block_part') == 0",
                "components": {
                    "minecraft:geometry": "geometry.triple_block_part_0",
                    "minecraft:material_instances": {
                        "*": {
                            "texture": "wood_triple_block_part_0",
                            "render_method": "opaque"
                        }
                    }
                }
            },
            {
                "condition": "q.block_state('minecraft:multi_block_part') == 1",
                "components": {
                    "minecraft:geometry": "geometry.triple_block_part_1",
                    "minecraft:material_instances": {
                        "*": {
                            "texture": "wood_triple_block_part_1",
                            "render_method": "opaque"
                        }
                    }
                }
            },
            {
                "condition": "q.block_state('minecraft:multi_block_part') == 2",
                "components": {
                    "minecraft:geometry": "geometry.triple_block_part_2",
                    "minecraft:material_instances": {
                        "*": {
                            "texture": "wood_triple_block_part_2",
                            "render_method": "alpha_test_single_sided"
                        }
                    }
                }
            }
        ]
    }
}
```

#### Chest Obstruction Component (Upcoming Creator Features)

Added `minecraft:chest_obstruction` component:

- `obstruction_rule` defines how a block above a chest affects its opening:
  - `"always"` — always obstructs
  - `"never"` — never obstructs
  - `"shape"` — uses the block's AABB to determine obstruction (default)

### Graphical (Experimental)

- Removed the legacy `point_lights/global.json` format in the "Render Dragon for Creators" experiment — creators should migrate to `local_lighting/local_lighting.json`
- Began rollout of texture streaming feature (available in Preview for some devices; toggled off by default in Video Settings)

### Rendering

- Armor attachables for Players now use a new render controller: `controller.render.armor.player`

## What's Next

Looking ahead, here's what you can expect coming in future releases:

- Data-Driven UI (DDUI) modal presets & continued expansion with more controls and form types
- Multi block command inspection and API support
- Features in Jigsaw pools
- Snow layering in custom blocks
- Locator bar and waypoint APIs