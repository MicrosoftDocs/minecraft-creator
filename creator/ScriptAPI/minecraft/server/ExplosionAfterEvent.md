---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ExplosionAfterEvent Class
description: Contents of the @minecraft/server.ExplosionAfterEvent class.
---
# ExplosionAfterEvent Class

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
getImpactedBlocks(): Block[]
`

A collection of blocks impacted by this explosion event.

**Returns** [*Block*](Block.md)[]
