---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityIterator Class
description: Contents of the @minecraft/server.EntityIterator class.
monikerRange: "=minecraft-bedrock-experimental"
---
# EntityIterator Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Implements
- Iterator&lt;[*Entity*](Entity.md)&gt;

This type is usable for iterating over a set of entities. This means it can be used in statements like for...of statements, Array.from(iterator), and more.

## Methods
- [[Symbol.iterator]](#[symbol.iterator])
- [next](#next)

### **[Symbol.iterator]**
`
[Symbol.iterator](): Iterator<Entity>
`

**Returns** Iterator&lt;[*Entity*](Entity.md)&gt;

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **next**
`
next(): IteratorResult<Entity>
`

Retrieves the next item in this iteration. The resulting IteratorResult contains .done and .value properties which can be used to see the next Entity in the iteration.

**Returns** IteratorResult&lt;[*Entity*](Entity.md)&gt;

> [!IMPORTANT]
> This function can't be called in read-only mode.
