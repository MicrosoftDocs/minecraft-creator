---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityTypes Class
description: Contents of the @minecraft/server.EntityTypes class.
---
# EntityTypes Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
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
