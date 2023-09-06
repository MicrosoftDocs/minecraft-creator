---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: minecraft/server.Camera Class
description: Contents of the @minecraft/server.Camera class.
ms.service: minecraft-bedrock-edition
---
# Camera Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains methods relating to the active camera for the specified player.

## Methods
- [clear](#clear)
- [fade](#fade)
- [setCamera](#setcamera)

### **clear**
`
clear(): void
`

Clears the active camera for the specified player. Causes the specified players to end any in-progress camera perspectives, including any eased camera motions, and return to their normal perspective.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **fade**
`
fade(fadeCameraOptions?: CameraFadeOptions): void
`

Begins a camera fade transition. A fade transition is a full-screen color that fades-in, holds, and then fades-out.

#### **Parameters**
- **fadeCameraOptions**?: [*CameraFadeOptions*](CameraFadeOptions.md) = `null`
  
  Additional options around camera fade operations.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **setCamera**
`
setCamera(cameraPreset: string, setOptions?: ScriptCameraDefaultOptions | ScriptCameraSetFacingOptions | ScriptCameraSetLocationOptions | ScriptCameraSetPosOptions | ScriptCameraSetRotOptions): void
`

Sets the current active camera for the specified player.

#### **Parameters**
- **cameraPreset**: *string*
  
  Identifier of a camera preset file defined within JSON.
- **setOptions**?: [*ScriptCameraDefaultOptions*](ScriptCameraDefaultOptions.md) | [*ScriptCameraSetFacingOptions*](ScriptCameraSetFacingOptions.md) | [*ScriptCameraSetLocationOptions*](ScriptCameraSetLocationOptions.md) | [*ScriptCameraSetPosOptions*](ScriptCameraSetPosOptions.md) | [*ScriptCameraSetRotOptions*](ScriptCameraSetRotOptions.md) = `null`
  
  Additional options for the camera.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
