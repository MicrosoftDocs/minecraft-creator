---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: minecraft/server.ExplosionAfterEvent Class
description: Contents of the @minecraft/server.ExplosionAfterEvent class.
ms.service: minecraft-bedrock-edition
---
# ExplosionAfterEvent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Classes that extend ExplosionAfterEvent
- [*ExplosionBeforeEvent*](ExplosionBeforeEvent.md)

Contains information regarding an explosion that has happened.

## Properties

### **dimension**
`read-only dimension: Dimension;`

Dimension where the explosion has occurred.

Type: [*Dimension*](Dimension.md)

### **source**
`read-only source?: Entity;`

Optional source of the explosion.

Type: [*Entity*](Entity.md)

## Methods
- [getImpactedBlocks](#getimpactedblocks)

### **getImpactedBlocks**
`
getImpactedBlocks(): Vector3[]
`

A collection of blocks impacted by this explosion event.

#### **Returns** [*Vector3*](Vector3.md)[]
