---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/diagnostics Module
description: Contents of the @minecraft/diagnostics module
monikerRange: "=minecraft-bedrock-experimental"
---
# `@minecraft/diagnostics` Module

Contains diagnostics functionality for discovering and diagnosing issues with content.

> [!CAUTION]
> This module is still in pre-release.  It may change or it may be removed in future releases.

## [Changelog](changelog.md)

## Manifest Details
```json
{
    "module_name": "@minecraft/diagnostics",
    "version": "1.0.0-beta"
}
```

## Available Versions
- `1.0.0-beta`

## Enumerations
- [SentryBreadcrumbLevel](SentryBreadcrumbLevel.md)

## Classes
- [Sentry](Sentry.md)

## Interfaces
- [SentryOptions](SentryOptions.md)

## Errors
- [SentryAlreadyInitializedError](SentryAlreadyInitializedError.md)
- [SentryUninitializedError](SentryUninitializedError.md)

## Objects
  
### **sentry**
`static read-only sentry: Sentry;`

A class that allows hooking up reporting to Sentry.  See https://sentry.io/ for more information.

Type: [*Sentry*](Sentry.md)
