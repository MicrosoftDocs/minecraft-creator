---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.EntityTypes Class
description: Contents of the @minecraft/server.EntityTypes class.
---
# EntityTypes Class

Used for accessing all entity types currently available for use within the world.

## Methods
::: moniker range="=minecraft-bedrock-experimental"
- [get](#get)
::: moniker-end
- [getAll](#getall)
::: moniker range="=minecraft-bedrock-stable"
- [get](#get)
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **get**
`
static "get"(identifier: EntityIdentifierType<NoInfer<T>>): EntityType | void
`

Retrieves an entity type using a string-based identifier.

#### **Parameters**
- **identifier**: *EntityIdentifierType<NoInfer<T>>*

**Returns** *EntityType* | *void*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

### **getAll**
`
static getAll(): EntityType[]
`

Retrieves a set of all entity types within this world.

**Returns** [*EntityType*](EntityType.md)[]

::: moniker range="=minecraft-bedrock-stable"
### **get**
`
static "get"(identifier: string): EntityType | undefined
`

Retrieves an entity type using a string-based identifier.

#### **Parameters**
- **identifier**: *string*

**Returns** [*EntityType*](EntityType.md) | *undefined*
::: moniker-end
