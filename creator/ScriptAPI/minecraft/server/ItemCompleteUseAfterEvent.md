---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemCompleteUseAfterEvent Class
description: Contents of the @minecraft/server.ItemCompleteUseAfterEvent class.
---
# ItemCompleteUseAfterEvent Class

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

### **useDuration**
`read-only useDuration: number;`

Returns the time, in ticks, for the remaining duration left before the charge completes its cycle.

Type: *number*
