---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityStrengthComponent Class
description: Contents of the mojang-minecraft.EntityStrengthComponent class.
---
# EntityStrengthComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.


Defines the entity's strength to carry items.

## Properties
### **id**
`read-only id: string;`

Identifier of this component. Should always be minecraft:strength.

Type: *string*


### **max**
`read-only max: number;`

Maximum strength of this entity, as defined in the entity type definition.

Type: *number*


### **value**
`read-only value: number;`

Current strength value of this entity, after any effects or component updates are applied.

Type: *number*




