---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityHealthChangedAfterEvent Class
description: Contents of the @minecraft/server.EntityHealthChangedAfterEvent class.
---
# EntityHealthChangedAfterEvent Class

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
