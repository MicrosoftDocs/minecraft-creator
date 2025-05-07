---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.EntityAddRiderComponent Class
description: Contents of the @minecraft/server.EntityAddRiderComponent class (Version 1.x.x).
---
# EntityAddRiderComponent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/EntityAddRiderComponent.md).

## Extends
- [*EntityComponent*](EntityComponent.md)

When added, this component makes the entity spawn with a rider of the specified entityType.

## Properties

### **entityType**
`read-only entityType: string;`

The type of entity that is added as a rider for this entity when spawned under certain conditions.

Type: *string*

Notes:
  - This property can throw errors when used.

### **spawnEvent**
`read-only spawnEvent: string;`

Optional spawn event to trigger on the rider when that rider is spawned for this entity.

Type: *string*

Notes:
  - This property can throw errors when used.

## Constants

### **componentId**
`static read-only componentId = "minecraft:addrider";`

Type: *string*
