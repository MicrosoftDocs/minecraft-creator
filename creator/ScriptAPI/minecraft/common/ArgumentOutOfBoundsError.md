---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: .ArgumentOutOfBoundsError Class
description: Contents of the .ArgumentOutOfBoundsError class.
---
# ArgumentOutOfBoundsError Class

## Extends
- *Error*

This type of error is thrown when a parameter to a method or property is out of expected bounds.

## Properties

### **maxValue**
`read-only maxValue: number;`

Max expected value for the condition.

Type: *number*

### **minValue**
`read-only minValue: number;`

Min expected value for the condition.

Type: *number*

### **value**
`read-only value: number;`

Passed-in value for the argument.

Type: *number*
