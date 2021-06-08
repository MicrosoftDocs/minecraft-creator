---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Inventory Class
description: Contents of the Minecraft.Inventory class.
---
# Inventory Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Defines this entity's inventory properties.

## Properties
### **additionalSlotsPerStrength** - `number`
Number of slots that this entity can gain per extra strength.


### **canBeSiphonedFrom** - `boolean`
If true, the contents of this inventory can be removed by a hopper.


### **containerType** - `string`
Type of container this entity has.


### **inventorySize** - `number`
Number of slots the container has.


### **private** - `boolean`
If true, the entity will not drop it's inventory on death.


### **restrictToOwner** - `boolean`
If true, the entity's inventory can only be accessed by its owner or itself.


### **container** - `InventoryComponentContainer`
Defines the interactions with this entity for healing it.



