---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityOnFireComponent Class
description: Contents of the @minecraft/server.EntityOnFireComponent class.
---
# EntityOnFireComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*EntityComponent*](EntityComponent.md)

When present on an entity, this entity is on fire.

## Properties

### **onFireTicksRemaining**
`read-only onFireTicksRemaining: number;`

The number of ticks remaining before the fire goes out.

Type: *number*

## Constants

### **componentId**
`static read-only componentId = "minecraft:onfire";`

Type: *string*
