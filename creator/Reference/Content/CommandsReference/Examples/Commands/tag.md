---
author: mammerla
ms.author: mikeam
title: "tag Command"
description: "Description and usage of the /tag command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/tag` Command

Manages tags stored in entities.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/tag <entity: target> change <name: tagvalues>`

`/tag <entity: target> list`

## Usage

### Add or remove tag

`/tag <entity: target> change <name: tagvalues>`

Add or remove a `tag` on an `entity`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required | The command's target. |
| name | tagvalues | Required | The `tag` name. |

### List tags

`/tag <entity: target> list`

List all `tags` on a given `entity`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| entity | [Entity Selector](../CommandTypes/type_selection.md) | Required | The command's target. |

## Examples

### Add the 'marked' tag to yourself

```
/tag @s add marked
```

### Tag all villagers as 'protected'

```
/tag @e[type=villager] add protected
```

### Remove the 'marked' tag from yourself

```
/tag @s remove marked
```

### List all tags on yourself

```
/tag @s list
```

### Add 'glowing' tag to zombies that are tagged 'boss'

```
/tag @e[type=zombie,tag=boss] add glowing
```

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| entity | [Entity Selector](../CommandTypes/type_selection.md) | The command's target. |
| name | tagvalues | The `tag` name. |
