---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.EntityDataDrivenTriggerEventOptions Interface
description: Contents of the @minecraft/server.EntityDataDrivenTriggerEventOptions class (Version 1.x.x).
---
# EntityDataDrivenTriggerEventOptions Interface (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/EntityDataDrivenTriggerEventOptions.md).

Specifies additional filters that are used in registering a data driven trigger event for entities.

## Properties

### **entities**
`entities?: Entity[];`

If this value is set, this event will only fire for entities that match the entities within this collection.

Type: [*Entity*](Entity.md)[]

### **entityTypes**
`entityTypes?: string[];`

If this value is set, this event will only fire if the impacted entities' type matches this parameter.

Type: *string*[]

### **eventTypes**
`eventTypes?: string[];`

If this value is set, this event will only fire if the impacted triggered event matches one of the events listed in this parameter.

Type: *string*[]
