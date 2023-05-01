---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.ItemStartUseOnAfterEvent Class
description: Contents of the @minecraft/server.ItemStartUseOnAfterEvent class.
---
# ItemStartUseOnAfterEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains information related to an item being used on a block. This event fires when a player presses the the Use Item / Place Block button to successfully use an item or place a block. Note: This event cannot be used with Hoe or Axe items.

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
`read-only itemStack: ItemStack;`

The impacted item stack that is starting to be used.

Type: [*ItemStack*](ItemStack.md)

### **source**
`read-only source: Entity;`

Returns the source entity that triggered this item event.

Type: [*Entity*](Entity.md)
