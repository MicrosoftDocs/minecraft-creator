---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BlockPistonComponent Class
description: Contents of the @minecraft/server.BlockPistonComponent class.
---
# BlockPistonComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*BlockComponent*](BlockComponent.md)

When present, this block has piston-like behavior. Contains additional properties for discovering block piston state.

## Properties

### **isExpanded**
`read-only isExpanded: boolean;`

Whether the piston is fully expanded.

Type: *boolean*

### **isExpanding**
`read-only isExpanding: boolean;`

Whether the piston is in the process of expanding.

Type: *boolean*

### **isMoving**
`read-only isMoving: boolean;`

Whether the piston is in the process of expanding or retracting.

Type: *boolean*

### **isRetracted**
`read-only isRetracted: boolean;`

Whether the piston is fully retracted.

Type: *boolean*

### **isRetracting**
`read-only isRetracting: boolean;`

Whether the piston is in the process of retracting.

Type: *boolean*

## Methods
- [getAttachedBlocks](#getattachedblocks)

### **getAttachedBlocks**
`
getAttachedBlocks(): Vector3[]
`

Retrieves a set of blocks that this piston is connected with.

#### **Returns** [*Vector3*](Vector3.md)[]

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:piston";`

Identifier of this component.

Type: *string*
