---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Health Class
description: Contents of the Minecraft.Health class.
---
# Health Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Defines the health properties of an entity.

## Properties
### **id** - `string`
Identifier of this component. Should always be minecraft:health.


### **value** - `number`
Value for health as defined through entity components.


### **current** - `number`
Read-only. Returns the current value of health for the entity.



## Methods
- [setCurrent](#setcurrent)
- [resetToMinValue](#resettominvalue)
- [resetToMaxValue](#resettomaxvalue)
- [resetToDefaultValue](#resettodefaultvalue)
  
### **setCurrent**
`
setCurrent(): void
`

Sets the current health of the entity.


> [!WARNING]
> This function can throw errors.

### **resetToMinValue**
`
resetToMinValue(): void
`

Resets the current health to the minimum value.


> [!WARNING]
> This function can throw errors.

### **resetToMaxValue**
`
resetToMaxValue(): void
`

Resets the current health of the entity to its maximum value.


> [!WARNING]
> This function can throw errors.

### **resetToDefaultValue**
`
resetToDefaultValue(): void
`

Resets the current health value of the entity to its default value.


> [!WARNING]
> This function can throw errors.

