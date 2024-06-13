---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.StructureManager Class
description: Contents of the @minecraft/server.StructureManager class.
---
# StructureManager Class

Manager for Structure related APIs. Includes APIs for creating, getting, placing and deleting Structures.

## Methods
- [createEmpty](#createempty)
- [createFromWorld](#createfromworld)
- [delete](#delete)
- [get](#get)
- [getWorldStructureIds](#getworldstructureids)
- [place](#place)

### **createEmpty**
`
createEmpty(identifier: string, size: Vector3, saveMode?: StructureSaveMode): Structure
`

Creates an empty Structure in memory. Use [*@minecraft/server.Structure.setBlockPermutation*](../../minecraft/server/Structure.md#setblockpermutation) to populate the structure with blocks and save changes with [*@minecraft/server.Structure.saveAs*](../../minecraft/server/Structure.md#saveas).

#### **Parameters**
- **identifier**: *string*
  
  The name of the structure. A valid identifier must include a namespace and must be unique.
- **size**: [*Vector3*](Vector3.md)
  
  The size of the structure. For example, to create a single block structure the size should be {x:1, y:1, z:1}.
- **saveMode**?: [*StructureSaveMode*](StructureSaveMode.md) = `0`
  
  How the Structure should be saved upon creation. Defaults to StructureSaveMode.Memory.

**Returns** [*Structure*](Structure.md) - Returns the newly created Structure.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*@minecraft/common.EngineError*](../../minecraft/common/EngineError.md), [*@minecraft/common.InvalidArgumentError*](../../minecraft/common/InvalidArgumentError.md)

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

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*@minecraft/common.InvalidArgumentError*](../../minecraft/common/InvalidArgumentError.md)

### **delete**
`
"delete"(structure: string | Structure): boolean
`

Deletes a structure from memory and from the world if it exists.

#### **Parameters**
- **structure**: *string* | [*Structure*](Structure.md)
  
  The structure identifier or Structure object that should be deleted. Note, a Structure object will become invalid after it is deleted.

**Returns** *boolean* - Returns whether the structure was removed.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*@minecraft/common.InvalidArgumentError*](../../minecraft/common/InvalidArgumentError.md)

### **get**
`
"get"(identifier: string): Structure | undefined
`

Gets a Structure that is saved to memory or the world.

#### **Parameters**
- **identifier**: *string*
  
  The name of the structure to get.

**Returns** [*Structure*](Structure.md) | *undefined* - Returns a Structure if it exists, otherwise undefined.

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getWorldStructureIds**
`
getWorldStructureIds(): string[]
`

**Returns** *string*[]

> [!IMPORTANT]
> This function can't be called in read-only mode.

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

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*@minecraft/common.ArgumentOutOfBoundsError*](../../minecraft/common/ArgumentOutOfBoundsError.md), [*@minecraft/common.InvalidArgumentError*](../../minecraft/common/InvalidArgumentError.md), [*InvalidStructureError*](InvalidStructureError.md)
