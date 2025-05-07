---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.EntityHealthChangedAfterEvent Class
description: Contents of the @minecraft/server.EntityHealthChangedAfterEvent class (Version 1.x.x).
---
# EntityHealthChangedAfterEvent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/EntityHealthChangedAfterEvent.md).

Contains information related to an entity when its health changes. Warning: don't change the health of an entity in this event, or it will cause an infinite loop!

## Properties

### **entity**
`read-only entity: Entity;`

Entity whose health changed.

Type: [*Entity*](Entity.md)

### **newValue**
`read-only newValue: number;`

New health value of the entity.

Type: *number*

### **oldValue**
`read-only oldValue: number;`

Old health value of the entity.

Type: *number*
