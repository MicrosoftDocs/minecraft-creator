---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.PlayerInventoryItemChangeAfterEvent Class
description: Contents of the @minecraft/server.PlayerInventoryItemChangeAfterEvent class.
---
# PlayerInventoryItemChangeAfterEvent Class

Contains information regarding an event after a player's inventory item changes.

## Properties

### **beforeItemStack**
`read-only beforeItemStack?: ItemStack;`

The previous item stack.

Type: [*ItemStack*](ItemStack.md)

### **inventoryType**
`read-only inventoryType: PlayerInventoryType;`

Inventory type.

Type: [*PlayerInventoryType*](PlayerInventoryType.md)

### **itemStack**
`read-only itemStack?: ItemStack;`

The new item stack.

Type: [*ItemStack*](ItemStack.md)

### **player**
`read-only player: Player;`

Source Player for this event.

Type: [*Player*](Player.md)

### **slot**
`read-only slot: number;`

The slot index with the change.

Type: *number*
