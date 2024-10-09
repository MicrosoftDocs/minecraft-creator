---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: .InvalidEntityError Class
description: Contents of the .InvalidEntityError class.
monikerRange: "=minecraft-bedrock-experimental"
---
# InvalidEntityError Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- *Error*

The error called when an entity is invalid. This can occur when accessing components on a removed entity.

## Properties

### **id**
`read-only id: string;`

The id of the entity that is now invalid.

Type: *string*

### **type**
`read-only type: string;`

The type of the entity that is now invalid.

Type: *string*
