---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: damage Command
description: Description and usage of the damage command
---
# `/damage` Command
Apply damage to the specified entities. See more in the [Damage Command documentation](https://learn.microsoft.com/minecraft/creator/documents/commandsdamageintroduction).

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
### Damage with optional cause
`/damage <target: target> <amount: int> [cause: DamageCause]`

Damage a target with an amount of damage. Optionally include a cause.

### Damage with optional cause, entity, damager
`/damage <target: target> <amount: int> <cause: DamageCause> entity <damager: target>`

Damage a target with an amount of damage. Optionally include a cause, entity, and damager.

## Arguments
- `amount`: int
Required. Default `0`. An `integer` that specifies the amount of damage.
- `cause`: DamageCause
Optional. Default `none`. An `enum` of the damage cause.
- `damager`: target
A `selector` that specifies which entity will be treated as dealing the damage to the target. Should be one entity or player.
- `target`: target
Required. The target to damage. A player name or [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors).

## Enums
### `DamageCause`
When using the Damage command, this specifies the type of damage being dealt.

#### Values
- `anvil`
Anvil
- `block_explosion`
Block Explosion
- `charging`
Charging
- `contact`
Contact
- `drowning`
Drowning
- `entity_attack`
Entity Attack
- `entity_explosion`
Entity Explosion
- `fall`
Fall
- `falling_block`
Falling Block
- `fire`
Fire
- `fire_tick`
Fire Tick
- `fireworks`
Fireworks
- `fly_into_wall`
Fly into Wall
- `freezing`
Freezing
- `lava`
Lava
- `lightning`
Lightning
- `magic`
Magic
- `magma`
Magma
- `none`
None
- `override`
Override
- `piston`
Piston
- `projectile`
Projectile
- `stalactite`
Stalactite
- `stalagmite`
Stalagmite
- `starve`
Starve
- `suffocation`
Suffocation
- `suicide`
Suicide
- `temperature`
Temperature
- `thorns`
Thorns
- `void`
Void
- `wither`
Wither
