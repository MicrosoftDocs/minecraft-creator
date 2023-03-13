---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityMovementBasicComponent Class
description: Contents of the @minecraft/server.EntityMovementBasicComponent class.
---
# EntityMovementBasicComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*EntityComponent*](EntityComponent.md)

This component accents the movement of an entity.

## Properties

### **maxTurn**
`read-only maxTurn: number;`

The maximum number in degrees the mob can turn per tick.

Type: *number*

## Constants

### **componentId**
`static read-only componentId = "minecraft:movement.basic";`

Identifier of this component. Should always be minecraft:movement.basic.

Type: *string*
