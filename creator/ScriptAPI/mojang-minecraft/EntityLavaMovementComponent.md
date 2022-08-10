---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityLavaMovementComponent Class
description: Contents of the mojang-minecraft.EntityLavaMovementComponent class.
---
# EntityLavaMovementComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*IEntityComponent*](IEntityComponent.md)

Defines the base movement speed in lava of this entity.

## Properties

### **current**
`read-only current: number;`

Read-only. Returns the current value of movement speed on lava for the entity.

Type: *number*

### **value**
`read-only value: number;`

Value for movement speed on lava as defined through entity components.

Type: *number*

## Methods
- [resetToDefaultValue](#resettodefaultvalue)
- [resetToMaxValue](#resettomaxvalue)
- [resetToMinValue](#resettominvalue)
- [setCurrent](#setcurrent)

### **resetToDefaultValue**
`
resetToDefaultValue(): void
`
Resets the current movement speed on lava for the entity to its default value.
> [!WARNING]
> This function can throw errors.

### **resetToMaxValue**
`
resetToMaxValue(): void
`
Resets the movement speed on lava to the maximum value for the entity.
> [!WARNING]
> This function can throw errors.

### **resetToMinValue**
`
resetToMinValue(): void
`
Resets the movement speed on lava speed to the minimum value.
> [!WARNING]
> This function can throw errors.

### **setCurrent**
`
setCurrent(value: number): void
`
Sets the current value of movement speed on lava for the entity.

#### **Parameters**
- **value**: *number*
> [!WARNING]
> This function can throw errors.

## Constants

### **id**
`static read-only id = "minecraft:lava_movement";`

Identifier of this component. Should always be minecraft:lava_movement.

Type: *string*
