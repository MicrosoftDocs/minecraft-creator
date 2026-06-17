---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:wearable"
description: "Describes the minecraft:wearable item component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:wearable

Sets the wearable item component, which allows an item to be worn by a player in a specified equipment slot.

> [!Note]
> Valid equipment slots are: slot.armor.head, slot.armor.chest, slot.armor.legs, slot.armor.feet, slot.armor.body, and slot.weapon.offhand. When a non-hand armor slot is used, the max stack size is automatically set to 1.

> [!Note]
> Fixed in format version 1.26.30: when a non-hand slot is selected, `minecraft:wearable` no longer silently overrides an explicit `minecraft:max_stack_size` of 1. Custom items can again declare their own stack size alongside an armor slot without producing inconsistent behavior.

> [!Note]
> This item requires a format version of at least 1.20.30.


## Item Wearable Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| hides_player_location | false | Boolean true/false | Determines whether the Player's location is hidden on Locator Maps and the Locator Bar when the wearable item is worn. Default is false. | 
| protection | 0 | Integer number | How much protection the wearable item provides. Default is set to 0. | 
| slot | *not set* | [Slot](#slot-choices) choices | Specifies where the item can be worn. If any non-hand slot is chosen, the max stack size is set to 1. | 
| dispensable | *not set* | Boolean true/false |  | 

### Slot choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| slot.armor.body | Slot.armor.body | |
| slot.armor.chest | Slot.armor.chest | |
| slot.armor.feet | Slot.armor.feet | |
| slot.armor.head | Slot.armor.head | |
| slot.armor.legs | Slot.armor.legs | |
| slot.weapon.mainhand | Slot.weapon.mainhand | |
| slot.weapon.offhand | Slot.weapon.offhand | |

## Samples
