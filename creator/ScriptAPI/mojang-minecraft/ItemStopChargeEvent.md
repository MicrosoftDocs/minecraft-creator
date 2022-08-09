---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.ItemStopChargeEvent Class
description: Contents of the mojang-minecraft.ItemStopChargeEvent class.
---
# ItemStopChargeEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains information related to a chargeable item has finished an items use cycle, or when the player has released the use action with the item.

## Properties

### **itemStack**
`read-only itemStack: ItemStack;`

The impacted item stack that is stopping being charged.

Type: [*ItemStack*](ItemStack.md)

### **source**
`read-only source: Entity;`

Returns the source entity that triggered this item event.

Type: [*Entity*](Entity.md)

### **useDuration**
`read-only useDuration: number;`

Returns the time, in ticks, for the remaining duration left before the charge completes its cycle.

Type: *number*
