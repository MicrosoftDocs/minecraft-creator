---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BlockEvent Class
description: Contents of the @minecraft/server.BlockEvent class.
---
# BlockEvent Class

## Classes that extend BlockEvent
- [*BlockBreakAfterEvent*](BlockBreakAfterEvent.md)
- [*BlockExplodeAfterEvent*](BlockExplodeAfterEvent.md)
- [*BlockPlaceAfterEvent*](BlockPlaceAfterEvent.md)
- [*ButtonPushAfterEvent*](ButtonPushAfterEvent.md)
- [*LeverActionAfterEvent*](LeverActionAfterEvent.md)
- [*PistonActivateAfterEvent*](PistonActivateAfterEvent.md)
- [*PistonActivateBeforeEvent*](PistonActivateBeforeEvent.md)
- [*PressurePlatePopAfterEvent*](PressurePlatePopAfterEvent.md)
- [*PressurePlatePushAfterEvent*](PressurePlatePushAfterEvent.md)
- [*TargetBlockHitAfterEvent*](TargetBlockHitAfterEvent.md)
- [*TripWireTripAfterEvent*](TripWireTripAfterEvent.md)

Contains information regarding an event that impacts a specific block.

## Properties

### **block**
`read-only block: Block;`

Block impacted by this event.

Type: [*Block*](Block.md)

### **dimension**
`read-only dimension: Dimension;`

Dimension that contains the block that is the subject of this event.

Type: [*Dimension*](Dimension.md)
