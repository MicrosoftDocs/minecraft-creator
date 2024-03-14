---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityTypes Class
description: Contents of the @minecraft/server.EntityTypes class.
---
# EntityTypes Class

Used for accessing all entity types currently available for use within the world.

## Methods
- [get](#get)
- [getAll](#getall)

### **get**
`
static "get"(identifier: string): EntityType | undefined
`

Retrieves an entity type using a string-based identifier.

#### **Parameters**
- **identifier**: *string*

**Returns** [*EntityType*](EntityType.md) | *undefined*

### **getAll**
`
static getAll(): EntityType[]
`

Retrieves a set of all entity types within this world.

**Returns** [*EntityType*](EntityType.md)[]
