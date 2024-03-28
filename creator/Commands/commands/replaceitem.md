---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: replaceitem Command
description: Description and usage of the replaceitem command
---
# `/replaceitem` Command
Replaces items in inventories.

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
### Replace item
`/replaceitem block <position: x y z> slot.container <slotId: int> <itemName: Item> [amount: int] [data: int] [components: json]`

Replace an `item` at a required `position` into the slot with type `slot id`, `item name`, `amount`, `data`, and `components`.

### Replace entity
`/replaceitem entity <target: target> <slotType: EntityEquipmentSlot> <slotId: int> <itemName: Item> [amount: int] [data: int] [components: json]`

Replace item on an `entity` `target` into the slot with type `slot id` or `slot type`, `item name`,  with optional `amount`, `data`, and `components`.

### Replace block, old item handling
`/replaceitem block <position: x y z> slot.container <slotId: int> <oldItemHandling: ReplaceMode> <itemName: Item> [amount: int] [data: int] [components: json]`

Replace `item` at a required `position` into the slot with type `slot id`, using old item handling to replace with an `item name`, `amount`, `data`, and `components`.

### Replace entity, old item handling
`/replaceitem entity <target: target> <slotType: EntityEquipmentSlot> <slotId: int> <oldItemHandling: ReplaceMode> <itemName: Item> [amount: int] [data: int] [components: json]`

Replace an `entity` with required `target`, into the slot with type `slot id` or `slot type`, `item name`, using `old item handling` to replace with optional `amount`, `data`, and `components`.

## Arguments
- `amount`: int
An `integer` to specify the number of items to place in inventory.
Default: `1`.
- `components`: json
A `JSON` object that supports `minecraft:can_place_on`, `minecraft:can_destroy`, `minecraft:item_lock`, and `minecraft:keep_on_death`.
Default: `false`.
- `data`: int
An `integer` that specifies the item data for the items in the inventory.
Default: `0`.
- `itemName`: [Item](../enums/Item.md)
Specifies the item to be placed in the entity or block inventory slot.
- `oldItemHandling`: ReplaceMode
Either `destroy` to replace items in slot or `keep` to keep items instead of replacing them.
- `position: x y z`: position
`Vector` [x y z] of the position of the block to modify.
- `slotId`: int
An `integer` that sets the slot to be modified.
Default: `0`.
- `slotType`: [EntityEquipmentSlot](../enums/EntityEquipmentSlot.md)
Entity equipment slot
- `target`: target
Specifies the entity to modify, either a player name or a [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors).

## Enums
### `ReplaceMode`
Enum of Replace Modes

#### Values
- `destroy`
Destroy
- `keep`
Keep
