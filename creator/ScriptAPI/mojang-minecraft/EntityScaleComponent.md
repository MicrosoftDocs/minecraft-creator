---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityScaleComponent Class
description: Contents of the mojang-minecraft.EntityScaleComponent class.
---
# EntityScaleComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*IEntityComponent*](IEntityComponent.md)

Sets the entity's visual size.

## Properties
### **id**
`read-only id: string;`

Identifier of this component. Should always be minecraft:scale.

Type: *string*

### **value**
`value: number;`

The value of the scale. 1.0 means the entity will appear at the scale they are defined in their model. Higher numbers make the entity bigger.

Type: *number*

