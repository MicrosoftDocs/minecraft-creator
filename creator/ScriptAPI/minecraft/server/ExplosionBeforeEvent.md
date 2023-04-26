---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.ExplosionBeforeEvent Class
description: Contents of the @minecraft/server.ExplosionBeforeEvent class.
---
# ExplosionBeforeEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
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
