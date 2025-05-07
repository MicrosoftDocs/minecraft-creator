---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.InvalidEntityError Class
description: Contents of the @minecraft/server.InvalidEntityError class (Version 1.x.x).
---
# InvalidEntityError Class (Version 1.x.x)

## Extends
- *Error*

The error called when an entity is invalid. This can occur when accessing components on a removed entity.

## Properties

### **id**
`read-only id: string;`

The id of the entity that is now invalid.

Type: *string*

Notes:
  - This property can be read in early-execution mode.

### **type**
`read-only type: string;`

The type of the entity that is now invalid.

Type: *string*

Notes:
  - This property can be read in early-execution mode.
