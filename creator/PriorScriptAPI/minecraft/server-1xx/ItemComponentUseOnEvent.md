---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.ItemComponentUseOnEvent Class
description: Contents of the @minecraft/server.ItemComponentUseOnEvent class (Version 1.x.x).
---
# ItemComponentUseOnEvent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/ItemComponentUseOnEvent.md).

## Extends
- [*ItemUseOnEvent*](ItemUseOnEvent.md)

Contains information regarding the use of an item on a block via a component.

## Properties

### **source**
`read-only source: Entity;`

The entity that used the item on the block.

Type: [*Entity*](Entity.md)

### **usedOnBlockPermutation**
`read-only usedOnBlockPermutation: BlockPermutation;`

The block permutation that the item was used on.

Type: [*BlockPermutation*](BlockPermutation.md)
