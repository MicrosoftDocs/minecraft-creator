---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: ride Command
description: Description and usage of the ride command
---
# `/ride` Command
Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders.

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
### Start ride
`/ride <riders: target> start_riding <ride: target> [teleportRules: TeleportRules] [howToFill: FillType]`

Start `ride` with `riders`, something to `ride`, and optional `teleport rules` and `fill type`.

### Stop riding
`/ride <riders: target> stop_riding`

Stop `riders` from riding.

### Evict rider
`/ride <rides: target> evict_riders`

Evict riders from ride.

### Summon ride, optional spawn event
`/ride <rides: target> summon_rider <entityType: EntityType> [spawnEvent: string] [nameTag: string]`

Summon an `entity` to ride with optional `spawn event` and `nametag`.

### Summon rider, optional ride rules, spawn event
`/ride <riders: target> summon_ride <entityType: EntityType> [rideRules: RideRules] [spawnEvent: string] [nameTag: string]`

Summon a ride of `entity` type with optional `ride rules`, `spawn event`, and `nametag`.

## Arguments
- `entityType`: [EntityType](../enums/EntityType.md)
Specifies entities to summon. Must be the name`ID`of something that can be summoned.
- `howToFill`: FillType
One of `if_group_fits` to check whether riders can ride and only makes them ride if possible. Or `until_full` which makes them ride until rides is full.
Default: `until_full`.
- `nameTag`: string
Specifies the name of summoned entities.
- `ride`: target
Specifies the entity to ride on. A player name or [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors).
- `riders`: target
Specifies riders using player name or [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors)s.
- `rideRules`: RideRules
Ride rules
- `rides`: target
Specifies the ridden entities. Must be a player name or entity selector.
- `spawnEvent`: string
Specifies the in-game event to call the summoned entities. Must be a spawn event in behavior pack.
- `teleportRules`: TeleportRules
Either `teleport_ride` or `teleport_rider` (default).

## Enums
### `FillType`
One of `if_group_fits` to check whether riders can ride and only makes them ride if possible. Or `until_full` which makes them ride until rides is full.

#### Values
- `until_full`
Until Full - riders can ride until rides are all full
- `if_group_fits`
If Group Fits - check whether riders can ride and only makes them ride if possible

### `RideRules`
Enum of Ride Rules

#### Values
- `no_ride_change`
`No Ride Change` summons a ride only for entities that are neither riding on nor being ridden by another entity.
- `reassign_rides`
`Reassign Rides` makes all riders dismount, then summons a ride for each entity.
- `skip_riders`
`Skip Riders` skips summoning a ride for players who are already riding other entities.

### `TeleportRules`
Enum of Teleport Rules

#### Values
- `teleport_rider`
Teleport the rider
- `teleport_ride`
Teleport the rideable entity
