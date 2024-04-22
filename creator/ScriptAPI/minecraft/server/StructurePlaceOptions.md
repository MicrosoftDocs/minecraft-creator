---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.StructurePlaceOptions Interface
description: Contents of the @minecraft/server.StructurePlaceOptions class.
---
# StructurePlaceOptions Interface

Provides additional options for [*@minecraft/server.StructureManager.place*](../../minecraft/server/StructureManager.md#place)

## Properties

### **animationMode**
`animationMode?: StructureAnimationMode;`

How the Structure should be animated when placed.

Type: [*StructureAnimationMode*](StructureAnimationMode.md)

### **animationSeconds**
`animationSeconds?: number;`

How many seconds the animation should take.

Type: *number*

### **includeBlocks**
`includeBlocks?: boolean;`

Whether blocks should be included in the structure. Defaults to true.

Type: *boolean*

### **includeEntities**
`includeEntities?: boolean;`

Whether entities should be included in the structure. Defaults to true.

Type: *boolean*

### **integrity**
`integrity?: number;`

What percentage of blocks should be placed. A value of 1 will place 100% of the blocks while a value of 0 will place none. The blocks are chosen randomly based on the [*@minecraft/server.StructurePlaceOptions.integritySeed*](../../minecraft/server/StructurePlaceOptions.md#integrityseed).

Type: *number*

### **integritySeed**
`integritySeed?: string;`

Seed that determines which blocks are randomly chosen to be placed. Defaults to a random seed.

Type: *string*

### **mirror**
`mirror?: StructureMirrorAxis;`

Which axes the Structure should be mirrored on when placed. Defaults to StructureMirrorAxis.None.

Type: [*StructureMirrorAxis*](StructureMirrorAxis.md)

### **rotation**
`rotation?: StructureRotation;`

How the Structure should be rotated when placed. Defaults to AxisAlignedRotation.None.

Type: [*StructureRotation*](StructureRotation.md)

### **waterlogged**
`waterlogged?: boolean;`

Whether the structure should be waterlogged when placed. Defaults to false. If true, blocks will become waterlogged when placed in water.

Type: *boolean*
