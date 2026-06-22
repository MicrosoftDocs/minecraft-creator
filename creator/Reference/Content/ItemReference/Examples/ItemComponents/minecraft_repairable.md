---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:repairable"
description: "Describes the minecraft:repairable item component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:repairable

Defines the items that can be used to repair a defined item, and the amount of durability each item restores upon repair. Each entry needs to define a list of strings for 'items' that can be used for the repair and an optional 'repair_amount' for how much durability is repaired.

> [!Note]
> This item requires a format version of at least 1.20.10.


## Item Repairable Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| repair_items | [] | String | List of repair item entries. Each entry needs to define a list of strings for `items` that can be used for the repair and an optional `repair_amount` for how much durability is gained. | 
| repair_items (Repair Items) | *not set* | [Repair Items (Repair Items)](#repair-items-repair-items) item |  | 

### Repair Items (Repair Items)

#### Repair Items Properties

**JSON path:** `repair_items`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| items | *not set* | String | Items that may be used to repair an item. | 
| items (as Keyed set of strings) | *not set* | Keyed set of strings |  | 
| repair_amount |  | Keyed set of strings | How much the item is repaired. | 
| repair_amount (as Named set of objects) | *not set* | Key/item pairs of [Repair Amount (Item Molang Expression)](#item-molang-expression) items |  | 
| repair_amount (as Decimal number) | *not set* | Decimal number |  | 

#### Item Molang Expression

##### Item Molang Expression Properties

**JSON path:** `repair_items > repair_amount`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 

## Samples


```json
"minecraft:repairable": {
  "on_repaired": "minecraft:celebrate",
  "repair_items": [
    "anvil"
  ]
}
```
