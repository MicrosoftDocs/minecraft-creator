---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityLeashableComponent Class
description: Contents of the mojang-minecraft.EntityLeashableComponent class.
---
# EntityLeashableComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*IEntityComponent*](IEntityComponent.md)

Allows this entity to be leashed and defines the conditions and events for this entity when is leashed.

## Properties

### **softDistance**
`read-only softDistance: number;`

Distance in blocks at which the 'spring' effect starts acting to keep this entity close to the entity that leashed it.

Type: *number*

## Methods
- [leash](#leash)
- [unleash](#unleash)

### **leash**
`
leash(leashHolder: Entity): void
`
Leashes this entity to another entity.

#### **Parameters**
- **leashHolder**: [*Entity*](Entity.md)
  
  The entity to leash this entity to.
> [!WARNING]
> This function can throw errors.

### **unleash**
`
unleash(): void
`
Unleashes this entity if it is leashed to another entity.
> [!WARNING]
> This function can throw errors.

## Constants

### **id**
`static read-only id = "minecraft:leashable";`

Identifier of this component. Should always be minecraft:leashable.

Type: *string*
