---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemStartUseOnAfterEvent Class
description: Contents of the @minecraft/server.ItemStartUseOnAfterEvent class.
---
# ItemStartUseOnAfterEvent Class

Contains information related to an item being used on a block. This event fires when a player presses the the Use Item / Place Block button to successfully use an item or place a block. Fires for the first block that is interacted with when performing a build action. Note: This event cannot be used with Hoe or Axe items.

## Properties

### **block**
`read-only block: Block;`

The block that the item is used on.

Type: [*Block*](Block.md)

### **blockFace**
`read-only blockFace: Direction;`

The face of the block that an item is being used on.

Type: [*Direction*](Direction.md)

### **itemStack**
`read-only itemStack?: ItemStack;`

The impacted item stack that is starting to be used. Can be undefined in some gameplay scenarios like pushing a button with an empty hand.

Type: [*ItemStack*](ItemStack.md)

### **source**
`read-only source: Player;`

Returns the source entity that triggered this item event.

Type: [*Player*](Player.md)
