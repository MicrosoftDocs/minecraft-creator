---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.StructureManager Class
description: Contents of the @minecraft/server.StructureManager class.
monikerRange: "=minecraft-bedrock-experimental"
---
# StructureManager Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Methods
- [createEmpty](#createempty)
- [createFromWorld](#createfromworld)
- [delete](#delete)
- [get](#get)
- [place](#place)

### **createEmpty**
`
createEmpty(identifier: string, size: Vector3, saveMode?: StructureSaveMode): Structure
`

#### **Parameters**
- **identifier**: *string*
- **size**: [*Vector3*](Vector3.md)
- **saveMode**?: [*StructureSaveMode*](StructureSaveMode.md) = `1`

#### **Returns** [*Structure*](Structure.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*@minecraft/common.EngineError*](../../minecraft/common/EngineError.md), [*@minecraft/common.InvalidArgumentError*](../../minecraft/common/InvalidArgumentError.md)

### **createFromWorld**
`
createFromWorld(identifier: string, dimension: Dimension, blockVolume: BlockVolume, options?: StructureCreateOptions): Structure
`

#### **Parameters**
- **identifier**: *string*
- **dimension**: [*Dimension*](Dimension.md)
- **blockVolume**: [*BlockVolume*](BlockVolume.md)
- **options**?: [*StructureCreateOptions*](StructureCreateOptions.md) = `null`

#### **Returns** [*Structure*](Structure.md)

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

#### **Parameters**
- **structure**: *string* | [*Structure*](Structure.md)

#### **Returns** *boolean*

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

#### **Parameters**
- **identifier**: *string*

#### **Returns** [*Structure*](Structure.md) | *undefined*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **place**
`
place(structure: string | Structure, dimension: Dimension, location: Vector3, options?: StructurePlaceOptions): void
`

#### **Parameters**
- **structure**: *string* | [*Structure*](Structure.md)
- **dimension**: [*Dimension*](Dimension.md)
- **location**: [*Vector3*](Vector3.md)
- **options**?: [*StructurePlaceOptions*](StructurePlaceOptions.md) = `null`

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws [*@minecraft/common.ArgumentOutOfBoundsError*](../../minecraft/common/ArgumentOutOfBoundsError.md), [*@minecraft/common.InvalidArgumentError*](../../minecraft/common/InvalidArgumentError.md), [*InvalidStructureError*](InvalidStructureError.md)
