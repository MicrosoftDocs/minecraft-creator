---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: inputpermission Command
description: Description and usage of the inputpermission command
---
# `/inputpermission` Command
Optionally enables or disables input permissions for a player.

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
### Set input permission
`/inputpermission set <targets: target> <permission: permission> <state: state>`

Sets the input permission for the selection to a state.

### Query input permission
`/inputpermission query <targets: target> <permission: permission> [state: state]`

Retrieves the permissions of entities that match the selection.

## Arguments
- `permission`: permission
- `state`: state
- `targets`: target

## Enums
### `permission`
Permission type to set.

#### Values
- `movement`
- `camera`

### `state`
State value to set for the permission.

#### Values
- `enabled`
- `disabled`
