---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.CompoundBlockVolumeItem Interface
description: Contents of the @minecraft/server.CompoundBlockVolumeItem class.
monikerRange: "=minecraft-bedrock-experimental"
---
# CompoundBlockVolumeItem Interface

> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.

This interface defines an entry into the [*@minecraft/server.CompoundBlockVolume*](../../minecraft/server/CompoundBlockVolume.md) which represents a volume of positive or negative space.



## Properties

### **action**
`action?: CompoundBlockVolumeAction;`

The 'action' defines how the block volume is represented in the compound block volume stack.

'Add' creates a block volume which is positively selected

'Subtract' creates a block volume which represents a hole or negative space in the overall compound block volume.

Type: [*CompoundBlockVolumeAction*](CompoundBlockVolumeAction.md)

### **locationRelativity**
`locationRelativity?: CompoundBlockVolumePositionRelativity;`

The relativity enumeration determines whether the BlockVolume specified is positioned relative to the parent compound block volume origin, or in absolute world space.

Type: [*CompoundBlockVolumePositionRelativity*](CompoundBlockVolumePositionRelativity.md)

### **volume**
`volume: BlockVolume;`

The volume of space

Type: [*BlockVolume*](BlockVolume.md)
