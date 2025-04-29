---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.BlockLocationIterator Class
description: Contents of the @minecraft/server.BlockLocationIterator class (Version 1.x.x).
---
# BlockLocationIterator Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/BlockLocationIterator.md).

## Implements
- Iterator&lt;[*Vector3*](Vector3.md)&gt;

A BlockLocationIterator returns the next block location of the block volume across which it is iterating.

The BlockLocationIterator is used to abstract the shape of the block volume it was fetched from (so it can represent all the block locations that make up rectangles, cubes, spheres, lines and complex shapes).

Each iteration pass returns the next valid block location in the parent shape.

Unless otherwise specified by the parent shape - the BlockLocationIterator will iterate over a 3D space in the order of increasing X, followed by increasing Z followed by increasing Y.

(Effectively stepping across the XZ plane, and when all the locations in that plane are exhausted, increasing the Y coordinate to the next XZ slice)

## Methods
- [[Symbol.iterator]](#[symbol.iterator])
- [next](#next)

### **[Symbol.iterator]**
`
[Symbol.iterator](): Iterator<Vector3>
`

**Returns** Iterator&lt;[*Vector3*](Vector3.md)&gt;
  
Notes:
- This function can't be called in read-only mode.

### **next**
`
next(): IteratorResult<Vector3>
`

**Returns** IteratorResult&lt;[*Vector3*](Vector3.md)&gt;
  
Notes:
- This function can't be called in read-only mode.
