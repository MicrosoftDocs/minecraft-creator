---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.Items Class
description: Contents of the mojang-minecraft.Items class.
---
# Items Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Represents a collection of all of the available item types in Minecraft.

## Methods
- [get](#get)

### **get**
`
get(itemId: string): ItemType
`
Returns an item type given an item type identifier.

#### **Parameters**
- **itemId**: *string*
  
  Type of the item to return.

#### **Returns** [*ItemType*](ItemType.md)
