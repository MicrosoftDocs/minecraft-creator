---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.InvalidItemStackError Class
description: Contents of the @minecraft/server.InvalidItemStackError class.
monikerRange: "=minecraft-bedrock-experimental"
---
# InvalidItemStackError Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- *Error*

The error called when an item is invalid. This can occur when accessing components on a removed item.

## Properties

### **itemType**
`read-only itemType: ItemType;`

The type of the item that is now invalid.

Type: [*ItemType*](ItemType.md)

Notes:
  - This property can be read in early-execution mode.
