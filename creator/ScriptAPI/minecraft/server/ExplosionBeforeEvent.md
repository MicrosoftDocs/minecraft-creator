---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: minecraft/server.ExplosionBeforeEvent Class
description: Contents of the @minecraft/server.ExplosionBeforeEvent class.
ms.service: minecraft-bedrock-edition
---
# ExplosionBeforeEvent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

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
setImpactedBlocks(blocks: Vector3[]): void
`

Updates a collection of blocks impacted by this explosion event.

#### **Parameters**
- **blocks**: [*Vector3*](Vector3.md)[]
  
  New list of blocks that are impacted by this explosion.
