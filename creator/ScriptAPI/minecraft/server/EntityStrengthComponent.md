---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityStrengthComponent Class
description: Contents of the @minecraft/server.EntityStrengthComponent class.
---
# EntityStrengthComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*EntityComponent*](EntityComponent.md)

Defines the entity's strength to carry items.

## Properties

### **max**
`read-only max: number;`

Maximum strength of this entity, as defined in the entity type definition.

Type: *number*

### **value**
`read-only value: number;`

Current strength value of this entity, after any effects or component updates are applied.

Type: *number*

## Constants

### **componentId**
`static read-only componentId = "minecraft:strength";`

Identifier of this component. Should always be minecraft:strength.

Type: *string*
