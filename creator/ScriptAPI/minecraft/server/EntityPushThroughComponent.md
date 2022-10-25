---
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityPushThroughComponent Class
description: Contents of the @minecraft/server.EntityPushThroughComponent class.
---
# EntityPushThroughComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*IEntityComponent*](IEntityComponent.md)

Sets the distance through which the entity can push through.

## Properties

### **typeId**
`read-only typeId: string;`

Identifier of this component. Should always be minecraft:push_through.

Type: *string*

### **value**
`value: number;`

The value of the entity's push-through, in blocks.

Type: *number*

## Constants

### **componentId**
`static read-only componentId = "minecraft:push_through";`

Identifier of this component. Should always be minecraft:push_through.

Type: *string*
