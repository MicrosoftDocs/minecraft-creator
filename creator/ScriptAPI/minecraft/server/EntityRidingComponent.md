---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityRidingComponent Class
description: Contents of the @minecraft/server.EntityRidingComponent class.
---
# EntityRidingComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*EntityComponent*](EntityComponent.md)

This component is added to any entity when it is riding another entity.

## Properties

### **entityRidingOn**
`read-only entityRidingOn: Entity;`

The entity this entity is currently riding on.

Type: [*Entity*](Entity.md)

## Constants

### **componentId**
`static read-only componentId = "minecraft:riding";`

Identifier of this component. Should always be minecraft:riding.

Type: *string*
