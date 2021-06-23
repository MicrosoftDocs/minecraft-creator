---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Movement Class
description: Contents of the Minecraft.Movement class.
---
# Movement Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Defines the general movement speed of this entity.

## Properties
### **id** - `string`
Identifier of this component. Should always be minecraft:movement.


### **value** - `number`
Value for default movement speed as defined through entity components.


### **current** - `number`
Read-only. Returns the current value of default movement speed for the entity.



## Methods
- [setCurrent](#setcurrent)
- [resetToMinValue](#resettominvalue)
- [resetToMaxValue](#resettomaxvalue)
- [resetToDefaultValue](#resettodefaultvalue)
  
### **setCurrent**
`
setCurrent(): void
`

Sets the current value of default movement speed for the entity.


> [!WARNING]
> This function can throw errors.

### **resetToMinValue**
`
resetToMinValue(): void
`

Resets the default movement speed to the minimum value.


> [!WARNING]
> This function can throw errors.

### **resetToMaxValue**
`
resetToMaxValue(): void
`

Resets the default movement speed to the maximum value for the entity.


> [!WARNING]
> This function can throw errors.

### **resetToDefaultValue**
`
resetToDefaultValue(): void
`

Resets the current default movement speed value for the entity to the default value.


> [!WARNING]
> This function can throw errors.

