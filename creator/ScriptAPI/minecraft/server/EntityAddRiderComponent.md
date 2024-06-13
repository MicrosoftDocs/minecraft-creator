---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityAddRiderComponent Class
description: Contents of the @minecraft/server.EntityAddRiderComponent class.
---
# EntityAddRiderComponent Class

## Extends
- [*EntityComponent*](EntityComponent.md)

When added, this component makes the entity spawn with a rider of the specified entityType.

## Properties

### **entityType**
`read-only entityType: string;`

The type of entity that is added as a rider for this entity when spawned under certain conditions.

Type: *string*

> [!WARNING]
> This property can throw errors when used.

### **spawnEvent**
`read-only spawnEvent: string;`

Optional spawn event to trigger on the rider when that rider is spawned for this entity.

Type: *string*

> [!WARNING]
> This property can throw errors when used.

## Constants

### **componentId**
`static read-only componentId = "minecraft:addrider";`

Type: *string*
