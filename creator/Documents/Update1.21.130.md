---
author: mikeam
ms.author: mikeam
title: 1.21.130 Update Notes
description: Update summary of Creator changes in Bedrock 1.21.130
ms.service: minecraft-bedrock-edition
ms.date: 12/04/2025 #Required; mm/dd/yyyy format.
---

# Minecraft Bedrock 1.21.130 Update Notes for Creators

> [!VIDEO https://www.youtube.com/embed/O-dlJcrrpPU]
*Video version of this article from the Minecraft Creator Channel*

Minecraft Bedrock has been updated to 1.21.130 and there are a number of changes of note for creators. The following features do not require experimental toggles unless otherwise specified.

## Blocks

### Block Precipitation Interactions
The [minecraft:precipitation_interactions](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_precipitation_interactions.md) component has moved from experimental to stable, allowing creators to control how blocks interact with precipitation (rain and snow).

### Geometry Rendering
The `fit_to_frame` option in geometry files can no longer be disabled to render block-items larger than their frame from format_version 1.21.130 onward.

### Ambient Occlusion Fix
Fixed `ambient_occlusion` field in [minecraft:material_instances](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_material_instances.md) block component.

## Items

### New Item Components

#### [minecraft:swing_sounds](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_swing_sounds.md)
Allows overriding the swing sounds emitted by the user. Fields include:
- `attack_miss` - Sound played when an attack misses or deals no damage due to invulnerability
- `attack_hit` - Sound played when an attack hits
- `attack_critical_hit` - Sound played when an attack hits and deals critical damage

#### [minecraft:kinetic_weapon](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_kinetic_weapon.md)
Allows an item to deal damage and effects every tick while in use, to all unobstructed targets found in a straight line from the user's view vector. Key fields include:
- `delay` - Ticks to wait before applying damage and effects
- `reach` - Range along the view vector where entities can be hit
- `creative_reach` - The reach used when the user is in Creative Mode
- `damage_multiplier` / `damage_modifier` - Modifies damage calculation
- `damage_conditions`, `knockback_conditions`, `dismount_conditions` - Conditions for applying effects

#### [minecraft:piercing_weapon](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_piercing_weapon.md)
Allows an item to deal damage to all entities detected in a straight line along the user's view vector. Items with this component cannot destroy blocks. Fields include:
- `reach` - Range along the view vector where entities can be hit
- `creative_reach` - The reach used when the user is in Creative Mode
- `hitbox_size` - Extra tolerance on the raycast to detect entities

### Cooldown Component Enhancement
The [minecraft:cooldown](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_cooldown.md) item component now supports a `type` field:
- `use` - Puts the item on cooldown when used (default behavior)
- `attack` - Puts the item on cooldown when attacking

## Entity Components

### New Components

#### minecraft:rotation_locked_to_vehicle
Causes the entity's body rotation and overall rotation to automatically align with its mounted vehicle.

#### minecraft:body_rotation_locked_to_vehicle (renamed)
Renamed to `minecraft:rotation_locked_to_vehicle` with enhanced functionality.

### Component Updates

#### [minecraft:burns_in_daylight](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_burns_in_daylight.md)
Added new field `protection_slot` which allows specifying an equipment slot that should provide protection from burning in daylight. Valid values include:
- `slot.weapon.offhand`
- `slot.armor.head`
- `slot.armor.chest`
- `slot.armor.legs`
- `slot.armor.feet`
- `slot.armor.body`

#### [minecraft:ageable](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_ageable.md) and [minecraft:breedable](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_breedable.md)
The `transform_to_item` field has been renamed to `result_item`. This field is now defined for each item entry in the `items` list, enabling item-specific transformations on use.

#### [minecraft:healable](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_healable.md) and [minecraft:tameable](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_tameable.md)
Added `result_item` field to items in these components. On a successful interaction, the consumed item is replaced with this item.

#### [minecraft:addrider](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_addrider.md)
Upgraded to allow an array of riders. Fields:
- `riders` - Array of riders to add, with mandatory `entity_type` and optional `spawn_event` fields

#### [minecraft:breathable](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_breathable.md)
Added new boolean field `can_dehydrate`. When set to true, entities that only breathe water will take dehydration damage when out of water.

#### [minecraft:exhaustion_values](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_exhaustion_values.md)
Added a `lunge` field that defines the amount of exhaustion applied when triggering the lunge enchantment, multiplied by the enchantment level.

#### [minecraft:mob_effect](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_mob_effect.md)
Added `ambient` field which:
- Causes the effect to render with the ambient effect background
- Causes the effect to not pulse for timing out

## AI Goals

### New AI Goal: minecraft:behavior.use_kinetic_weapon
Allows a mob to make use of items with a `minecraft:kinetic_weapon` item component. Key fields include:
- `approach_distance` - Distance within which the mob begins using its kinetic weapon
- `reposition_distance` - Distance the mob retreats to when target is too close
- `cooldown_distance` - Distance the mob retreats to after all durations have elapsed
- `weapon_reach_multiplier` - Multiplier applied to the weapon's reach
- `hijack_mount_navigation` - Allows overriding mount's navigation behavior

### [behavior.float](../Reference/Content/EntityReference/Examples/EntityGoals/minecraftBehavior_float.md) Enhancements
Added two new fields:
- `chance_per_tick_to_float` - The chance per tick to cause an upward impulse
- `time_under_water_to_dismount_passengers` - Time in seconds before passengers are dismounted

### [behavior.nearest_attackable_target](../Reference/Content/EntityReference/Examples/EntityGoals/minecraftBehavior_nearest_attackable_target.md) Enhancements
- Added `target_acquisition_probability` field - Probability (0.0 to 1.0) that an entity will accept a found target
- Modified `attack_interval` field to support a range of values (`range_min` and `range_max`)

## Scripting API

### Released to v2.4.0

#### AABB and Entity Bounds
- `AABB` class
- [`Entity.getAABB()`](../ScriptAPI/minecraft/server/Entity.md#getaabb)

#### Control Scheme
- `ControlScheme` enum
- [`Player.setControlScheme()`](../ScriptAPI/minecraft/server/Player.md#setcontrolscheme)
- [`Player.getControlScheme()`](../ScriptAPI/minecraft/server/Player.md#getcontrolscheme)

#### Entity Block Standing
- `GetBlocksStandingOnOptions` interface
- [`Entity.getBlockStandingOn()`](../ScriptAPI/minecraft/server/Entity.md#getblockstandingon)
- [`Entity.getAllBlocksStandingOn()`](../ScriptAPI/minecraft/server/Entity.md#getallblocksstandingon)

#### Redstone Components
- `BlockRedstoneProducerComponent` class
- `InvalidBlockComponentError` class

#### Liquid Settings
- `LiquidSettings` interface
- `JigsawPlaceOptions.liquidSettings`
- `JigsawStructurePlaceOptions.liquidSettings`

#### Block Events
- `BlockComponentBlockBreakEvent`
- The `/clone`, `/structure`, and `/place` commands now fire `onBreak` beta API event for custom blocks

#### Potion APIs
- `Potions` class
- `ItemPotionComponent` component
- `PotionDeliveryType` class
- `PotionEffectType` class
- `InvalidPotionDeliveryTypeError` error
- `InvalidPotionEffectTypeError` error

#### Loot Table Discovery APIs
Moved from beta to v2.4.0.

### New Module: @minecraft/server-graphics
New module to change graphics and rendering settings. The current set of APIs are associated with Atmospheric Scattering parameters in Vibrant Visuals.

### API Fixes
- Fixed `Dimension.getEntitiesFromRay` and `Entity.getEntitiesFromViewDirection` for entities like `minecraft:xp_orb`, ground items, `minecraft:arrow`, `minecraft:snowball`, and `minecraft:thrown_trident`
- `Player.clearPropertyOverridesForEntity` can now take an Entity or Entity ID as valid arguments

## Molang

### New Kinetic Weapon Queries
- `query.kinetic_weapon_delay` - Returns the delay value from the main-hand item's `minecraft:kinetic_weapon` component
- `query.kinetic_weapon_damage_duration` - Returns the max_duration value of damage_conditions
- `query.kinetic_weapon_knockback_duration` - Returns the max_duration value of knockback_conditions
- `query.kinetic_weapon_dismount_duration` - Returns the max_duration value of dismount_conditions
- `query.ticks_since_last_kinetic_weapon_hit` - Returns ticks elapsed since the user last hit something while using a kinetic weapon

### Pack Settings Queries
- `query.get_pack_setting('ns:slider_name')` - Returns the value of a slider
- `query.is_pack_setting_enabled('ns:toggle_name')` - Check if toggle is enabled
- `query.is_pack_setting_selected('ns:dropdown_name', 'dropdown_option_name')` - Check if a dropdown option is selected

### Client-Side Biome Queries
The following queries no longer need the Upcoming Creator Features toggle:
- `query.entity_biome_has_all_tags`
- `query.entity_biome_has_any_tags`
- `query.entity_biome_has_any_identifier`

## Entity Filters

### New Filters
- [`is_controlling_passenger_family`](../Reference/Content/EntityReference/Examples/Filters/is_controlling_passenger_family.md) - Check if the passenger controlling a mount is of the specified family
- [`has_item_with_component`](../Reference/Content/EntityReference/Examples/Filters/has_item_with_component.md) - Check if the entity has equipped an item with the designated component name

## Biomes

- Fixed biome replacement component functionality
- Fixed an issue where replacement biomes were not read for client-side chunk generation

## Graphical

### Vibrant Visuals Cubemap Configuration
Added the ability to data-drive cubemap lighting and effects in [Vibrant Visuals](./VibrantVisuals/IntroVibrantVisuals.md). Cubemap configuration files should be placed in the `cubemaps` directory of a resource pack.

Example cubemap configuration (`cubemaps/mycubemap.json`):
```json
{
    "format_version": "1.21.130",
    "minecraft:cubemap_settings": {
        "description": {
            "identifier": "mypack:mycubemap"
        },
        "lighting": {
            "ambient_light_illuminance": {
                "0.00000": 4.0,
                "1.000000": 4.0
            },
            "sky_light_contribution": 1.0,
            "directional_light_contribution": 1.0,
            "affected_by_atmospheric_scattering": true,
            "affected_by_volumetric_scattering": true
        }
    }
}
```

Apply a cubemap to a biome in the client biome configuration:
```json
{
    "format_version": "1.21.130",
    "minecraft:client_biome": {
        "description": {
            "identifier": "minecraft:river"
        },
        "components": {
            "minecraft:cubemap_identifier": {
                "cubemap_identifier": "mypack:mycubemap"
            }
        }
    }
}
```

### Rendering Fixes
- Fixed blocks using `render_method:blend` always being semi-transparent
- Fixed blocks using `render_method:blend` and `render_method:alpha_test` not having shaded sides in inventory
- Fixed custom blocks rendered in Structure Block GUI
- Fixed issue with rendering custom blocks as "flying items" and with quick move animation
- Light absorption in water has been changed from 2 to 1 units, to match Java Edition

## Gameplay

### Legacy Tree Features
Legacy tree features now respect biome borders.

### Custom Items
Custom items tagged with `minecraft:is_shovel` now build paths on all blocks the Shovel does.

## Experimental Features

> [!NOTE]
> The following features require experimental toggles to be enabled.

### Collision Box Improvements (Upcoming Creator Features)
- [minecraft:collision_box](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_collision_box.md) height is extended to 24 when using format version 1.21.130 or higher
- [minecraft:collision_box](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_collision_box.md) now supports arrays of boxes when using format version 1.21.130 or higher

### Block Support Component (Upcoming Creator Features)
Added `minecraft:support` component that defines how a block provides structural support:
```json
"minecraft:support": { 
    "shape": "stair" // "fence" is also valid 
}
```

### Block Connection Trait (Upcoming Creator Features)
New `minecraft:connection` trait to expose behavior like Fences or Glass Panes where blocks connect to other blocks around them:
```json
{
    "format_version": "1.21.130",
    "minecraft:block": {
        "description": {
            "identifier": "test:connection_block",
            "traits": {
                "minecraft:connection": {
                    "enabled_states": ["minecraft:cardinal_connections"]
                }
            }
        }
    }
}
```

### Block Connection Rule (Upcoming Creator Features)
Added `minecraft:connection_rule` component that allows custom blocks to define whether other blocks with connection behavior can create a connection. Also added `minecraft:has_fence_connections` VanillaBlockTag.

### Redstone Consumer Component (Upcoming Creator Features)
Added `minecraft:redstone_consumer` component for blocks to consume and potentially propagate redstone signals:
```json
{
    "format_version": "1.21.130",
    "minecraft:block": {
        "description": {
            "identifier": "test:custom_consumer_block"
        },
        "components": {
            "minecraft:redstone_consumer": {
                "min_power": 5,
                "propogates_power": true
            }
        }
    }
}
```

### Leashable Block Component (Upcoming Creator Features)
Added `minecraft:leashable` block component which allows custom blocks to receive a lead attachment, including an offset field to change the position of the leash knot.

### Corner and Cardinal Direction State (Beta APIs)
Added new state `minecraft:corner_and_cardinal_direction` to the `minecraft:placement_direction` block trait:
```json
{
    "format_version": "1.21.130",
    "use_beta_features": true,
    "minecraft:block": {
        "description": {
            "identifier": "custom:custom_block",
            "traits": {
                "minecraft:placement_position": {
                    "enabled_states": ["minecraft:vertical_half"]
                },
                "minecraft:placement_direction": {
                    "enabled_states": ["minecraft:corner_and_cardinal_direction"],
                    "blocks_to_corner_with": [{"tags": "q.any_tag('minecraft:cornerable_stairs')"}]
                }
            }
        }
    }
}
```

### Colored Static Block Lighting (Render Dragon Features for Creators)
Added Colored Static Block Lighting under the Render Dragon Features for Creators toggle:
- Feature is only available in Previews and using Vibrant Visuals in worlds which the experiment toggle is active
- Static lights can be defined in `local_lighting.json` using `"light_type": "static_light"`
- Blocks with `point_light` light_type also receive colored static lighting
- Static lighting follows Minecraft lighting rules and respects [`minecraft:light_emission`](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_light_emission.md) and [`minecraft:light_dampening`](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_light_dampening.md) block components
- Static lighting is additive/accumulated, so overlapping lights of different colors will cause lighting to get brighter
  - Overlapping lights of the same type (i.e. same color and light_emission) will not cause lighting to get brighter
  - Static lighting is not affected by stained glass or other translucent blocks
  - The static lighting experimental feature is under development and may look or behave different as development progresses

### Scripting API Beta Features

#### Ticking Area Manager (Beta APIs)
- [`World.tickingAreaManager`](../ScriptAPI/minecraft/server/World.md#tickingareamanager) property
- [`TickingAreaManager`](../ScriptAPI/minecraft/server/TickingAreaManager.md) class for managing temporary ticking areas
- [`TickingArea`](../ScriptAPI/minecraft/server/TickingArea.md) interface
- [`TickingAreaOptions`](../ScriptAPI/minecraft/server/TickingAreaOptions.md) interface
- [`TickingAreaError`](../ScriptAPI/minecraft/server/TickingAreaError.md) class
- [`TickingAreaErrorReason`](../ScriptAPI/minecraft/server/TickingAreaErrorReason.md) enum

#### Block Redstone Update Event (Beta APIs)
- `BlockComponentRedstoneUpdateEvent` can be subscribed by custom block components
- `onRedstoneUpdate` custom component subscription (requires `minecraft:redstone_consumer` component)

#### Debug Drawing Improvements (Beta APIs)
- Debug drawing now supports rendering shapes in different dimensions
- Added `setLocation()` method and `dimension` property to `DebugShape`
- Fixed issues with `timeLeft`, arrow head rotation, and `DebugText` scale

#### Player Swing Events (Beta APIs)
- `EntitySwingSource` for providing context of player swings
- `PlayerSwingStartAfterEvent.swingSource`
- `PlayerSwingEventOptions.swingSource`

## Editor

[Editor](./BedrockEditor/EditorOverview.md) has received numerous improvements in this release. For detailed release notes with video demonstrations, see the [Editor GitHub Discussions](https://github.com/Mojang/minecraft-editor/discussions).

### Selection Block Manifest

A new section has been added to the Selection tool called the 'Block Manifest' which lets you quickly see what blocks make up your current selection. You can then quickly replace all blocks of a certain type or remove them from your selection.

*See [Release 1.2.0 discussion](https://github.com/Mojang/minecraft-editor/discussions/272) for video demonstration.*

### Terrain Tool Elevation Mode

A new 'Elevation' mode has been added to the Terrain tool to easily create more interesting landscapes. You can brush to either raise or lower the landscape with the following settings:

- **Intensity** - How quickly the terrain is modified
- **Radius** - Size of the terrain brush
- **Falloff** - The 'inner radius' of the brush. Large values produce sharp cliffs while smaller values make hills
- **Layers** - Changes how the sampling is done, allowing you to replicate interesting patterns
- Hold **SHIFT** to lock the brush XZ coordinates in place while painting

*See [Release 1.2.0 discussion](https://github.com/Mojang/minecraft-editor/discussions/272) for video demonstration.*

### Quick Move Mode

A new mode in the Selection tool allows you to easily move the contents of a selection in any direction. Select a set of blocks and 'nudge' them using arrow buttons or by holding **ALT** and using arrow keys/Page Up/Page Down.

You can also "smear" what you have selected using **CTRL + ALT + arrow keys/Page Up/Page Down**.

*See [Release 1.1.7 discussion](https://github.com/Mojang/minecraft-editor/discussions/268) for video demonstration.*

### Layouts (formerly Prefabs)

Initial experimental support for "Layouts" has been added to the Editor. This feature allows you to:

- Create a 'layout' which is a collection of structures with rotations/offsets
- Place instances of these layouts into your world where they act as holograms that can be clicked and dragged around
- If you edit the layout or underlying structures, all instances in the world automatically update
- **Layout Instance Baking** - Anytime you take your world out of Editor ('Test World', 'Export World' or 'Upload to Realms'), all layout instances are committed into the world as actual blocks
- Added Mirror/Rotation support for layout templates and instances

> [!NOTE]
> This feature is highly experimental and is not yet documented. Only Overworld is supported for layout baking at the moment. The Nether and End will be supported in a future update.

*See [Release 1.1.9 discussion](https://github.com/Mojang/minecraft-editor/discussions/271) for video demonstrations of prefab authoring, instancing, and editing.*

### Structure Panel Improvements

The Structure panel has been improved with better performance, so Editor will no longer lag when you have hundreds of structures in your project. New features include:

- Filter structures by name or tag
- Tag management section for adding and removing tags
- Generate Manifest button in Selection Tool

*See [Release 1.2.0 discussion](https://github.com/Mojang/minecraft-editor/discussions/272) for video demonstration.*

### Jigsaw Enhancements

- Jigsaw Tool now automatically imports template pools from loaded behavior packs
- Added Jigsaw Properties to the Block Inspector for easier Jigsaw structure creation
- Added bypass validation warning screen to generate jigsaw workflow

*See [Release 1.2.0 discussion](https://github.com/Mojang/minecraft-editor/discussions/272) for video demonstration.*

### Expanded Cursor Range

Performance improvements allow you to reach significantly farther with the following tools: Selection, Paste Preview, Line, Pencil, Brush, Smartfill, Terrain, Workbench, Ruler, Block Inspector, Scale, and Farm Generator. The selection limit now matches the video render distance setting.

*See [Release 1.2.0 discussion](https://github.com/Mojang/minecraft-editor/discussions/272) for video demonstration.*

### Navigation Pane Updates

Quality-of-life updates to help you build with others:

- New 'Users' section to quickly jump to other creators' locations
- Stored locations are now synchronized between everyone in the same project
- Edit functionality for name, coordinates, and color of Stored Locations
- Teleportation feature to jump to any other creator

### New Editor APIs

#### Modal Dialog API
New `IModalDialog` API to create scripted dialog windows. Create a dialog with `dialogManager.registerDialog` using a `uniqueId`, build the UI with `myDialog.contentPane`, and show it by calling `dialogManager.activateDialog`.

*See [Release 1.1.7 discussion](https://github.com/Mojang/minecraft-editor/discussions/268) for video demonstration.*

#### List Pane API
Added `IListPanePropertyItem` to the pane API to create table-like views with text, button, checkbox, and image components.

*See [Release 1.1.6 discussion](https://github.com/Mojang/minecraft-editor/discussions/267) for video demonstration.*

#### Additional API Updates
- Added `shrinkToIcon` API property for `IButtonPropertyItem` creation options
- Added `maxVisibleEntries` API property for `IDropdownPropertyItem` to modify menu size
- Added `enabled` API property for `IToggleGroupPropertyItemEntry`
- Changed `ButtonPropertyItemVariant` API enum to `ButtonVariant`
- Added localized message and sub message support for logging APIs

### Line Tool Improvements

The Line Tool's middle selector now changes to Hermite curve automatically when moving the gizmo.

### Vibrant Visuals

Added cubemap controls to the [Vibrant Visuals Settings Pane](./BedrockEditor/EditorVibrantVisuals.md).

[Get started with Editor!](./BedrockEditor/EditorInstallation.md)

## Vanilla Content Updates

The [Bedrock Samples repository](https://github.com/Mojang/bedrock-samples) has been updated with new vanilla content that can serve as reference examples for creators:

- **New entity definitions** - Nautilus, Zombie Nautilus, Parched (skeleton variant), Camel Husk, and updated Zombie Horse entities demonstrate usage of new components like `minecraft:rotation_locked_to_vehicle`, `minecraft:behavior.use_kinetic_weapon`, and updated `minecraft:addrider` arrays
- **New item definitions** - Spear items (Wood, Stone, Copper, Iron, Gold, Diamond, Netherite) showcase the new `minecraft:kinetic_weapon`, `minecraft:piercing_weapon`, and `minecraft:swing_sounds` components
- **Updated jockey behavior** - Entity files now reflect the updated baby zombie jockey restrictions using the `baby_zombie` family type
- **New loot tables and spawn rules** - Examples of spawn rules for new underwater and desert mobs

## What's Next

Looking ahead, here's what you can expect coming in future releases.

### What's Next for Blocks
- Custom stairs and fences via block behaviors like connection and collision 
- Recreate your own custom creaking with entity-block communication capabilities
- Snow layers inside custom blocks
- Double blocks and block containers

### And more cool stuff
- EntityHurtAfter and EntityHurtBefore events
- Biome seed query
- Camera spline with Z rotation
