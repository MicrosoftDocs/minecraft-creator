---
author: JimSeaman42
ms.author: mikeam
title: Fog JSON and Introduction to Fogs
description: "A reference document introducing the concept of fogs"
ms.service: minecraft-bedrock-edition
---

# Fog JSON and Introduction to Fogs

Fogs are a rendering feature that can be used to obscure a player's view distance, for example to occlude boundaries such as unloaded chunks beyond the render distance. Alternatively, fogs can be used to great effect in producing an atmospheric ambience. There are several types of fogs that can be used to produce a desired effect.

Fogs are set up in the resource pack, in individual JSON files under the **fogs** directory.

## Active Fog Stack

The active fog stack is used to determine which fog setting to use at any given time. Each player has a unique fog stack.

Whenever the game needs to determine fog values, it will start at the top of the fog stack and check until it finds a value for the current setting type. If no fog settings on the stack are a match, the game will use the defaults defined by the engine.

The fog stack is initially set up as follows:

- Command: The settings set on the player by server commands.
- Biomes: The settings defined to occur on each biome.
- Data Default: The default data-driven settings.
- Engine Default: Hard-coded values.

### Biomes

The biome layer is an average of all settings defined by the biomes around a player's position. The biome settings are defined in **biomes_client.json** for each individual biome.

### Command

The command layer includes all settings initiated by the **/fog** command, evaluated as one stack from top to bottom. For more information, see the **Fog Command** section.

### Data Default

The data default is defined in **biomes_client.json** under `default` if referencing a fog definition via `fog_identifier`.

### Engine Default

Hard-coded values are used when there are no data-driven values; the Engine Default will be loaded if there is no matching fog setting when the game reaches the bottom of the fog stack.

## Fog in Biomes

Fog settings can be determined for biomes with **biomes_client.json**. In each biome entry, you can have a variable called `fog_identifier` and set a name that matches the fog setting.

The `default` entry can also be set this way and will be used underneath the biome entries in the active fog stack. A biome fog setting does not completely replace the default setting, but instead is read on top of the default as described in the **Active Fog Stack** section.

The `default` biome entry has the tag `remove_all_prior_fog` that is set to `false` by default.
While set to `false` (or if the tag is not entered), missing fog definitions will be filled in by any lower resource pack that has the definition entered.
If set to `true`, all previous fog definitions in resource packs before the current pack will be cleared, effectively making the current resource pack the new starting point for all fogs.

In each biome (including `default`) there is a `inherit_from_prior_fog` tag that is set to `false` by default.
While set to `false` (or if the tag is not entered), the current resource pack's biome will overwrite the currently stored `fog_identifier` tag with its own.
If set to `true`, the `fog_identifier` tags from all matching biomes will be combined and create a new merged fog definition for that biome.

## The Fog Command

The `/fog` command can be used to manage fog settings in the current layer of the active fog stack for each player.

Fog settings in this layer are ordered via the `push`, `pop`, and `remove` modes of the `/fog` command.

Fog settings are evaluated top-to bottom in the active fog stack, which includes top-to-bottom in the current layer first.

Fog settings in this layer are saved and then restored per player on world load. A fog setting that is pushed before a world save will still apply after a world load and can then be popped.

-**Push:** Pushes a new fog setting onto the top of the Fog Command layers for a player's active fog stack.
-**Pop:** Removes the top-most fog setting from a selected player.
-**Remove:** Removes all matching fog settings provided previously through "/fog push" commands from a selected player.