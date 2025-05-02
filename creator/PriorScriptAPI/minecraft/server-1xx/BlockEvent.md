---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.BlockEvent Class
description: Contents of the @minecraft/server.BlockEvent class (Version 1.x.x).
---
# BlockEvent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/BlockEvent.md).

## Classes that extend BlockEvent
- [*ButtonPushAfterEvent*](ButtonPushAfterEvent.md)
- [*LeverActionAfterEvent*](LeverActionAfterEvent.md)
- [*PistonActivateAfterEvent*](PistonActivateAfterEvent.md)
- [*PlayerBreakBlockAfterEvent*](PlayerBreakBlockAfterEvent.md)
- [*PlayerBreakBlockBeforeEvent*](PlayerBreakBlockBeforeEvent.md)
- [*PlayerPlaceBlockAfterEvent*](PlayerPlaceBlockAfterEvent.md)
- [*PressurePlatePopAfterEvent*](PressurePlatePopAfterEvent.md)
- [*PressurePlatePushAfterEvent*](PressurePlatePushAfterEvent.md)
- [*TargetBlockHitAfterEvent*](TargetBlockHitAfterEvent.md)
- [*TripWireTripAfterEvent*](TripWireTripAfterEvent.md)
- [*BlockComponentEntityFallOnEvent*](BlockComponentEntityFallOnEvent.md)
- [*BlockComponentOnPlaceEvent*](BlockComponentOnPlaceEvent.md)
- [*BlockComponentPlayerDestroyEvent*](BlockComponentPlayerDestroyEvent.md)
- [*BlockComponentPlayerInteractEvent*](BlockComponentPlayerInteractEvent.md)
- [*BlockComponentPlayerPlaceBeforeEvent*](BlockComponentPlayerPlaceBeforeEvent.md)
- [*BlockComponentRandomTickEvent*](BlockComponentRandomTickEvent.md)
- [*BlockComponentStepOffEvent*](BlockComponentStepOffEvent.md)
- [*BlockComponentStepOnEvent*](BlockComponentStepOnEvent.md)
- [*BlockComponentTickEvent*](BlockComponentTickEvent.md)
- [*BlockExplodeAfterEvent*](BlockExplodeAfterEvent.md)

Contains information regarding an event that impacts a specific block.

## Properties

### **block**
`read-only block: Block;`

Block currently in the world at the location of this event.

Type: [*Block*](Block.md)

### **dimension**
`read-only dimension: Dimension;`

Dimension that contains the block that is the subject of this event.

Type: [*Dimension*](Dimension.md)
