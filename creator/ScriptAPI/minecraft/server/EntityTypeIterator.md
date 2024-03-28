---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityTypeIterator Class
description: Contents of the @minecraft/server.EntityTypeIterator class.
monikerRange: "=minecraft-bedrock-experimental"
---
# EntityTypeIterator Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Implements
- Iterator&lt;[*EntityType*](EntityType.md)&gt;

An iterator that loops through available entity types.

## Methods
- [[Symbol.iterator]](#[symbol.iterator])
- [next](#next)

### **[Symbol.iterator]**
`
[Symbol.iterator](): Iterator<EntityType>
`

**Returns** Iterator&lt;[*EntityType*](EntityType.md)&gt;

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **next**
`
next(): IteratorResult<EntityType>
`

**Returns** IteratorResult&lt;[*EntityType*](EntityType.md)&gt;

> [!IMPORTANT]
> This function can't be called in read-only mode.
