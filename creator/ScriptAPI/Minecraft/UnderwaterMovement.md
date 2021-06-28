---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.UnderwaterMovement Class
description: Contents of the Minecraft.UnderwaterMovement class.
---
# UnderwaterMovement Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Defines the general movement speed underwater of this entity.

## Properties
### **id** - `string`
Identifier of this component. Should always be minecraft:underwater_movement.


### **value** - `number`
Value for movement speed underwater as defined through entity components.


### **current** - `number`
Read-only. Returns the current value of movement speed underwater for the entity.



## Methods
- [setCurrent](#setcurrent)
- [resetToMinValue](#resettominvalue)
- [resetToMaxValue](#resettomaxvalue)
- [resetToDefaultValue](#resettodefaultvalue)
  
### **setCurrent**
`
setCurrent(): void
`

Sets the current value of movement speed underwater for the entity.


> [!WARNING]
> This function can throw errors.

### **resetToMinValue**
`
resetToMinValue(): void
`

Resets the movement speed underwater to the minimum value as defined by the component state of this entity.


> [!WARNING]
> This function can throw errors.

### **resetToMaxValue**
`
resetToMaxValue(): void
`

Resets the movement speed underwater to the maximum value for the entity, as determined by the set of components that are on the entity.


> [!WARNING]
> This function can throw errors.

### **resetToDefaultValue**
`
resetToDefaultValue(): void
`

Resets the current movement speed underwater for the entity to the default value implied by the current component state of the entity.


> [!WARNING]
> This function can throw errors.

