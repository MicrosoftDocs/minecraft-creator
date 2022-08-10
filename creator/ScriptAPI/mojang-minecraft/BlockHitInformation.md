---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BlockHitInformation Class
description: Contents of the mojang-minecraft.BlockHitInformation class.
---
# BlockHitInformation Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

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
