---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemTypes Class
description: Contents of the @minecraft/server.ItemTypes class.
---
# ItemTypes Class

Returns the set of item types registered within Minecraft.

## Methods
- [get](#get)
- [getAll](#getall)

### **get**
`
static "get"(itemId: string): ItemType | undefined
`

Returns a specific item type, if available within Minecraft.

#### **Parameters**
- **itemId**: *string*

**Returns** [*ItemType*](ItemType.md) | *undefined*

### **getAll**
`
static getAll(): ItemType[]
`

Retrieves all available item types registered within Minecraft.

**Returns** [*ItemType*](ItemType.md)[]
