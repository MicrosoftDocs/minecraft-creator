---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Tameable Class
description: Contents of the Minecraft.Tameable class.
---
# Tameable Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Defines the rules for a mob to be tamed by the player.

## Properties
### **id** - `string`
Identifier of this component. Should always be minecraft:tameable.


### **probability** - `number`
The chance of taming the entity with each item use between 0.0 and 1.0, where 1.0 is 100%


### **tameItems** - `any[]`
The list of items that can be used to tame this entity.


### **tameEvent** - `Trigger`
Event to run when this entity becomes tamed.



## Methods
- [tame](#tame)
  
### **tame**
`
tame(): boolean
`

Tames this entity.

Returns *boolean* - Returns true if the entity was tamed.

> [!WARNING]
> This function can throw errors.

