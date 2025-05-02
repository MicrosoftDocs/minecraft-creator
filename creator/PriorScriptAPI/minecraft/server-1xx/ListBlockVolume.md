---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.ListBlockVolume Class
description: Contents of the @minecraft/server.ListBlockVolume class (Version 1.x.x).
---
# ListBlockVolume Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/ListBlockVolume.md).

## Extends
- [*BlockVolumeBase*](BlockVolumeBase.md)

Volume composed of an unordered container of unique block locations.

## Methods
- [constructor](#constructor)
- [add](#add)
- [remove](#remove)

### **constructor**
`
new ListBlockVolume(locations: Vector3[])
`

Creates a new instance of ListBlockVolume.

#### **Parameters**
- **locations**: [*Vector3*](Vector3.md)[]
  
  Initial array of block locations that ListBlockVolume will be constructed with.

**Returns** [*ListBlockVolume*](ListBlockVolume.md)

### **add**
`
add(locations: Vector3[]): void
`

Insert block locations into container.

#### **Parameters**
- **locations**: [*Vector3*](Vector3.md)[]
  
  Array of block locations to be inserted into container.

### **remove**
`
remove(locations: Vector3[]): void
`

Remove block locations from container.

#### **Parameters**
- **locations**: [*Vector3*](Vector3.md)[]
  
  Array of block locations to be removed from container.
