---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.PlayerIterator Class
description: Contents of the @minecraft/server.PlayerIterator class.
---
# PlayerIterator Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Implements
- Iterator&lt;[*Player*](Player.md)&gt;

This type is usable for iterating over a set of players. This means it can be used in statements like for...of statements, Array.from(iterator), and more.

## Methods
- [[Symbol.iterator]](#[symbol.iterator])
- [next](#next)

### **[Symbol.iterator]**
`
[Symbol.iterator](): Iterator<Player>
`

#### **Returns** Iterator&lt;[*Player*](Player.md)&gt;

### **next**
`
next(): IteratorResult<Player>
`

Retrieves the next item in this iteration. The resulting IteratorResult contains .done and .value properties which can be used to see the next Player in the iteration.

#### **Returns** IteratorResult&lt;[*Player*](Player.md)&gt;
