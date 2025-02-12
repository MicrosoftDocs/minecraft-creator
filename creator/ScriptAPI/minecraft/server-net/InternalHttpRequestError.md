---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: .InternalHttpRequestError Class
description: Contents of the .InternalHttpRequestError class.
---
# InternalHttpRequestError Class

## Extends
- *Error*

An error thrown when a platform-level HTTP error occurs.  Information provided in this class may be useful for diagnostics purposes but will differ from platform to platform.

## Properties

### **code**
`read-only code: number;`

The platform-provided numeric error code for the error.

Type: *number*

### **message**
`read-only message: string;`

The platform-provided message for the error.

Type: *string*
