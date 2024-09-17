---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: sendshowstoreoffer Command
description: Description and usage of the sendshowstoreoffer command
---
# `/sendshowstoreoffer` Command
Available on dedicated server only with administrator permissions. Specifies that a marketplace page should be opened up.

<table>
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
### Shows a redirected offer with an identifier
`/sendshowstoreoffer <player: target> <redirectType: RedirectLocation> <offerId: string>`

Shows an offer page with a redirection to a specific offer.

### Shows a redirection to a type of offer
`/sendshowstoreoffer <player: target> server`

Redirects the player to a set of marketplace offers.

## Arguments
- `offerId`: string
- `player`: target
Player to send the dialog to.
- `redirectType`: RedirectLocation

## Enums
### `RedirectLocation`
Section of the marketplace to show the player relevant information for

#### Values
- `marketplace`
Marketplace
- `character`
Character selector/designer
