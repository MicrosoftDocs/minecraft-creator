---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-net.InternalHttpRequestError Class
description: Contents of the @minecraft/server-net.InternalHttpRequestError class.
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

Notes:
  - This property can be read in early-execution mode.

### **message**
`read-only message: string;`

The platform-provided message for the error.

Type: *string*

Notes:
  - This property can be read in early-execution mode.
