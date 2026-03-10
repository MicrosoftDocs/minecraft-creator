---
author: mammerla
ms.author: mikeam
title: "replaceitem Command"
description: "Description and usage of the /replaceitem command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/replaceitem` Command

Replaces items in inventories.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Sub-commands

- [**block**](#block)
- [**entity**](#entity) — Entity equipment slot

## block

### Replace item

`/replaceitem <block: replaceitemblock> <position: x y z> <slotType: blockequipmentslot> <slotId: int> <itemName: Item> [amount: int] [data: int] [components: json]`

Replace an `item` at a required `position` into the slot with type `slot id`, `item name`, `amount`, `data`, and `components`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| block | replaceitemblock | Required |  |
| position | [x y z](../CommandTypes/type_position.md) | Required | `Vector` [x y z] of the position of the block to modify. |
| slotType | blockequipmentslot | Required | Entity equipment slot |
| slotId | [int](../CommandTypes/type_int.md) | Required | An `integer` that sets the slot to be modified. Default: `0`. |
| itemName | [Item](../CommandTypes/type_item.md) | Required | Specifies the item to be placed in the entity or block inventory slot. |
| amount | [int](../CommandTypes/type_int.md) | Optional | An `integer` to specify the number of items to place in inventory. Default: `1`. |
| data | [int](../CommandTypes/type_int.md) | Optional | An `integer` that specifies the item data for the items in the inventory. Default: `0`. |
| components | [json](../CommandTypes/type_json_object.md) | Optional | A `JSON` object that supports `minecraft:can_place_on`, `minecraft:can_destroy`, `minecraft:item_lock`, and `minecraft:keep_on_death`. Default: `false`. |

### Replace block, old item handling

`/replaceitem <block: replaceitemblock> <position: x y z> <slotType: blockequipmentslot> <slotId: int> <oldItemHandling: replacemode> <itemName: Item> [amount: int] [data: int] [components: json]`

Replace `item` at a required `position` into the slot with type `slot id`, using old item handling to replace with an `item name`, `amount`, `data`, and `components`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| block | replaceitemblock | Required |  |
| position | [x y z](../CommandTypes/type_position.md) | Required | `Vector` [x y z] of the position of the block to modify. |
| slotType | blockequipmentslot | Required | Entity equipment slot |
| slotId | [int](../CommandTypes/type_int.md) | Required | An `integer` that sets the slot to be modified. Default: `0`. |
| oldItemHandling | replacemode | Required | Either `destroy` to replace items in slot or `keep` to keep items instead of replacing them. |
| itemName | [Item](../CommandTypes/type_item.md) | Required | Specifies the item to be placed in the entity or block inventory slot. |
| amount | [int](../CommandTypes/type_int.md) | Optional | An `integer` to specify the number of items to place in inventory. Default: `1`. |
| data | [int](../CommandTypes/type_int.md) | Optional | An `integer` that specifies the item data for the items in the inventory. Default: `0`. |
| components | [json](../CommandTypes/type_json_object.md) | Optional | A `JSON` object that supports `minecraft:can_place_on`, `minecraft:can_destroy`, `minecraft:item_lock`, and `minecraft:keep_on_death`. Default: `false`. |

## entity

Entity equipment slot.

### Replace entity

`/replaceitem <entity: replaceitementity> <target: target> <slotType: blockequipmentslot> <slotId: int> <itemName: Item> [amount: int] [data: int] [components: json]`

Replace item on an `entity` `target` into the slot with type `slot id` or `slot type`, `item name`,  with optional `amount`, `data`, and `components`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| entity | replaceitementity | Required | Entity equipment slot |
| target | [target](../CommandTypes/type_selection.md) | Required | Specifies the entity to modify, either a player name or a [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors). |
| slotType | blockequipmentslot | Required | Entity equipment slot |
| slotId | [int](../CommandTypes/type_int.md) | Required | An `integer` that sets the slot to be modified. Default: `0`. |
| itemName | [Item](../CommandTypes/type_item.md) | Required | Specifies the item to be placed in the entity or block inventory slot. |
| amount | [int](../CommandTypes/type_int.md) | Optional | An `integer` to specify the number of items to place in inventory. Default: `1`. |
| data | [int](../CommandTypes/type_int.md) | Optional | An `integer` that specifies the item data for the items in the inventory. Default: `0`. |
| components | [json](../CommandTypes/type_json_object.md) | Optional | A `JSON` object that supports `minecraft:can_place_on`, `minecraft:can_destroy`, `minecraft:item_lock`, and `minecraft:keep_on_death`. Default: `false`. |

### Replace entity, old item handling

`/replaceitem <entity: replaceitementity> <target: target> <slotType: blockequipmentslot> <slotId: int> <oldItemHandling: replacemode> <itemName: Item> [amount: int] [data: int] [components: json]`

Replace an `entity` with required `target`, into the slot with type `slot id` or `slot type`, `item name`, using `old item handling` to replace with optional `amount`, `data`, and `components`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| entity | replaceitementity | Required | Entity equipment slot |
| target | [target](../CommandTypes/type_selection.md) | Required | Specifies the entity to modify, either a player name or a [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors). |
| slotType | blockequipmentslot | Required | Entity equipment slot |
| slotId | [int](../CommandTypes/type_int.md) | Required | An `integer` that sets the slot to be modified. Default: `0`. |
| oldItemHandling | replacemode | Required | Either `destroy` to replace items in slot or `keep` to keep items instead of replacing them. |
| itemName | [Item](../CommandTypes/type_item.md) | Required | Specifies the item to be placed in the entity or block inventory slot. |
| amount | [int](../CommandTypes/type_int.md) | Optional | An `integer` to specify the number of items to place in inventory. Default: `1`. |
| data | [int](../CommandTypes/type_int.md) | Optional | An `integer` that specifies the item data for the items in the inventory. Default: `0`. |
| components | [json](../CommandTypes/type_json_object.md) | Optional | A `JSON` object that supports `minecraft:can_place_on`, `minecraft:can_destroy`, `minecraft:item_lock`, and `minecraft:keep_on_death`. Default: `false`. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| amount | [int](../CommandTypes/type_int.md) | An `integer` to specify the number of items to place in inventory. Default: `1`. |
| block | replaceitemblock |  |
| components | [json](../CommandTypes/type_json_object.md) | A `JSON` object that supports `minecraft:can_place_on`, `minecraft:can_destroy`, `minecraft:item_lock`, and `minecraft:keep_on_death`. Default: `false`. |
| data | [int](../CommandTypes/type_int.md) | An `integer` that specifies the item data for the items in the inventory. Default: `0`. |
| entity | replaceitementity | Entity equipment slot |
| itemName | [Item](../CommandTypes/type_item.md) | Specifies the item to be placed in the entity or block inventory slot. |
| oldItemHandling | replacemode | Either `destroy` to replace items in slot or `keep` to keep items instead of replacing them. |
| position | [x y z](../CommandTypes/type_position.md) | `Vector` [x y z] of the position of the block to modify. |
| slotId | [int](../CommandTypes/type_int.md) | An `integer` that sets the slot to be modified. Default: `0`. |
| slotType | blockequipmentslot | Entity equipment slot |
| target | [target](../CommandTypes/type_selection.md) | Specifies the entity to modify, either a player name or a [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors). |
