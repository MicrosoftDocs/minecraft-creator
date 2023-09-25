---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: minecraft/server.EntityTypes Class
description: Contents of the @minecraft/server.EntityTypes class.
ms.service: minecraft-bedrock-edition
---
# EntityTypes Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Used for accessing all entity types currently available for use within the world.

## Methods
- [get](#get)
- [getAll](#getall)

### **get**
`
static "get"(identifier: string): EntityType
`

Retrieves an entity type using a string-based identifier.

#### **Parameters**
- **identifier**: *string*

#### **Returns** [*EntityType*](EntityType.md)

### **getAll**
`
static getAll(): EntityTypeIterator
`

Retrieves an iterator of all entity types within this world.

#### **Returns** [*EntityTypeIterator*](EntityTypeIterator.md)
