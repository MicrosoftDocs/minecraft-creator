---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemUseOnAfterEvent Class
description: Contents of the @minecraft/server.ItemUseOnAfterEvent class.
---
# ItemUseOnAfterEvent Class

## Classes that extend ItemUseOnAfterEvent
- [*ItemUseOnBeforeEvent*](ItemUseOnBeforeEvent.md)

Contains information related to an item being used on a block. This event fires when an item used by a player successfully triggers a block interaction.

## Properties

### **block**
`read-only block: Block;`

The block that the item is used on.

Type: [*Block*](Block.md)

### **blockFace**
`read-only blockFace: Direction;`

The face of the block that an item is being used on.

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
`read-only itemStack: ItemStack;`

The impacted item stack that is being used on a block.

Type: [*ItemStack*](ItemStack.md)

### **source**
`read-only source: Player;`

Returns the source entity that triggered this item event.

Type: [*Player*](Player.md)
