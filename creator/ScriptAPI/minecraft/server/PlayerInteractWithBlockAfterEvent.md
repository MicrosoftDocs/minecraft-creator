---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.PlayerInteractWithBlockAfterEvent Class
description: Contents of the @minecraft/server.PlayerInteractWithBlockAfterEvent class.
---
# PlayerInteractWithBlockAfterEvent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains information regarding an event after a player interacts with a block.

## Properties

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

### **itemStack**
`read-only itemStack?: ItemStack;`

The item stack that is being used in the interaction, or undefined if empty hand.

Type: [*ItemStack*](ItemStack.md)

### **player**
`read-only player: Player;`

Source Player for this event.

Type: [*Player*](Player.md)
