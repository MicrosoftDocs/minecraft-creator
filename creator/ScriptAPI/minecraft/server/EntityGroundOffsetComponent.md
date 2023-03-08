---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityGroundOffsetComponent Class
description: Contents of the @minecraft/server.EntityGroundOffsetComponent class.
---
# EntityGroundOffsetComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*EntityComponent*](EntityComponent.md)

Sets the offset from the ground that the entity is actually at.

## Properties

### **value**
`value: number;`

The value of the entity's offset from the terrain, in blocks.

Type: *number*

## Constants

### **componentId**
`static read-only componentId = "minecraft:ground_offset";`

Identifier of this component. Should always be minecraft:ground_offset.

Type: *string*
