---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
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
- `absorption`
Absorption
- `bad_omen`
Bad Omen
- `blindness`
Blindness
- `conduit_power`
Conduit Power
- `darkness`
Darkness
- `fatal_poison`
Fatal Poison
- `fire_resistance`
Fire Resistance
- `haste`
Haste
- `health_boost`
Health Boost
- `hunger`
Hunger
- `instant_damage`
Instant Damage
- `instant_health`
Instant Health
- `invisibility`
Invisibility
- `jump_boost`
Jump Boost
- `levitation`
Levitation
- `mining_fatigue`
Mining Fatigue
- `nausea`
Nausea
- `night_vision`
Night Vision
- `poison`
Poison
- `regeneration`
Regeneration
- `resistance`
Resistance
- `saturation`
Saturation
- `slow_falling`
Slow Falling
- `slowness`
Slowness
- `speed`
Speed
- `strength`
Strength
- `village_hero`
Village Hero
- `water_breathing`
Water Breathing
- `weakness`
Weakness
- `wither`
Wither
