---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.BlockStates Class
description: Contents of the @minecraft/server.BlockStates class.
---
# BlockStates Class

Enumerates all [*@minecraft/server.BlockStateType*](../../minecraft/server/BlockStateType.md)s.

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

**Returns** [*BlockStateType*](BlockStateType.md) | *undefined* - Returns the [*@minecraft/server.Block*](../../minecraft/server/Block.md) state instance if it is found. If the block state instance is not found returns undefined.

### **getAll**
`
static getAll(): BlockStateType[]
`

Retrieves a set of all available block states.

**Returns** [*BlockStateType*](BlockStateType.md)[]
