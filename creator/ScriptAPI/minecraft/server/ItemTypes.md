---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.ItemTypes Class
description: Contents of the @minecraft/server.ItemTypes class.
---
# ItemTypes Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Returns the set of item types registered within Minecraft.

## Methods
- [get](#get)
- [getAll](#getall)

### **get**
`
static "get"(itemId: string): ItemType
`

Returns a specific item type, if available within Minecraft.

#### **Parameters**
- **itemId**: *string*

#### **Returns** [*ItemType*](ItemType.md)

### **getAll**
`
static getAll(): ItemType[]
`

Retrieves all available item types registered within Minecraft.

#### **Returns** [*ItemType*](ItemType.md)[]
