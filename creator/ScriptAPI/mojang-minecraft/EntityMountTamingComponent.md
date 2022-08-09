---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityMountTamingComponent Class
description: Contents of the mojang-minecraft.EntityMountTamingComponent class.
---
# EntityMountTamingComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*IEntityComponent*](IEntityComponent.md)

Contains options for taming a rideable entity based on the entity that mounts it.

## Methods
- [setTamed](#settamed)

### **setTamed**
`
setTamed(showParticles: boolean): void
`
Sets this rideable entity as tamed.

#### **Parameters**
- **showParticles**: *boolean*
  
  Whether to show effect particles when this entity is tamed.
> [!WARNING]
> This function can throw errors.

## Constants

### **id**
`static read-only id = "minecraft:tamemount";`

Identifier of this component. Should always be minecraft:mount_taming.

Type: *string*
