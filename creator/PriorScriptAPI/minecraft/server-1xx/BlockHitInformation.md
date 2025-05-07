---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.BlockHitInformation Interface
description: Contents of the @minecraft/server.BlockHitInformation class (Version 1.x.x).
---
# BlockHitInformation Interface (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/BlockHitInformation.md).

Contains more information for events where a block is hit.

## Properties

### **block**
`block: Block;`

Block that was hit.

Type: [*Block*](Block.md)

### **face**
`face: Direction;`

Face of the block that was hit.

Type: [*Direction*](Direction.md)

### **faceLocation**
`faceLocation: Vector3;`

Location relative to the bottom north-west corner of the block.

Type: [*Vector3*](Vector3.md)
