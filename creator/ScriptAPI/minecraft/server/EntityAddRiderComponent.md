---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityAddRiderComponent Class
description: Contents of the @minecraft/server.EntityAddRiderComponent class.
---
# EntityAddRiderComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*EntityComponent*](EntityComponent.md)

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

### **componentId**
`static read-only componentId = "minecraft:addrider";`

Identifier of this component. Should always be minecraft:addrider.

Type: *string*
