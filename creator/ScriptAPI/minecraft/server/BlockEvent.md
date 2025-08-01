---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.BlockEvent Class
description: Contents of the @minecraft/server.BlockEvent class.
---
# BlockEvent Class

## Classes that extend BlockEvent
- [*BlockComponentEntityFallOnEvent*](BlockComponentEntityFallOnEvent.md)
- [*BlockComponentOnPlaceEvent*](BlockComponentOnPlaceEvent.md)
- [*BlockComponentPlayerBreakEvent*](BlockComponentPlayerBreakEvent.md)
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
- [*PressurePlatePopAfterEvent*](PressurePlatePopAfterEvent.md)
- [*PressurePlatePushAfterEvent*](PressurePlatePushAfterEvent.md)
- [*TargetBlockHitAfterEvent*](TargetBlockHitAfterEvent.md)
- [*TripWireTripAfterEvent*](TripWireTripAfterEvent.md)
- [*PlayerPlaceBlockBeforeEvent*](PlayerPlaceBlockBeforeEvent.md)

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
