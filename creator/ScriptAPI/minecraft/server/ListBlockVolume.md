---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ListBlockVolume Class
description: Contents of the @minecraft/server.ListBlockVolume class.
monikerRange: "=minecraft-bedrock-experimental"
---
# ListBlockVolume Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*BlockVolumeBase*](BlockVolumeBase.md)

## Methods
- [constructor](#constructor)
- [add](#add)
- [remove](#remove)

### **constructor**
`
new ListBlockVolume(locations: Vector3[])
`

#### **Parameters**
- **locations**: [*Vector3*](Vector3.md)[]

**Returns** [*ListBlockVolume*](ListBlockVolume.md)

### **add**
`
add(locations: Vector3[]): void
`

#### **Parameters**
- **locations**: [*Vector3*](Vector3.md)[]

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **remove**
`
remove(locations: Vector3[]): void
`

#### **Parameters**
- **locations**: [*Vector3*](Vector3.md)[]

> [!IMPORTANT]
> This function can't be called in read-only mode.
