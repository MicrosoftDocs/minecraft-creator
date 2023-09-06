---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: minecraft/server.EntityLoadAfterEvent Class
description: Contents of the @minecraft/server.EntityLoadAfterEvent class.
ms.service: minecraft-bedrock-edition
---
# EntityLoadAfterEvent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains data related to an entity loaded within the world. This could happen when an unloaded chunk is reloaded, or when an entity changes dimensions.

## Properties

### **entity**
`entity: Entity;`

Entity that was loaded.

Type: [*Entity*](Entity.md)
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.
