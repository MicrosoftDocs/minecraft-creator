---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.DimensionTypes Class
description: Contents of the @minecraft/server.DimensionTypes class.
---
# DimensionTypes Class

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

### **getAll**
`
static getAll(): DimensionType[]
`

Retrieves an array of all dimension types.

**Returns** [*DimensionType*](DimensionType.md)[]
