---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BlockStates Class
description: Contents of the @minecraft/server.BlockStates class.
---
# BlockStates Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Enumerates all [*@minecraft/server.BlockStateType*](../../minecraft/server/BlockStateType.md)s.

## Methods
- [get](#get)
- [getAll](#getall)

### **get**
`
static "get"(stateName: string): BlockStateType
`

Retrieves a specific block state instance.

#### **Parameters**
- **stateName**: *string*

#### **Returns** [*BlockStateType*](BlockStateType.md)

### **getAll**
`
static getAll(): BlockStateType[]
`

Retrieves a set of all available block states.

#### **Returns** [*BlockStateType*](BlockStateType.md)[]
