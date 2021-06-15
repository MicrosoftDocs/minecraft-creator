---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.BeforeActivatePistonEvent Class
description: Contents of the Minecraft.BeforeActivatePistonEvent class.
---
# BeforeActivatePistonEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Contains information related to changes before a piston expands or retracts.

## Properties
### **piston** - `BlockPistonComponent`
Contains additional properties and details of the piston.


### **isExpanding** - `boolean`
True if the piston is the process of expanding.


### **cancel** - `boolean`
If this is set to true within an event handler, the piston activation is canceled.



