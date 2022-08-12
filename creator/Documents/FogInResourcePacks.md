---
author: mammerla
ms.author: v-jillheaden
title: Fog in Resource Packs
ms.prod: gaming
---

# Fog in Resource Packs

Fogs in Minecraft: Bedrock Edition use JSON files to determine their values. Creators can define their own sets of fog values in their resource packs. A new folder can be made at the root of a resource pack called `fogs`. Any JSON files within this folder will be registered as new fog definitions that can be used by the game.

:::image type="content" source="Media/FogResourcePack/Fog-in-Resource-Packs.jpg" alt-text="Image showing Steve running from spiders hiding in a fog":::

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - What a fog file looks like and what options are available for customization.
> - The order that fog is applied based on various features, including biome definitions and the `/fog` command.

### Requirements

It’s recommended that the following be completed before beginning this tutorial.

- [Introduction to Resource Packs](ResourcePack.md)

## JSON

### Example

The Vanilla Resource Pack template (found [here](https://aka.ms/resourcepacktemplate)) contains all of the fog files used in the game. These files can serve as examples for creating your own fog definitions. A completed fog file will look similar to the following:

```json
{
  "format_version": "1.16.100",
  "minecraft:fog_settings": {
    "description": {
      "identifier": "minecraft:fog_default"
    },
    "distance": {
      "air": {
        "fog_start": 0.92,
        "fog_end": 1.0,
        "fog_color": "#ABD2FF",
        "render_distance_type": "render"
      },
      "water": {
        "fog_start": 0,
        "fog_end": 60.0,
        "fog_color": "#44AFF5",
        "render_distance_type": "fixed",
        "transition_fog": {
          "init_fog": {
            "fog_start": 0.0,
            "fog_end": 0.01,
            "fog_color": "#44AFF5",
            "render_distance_type": "fixed"
          },
          "min_percent": 0.25,
          "mid_seconds": 5,
          "mid_percent": 0.6,
          "max_seconds": 30
        }
      },
      "weather": {
        "fog_start": 0.23,
        "fog_end": 0.7,
        "fog_color": "#666666",
        "render_distance_type": "render"
      },
      "lava": {
        "fog_start": 0.0,
        "fog_end": 0.64,
        "fog_color": "#991A00",
        "render_distance_type": "fixed"
      },
      "lava_resistance": {
        "fog_start": 2.0,
        "fog_end": 4.0,
        "fog_color": "#991A00",
        "render_distance_type": "fixed"
      }
    }
  }
}
```

## Variables

### format_version

The resource pack version that this fog setting was built for. This is used for determining upgrade paths and backwards compatibility in newer versions of the game. The minimum version is 1.16.100.

### minecraft:fog_settings

Contains the definitions and options of the fog.

### description

Holds the description for this fog setting, which primarily contains an identifier.

### identifier

Held within the `description` object.

The unique name to refer to this fog setting. Each identifier requires a namespace. You also must have each identifier be unique or you will get an error. The `minecraft` namespace is allowed to be used only by the vanilla resource packs.

```json
{
  "format_version": "1.16.100",
  "minecraft:fog_settings": {
    "description": {
      "identifier": "custom_pack:example"
    },
    ...
  }
}
```

### distance

This object contains the values for distance-based fog. This is the fog that limits the player from seeing anything beyond a specific distance from them. Each field within this object contains one type of distance value.

You can set the following types by name:

- `air`: used when the player's camera is in the air.
- `weather`: used when the player's camera is in the air and weather is currently active.
- `water`: used when the player's camera is in water.
- `lava`: used when the player's camera is in lava.
- `lava_resistance`: used when the player's camera is in lava and the Lava Resistance effect is active.

You can have one of each type as needed, though they are all optional.

```json
    "distance": {
      "air": {
        ...
      },
      "water": {
        ...
      }
    }
```

If you do not set a value here, the game will use the value set for the next-lowest priority fog setting. This is described in more detail later in the ["Active Fog Stack"](#active-fog-stack) section.

In each distance setting type, you can set the following variables:

- `fog_start`: The distance where the fog will begin to appear.
- `fog_end`: The distance where the fog will become completely opaque.
- `render_distance_type`: Setting this will determine how the start and end values are used for calculating the fog distances.
- `fixed`: The distance is measured in the number of blocks away.
- `render`: The distance is multiplied against the current render distance.
- `fog_color`: The color that the fog will take on.

#### transition_fog

>[!NOTE]
>`transition_fog` works only for fog in a **water** setting.

With `transition_fog` specified, players will see a fog transition from `init_fog` setting to the `water` setting when they move into water. The speed of transition can be controlled by `percent` and `second` values.

In each `transition_fog` setting type, you can set the following variables:

- `init_fog`: Initial fog that will slowly transition into water distance fog of the biome when player goes into water.
- `min_percent`: Minimum progress of fog transition.
- `mid_seconds`: The time takes to reach certain progress('mid_percent') of fog transition.
- `mid_percent`: The progress of fog transition after 'mid_seconds' seconds.
- `max_seconds`: Total amount of time it takes to complete the fog transition.

### volumetric

This object contains the values for volumetric fog. This fog will be displayed as a calculation from light passing through blocks. Currently this is only used for PBR (Ray Tracing) and is planned to be added to non-PBR later.

### density

Held within the `volumetric` object. Each field within it contains one type of density value.

You can set the following types by name:

- `air`: used when the player's camera is in the air.
- `weather`: used when the player's camera is in the air and weather is currently active.
- `water`: used when the player's camera is in water.
- `lava`: used when the player's camera is in lava.
- `lava_resistance`: used when the player's camera is in lava and they have the Lava Resistance effect active.

You can have one of each type as needed, though they are all optional.

```json
    "volumetric": {
      "density": {
        "air": {
          ...
        },
        "water": {
          ...
        }
      }
    }
```

If you do not set a value here, the game will use the value set for the next-lowest priority fog setting. This is described in more detail later in the ["Active Fog Stack"](#active-fog-stack) section.

In each density setting type, you can set the following variables:

- `max_density`: the multiplier on how much the fog disrupts the light. 0.0 will have no fog, and 1.0 will be near opaque.
- `uniform`: when set to `true`, the fog density will occur evenly across all heights.
- `zero_density_height`: the height in blocks that the fog will begin to appear. This can only be set if `uniform` is set to false.
- `max_density_height`: the height in blocks that the fog will become its `max_density`. This can be set only if `uniform` is set to false.

### media_coefficients

Held within the `volumetric` object.

Each field within this object defines one type of coefficient value. These are used to determine how the light is dispersed or refracted by the fog as rays travel through different mediums/blocks.

You can set the following types by name:

- `air`: used when light is passing through air.
- `water`: used when light is passing through water.
- `cloud`: used when light is passing through clouds.

You can have one of each type as needed, though they are all optional.

```json
    "volumetric": {
      "media_coefficients": {
        "air": {
          ...
        },
        "water": {
          ...
        }
      }
    }
```

If you do not set a value here, the game will use the value set for the next-lowest priority fog setting. This is described in more detail later in the ["Active Fog Stack"](#active-fog-stack) section.

In each coefficient setting type, you can set the following variables:

- `scattering`: how much of the RGB of the light the fog will spread. Either can be set as an array of 3 multipliers from [0.0, 1.0] or as a Hex color value.
- `absorption`: how much of the RGB of the light the fog will absorb. Either can be set as an array of 3 multipliers from [0.0, 1.0] or as a Hex color value.

## Active Fog Stack

The active fog stack is used to determine which fog setting to use at any given time in the game. Each player has a unique fog stack.

Whenever the game needs to determine the values for the fog, it will start at the top of the fog stack and check down it until it has found a value for the current setting type. If a fog setting on the stack does not have a setting, then the game will continue checking down the stack. If the game finds no such setting, it will instead use the defaults defined by the engine.

The fog stack is initially setup as follows, with the highest precedence starting at the top:

- Command: the settings set on the player by server commands.
- Biomes: the settings defined to be on each biome.
- Data Default: the default data driven settings.
- Engine Default: hard code values.

### Command

At the top of the stack, the command layer has all the settings set by the `/fog` command and is evaluated as one stack from top to bottom. More details about the command's usage is found in the ["Fog Command"](#fog-command) section.

### Biomes

The biome layer is an average of all the settings defined by the biomes around the player's position. Fog settings can be defined for each individual biome within the `biomes_client.json` file located at the root of a resource pack. In each biome entry, you can have a variable called `fog_identifier` and set a name that matches the fog setting you want to use with that biome.

```json
{
  "biomes": {
    ...
    "ice_plains": {
      "fog_identifier": "minecraft:fog_ice_plains",
      ...
    },
    ...
    "mesa_plateau": {
      "fog_identifier": "minecraft:fog_mesa_plateau",
      ...
    },
    ...
  }
}
```

The `default` entry can also be set this way and will be used underneath the biome entries in the active fog stack. So, a biome's fog setting does not completely replace the default setting, but instead the biome is read on top of the default as described in the ["Data Default"](#data-default) section.

### Data Default

The data default layer is defined within the `default` object in the `biomes_client.json` file in the root of a resource pack, provided that it references a fog definition via the `fog_identifier` field.

```json
{
  "biomes": {
    "default": {
      "fog_identifier": "minecraft:fog_default",
      ...
    }
  },
  ...
}
```

### Engine Default

The bottom of the stack uses hard-coded values in case there are no data driven values. As such, these cannot be changed and there cannot be any layers beneath it.

## Fog Command

The `/fog` command can be used to manage fog settings at the ["command"](#command) layer of the active fog stack for each player.

Fog settings in this layer are ordered via the `push`, `pop`, and `remove` modes of the `/fog` command described below. Fog settings are evaluated top-to-bottom in the active fog stack which includes top-to-bottom in this layer first.

Fog settings in this layer are saved and then restored on world load per player. In this way, a fog setting that is pushed before a world save will still apply after a world load and can then be popped.

### Push

Pushes a new fog setting to specified player(s), along with a user provided ID, onto the top of the Fog Command layers of the players' active fog stacks.

### Pop

Removes the top-most fog setting from selected player(s) that matches the user provided ID, as provided previously via a `/fog push` command.

### Remove

Removes all matching fog settings, from the selected player(s), that matches the user-provided ID, as as provided previously via one or more `/fog push` commands.
