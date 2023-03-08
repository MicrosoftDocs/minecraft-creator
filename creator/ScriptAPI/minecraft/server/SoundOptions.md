---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.SoundOptions Interface
description: Contents of the @minecraft/server.SoundOptions class.
---
# SoundOptions Interface
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.

Additional configuration options for the [*@minecraft/server.Player.playSound*](../../minecraft/server/Player.md#playsound)/[*@minecraft/server.World.playSound*](../../minecraft/server/World.md#playsound) method.

## Properties

### **location**
`location?: Vector3;`

Specifies a location of where to play a particular sound.

Type: [*Vector3*](Vector3.md)

### **pitch**
`pitch?: number;`

Pitch adjustment level for the sound.

Type: *number*

### **volume**
`volume?: number;`

Relative volume level of the sound.

Type: *number*
