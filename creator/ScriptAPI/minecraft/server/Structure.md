---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.Structure Class
description: Contents of the @minecraft/server.Structure class.
---
# Structure Class

Represents a loaded structure template (.mcstructure file). Structures can be placed in a world using the /structure command or the [*@minecraft/server.StructureManager*](../../../scriptapi/minecraft/server/StructureManager.md) APIs.

## Properties

### **id**
`read-only id: string;`

The name of the structure. The identifier must include a namespace. For structures created via the /structure command or structure blocks, this namespace defaults to "mystructure".

Type: *string*

### **isValid**
`read-only isValid: boolean;`

Returns whether the Structure is valid. The Structure may become invalid if it is deleted.

Type: *boolean*

### **size**
`read-only size: Vector3;`

The dimensions of the structure. For example, a single block structure will have a size of {x:1, y:1, z:1}

Type: [*Vector3*](Vector3.md)

Notes:
  - This property can throw errors when used.
    - Throws [*InvalidStructureError*](InvalidStructureError.md)

## Methods
- [getBlockPermutation](#getblockpermutation)
- [getIsWaterlogged](#getiswaterlogged)
- [saveAs](#saveas)
- [saveToWorld](#savetoworld)
- [setBlockPermutation](#setblockpermutation)

### **getBlockPermutation**
`
getBlockPermutation(location: Vector3): BlockPermutation | undefined
`

Returns a BlockPermutation representing the block contained within the Structure at the given location.

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)
  
  The block location relative to the Structure's origin.

**Returns** [*BlockPermutation*](BlockPermutation.md) | *undefined* - Returns a BlockPermutation. Returns undefined if a block does not exist at the given location.
  
Notes:
- This function can throw errors.
  - Throws [*@minecraft/common.InvalidArgumentError*](../../../scriptapi/minecraft/common/InvalidArgumentError.md), [*InvalidStructureError*](InvalidStructureError.md)

### **getIsWaterlogged**
`
getIsWaterlogged(location: Vector3): boolean
`

Returns whether the block at the given location is waterlogged.

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)
  
  The block location relative to the Structure's origin.

**Returns** *boolean* - Returns whether the block at the given location is waterlogged. Returns false if a block does not exist at the given location.
  
Notes:
- This function can throw errors.
  - Throws [*@minecraft/common.InvalidArgumentError*](../../../scriptapi/minecraft/common/InvalidArgumentError.md), [*InvalidStructureError*](InvalidStructureError.md)

### **saveAs**
`
saveAs(identifier: string, saveMode?: StructureSaveMode): Structure
`

Creates a copy of a Structure and saves it with a new name.

#### **Parameters**
- **identifier**: *string*
  
  The name of the newly created Structure.
- **saveMode**?: [*StructureSaveMode*](StructureSaveMode.md) = `1`
  
  Determines how the Structure should be saved. Defaults to saving to the world.

**Returns** [*Structure*](Structure.md) - Returns the newly created structure.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/common.EngineError*](../../../scriptapi/minecraft/common/EngineError.md), [*@minecraft/common.InvalidArgumentError*](../../../scriptapi/minecraft/common/InvalidArgumentError.md), [*InvalidStructureError*](InvalidStructureError.md)

### **saveToWorld**
`
saveToWorld(): void
`

Saves a modified Structure to the world file.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*InvalidStructureError*](InvalidStructureError.md)

### **setBlockPermutation**
`
setBlockPermutation(location: Vector3, blockPermutation?: BlockPermutation, waterlogged?: boolean): void
`

Sets a BlockPermutation within a Structure.

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)
  
  The block location relative to the Structure's origin.
- **blockPermutation**?: [*BlockPermutation*](BlockPermutation.md) = `null`
  
  The BlockPermutation to set.
- **waterlogged**?: *boolean* = `false`
  
  Specifies whether the block should be waterlogged. Air and undefined blocks cannot be waterlogged.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/common.InvalidArgumentError*](../../../scriptapi/minecraft/common/InvalidArgumentError.md), [*InvalidStructureError*](InvalidStructureError.md)
