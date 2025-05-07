---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.ItemStopUseAfterEvent Class
description: Contents of the @minecraft/server.ItemStopUseAfterEvent class (Version 1.x.x).
---
# ItemStopUseAfterEvent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/ItemStopUseAfterEvent.md).

Contains information related to a chargeable item has finished an items use cycle, or when the player has released the use action with the item.

## Properties

### **itemStack**
`read-only itemStack?: ItemStack;`

The impacted item stack that is stopping being charged. ItemStopUseAfterEvent can be called when teleporting to a different dimension and this can be undefined.

Type: [*ItemStack*](ItemStack.md)

### **source**
`read-only source: Player;`

Returns the source entity that triggered this item event.

Type: [*Player*](Player.md)

### **useDuration**
`read-only useDuration: number;`

Returns the time, in ticks, for the remaining duration left before the charge completes its cycle.

Type: *number*
