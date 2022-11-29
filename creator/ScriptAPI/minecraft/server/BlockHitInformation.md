---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BlockHitInformation Class
description: Contents of the @minecraft/server.BlockHitInformation class.
---
# BlockHitInformation Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains more information for events where a block is hit.

## Properties

### **block**
`read-only block: Block;`

Block that was hit.

Type: [*Block*](Block.md)

### **face**
`read-only face: Direction;`

Face of the block that was hit.

Type: [*Direction*](Direction.md)

### **faceLocationX**
`read-only faceLocationX: number;`

X coordinate on the face that was hit.

Type: *number*

### **faceLocationY**
`read-only faceLocationY: number;`

Y coordinate on the face that was hit.

Type: *number*
