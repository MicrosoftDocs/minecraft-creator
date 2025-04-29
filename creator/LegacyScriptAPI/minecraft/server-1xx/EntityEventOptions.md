---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.EntityEventOptions Interface
description: Contents of the @minecraft/server.EntityEventOptions class (Version 1.x.x).
---
# EntityEventOptions Interface (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/EntityEventOptions.md).

Contains optional parameters for registering an entity event.

## Properties

### **entities**
`entities?: Entity[];`

If this value is set, this event will only fire for entities that match the entities within this collection.

Type: [*Entity*](Entity.md)[]

### **entityTypes**
`entityTypes?: string[];`

If this value is set, this event will only fire if the impacted entities' type matches this parameter.

Type: *string*[]
