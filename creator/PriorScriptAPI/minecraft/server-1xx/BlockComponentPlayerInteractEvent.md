---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.BlockComponentPlayerInteractEvent Class
description: Contents of the @minecraft/server.BlockComponentPlayerInteractEvent class (Version 1.x.x).
---
# BlockComponentPlayerInteractEvent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/BlockComponentPlayerInteractEvent.md).

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information regarding a specific block being interacted with.

## Properties

### **face**
`read-only face: Direction;`

The block face that was interacted with.

Type: [*Direction*](Direction.md)

### **faceLocation**
`read-only faceLocation?: Vector3;`

Location relative to the bottom north-west corner of the block that the player interacted with.

Type: [*Vector3*](Vector3.md)

### **player**
`read-only player?: Player;`

The player that interacted with this block.

Type: [*Player*](Player.md)
