---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:rarity"
description: "Describes the minecraft:rarity item component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:rarity

Specifies the base rarity and subsequently color of the item name when the player hovers the cursor over the item.

> [!Note]
> This item requires a format version of at least 1.21.30.

## Alternate Simple Representations

This item can also be represented as a `String`.


## Rarity Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| value | *not set* | [Value](#value-choices) choices | Sets the base rarity of the item. The rarity of an item automatically increases when enchanted, either to Rare when the base rarity is Common or Uncommon, or Epic when the base rarity is Rare. |  | 

### Value choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| common | Common | |
| uncommon | Uncommon | |
| rare | Rare | |
| epic | Epic | |

## Samples


```json
"minecraft:rarity": {
  "minecraft:rarity": "rare"
}
```
