---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.FeedItem Class
description: Contents of the Minecraft.FeedItem class.
---
# FeedItem Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

As part of the Healable component, represents a specific item that can be fed to an entity to cause health effects.

## Properties
### **effects** - `FeedItemEffect[]`
As part of the Healable component, an optional collection of side effects that can occur from being fed an item.


### **healAmount** - `number`
The amount of health this entity gains when fed this item. This number is an integer starting at 0. Sample values can go as high as 40.


### **item** - `string`
Identifier of type of item that can be fed. If a namespace is not specified, 'minecraft:' is assumed. Example values include 'wheat' or 'golden_apple'.



