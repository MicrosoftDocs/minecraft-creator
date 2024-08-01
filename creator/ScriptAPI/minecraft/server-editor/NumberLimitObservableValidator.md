---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.NumberLimitObservableValidator Class
description: Contents of the @minecraft/server-editor.NumberLimitObservableValidator class.
---
# NumberLimitObservableValidator Class

Validates min/max limits of observable objects that support number

## Properties

### **_isInteger**
`_isInteger: boolean;`

Type: *boolean*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **_max**
`_max: number;`

Type: *number*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **_min**
`_min: number;`

Type: *number*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

## Methods
- [constructor](#(constructor))
- [updateLimits](#updatelimits)
- [validate](#validate)

### **constructor**
`
new NumberLimitObservableValidator(min: number | undefined, max: number | undefined, isInteger: boolean)
`

Constructs a new instance of the `NumberLimitObservableValidator` class

#### **Parameters**
- **min**: *number | undefined*
- **max**: *number | undefined*
- **isInteger**: *boolean*

**Returns** *NumberLimitObservableValidator*

### **updateLimits**
`
updateLimits(min: number | undefined, max: number | undefined): void
`

#### **Parameters**
- **min**: *number | undefined*
- **max**: *number | undefined*

**Returns** *void*

### **validate**
`
validate(newValue: number): number
`

#### **Parameters**
- **newValue**: *number*

**Returns** *number*
