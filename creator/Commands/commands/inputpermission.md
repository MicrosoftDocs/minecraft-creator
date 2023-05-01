---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: inputpermission Command
description: Description and usage of the inputpermission command
---
# `/inputpermission` Command
Sets whether or not a player's input can affect their character.

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
### `/inputpermission set <targets: target> <permission: permission> <state: state>`

### `/inputpermission query <targets: target> <permission: permission> [state: state]`

## Arguments
- `permission`: permission
- `state`: state
- `targets`: target

## Enums
### `permission`

#### Values
- `movement`
- `camera`

### `state`

#### Values
- `enabled`
- `disabled`
