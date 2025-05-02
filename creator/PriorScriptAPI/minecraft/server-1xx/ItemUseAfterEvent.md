---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.ItemUseAfterEvent Class
description: Contents of the @minecraft/server.ItemUseAfterEvent class (Version 1.x.x).
---
# ItemUseAfterEvent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/ItemUseAfterEvent.md).

## Classes that extend ItemUseAfterEvent
- [*ItemUseBeforeEvent*](ItemUseBeforeEvent.md)

Contains information related to an item being used on a block. This event fires when an item used by a player successfully triggers an entity interaction.

## Properties

### **itemStack**
`itemStack: ItemStack;`

The impacted item stack that is being used.

Type: [*ItemStack*](ItemStack.md)

### **source**
`read-only source: Player;`

Returns the source entity that triggered this item event.

Type: [*Player*](Player.md)
