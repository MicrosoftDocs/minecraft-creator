---
author: v-jillheaden
ms.author: v-jillheaden
title: RTX PBR Fog Customization
ms.prod: gaming
description: RTX Physcially-Based Rendering
---

# RTX PBR Fog Customization

On top of prettifying textures with PBR enhancements, PBR-enhanced resource packs can also add custom fog definitions and apply them through the new fog stack (for further info, head to Minecraft.net). This fog stack is ordered by lowest priority to highest:

### Hardcoded Engine defaults

Data Default settings from “default” object within biomes_client.json
Per-Biome settings in biomes_client.json
/fog Command
Both biomes_client.json and /fog Command refer to Fog Definitions which are defined in JSON with the “fog” folder of Resource Packs.

### Fog Definitions

Each Fog Definition is a JSON file in the “fog” folder of a Resource Pack. An example looks like:

```json
{
    "format_version": "1.16.2100",
    "minecraft:fog_settings": {
        "description": { "identifier": "nvidia:example_fog" },
        "distance": {
            "air": {
                "fog_start": 0.92,
                "fog_end": 1.0,
                "fog_color": "#ABD2FF",
                "render_distance_type": "render"
            }
        },
        "volumetric": {
            "max_density": {
                "air": {
                    "max_density": 0.1,
                    "max_density_height": 56,
                    "zero_density_height": 70
                }
            },
            "media_coefficients": {
                "air": {
                    "scattering": [ 0.02, 0.02, 0.02 ],
                    "absorption": [ 0.0, 0.0, 0.0 ]
                }
            }
        }
    }
}
```

### The schema for a Fog Definition.

format_version: The schema version this JSON was written for.
minecraft:fog_settings: An entry for the fog definition.

**Description**

- identifier: A quoted unique name, prefixed with a namespace followed by a colon. The unique identifier is used to refer to a Fog Definition, e.g. from biomes_client.json and from the /fog Command.
- distance: An optional object containing settings for distance fog that limits the player’s view from seeing anything beyond a specific distance from their camera. Contains a group of one or more optional, enumerated objects:
- air: When the player’s camera is in air.
- weather: When the player’s camera is in air with active weather (e.g. rain or snow).
- water: When the player’s camera is in water.
- lava: When the player’s camera is in lava.
lava_resistance: When the player’s camera is in lava while under the effects of the “Fire Resistance” buff.

Each enumerated object has the following distance values:

- fog_start: Distance in units or percentage where the fog begins solidifying.
- fog_end: Distance in units or percentage where fog becomes fully opaque.
render_distance_type: Either fixed or render:
- fixed : The distance values are units and applied as blocks from the player’s camera.
- render: The distance values are percentages, in range of 0.0 to 1.0, and are multiplied against the client’s render distance setting.
- fog_color: the color of the fog as a square bracketed list of 3 values in the range of 0 to 255; or as a quoted hexadecimal RGB value following a pound sign.
- volumetric: An optional object containing settings for volumetric fog which is calculated as light passing through blocks:
- density: An optional object containing settings for height-based fog. Contains a group of one or more optional, enumerated objects:
- air: When the player’s camera is in air.
- weather: When the player’s camera is in air with active weather (e.g. rain or snow).
- water: When the player’s camera is in water.
- lava: When the player’s camera is in lava.
- lava_resistance: When the player’s camera is in lava while under the effects of the “Fire Resistance” buff.

Each enumerated object has the following density and height values:

- max_density: A fractional value to multiply the fog density. 0 will have zero fog and 1 will have completely opaque fog.
- uniform: A boolean value: false scales the fog density based on depth into the enumerated medium and true makes the fog distribute evenly across height, ignoring the values of zero_density_height and max_density_height.
- zero_density_height: Height in blocks where the fog starts densifying. Ignored if uniform is true.
- max_density_height: Height in blocks where the fog stops densifying. Ignored if uniform is true.
- media_coefficients: An optional object containing settings for how light is dispersed and refracted by density fog as rays travel through various mediums. Contains a group of one or more optional, enumerated objects:
- air: used when light is passing through air.
- water: used when light is passing through water.
- cloud: used when light is passing through clouds.

Each enumerated object has the following coefficient settings:

- scattering:  A square bracketed list of 3 values for red, green, and blue colors to spread for the light passing through the enumerated medium. These values range between 0.0 and 1.0. It can also instead be a quoted hexadecimal RGB value following a pound sign.
- absorption: A square bracketed list of 3 values for red, green, and blue colors to absorb for the light passing through the enumerated medium. These values range between 0.0 and 1.0. It can also instead be a quoted hexadecimal RGB value following a pound sign.

### Biomes

The biome layer of the Active Fog Stack is an average of settings from biomes around the player’s position. Each biome, in biomes_client.json,may reference a Fog Definition by its unique identifier for applying biome specific fog settings.

### Fog Command

The /fog Command can further manage which Fog Definitions are applied to the Active Fog Stack for each player.

Fog settings within this layer of the stack are ordered via push, pop, & remove modes the /fog Command.

- push: applies a fog definition, along with a user-provided ID, onto the top of the Fog Command layer(s) of the selected player(s).

- pop: removes the top-most fog definition, from the selected player(s), that matches the user-provided ID (i.e. as provided previously via a /fog Command using the push mode).

- remove : removes all fog definitions, from the selected player(s), that matches the user-provided ID.

The state of players’ Fog Command layer of the Active Fog Stack is saved and loaded for each player throughout play sessions of a world.