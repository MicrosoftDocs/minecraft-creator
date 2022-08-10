---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityTypes Class
description: Contents of the mojang-minecraft.EntityTypes class.
---
# EntityTypes Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Used for accessing all entity types currently available for use within the world.

## Methods
- [get](#get)
- [getAll](#getall)

### **get**
`
get(identifier: string): EntityType
`
Retrieves an entity type using a string-based identifier.

#### **Parameters**
- **identifier**: *string*

#### **Returns** [*EntityType*](EntityType.md)

### **getAll**
`
getAll(): EntityTypeIterator
`
Retrieves an iterator of all entity types within this world.

#### **Returns** [*EntityTypeIterator*](EntityTypeIterator.md)
