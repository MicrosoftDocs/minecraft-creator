---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.PlayerBreakBlockAfterEvent Class
description: Contents of the @minecraft/server.PlayerBreakBlockAfterEvent class (Version 1.x.x).
---
# PlayerBreakBlockAfterEvent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/PlayerBreakBlockAfterEvent.md).

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information regarding an event after a player breaks a block.

## Properties

### **brokenBlockPermutation**
`read-only brokenBlockPermutation: BlockPermutation;`

Returns permutation information about this block before it was broken.

Type: [*BlockPermutation*](BlockPermutation.md)

### **itemStackAfterBreak**
`read-only itemStackAfterBreak?: ItemStack;`

The item stack that was used to break the block after the block was broken, or undefined if empty hand.

Type: [*ItemStack*](ItemStack.md)

### **itemStackBeforeBreak**
`read-only itemStackBeforeBreak?: ItemStack;`

The item stack that was used to break the block before the block was broken, or undefined if empty hand.

Type: [*ItemStack*](ItemStack.md)

### **player**
`read-only player: Player;`

Player that broke the block for this event.

Type: [*Player*](Player.md)
