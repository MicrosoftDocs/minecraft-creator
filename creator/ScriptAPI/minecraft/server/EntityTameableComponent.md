---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityTameableComponent Class
description: Contents of the @minecraft/server.EntityTameableComponent class.
---
# EntityTameableComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*EntityComponent*](EntityComponent.md)

Defines the rules for an entity to be tamed by the player.

## Properties

### **probability**
`read-only probability: number;`

The chance of taming the entity with each item use between 0.0 and 1.0, where 1.0 is 100%

Type: *number*

## Methods
- [getTameItems](#gettameitems)
- [tame](#tame)

### **getTameItems**
`
getTameItems(): string[]
`

Returns a set of items that can be used to tame this entity.

#### **Returns** *string*[]

> [!WARNING]
> This function can throw errors.

### **tame**
`
tame(): boolean
`

Tames this entity.

#### **Returns** *boolean* - Returns true if the entity was tamed.

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:tameable";`

Identifier of this component. Should always be minecraft:tameable.

Type: *string*
