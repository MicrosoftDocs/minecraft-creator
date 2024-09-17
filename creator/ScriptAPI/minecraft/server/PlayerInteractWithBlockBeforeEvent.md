---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerInteractWithBlockBeforeEvent Class
description: Contents of the @minecraft/server.PlayerInteractWithBlockBeforeEvent class.
---
# PlayerInteractWithBlockBeforeEvent Class

Contains information regarding an event before a player interacts with a block.

## Properties

### **block**
`read-only block: Block;`

The block that will be interacted with.

Type: [*Block*](Block.md)

### **blockFace**
`read-only blockFace: Direction;`

The face of the block that is being interacted with.

Type: [*Direction*](Direction.md)

### **cancel**
`cancel: boolean;`

If set to true the interaction will be cancelled.

Type: *boolean*

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

The item stack that is being used in the interaction, or undefined if empty hand.

Type: [*ItemStack*](ItemStack.md)

### **player**
`read-only player: Player;`

Source Player for this event.

Type: [*Player*](Player.md)
