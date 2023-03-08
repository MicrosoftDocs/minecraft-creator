---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BeforeExplosionEvent Class
description: Contents of the @minecraft/server.BeforeExplosionEvent class.
---
# BeforeExplosionEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains information regarding an explosion that has happened.

## Properties

### **cancel**
`cancel: boolean;`

If set to true, cancels the explosion event.

Type: *boolean*

### **dimension**
`read-only dimension: Dimension;`

Dimension where the explosion has occurred.

Type: [*Dimension*](Dimension.md)

### **source**
`read-only source: Entity;`

Optional source of the explosion.

Type: [*Entity*](Entity.md)

## Methods
- [getImpactedBlocks](#getimpactedblocks)
- [setImpactedBlocks](#setimpactedblocks)

### **getImpactedBlocks**
`
getImpactedBlocks(): Vector3[]
`

Retrieves a collection of blocks impacted by this explosion event.

#### **Returns** [*Vector3*](Vector3.md)[]

### **setImpactedBlocks**
`
setImpactedBlocks(blocks: Vector3[]): void
`

Updates the collection of blocks impacted by this explosion event.

#### **Parameters**
- **blocks**: [*Vector3*](Vector3.md)[]
