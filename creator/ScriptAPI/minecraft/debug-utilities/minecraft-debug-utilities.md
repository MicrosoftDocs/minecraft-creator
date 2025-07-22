---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
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
This is version 1.x.x of this module, which is the latest as of version 1.21.110-beta.20 of Minecraft.

## Available Versions
- `1.0.0-beta`

## Classes
- [DebugArrow](DebugArrow.md)
- [DebugBox](DebugBox.md)
- [DebugCircle](DebugCircle.md)
- [DebugDrawer](DebugDrawer.md)
- [DebugLine](DebugLine.md)
- [DebugShape](DebugShape.md)
- [DebugSphere](DebugSphere.md)
- [DebugText](DebugText.md)

## Interfaces
- [HandleCounts](HandleCounts.md)
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

## Objects
  
### **debugDrawer**
`static read-only debugDrawer: DebugDrawer;`

Debug Drawing class used to allow adding and removing wireframe shapes in world space.

Type: [*DebugDrawer*](DebugDrawer.md)

## Peer Dependencies
- [`@minecraft/common`](../../../scriptapi/minecraft/common/minecraft-common.md)
- [`@minecraft/server`](../../../scriptapi/minecraft/server/minecraft-server.md)
