---
author: mammerla
ms.author: mikeam
title: "help Command"
description: "Description and usage of the /help command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/help` Command

Running `/help` in the chat by itself will list every command you can run. However, since there are so many, they have been divided up into several pages, where you are shown only one page at a time. Supplying a page number will change which page of commands to show.

Whenever you want to know the usage and all of the syntaxes of a command, you can use /help followed by the name of the command. This can be helpful if you want an overview of the command.

See more in the [Popular Commands documentation](https://learn.microsoft.com/minecraft/creator/documents/commandspopularcommands#help).

**Aliases:** `/?`

| | |
|:---|:---|
| **Permission Level** | Any |
| **Requires Cheats** | No |

## Sub-commands

- [**command**](#command) — An optional `enum` that defines the command to be called.
- [**page**](#page) — Changes which page of commands to show.

## command

An optional `enum` that defines the command to be called.

`/help [command: commandname]`

Show `help` information for a `command`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| command | commandname | Optional | An optional `enum` that defines the command to be called. |

## page

Changes which page of commands to show. Numbers smaller than the pages will be page 1, and larger will be the last page. Default: `1`.

`/help <page: int>`

Show a `page` of help options.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| page | [int](../CommandTypes/type_int.md) | Required | Changes which page of commands to show. Numbers smaller than the pages will be page 1, and larger will be the last page. Default: `1`. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| command | commandname | An optional `enum` that defines the command to be called. |
| page | [int](../CommandTypes/type_int.md) | Changes which page of commands to show. Numbers smaller than the pages will be page 1, and larger will be the last page. Default: `1`. |
