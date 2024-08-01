---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerInteractWithBlockAfterEvent Class
description: Contents of the @minecraft/server.PlayerInteractWithBlockAfterEvent class.
---
# PlayerInteractWithBlockAfterEvent Class

Contains information regarding an event after a player successfully interacts with a block.

## Properties

::: moniker range="=minecraft-bedrock-experimental"
### **beforeItemStack**
`read-only beforeItemStack?: ItemStack;`

The ItemStack before the interaction succeeded, or undefined if hand is empty.

Type: [*ItemStack*](ItemStack.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

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

::: moniker range="=minecraft-bedrock-experimental"
### **isFirstEvent**
`read-only isFirstEvent: boolean;`

This value will be true if the event was triggered on players initial interaction button press and false on events triggered from holding the interaction button.

Type: *boolean*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

### **itemStack**
`read-only itemStack?: ItemStack;`

The ItemStack after the interaction succeeded, or undefined if hand is empty.

Type: [*ItemStack*](ItemStack.md)

### **player**
`read-only player: Player;`

Source Player for this event.

Type: [*Player*](Player.md)
