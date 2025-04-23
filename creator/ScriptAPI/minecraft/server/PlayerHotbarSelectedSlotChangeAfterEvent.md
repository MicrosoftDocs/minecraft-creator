---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.PlayerHotbarSelectedSlotChangeAfterEvent Class
description: Contents of the @minecraft/server.PlayerHotbarSelectedSlotChangeAfterEvent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# PlayerHotbarSelectedSlotChangeAfterEvent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains information regarding an event after changing the selected hotbar slot for a player.

## Properties

### **itemStack**
`read-only itemStack?: ItemStack;`

The item stack of the new slot selected.

Type: [*ItemStack*](ItemStack.md)

### **newSlotSelected**
`read-only newSlotSelected: number;`

The new hotbar slot index selected.

Type: *number*

### **player**
`read-only player: Player;`

Source Player for this event.

Type: [*Player*](Player.md)

### **previousSlotSelected**
`read-only previousSlotSelected: number;`

The previous hotbar slot index selected.

Type: *number*
