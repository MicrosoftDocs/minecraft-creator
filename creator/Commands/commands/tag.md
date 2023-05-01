---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: tag Command
description: Description and usage of the tag command
---
# `/tag` Command
Manages tags stored in entities.

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
### Add or remove tag
`/tag <entity: targets> <action: TagChangeAction> <name: TagValues>`

Add or remove a `tag` on an `entity`.

### List tags
`/tag <entity: targets> list`

List all `tags` on a given `entity`.

## Arguments
- `action`: TagChangeAction

- `entity`: targets
The command's target.
- `name`: TagValues


## Enums
### `TagChangeAction`
Enum of Tag Change Actions

#### Values
- `add`
Add
- `remove`
Remove
