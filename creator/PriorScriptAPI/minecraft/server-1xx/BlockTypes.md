---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.BlockTypes Class
description: Contents of the @minecraft/server.BlockTypes class (Version 1.x.x).
---
# BlockTypes Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/BlockTypes.md).

Contains a catalog of Minecraft Block Types that are available in this world.

## Methods
- [get](#get)
- [getAll](#getall)

### **get**
`
static "get"(typeName: string): BlockType | undefined
`

Returns a BlockType object for the specified identifier.

#### **Parameters**
- **typeName**: *string*
  
  Identifier of the block type. Should follow a namespace:id pattern, such as minecraft:dirt.

**Returns** [*BlockType*](BlockType.md) | *undefined* - BlockType object, or undefined if the block type is not available within this world.

### **getAll**
`
static getAll(): BlockType[]
`

Returns a collection of all available block types.

**Returns** [*BlockType*](BlockType.md)[]
