---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.Structure Class
description: Contents of the @minecraft/server.Structure class.
monikerRange: "=minecraft-bedrock-experimental"
---
# Structure Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Properties

### **id**
`read-only id: string;`

Type: *string*

### **size**
`read-only size: Vector3;`

Type: [*Vector3*](Vector3.md)

> [!WARNING]
> This property can throw errors when used.
>
> Throws [*InvalidStructureError*](InvalidStructureError.md)

## Methods
- [getBlockPermutation](#getblockpermutation)
- [getIsWaterlogged](#getiswaterlogged)
- [isValid](#isvalid)
- [saveAs](#saveas)
- [saveToWorld](#savetoworld)
- [setBlockPermutation](#setblockpermutation)

### **getBlockPermutation**
`
getBlockPermutation(location: Vector3): BlockPermutation | undefined
`

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)

#### **Returns** [*BlockPermutation*](BlockPermutation.md) | *undefined*

> [!WARNING]
> This function can throw errors.
>
> Throws [*@minecraft/common.InvalidArgumentError*](../../minecraft/common/InvalidArgumentError.md), [*InvalidStructureError*](InvalidStructureError.md)

### **getIsWaterlogged**
`
getIsWaterlogged(location: Vector3): boolean
`

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.
>
> Throws [*@minecraft/common.InvalidArgumentError*](../../minecraft/common/InvalidArgumentError.md), [*InvalidStructureError*](InvalidStructureError.md)

### **isValid**
`
isValid(): boolean
`

#### **Returns** *boolean*

### **saveAs**
`
saveAs(identifier: string, saveMode?: StructureSaveMode): Structure
`

#### **Parameters**
- **identifier**: *string*
- **saveMode**?: [*StructureSaveMode*](StructureSaveMode.md) = `1`

#### **Returns** [*Structure*](Structure.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*@minecraft/common.EngineError*](../../minecraft/common/EngineError.md), [*@minecraft/common.InvalidArgumentError*](../../minecraft/common/InvalidArgumentError.md), [*InvalidStructureError*](InvalidStructureError.md)

### **saveToWorld**
`
saveToWorld(): void
`

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*InvalidStructureError*](InvalidStructureError.md)

### **setBlockPermutation**
`
setBlockPermutation(location: Vector3, blockPermutation?: BlockPermutation, waterlogged?: boolean): void
`

#### **Parameters**
- **location**: [*Vector3*](Vector3.md)
- **blockPermutation**?: [*BlockPermutation*](BlockPermutation.md) = `null`
- **waterlogged**?: *boolean* = `false`

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*@minecraft/common.InvalidArgumentError*](../../minecraft/common/InvalidArgumentError.md), [*InvalidStructureError*](InvalidStructureError.md)
