---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Healable Class
description: Contents of the Minecraft.Healable class.
---
# Healable Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Defines the interactions with this entity for healing it.

## Properties
### **id** - `string`
Identifier of this component. Should always be minecraft:healable.


### **filters** - `FilterGroup`
A set of filters for when these Healable items would apply.


### **forceUse** - `boolean`
Determines if an item can be used regardless of the entity being at full health.


### **items** - `FeedItem[]`
A set of items that can specifically heal this entity.



