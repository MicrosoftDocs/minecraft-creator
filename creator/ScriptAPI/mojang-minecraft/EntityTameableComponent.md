---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityTameableComponent Class
description: Contents of the mojang-minecraft.EntityTameableComponent class.
---
# EntityTameableComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*IEntityComponent*](IEntityComponent.md)

Defines the rules for a mob to be tamed by the player.

## Properties

### **probability**
`read-only probability: number;`

The chance of taming the entity with each item use between 0.0 and 1.0, where 1.0 is 100%

Type: *number*

### **tameEvent**
`read-only tameEvent: Trigger;`

Event to run when this entity becomes tamed.

Type: [*Trigger*](Trigger.md)

### **tameItems**
`read-only tameItems: string[];`

The list of items that can be used to tame this entity.

Type: *string*[]

## Methods
- [tame](#tame)

### **tame**
`
tame(): boolean
`
Tames this entity.

#### **Returns** *boolean* - Returns true if the entity was tamed.
> [!WARNING]
> This function can throw errors.

## Constants

### **id**
`static read-only id = "minecraft:tameable";`

Identifier of this component. Should always be minecraft:tameable.

Type: *string*
