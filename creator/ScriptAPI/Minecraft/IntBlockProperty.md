---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.IntBlockProperty Class
description: Contents of the Minecraft.IntBlockProperty class.
---
# IntBlockProperty Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Contains the state of an integer-based property for a [BlockPermutation](BlockPermutation.md).

## Properties
### **value** - `number`
The current value of this property.

> [!WARNING]
> Setting this property can throw if the value passed is not valid for the property. Use [StringBlockProperty](StringBlockProperty.md).validValues to check allowed values.

### **validValues** - `number[]`



### **name** - `string`




