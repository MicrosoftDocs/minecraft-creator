---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: effect Command
description: Description and usage of the effect command
---
# `/effect` Command
Add or clear status effects.

<table>
  <tr>
    <th>Permission Level</th>
    <td>Game Directors</td>
  </tr>
  <tr>
    <th>Requires Cheats?</th>
    <td>Yes</td>
  </tr>
</table>

## Usage
### Clear effect
`/effect <player: target> clear`

Clear the effect for a target player.

### Add effect
`/effect <player: target> <effect: Effect> [seconds: int] [amplifier: int] [hideParticles: Boolean]`

Add effect to target player with optional `seconds`, `amplifier`, and `hideParticles`.

## Arguments
- `amplifier`: int
An `integer` that may have been applied to this effect. Sample values range typically from 0 to 4.
Default: `0`.
- `effect`: Effect
An `enum` to specify the effect being added or removed.
- `hideParticles`: [Boolean](../enums/Boolean.md)
A `Boolean` that specifies the visual representation of the effect.
Default: `false`.
- `player`: target
The player to receive the effect. A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player.
- `seconds`: int
An `integer` that specifies the duration, in seconds, of this effect.
Default: `30`.

## Enums
### `Effect`
Effect

#### Values
- `wither`
Wither
- `speed`
Speed
- `slowness`
Slowness
- `haste`
Haste
- `mining_fatigue`
Mining Fatigue
- `strength`
Strength
- `instant_health`
Instant Health
- `instant_damage`
Instant Damage
- `jump_boost`
Jump Boost
- `nausea`
Nausea
- `regeneration`
Regeneration
- `resistance`
Resistance
- `fire_resistance`
Fire Resistance
- `water_breathing`
Water Breathing
- `invisibility`
Invisibility
- `blindness`
Blindness
- `night_vision`
Night Vision
- `hunger`
Hunger
- `weakness`
Weakness
- `poison`
Poison
- `health_boost`
Health Boost
- `absorption`
Absorption
- `saturation`
Saturation
- `levitation`
Levitation
- `fatal_poison`
Fatal Poison
- `conduit_power`
Conduit Power
- `slow_falling`
Slow Falling
- `bad_omen`
Bad Omen
- `village_hero`
Village Hero
- `darkness`
Darkness
- `trial_omen`
- `wind_charged`
- `weaving`
- `oozing`
- `infested`
- `raid_omen`
