---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.EntityLoadAfterEvent Class
description: Contents of the @minecraft/server.EntityLoadAfterEvent class (Version 1.x.x).
---
# EntityLoadAfterEvent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/EntityLoadAfterEvent.md).

Contains data related to an entity loaded within the world. This could happen when an unloaded chunk is reloaded, or when an entity changes dimensions.

## Properties

### **entity**
`entity: Entity;`

Entity that was loaded.

Type: [*Entity*](Entity.md)

Notes:
  - This property can't be edited in read-only mode.
