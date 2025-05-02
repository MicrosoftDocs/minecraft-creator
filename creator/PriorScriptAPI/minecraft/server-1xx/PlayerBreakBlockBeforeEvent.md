---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.PlayerBreakBlockBeforeEvent Class
description: Contents of the @minecraft/server.PlayerBreakBlockBeforeEvent class (Version 1.x.x).
---
# PlayerBreakBlockBeforeEvent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/PlayerBreakBlockBeforeEvent.md).

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information regarding an event before a player breaks a block.

## Properties

### **cancel**
`cancel: boolean;`

If set to true, cancels the block break event.

Type: *boolean*

### **itemStack**
`itemStack?: ItemStack;`

The item stack that is being used to break the block, or undefined if empty hand.

Type: [*ItemStack*](ItemStack.md)

### **player**
`read-only player: Player;`

Player breaking the block for this event.

Type: [*Player*](Player.md)
