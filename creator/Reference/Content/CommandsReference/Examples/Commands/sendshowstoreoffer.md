---
author: mammerla
ms.author: mikeam
title: "sendshowstoreoffer Command"
description: "Description and usage of the /sendshowstoreoffer command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/sendshowstoreoffer` Command

Available on dedicated server only with administrator permissions. Specifies that a marketplace page should be opened up.

| | |
|:---|:---|
| **Permission Level** | Owner |
| **Requires Cheats** | Yes |

## Syntax Overview

`/sendshowstoreoffer <player: target> <redirectType: redirectlocation> <offerId: id>`

`/sendshowstoreoffer <player: target> <redirectType: redirectlocation>`

## Usage

### Shows a redirected offer with an identifier

`/sendshowstoreoffer <player: target> <redirectType: redirectlocation> <offerId: id>`

Shows an offer page with a redirection to a specific offer.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| player | [Entity Selector](../CommandTypes/type_selection.md) | Required | Player to send the dialog to. |
| redirectType | redirectlocation | Required |  |
| offerId | [Identifier](../CommandTypes/type_id.md) | Required |  |

### Shows a redirection to a type of offer

`/sendshowstoreoffer <player: target> <redirectType: redirectlocation>`

Redirects the player to a set of marketplace offers.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| player | [Entity Selector](../CommandTypes/type_selection.md) | Required | Player to send the dialog to. |
| redirectType | redirectlocation | Required |  |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| offerId | [Identifier](../CommandTypes/type_id.md) |  |
| player | [Entity Selector](../CommandTypes/type_selection.md) | Player to send the dialog to. |
| redirectType | redirectlocation |  |
