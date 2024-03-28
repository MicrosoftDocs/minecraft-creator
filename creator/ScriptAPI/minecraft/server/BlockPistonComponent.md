---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.BlockPistonComponent Class
description: Contents of the @minecraft/server.BlockPistonComponent class.
---
# BlockPistonComponent Class

## Extends
- [*BlockComponent*](BlockComponent.md)

When present, this block has piston-like behavior. Contains additional properties for discovering block piston state.

## Properties

### **isMoving**
`read-only isMoving: boolean;`

Whether the piston is in the process of expanding or retracting.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **state**
`read-only state: BlockPistonState;`

The current state of the piston.

Type: [*BlockPistonState*](BlockPistonState.md)

> [!WARNING]
> This property can throw errors when used.

## Methods
- [getAttachedBlocks](#getattachedblocks)
- [getAttachedBlocksLocations](#getattachedblockslocations)

### **getAttachedBlocks**
`
getAttachedBlocks(): Block[]
`

Retrieves a set of blocks that this piston is connected with.

**Returns** [*Block*](Block.md)[]

> [!WARNING]
> This function can throw errors.

### **getAttachedBlocksLocations**
`
getAttachedBlocksLocations(): Vector3[]
`

Retrieves a set of block locations that this piston is connected with.

**Returns** [*Vector3*](Vector3.md)[]

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:piston";`

Type: *string*
