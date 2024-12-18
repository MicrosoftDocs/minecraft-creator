---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemUseOnEvent Class
description: Contents of the @minecraft/server.ItemUseOnEvent class.
---
# ItemUseOnEvent Class

## Classes that extend ItemUseOnEvent
- [*ItemComponentUseOnEvent*](ItemComponentUseOnEvent.md)

Contains information regarding the use of an item on a block.

## Properties

### **block**
`read-only block: Block;`

The block impacted by this event.

Type: [*Block*](Block.md)

### **blockFace**
`read-only blockFace: Direction;`

The face of the block that the item was used on.

Type: [*Direction*](Direction.md)

### **faceLocation**
`read-only faceLocation: Vector3;`

Location relative to the bottom north-west corner of the block that the item was used on.

Type: [*Vector3*](Vector3.md)

### **itemStack**
`read-only itemStack: ItemStack;`

The item stack used on the block.

Type: [*ItemStack*](ItemStack.md)
