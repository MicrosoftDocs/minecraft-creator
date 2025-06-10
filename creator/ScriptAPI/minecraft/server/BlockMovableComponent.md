---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.BlockMovableComponent Class
description: Contents of the @minecraft/server.BlockMovableComponent class.
---
# BlockMovableComponent Class

## Extends
- [*BlockComponent*](BlockComponent.md)

## Properties

### **movementType**
`read-only movementType: MovementType;`

Type: [*MovementType*](MovementType.md)

Notes:
  - This property can throw errors when used.
    - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **stickyType**
`read-only stickyType: StickyType;`

Type: [*StickyType*](StickyType.md)

Notes:
  - This property can throw errors when used.
    - Throws [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

## Constants

### **componentId**
`static read-only componentId = "minecraft:movable";`

Type: *string*
