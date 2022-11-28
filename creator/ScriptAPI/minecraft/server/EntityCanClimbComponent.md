---
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityCanClimbComponent Class
description: Contents of the @minecraft/server.EntityCanClimbComponent class.
---
# EntityCanClimbComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*IEntityComponent*](IEntityComponent.md)

When added, this component signifies that the entity can climb up ladders.

## Properties

### **typeId**
`read-only typeId: string;`

Identifier of this component. Should always be minecraft:can_climb.

Type: *string*

## Constants

### **componentId**
`static read-only componentId = "minecraft:can_climb";`

Identifier of this component. Should always be minecraft:can_climb.

Type: *string*