---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.ItemCompleteUseEvent Class
description: Contents of the @minecraft/server.ItemCompleteUseEvent class (Version 1.x.x).
---
# ItemCompleteUseEvent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/ItemCompleteUseEvent.md).

## Classes that extend ItemCompleteUseEvent
- [*ItemComponentCompleteUseEvent*](ItemComponentCompleteUseEvent.md)

Contains information related to a chargeable item completing being charged.

## Properties

### **itemStack**
`read-only itemStack: ItemStack;`

Returns the item stack that has completed charging.

Type: [*ItemStack*](ItemStack.md)

### **source**
`read-only source: Player;`

Returns the source entity that triggered this item event.

Type: [*Player*](Player.md)
