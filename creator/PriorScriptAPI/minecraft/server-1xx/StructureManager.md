---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.StructureManager Class
description: Contents of the @minecraft/server.StructureManager class (Version 1.x.x).
---
# StructureManager Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/StructureManager.md).

Manager for Structure related APIs. Includes APIs for creating, getting, placing and deleting Structures.

## Methods
- [createEmpty](#createempty)
- [createFromWorld](#createfromworld)
- [delete](#delete)
- [get](#get)
- [getWorldStructureIds](#getworldstructureids)
- [place](#place)
- [placeJigsaw](#placejigsaw)
- [placeJigsawStructure](#placejigsawstructure)

### **createEmpty**
`
createEmpty(identifier: string, size: Vector3, saveMode?: StructureSaveMode): Structure
`

Creates an empty Structure in memory. Use [*@minecraft/server.Structure.setBlockPermutation*](../../../priorscriptapi/minecraft/server-1xx/Structure.md#setblockpermutation) to populate the structure with blocks and save changes with [*@minecraft/server.Structure.saveAs*](../../../priorscriptapi/minecraft/server-1xx/Structure.md#saveas).

#### **Parameters**
- **identifier**: *string*
  
  The name of the structure. A valid identifier must include a namespace and must be unique.
- **size**: [*Vector3*](Vector3.md)
  
  The size of the structure. For example, to create a single block structure the size should be {x:1, y:1, z:1}.
- **saveMode**?: [*StructureSaveMode*](StructureSaveMode.md) = `0`
  
  How the Structure should be saved upon creation. Defaults to StructureSaveMode.Memory.

**Returns** [*Structure*](Structure.md) - Returns the newly created Structure.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/common.EngineError*](../../../scriptapi/minecraft/common/EngineError.md), [*@minecraft/common.InvalidArgumentError*](../../../scriptapi/minecraft/common/InvalidArgumentError.md)

### **createFromWorld**
`
createFromWorld(identifier: string, dimension: Dimension, from: Vector3, to: Vector3, options?: StructureCreateOptions): Structure
`

Creates a new Structure from blocks in the world. This is functionally equivalent to the /structure save command.

#### **Parameters**
- **identifier**: *string*
  
  The name of the structure. A valid identifier must include a namespace and must be unique.
- **dimension**: [*Dimension*](Dimension.md)
  
  The dimension where the blocks should be read from.
- **from**: [*Vector3*](Vector3.md)
- **to**: [*Vector3*](Vector3.md)
- **options**?: [*StructureCreateOptions*](StructureCreateOptions.md) = `null`
  
  Additional options for creating a structure from the world.

**Returns** [*Structure*](Structure.md) - Returns the newly created Structure.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/common.InvalidArgumentError*](../../../scriptapi/minecraft/common/InvalidArgumentError.md)

### **delete**
`
"delete"(structure: string | Structure): boolean
`

Deletes a structure from memory and from the world if it exists.

#### **Parameters**
- **structure**: *string* | [*Structure*](Structure.md)
  
  The structure identifier or Structure object that should be deleted. Note, a Structure object will become invalid after it is deleted.

**Returns** *boolean* - Returns whether the structure was removed.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/common.InvalidArgumentError*](../../../scriptapi/minecraft/common/InvalidArgumentError.md)

### **get**
`
"get"(identifier: string): Structure | undefined
`

Gets a Structure that is saved to memory or the world.

#### **Parameters**
- **identifier**: *string*
  
  The name of the structure to get.

**Returns** [*Structure*](Structure.md) | *undefined* - Returns a Structure if it exists, otherwise undefined.
  
Notes:
- This function can't be called in read-only mode.

### **getWorldStructureIds**
`
getWorldStructureIds(): string[]
`

**Returns** *string*[]
  
Notes:
- This function can't be called in read-only mode.

### **place**
`
place(structure: string | Structure, dimension: Dimension, location: Vector3, options?: StructurePlaceOptions): void
`

Places a structure in the world. Structures placed in unloaded chunks will be queued for loading.

#### **Parameters**
- **structure**: *string* | [*Structure*](Structure.md)
  
  The structure's identifier or a Structure object.
- **dimension**: [*Dimension*](Dimension.md)
  
  The dimension where the Structure should be placed.
- **location**: [*Vector3*](Vector3.md)
  
  The location within the dimension where the Structure should be placed.
- **options**?: [*StructurePlaceOptions*](StructurePlaceOptions.md) = `null`
  
  Additional options for Structure placement.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/common.ArgumentOutOfBoundsError*](../../../scriptapi/minecraft/common/ArgumentOutOfBoundsError.md), [*@minecraft/common.InvalidArgumentError*](../../../scriptapi/minecraft/common/InvalidArgumentError.md), [*InvalidStructureError*](InvalidStructureError.md)

### **placeJigsaw**
`
placeJigsaw(pool: string, targetJigsaw: string, maxDepth: number, dimension: Dimension, location: Vector3, options?: JigsawPlaceOptions): BlockBoundingBox
`

Places a partial jigsaw structure in the world. This is useful for debugging connections between jigsaw blocks.

#### **Parameters**
- **pool**: *string*
  
  The identifier of the template pool to start from.
- **targetJigsaw**: *string*
  
  The name of the jigsaw block to start from. This block must be included in at least one of the starting pool structure templates.
- **maxDepth**: *number*
  
  The maximum recursion depth for the jigsaw structure.
- **dimension**: [*Dimension*](Dimension.md)
  
  The dimension to place the jigsaw structure in.
- **location**: [*Vector3*](Vector3.md)
  
  The location where the jigsaw structure will begin generating relative to the targetJigsaw block.
- **options**?: [*JigsawPlaceOptions*](JigsawPlaceOptions.md) = `null`
  
  Optional settings to use when generating the jigsaw structure.

**Returns** [*BlockBoundingBox*](BlockBoundingBox.md) - Returns a [*@minecraft/server.BlockBoundingBox*](../../../priorscriptapi/minecraft/server-1xx/BlockBoundingBox.md) object which represents the maximum bounds of the jigsaw structure.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*PlaceJigsawError*](PlaceJigsawError.md)

### **placeJigsawStructure**
`
placeJigsawStructure(identifier: string, dimension: Dimension, location: Vector3, options?: JigsawStructurePlaceOptions): BlockBoundingBox
`

Places a jigsaw structure in the world.

#### **Parameters**
- **identifier**: *string*
  
  The identifier of the jigsaw structure.
- **dimension**: [*Dimension*](Dimension.md)
  
  The dimension to place the jigsaw structure in.
- **location**: [*Vector3*](Vector3.md)
  
  The location where the jigsaw structure will begin generating. Note that the y value will be overridden by the structure's start height unless the ignoreStarJigsawStructurePlaceOptions ignoreStartHeight option is set.
- **options**?: [*JigsawStructurePlaceOptions*](JigsawStructurePlaceOptions.md) = `null`
  
  Optional settings to use when generating the jigsaw structure.

**Returns** [*BlockBoundingBox*](BlockBoundingBox.md) - Returns a [*@minecraft/server.BlockBoundingBox*](../../../priorscriptapi/minecraft/server-1xx/BlockBoundingBox.md) object which represents the maximum bounds of the jigsaw structure.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*PlaceJigsawError*](PlaceJigsawError.md)
