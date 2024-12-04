---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/debug-utilities Module
description: Contents of the @minecraft/debug-utilities module
monikerRange: "=minecraft-bedrock-experimental"
---
# `@minecraft/debug-utilities` Module

Contains debug utility functions.

> [!CAUTION]
> This module is still in pre-release.  It may change or it may be removed in future releases.

## [Changelog](changelog.md)

## Manifest Details
```json
{
    "module_name": "@minecraft/debug-utilities",
    "version": "1.0.0-beta"
}
```

## Available Versions
- `1.0.0-beta`

## Interfaces
- [handleCounts](handleCounts.md)
- [PluginStats](PluginStats.md)
- [RuntimeStats](RuntimeStats.md)

## Functions

### **collectPluginStats**
`
collectPluginStats(): PluginStats
`

Collect type usage stats for each active script plugin/add-on.

**Returns** [*PluginStats*](PluginStats.md) - PluginStats object.

### **collectRuntimeStats**
`
collectRuntimeStats(): RuntimeStats
`

Collect memory stats for script runtimes.

**Returns** [*RuntimeStats*](RuntimeStats.md) - RuntimeStats object.

### **disableWatchdogTimingWarnings**
`
disableWatchdogTimingWarnings(disable: boolean): void
`

Disable watchdog slow and spike warnings per plugin.

#### **Parameters**
- **disable**: *boolean*
  
  Flag to disable or re-enable warnings.
  
Notes:
- This function can throw errors.
