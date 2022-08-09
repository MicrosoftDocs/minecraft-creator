---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityUnderwaterMovementComponent Class
description: Contents of the mojang-minecraft.EntityUnderwaterMovementComponent class.
---
# EntityUnderwaterMovementComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*IEntityComponent*](IEntityComponent.md)

Defines the general movement speed underwater of this entity.

## Properties

### **current**
`read-only current: number;`

Read-only. Returns the current value of movement speed underwater for the entity.

Type: *number*

### **value**
`read-only value: number;`

Value for movement speed underwater as defined through entity components.

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
Resets the current movement speed underwater for the entity to the default value implied by the current component state of the entity.
> [!WARNING]
> This function can throw errors.

### **resetToMaxValue**
`
resetToMaxValue(): void
`
Resets the movement speed underwater to the maximum value for the entity, as determined by the set of components that are on the entity.
> [!WARNING]
> This function can throw errors.

### **resetToMinValue**
`
resetToMinValue(): void
`
Resets the movement speed underwater to the minimum value as defined by the component state of this entity.
> [!WARNING]
> This function can throw errors.

### **setCurrent**
`
setCurrent(value: number): void
`
Sets the current value of movement speed underwater for the entity.

#### **Parameters**
- **value**: *number*
> [!WARNING]
> This function can throw errors.

## Constants

### **id**
`static read-only id = "minecraft:underwater_movement";`

Identifier of this component. Should always be minecraft:underwater_movement.

Type: *string*
