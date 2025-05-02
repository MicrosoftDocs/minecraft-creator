---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.BlockStates Class
description: Contents of the @minecraft/server.BlockStates class (Version 1.x.x).
---
# BlockStates Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/BlockStates.md).

Enumerates all [*@minecraft/server.BlockStateType*](../../../priorscriptapi/minecraft/server-1xx/BlockStateType.md)s.

## Methods
- [get](#get)
- [getAll](#getall)

### **get**
`
static "get"(stateName: string): BlockStateType | undefined
`

Retrieves a specific block state instance.

#### **Parameters**
- **stateName**: *string*

**Returns** [*BlockStateType*](BlockStateType.md) | *undefined* - Returns the [*@minecraft/server.Block*](../../../priorscriptapi/minecraft/server-1xx/Block.md) state instance if it is found. If the block state instance is not found returns undefined.

### **getAll**
`
static getAll(): BlockStateType[]
`

Retrieves a set of all available block states.

**Returns** [*BlockStateType*](BlockStateType.md)[]
