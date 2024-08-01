---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.BlockIdentifierObservableValidator Class
description: Contents of the @minecraft/server-editor.BlockIdentifierObservableValidator class.
---
# BlockIdentifierObservableValidator Class

Validates observable objects that support string as BlockType

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
new BlockIdentifierObservableValidator(defaultName: string)
`

Constructs a new instance of the `BlockIdentifierObservableValidator` class

#### **Parameters**
- **defaultName**: *string*

**Returns** *BlockIdentifierObservableValidator*

### **validate**
`
validate(newValue: string): string
`

#### **Parameters**
- **newValue**: *string*

**Returns** *string*
