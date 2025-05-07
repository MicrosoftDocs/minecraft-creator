---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.EntityRemoveBeforeEvent Class
description: Contents of the @minecraft/server.EntityRemoveBeforeEvent class (Version 1.x.x).
---
# EntityRemoveBeforeEvent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/EntityRemoveBeforeEvent.md).

Data for an event that happens when an entity is being removed from the world (for example, the entity is unloaded because it is not close to players.)

## Properties

### **removedEntity**
`read-only removedEntity: Entity;`

Reference to an entity that is being removed.

Type: [*Entity*](Entity.md)
