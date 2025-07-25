---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.NumberLimitObservableValidator Class
description: Contents of the @minecraft/server-editor.NumberLimitObservableValidator class.
---
# NumberLimitObservableValidator Class

Validates min/max limits of observable objects that support number

## Properties

### **_isInteger**
`_isInteger?: boolean;`

Type: *boolean*

Notes:
  - This property can't be used in read-only mode.

### **_max**
`_max?: number;`

Type: *number*

Notes:
  - This property can't be used in read-only mode.

### **_min**
`_min?: number;`

Type: *number*

Notes:
  - This property can't be used in read-only mode.

## Methods
- [constructor](#(constructor))
- [updateLimits](#updatelimits)
- [validate](#validate)

### **constructor**
`
new NumberLimitObservableValidator(min: number | void, max: number | void, isInteger?: boolean)
`

Constructs a new instance of the `NumberLimitObservableValidator` class

#### **Parameters**
- **min**: *number* | *void*
- **max**: *number* | *void*
- **isInteger**?: *boolean*

**Returns** *NumberLimitObservableValidator*

### **updateLimits**
`
updateLimits(min: number | void, max: number | void): void
`

#### **Parameters**
- **min**: *number* | *void*
- **max**: *number* | *void*

**Returns** *void*

### **validate**
`
validate(newValue: number): number
`

#### **Parameters**
- **newValue**: *number*

**Returns** *number*
