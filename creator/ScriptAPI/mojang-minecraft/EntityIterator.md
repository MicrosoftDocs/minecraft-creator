---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityIterator Class
description: Contents of the mojang-minecraft.EntityIterator class.
---
# EntityIterator Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

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

#### **Returns** Iterator&lt;[*Entity*](Entity.md)&gt;

### **next**
`
next(): IteratorResult<Entity>
`
Retrieves the next item in this iteration. The resulting IteratorResult contains .done and .value properties which can be used to see the next Entity in the iteration.

#### **Returns** IteratorResult&lt;[*Entity*](Entity.md)&gt;
