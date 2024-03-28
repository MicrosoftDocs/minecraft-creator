---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: permission Command
description: Description and usage of the permission command
---
# `/permission` Command
Reloads and applies permissions. This command is for use on a dedicated server only.

<table>
  <tr>
    <th>Aliases</th>
    <td>/ops</td>
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
### Permission
`/permission <action: PermissionsAction>`

Call a `permission` `action`.

## Arguments
- `action`: PermissionsAction
Either `list` to list the permissions, `set` to set their permissions, or `reload` to reload a server's permissions file.

## Enums
### `PermissionsAction`
Enum of Permission Actions

#### Values
- `list`
List
- `reload`
Reload
