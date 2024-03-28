---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
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
- `piston`
Piston
- `lava`
Lava
- `campfire`
- `fire`
Fire
- `anvil`
Anvil
- `magma`
Magma
- `soul_campfire`
- `wither`
Wither
- `falling_block`
Falling Block
- `fireworks`
Fireworks
- `thorns`
Thorns
- `none`
None
- `sonic_boom`
- `contact`
Contact
- `override`
Override
- `entity_attack`
Entity Attack
- `projectile`
Projectile
- `suffocation`
Suffocation
- `fall`
Fall
- `starve`
Starve
- `ram_attack`
- `fire_tick`
Fire Tick
- `stalactite`
Stalactite
- `drowning`
Drowning
- `block_explosion`
Block Explosion
- `entity_explosion`
Entity Explosion
- `void`
Void
- `self_destruct`
- `magic`
Magic
- `charging`
Charging
- `stalagmite`
Stalagmite
- `fly_into_wall`
Fly into Wall
- `lightning`
Lightning
- `freezing`
Freezing
- `temperature`
Temperature
