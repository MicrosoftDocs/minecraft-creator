---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityAttributeComponent Class
description: Contents of the @minecraft/server.EntityAttributeComponent class.
---
# EntityAttributeComponent Class

## Extends
- [*EntityComponent*](EntityComponent.md)

## Classes that extend EntityAttributeComponent
- [*EntityHealthComponent*](EntityHealthComponent.md)
- [*EntityLavaMovementComponent*](EntityLavaMovementComponent.md)
- [*EntityMovementComponent*](EntityMovementComponent.md)
- [*EntityUnderwaterMovementComponent*](EntityUnderwaterMovementComponent.md)

This is a base abstract class for any entity component that centers around a number and can have a minimum, maximum, and default defined value.

## Properties

### **currentValue**
`read-only currentValue: number;`

Current value of this attribute for this instance.

Type: *number*

> [!WARNING]
> This property can throw errors when used.

### **defaultValue**
`read-only defaultValue: number;`

Returns the default defined value for this attribute.

Type: *number*

> [!WARNING]
> This property can throw errors when used.

### **effectiveMax**
`read-only effectiveMax: number;`

Returns the effective max of this attribute given any other ambient components or factors.

Type: *number*

> [!WARNING]
> This property can throw errors when used.

### **effectiveMin**
`read-only effectiveMin: number;`

Returns the effective min of this attribute given any other ambient components or factors.

Type: *number*

> [!WARNING]
> This property can throw errors when used.

## Methods
- [resetToDefaultValue](#resettodefaultvalue)
- [resetToMaxValue](#resettomaxvalue)
- [resetToMinValue](#resettominvalue)
- [setCurrentValue](#setcurrentvalue)

### **resetToDefaultValue**
`
resetToDefaultValue(): void
`

Resets the current value of this attribute to the defined default value.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **resetToMaxValue**
`
resetToMaxValue(): void
`

Resets the current value of this attribute to the maximum defined value.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **resetToMinValue**
`
resetToMinValue(): void
`

Resets the current value of this attribute to the minimum defined value.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **setCurrentValue**
`
setCurrentValue(value: number): boolean
`

Sets the current value of this attribute. The provided value will be clamped to the range of this attribute.

#### **Parameters**
- **value**: *number*

**Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
