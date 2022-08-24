---
author: mammerla
ms.author: v-bbortree
title: Fog Documentation - Introduction to Fogs
ms.prod: gaming
---

# Fog Documentation - Introduction to Fogs

Fogs are a rendering feature that can be used to obscure the player's view distance. You can use fogs to occlude boundaries, such as unloaded chunks beyond the render distance, or to produce an atmospheric effect. There are several types of fogs that can be used in many different circumstances.

Fogs are set up in individual JSON files in your resource pack under the **fogs** directory.

## Fog Schema

```json
{
    version "format_version"
    object "minecraft:fog_settings"
    {
        object "description"
        {
            string "identifier" // The identifier for these fog settings. The identifier must include a namespace.
        }
        object "distance" : opt // The distance fog settings for different camera locations.
        {
            object "air" : opt // The fog settings when the camera is in the air.
            {
                color "fog_color" // The color that the fog will take on.
                float "fog_start" // The distance from the player that the fog will begin to appear. 'fog_start' must be less than or equal to 'fog_end'.
                float "fog_end"<0.000000-*> // The distance from the player that the fog will become fully opaque. 'fog_end' must be greater than or equal to 'fog_start'.
                string "render_distance_type"<"fixed", "render"> // Determines how distance value is used. Fixed distance is measured in blocks. Dynamic distance is multiplied by the current render distance.
            }
            object "weather" : opt // The fog settings for when the camera is in the air with active weather (rain, snow, etc..).
            {
                color "fog_color" // The color that the fog will take on.
                float "fog_start" // The distance from the player that the fog will begin to appear. 'fog_start' must be less than or equal to 'fog_end'.
                float "fog_end"<0.000000-*> // The distance from the player that the fog will become fully opaque. 'fog_end' must be greater than or equal to 'fog_start'.
                string "render_distance_type"<"fixed", "render"> // Determines how distance value is used. Fixed distance is measured in blocks. Dynamic distance is multiplied by the current render distance.
            }
            object "water" : opt // The fog settings when the camera is in water.
            {
                color "fog_color" // The color that the fog will take on.
                float "fog_start" // The distance from the player that the fog will begin to appear. 'fog_start' must be less than or equal to 'fog_end'.
                float "fog_end"<0.000000-*> // The distance from the player that the fog will become fully opaque. 'fog_end' must be greater than or equal to 'fog_start'.
                string "render_distance_type"<"fixed", "render"> // Determines how distance value is used. Fixed distance is measured in blocks. Dynamic distance is multiplied by the current render distance.
                object "transition_fog" : opt // Additional fog data which will slowly transition to the distance fog of current biome.
                {
                    object "init_fog" // Initial fog that will slowly transition into water distance fog of the biome when player goes into water.
                    {
                        color "fog_color" // The color that the fog will take on.
                        float "fog_start" // The distance from the player that the fog will begin to appear. 'fog_start' must be less than or equal to 'fog_end'.
                        float "fog_end"<0.000000-*> // The distance from the player that the fog will become fully opaque. 'fog_end' must be greater than or equal to 'fog_start'.
                        string "render_distance_type"<"fixed", "render"> // Determines how distance value is used. Fixed distance is measured in blocks. Dynamic distance is multiplied by the current render distance.
                    }
                    float "min_percent"<0.000000-1.000000> // The minimum progress of fog transition.
                    float "mid_seconds"<0.000000-*> // The time takes to reach certain progress('mid_percent') of fog transition.
                    float "mid_percent"<0.000000-1.000000> // The progress of fog transition after 'mid_seconds' seconds.
                    float "max_seconds"<0.000000-*> // Total amount of time takes to complete fog transition.
                }
            }
            object "lava" : opt // The fog settings when the camera is in lava.
            {
                color "fog_color" // The color that the fog will take on.
                float "fog_start" // The distance from the player that the fog will begin to appear. 'fog_start' must be less than or equal to 'fog_end'.
                float "fog_end"<0.000000-*> // The distance from the player that the fog will become fully opaque. 'fog_end' must be greater than or equal to 'fog_start'.
                string "render_distance_type"<"fixed", "render"> // Determines how distance value is used. Fixed distance is measured in blocks. Dynamic distance is multiplied by the current render distance.
            }
            object "lava_resistance" : opt // The fog settings when the camera is in lava and the player has the lava resistance effect active.
            {
                color "fog_color" // The color that the fog will take on.
                float "fog_start" // The distance from the player that the fog will begin to appear. 'fog_start' must be less than or equal to 'fog_end'.
                float "fog_end"<0.000000-*> // The distance from the player that the fog will become fully opaque. 'fog_end' must be greater than or equal to 'fog_start'.
                string "render_distance_type"<"fixed", "render"> // Determines how distance value is used. Fixed distance is measured in blocks. Dynamic distance is multiplied by the current render distance.
            }
            object "powder_snow" : opt // The fog settings when the camera is inside a Powder Snow block.
            {
                color "fog_color" // The color that the fog will take on.
                float "fog_start" // The distance from the player that the fog will begin to appear. 'fog_start' must be less than or equal to 'fog_end'.
                float "fog_end"<0.000000-*> // The distance from the player that the fog will become fully opaque. 'fog_end' must be greater than or equal to 'fog_start'.
                string "render_distance_type"<"fixed", "render"> // Determines how distance value is used. Fixed distance is measured in blocks. Dynamic distance is multiplied by the current render distance.
            }
        }
        object "volumetric" : opt // The volumetric fog settings.
        {
            object "density" : opt // The density settings for different camera locations.
            {
                object "air" : opt // Fog density values as light passes through air blocks.
                {
                    float "max_density"<0.000000-1.000000> // The maximum amount of opaqueness that the ground fog will take on. A value from [0.0, 1.0].
                    float "max_density_height"<0.000000-320.000000> : opt // The height in blocks that the ground fog will become it's maximum density.
                    float "zero_density_height"<0.000000-320.000000> : opt // The height in blocks that the ground fog will be completely transparent and begin to appear. This value needs to be at least 1 higher than 'max_density_height'.
                    bool "uniform" : opt // When set to true, the density will be uniform across all heights.
                }
                object "water" : opt // Fog density values as light passes through water blocks.
                {
                    float "max_density"<0.000000-1.000000> // The maximum amount of opaqueness that the ground fog will take on. A value from [0.0, 1.0].
                    float "max_density_height"<0.000000-320.000000> : opt // The height in blocks that the ground fog will become it's maximum density.
                    float "zero_density_height"<0.000000-320.000000> : opt // The height in blocks that the ground fog will be completely transparent and begin to appear. This value needs to be at least 1 higher than 'max_density_height'.
                    bool "uniform" : opt // When set to true, the density will be uniform across all heights.
                }
                object "lava" : opt // Fog density values as light passes through lava blocks.
                {
                    float "max_density"<0.000000-1.000000> // The maximum amount of opaqueness that the ground fog will take on. A value from [0.0, 1.0].
                    float "max_density_height"<0.000000-320.000000> : opt // The height in blocks that the ground fog will become it's maximum density.
                    float "zero_density_height"<0.000000-320.000000> : opt // The height in blocks that the ground fog will be completely transparent and begin to appear. This value needs to be at least 1 higher than 'max_density_height'.
                    bool "uniform" : opt // When set to true, the density will be uniform across all heights.
                }
                object "lava_resistance" : opt // Fog density values as light passes through lava blocks while the player has lava resistance.
                {
                    float "max_density"<0.000000-1.000000> // The maximum amount of opaqueness that the ground fog will take on. A value from [0.0, 1.0].
                    float "max_density_height"<0.000000-320.000000> : opt // The height in blocks that the ground fog will become it's maximum density.
                    float "zero_density_height"<0.000000-320.000000> : opt // The height in blocks that the ground fog will be completely transparent and begin to appear. This value needs to be at least 1 higher than 'max_density_height'.
                    bool "uniform" : opt // When set to true, the density will be uniform across all heights.
                }
            }
            object "media_coefficients" : opt // The coefficient settings for the volumetric fog in different blocks.
            {
                object "air" : opt // Fog coefficient values while light passes through air.
                {
                    color "scattering" // Proportion of light that is scattered per block.
                    color "absorption" // Proportion of light that is absorbed (lost) per block.
                }
                object "water" : opt // Fog coefficient values while light passes through water.
                {
                    color "scattering" // Proportion of light that is scattered per block.
                    color "absorption" // Proportion of light that is absorbed (lost) per block.
                }
                object "cloud" : opt // Fog coefficient values while light passes through clouds.
                {
                    color "scattering" // Proportion of light that is scattered per block.
                    color "absorption" // Proportion of light that is absorbed (lost) per block.
                }
            }
        }
    }
}
```

