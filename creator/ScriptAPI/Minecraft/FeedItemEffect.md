---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.FeedItemEffect Class
description: Contents of the Minecraft.FeedItemEffect class.
---
# FeedItemEffect Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.


## Properties
### **amplifier** - `number`
Gets an amplifier that may have been applied to this effect. Valid values are integers starting at 0 and up - but usually ranging between 0 and 4.


### **chance** - `number`
Chance that this effect is applied as a result of the entity being fed this item. Valid values range between 0 and 1.


### **duration** - `number`
Gets the duration, in seconds, of this effect.


### **name** - `string`
Gets the identifier of the effect to apply. Example values include 'fire_resistance' or 'regeneration'.



