---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.TargetBlockHitAfterEvent Class
description: Contents of the @minecraft/server.TargetBlockHitAfterEvent class.
---
# TargetBlockHitAfterEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information related to changes to a target block hit.

## Properties

### **hitVector**
`read-only hitVector: Vector3;`

The position where the source hit the block.

Type: [*Vector3*](Vector3.md)

### **previousRedstonePower**
`read-only previousRedstonePower: number;`

The redstone power before the block is hit.

Type: *number*

### **redstonePower**
`read-only redstonePower: number;`

The redstone power at the time the block is hit.

Type: *number*

### **source**
`read-only source: Entity;`

Optional source that hit the target block.

Type: [*Entity*](Entity.md)
