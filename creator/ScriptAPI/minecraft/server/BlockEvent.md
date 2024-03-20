---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.BlockEvent Class
description: Contents of the @minecraft/server.BlockEvent class.
---
# BlockEvent Class

## Classes that extend BlockEvent
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
- [*ButtonPushAfterEvent*](ButtonPushAfterEvent.md)
- [*LeverActionAfterEvent*](LeverActionAfterEvent.md)
- [*PistonActivateAfterEvent*](PistonActivateAfterEvent.md)
- [*PlayerBreakBlockAfterEvent*](PlayerBreakBlockAfterEvent.md)
- [*PlayerBreakBlockBeforeEvent*](PlayerBreakBlockBeforeEvent.md)
- [*PlayerPlaceBlockAfterEvent*](PlayerPlaceBlockAfterEvent.md)
- [*PlayerPlaceBlockBeforeEvent*](PlayerPlaceBlockBeforeEvent.md)
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
