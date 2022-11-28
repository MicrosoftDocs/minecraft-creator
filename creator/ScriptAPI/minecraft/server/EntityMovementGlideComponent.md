---
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityMovementGlideComponent Class
description: Contents of the @minecraft/server.EntityMovementGlideComponent class.
---
# EntityMovementGlideComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*IEntityComponent*](IEntityComponent.md)

When added, this movement control allows the mob to glide.

## Properties

### **maxTurn**
`read-only maxTurn: number;`

The maximum number in degrees the mob can turn per tick.

Type: *number*

### **speedWhenTurning**
`read-only speedWhenTurning: number;`

Speed in effect when the entity is turning.

Type: *number*

### **startSpeed**
`read-only startSpeed: number;`

Start speed during a glide.

Type: *number*

### **typeId**
`read-only typeId: string;`

Identifier of this component. Should always be minecraft:movement.glide.

Type: *string*

## Constants

### **componentId**
`static read-only componentId = "minecraft:movement.glide";`

Identifier of this component. Should always be minecraft:movement.glide.

Type: *string*
