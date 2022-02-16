---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityVariantComponent Class
description: Contents of the mojang-minecraft.EntityVariantComponent class.
---
# EntityVariantComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*IEntityComponent*](IEntityComponent.md)

Used to differentiate the component group of a variant of an entity from others. (e.g. ocelot, villager).

## Properties
### **id**
`read-only id: string;`

Identifier of this component. Should always be minecraft:variant.

Type: *string*


### **value**
`value: number;`

The identifier of the variant. By convention, 0 is the identifier of the base entity.

Type: *number*


