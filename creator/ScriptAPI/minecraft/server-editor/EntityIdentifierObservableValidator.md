---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.EntityIdentifierObservableValidator Class
description: Contents of the @minecraft/server-editor.EntityIdentifierObservableValidator class.
---
# EntityIdentifierObservableValidator Class

Validates observable objects that support string as EntityType

## Properties

### **_defaultValue**
`_defaultValue: string;`

Type: *string*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **defaultValue**
`read-only defaultValue: string;`

Type: *string*

## Methods
- [constructor](#(constructor))
- [validate](#validate)

### **constructor**
`
new EntityIdentifierObservableValidator(defaultValue: string)
`

Constructs a new instance of the `EntityIdentifierObservableValidator` class

#### **Parameters**
- **defaultValue**: *string*

**Returns** *EntityIdentifierObservableValidator*

### **validate**
`
validate(newValue: string): string
`

#### **Parameters**
- **newValue**: *string*

**Returns** *string*
