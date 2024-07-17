---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.Vector3LimitObservableValidator Class
description: Contents of the @minecraft/server-editor.Vector3LimitObservableValidator class.
---
# Vector3LimitObservableValidator Class

Validates min/max limits of observable objects that support Vector3

## Properties

### **_max**
`_max: Partial<Vector3>;`

Type: *Partial<Vector3>*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **_min**
`_min: Partial<Vector3>;`

Type: *Partial<Vector3>*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

## Methods
- [constructor](#(constructor))
- [updateLimits](#updatelimits)
- [validate](#validate)

### **constructor**
`
new Vector3LimitObservableValidator(min: Partial<Vector3>, max: Partial<Vector3>)
`

Constructs a new instance of the `Vector3LimitObservableValidator` class

#### **Parameters**
- **min**: *Partial<Vector3>*
- **max**: *Partial<Vector3>*

**Returns** *Vector3LimitObservableValidator*

### **updateLimits**
`
updateLimits(min: Partial<Vector3>, max: Partial<Vector3>): void
`

#### **Parameters**
- **min**: *Partial<Vector3>*
- **max**: *Partial<Vector3>*

**Returns** *void*

### **validate**
`
validate(newValue: Vector3): Vector3
`

#### **Parameters**
- **newValue**: *Vector3*

**Returns** *Vector3*