## Active Fog Stack

The active fog stack is used to determine which fog setting to use at any given time in the game. Each player has a unique fog stack.

Whenever the game needs to determine the values for the fog, it will start at the top of the fog stack and check down it until it finds a value for the current setting type. If no fog settings on the stack are a match, the game will continue down the stack and check in. If it finds no matching setting, the game will use the defaults defined by the engine, instead.

The fog stack initially is set up as follows. Starting at the bottom:

- Engine Default: hard code values.
- Data Default: The default data driven settings.
- Biomes: The settings defined to be on each biome.
- Command: The settings set on the player by server commands.

### Biomes

The biome layer is an average of all the settings defined by the biomes around the player's position. The biome settings are defined in **biomes_client.json** as well for each individual biome.

### Command

The command layer is all the settings set by the **/fog** command and evaluated it as one stack from top to bottom. For more information, see the **Fog Command** section.

### Data Default

Defined in **biomes_client.json** under `default` if it references a fog definition via `fog_identifier`.

### Engine Default

Hard-coded values are used in case there are no data driven values; the Engine Default will be loaded if there is no matching fog setting when the game reaches the bottom of the fog stack.

## Fog in Biomes

Fog settings can be determined for the biomes with **biomes_client.json**. In each biome entry, you can have a variable called `fog_identifier` and set a name that matches the fog setting you want to use with this biome.

