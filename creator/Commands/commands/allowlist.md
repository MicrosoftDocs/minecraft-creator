---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: allowlist Command
description: Description and usage of the allowlist command
---
# `/allowlist` Command
Manages the server allowlist.

<table>
  <tr>
    <th>Aliases</th>
    <td>/whitelist</td>
  </tr>
  <tr>
    <th>Permission Level</th>
    <td>Owner</td>
  </tr>
  <tr>
    <th>Requires Cheats?</th>
    <td>Yes</td>
  </tr>
</table>

## Usage
### Action
`/allowlist <action: AllowListAction> [name: string]`

The overload must include an action.

## Arguments
- `action`: AllowListAction
Required. Adding a player, removing a player, reloading the allowlist, or listing all players on it.
- `name`: string
Optional. The players on the allowlist. Must be a valid player name.

## Enums
### `AllowListAction`
May be type `list`, `on`, `off`, `add`, `remove`, or `reload.`

#### Values
- `add`
Adds a player to the allowlist if they are not included.
- `list`
List the player names, uuids, or xuids.
- `off`
Disables the allowlist.
- `on`
Enables the allowlist.
- `reload`
Reloads the allowlist file.
- `remove`
Removes a player from the allowlist if they are on it.
