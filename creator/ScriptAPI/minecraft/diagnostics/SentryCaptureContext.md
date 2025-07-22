---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/diagnostics.SentryCaptureContext Interface
description: Contents of the @minecraft/diagnostics.SentryCaptureContext class.
---
# SentryCaptureContext Interface

Context relating to a captured exception that should be sent to Sentry.

## Properties

### **extraData**
`extraData?: Record<string, boolean | number | string>;`

Additional data that should be sent with the exception.

Type: Record<*string*, *boolean* | *number* | *string*>

### **level**
`level?: SentryEventLevel;`

The indicated level of severity of the captured exception.

Type: [*SentryEventLevel*](SentryEventLevel.md)

### **tags**
`tags?: Record<string, string>;`

Additional tags that should be sent with the exception.

Type: Record<*string*, *string*>
