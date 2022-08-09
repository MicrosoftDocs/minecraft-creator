---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityAddRiderComponent Class
description: Contents of the mojang-minecraft.EntityAddRiderComponent class.
---
# EntityAddRiderComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*IEntityComponent*](IEntityComponent.md)

When added, this component makes the entity spawn with a rider of the specified entityType.

## Properties

### **entityType**
`read-only entityType: string;`

The type of entity that is added as a rider for this entity when spawned under certain conditions.

Type: *string*

### **spawnEvent**
`read-only spawnEvent: string;`

Optional spawn event to trigger on the rider when that rider is spawned for this entity.

Type: *string*

## Constants

### **id**
`static read-only id = "minecraft:addrider";`

Identifier of this component. Should always be minecraft:addrider.

Type: *string*
