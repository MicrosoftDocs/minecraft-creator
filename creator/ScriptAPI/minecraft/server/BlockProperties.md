---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BlockProperties Class
description: Contents of the @minecraft/server.BlockProperties class.
---
# BlockProperties Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Returns an enumeration of available block properties.

## Methods
- [get](#get)
- [getAll](#getall)

### **get**
`
static "get"(propertyName: string): BlockPropertyType
`

Retrieves a specific block property instance.

#### **Parameters**
- **propertyName**: *string*

#### **Returns** [*BlockPropertyType*](BlockPropertyType.md)

### **getAll**
`
static getAll(): BlockPropertyType[]
`

Retrieves a set of all available block properties.

#### **Returns** [*BlockPropertyType*](BlockPropertyType.md)[]
