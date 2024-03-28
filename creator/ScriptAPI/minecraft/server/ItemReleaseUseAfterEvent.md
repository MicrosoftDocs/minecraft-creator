---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemReleaseUseAfterEvent Class
description: Contents of the @minecraft/server.ItemReleaseUseAfterEvent class.
---
# ItemReleaseUseAfterEvent Class

Contains information related to a chargeable item when the player has finished using the item and released the build action.

## Properties

### **itemStack**
`read-only itemStack?: ItemStack;`

Returns the item stack that triggered this item event.

Type: [*ItemStack*](ItemStack.md)

### **source**
`read-only source: Player;`

Returns the source entity that triggered this item event.

Type: [*Player*](Player.md)

### **useDuration**
`read-only useDuration: number;`

Returns the time, in ticks, for the remaining duration left before the charge completes its cycle.

Type: *number*