The `default` entry can also be set this way and will be used underneath the biomes entries in the active fog stack. A biome's fog setting does not completely replace the default setting, but instead the biome is read on top of the default as described in the **Active Fog Stack** section.

The `default` biome entry has the tag `remove_all_prior_fog` that is set to `false` by default.
While set to `false` (or if the tag is not entered), missing fog definitions will be filled in by any lower resource pack that does have the definition filled.
If set to `true`, all previous fog definitions in resource packs before the current pack that enabled it will be cleared, effectively making the current resource pack the new starting point for all fogs.

In each biome (including `default`) there is the tag `inherit_from_prior_fog` that is set to `false` by default.
While set to `false` (or if the tag is not entered), the current resource pack's biome will overwrite the currently stored `fog_identifier` tag with its own.
If set to `true`, the `fog_identifier` tags from all matching biomes will be added together and create a new merged fog definition for that biome.

## The Fog Command

The `/fog` command can be used to manage fog settings in the current layer of the active fog stack for each player.

Fog settings in this layer are ordered via the `push`, `pop`, and `remove` modes of the `/fog` command.

Fog settings are evaluated top-to bottom in the active fog stack which includes top-to-bottom in the current layer first.

Fog settings in this layer are saved and then restored on world load per player. A fog setting that is pushed before a world save will still apply after a world load and can then be popped.

### Push

Pushes a new fog setting onto the top of the Fog Command layers for a player's active fog stack, given that player's specified ID.

### Pop

Removes the top-most fog setting from a selected player, given that player's specified ID.

### Remove

Removes all matching fog settings (provided previously through one or more "/fog push" commands) from a selected player, given that player's specified ID.
