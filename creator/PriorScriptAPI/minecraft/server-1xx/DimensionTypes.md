---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.DimensionTypes Class
description: Contents of the @minecraft/server.DimensionTypes class (Version 1.x.x).
---
# DimensionTypes Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/DimensionTypes.md).

Used for accessing all available dimension types.

## Methods
- [get](#get)
- [getAll](#getall)

### **get**
`
static "get"(dimensionTypeId: string): DimensionType | undefined
`

Retrieves a dimension type using a string-based identifier.

#### **Parameters**
- **dimensionTypeId**: *string*

**Returns** [*DimensionType*](DimensionType.md) | *undefined*
  
Notes:
- This function can be called in early-execution mode.

### **getAll**
`
static getAll(): DimensionType[]
`

Retrieves an array of all dimension types.

**Returns** [*DimensionType*](DimensionType.md)[]
  
Notes:
- This function can be called in early-execution mode.
