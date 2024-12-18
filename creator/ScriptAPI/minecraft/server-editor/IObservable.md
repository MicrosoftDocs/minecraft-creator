---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IObservable Interface
description: Contents of the @minecraft/server-editor.IObservable class.
---
# IObservable Interface

Represents a stateful value that can be observed by different objects.

## Properties

### **validator**
`read-only validator: ObservableValidator<T>;`

Optional validator that will pre-process the new value.

Type: *ObservableValidator<T>*

### **value**
`read-only value: Readonly<T>;`

Current value of the observable.

Type: *Readonly<T>*

## Methods
- [set](#set)

### **set**
`
set(newValue: T): boolean
`

Updates the value and notifies dependent objects.

#### **Parameters**
- **newValue**: *T*
  
  New value to be set (will be processed by the validator if it exists).

**Returns** *boolean*
