---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BlockTypes Class
description: Contents of the @minecraft/server.BlockTypes class.
---
# BlockTypes Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

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

#### **Returns** [*BlockType*](BlockType.md) | *undefined* - BlockType object, or undefined if the block type is not available within this world.

### **getAll**
`
static getAll(): BlockType[]
`

Returns a collection of all available block types.

#### **Returns** [*BlockType*](BlockType.md)[]
