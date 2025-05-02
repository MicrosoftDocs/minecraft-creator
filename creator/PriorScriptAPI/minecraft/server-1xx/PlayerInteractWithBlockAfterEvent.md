---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.PlayerInteractWithBlockAfterEvent Class
description: Contents of the @minecraft/server.PlayerInteractWithBlockAfterEvent class (Version 1.x.x).
---
# PlayerInteractWithBlockAfterEvent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/PlayerInteractWithBlockAfterEvent.md).

Contains information regarding an event after a player successfully interacts with a block.

## Properties

### **beforeItemStack**
`read-only beforeItemStack?: ItemStack;`

The ItemStack before the interaction succeeded, or undefined if hand is empty.

Type: [*ItemStack*](ItemStack.md)

### **block**
`read-only block: Block;`

The block that will be interacted with.

Type: [*Block*](Block.md)

### **blockFace**
`read-only blockFace: Direction;`

The face of the block that is being interacted with.

Type: [*Direction*](Direction.md)

### **faceLocation**
`read-only faceLocation: Vector3;`

Location relative to the bottom north-west corner of the block where the item is placed.

Type: [*Vector3*](Vector3.md)

### **isFirstEvent**
`read-only isFirstEvent: boolean;`

This value will be true if the event was triggered on players initial interaction button press and false on events triggered from holding the interaction button.

Type: *boolean*

### **itemStack**
`read-only itemStack?: ItemStack;`

The ItemStack after the interaction succeeded, or undefined if hand is empty.

Type: [*ItemStack*](ItemStack.md)

### **player**
`read-only player: Player;`

Source Player for this event.

Type: [*Player*](Player.md)
