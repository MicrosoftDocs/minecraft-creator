---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BlockHitInformation Interface
description: Contents of the @minecraft/server.BlockHitInformation class.
---
# BlockHitInformation Interface
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.

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
