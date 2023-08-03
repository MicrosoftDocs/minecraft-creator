---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.Camera Class
description: Contents of the @minecraft/server.Camera class.
---
# Camera Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Methods
- [clear](#clear)
- [fade](#fade)
- [setCamera](#setcamera)

### **clear**
`
clear(): void
`

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **fade**
`
fade(fadeCameraOptions?: CameraFadeOptions): void
`

#### **Parameters**
- **fadeCameraOptions**?: [*CameraFadeOptions*](CameraFadeOptions.md) = `null`

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **setCamera**
`
setCamera(cameraPreset: string, setOptions?: ScriptCameraDefaultOptions | ScriptCameraSetFacingOptions | ScriptCameraSetLocationOptions | ScriptCameraSetPosOptions | ScriptCameraSetRotOptions): void
`

#### **Parameters**
- **cameraPreset**: *string*
- **setOptions**?: [*ScriptCameraDefaultOptions*](ScriptCameraDefaultOptions.md) | [*ScriptCameraSetFacingOptions*](ScriptCameraSetFacingOptions.md) | [*ScriptCameraSetLocationOptions*](ScriptCameraSetLocationOptions.md) | [*ScriptCameraSetPosOptions*](ScriptCameraSetPosOptions.md) | [*ScriptCameraSetRotOptions*](ScriptCameraSetRotOptions.md) = `null`

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
