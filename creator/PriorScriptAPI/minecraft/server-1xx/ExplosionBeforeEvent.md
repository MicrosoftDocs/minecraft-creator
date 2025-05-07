---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.ExplosionBeforeEvent Class
description: Contents of the @minecraft/server.ExplosionBeforeEvent class (Version 1.x.x).
---
# ExplosionBeforeEvent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/ExplosionBeforeEvent.md).

## Extends
- [*ExplosionAfterEvent*](ExplosionAfterEvent.md)

Contains information regarding an explosion that has happened.

## Properties

### **cancel**
`cancel: boolean;`

If set to true, cancels the explosion event.

Type: *boolean*

## Methods
- [setImpactedBlocks](#setimpactedblocks)

### **setImpactedBlocks**
`
setImpactedBlocks(blocks: Block[]): void
`

Updates a collection of blocks impacted by this explosion event.

#### **Parameters**
- **blocks**: [*Block*](Block.md)[]
  
  New list of blocks that are impacted by this explosion.
