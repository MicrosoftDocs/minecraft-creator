---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.Items Class
description: Contents of the @minecraft/server.Items class.
---
# Items Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Represents a collection of all of the available item types in Minecraft.

## Methods
- [get](#get)

### **get**
`
static "get"(itemId: string): ItemType
`

Returns an item type given an item type identifier.

#### **Parameters**
- **itemId**: *string*
  
  Type of the item to return.

#### **Returns** [*ItemType*](ItemType.md)
