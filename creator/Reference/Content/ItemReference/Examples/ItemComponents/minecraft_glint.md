---
author: JimSeaman42
ms.author: mikeam
title: Item Documentation - minecraft:glint
description: "A reference document detailing the 'glint' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - minecraft:glint

`minecraft:glint` determines whether the item has the enchanted glint render effect on it.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| value|*not set*| Boolean| Whether the item has the enchanted glint render effect.|

## Example

```json
"minecraft:glint": false
```

## Vanilla entities examples

### appleEnchanted

```json
"minecraft:glint": true
```

## Vanilla entities using `minecraft:glint`

- [apple](../../../../Source/VanillaBehaviorPack_Snippets/items/apple.md)
- [appleEnchanted](../../../../Source/VanillaBehaviorPack_Snippets/items/appleEnchanted.md)
