---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: hud Command
description: Description and usage of the hud command
---
# `/hud` Command
Configures whether elements of the on-screen display (alternately known as the 'heads up display', or 'HUD') are visible on the screen.

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
### Configures HUD element visibility for a selection of players.
`/hud <target: target> <visible: HudVisibility> [hud_element: HudElement]`

Configures HUD element visibility for a selection of players.

## Arguments
- `hud_element`: HudElement
- `target`: target
Selector of the player(s) to toggle visibility for.
- `visible`: HudVisibility
State to change the HUD element visibility to.

## Enums
### `HudElement`
An enumeration of elements of the on-screen (or 'HUD') display.

#### Values
- `hunger`
Hunger bar element.
- `all`
All elements of the HUD.
- `paperdoll`
'Paper doll' on-screen representation of the player.
- `armor`
Armor element on the HUD.
- `tooltips`
Tool tip elements of the HUD.
- `touch_controls`
Touch controls elements of the HUD. Depending on the players' platform, these elements may never show up.
- `crosshair`
Cross-hair section of the HUD.
- `hotbar`
Hotbar inventory area element of the HUD.
- `health`
Health element of the HUD.
- `progress_bar`
Progress bar element of the HUD.
- `air_bubbles`
Air bubble status element of the HUD.
- `horse_health`
Visual representation of the players' ride element of the HUD.
- `status_effects`
- `item_text`

### `HudVisibility`
Enumeration for HUD visibility states.

#### Values
- `hide`
Hides the HUD element.
- `reset`
Resets the HUD element visibility back to its default state (which is that HUD elements should be visible if no options are toggled in settings.)
