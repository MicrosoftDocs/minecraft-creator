---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.Camera Class
description: Contents of the @minecraft/server.Camera class.
---
# Camera Class

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
setCamera(cameraPreset: string, setOptions?: CameraDefaultOptions | CameraFixedBoomOptions | CameraSetFacingOptions | CameraSetLocationOptions | CameraSetPosOptions | CameraSetRotOptions): void
`

Sets the current active camera for the specified player.

#### **Parameters**
- **cameraPreset**: *string*
  
  Identifier of a camera preset file defined within JSON.
- **setOptions**?: [*CameraDefaultOptions*](CameraDefaultOptions.md) | [*CameraFixedBoomOptions*](CameraFixedBoomOptions.md) | [*CameraSetFacingOptions*](CameraSetFacingOptions.md) | [*CameraSetLocationOptions*](CameraSetLocationOptions.md) | [*CameraSetPosOptions*](CameraSetPosOptions.md) | [*CameraSetRotOptions*](CameraSetRotOptions.md) = `null`
  
  Additional options for the camera.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
