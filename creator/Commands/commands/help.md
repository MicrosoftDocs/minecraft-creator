---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: help Command
description: Description and usage of the help command
---
# `/help` Command
Running `/help` in the chat by itself will list every command you can run. However, since there are so many, they have been divided up into several pages, where you are shown only one page at a time. Supplying a page number will change which page of commands to show.

Whenever you want to know the usage and all of the syntaxes of a command, you can use /help followed by the name of the command. This can be helpful if you want an overview of the command.

See more in the [Popular Commands documentation](https://learn.microsoft.com/minecraft/creator/documents/commandspopularcommands#help).

<table>
  <tr>
    <th>Aliases</th>
    <td>/?</td>
  </tr>
  <tr>
    <th>Permission Level</th>
    <td>Any</td>
  </tr>
  <tr>
    <th>Requires Cheats?</th>
    <td>No</td>
  </tr>
</table>

## Usage
### Show command help
`/help [command: CommandName]`

Show `help` information for a `command`.

### Show help page
`/help <page: int>`

Show a `page` of help options.

## Arguments
- `command`: CommandName
An optional `enum` that defines the command to be called.
- `page`: int
Changes which page of commands to show. Numbers smaller than the pages will be page 1, and larger will be the last page.
Default: `1`.

## Enums
### `CommandName`
Command name enumeration