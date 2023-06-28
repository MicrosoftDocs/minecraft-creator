---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BlockRaycastHit Interface
description: Contents of the @minecraft/server.BlockRaycastHit class.
---
# BlockRaycastHit Interface

> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains information for block raycast hit results.

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

Hit location relative to the bottom north-west corner of the block.

Type: [*Vector3*](Vector3.md)
